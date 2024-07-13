// export async function GET() {
//   return new Response("Profile Data");
// }

import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headersList = headers();
  const theme = request.cookies.get("theme");
  console.log({ requestHeaders });
  console.log({ headersList });
  console.log({ theme });
  cookies().set("resultPerPage", "20");
  // return new Response("Profile Data");
  console.log(cookies().get("resultPerPage"));
  return new Response("<h1>Profile Data</h1>", {
    headers: { "Content-Type": "text/html", "Set-Cookie": "theme=dark" },
  });
}
