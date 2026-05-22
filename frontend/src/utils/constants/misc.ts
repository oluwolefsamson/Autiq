import { BarChart3Icon, FolderOpenIcon, WandSparklesIcon } from "lucide-react";

export const DEFAULT_AVATAR_URL = "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

export const COMPANIES = [
    {
        name: "Real Estate",
        logo: "/assets/company-01.svg",
    },
    {
        name: "Schools",
        logo: "/assets/company-02.svg",
    },
    {
        name: "Clinics",
        logo: "/assets/company-03.svg",
    },
    {
        name: "Hotels",
        logo: "/assets/company-04.svg",
    },
    {
        name: "Consultants",
        logo: "/assets/company-05.svg",
    },
    {
        name: "SMEs",
        logo: "/assets/company-06.svg",
    }
] as const;

export const PROCESS = [
    {
        title: "Set up your business profile",
        description: "Add your company details, support hours, and preferred tone so AI replies stay on brand.",
        icon: FolderOpenIcon,
    },
    {
        title: "Upload FAQs and documents",
        description: "Build a knowledge base from common questions, service docs, and policies.",
        icon: WandSparklesIcon,
    },
    {
        title: "Connect chat and email",
        description: "Attach your website widget and inbox so Autiq can respond across both channels.",
        icon: BarChart3Icon,
    },
] as const;

export const FEATURES = [
    {
        title: "Website chatbot",
        description: "Respond to customer questions directly on your website.",
    },
    {
        title: "Email automation",
        description: "Handle customer emails automatically from Gmail or SMTP.",
    },
    {
        title: "FAQ management",
        description: "Keep answers organized in a knowledge base for faster replies.",
    },
    {
        title: "Lead capture",
        description: "Store every customer inquiry in one dashboard.",
    },
    {
        title: "Human handoff",
        description: "Let your team step in when a conversation needs manual attention.",
    },
    {
        title: "Analytics",
        description: "Track response times, lead volume, and conversion activity.",
    },
] as const;

export const REVIEWS = [
    {
        name: "Aisha Musa",
        username: "@aishamusa",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        rating: 5,
        review: "We stopped losing leads after hours. The chatbot answers common questions and our team now follows up on qualified inquiries faster."
    },
    {
        name: "Chinedu Okafor",
        username: "@chineduokafor",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 4,
        review: "Setup was straightforward. We uploaded FAQs, connected email, and the support inbox became much easier to manage."
    },
    {
        name: "Bola Adeyemi",
        username: "@bolaadeyemi",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        rating: 5,
        review: "Autiq fits the way our team works. It captures leads, answers FAQs, and keeps everything in one dashboard."
    },
    {
        name: "Miriam Hassan",
        username: "@miriamhassan",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        rating: 4,
        review: "The email automation helped us reduce response delays and made our customer service feel much more consistent."
    },
    {
        name: "Usman Bello",
        username: "@usmanbello",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        rating: 5,
        review: "The dashboard gives us a clear view of every lead that comes in from chat or email."
    },
    {
        name: "Ngozi Eze",
        username: "@ngozieze",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        rating: 4,
        review: "It feels built for small businesses in our market, not a generic enterprise product."
    },
    {
        name: "Tunde Kareem",
        username: "@tundekareem",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        rating: 5,
        review: "The lead capture workflow helps our sales team act faster and follow up more reliably."
    },
    {
        name: "Zainab Ibrahim",
        username: "@zainabibrahim",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        rating: 4,
        review: "The knowledge base keeps answers consistent across both website chat and email."
    },
    {
        name: "David Peters",
        username: "@davidpeters",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        rating: 5,
        review: "This is the kind of AI support product that makes sense for SMEs that need faster replies without hiring more staff."
    },
] as const;
