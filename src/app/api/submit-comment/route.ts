import { submitComment } from "@/utils/notion";

export async function POST(req: Request) {
  try {
    const response = await submitComment(req.body);
    return Response.json(response);
  } catch (error) {
    console.error("Error submitting comment:", error);
  }
}
