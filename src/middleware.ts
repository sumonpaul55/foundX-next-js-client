import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentUser } from "./services/authService";
import { IUser } from "./types";

type role = keyof typeof roleBaseRoutes;

const AuthRoutes = ["/login", "/register"];

const roleBaseRoutes = {
  // using regex for all profile related path can be accessable for user
  USER: [/^\/profile/],
  // using regex for all profile related path can be accessable for admin
  ADMIN: [/^\/admin/],
};
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // get user from decoded token
  const user = await getCurrentUser();

  // if user not exist go login
  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
    }
  }
  if (user?.role && roleBaseRoutes[user?.role as role]) {
    const route = roleBaseRoutes[user?.role as role];

    if (route.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile", "/profile/:page*", "/admin", "/login", "/register", "/create-post"],
};
