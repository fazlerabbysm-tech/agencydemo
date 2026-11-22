"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CreditCard,
  Gauge,
  Mail,
  PackageCheck,
  Search,
  ShoppingBag,
  TrendingUp,
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
import { ECOMMERCE_FAQS } from "@/data/service-faqs";


const platformComparison = [
  {
    platform: "Shopify (Custom Lean Theme)",
    bestFor: "Fast-scaling DTC & consumer brands (10–2,000 SKUs)",
    speed: "0.9s–1.3s LCP",
    maintenance: "Lowest — managed checkout & security",
    note: "Our #1 default when Shop Pay, Klaviyo, and rapid merchandising matter most.",
  },
  {
    platform: "Headless Next.js + Shopify API",
    bestFor: "High-volume flagship brands needing bespoke storytelling & 0.5s speed",
    speed: "0.5s–0.8s LCP",
    maintenance: "Medium — custom frontend repo",
    note: "Ideal when content, SEO landing architecture, and interactive builders drive AOV.",
  },
  {
    platform: "WooCommerce / Custom",
    bestFor: "Complex B2B quoting, custom ERP inventory, or WordPress-anchored catalogs",
    speed: "1.1s–1.6s (tuned)",
    maintenance: "Higher — plugin & hosting care",
    note: "Best when unique B2B pricing tiers or custom wholesale portals outweigh simplicity.",
  },
];

export default function EcommerceView() {
  const route = getRouteByPath("/web-development/ecommerce")!;

  return (
    <ServicePageFrame>
      {/* 1. BESPOKE HERO WITH PDP-TO-CHECKOUT FUNNEL CONVERSION LEAK CARD */}
      <section
        id="home"
        data-shape="bolt"
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
              className="lg:col-span-6 space-y-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Shopify · Headless Commerce · Checkout CRO · Feeds
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl xl:text-[62px] text-white text-balance">
                Online stores built for mobile speed, AOV, and checkout lift
                <span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed">
                Every extra second of mobile load time silently kills checkout
                rate. We build custom, zero-bloat e-commerce storefronts wired
                directly for{" "}
                <Link
                  href="/digital-marketing/performance-marketing"
                  className="text-white underline decoration-[#FF4D73]/70 underline-offset-4 hover:text-[#FF4D73]"
                >
                  paid acquisition
                </Link>{" "}
                and{" "}
                <Link
                  href="/digital-marketing/seo"
                  className="text-white underline decoration-[#FF4D73]/70 underline-offset-4 hover:text-[#FF4D73]"
                >
                  collection SEO
                </Link>
                .
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#service-contact"
                  className="kd-cta-glow inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold text-white"
                >
                  Audit or scope your store
                  <span className="h-6 w-6 rounded-full bg-white text-[#C71F42] flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </a>
                <a
                  href="#platforms"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] hover:bg-white/[0.14] px-6 py-3.5 text-sm font-semibold text-white transition-colors"
                >
                  Compare platforms
                </a>
              </div>
            </motion.div>

            {/* Right Storefront Conversion Lift Breakdown Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="kd-obsidian-card rounded-3xl p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D73]">
                    Mobile Storefront Conversion Levers
                  </span>
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-400/45 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
                    +38% CVR Target
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { step: "Collection Page Speed", metric: "0.7s LCP · Instant filter facets", pct: 95 },
                    { step: "Product Detail Page (PDP)", metric: "Sticky ATC + trust badges + reviews above fold", pct: 88 },
                    { step: "Slide-Out Cart Drawer", metric: "Free-shipping bar + 1-click bundle upsell (+22% AOV)", pct: 84 },
                    { step: "Express Checkout", metric: "Shop Pay / Apple Pay + server-side purchase CAPI", pct: 96 },
                  ].map((s) => (
                    <div key={s.step} className="kd-glass-tile rounded-xl p-3.5 space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-display font-bold text-white">{s.step}</span>
                        <span className="font-mono text-[10px] text-emerald-300">{s.pct}%</span>
                      </div>
                      <p className="text-[11px] text-white/65">{s.metric}</p>
                      <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#FF3363] to-emerald-400"
                          style={{ width: `${s.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. HONEST PLATFORM SELECTION COMPARISON TABLE */}
      <section
        id="platforms"
        data-shape="bars"
        data-ax="0.22"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 space-y-6">
            <div className="max-w-3xl space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Platform selection
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Chosen against your catalog, margin, and team — not agency
                kickbacks.
              </h2>
              <p className="text-sm text-white/70">
                We tell you what each platform costs to maintain 18 months after
                launch, not only on day one.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/15 font-mono text-[10px] uppercase tracking-[0.16em] text-[#FF4D73]">
                    <th className="py-3 pr-4">Platform</th>
                    <th className="py-3 pr-4">Best For</th>
                    <th className="py-3 pr-4">Mobile Speed</th>
                    <th className="py-3 pr-4">Maintenance</th>
                    <th className="py-3">Honest Take</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {platformComparison.map((r) => (
                    <tr key={r.platform} className="hover:bg-white/[0.02]">
                      <td className="py-4 pr-4 font-display font-bold text-white whitespace-nowrap">
                        {r.platform}
                      </td>
                      <td className="py-4 pr-4 text-white/80">{r.bestFor}</td>
                      <td className="py-4 pr-4 font-mono text-xs text-emerald-300 whitespace-nowrap">
                        {r.speed}
                      </td>
                      <td className="py-4 pr-4 text-white/70">{r.maintenance}</td>
                      <td className="py-4 text-white/65 leading-relaxed">
                        {r.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 6-CARD E-COMMERCE ENGINEERING SCOPE */}
      <section
        data-shape="spark"
        data-ax="0.78"
        data-ay="0.50"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="max-w-2xl mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              Commerce engineering
            </p>
            <h2 className="font-display font-bold text-3xl text-white">
              Built for repeat revenue, not fragile apps.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: ShoppingBag, title: "Bespoke Storefront Themes", desc: "Hand-coded sections with zero 40-app bloat slowing down mobile buyers." },
              { icon: TrendingUp, title: "PDP & Cart CRO", desc: "Bundles, tiered discounts, subscriptions, and sticky mobile checkout triggers." },
              { icon: Search, title: "Catalog SEO & Shopping Feeds", desc: "Product/Review schema, clean collection taxonomy, and Google Merchant feed hygiene." },
              { icon: CreditCard, title: "Express Payments & Subscriptions", desc: "Apple Pay, Shop Pay, Stripe, BNPL, and Recharge/recurring billing flows." },
              { icon: Mail, title: "Klaviyo & Retention Sync", desc: "Browse abandon, cart recovery, and VIP repeat-order flows wired cleanly." },
              { icon: PackageCheck, title: "ERP, 3PL & Fulfillment APIs", desc: "Reliable inventory sync with warehouses, POS, and accounting platforms." },
            ].map((item) => {
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

      <ServiceWorkStrip />

      <RegionalCoverageBand
        heading="Scaling California & US consumer brands online."
        description="From Orange County boutique retailers to high-volume nationwide DTC catalogs, we engineer storefronts that turn ad clicks into repeat orders."
      />

      <ServiceFaqSection
        heading="E-commerce development questions."
        faqs={ECOMMERCE_FAQS}
      />

      <SiloRelatedLinks currentPath="/web-development/ecommerce" />

      <ServiceAuditCta
        eyebrow="Scale your store"
        heading="Ready to lift your mobile conversion rate and AOV?"
        description="Share your current store URL or catalog size — we'll send back a concrete speed, PDP, and checkout conversion teardown."
        defaultService="E-commerce Development"
        formHeading="Request an e-commerce store audit"
        formSubheading="Share your store URL or launch goals — we reply within 1 business day."
        ctaLabel="Audit my store"
      />
    </ServicePageFrame>
  );
}
