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
import StoreCTAButton from "@/components/global/store-cta-button";

const HomePage = () => {

    return (
        <div className="overflow-x-hidden scrollbar-hide size-full bg-black text-white">
            {/* Hero Section */}
            <MaxWidthWrapper>
                <section className="relative py-6 md:py-10">
                    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:justify-items-center lg:gap-8">
                        <AnimationContainer className="relative z-10 max-w-xl text-left lg:text-center">
                            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-neutral-300">
                                AI customer support for modern teams
                            </div>
                            <h1 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl md:text-6xl lg:text-6xl !leading-[1.02]">
                                AI Customer Support with <span className="inline-block text-transparent bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text">
                                    Speed
                                </span>
                            </h1>
                            <p className="mt-5 max-w-lg text-base leading-7 text-neutral-300 md:text-lg">
                                Respond faster, capture leads, and stay available 24/7 without overloading your team.
                            </p>

                            <div className="mt-8 flex flex-col items-start gap-4 lg:items-center">
                                <div className="flex flex-wrap items-center justify-center gap-4">
                                    <Button asChild>
                                        <AuthAwareLink className="flex items-center">
                                            Start automating support
                                            <ArrowRightIcon className="ml-2 h-4 w-4" />
                                        </AuthAwareLink>
                                    </Button>
                                    <Button variant="outline" asChild className="border-white/15 bg-white/5 text-white hover:bg-white/10">
                                        <a href="#features">Learn more</a>
                                    </Button>
                                </div>

                                <div className="flex flex-wrap justify-center gap-3">
                                    <StoreCTAButton store="App Store" />
                                    <StoreCTAButton store="Play Store" />
                                </div>
                            </div>
                        </AnimationContainer>

                        <AnimationContainer delay={0.2} className="relative z-10">
                            <div className="relative flex w-full max-w-full flex-col gap-0 sm:max-w-[280px] sm:gap-3 lg:max-w-[300px]">
                                <div className="relative z-10 w-[88%] max-w-[300px] overflow-hidden rounded-[1rem] bg-white/5 p-1 shadow-[0_18px_40px_rgba(0,0,0,0.16)] ring-1 ring-white/10 sm:w-full">
                                    <BorderBeam
                                        size={220}
                                        duration={12}
                                        colorFrom="#22c55e"
                                        colorTo="#14b8a6"
                                        delay={9}
                                    />
                                    <Image
                                        src="/assets/autiq-chat-cover.png"
                                        alt="Autiq chat cover"
                                        width={1280}
                                        height={1280}
                                        quality={100}
                                        priority
                                        className="h-full w-full rounded-[0.85rem] object-cover"
                                    />
                                </div>

                                <div className="relative z-20 -mt-10 grid w-full justify-items-end gap-3 sm:mt-0 sm:grid-cols-[0.95fr_1.05fr] sm:items-start sm:justify-items-stretch">
                                    <div className="relative z-20 -mt-6 justify-self-end ml-8 w-[64%] max-w-[220px] overflow-hidden rounded-[1rem] bg-white/5 p-1 shadow-[0_14px_30px_rgba(0,0,0,0.14)] ring-1 ring-white/10 sm:col-start-1 sm:row-start-1 sm:justify-self-auto sm:ml-0 sm:mt-0 sm:w-auto">
                                        <BorderBeam
                                            size={180}
                                            duration={12}
                                            colorFrom="#22c55e"
                                            colorTo="#14b8a6"
                                            delay={11}
                                        />
                                        <Image
                                            src="/assets/autiq-hero-mobile.jpg"
                                            alt="Autiq mobile chatbot preview"
                                            width={900}
                                            height={1200}
                                            quality={100}
                                            className="h-full w-full rounded-[0.85rem] object-cover"
                                        />
                                    </div>

                                    <div className="justify-self-start rounded-[0.9rem] border border-white/10 bg-white/5 p-3 shadow-sm sm:col-start-2 sm:row-start-1 sm:justify-self-auto">
                                        <div className="grid gap-4">
                                            <div>
                                                <p className="text-lg font-semibold text-white">Live chat</p>
                                                <p className="mt-1 text-xs text-neutral-400">Talk to visitors in real time</p>
                                            </div>
                                            <div className="h-px w-full bg-white/10" />
                                            <div>
                                                <p className="text-lg font-semibold text-white">Lead capture</p>
                                                <p className="mt-1 text-xs text-neutral-400">Turn conversations into customers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimationContainer>
                    </div>
                </section>
            </MaxWidthWrapper>

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
