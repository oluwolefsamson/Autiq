"use client";

import { Button } from "@/components/ui/button";
import { Apple, PlayCircle } from "lucide-react";
import { toast } from "sonner";

type StoreCTAButtonProps = {
    store: "App Store" | "Play Store";
};

const StoreCTAButton = ({ store }: StoreCTAButtonProps) => {
    const Icon = store === "App Store" ? Apple : PlayCircle;

    return (
        <Button
            type="button"
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
            onClick={() => toast.info("Coming soon.")}
        >
            <Icon className="mr-2 h-4 w-4" />
            {store}
        </Button>
    );
};

export default StoreCTAButton;
