import { NextResponse } from "next/server";

export default function middleware(req: Request) {
    // Middleware simplified: no authentication enforcement (UI-only mode)
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!.*\\..*|_next).*)",
        "/(api|trpc)(.*)",
        "/dashboard(.*)",
        "/",
        "/auth/sign-in",
        "/auth/sign-up",
    ],
};