"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Props {
    children: React.ReactNode;
    className?: string;
}

const AuthAwareLink = ({ children, className }: Props) => {
    const [signedIn, setSignedIn] = useState(false);

    useEffect(() => {
        try {
            const v = localStorage.getItem("auth:signedIn");
            setSignedIn(v === "true");
        } catch (e) {
            setSignedIn(false);
        }
    }, []);

    return (
        <Link href={signedIn ? "/dashboard" : "/auth/sign-in"} className={className}>
            {children}
        </Link>
    );
};

export default AuthAwareLink;
