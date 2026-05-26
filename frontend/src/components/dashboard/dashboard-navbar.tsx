"use client";

import { useState } from "react";
import DashboardMobileSidebar from "./dashboard-mobile-sidebar";
import ThemeToggle from "./theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Bell, ChevronDown, Plus, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { api } from "@/services/api";
import { useAuthSession, useLogoutMutation } from "@/services/hooks/authentication";

const DashboardNavbar = () => {
    const router = useRouter();
    const { data } = useAuthSession();
    const user = data?.user;
    const logoutMutation = useLogoutMutation();
    const [logoutOpen, setLogoutOpen] = useState(false);

    const handleLogout = async () => {
        try {
            await logoutMutation.mutateAsync();
        } finally {
            api.clearSessionCookie();
            toast.success("Signed out.");
            router.replace("/auth/sign-in");
        }
    };

    return (
        <header className="sticky top-0 z-20 flex flex-col gap-4 border-b border-border/60 bg-background/80 px-4 py-4 backdrop-blur-md lg:px-6">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <DashboardMobileSidebar />
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <h1 className="text-base font-semibold tracking-tight">Dashboard</h1>
                            <Badge variant="secondary" className="hidden sm:inline-flex bg-muted/70 text-muted-foreground">Live</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Chats, email, leads.</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <Button variant="outline" size="sm" className="hidden md:inline-flex">
                        <Plus className="mr-2 h-4 w-4" />
                        New
                    </Button>
                    <Button variant="ghost" size="sm" className="hidden md:inline-flex" onClick={() => setLogoutOpen(true)} disabled={logoutMutation.isPending}>
                        Sign out
                    </Button>
                    <Button size="icon" variant="ghost" className="relative">
                        <Bell className="h-4 w-4" />
                        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-fuchsia-500" />
                    </Button>
                    <div className="flex items-center gap-2 rounded-full border border-border/60 px-2 py-1">
                        <Avatar className="h-8 w-8">
                            <AvatarFallback>{user?.name?.slice(0, 2).toUpperCase() ?? "AO"}</AvatarFallback>
                        </Avatar>
                        <div className="hidden sm:block">
                            <p className="text-sm font-medium leading-none">{user?.name ?? "Ops"}</p>
                            <p className="mt-1 text-xs text-muted-foreground">{user?.email ?? "admin@autiq.ai"}</p>
                        </div>
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </div>
                </div>
            </div>

            <div className="relative max-w-xl">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                    placeholder="Search"
                    className="border-border bg-muted/30 pl-9"
                />
            </div>

            <AlertDialog open={logoutOpen} onOpenChange={setLogoutOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Sign out of Autiq?</AlertDialogTitle>
                        <AlertDialogDescription>
                            You will need to sign in again to access your dashboard, leads, and automation tools.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleLogout}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                            Sign out
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </header>
    );
};

export default DashboardNavbar;
