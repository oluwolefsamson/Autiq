"use client";

import { DashboardNavbar, DashboardOnboardingModal, Sidebar } from "@/components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
    ArrowRight,
    Bot,
    Clock3,
    Mail,
    MessageSquareMore,
    Sparkles,
    Users,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import type { DashboardConversation, DashboardLead, DashboardAnalytics } from "@/types/dashboard";
import Link from "next/link";

const DashboardPage = () => {
    const { data: analytics } = useQuery({
        queryKey: ["dashboard-analytics"],
        queryFn: async () => {
            return api.get<DashboardAnalytics>("/analytics/summary");
        },
        retry: false,
    });

    const { data: leads } = useQuery({
        queryKey: ["dashboard-leads"],
        queryFn: async () => {
            return api.get<DashboardLead[]>("/leads");
        },
        retry: false,
    });

    const { data: conversations } = useQuery({
        queryKey: ["dashboard-conversations"],
        queryFn: async () => {
            return api.get<DashboardConversation[]>("/conversations");
        },
        retry: false,
    });

    const stats = [
        {
            label: "Leads captured",
            value: String(analytics?.leadsCaptured ?? 0),
            change: "Live from the API",
            icon: Users,
        },
        {
            label: "Conversations",
            value: String(analytics?.conversations ?? 0),
            change: "Tracked this workspace",
            icon: Clock3,
        },
        {
            label: "AI resolution",
            value: `${analytics?.answerRate ?? 0}%`,
            change: "Backend summary",
            icon: Bot,
        },
        {
            label: "Satisfaction",
            value: `${analytics?.satisfactionScore ?? 0}/5`,
            change: "Rolling average",
            icon: Mail,
        },
    ];

    const inboxItems = (conversations ?? []).slice(0, 3).map((conversation, index) => ({
        name: conversation.visitorId,
        channel: conversation.channel ?? "widget",
        preview: conversation.summary ?? "No summary available yet.",
        time: index === 0 ? "now" : `${index + 1}m`,
        status: conversation.status ?? "open",
    }));

    const leadRows = (leads ?? []).slice(0, 3).map((lead) => ({
        name: lead.name,
        source: lead.source ?? "chatbot",
        score: lead.status === "qualified" ? "92" : lead.status === "contacted" ? "84" : "78",
        stage: lead.status ?? "new",
    }));

    const activityItems = [
        `Loaded ${leads?.length ?? 0} leads from the workspace.`,
        `Loaded ${conversations?.length ?? 0} conversations from the workspace.`,
        "Backend analytics summary is now live.",
    ];

    return (
        <div className="grid h-screen w-full overflow-hidden bg-background md:grid-cols-[240px_1fr] lg:grid-cols-[260px_1fr]">
            <Sidebar />
            <div className="flex min-h-0 flex-col">
                <DashboardNavbar />
                <DashboardOnboardingModal />

                <main className="flex-1 min-h-0 overflow-y-auto px-4 py-5 md:px-6 md:py-6 lg:px-8 lg:py-8">
                    <div className="mx-auto flex max-w-6xl flex-col gap-6">
                        <Card className="border-border/60 bg-muted/10 shadow-none">
                            <CardContent className="p-6 md:p-8">
                                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                                    <div className="max-w-2xl space-y-4">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <Badge variant="secondary" className="bg-muted/60 text-muted-foreground">Live overview</Badge>
                                            <Badge variant="outline" className="border-border/60 text-muted-foreground">Support workspace</Badge>
                                        </div>
                                        <div className="space-y-3">
                                            <h2 className="max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl">
                                                Keep support moving without the clutter
                                            </h2>
                                            <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                                                A quick view of inbox activity, automation health, and leads that need attention.
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-1">
                                            <Button size="sm" asChild>
                                                <Link href="/dashboard/settings">
                                                    Connect inbox
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                            <Button size="sm" variant="outline" asChild>
                                                <Link href="/dashboard/automations">
                                                    Upload FAQs
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-border/60 bg-background/70 p-4 md:min-w-[260px]">
                                        <div className="flex items-center gap-3">
                                            <div className="rounded-xl bg-fuchsia-500/10 p-2.5">
                                                <Sparkles className="h-5 w-5 text-fuchsia-500" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium">System status</p>
                                                <p className="text-sm text-muted-foreground">All automations active</p>
                                            </div>
                                        </div>
                                        <Separator className="my-4" />
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="secondary" className="bg-muted/60 text-muted-foreground">Chat live</Badge>
                                            <Badge variant="secondary" className="bg-muted/60 text-muted-foreground">Email live</Badge>
                                            <Badge variant="secondary" className="bg-muted/60 text-muted-foreground">Handoff ready</Badge>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                            {stats.map((stat) => {
                                const Icon = stat.icon;

                                return (
                                    <Card key={stat.label} className="border-border/60 bg-muted/10 shadow-none">
                                        <CardContent className="p-4">
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                                                    <p className="mt-2 text-2xl font-semibold tracking-tight">{stat.value}</p>
                                                    <p className="mt-1 text-xs text-muted-foreground">{stat.change}</p>
                                                </div>
                                                <div className="rounded-xl bg-muted/50 p-2.5">
                                                    <Icon className="h-4 w-4 text-fuchsia-500" />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </section>

                        <section className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
                            <Card id="inbox" className="border-border/60 bg-muted/10 shadow-none">
                                <CardHeader className="space-y-1">
                                        <div className="flex items-center justify-between gap-4">
                                            <div>
                                                <CardTitle>Inbox</CardTitle>
                                                <CardDescription>Recent conversations in one place.</CardDescription>
                                            </div>
                                        <Button variant="ghost" size="sm" className="text-muted-foreground" asChild>
                                            <Link href="/dashboard/analytics">
                                                View all
                                            </Link>
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {inboxItems.length === 0 ? (
                                        <div className="rounded-2xl border border-dashed border-border/60 bg-background/70 p-6 text-sm text-muted-foreground">
                                            No conversations yet. As conversations come in, they will appear here.
                                        </div>
                                    ) : inboxItems.map((item) => (
                                        <div
                                            key={item.name + item.preview}
                                            className="flex items-center justify-between gap-4 rounded-2xl border border-border/60 bg-background/70 px-4 py-3"
                                        >
                                            <div className="min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <p className="font-medium">{item.name}</p>
                                                    <span className="text-xs text-muted-foreground">{item.channel}</span>
                                                </div>
                                                <p className="mt-1 truncate text-sm text-muted-foreground">{item.preview}</p>
                                            </div>
                                            <div className="flex shrink-0 flex-col items-end gap-1">
                                                <Badge variant="outline" className="text-[11px]">
                                                    {item.status}
                                                </Badge>
                                                <span className="text-xs text-muted-foreground">{item.time} ago</span>
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            <Card id="automations" className="border-border/60 bg-muted/10 shadow-none">
                                <CardHeader className="space-y-1">
                                    <CardTitle>Automation health</CardTitle>
                                    <CardDescription>What is already live.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span>Website chatbot</span>
                                            <span className="text-muted-foreground">92%</span>
                                        </div>
                                        <Progress value={92} className="mt-2" />
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span>Email automation</span>
                                            <span className="text-muted-foreground">84%</span>
                                        </div>
                                        <Progress value={84} className="mt-2" />
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span>FAQ coverage</span>
                                            <span className="text-muted-foreground">68%</span>
                                        </div>
                                        <Progress value={68} className="mt-2" />
                                    </div>
                                    <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                                        <p className="text-sm font-medium">Next step</p>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            Upload more FAQs to reduce handoffs.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        <section className="grid gap-5 xl:grid-cols-[1fr_1fr]">
                            <Card id="leads" className="border-border/60 bg-muted/10 shadow-none">
                                <CardHeader className="space-y-1">
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <CardTitle>Leads</CardTitle>
                                            <CardDescription>High-value enquiries at a glance.</CardDescription>
                                        </div>
                                        <Badge variant="secondary">3 active</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="overflow-hidden rounded-2xl border border-border/60">
                                        <div className="grid grid-cols-3 gap-3 border-b border-border/60 bg-muted/20 px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                            <span>Lead</span>
                                            <span>Source</span>
                                            <span className="text-right">Score</span>
                                        </div>
                                        {leadRows.map((row) => (
                                            <div
                                                key={row.name}
                                                className="grid grid-cols-3 items-center gap-3 border-b border-border/60 bg-background/70 px-4 py-3 last:border-b-0"
                                            >
                                                <div>
                                                    <p className="text-sm font-medium">{row.name}</p>
                                                    <Badge variant="outline" className="mt-2 text-[11px]">
                                                        {row.stage}
                                                    </Badge>
                                                </div>
                                                <p className="text-sm text-muted-foreground">{row.source}</p>
                                                <p className="text-right text-lg font-semibold">{row.score}</p>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card id="analytics" className="border-border/60 bg-muted/10 shadow-none">
                                <CardHeader className="space-y-1">
                                    <CardTitle>Recent activity</CardTitle>
                                    <CardDescription>Latest changes from the last 24 hours.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {activityItems.map((item, index) => (
                                        <div key={item} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/70 p-4">
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-sm text-background">
                                                {index + 1}
                                            </div>
                                            <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                                        </div>
                                    ))}
                                    <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                                        <div className="flex items-center gap-3">
                                            <MessageSquareMore className="h-5 w-5 text-fuchsia-500" />
                                            <p className="text-sm text-muted-foreground">
                                                Most recent chats are asking about pricing and consultation slots.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;
