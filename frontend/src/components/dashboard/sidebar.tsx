"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";
import { dashboardNavItems } from "./dashboard-nav";

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="hidden md:sticky md:top-0 md:flex md:h-screen md:self-start flex-col border-r border-border bg-background/90 backdrop-blur-sm">
            <div className="flex items-center gap-3 px-5 py-5 border-b border-border">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500" />
                <div>
                    <p className="text-sm font-semibold leading-none">Autiq</p>
                    <p className="mt-1 text-xs text-muted-foreground">Workspace</p>
                </div>
            </div>

            <nav className="flex-1 px-3 py-4">
                <ul className="space-y-1">
                    {dashboardNavItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = item.href.includes("#")
                            ? pathname === "/dashboard"
                            : pathname === item.href || pathname.startsWith(`${item.href}/`);

                        return (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition-colors",
                                        isActive
                                            ? "bg-muted text-foreground font-medium"
                                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    )}
                                >
                                    <Icon className="h-4 w-4 shrink-0" />
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
