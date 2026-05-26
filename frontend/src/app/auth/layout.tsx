import React from "react";
import PublicPageShell from "@/components/global/public-page-shell";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-black text-white">
            <div id="home" className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] h-full" />
            <PublicPageShell className="relative z-10">
                <main className="mx-auto flex min-h-screen w-full max-w-6xl px-4 py-6 md:px-8">
                    {children}
                </main>
            </PublicPageShell>
        </div>
    );
}
