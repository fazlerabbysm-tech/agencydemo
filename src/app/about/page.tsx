import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import PageShell from "@/components/site/page-shell";
import FinalCTA from "@/components/site/final-cta";
import { JsonLd, getBreadcrumbSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "About Us — Digital Marketing Agency in Anaheim, CA",
  description:
    "Meet Katella Digital — a full-service digital marketing, SEO, AI Search (GEO), branding, and web engineering agency in Anaheim, Orange County, California.",
  alternates: { canonical: "/about" },
};

const stats = [
  { value: "9+ yrs", label: "Driving measurable digital growth" },
  { value: "250+", label: "Brands & long-term partners" },
  { value: "500+", label: "Campaigns, sites & launches shipped" },
  { value: "4.9★", label: "Average client satisfaction score" },
];

const values = [
  {
    no: "01",
    title: "Think first",
    desc: "Strategy precedes execution. We diagnose market demand, positioning, and unit economics before spending a dollar on ads or code.",
  },
  {
    no: "02",
    title: "Data before spend",
    desc: "Every channel decision, creative test, and landing-page iteration is backed by clean attribution and real buyer behavior.",
  },
  {
    no: "03",
    title: "California & national insight",
    desc: "Rooted in Anaheim and Orange County while scaling ambitious brands across Southern California and nationwide US markets.",
  },
  {
    no: "04",
    title: "Global craft",
    desc: "Editorial design precision, sub-second web engineering, and clean AI-ready semantic architecture on every project.",
  },
  {
    no: "05",
    title: "True partnership",
    desc: "Direct access to senior strategists and makers — transparent scorecards, clear timelines, and zero agency fluff.",
  },
  {
    no: "06",
    title: "Revenue that matters",
    desc: "Impressions are easy; qualified pipeline and profitable customer acquisition are the only metrics we optimize for.",
  },
];

const disciplines = [
  {
    title: "Growth & Brand Strategy",
    desc: "Market positioning, ICP messaging, offer architecture, and 90-day channel roadmaps.",
  },
  {
    title: "SEO & AI Search (GEO)",
    desc: "Technical SEO, Local Map Pack authority, structured knowledge graphs, and ChatGPT/AI citation visibility.",
  },
  {
    title: "Paid Media & Performance",
    desc: "Google Ads, Meta, LinkedIn, YouTube, and TikTok acquisition backed by weekly creative testing.",
  },
  {
    title: "Brand Identity & Creative",
    desc: "Visual systems, logo architecture, motion graphics, and scroll-stopping campaign direction.",
  },
  {
    title: "Web & App Engineering",
    desc: "Sub-second Next.js static websites, Shopify e-commerce, UI/UX design, and custom web apps.",
  },
  {
    title: "CRM & Attribution Ops",
    desc: "HubSpot/CRM pipelines, instant lead follow-up automation, and closed-loop revenue tracking.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />

      <div className="pt-28 sm:pt-32 lg:pt-40 pb-10">
        {/* 01 — Hero */}
        <section className="pb-14 sm:pb-16">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs font-mono text-white/55 mb-6"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-white/35" />
              <span className="text-[#FF4D73]">About Us</span>
            </nav>

            <div className="max-w-4xl space-y-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                About Katella Digital
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl lg:text-[64px] text-white text-balance">
                A California digital marketing agency built to drive business
                growth<span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
                We bring strategy, creative, SEO &amp; AI Search (GEO), paid
                acquisition, and modern web engineering together under one roof
                — built for brands that measure marketing in revenue.
              </p>
            </div>
          </div>
        </section>

        {/* 02 — Editorial Statement + Stats Glass Grid */}
        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 space-y-6">
            <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 lg:p-14">
              <p className="font-display font-semibold text-xl sm:text-2xl lg:text-3xl text-white leading-snug max-w-4xl">
                Most agencies split your growth across disconnected silos — one
                vendor runs ads, another touches SEO, and a third patches a slow
                website.{" "}
                <span className="text-white/60">
                  Katella Digital was founded to end that fragmentation and align
                  every discipline around one shared revenue scorecard.
                </span>
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[148px]"
                >
                  <p className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-white tabular-nums tracking-tight">
                    {s.value}
                  </p>
                  <p className="text-xs sm:text-sm text-white/65 mt-3">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 03 — Agency Standard Split + Headquarters Visual */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
            <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 lg:p-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                    Who we are
                  </p>
                  <h2 className="font-display font-bold tracking-[-0.03em] text-3xl sm:text-4xl text-white leading-tight">
                    An Anaheim agency with a global standard.
                  </h2>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    From Orange County growth companies to national e-commerce
                    and B2B brands, we operate as an embedded growth partner —
                    combining senior creative taste with performance-engineering
                    rigor.
                  </p>
                  <ul className="space-y-3 pt-1">
                    {[
                      "Senior strategists & makers on every account",
                      "100% transparent ad accounts, code & analytics ownership",
                      "Built for Google Search, paid acquisition & AI Search (GEO)",
                    ].map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 text-sm text-white/80"
                      >
                        <span className="h-5 w-5 rounded-full bg-[#C71F42]/20 border border-[#C71F42]/45 flex items-center justify-center text-[#FF4D73] shrink-0">
                          <Check className="h-3 w-3" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-7">
                  <div className="rounded-2xl overflow-hidden border border-white/15">
                    <img
                      src="/images/about-agency-office.webp"
                      alt="Katella Digital marketing agency headquarters in Anaheim, California"
                      className="w-full aspect-[16/10] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — 6 Core Values Frosted Glass Grid */}
        <section id="values" className="py-12 sm:py-16">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl mb-10 sm:mb-12">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
                How we operate
              </p>
              <h2 className="font-display font-bold tracking-[-0.03em] text-3xl sm:text-4xl lg:text-[44px] text-white leading-tight">
                Market strategy and data come before any marketing campaign.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((val) => (
                <div
                  key={val.no}
                  className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-7 space-y-3"
                >
                  <span className="font-mono text-xs text-[#FF4D73]">
                    {val.no}
                  </span>
                  <h3 className="font-display font-bold text-xl text-white">
                    {val.title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 — Vision Banner */}
        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
            <div className="kd-obsidian-card rounded-3xl p-8 sm:p-12 lg:p-16 text-center space-y-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#FF4D73]">
                Our vision
              </p>
              <h2 className="font-display font-extrabold tracking-[-0.03em] text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl mx-auto leading-tight">
                Driving measurable digital growth for a new generation of
                category leaders.
              </h2>
              <p className="text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
                As search shifts toward AI answers and ad platforms demand
                stronger creative velocity, we build marketing systems that stay
                fast, resilient, and compounding for years to come.
              </p>
            </div>
          </div>
        </section>

        {/* 06 — One Team, Every Discipline */}
        <section id="team" className="py-12 sm:py-16">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div className="max-w-2xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
                  In-house practices
                </p>
                <h2 className="font-display font-bold tracking-[-0.03em] text-3xl sm:text-4xl text-white">
                  One team, every discipline.
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-white/80 hover:text-white"
              >
                Explore all services{" "}
                <ArrowRight className="h-4 w-4 text-[#FF4D73]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {disciplines.map((d) => (
                <div
                  key={d.title}
                  className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-6 space-y-2.5"
                >
                  <h3 className="font-display font-bold text-lg text-white">
                    {d.title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 07 — Final CTA */}
        <FinalCTA />
      </div>
    </PageShell>
  );
}
