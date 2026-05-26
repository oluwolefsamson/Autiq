"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, LoaderIcon } from "lucide-react";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from "sonner";
import { Label } from "../ui/label";
import { api } from "@/services/api";
import { useLoginMutation } from "@/services/hooks/authentication";
import { Icons } from "@/components";
import { getFriendlyErrorMessage } from "@/services/errors";

const SignInForm = () => {

    const router = useRouter();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const loginMutation = useLoginMutation();

    useEffect(() => {
        router.prefetch("/dashboard");
    }, [router]);

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Email and password are required!");
            return;
        }

        setIsLoading(true);

        try {
            await loginMutation.mutateAsync({ email, password });
            api.setSessionCookie();
            localStorage.setItem("autiq:onboarding:show", "1");
            toast.success("Signed in successfully.");
            window.location.assign("/dashboard");
        } catch (error: any) {
            toast.error(getFriendlyErrorMessage(error, "We couldn't sign you in. Please try again."));
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignIn = () => {
        toast.info("Google sign-in is not wired to the backend yet.");
    };

    return (
        <div className="flex flex-col items-start gap-y-6 py-8 w-full px-0.5">
            <h2 className="text-2xl font-semibold">
                Sign in
            </h2>

            <Button type="button" variant="outline" className="w-full justify-center gap-2" onClick={handleGoogleSignIn}>
                <Icons.google className="h-4 w-4" />
                Continue with Google
            </Button>

            <div className="flex w-full items-center gap-3">
                <div className="h-px flex-1 bg-border/80" />
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">or</span>
                <div className="h-px flex-1 bg-border/80" />
            </div>

            <form onSubmit={handleSignIn} className="w-full">
                <div className="space-y-2 w-full">
                    <Label htmlFor="email">
                        Email
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full focus-visible:border-foreground"
                    />
                </div>
                <div className="mt-4 space-y-2">
                    <Label htmlFor="password">
                        Password
                    </Label>
                    <div className="relative w-full">
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full pr-10 focus-visible:border-foreground"
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 -translate-y-1/2 opacity-60">
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                    </div>
                </div>

                <div className="mt-6">
                    <Button type="submit" disabled={isLoading || loginMutation.isPending}>
                        {isLoading ? <LoaderIcon className="w-4 h-4 animate-spin" /> : "Sign In"}
                    </Button>
                </div>
            </form>
        </div>
    )
};

export default SignInForm;
