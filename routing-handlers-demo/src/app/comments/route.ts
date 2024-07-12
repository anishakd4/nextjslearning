import { headers } from "next/headers";
import { comments } from "./data";
import { NextRequest } from "next/server";

// export async function GET() {
//   return Response.json(comments);
// }

export async function GET(request: NextRequest) {
  console.log({ request });
  const searchParams = request.nextUrl.searchParams;
  console.log({ searchParams });
  const query = searchParams.get("query");
  console.log({ query });
  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;

  return Response.json(filteredComments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
