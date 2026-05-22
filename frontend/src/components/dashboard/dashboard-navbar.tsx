import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell, ChevronDown, Plus, Search } from "lucide-react";

const DashboardNavbar = () => {
    return (
        <header className="sticky top-0 z-20 flex flex-col gap-3 border-b border-border bg-background/90 px-4 py-3 backdrop-blur-sm lg:px-6">
            <div className="flex items-center justify-between gap-4">
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <h1 className="text-base font-semibold tracking-tight">Dashboard</h1>
                        <Badge variant="secondary" className="hidden sm:inline-flex">Live</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Chats, email, leads.</p>
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="hidden md:inline-flex">
                        <Plus className="mr-2 h-4 w-4" />
                        New
                    </Button>
                    <Button size="icon" variant="ghost" className="relative">
                        <Bell className="h-4 w-4" />
                        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-fuchsia-500" />
                    </Button>
                    <div className="flex items-center gap-2 rounded-full border border-border px-2 py-1">
                        <Avatar className="h-8 w-8">
                            <AvatarFallback>AO</AvatarFallback>
                        </Avatar>
                        <div className="hidden sm:block">
                            <p className="text-sm font-medium leading-none">Ops</p>
                            <p className="mt-1 text-xs text-muted-foreground">admin@autiq.ai</p>
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
        </header>
    );
};

export default DashboardNavbar;
