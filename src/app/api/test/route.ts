import { NextResponse } from "next/server";
import { findRouteData, findCourseData, findPartnerData } from "@/utils/notion";

export async function GET() {
  // const data = await findCourseData();
  // const data = await findRouteData("/partner");
  const data = await findPartnerData("區域科技中心");
  return NextResponse.json(data);
}
