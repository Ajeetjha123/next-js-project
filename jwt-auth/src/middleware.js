import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export default function middleware(request) {
  const path = request.nextUrl.pathname;

  const checkedPath = path === "/sign-up" || path === "/sign-in";

  const getCookies = cookies();
  const token = getCookies.get("token")?.value || "";

  if (checkedPath && token !== "") {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!checkedPath && token !== "") {
    return NextResponse.redirect(new URL("/sign-in", request.nextUrl));
  }
}

export const config = {
  matcher: ["/sign-in", "/sign-up"],
};
