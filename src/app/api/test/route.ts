import { NextRequest, NextResponse } from "next/server";
import { getRouteDatabase } from "@/utils/test";

export async function GET() {
  const routes = await getRouteDatabase();
  return NextResponse.json({ routes });
  // return NextResponse.json({ message: "Hello, world!" });
}
