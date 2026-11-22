"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Clock,
  FileCheck2,
  LineChart,
  MapPin,
  Phone,
  ShieldAlert,
  Star,
  X,
} from "lucide-react";
import {
  RegionalCoverageBand,
  ServiceAuditCta,
  ServiceBreadcrumb,
  ServiceFaqSection,
  ServicePageFrame,
  ServiceWorkStrip,
  SiloRelatedLinks,
} from "@/components/services/service-shell";
import { getRouteByPath } from "@/lib/service-routes";
import { LOCAL_SEO_FAQS } from "@/data/service-faqs";


// 5x5 Geo-Grid simulation data for 2 selectable scenarios (Before vs After Optimization)
const geoGridPresets = {
  before: {
    label: "Before Local Audit (1.5 mi reach)",
    summary: "Strong only at the office door; fades rapidly past 1.5 miles.",
    pins: [
      14, 11, 9, 12, 16,
      10, 6, 4, 7, 13,
      8, 3, 1, 5, 11,
      12, 7, 5, 8, 15,
      17, 13, 10, 14, 19,
    ],
  },
  after: {
    label: "After Katella Local SEO (8 mi catchment)",
    summary: "Map Pack Top-3 coverage expanded across adjacent Orange County neighborhoods.",
    pins: [
      4, 3, 2, 3, 5,
      3, 2, 1, 2, 3,
      2, 1, 1, 1, 2,
      3, 2, 1, 2, 4,
      5, 3, 2, 3, 6,
    ],
  },
} as const;

const napRows = [
  {
    surface: "Google Business Profile",
    name: true,
    address: true,
    phone: true,
  },
  {
    surface: "Your Website Footer & Contact",
    name: true,
    address: false,
    phone: true,
  },
  {
    surface: "Apple Business Connect (Apple Maps)",
    name: false,
    address: true,
    phone: false,
  },
  {
    surface: "Yelp, Bing Places & Local Directories",
    name: false,
    address: false,
    phone: true,
  },
  {
    surface: "Invoices, PDFs & Schema Markup",
    name: true,
    address: true,
    phone: false,
  },
];

const localScope = [
  {
    icon: BadgeCheck,
    title: "Google Business Profile",
    desc: "We claim, verify, and rebuild every profile: primary & secondary categories, service menus, accurate hours, geotagged real photos, products, Q&A, and weekly posts.",
  },
  {
    icon: MapPin,
    title: 'Map Pack & "Near Me" Rankings',
    desc: "We measure where every branch ranks across a 25-point geo-grid — not from one office IP — then strengthen category relevance, proximity signals, and local prominence.",
  },
  {
    icon: Building2,
    title: "Branch & City Landing Pages",
    desc: "Each location receives a real conversion page — address, embedded map, parking notes, local team, reviews, and LocalBusiness JSON-LD — never a thin city-swapped clone.",
  },
  {
    icon: Star,
    title: "Reviews & Reputation Engine",
    desc: "Automated SMS & email review requests triggered right after service delivery, plus thoughtful keyword-natural replies within one business day.",
  },
  {
    icon: FileCheck2,
    title: "NAP Consistency & Citations",
    desc: "One exact brand spelling, street format, and phone number across Google, Apple Maps, Bing, Yelp, Nextdoor, and niche directories — eliminating rank-suppressing duplicates.",
  },
  {
    icon: LineChart,
    title: "Branch-Level Call & Direction Reporting",
    desc: "Phone calls, direction taps, website clicks, and review velocity tracked per location month over month alongside live Map Pack geo-grids.",
  },
];

export default function LocalSeoView() {
  const route = getRouteByPath("/digital-marketing/local-seo")!;
  const [gridMode, setGridMode] = useState<"before" | "after">("after");
  const activeGrid = geoGridPresets[gridMode];

  const pinClass = (rank: number) => {
    if (rank <= 3)
      return "bg-emerald-500/25 border-emerald-400/60 text-emerald-200 shadow-[0_0_16px_rgba(16,185,129,0.28)]";
    if (rank <= 10)
      return "bg-amber-500/20 border-amber-400/50 text-amber-200";
    return "bg-[#C71F42]/25 border-[#FF4D73]/50 text-[#FF9AB0]";
  };

  return (
    <ServicePageFrame>
      {/* 1. BESPOKE HERO WITH MOCK VERIFIED GOOGLE BUSINESS PROFILE CARD */}
      <section
        id="home"
        data-shape="globe"
        data-ax="0.76"
        data-ay="0.46"
        className="pb-14 sm:pb-20"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <ServiceBreadcrumb route={route} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Google Maps · Reviews · Branch Pages
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl xl:text-[62px] text-white text-balance">
                The search ends on a map. Be the pin that&apos;s on it
                <span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
                When a buyer searches for a clinic, showroom, contractor, or
                service near them, the decision happens inside Google Maps
                before they ever open a website. We build the verified profiles,
                review systems, branch pages, and clean citation data that earn
                top-3 Map Pack positions across Orange County and Southern
                California.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#service-contact"
                  className="kd-cta-glow inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold text-white"
                >
                  Request a local audit
                  <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] hover:bg-white/[0.14] px-6 py-3.5 text-sm font-semibold text-white transition-colors"
                >
                  See our work
                </a>
              </div>

              <div className="grid grid-cols-3 gap-3.5 pt-2 max-w-lg">
                {[
                  { val: "9+ yrs", lbl: "Local search mastery" },
                  { val: "Top 3", lbl: "Map Pack focus" },
                  { val: "25-pt", lbl: "Geo-grid tracking" },
                ].map((k) => (
                  <div
                    key={k.lbl}
                    className="kd-glass-tile rounded-2xl p-3.5 sm:p-4"
                  >
                    <p className="font-display font-extrabold text-xl sm:text-2xl text-white">
                      {k.val}
                    </p>
                    <p className="text-[11px] text-white/60 mt-0.5">{k.lbl}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Mock Verified Google Business Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="kd-obsidian-card rounded-3xl p-6 sm:p-7 space-y-5">
                <div className="flex items-start justify-between gap-3 border-b border-white/12 pb-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                      One verified source of truth
                    </p>
                    <h2 className="font-display font-extrabold text-xl text-white mt-1 flex items-center gap-2">
                      Katella Digital
                      <BadgeCheck className="h-5 w-5 text-sky-400" />
                    </h2>
                    <div className="flex items-center gap-1.5 mt-1 text-xs">
                      <span className="font-bold text-white">4.9</span>
                      <span className="inline-flex text-amber-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-3.5 w-3.5 fill-current"
                          />
                        ))}
                      </span>
                      <span className="text-white/55">(128 reviews)</span>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-400/45 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                    Verified
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <Building2 className="h-4 w-4 text-[#FF4D73] mt-0.5 shrink-0" />
                    <div>
                      <span className="text-white/45 font-mono text-[10px] uppercase block">
                        Primary Category
                      </span>
                      <span className="text-white font-medium">
                        Internet Marketing Service · SEO Agency
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-[#FF4D73] mt-0.5 shrink-0" />
                    <div>
                      <span className="text-white/45 font-mono text-[10px] uppercase block">
                        Verified Address
                      </span>
                      <span className="text-white font-medium">
                        1800 E Katella Ave, Suite 300, Anaheim, CA 92805
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-4 w-4 text-[#FF4D73] mt-0.5 shrink-0" />
                    <div>
                      <span className="text-white/45 font-mono text-[10px] uppercase block">
                        Local Phone
                      </span>
                      <span className="text-white font-medium">
                        +1 (714) 555-0194 · Tracked via DNI
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-[#FF4D73] mt-0.5 shrink-0" />
                    <div>
                      <span className="text-white/45 font-mono text-[10px] uppercase block">
                        Hours &amp; Service Area
                      </span>
                      <span className="text-white font-medium">
                        Mon–Fri 9–6 PST · Anaheim · Irvine · Newport Beach
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center">
                  {["Call", "Directions", "Website"].map((btn) => (
                    <div
                      key={btn}
                      className="kd-glass-tile rounded-xl py-2 text-xs font-semibold text-white/85"
                    >
                      {btn}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE 5x5 GEO-GRID CATCHMENT HEATMAP ("Google answers from where they're standing.") */}
      <section
        data-shape="target"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Geo-Grid Measurement
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-[1.08]">
                Google answers from where they&apos;re standing.
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Checking rankings from inside your own office tells you almost
                nothing. We scan a 25-point GPS grid across your entire local
                catchment so you see the exact radius each branch holds — and
                where competitors take over.
              </p>

              {/* Toggle Before vs After */}
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setGridMode("before")}
                  className={`rounded-full px-4 py-2 text-xs font-bold border transition-all cursor-pointer ${
                    gridMode === "before"
                      ? "bg-[#E81C49] border-[#FF6B8A] text-white"
                      : "bg-white/[0.05] border-white/15 text-white/70 hover:text-white"
                  }`}
                >
                  Typical Unoptimized Profile
                </button>
                <button
                  type="button"
                  onClick={() => setGridMode("after")}
                  className={`rounded-full px-4 py-2 text-xs font-bold border transition-all cursor-pointer ${
                    gridMode === "after"
                      ? "bg-emerald-600 border-emerald-400 text-white"
                      : "bg-white/[0.05] border-white/15 text-white/70 hover:text-white"
                  }`}
                >
                  After Katella Local SEO
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs pt-2">
                <span className="inline-flex items-center gap-1.5 text-emerald-300">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  #1–3 Map Pack
                </span>
                <span className="inline-flex items-center gap-1.5 text-amber-200">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  #4–10 Below Pack
                </span>
                <span className="inline-flex items-center gap-1.5 text-[#FF9AB0]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E81C49]" />
                  11+ Not Found
                </span>
              </div>
            </div>

            {/* 5x5 Catchment Pin Grid */}
            <div className="lg:col-span-7">
              <div className="kd-glass-tile rounded-2xl p-5 sm:p-7 space-y-4">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-semibold text-white">
                    {activeGrid.label}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
                    Center pin = Branch Location
                  </span>
                </div>

                <div className="grid grid-cols-5 gap-2.5 sm:gap-3.5 max-w-md mx-auto py-2">
                  {activeGrid.pins.map((rank, i) => {
                    const isBranch = i === 12;
                    return (
                      <div
                        key={i}
                        className={`aspect-square rounded-full border flex flex-col items-center justify-center font-mono text-xs sm:text-sm font-bold transition-all duration-300 ${pinClass(
                          rank
                        )} ${isBranch ? "ring-2 ring-white scale-110" : ""}`}
                      >
                        <span>#{rank}</span>
                        {isBranch && (
                          <span className="text-[8px] uppercase tracking-wider text-white/90">
                            HQ
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                <p className="text-xs text-white/65 text-center">
                  {activeGrid.summary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEFINITION ESSAY (WITH CONTEXTUAL SILO LINKS) */}
      <section
        data-shape="layers"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                The definition
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
                What is Local SEO — and why it differs from regular SEO?
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-5 text-sm sm:text-base text-white/75 leading-relaxed">
              <p>
                Local SEO puts your business into results tied to physical
                geography: the 3-pack map at the top of Google, Google Maps
                itself, Apple Maps, and every &ldquo;near me&rdquo; search. The
                ranking signals differ from national organic search — Google
                weighs proximity to the searcher, exact primary category fit,
                and real-world prominence proven through reviews, photos, and
                consistent citations.
              </p>
              <p>
                Multi-location businesses have the most to lose when local data
                drifts. Each branch is its own entity: its own verified Google
                Business Profile, its own dedicated branch URL, and its own
                review history. Stretching one listing across five cities — or
                leaving old suite numbers and disconnected tracking numbers on
                directories — does not add up; conflicting listings suppress one
                another.
              </p>
              <p>
                Local SEO does not replace organic SEO. Your website still needs
                technical health, internal link architecture, and topic
                authority to win standard blue-link results — which we cover in
                depth on our{" "}
                <Link
                  href="/digital-marketing/seo"
                  className="text-[#FF4D73] font-semibold hover:underline"
                >
                  National SEO page
                </Link>{" "}
                — while immediate high-intent lead capture is covered under{" "}
                <Link
                  href="/digital-marketing/google-ads"
                  className="text-[#FF4D73] font-semibold hover:underline"
                >
                  Google Ads management
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NAP CONSISTENCY CONFLICT MATRIX TABLE */}
      <section
        data-shape="bars"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="max-w-2xl space-y-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                  One source of truth
                </p>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  Duplicates don&apos;t add up. They cancel out.
                </h2>
                <p className="text-sm text-white/70">
                  A typical local audit uncovers conflicting Name, Address, and
                  Phone (NAP) records scattered across platforms. We unify every
                  surface to one canonical record.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FF4D73]/40 bg-[#C71F42]/18 px-3.5 py-1.5 text-xs font-semibold text-[#FF9AB0] shrink-0">
                <ShieldAlert className="h-3.5 w-3.5" /> Example Local Audit Scan
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/15 font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                    <th className="py-3 pr-4">Where You Appear</th>
                    <th className="py-3 px-4 text-center">Business Name</th>
                    <th className="py-3 px-4 text-center">Street Address</th>
                    <th className="py-3 pl-4 text-center">Phone Number</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {napRows.map((r) => (
                    <tr key={r.surface} className="hover:bg-white/[0.02]">
                      <td className="py-4 pr-4 font-display font-semibold text-white">
                        {r.surface}
                      </td>
                      {[r.name, r.address, r.phone].map((ok, idx) => (
                        <td key={idx} className="py-4 px-4 text-center">
                          <span
                            className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[11px] font-bold ${
                              ok
                                ? "bg-emerald-500/18 border-emerald-400/40 text-emerald-300"
                                : "bg-[#C71F42]/22 border-[#FF4D73]/45 text-[#FF9AB0]"
                            }`}
                          >
                            {ok ? (
                              <>
                                <Check className="h-3 w-3" /> Matches
                              </>
                            ) : (
                              <>
                                <X className="h-3 w-3" /> Conflicts
                              </>
                            )}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 6-CARD LOCAL SCOPE */}
      <section
        data-shape="spark"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="max-w-2xl mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              The scope
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              What we work on.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {localScope.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 space-y-3.5"
                >
                  <div className="kd-icon-box h-11 w-11 rounded-2xl flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. 4-STEP LOCAL METHOD ("Audit, clean, publish, watch.") */}
      <section
        data-shape="orbit"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="max-w-2xl mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              The method
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Audit, clean, publish, watch.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              [
                "01",
                "Local audit",
                "Pull every listing you own — plus hidden duplicates — check categories, verification, and benchmark who owns the Map Pack across your catchment.",
              ],
              [
                "02",
                "Profiles & data cleanup",
                "Claim, verify, merge duplicates, rebuild each Google Business Profile, and push one canonical NAP record across authoritative directories.",
              ],
              [
                "03",
                "Branch pages & schema",
                "Publish rich location and city pages with LocalBusiness JSON-LD and clean internal links connecting directly to your core service pages.",
              ],
              [
                "04",
                "Reviews & geo-grid reporting",
                "Launch post-service review generation, respond within 1 business day, and report calls, direction taps, and 25-point geo-grids monthly.",
              ],
            ].map(([no, title, desc]) => (
              <div
                key={no}
                className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 space-y-3"
              >
                <span className="font-mono text-xs font-bold text-[#FF4D73]">
                  {no}
                </span>
                <h3 className="font-display font-bold text-lg text-white">
                  {title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceWorkStrip />

      <RegionalCoverageBand
        heading="Every branch, its own verified pin."
        description="A dedicated profile per branch, a dedicated landing page per branch, and reviews per branch — because one listing stretched across Orange County and LA sits near only one neighborhood."
      />

      <ServiceFaqSection
        heading="Local SEO & Google Maps questions."
        faqs={LOCAL_SEO_FAQS}
      />

      <SiloRelatedLinks currentPath="/digital-marketing/local-seo" />

      <ServiceAuditCta
        eyebrow="Start with the audit"
        heading="Let's find every listing you own."
        description="Send us your business name and locations — we will return a live 25-point geo-grid scan and NAP conflict report showing exactly what holds your Map Pack rankings back."
        defaultService="Local SEO (Google Maps)"
        formHeading="Request your free Local SEO audit"
        formSubheading="Share your branch locations — we reply within one business day."
        ctaLabel="Get my local audit"
      />
    </ServicePageFrame>
  );
}
