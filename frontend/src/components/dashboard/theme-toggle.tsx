"use client";

import { useEffect, useState } from "react";
import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const activeTheme = theme === "system" ? resolvedTheme : theme;
    const isDark = activeTheme === "dark";

    return (
        <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
            className="relative"
        >
            <SunMedium className={`h-4 w-4 transition-all ${mounted && isDark ? "scale-0 rotate-90" : "scale-100 rotate-0"}`} />
            <MoonStar className={`absolute h-4 w-4 transition-all ${mounted && isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90"}`} />
        </Button>
    );
};

export default ThemeToggle;
