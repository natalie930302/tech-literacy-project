import { Client } from "@notionhq/client";
import { data } from "autoprefixer";
import pLimit from "p-limit";

// Notion 客戶端初始化
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// 設置並發請求數量限制
const limit = pLimit(100);

// 設置快取機制
const cache: Map<string, { data: any; timestamp: number }> = new Map();
const CACHE_TTL = 1000 * 60 * 5; // 5 分鐘

// 提取 Notion 內容的工具函數
const extractContent = (
  contentArray: any[],
  key: string
): string | undefined => {
  return (
    contentArray?.map((item: any) => item[key].content).join("") || undefined
  );
};

// 獲取頁面細節
const getPageDetails = async (id: string, type: string): Promise<any> => {
  const cacheKey = `PageDetail-${id}`;
  const cacheData = checkCache(cacheKey);
  if (cacheData) return cacheData;

  try {
    const response = (await notion.pages.retrieve({ page_id: id })) as any;
    const data = response.properties;

    const result = await (async () => {
      switch (type) {
        case "Article":
          return {
            name: extractContent(data.Name?.title, "text") || "",
            title: extractContent(data.Title?.rich_text, "text") || "",
            description:
              extractContent(data.Description?.rich_text, "text") || "",
            image:
              data.Image?.files.map((file: any) => ({
                name: file.name || "",
                url: file.file.url || "",
              })) || [],
          };
        case "Announcement":
        case "IntroCard":
        case "MeetTheTeam":
        case "MindMap":
        case "QuickLinkCard":
        case "Timeline":
          return {
            name: extractContent(data.Name?.title, "text") || "",
            title: extractContent(data.Title?.rich_text, "text") || "",
            image:
              data.Image?.files.map((file: any) => ({
                name: file.name || "",
                url: file.file.url || "",
              })) || [],
            items: (await extractRelationIds(data.Items, `${type}Item`)) || [],
          };
        case "AnnouncementItem":
        case "IntroCardItem":
        case "MeetTheTeamItem":
        case "MindMapItem":
        case "QuickLinkCardItem":
        case "TimelineItem":
          return {
            title:
              extractContent(data.Title?.title, "text") || "",
            description:
              extractContent(data.Description?.rich_text, "text") || "",
            link:
              extractContent(data.Link?.rich_text, "text") ||
              data.Link?.formula?.string ||
              "",
            image: {
              name: data.Image?.files[0]?.name || "",
              url: data.Image?.files[0]?.file.url || "",
            },
            items:
              (await extractRelationIds(data["Sub-item"], `${type}`)) || [],
            bgClass:
              extractContent(data.BgClass?.rich_text, "text") || undefined,
            shadowClass:
              extractContent(data.ShadowClass?.rich_text, "text") || undefined,
            position:
              extractContent(data.Position?.rich_text, "text") || undefined,
          };
        default:
          return data;
      }
    })();

    cache.set(cacheKey, { data: result, timestamp: Date.now() });
    return result;
  } catch (error) {
    console.error(`Error fetching page details for ${id}:`, error);
    return null;
  }
};

// 提取關聯 ID
const extractRelationIds = async (
  prop?: { relation: { id: string }[] },
  type?: string
): Promise<any[] | undefined> => {
  if (!prop || !prop.relation.length) return undefined;

  const promises = prop.relation.map((rel) =>
    limit(() => getPageDetails(rel.id, type || ""))
  );
  return Promise.all(promises);
};

// 查找路由數據
const findRouteData = async (routePath: string): Promise<any | null> => {
  const cacheKey = `Route-${routePath}`;
  const cacheData = checkCache(cacheKey);
  if (cacheData) return cacheData;

  try {
    const response = (await notion.databases.query({
      database_id: process.env.NOTION_ROUTE_DATABASE_ID || "",
    })) as any;

    const data = response.results.find((result: any) =>
      result.properties.Route?.title.some(
        (title: any) => title.text.content === routePath
      )
    );

    if (!data) return null;

    const result = {
      Route: routePath,
      PageName:
        extractContent(data.properties.PageName?.rich_text, "text") || "",
      Article: await extractRelationIds(data.properties.Article, "Article"),
      Announcement: await extractRelationIds(
        data.properties.Announcement,
        "Announcement"
      ),
      IntroCard: await extractRelationIds(
        data.properties.IntroCard,
        "IntroCard"
      ),
      MeetTheTeam: await extractRelationIds(
        data.properties.MeetTheTeam,
        "MeetTheTeam"
      ),
      MindMap: await extractRelationIds(data.properties.MindMap, "MindMap"),
      QuickLinkCard: await extractRelationIds(
        data.properties.QuickLinkCard,
        "QuickLinkCard"
      ),
      Timeline: await extractRelationIds(data.properties.Timeline, "Timeline"),
    };

    cache.set(cacheKey, { data: result, timestamp: Date.now() });
    return result;
  } catch (error) {
    console.error("Error fetching route data:", error);
    return null;
  }
};

const findCourseData = async (courseId?: string): Promise<any | null> => {
  const cacheKey = courseId
    ? `Course-${courseId}`
    : `Course-all`;
  const cacheData = checkCache(cacheKey);
  if (cacheData) return cacheData;

  try {
    const response = (await notion.databases.query({
      database_id: process.env.NOTION_COURSE_DATABASE_ID || "",
    })) as any;

    const data = response.results.map((result: any) => ({
      Name: extractContent(result.properties.Name?.title, "text") || "",
      Title: extractContent(result.properties.Title?.rich_text, "text") || "",
      Credits: result.properties.Credits?.number || "",
      Type: result.properties.Type?.select?.name || "",
      Year: result.properties.Year?.select?.name || "",
      Category: result.properties.Category?.select?.name || "",
      Notes: extractContent(result.properties.Notes?.rich_text, "text") || "",
      MainImage: {
        name: result.properties.MainImage?.files[0]?.name || "",
        url: result.properties.MainImage?.files[0]?.file.url || "",
      },
      Goals: extractContent(result.properties.Goals?.rich_text, "text") || "",
      Outline:
        extractContent(result.properties.Outline?.rich_text, "text") || "",
      Assessment:
        extractContent(result.properties.Assessment?.rich_text, "text") || "",
      Schedule:
        extractContent(result.properties.Schedule?.rich_text, "text") || "",
      References:
        extractContent(result.properties.References?.rich_text, "text") || "",
      Highlights: result.properties.Highlights?.files.map((file: any) => ({
        name: file.name || "",
        url: file.file.url || "",
      })),
    }));

    const courseIdTransformed =
      courseId?.replace(/\s|-/g, "").toLowerCase() || "";
    const result =
      data.find(
        (course: any) =>
          course.Title.replace(/\s|-/g, "").toLowerCase() ===
          courseIdTransformed
      ) || data;

    cache.set(cacheKey, { data: result, timestamp: Date.now() });
    return result;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};

const findAllActivityData = async (activityType?: string): Promise<any | null> => {
  const cacheKey = activityType ? `Activity-${activityType}` : "Activity-all";
  const cacheData = checkCache(cacheKey);
  if (cacheData) return cacheData;

  try {
    const response = (await notion.databases.query({
      database_id: process.env.NOTION_ACTIVITY_DATABASE_ID || "",
      filter: {
        property: "isVisible",
        checkbox: {
          equals: true,
        },
      },
    })) as any;

    const result = response.results
      .map((result: any) => ({
        title: extractContent(result.properties.Title?.title, "text") || "",
        description:
          extractContent(result.properties.Description?.rich_text, "text") ||
          "",
        type: result.properties.Type?.select?.name || "",
        image:
          result.properties.Image?.files.map((file: any) => ({
            name: file.name || "",
            url: file.file.url || "",
          })) || [],
      }))
      .filter(
        (partner: any) => !activityType || partner.type === activityType
      );

    cache.set(cacheKey, { data: result, timestamp: Date.now() });
    return result;
  } catch (error) {
    console.error("Error fetching partners:", error);
    return [];
  }
};

const findActivityData = async (activityId: string): Promise<any | null> => {
  const cacheKey = `Activity-${activityId}`;
  const cacheData = checkCache(cacheKey);
  if (cacheData) return cacheData;

  try {
    const response = (await notion.databases.query({
      database_id: process.env.NOTION_ACTIVITY_DATABASE_ID || "",
      filter: {
        and: [
          {
            property: "ID",
            number: {
              equals: parseInt(activityId),
            },
          },
          {
            property: "isVisible",
            checkbox: {
              equals: true,
            },
          },
        ],
      },
    })) as any;

    const result = {
      title:
        extractContent(response.results[0]?.properties.Title?.title, "text") ||
        "",
      description:
        extractContent(
          response.results[0]?.properties.Description?.rich_text,
          "text"
        ) || "",
      image:
        response.results[0]?.properties.Image?.files.map((file: any) => ({
          name: file.name || "",
          url: file.file.url || "",
        })) || [],
    };

    cache.set(cacheKey, { data: result, timestamp: Date.now() });
    return result;
  } catch (error) {
    console.error("Error fetching activities:", error);
    return [];
  }
};

const submitComment = async (formData: any) => {
  console.log("Form data:", formData);
  try {
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_COMMENT_DATABASE_ID || "",
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: "Contact Form", // This is the title value
              },
            },
          ],
        },
        Email: {
          email: formData.email || null, // Email should be null if empty
        },
        Message: {
          rich_text: [
            {
              text: {
                content: formData.message || "", // Message content
              },
            },
          ],
        },
        Status: {
          status: {
            name: "Not started", // Make sure this status exists in your database
          },
        },
      },
    });

    if (response) {
      console.log("Form submitted successfully");
      return true;
    } else {
      console.error("Failed to submit form");
      return false;
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return false;
  }
};

const checkCache = (cacheKey: string) => {
  const now = Date.now();
  // 檢查快取
  if (cache.has(cacheKey)) {
    const cached = cache.get(cacheKey)!;
    if (now - cached.timestamp < CACHE_TTL) {
      return cached.data;
    }
    // 移除過期快取
    cache.delete(cacheKey);
  }
  return null;
};

export {
  findRouteData,
  findCourseData,
  findAllActivityData,
  findActivityData,
  submitComment,
};
