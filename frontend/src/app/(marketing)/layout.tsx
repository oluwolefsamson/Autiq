import React from 'react';
import { Footer, Navbar } from "@/components";

interface Props {
    children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <main className="relative z-0 mt-20 mx-auto w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MarketingLayout
