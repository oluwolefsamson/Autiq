import { AnimationContainer, MaxWidthWrapper, PricingCards } from "@/components";
import { BentoCard, BentoGrid, CARDS } from "@/components/ui/bento-grid";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { COMPANIES, PROCESS } from "@/utils";
import { REVIEWS } from "@/utils/constants/misc";
import { ArrowRightIcon, CreditCardIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import AuthAwareLink from "@/components/auth/auth-aware-link";

const HomePage = () => {

    return (
        <div className="overflow-x-hidden scrollbar-hide size-full bg-black text-white">
            {/* Hero Section */}
            <MaxWidthWrapper>
                <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-black via-black to-neutral-950">
                    <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
                        <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-black transition-colors duration-200 group-hover:bg-neutral-900" />
                            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/20"></span>
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1">
                                Built for businesses that miss leads after hours
                                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                            </span>
                        </button>
                        <h1 className="text-white text-center py-6 text-5xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">
                            AI Customer Support with <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text inline-block">
                                Speed
                            </span>
                        </h1>
                        <p className="mb-12 text-lg tracking-tight text-neutral-300 md:text-xl text-balance">
                            Autiq helps businesses respond to customer inquiries automatically across website chat and email.
                            <br className="hidden md:block" />
                            <span className="hidden md:block">Capture leads, answer FAQs, and reduce response time for every inquiry.</span>
                        </p>
                        <div className="flex items-center justify-center whitespace-nowrap gap-4 z-50">
                            <Button asChild>
                            <AuthAwareLink className="flex items-center">
                                    Start automating support
                                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </AuthAwareLink>
                            </Button>
                        </div>
                    </AnimationContainer>

                    <AnimationContainer delay={0.2} className="relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full">
                        <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>
                        <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                            <BorderBeam
                                size={250}
                                duration={12}
                                colorFrom="#ff6bd6"
                                colorTo="#8b5cf6"
                                delay={9}
                            />
                            <Image
                                src="/assets/dashboard-dark.png"
                                alt="Dashboard"
                                width={1200}
                                height={1200}
                                quality={100}
                                className="rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border"
                            />
                            <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-black z-40"></div>
                            <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-black z-50"></div>
                        </div>
                    </AnimationContainer>
                </div>
            </MaxWidthWrapper >

            {/* Companies Section */}
            <MaxWidthWrapper>
                <AnimationContainer delay={0.4}>
                    <div className="py-14">
                        <div className="mx-auto px-4 md:px-8">
                                <h2 className="text-center text-sm font-medium font-heading text-neutral-300 uppercase">
                                Built for real estate, schools, clinics, hotels, consultants, and SMEs
                            </h2>
                            <div className="mt-8">
                                <ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center">
                                    {COMPANIES.map((company) => (
                                        <li key={company.name}>
                                            <Image
                                                src={company.logo}
                                                alt={company.name}
                                                width={80}
                                                height={80}
                                                quality={100}
                                                className="w-28 h-auto"
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* Features Section */}
            <MaxWidthWrapper className="pt-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
                        <MagicBadge title="Features" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-white mt-6">
                            Automate customer support in one place
                        </h2>
                            <p className="mt-4 text-center lg:text-center text-lg text-neutral-300 max-w-lg">
                            Autiq combines website chat, email automation, FAQ management, and lead capture in one simple dashboard.
                        </p>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <BentoGrid className="py-8">
                        {CARDS.map((feature, idx) => (
                            <BentoCard key={idx} {...feature} />
                        ))}
                    </BentoGrid>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* Process Section */}
            <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="The Process" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-white mt-6">
                            Launch in 3 steps
                        </h2>
                            <p className="mt-4 text-center lg:text-center text-lg text-neutral-300 max-w-lg">
                            Set up your support flow and start answering customers faster.
                        </p>
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
                    {PROCESS.map((process, id) => (
                        <AnimationContainer delay={0.2 * id} key={id}>
                            <MagicCard className="group md:py-8">
                                <div className="flex flex-col items-start justify-center w-full">
                                    <process.icon strokeWidth={1.5} className="w-10 h-10 text-white" />
                                    <div className="flex flex-col relative items-start">
                                        <span className="absolute -top-6 right-0 border-2 border-white/15 text-white font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
                                            {id + 1}
                                        </span>
                                        <h3 className="text-base mt-6 font-medium text-white">
                                            {process.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-neutral-300">
                                            {process.description}
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                        </AnimationContainer>
                    ))}
                </div>
            </MaxWidthWrapper>

            {/* Pricing Section */}
            <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="Simple Pricing" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-white mt-6">
                            Choose a plan that fits your team
                        </h2>
                            <p className="mt-4 text-center lg:text-center text-lg text-neutral-300 max-w-lg">
                            Subscription plans are built for growing businesses that want reliable support automation without enterprise complexity.
                        </p>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <PricingCards />
                </AnimationContainer>
                <AnimationContainer delay={0.3}>
                    <div className="flex flex-wrap items-start md:items-center justify-center lg:justify-evenly gap-6 mt-12 max-w-5xl mx-auto w-full">
                        <div className="flex items-center gap-2">
                            <CreditCardIcon className="w-5 h-5 text-white" />
                            <span className="text-neutral-300">
                                No credit card required for the trial
                            </span>
                        </div>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* Reviews Section */}
            <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="Our Customers" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-white mt-6">
                            What businesses are saying
                        </h2>
                            <p className="mt-4 text-center lg:text-center text-lg text-neutral-300 max-w-lg">
                            Here&apos;s what teams using Autiq say about faster replies and more consistent follow-up.
                        </p>
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-4 md:gap-8 py-10">
                    <div className="flex flex-col items-start h-min gap-6">
                        {REVIEWS.slice(0, 3).map((review, index) => (
                            <AnimationContainer delay={0.2 * index} key={index}>
                                <MagicCard key={index} className="md:p-0">
                                    <Card className="flex flex-col w-full h-min border border-white/10 bg-neutral-950/80 text-white shadow-none">
                                        <CardHeader className="space-y-0">
                                            <CardTitle className="text-lg font-medium text-white">
                                                {review.name}
                                            </CardTitle>
                                            <CardDescription className="text-neutral-400">
                                                {review.username}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4 pb-4">
                                            <p className="text-neutral-300">
                                                {review.review}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="w-full space-x-1 mt-auto">
                                            {Array.from({ length: review.rating }, (_, i) => (
                                                <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                            ))}
                                        </CardFooter>
                                    </Card>
                                </MagicCard>
                            </AnimationContainer>
                        ))}
                    </div>
                    <div className="flex flex-col items-start h-min gap-6">
                        {REVIEWS.slice(3, 6).map((review, index) => (
                            <AnimationContainer delay={0.2 * index} key={index}>
                                <MagicCard key={index} className="md:p-0">
                                    <Card className="flex flex-col w-full h-min border border-white/10 bg-neutral-950/80 text-white shadow-none">
                                        <CardHeader className="space-y-0">
                                            <CardTitle className="text-lg font-medium text-white">
                                                {review.name}
                                            </CardTitle>
                                            <CardDescription className="text-neutral-400">
                                                {review.username}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4 pb-4">
                                            <p className="text-neutral-300">
                                                {review.review}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="w-full space-x-1 mt-auto">
                                            {Array.from({ length: review.rating }, (_, i) => (
                                                <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                            ))}
                                        </CardFooter>
                                    </Card>
                                </MagicCard>
                            </AnimationContainer>
                        ))}
                    </div>
                    <div className="flex flex-col items-start h-min gap-6">
                        {REVIEWS.slice(6, 9).map((review, index) => (
                            <AnimationContainer delay={0.2 * index} key={index}>
                                <MagicCard key={index} className="md:p-0">
                                    <Card className="flex flex-col w-full h-min border border-white/10 bg-neutral-950/80 text-white shadow-none">
                                        <CardHeader className="space-y-0">
                                            <CardTitle className="text-lg font-medium text-white">
                                                {review.name}
                                            </CardTitle>
                                            <CardDescription className="text-neutral-400">
                                                {review.username}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4 pb-4">
                                            <p className="text-neutral-300">
                                                {review.review}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="w-full space-x-1 mt-auto">
                                            {Array.from({ length: review.rating }, (_, i) => (
                                                <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                            ))}
                                        </CardFooter>
                                    </Card>
                                </MagicCard>
                            </AnimationContainer>
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>

            {/* CTA Section */}
            <MaxWidthWrapper className="mt-20 max-w-[100vw] overflow-x-hidden scrollbar-hide">
                <AnimationContainer delay={0.1}>
                    <section className="relative w-full px-4 md:px-8 pb-10">
                        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0f17] shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_40%)]" />
                            <div className="relative grid gap-8 p-6 md:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 md:p-10">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.09),transparent_40%)]" />
                                    <div className="relative">
                                        <div className="inline-flex items-center rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs uppercase tracking-[0.22em] text-neutral-200">
                                            Customer support, upgraded
                                        </div>
                                        <h2 className="mt-5 max-w-xl font-heading text-4xl font-medium tracking-tight text-white md:text-6xl !leading-[1.05]">
                                            Step into the future of customer support
                                        </h2>
                                        <p className="mt-5 max-w-xl text-base leading-7 text-neutral-200 md:text-lg">
                                            Replace slow manual replies with a system that answers customers, captures leads, and routes important conversations to your team.
                                        </p>
                                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                                            <Button asChild size="lg" className="w-full sm:w-auto">
                                                <AuthAwareLink className="flex items-center justify-center">
                                                    Book your setup
                                                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                                                </AuthAwareLink>
                                            </Button>
                                            <p className="text-sm text-neutral-300">
                                                Fast setup. Clear handoff. No missed leads.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                                    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
                                        <p className="text-sm uppercase tracking-[0.2em] text-neutral-300">Respond</p>
                                        <p className="mt-3 text-lg font-medium text-white">
                                            Answer common questions instantly, day or night.
                                        </p>
                                    </div>
                                    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
                                        <p className="text-sm uppercase tracking-[0.2em] text-neutral-300">Capture</p>
                                        <p className="mt-3 text-lg font-medium text-white">
                                            Turn support traffic into qualified leads automatically.
                                        </p>
                                    </div>
                                    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5 sm:col-span-2 lg:col-span-1">
                                        <p className="text-sm uppercase tracking-[0.2em] text-neutral-300">Escalate</p>
                                        <p className="mt-3 text-lg font-medium text-white">
                                            Send the right conversations to your team without delay.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </AnimationContainer>
            </MaxWidthWrapper>

        </div>
    )
};

export default HomePage
