// export const PLANS = [
//     {
//         name: "Free",
//         info: "For most individuals",
//         price: {
//             monthly: 0,
//             yearly: 0,
//         },
//         features: [
//             { text: "Shorten links" },
//             { text: "Up to 100 tags", limit: "100 tags" },
//             { text: "Customizable branded links" },
//             { text: "Track clicks", tooltip: "1K clicks/month" },
//             { text: "Community support", tooltip: "Get answers your questions on discord" },
//             { text: "AI powered suggestions", tooltip: "Get up to 100 AI powered suggestions" },
//         ],
//         btn: {
//             text: "Start for free",
//             href: "/auth/sign-up?plan=free",
//             variant: "default",
//         }
//     },
//     {
//         name: "Pro",
//         info: "For small businesses",
//         price: {
//             monthly: 9,
//             yearly: 90,
//         },
//         features: [
//             { text: "Shorten links" },
//             { text: "Up to 500 tags", limit: "500 tags" },
//             { text: "Customizable branded links" },
//             { text: "Track clicks", tooltip: "20K clicks/month" },
//             { text: "Export click data", tooltip: "Upto 1K links" },
//             { text: "Priority support", tooltip: "Get 24/7 chat support" },
//             { text: "AI powered suggestions", tooltip: "Get up to 500 AI powered suggestions" },
//         ],
//         btn: {
//             text: "Get started",
//             href: "/auth/sign-up?plan=pro",
//             variant: "purple",
//         }
//     },
//     {
//         name: "Business",
//         info: "For large organizations",
//         price: {
//             monthly: 49,
//             yearly: 490,
//         },
//         features: [
//             { text: "Shorten links" },
//             { text: "Unlimited tags" },
//             { text: "Customizable branded links"},
//             { text: "Track clicks", tooltip: "Unlimited clicks" },
//             { text: "Export click data", tooltip: "Unlimited clicks" },
//             { text: "Dedicated manager", tooltip: "Get priority support from our team" },
//             { text: "AI powered suggestions", tooltip: "Get unlimited AI powered suggestions" },
//         ],
//         btn: {
//             text: "Contact team",
//             href: "/auth/sign-up?plan=business",
//             variant: "default",
//         }
//     }
// ];

// export const PRICING_FEATURES = [
//     {
//         text: "Shorten links",
//         tooltip: "Create shortened links",
//     },
//     {
//         text: "Track clicks",
//         tooltip: "Track clicks on your links",
//     },
//     {
//         text: "See top countries",
//         tooltip: "See top countries where your links are clicked",
//     },
//     {
//         text: "Upto 10 tags",
//         tooltip: "Add upto 10 tags to your links",
//     },
//     {
//         text: "Community support",
//         tooltip: "Community support is available for free users",
//     },
//     {
//         text: "Priority support",
//         tooltip: "Get priority support from our team",
//     },
//     {
//         text: "AI powered suggestions",
//         tooltip: "Get AI powered suggestions for your links",
//     },
// ];

// export const WORKSPACE_LIMIT = 2;
export const PLANS = [
    {
        name: "Basic",
        info: "For startups and small teams",
        price: {
            monthly: 15000,
            yearly: Math.round(15000 * 12 * (1 - 0.12)),
        },
        features: [
            { text: "Website chatbot widget" },
            { text: "FAQ management" },
            { text: "Lead capture" },
            { text: "Business profile setup" },
        ],
        btn: {
            text: "Get started",
            href: "/auth/sign-up?plan=basic",
            variant: "default",
        }
    },
    {
        name: "Pro",
        info: "For growing support teams",
        price: {
            monthly: 50000,
            yearly: Math.round(50000 * 12 * (1 - 0.12)),
        },
        features: [
            { text: "Website chatbot widget" },
            { text: "Email automation" },
            { text: "FAQ knowledge base" },
            { text: "Lead dashboard" },
            { text: "Custom response tone" },
        ],
        btn: {
            text: "Get started",
            href: "/auth/sign-up?plan=pro",
            variant: "purple",
        }
    },
    {
        name: "Enterprise",
        info: "For teams with advanced workflow needs",
        price: {
            monthly: 100000,
            yearly: Math.round(100000 * 12 * (1 - 0.12)),
        },
        features: [
            { text: "Multi-channel automation" },
            { text: "Human handoff workflow" },
            { text: "Advanced analytics" },
            { text: "Custom onboarding" },
            { text: "Priority support" },
        ],
        btn: {
            text: "Contact team",
            href: "/auth/sign-up?plan=enterprise",
            variant: "default",
        }
    }
];

export const PRICING_FEATURES = [
    {
        text: "Website chatbot",
        tooltip: "Respond to website visitors instantly",
    },
    {
        text: "Email automation",
        tooltip: "Automatically handle incoming emails",
    },
    {
        text: "Lead capture",
        tooltip: "Store and manage customer inquiries",
    },
    {
        text: "FAQ management",
        tooltip: "Keep answers in one place",
    },
    {
        text: "Team collaboration",
        tooltip: "Share leads with your team",
    },
    {
        text: "Priority support",
        tooltip: "Get support during onboarding and launch",
    },
    {
        text: "AI responses",
        tooltip: "Generate replies from your business knowledge base",
    },
];

export const WORKSPACE_LIMIT = 2;
