// export async function GET() {
//   return new Response("Profile Data");
// }

import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headersList = headers();
  console.log({ requestHeaders });
  console.log({ headersList });
  // return new Response("Profile Data");
  return new Response("<h1>Profile Data</h1>", {
    headers: { "Content-Type": "text/html" },
  });
}
