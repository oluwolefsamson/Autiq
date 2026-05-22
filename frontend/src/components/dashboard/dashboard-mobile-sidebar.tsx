"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { dashboardNavItems } from "./dashboard-nav";
import { cn } from "@/utils";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const DashboardMobileSidebar = () => {
    const pathname = usePathname();

    return (
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="ghost" className="-ml-2">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Open navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[280px] p-0">
                    <SheetHeader className="border-b border-border px-5 py-5 text-left">
                        <SheetTitle className="flex items-center gap-3">
                            <span className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500" />
                            <span>
                                <span className="block text-sm font-semibold leading-none">Autiq</span>
                                <span className="mt-1 block text-xs text-muted-foreground">Workspace</span>
                            </span>
                        </SheetTitle>
                    </SheetHeader>

                    <nav className="px-3 py-4">
                        <ul className="space-y-1">
                            {dashboardNavItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = item.href.includes("#")
                                    ? pathname === "/dashboard"
                                    : pathname === item.href || pathname.startsWith(`${item.href}/`);

                                return (
                                    <li key={item.label}>
                                        <SheetClose asChild>
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    "flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-colors",
                                                    isActive
                                                        ? "bg-muted text-foreground font-medium"
                                                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                                                )}
                                            >
                                                <Icon className="h-4 w-4 shrink-0" />
                                                <span>{item.label}</span>
                                            </Link>
                                        </SheetClose>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default DashboardMobileSidebar;
