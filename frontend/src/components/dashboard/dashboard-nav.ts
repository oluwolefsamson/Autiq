import {
    BarChart3,
    Bot,
    Inbox,
    LayoutDashboard,
    Settings2,
    Users,
} from "lucide-react";

export const dashboardNavItems = [
    { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { label: "Inbox", href: "/dashboard#inbox", icon: Inbox },
    { label: "Automations", href: "/dashboard/automations", icon: Bot },
    { label: "Leads", href: "/dashboard#leads", icon: Users },
    { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
    { label: "Settings", href: "/dashboard/settings", icon: Settings2 },
];
