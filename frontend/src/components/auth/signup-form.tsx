"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, LoaderIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from "sonner";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { Label } from "../ui/label";
import { api } from "@/services/api";
import { useRegisterMutation } from "@/services/hooks/authentication";
import { Icons } from "@/components";
import { getFriendlyErrorMessage } from "@/services/errors";

const SignUpForm = () => {

    const router = useRouter();

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [code, setCode] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isVerifying, setIsVerifying] = useState<boolean>(false);
    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const registerMutation = useRegisterMutation();

    useEffect(() => {
        router.prefetch("/dashboard");
    }, [router]);

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !password) {
            toast.error("Name, email and password are required!");
            return;
        }

        setIsUpdating(true);

        try {
            await registerMutation.mutateAsync({ name, email, password });
            api.setSessionCookie();
            localStorage.setItem("autiq:onboarding:show", "1");
            toast.success("Account created successfully.");
            window.location.assign("/dashboard");
        } catch (error: any) {
            toast.error(getFriendlyErrorMessage(error, "We couldn't create your account. Please try again."));
        } finally {
            setIsUpdating(false);
        }
    };

    const handleVerifyEmail = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!code) {
            toast.error("Verification code is required!");
            return;
        }

        setIsLoading(true);
        toast.info("Email verification is not wired yet. Sign-up completes on submit.");
        setIsLoading(false);
    };

    const handleGoogleSignUp = () => {
        toast.info("Google sign-up is not wired to the backend yet.");
    };

    return (
        <div className="flex flex-col items-start gap-y-6 py-8 w-full px-0.5">
            <h2 className="text-2xl font-semibold">
                Create your account
            </h2>

            <Button type="button" variant="outline" className="w-full justify-center gap-2" onClick={handleGoogleSignUp}>
                <Icons.google className="h-4 w-4" />
                Continue with Google
            </Button>

            <div className="flex w-full items-center gap-3">
                <div className="h-px flex-1 bg-border/80" />
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">or</span>
                <div className="h-px flex-1 bg-border/80" />
            </div>

            {!isVerifying ? (
                <form onSubmit={handleSignUp} className="w-full">
                    <div className="space-y-2 w-full">
                        <Label htmlFor="name">Full name</Label>
                        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" />
                    </div>
                    <div className="mt-4 space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" />
                    </div>
                    <div className="mt-4 space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative w-full">
                            <Input id="password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Choose a password" />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 -translate-y-1/2 opacity-60">{showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
                        </div>
                    </div>

                    <div className="mt-6">
                        <Button type="submit" disabled={isUpdating || registerMutation.isPending}>{isUpdating ? <LoaderIcon className="w-4 h-4 animate-spin" /> : "Create account"}</Button>
                    </div>
                </form>
            ) : (
                <form onSubmit={handleVerifyEmail} className="w-full">
                    <div className="space-y-2 w-full">
                        <Label htmlFor="code">Verification code</Label>
                        <InputOTP maxLength={4} value={code} onChange={setCode}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>

                    <div className="mt-6">
                        <Button type="submit" disabled={isLoading}>{isLoading ? <LoaderIcon className="w-4 h-4 animate-spin" /> : "Verify"}</Button>
                    </div>
                    <div className="mt-4 text-sm text-muted-foreground">
                        Already have an account? <Link href="/auth/sign-in">Sign in</Link>
                    </div>
                </form>
            )}
        </div>
    )
};

export default SignUpForm;
