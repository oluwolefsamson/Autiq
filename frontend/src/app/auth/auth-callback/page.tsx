"use client";

import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

const AuthCallbackPage = () => {

    const router = useRouter();

    const { data, isLoading } = useQuery({
        queryKey: ["auth-status"],
        queryFn: async () => {
            return api.get("/auth/me");
        },
        retry: false,
    });

    useEffect(() => {
        if (data) {
            router.replace("/dashboard");
        }
    }, [data, router]);

    return (
        <div className="flex items-center justify-center flex-col h-screen relative">
            <div className="border-[3px] border-neutral-800 rounded-full border-b-neutral-200 animate-loading w-8 h-8"></div>
            <p className="text-lg font-medium text-center mt-3">
                {isLoading ? "Verifying your account..." : "Redirecting..."}
            </p>
        </div>
    )
};

export default AuthCallbackPage;
