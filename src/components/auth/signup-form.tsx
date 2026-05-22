"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, LoaderIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from "sonner";
import { InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { Label } from "../ui/label";

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

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !password) {
            toast.error("Name, email and password are required!");
            return;
        }

        setIsUpdating(true);

        // UI-only placeholder: simulate sending verification
        setTimeout(() => {
            setIsUpdating(false);
            toast.success("Verification code sent (UI-only).");
            setIsVerifying(true);
        }, 600);
    };

    const handleVerifyEmail = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!code) {
            toast.error("Verification code is required!");
            return;
        }

        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            toast.success("Account created (UI-only).");
            router.push("/dashboard");
        }, 600);
    };

    return (
        <div className="flex flex-col items-start gap-y-6 py-8 w-full px-0.5">
            <h2 className="text-2xl font-semibold">
                Create your account
            </h2>

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
                        <Button type="submit">{isUpdating ? <LoaderIcon className="w-4 h-4 animate-spin" /> : "Create account"}</Button>
                    </div>
                </form>
            ) : (
                <form onSubmit={handleVerifyEmail} className="w-full">
                    <div className="space-y-2 w-full">
                        <Label htmlFor="code">Verification code</Label>
                        <InputOTPGroup>
                            <InputOTPSlot value={code[0] ?? ""} onChange={(e: any) => setCode((s) => e.target.value + s.slice(1))} />
                            <InputOTPSlot value={code[1] ?? ""} onChange={(e: any) => setCode((s) => s.slice(0, 1) + e.target.value + s.slice(2))} />
                            <InputOTPSlot value={code[2] ?? ""} onChange={(e: any) => setCode((s) => s.slice(0, 2) + e.target.value + s.slice(3))} />
                            <InputOTPSlot value={code[3] ?? ""} onChange={(e: any) => setCode((s) => s.slice(0, 3) + e.target.value + s.slice(4))} />
                        </InputOTPGroup>
                    </div>

                    <div className="mt-6">
                        <Button type="submit">{isLoading ? <LoaderIcon className="w-4 h-4 animate-spin" /> : "Verify"}</Button>
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
