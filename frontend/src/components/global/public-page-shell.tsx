import React from "react";
import { Footer, Navbar } from "@/components";

interface PublicPageShellProps {
    children: React.ReactNode;
    className?: string;
}

const PublicPageShell = ({ children, className }: PublicPageShellProps) => {
    return (
        <div className={className}>
            <Navbar />
            <main className="relative z-0">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default PublicPageShell;
