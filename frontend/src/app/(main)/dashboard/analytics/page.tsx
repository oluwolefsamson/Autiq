import { DashboardNavbar, Sidebar } from "@/components";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Clock3, MessageSquareMore, MousePointerClick, TrendingUp } from "lucide-react";

const analytics = [
    { label: "Website chat conversion", value: "8.6%", delta: "+1.4%" },
    { label: "Email open rate", value: "62%", delta: "+9%" },
    { label: "Response speed", value: "2m 14s", delta: "-8m 22s" },
    { label: "Lead-to-follow-up", value: "73%", delta: "+11%" },
];

const channels = [
    { label: "Website chat", value: 84 },
    { label: "Email", value: 68 },
    { label: "Knowledge base", value: 57 },
    { label: "Human handoff", value: 31 },
];

const timeline = [
    "Morning traffic generated 42 chats with a 91% AI resolution rate.",
    "Email automation handled 18 inbound enquiries before noon.",
    "The busiest topic was pricing, followed by consultation availability.",
];

const AnalyticsPage = () => {
    return (
        <div className="grid w-full md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr] h-screen overflow-hidden bg-background">
            <Sidebar />
            <div className="flex min-h-0 flex-col">
                <DashboardNavbar />
                <main className="flex-1 min-h-0 overflow-y-auto px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8">
                    <div className="mx-auto flex max-w-6xl flex-col gap-6">
                        <Card className="border-border bg-[linear-gradient(135deg,rgba(168,85,247,0.08),rgba(236,72,153,0.04))]">
                            <CardContent className="p-6 md:p-8">
                                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <Badge variant="secondary">Analytics</Badge>
                                            <Badge variant="outline">Last 30 days</Badge>
                                        </div>
                                        <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Understand what drives support performance</h1>
                                        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                                            Track how fast Autiq replies, how often it resolves conversations, and where leads come from.
                                        </p>
                                    </div>
                                    <div className="grid gap-2 rounded-3xl border border-border bg-background/80 p-4 md:min-w-[240px]">
                                        <div className="flex items-center gap-3">
                                            <TrendingUp className="h-5 w-5 text-fuchsia-500" />
                                            <p className="text-sm font-medium">Overall trend: up</p>
                                        </div>
                                        <p className="text-sm text-muted-foreground">Response time and conversion both improved this month.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                            {analytics.map((item) => (
                                <Card key={item.label} className="border-border">
                                    <CardContent className="p-5">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <p className="text-sm text-muted-foreground">{item.label}</p>
                                                <p className="mt-2 text-3xl font-semibold tracking-tight">{item.value}</p>
                                                <p className="mt-2 text-sm text-emerald-500">{item.delta}</p>
                                            </div>
                                            <div className="rounded-2xl bg-muted/50 p-3">
                                                <BarChart3 className="h-5 w-5 text-fuchsia-500" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </section>

                        <section className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
                            <Card className="border-border">
                                <CardHeader>
                                    <CardTitle>Channel breakdown</CardTitle>
                                    <CardDescription>Where support work is happening.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-5">
                                    {channels.map((channel) => (
                                        <div key={channel.label}>
                                            <div className="flex items-center justify-between text-sm">
                                                <span>{channel.label}</span>
                                                <span className="text-muted-foreground">{channel.value}%</span>
                                            </div>
                                            <Progress value={channel.value} className="mt-2" />
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            <Card className="border-border">
                                <CardHeader>
                                    <CardTitle>Customer intent</CardTitle>
                                    <CardDescription>What customers ask most often.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="rounded-2xl border border-border bg-muted/20 p-4">
                                        <div className="flex items-center gap-3">
                                            <MessageSquareMore className="h-5 w-5 text-fuchsia-500" />
                                            <div>
                                                <p className="text-sm font-medium">Top topic</p>
                                                <p className="text-sm text-muted-foreground">Pricing and plan comparisons</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-2xl border border-border bg-muted/20 p-4">
                                        <div className="flex items-center gap-3">
                                            <MousePointerClick className="h-5 w-5 text-fuchsia-500" />
                                            <div>
                                                <p className="text-sm font-medium">Lead quality</p>
                                                <p className="text-sm text-muted-foreground">Most leads come from website chat</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-2xl border border-border bg-muted/20 p-4">
                                        <div className="flex items-center gap-3">
                                            <Clock3 className="h-5 w-5 text-fuchsia-500" />
                                            <div>
                                                <p className="text-sm font-medium">Peak period</p>
                                                <p className="text-sm text-muted-foreground">Late morning and early evening</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        <Card className="border-border">
                            <CardHeader>
                                <CardTitle>Recent insights</CardTitle>
                                <CardDescription>Quick takeaways from recent activity.</CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4 md:grid-cols-3">
                                {timeline.map((item, index) => (
                                    <div key={item} className="rounded-2xl border border-border bg-muted/20 p-4">
                                        <p className="text-xs uppercase tracking-wider text-muted-foreground">Insight {index + 1}</p>
                                        <p className="mt-3 text-sm leading-6 text-muted-foreground">{item}</p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        <Card className="border-border">
                            <CardHeader>
                                <CardTitle>Detailed reports</CardTitle>
                                <CardDescription>Switch between quick views for different teams.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Tabs defaultValue="support">
                                    <TabsList className="grid w-full grid-cols-3">
                                        <TabsTrigger value="support">Support</TabsTrigger>
                                        <TabsTrigger value="sales">Sales</TabsTrigger>
                                        <TabsTrigger value="ops">Ops</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="support" className="mt-4">
                                        <p className="text-sm text-muted-foreground">
                                            Support is improving: fewer handoffs, faster first replies, and more conversations closed by AI.
                                        </p>
                                    </TabsContent>
                                    <TabsContent value="sales" className="mt-4">
                                        <p className="text-sm text-muted-foreground">
                                            Sales sees better lead quality when follow-up happens within the first 10 minutes.
                                        </p>
                                    </TabsContent>
                                    <TabsContent value="ops" className="mt-4">
                                        <p className="text-sm text-muted-foreground">
                                            Ops should review FAQ coverage and response quality weekly to keep automation accurate.
                                        </p>
                                    </TabsContent>
                                </Tabs>
                            </CardContent>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AnalyticsPage;
