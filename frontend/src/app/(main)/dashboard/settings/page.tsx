import { DashboardNavbar, Sidebar } from "@/components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BellRing, Building2, Check, Mail, ShieldCheck, UserRoundCog } from "lucide-react";

const team = [
    { name: "Amina Yusuf", role: "Admin" },
    { name: "Chinedu Okafor", role: "Support Lead" },
    { name: "Bola Adeyemi", role: "Sales" },
];

const SettingsPage = () => {
    return (
        <div className="grid w-full md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr] h-screen overflow-hidden bg-background">
            <Sidebar />
            <div className="flex min-h-0 flex-col">
                <DashboardNavbar />
                <main className="flex-1 min-h-0 overflow-y-auto px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8">
                    <div className="mx-auto flex max-w-6xl flex-col gap-6">
                        <Card className="border-border/60 bg-muted/10 shadow-none">
                            <CardContent className="p-6 md:p-8">
                                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <Badge variant="secondary">Settings</Badge>
                                            <Badge variant="outline">Workspace configuration</Badge>
                                        </div>
                                        <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Manage your workspace preferences</h1>
                                        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                                            Update your company profile, notification rules, team access, and integration settings.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                            <Card className="border-border/60 bg-muted/10 shadow-none">
                            <CardHeader>
                                <CardTitle>Workspace status</CardTitle>
                                <CardDescription>Quick details about your current configuration.</CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4 md:grid-cols-3">
                                <div className="rounded-2xl border border-border bg-muted/20 p-4">
                                    <Building2 className="h-5 w-5 text-fuchsia-500" />
                                    <p className="mt-3 font-medium">Company profile</p>
                                    <p className="mt-2 text-sm text-muted-foreground">Autiq Support Team</p>
                                </div>
                                <div className="rounded-2xl border border-border bg-muted/20 p-4">
                                    <Mail className="h-5 w-5 text-fuchsia-500" />
                                    <p className="mt-3 font-medium">Connected inbox</p>
                                    <p className="mt-2 text-sm text-muted-foreground">support@company.com</p>
                                </div>
                                <div className="rounded-2xl border border-border bg-muted/20 p-4">
                                    <ShieldCheck className="h-5 w-5 text-emerald-500" />
                                    <p className="mt-3 font-medium">Access control</p>
                                    <p className="mt-2 text-sm text-muted-foreground">3 active teammates</p>
                                </div>
                            </CardContent>
                        </Card>

                            <Card className="border-border/60 bg-muted/10 shadow-none">
                            <CardHeader>
                                <CardTitle>Workspace settings</CardTitle>
                                <CardDescription>Update the main configuration areas for your team.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Tabs defaultValue="profile">
                                    <TabsList className="grid w-full grid-cols-4">
                                        <TabsTrigger value="profile">Profile</TabsTrigger>
                                        <TabsTrigger value="notifications">Notifications</TabsTrigger>
                                        <TabsTrigger value="team">Team</TabsTrigger>
                                        <TabsTrigger value="billing">Billing</TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="profile" className="mt-6 space-y-6">
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="company">Company name</Label>
                                                <Input id="company" defaultValue="Autiq" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="website">Website</Label>
                                                <Input id="website" defaultValue="https://autiq.ai" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="industry">Industry</Label>
                                                <Input id="industry" defaultValue="Customer support automation" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="tone">Reply tone</Label>
                                                <Input id="tone" defaultValue="Professional" />
                                            </div>
                                        </div>
                                        <Button>Save profile</Button>
                                    </TabsContent>

                                    <TabsContent value="notifications" className="mt-6 space-y-4">
                                        <div className="rounded-2xl border border-border bg-muted/20 p-4 flex items-start gap-3">
                                            <BellRing className="mt-0.5 h-5 w-5 text-fuchsia-500" />
                                            <div>
                                                <p className="font-medium">Email notifications</p>
                                                <p className="mt-1 text-sm text-muted-foreground">Get notified for new leads and missed handoffs.</p>
                                            </div>
                                        </div>
                                        <Separator />
                                        <div className="rounded-2xl border border-border bg-muted/20 p-4 flex items-start gap-3">
                                            <Check className="mt-0.5 h-5 w-5 text-emerald-500" />
                                            <div>
                                                <p className="font-medium">Daily summary</p>
                                                <p className="mt-1 text-sm text-muted-foreground">Receive a recap of support activity each morning.</p>
                                            </div>
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="team" className="mt-6 space-y-4">
                                        {team.map((member) => (
                                            <div key={member.name} className="flex items-center justify-between rounded-2xl border border-border bg-muted/20 p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background">
                                                        {member.name
                                                            .split(" ")
                                                            .map((part) => part[0])
                                                            .join("")}
                                                    </div>
                                                    <div>
                                                        <p className="font-medium">{member.name}</p>
                                                        <p className="text-sm text-muted-foreground">{member.role}</p>
                                                    </div>
                                                </div>
                                                <Badge variant="secondary">Active</Badge>
                                            </div>
                                        ))}
                                        <Button variant="outline" className="w-full">
                                            <UserRoundCog className="mr-2 h-4 w-4" />
                                            Invite teammate
                                        </Button>
                                    </TabsContent>

                                    <TabsContent value="billing" className="mt-6 space-y-4">
                                        <div className="rounded-2xl border border-border bg-muted/20 p-4">
                                            <p className="text-sm text-muted-foreground">Current plan</p>
                                            <p className="mt-2 text-2xl font-semibold">Pro</p>
                                            <p className="mt-1 text-sm text-muted-foreground">Billed monthly with priority support.</p>
                                        </div>
                                        <Button variant="outline">Update payment method</Button>
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

export default SettingsPage;
