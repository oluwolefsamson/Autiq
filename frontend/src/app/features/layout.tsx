import React from "react";
import PublicPageShell from "@/components/global/public-page-shell";

export default function FeaturesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background">
            <PublicPageShell>
                <div className="pt-20">
                    {children}
                </div>
            </PublicPageShell>
        </div>
    );
}
