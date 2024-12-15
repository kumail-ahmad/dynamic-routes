import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // return NextResponse.redirect(new URL("/", request.url));
  
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  // return NextResponse.json({message:"try again later" })
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/about/:path*",
// };
