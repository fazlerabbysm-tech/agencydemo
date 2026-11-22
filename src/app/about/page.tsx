import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Lightbulb,
  BarChart3,
  Compass,
  Gem,
  Handshake,
  TrendingUp,
} from "lucide-react";
import PageShell from "@/components/site/page-shell";
import FinalCTA from "@/components/site/final-cta";
import { JsonLd, getBreadcrumbSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "About Us — Digital Marketing Agency in Anaheim, CA",
  description:
    "Meet the Katella Digital leadership team — a full-service digital marketing, SEO, AI Search (GEO), branding, and web engineering agency in Anaheim, Orange County, California.",
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
    icon: Lightbulb,
    tag: "Strategy first",
    title: "Think first",
    desc: "Market strategy, positioning, and unit economics always come before launching a single ad or line of code.",
  },
  {
    icon: BarChart3,
    tag: "Evidence-led",
    title: "Data before spend",
    desc: "Every channel decision, creative test, and landing-page iteration is backed by clean attribution and real buyer intent.",
  },
  {
    icon: Compass,
    tag: "California roots",
    title: "Local & national insight",
    desc: "Deeply rooted in Anaheim and Orange County while scaling ambitious growth brands across California and the US.",
  },
  {
    icon: Gem,
    tag: "World-class craft",
    title: "Global standards",
    desc: "Editorial design precision, sub-second web engineering, and clean AI-ready semantic architecture on every project.",
  },
  {
    icon: Handshake,
    tag: "Embedded team",
    title: "True partnership",
    desc: "Direct access to senior strategists and makers — transparent scorecards, clear timelines, and zero agency fluff.",
  },
  {
    icon: TrendingUp,
    tag: "Revenue focus",
    title: "Results that matter",
    desc: "Every marketing decision we make is tied directly to qualified pipeline, lower acquisition cost, and real sales.",
  },
];

const teamMembers = [
  {
    name: "Daniel Reyes",
    role: "Managing Director & Growth Strategy",
    image: "/images/team-1.webp",
    bio: "Leads client growth architecture and revenue alignment across paid search, SEO, and conversion funnels. Relentless about turning complex market data into decisive action.",
    motto: "Clarity beats volume.",
  },
  {
    name: "Elena Morales",
    role: "Creative & Brand Director",
    image: "/images/team-2.webp",
    bio: "Directs brand identity systems, art direction, and high-converting visual campaigns. Obsessed with crafting unmistakable digital identities that earn instant buyer trust.",
    motto: "Make every pixel earn its keep.",
  },
  {
    name: "Marcus Vance",
    role: "Head of Performance & Paid Media",
    image: "/images/team-3.webp",
    bio: "Architects multi-channel Google, Meta, and YouTube acquisition engines backed by weekly creative testing sprints and strict contribution-margin discipline.",
    motto: "Test fast, scale what converts.",
  },
  {
    name: "Claire Bennett",
    role: "Director of SEO & AI Search (GEO)",
    image: "/images/team-4.webp",
    bio: "Spearheads technical SEO, Local Map Pack dominance, and Generative Engine Optimization so ambitious brands are cited across Google, ChatGPT, and Perplexity.",
    motto: "Own the answer, not just the click.",
  },
  {
    name: "Devon Brooks",
    role: "Lead Web & Conversion Engineer",
    image: "/images/team-5.webp",
    bio: "Builds sub-second static Next.js websites, interactive funnels, and CRM integrations engineered for 98+ Core Web Vitals and frictionless lead capture.",
    motto: "Speed is a conversion feature.",
  },
  {
    name: "Hannah Kim",
    role: "Social Strategy & Client Partnerships",
    image: "/images/team-6.webp",
    bio: "Guides brand storytelling, short-form content engines, and executive communication — keeping every client sprint transparent, calm, and ahead of schedule.",
    motto: "Show up sharp, deliver early.",
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
        <section
          data-shape="rocket"
          data-ax="0.78"
          data-ay="0.48"
          className="pb-14 sm:pb-16"
        >
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

        {/* 02 — Gravity Manifesto + Stats Glass Grid */}
        <section
          data-shape="orbit"
          data-ax="0.22"
          data-ay="0.50"
          className="py-10 sm:py-14"
        >
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 space-y-6">
            <div className="kd-obsidian-card kd-obsidian-card-hover rounded-3xl p-8 sm:p-12 lg:p-16 space-y-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#FF4D73]">
                Our manifesto
              </p>
              <p className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[42px] text-white leading-[1.15] tracking-[-0.025em] max-w-5xl">
                We don&apos;t just launch campaigns.{" "}
                <span className="text-[#FF4D73]">We build the gravity</span>{" "}
                that pulls customers toward your brand — and keeps them in
                orbit.
              </p>
              <p className="text-sm sm:text-base text-white/65 max-w-3xl leading-relaxed">
                Most agencies split your growth across disconnected silos — one
                vendor buys ads, another touches SEO, and a third patches a slow
                website. Katella Digital unifies every discipline around one
                shared revenue scorecard.
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

            {/* 3-Pillar Regional Growth Vision */}
            <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 space-y-6">
              <div className="max-w-3xl space-y-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                  Built for modern growth
                </p>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  Driving measurable market impact across Orange County &amp;
                  nationwide.
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  [
                    "01",
                    "Category Ambition",
                    "Helping local California operators and high-growth B2B brands out-position legacy national competitors.",
                  ],
                  [
                    "02",
                    "AI-Era Readiness",
                    "Structuring every site, brand entity, and content cluster to win both Google Search and AI answer engines.",
                  ],
                  [
                    "03",
                    "Commercial Craft",
                    "Blending unmistakable creative taste with hard unit economics — CAC, payback period, and verified pipeline.",
                  ],
                ].map(([no, title, desc]) => (
                  <div
                    key={no}
                    className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-5 space-y-2"
                  >
                    <span className="font-mono text-xs font-bold text-[#FF4D73]">
                      {no}
                    </span>
                    <h3 className="font-display font-bold text-base text-white">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 03 — Agency Standard Split + Headquarters Visual */}
        <section
          data-shape="globe"
          data-ax="0.78"
          data-ay="0.50"
          className="py-12 sm:py-16"
        >
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

        {/* 04 — 6 Core Values with Luminous Hover Spotlight & Lit Icon Boxes */}
        <section
          id="values"
          data-shape="spark"
          data-ax="0.50"
          data-ay="0.52"
          className="py-12 sm:py-16"
        >
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
              {values.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="group kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-7 space-y-5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="kd-icon-box h-11 w-11 rounded-xl flex items-center justify-center">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#FF4D73]">
                        {val.tag}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-xl text-white">
                        {val.title}
                      </h3>
                      <p className="text-sm text-white/65 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 05 — Vision Banner */}
        <section
          data-shape="prism"
          data-ax="0.22"
          data-ay="0.50"
          className="py-10 sm:py-14"
        >
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

        {/* 06 — The People: Leadership & Specialists Team Section (matching ltsthink.com/about/#team) */}
        <section
          id="team"
          data-shape="network"
          data-ax="0.50"
          data-ay="0.50"
          className="py-14 sm:py-20"
        >
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div className="max-w-2xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
                  The people
                </p>
                <h2 className="font-display font-bold tracking-[-0.03em] text-3xl sm:text-4xl lg:text-[44px] text-white">
                  One team, every discipline.
                </h2>
              </div>
              <p className="text-sm text-white/65 max-w-md">
                Senior strategists, designers, SEO engineers, and media buyers
                working directly on your account — never handed off to junior
                interns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="group kd-obsidian-card kd-obsidian-card-hover rounded-2xl overflow-hidden flex flex-col"
                >
                  <div className="p-6 pb-4 flex items-center gap-4">
                    <div className="h-16 w-16 shrink-0 rounded-2xl overflow-hidden border border-white/15 group-hover:border-[#FF4D73]/70 transition-colors">
                      <img
                        src={member.image}
                        alt={`${member.name} — ${member.role}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-white leading-snug">
                        {member.name}
                      </h3>
                      <p className="text-xs font-medium text-[#FF4D73] mt-0.5">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 flex-1 flex flex-col justify-between gap-5">
                    <p className="text-sm text-white/70 leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="kd-glass-tile rounded-xl px-4 py-2.5 flex items-center justify-between gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                        Motto
                      </span>
                      <span className="text-xs font-semibold text-white/90 text-right">
                        {member.motto}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 07 — In-House Practices */}
        <section
          data-shape="orbit"
          data-ax="0.78"
          data-ay="0.50"
          className="py-12 sm:py-16"
        >
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div className="max-w-2xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
                  In-house practices
                </p>
                <h2 className="font-display font-bold tracking-[-0.03em] text-3xl sm:text-4xl text-white">
                  Built to execute end to end.
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

        {/* 08 — Final CTA */}
        <FinalCTA />
      </div>
    </PageShell>
  );
}
