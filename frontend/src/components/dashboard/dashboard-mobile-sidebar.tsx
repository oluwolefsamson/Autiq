"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, Menu } from "lucide-react";
import { dashboardNavItems } from "./dashboard-nav";
import { cn } from "@/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { api } from "@/services/api";
import { useLogoutMutation } from "@/services/hooks/authentication";
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
    const logoutMutation = useLogoutMutation();

    const handleLogout = async () => {
        try {
            await logoutMutation.mutateAsync();
        } finally {
            api.clearSessionCookie();
            toast.success("Signed out.");
            window.location.assign("/auth/sign-in");
        }
    };

    return (
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="ghost" className="-ml-2">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Open navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex h-full w-[280px] flex-col p-0">
                    <SheetHeader className="border-b border-border px-5 py-5 text-left">
                        <SheetTitle className="flex items-center gap-3">
                            <span className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500" />
                            <span>
                                <span className="block text-sm font-semibold leading-none">Autiq</span>
                                <span className="mt-1 block text-xs text-muted-foreground">Workspace</span>
                            </span>
                        </SheetTitle>
                    </SheetHeader>

                    <nav className="flex-1 overflow-y-auto px-3 py-4">
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
                                                    "group flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-colors",
                                                    isActive
                                                        ? "bg-muted font-medium"
                                                        : "hover:bg-muted",
                                                )}
                                            >
                                                <Icon
                                                    className={cn(
                                                        "h-4 w-4 shrink-0",
                                                        isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground",
                                                    )}
                                                />
                                                <span
                                                    className={cn(
                                                        isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground",
                                                    )}
                                                >
                                                    {item.label}
                                                </span>
                                            </Link>
                                        </SheetClose>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    <div className="shrink-0 border-t border-border bg-background px-3 py-4">
                        <SheetClose asChild>
                            <Button
                                type="button"
                                variant="ghost"
                                className="w-full justify-start gap-3 rounded-xl px-3 text-sm font-medium text-destructive hover:bg-destructive/10 hover:text-destructive"
                                onClick={handleLogout}
                                disabled={logoutMutation.isPending}
                            >
                                <LogOut className="h-4 w-4" />
                                Sign out
                            </Button>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default DashboardMobileSidebar;
