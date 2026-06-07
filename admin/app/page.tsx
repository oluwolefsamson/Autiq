import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Users, Database, Bot, LayoutDashboard, Bell } from "lucide-react";

const navItems = [
    { label: "Overview", href: "/admin", icon: LayoutDashboard },
    { label: "Alerts", href: "#alerts", icon: Bell },
] as const;

const stats = [
    { label: "Workspace health", value: "98%", note: "Systems stable", icon: ShieldCheck },
    { label: "Open leads", value: "12", note: "Captured today", icon: Users },
    { label: "Active conversations", value: "38", note: "Recent threads", icon: Database },
    { label: "Automation coverage", value: "91%", note: "Bot + FAQ routing", icon: Bot },
];

export default function AdminPage() {
    return (
        <div style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "260px 1fr" }}>
            <aside style={{ borderRight: "1px solid rgba(148,163,184,.18)", background: "rgba(15,23,42,.7)", padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 16, background: "linear-gradient(135deg, #14b8a6, #22d3ee)" }} />
                    <div>
                        <div style={{ fontWeight: 700 }}>Autiq Admin</div>
                        <div style={{ fontSize: 12, color: "#94a3b8" }}>Standalone console</div>
                    </div>
                </div>
                <nav style={{ display: "grid", gap: 8 }}>
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                        <Link key={item.label} href={item.href} style={{ color: "#cbd5e1", textDecoration: "none", padding: "12px 14px", borderRadius: 14, display: "flex", gap: 12, alignItems: "center" }}>
                            <Icon size={16} />
                            <span>{item.label}</span>
                        </Link>
                    )})}
                </nav>
            </aside>

            <main>
                <header style={{ padding: "28px 32px", borderBottom: "1px solid rgba(148,163,184,.18)", background: "rgba(2,6,23,.7)", backdropFilter: "blur(16px)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "end" }}>
                        <div>
                            <div style={{ display: "inline-block", padding: "6px 10px", borderRadius: 999, background: "rgba(148,163,184,.12)", color: "#cbd5e1", fontSize: 12 }}>Admin dashboard</div>
                            <h1 style={{ margin: "14px 0 8px", fontSize: 34, lineHeight: 1.1 }}>Platform operations at a glance</h1>
                            <p style={{ margin: 0, color: "#94a3b8", maxWidth: 820 }}>
                                Track backend usage, customer signals, and automation health from a standalone admin workspace.
                            </p>
                        </div>
                        <Link href="/dashboard" style={{ color: "#e2e8f0", textDecoration: "none", border: "1px solid rgba(148,163,184,.24)", borderRadius: 14, padding: "12px 16px", display: "inline-flex", alignItems: "center", gap: 8 }}>
                            Open dashboard
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </header>

                <section style={{ padding: 32, display: "grid", gap: 20 }}>
                    <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
                        {stats.map((stat) => {
                            const Icon = stat.icon;
                            return (
                                <article key={stat.label} style={{ border: "1px solid rgba(148,163,184,.18)", borderRadius: 20, background: "rgba(15,23,42,.55)", padding: 20 }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                                        <div>
                                            <div style={{ color: "#94a3b8", fontSize: 14 }}>{stat.label}</div>
                                            <div style={{ fontSize: 30, fontWeight: 700, marginTop: 10 }}>{stat.value}</div>
                                            <div style={{ color: "#94a3b8", fontSize: 12, marginTop: 4 }}>{stat.note}</div>
                                        </div>
                                        <div style={{ width: 40, height: 40, borderRadius: 14, background: "rgba(148,163,184,.1)", display: "grid", placeItems: "center", color: "#22d3ee" }}>
                                            <Icon size={16} />
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>
            </main>
        </div>
    );
}
