import { HelpCircleIcon, LineChartIcon, Link2Icon, LockIcon, NewspaperIcon, QrCodeIcon } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "Features",
        href: "/features",
        menu: [
            {
                title: "Website Chatbot",
                tagline: "Respond to visitors instantly on your website.",
                href: "/features/link-shortening",
                icon: Link2Icon,
            },
            {
                title: "Email Automation",
                tagline: "Automate replies from Gmail or SMTP.",
                href: "/features/password-protection",
                icon: LockIcon,
            },
            {
                title: "FAQ Knowledge Base",
                tagline: "Turn common questions into instant answers.",
                href: "/features/analytics",
                icon: LineChartIcon,
            },
            {
                title: "Lead Capture",
                tagline: "Store inquiries and track every lead.",
                href: "/features/qr-codes",
                icon: QrCodeIcon,
            },
        ],
    },
    {
        title: "Pricing",
        href: "/pricing",
    },
    {
        title: "Enterprise",
        href: "/enterprise",
    },
    {
        title: "Resources",
        href: "/resources",
        menu: [
            {
                title: "Blog",
                tagline: "Read practical guides for customer support teams.",
                href: "/resources/blog",
                icon: NewspaperIcon,
            },
            {
                title: "Help",
                tagline: "Get answers about setup, FAQs, and integrations.",
                href: "/resources/help",
                icon: HelpCircleIcon,
            },
        ]
    },
    {
        title: "Changelog",
        href: "/changelog",
    },
];
