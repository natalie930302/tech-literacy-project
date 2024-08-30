import { NextResponse } from "next/server";
import { findCourseData } from "@/utils/notion";

export async function GET() {
  const data = await findCourseData();
  return NextResponse.json(data);
}
