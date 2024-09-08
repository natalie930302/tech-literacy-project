import { NextResponse } from "next/server";
import {
  findAllActivityData,
  findActivityData,
} from "@/utils/notion";

export async function GET() {
  // const data = await findActivityData("1");
  const data = await findAllActivityData("增能講座");
  return NextResponse.json(data);
}
