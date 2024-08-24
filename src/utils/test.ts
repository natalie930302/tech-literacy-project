import { Client } from "@notionhq/client";
import {
  QueryDatabaseResponse,
  PageObjectResponse,
  GetPageResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { it } from "node:test";

const NOTION_TOKEN = "secret_K9vqhq6PQAU3DQeORJlvfkLjewO705JFte468OhD37S";
const ROUTE_DATABASE_ID = "e307409c4b0e484990cac544adc7045e";
const EVENT_DATABASE_ID = "9906e37b57174ba480763436231a579e";
const COURSE_DATABASE_ID = "e5c022bbbebd4822ab112a3c0a34d8c3";
const PARTNER_DATABASE_ID = "f914dff9ec88465dab55d2a69060fc00";

const notion = new Client({
  auth: NOTION_TOKEN,
});

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const rateLimitedRequest = async <T>(request: () => Promise<T>): Promise<T> => {
  while (true) {
    try {
      return await request();
    } catch (error: any) {
      if (error.status === 429) {
        const retryAfter = parseInt(error.headers["retry-after"]) || 1;
        console.warn(`Rate limited. Retrying after ${retryAfter} seconds.`);
        await delay(retryAfter * 1000);
      } else {
        throw error;
      }
    }
  }
};

const filterAndExtractProperties = async (properties: any): Promise<any> => {
  const result: any = {};
  for (const key in properties) {
    if (properties[key].type === "relation") {
      if (properties[key].relation.length > 0) {
        await Promise.all(
          properties[key].relation.map(async (item: any) => {
            const pageDetails = await getPageDetails(item.id);
            result[item.id] = pageDetails;
          })
        );
      }
    } else if (properties[key].type === "title") {
      result[key] = properties[key].title
        .map((item: any) => item.plain_text)
        .join("");
    } else if (properties[key].type === "rich_text") {
      result[key] = properties[key].rich_text
        .map((item: any) => item.plain_text)
        .join("");
    } else {
      result[key] = properties[key];
    }
  }
  return result;
};

const getPageDetails = async (id: string): Promise<any> => {
  const response: GetPageResponse = await rateLimitedRequest(() =>
    notion.pages.retrieve({
      page_id: id,
    })
  );
  if ("properties" in response) {
    return (response as PageObjectResponse).properties;
  }
  return {};
};

const getRouteDatabase = async (): Promise<any[]> => {
  const response: QueryDatabaseResponse = await rateLimitedRequest(() =>
    notion.databases.query({
      database_id: ROUTE_DATABASE_ID,
    })
  );

  const propertiesData = await Promise.all(
    response.results
      .filter((result): result is PageObjectResponse => "properties" in result)
      .map(async (result: PageObjectResponse) => {
        const properties = filterAndExtractProperties(result.properties);
        return properties;
      })
  );

  return propertiesData;
};

export { getRouteDatabase };
