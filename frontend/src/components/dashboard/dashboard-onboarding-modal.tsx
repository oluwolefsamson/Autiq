"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle2, MessageSquare, Search, Sparkles, Upload } from "lucide-react";

const STORAGE_KEY = "autiq:onboarding:show";

const steps = [
    {
        icon: Upload,
        title: "Connect your support sources",
        description: "Start by linking chat, email, or any intake channel you want Autiq to monitor.",
    },
    {
        icon: Sparkles,
        title: "Upload your FAQs",
        description: "Add your business FAQs so the assistant can answer common questions instantly.",
    },
    {
        icon: MessageSquare,
        title: "Review live conversations",
        description: "Use the inbox to see recent conversations, handoffs, and response status.",
    },
    {
        icon: Search,
        title: "Track leads and activity",
        description: "Watch leads, analytics, and recent events to see what needs follow-up.",
    },
];

const DashboardOnboardingModal = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const shouldShow = localStorage.getItem(STORAGE_KEY) === "1";
        if (shouldShow) {
            setOpen(true);
        }
    }, []);

    const handleOpenChange = (value: boolean) => {
        setOpen(value);
        if (!value) {
            localStorage.removeItem(STORAGE_KEY);
        }
    };

    const handleDone = () => {
        handleOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent className="max-w-2xl overflow-hidden border-border/60 bg-background p-0">
                <div className="border-b border-border/60 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-transparent px-6 py-6">
                    <Badge variant="secondary" className="bg-muted/70 text-muted-foreground">
                        Welcome to Autiq
                    </Badge>
                    <DialogHeader className="mt-4 text-left">
                        <DialogTitle className="text-2xl">How to use your workspace</DialogTitle>
                        <DialogDescription className="max-w-xl">
                            A quick tour of the core actions you will use most often after signing in.
                        </DialogDescription>
                    </DialogHeader>
                </div>

                <div className="grid gap-3 px-6 py-6 md:grid-cols-2">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={step.title}
                                className="rounded-2xl border border-border/60 bg-muted/20 p-4"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="rounded-xl bg-background p-2">
                                        <Icon className="h-4 w-4 text-fuchsia-500" />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-medium text-muted-foreground">
                                                Step {index + 1}
                                            </span>
                                            {index === 0 ? (
                                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                                            ) : null}
                                        </div>
                                        <p className="font-medium">{step.title}</p>
                                        <p className="text-sm leading-6 text-muted-foreground">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <DialogFooter className="border-t border-border/60 bg-muted/10 px-6 py-4">
                    <Button variant="outline" onClick={handleDone}>
                        Maybe later
                    </Button>
                    <Button onClick={handleDone}>
                        Start exploring
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DashboardOnboardingModal;
