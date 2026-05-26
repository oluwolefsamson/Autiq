import { Skeleton } from "@/components/ui/skeleton";

const DashboardLoading = () => {
    return (
        <div className="grid h-screen w-full overflow-hidden bg-background md:grid-cols-[240px_1fr] lg:grid-cols-[260px_1fr]">
            <aside className="hidden border-r border-border/60 bg-background/80 md:flex md:flex-col">
                <div className="border-b border-border/60 px-5 py-5">
                    <Skeleton className="h-9 w-9 rounded-xl" />
                    <Skeleton className="mt-4 h-4 w-24" />
                    <Skeleton className="mt-2 h-3 w-16" />
                </div>
                <div className="space-y-2 px-3 py-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Skeleton key={index} className="h-10 w-full rounded-xl" />
                    ))}
                </div>
            </aside>

            <div className="flex min-h-0 flex-col">
                <div className="sticky top-0 z-20 border-b border-border/60 bg-background/80 px-4 py-4 backdrop-blur-md lg:px-6">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <Skeleton className="h-9 w-9 rounded-xl md:hidden" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-3 w-36" />
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Skeleton className="h-8 w-8 rounded-full" />
                            <Skeleton className="hidden h-8 w-20 rounded-md md:block" />
                            <Skeleton className="h-8 w-8 rounded-full" />
                        </div>
                    </div>
                    <Skeleton className="mt-4 h-10 w-full max-w-xl rounded-xl" />
                </div>

                <main className="flex-1 overflow-y-auto px-4 py-5 md:px-6 md:py-6 lg:px-8 lg:py-8">
                    <div className="mx-auto flex max-w-6xl flex-col gap-6">
                        <Skeleton className="h-48 w-full rounded-2xl" />
                        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <Skeleton key={index} className="h-28 rounded-2xl" />
                            ))}
                        </section>
                        <section className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
                            <Skeleton className="h-96 rounded-2xl" />
                            <Skeleton className="h-96 rounded-2xl" />
                        </section>
                        <section className="grid gap-5 xl:grid-cols-[1fr_1fr]">
                            <Skeleton className="h-80 rounded-2xl" />
                            <Skeleton className="h-80 rounded-2xl" />
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLoading;
