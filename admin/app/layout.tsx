import type { ReactNode } from "react";

export const metadata = {
    title: "Autiq Admin",
    description: "Standalone admin dashboard for Autiq",
};

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="en">
            <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#0b0f17", color: "#e5eefb" }}>
                {children}
            </body>
        </html>
    );
}
