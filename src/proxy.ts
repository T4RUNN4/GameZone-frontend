import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });
  const user = session?.user;
  const pathName = request.nextUrl.pathname;
  const isAdmin = user && "role" in user && user.role === "admin";

  if (session && (pathName.startsWith("/login") || pathName.startsWith("/register"))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if(!session && (pathName.startsWith("/add-games") || pathName.startsWith("/manage-bookings") || pathName.startsWith("/manage-games") || pathName.startsWith("/slot-booking") || pathName.startsWith("/your-bookings"))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    user &&
    !isAdmin &&
    (pathName.startsWith("/add-games") ||
      pathName.startsWith("/manage-games") ||
      pathName.startsWith("/manage-bookings"))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/add-games",
    "/manage-bookings",
    "/manage-games",
    "/slot-booking",
    "/your-bookings"
  ],
};