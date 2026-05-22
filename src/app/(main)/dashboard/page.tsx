"use client"

import { DashboardNavbar, Sidebar } from "@/components";
import React from 'react'

const DashboardPage = () => {

    return (
        <div className="grid w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] h-screen">
            <Sidebar />
            <div className="flex flex-col">
                <DashboardNavbar />
                <main className="flex-1 overflow-auto p-4 md:p-6">
                    <div className="flex flex-col items-center justify-center h-full">
                        <h1 className="text-2xl font-bold text-foreground">
                            Dashboard
                        </h1>
                        <p className="text-muted-foreground mt-2">
                            Your dashboard UI is ready.
                        </p>
                    </div>
                </main>
            </div>
        </div>
    )
};

export default DashboardPage
