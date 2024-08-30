import { Client } from "@notionhq/client";
import pLimit from "p-limit";

console.log("NOTION_API_KEY:", process.env.NOTION_API_KEY);
console.log("NOTION_ROUTE_DATABASE_ID:", process.env.NOTION_ROUTE_DATABASE_ID);
console.log(
  "NOTION_COURSE_DATABASE_ID:",
  process.env.NOTION_COURSE_DATABASE_ID
);

// Notion 客戶端初始化
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// 設置並發請求數量限制
const limit = pLimit(100);

// 設置快取機制
const cache: Map<string, { data: any; timestamp: number }> = new Map();
const CACHE_TTL = 1000 * 60 * 5;

// 獲取頁面細節
const getPageDetails = async (id: string, type: string): Promise<any> => {
  const cacheKey = `${id}-${type}`;
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

  try {
    const response = (await notion.pages.retrieve({
      page_id: id,
    })) as any;
    const data = response.properties;

    const result = (async () => {
      switch (type) {
        case "Article":
          return {
            name: data.Name?.title[0]?.text.content || "",
            title: data.Title?.rich_text[0]?.text.content || "",
            description: data.Description?.rich_text[0]?.text.content || "",
            image: data.Image?.files.map((file: any) => ({
              name: file.name || "",
              url: file.file.url || "",
            })),
          };
        case "Announcement":
          return {
            name: data.Name?.title[0]?.text.content || "",
            title: data.Title?.rich_text[0]?.text.content || "",
            image: data.Image?.files.map((file: any) => ({
              name: file.name || "",
              url: file.file.url || "",
            })),
            items:
              (await extractRelationIds(data.Items, "AnnouncementItem")) || [],
          };
        case "AnnouncementItem":
          return {
            title: data.Title?.title[0]?.text.content || "",
            description: data.Description?.rich_text[0]?.text.content || "",
            link: data.Link?.rich_text[0]?.text.content || "",
          };
        case "IntroCard":
          return {
            name: data.Name?.title[0]?.text.content || "",
            title: data.Title?.rich_text[0]?.text.content || "",
            items:
              (await extractRelationIds(data.Items, "IntroCardItem")) || [],
          };
        case "IntroCardItem":
          return {
            title: data.Title?.title[0]?.text.content || "",
            description: data.Description?.rich_text[0]?.text.content || "",
            image: {
              name: data.Image?.files[0]?.name || "",
              url: data.Image?.files[0]?.file.url || "",
            },
          };
        case "MeetTheTeam":
          return {
            name: data.Name?.title[0]?.text.content || "",
            title: data.Title?.rich_text[0]?.text.content || "",
            items:
              (await extractRelationIds(data.Items, "MeetTheTeamItem")) || [],
          };
        case "MeetTheTeamItem":
          return {
            name: data.Name?.title[0]?.text.content || "",
            title: data.Title?.rich_text[0]?.text.content || "",
            description: data.Description?.rich_text[0]?.text.content || "",
            image: {
              name: data.Image?.files[0]?.name || "",
              url: data.Image?.files[0]?.file.url || "",
            },
          };
        case "MindMap":
          return {
            name: data.Name?.title[0]?.text.content || "",
            title: data.Title?.rich_text[0]?.text.content || "",
            items: (await extractRelationIds(data.Items, "MindMapItem")) || [],
          };
        case "MindMapItem":
          return {
            title: data.Title?.title[0]?.text.content || "",
            link: data.Link?.rich_text[0]?.text.content || "",
            items:
              (await extractRelationIds(data["Sub-item"], "MindMapItem")) || [],
            bgClass: data.BgClass?.rich_text[0]?.text.content || "",
            shadowClass: data.ShadowClass?.rich_text[0]?.text.content || "",
          };
        case "QuickLinkCard":
          return {
            name: data.Name?.title[0]?.text.content || "",
            items:
              (await extractRelationIds(data.Items, "QuickLinkCardItem")) || [],
          };
        case "QuickLinkCardItem":
          return {
            title: data.Title?.title[0]?.text.content || "",
            link: data.Link?.rich_text[0]?.text.content || "",
            image: {
              name: data.Image?.files[0]?.name || "",
              url: data.Image?.files[0]?.file.url || "",
            },
          };
        case "Timeline":
          return {
            name: data.Name?.title[0]?.text.content || "",
            title: data.Title?.rich_text[0]?.text.content || "",
            items: (await extractRelationIds(data.Items, "TimelineItem")) || [],
          };
        case "TimelineItem":
          return {
            title: data.Title?.title[0]?.text.content || "",
            description: data.Description?.rich_text[0]?.text.content || "",
            duration: data.Duration?.rich_text[0]?.text.content || "",
          };
        default:
          return data;
      }
    })();

    // 更新快取
    cache.set(cacheKey, { data: result, timestamp: now });
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

    const getDataPromises = {
      Article: extractRelationIds(data.properties.Article, "Article"),
      Announcement: extractRelationIds(
        data.properties.Announcement,
        "Announcement"
      ),
      IntroCard: extractRelationIds(data.properties.IntroCard, "IntroCard"),
      MeetTheTeam: extractRelationIds(
        data.properties.MeetTheTeam,
        "MeetTheTeam"
      ),
      MindMap: extractRelationIds(data.properties.MindMap, "MindMap"),
      QuickLinkCard: extractRelationIds(
        data.properties.QuickLinkCard,
        "QuickLinkCard"
      ),
      Timeline: extractRelationIds(data.properties.Timeline, "Timeline"),
    };

    const [
      Article,
      Announcement,
      IntroCard,
      MeetTheTeam,
      MindMap,
      QuickLinkCard,
      Timeline,
    ] = await Promise.all(Object.values(getDataPromises));

    return {
      Route: routePath,
      PageName: data.properties.PageName?.rich_text[0]?.text.content || "",
      Article,
      Announcement,
      IntroCard,
      MeetTheTeam,
      MindMap,
      QuickLinkCard,
      Timeline,
    };
  } catch (error) {
    console.error("Error fetching route data:", error);
    return null;
  }
};

const findCourseData = async (courseId?: string) => {
  try {
    const response = (await notion.databases.query({
      database_id: process.env.NOTION_COURSE_DATABASE_ID || "",
    })) as any;

    const data = response.results.map((result: any) => ({
      Name: result.properties.Name?.title[0]?.text.content || "",
      Title: result.properties.Title?.rich_text[0]?.text.content || "",
      Credits: result.properties.Credits?.number || "",
      Type: result.properties.Type?.select?.name || "",
      Year: result.properties.Year?.select?.name || "",
      Category: result.properties.Category?.select?.name || "",
      Notes: result.properties.Notes?.rich_text[0]?.text.content || "",
      MainImage: {
        name: result.properties.MainImage?.files[0]?.name || "",
        url: result.properties.MainImage?.files[0]?.file.url || "",
      },
      Goals: result.properties.Goals?.rich_text[0]?.text.content || "",
      Outline: result.properties.Outline?.rich_text[0]?.text.content || "",
      Assessment:
        result.properties.Assessment?.rich_text[0]?.text.content || "",
      Schedule: result.properties.Schedule?.rich_text[0]?.text.content || "",
      Highlights: result.properties.Highlights?.files.map((file: any) => ({
        name: file.name || "",
        url: file.file.url || "",
      })),
    }));

    if (courseId) {
      const courseIdTransformed = courseId.replace(/\s|-/g, "").toLowerCase();
      return data.find(
        (course: any) =>
          course.Title.replace(/\s|-/g, "").toLowerCase() ===
          courseIdTransformed.replace(/\s|-/g, "").toLowerCase()
      );
    }
    return data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};

export { findRouteData, findCourseData };
