"use client";

import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";

interface Props {
    children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
    const [client] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={client}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    )
};

export default Providers
