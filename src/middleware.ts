import { NextResponse } from "next/server";

import { ROUTES } from "@/constants/routes";
import { COOKIE_KEYS } from "@/constants/keys";

import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get(COOKIE_KEYS.accessToken)?.value;

  if (token && pathname === ROUTES.login.path) {
    return NextResponse.redirect(new URL(ROUTES.home.path, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|manifest.webmanifest|sitemap.xml|robots.txt|favicon.ico|icon.png|apple-icon.png|.well-known).*)"],
};
