import { DashboardNavbar, Sidebar } from "@/components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Bot, CheckCircle2, FileText, Plus, PlugZap, Sparkles, WandSparkles } from "lucide-react";

const rules = [
    {
        title: "Auto-answer FAQs",
        description: "Use the knowledge base to respond to common website and email questions instantly.",
        progress: 92,
        status: "Live",
    },
    {
        title: "Lead capture",
        description: "Save contact details and route qualified enquiries to the follow-up queue.",
        progress: 84,
        status: "Live",
    },
    {
        title: "Human handoff",
        description: "Escalate conversations that need a person without losing context.",
        progress: 68,
        status: "Needs review",
    },
];

const automationEvents = [
    "Website chat matched FAQ #12 and resolved the inquiry automatically.",
    "Email from a new prospect was tagged and added to the lead pipeline.",
    "Conversation about pricing triggered a handoff to sales.",
];

const AutomationsPage = () => {
    return (
        <div className="grid w-full md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr] h-screen overflow-hidden bg-background">
            <Sidebar />
            <div className="flex min-h-0 flex-col">
                <DashboardNavbar />
                <main className="flex-1 min-h-0 overflow-y-auto px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8">
                    <div className="mx-auto flex max-w-6xl flex-col gap-6">
                        <Card className="border-border/60 bg-muted/10 shadow-none">
                            <CardContent className="p-6 md:p-8">
                                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                                    <div className="max-w-2xl space-y-4">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <Badge variant="secondary">Automations</Badge>
                                            <Badge variant="outline">3 rules active</Badge>
                                        </div>
                                        <div>
                                            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Automate repetitive support work</h1>
                                            <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
                                                Keep common replies fast and consistent while your team focuses on higher-value conversations.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid gap-3 rounded-3xl border border-border/60 bg-background/70 p-4 md:min-w-[280px]">
                                        <div className="flex items-center gap-3">
                                            <div className="rounded-2xl bg-fuchsia-500/10 p-3">
                                                <Sparkles className="h-5 w-5 text-fuchsia-500" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium">Automation engine</p>
                                                <p className="text-sm text-muted-foreground">Healthy and processing requests</p>
                                            </div>
                                        </div>
                                        <Separator />
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-muted-foreground">Estimated time saved</span>
                                            <span className="font-medium">18 hours/week</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <section className="grid gap-4 md:grid-cols-3">
                            <Card className="border-border/60 bg-muted/10 shadow-none">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-muted-foreground">Active rules</p>
                                            <p className="mt-2 text-3xl font-semibold">12</p>
                                        </div>
                                        <Bot className="h-5 w-5 text-fuchsia-500" />
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-border/60 bg-muted/10 shadow-none">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-muted-foreground">Resolved automatically</p>
                                            <p className="mt-2 text-3xl font-semibold">74%</p>
                                        </div>
                                        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-border">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-muted-foreground">Pending handoffs</p>
                                            <p className="mt-2 text-3xl font-semibold">9</p>
                                        </div>
                                        <WandSparkles className="h-5 w-5 text-fuchsia-500" />
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
                            <Card className="border-border">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                                    <div>
                                        <CardTitle>Rule performance</CardTitle>
                                        <CardDescription>See which automations are doing the most work.</CardDescription>
                                    </div>
                                    <Button variant="outline" size="sm">
                                        <Plus className="mr-2 h-4 w-4" />
                                        New rule
                                    </Button>
                                </CardHeader>
                                <CardContent className="space-y-5">
                                    {rules.map((rule) => (
                                        <div key={rule.title} className="rounded-2xl border border-border bg-muted/20 p-4">
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <p className="font-medium">{rule.title}</p>
                                                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{rule.description}</p>
                                                </div>
                                                <Badge variant="secondary">{rule.status}</Badge>
                                            </div>
                                            <div className="mt-4">
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="text-muted-foreground">Coverage</span>
                                                    <span>{rule.progress}%</span>
                                                </div>
                                                <Progress value={rule.progress} className="mt-2" />
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            <Card className="border-border">
                                <CardHeader>
                                    <CardTitle>Recent automation events</CardTitle>
                                    <CardDescription>What the system handled recently.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {automationEvents.map((event, index) => (
                                        <div key={event} className="flex items-start gap-3 rounded-2xl border border-border bg-muted/20 p-4">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background">
                                                {index + 1}
                                            </div>
                                            <p className="text-sm leading-6 text-muted-foreground">{event}</p>
                                        </div>
                                    ))}

                                    <div className="rounded-2xl border border-border bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 p-4">
                                        <div className="flex items-center gap-3">
                                            <PlugZap className="h-5 w-5 text-fuchsia-500" />
                                            <div>
                                                <p className="text-sm font-medium">Integration status</p>
                                                <p className="text-sm text-muted-foreground">Gmail and SMTP connections are ready for use.</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        <Card className="border-border/60 bg-muted/10 shadow-none">
                            <CardHeader>
                                <CardTitle>Suggested next steps</CardTitle>
                                <CardDescription>Small improvements that increase automation coverage.</CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4 md:grid-cols-3">
                                <div className="rounded-2xl border border-border bg-muted/20 p-4">
                                    <FileText className="h-5 w-5 text-fuchsia-500" />
                                    <p className="mt-3 font-medium">Upload more FAQ docs</p>
                                    <p className="mt-2 text-sm leading-6 text-muted-foreground">Expand the knowledge base to reduce handoffs.</p>
                                </div>
                                <div className="rounded-2xl border border-border bg-muted/20 p-4">
                                    <Bot className="h-5 w-5 text-fuchsia-500" />
                                    <p className="mt-3 font-medium">Refine reply tone</p>
                                    <p className="mt-2 text-sm leading-6 text-muted-foreground">Make AI replies sound more like your brand.</p>
                                </div>
                                <div className="rounded-2xl border border-border bg-muted/20 p-4">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                    <p className="mt-3 font-medium">Review handoff rules</p>
                                    <p className="mt-2 text-sm leading-6 text-muted-foreground">Send edge cases to the right team faster.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AutomationsPage;
