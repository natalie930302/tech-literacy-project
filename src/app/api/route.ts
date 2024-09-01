import { NextResponse } from "next/server";
import {
  findRouteData,
  findCourseData,
  findPartnerData,
  findActivityData,
} from "@/utils/notion";

export async function GET() {
  // const data = await findCourseData();
  // const data = await findRouteData("/");
  // const data = await findPartnerData("區域科技中心");
  const data = await findActivityData("1");
  return NextResponse.json(data);
}
