import { NextResponse } from "next/server";

export default function middleware(req: Request) {
    const url = new URL(req.url);
    if (url.pathname.startsWith("/dashboard")) {
        const hasSession = req.headers.get("cookie")?.includes("autiq-session=1");
        if (!hasSession) {
            url.pathname = "/auth/sign-in";
            return NextResponse.redirect(url);
        }
    }

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
