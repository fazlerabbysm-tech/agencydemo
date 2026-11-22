import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageShell from "@/components/site/page-shell";
import InlineContactForm from "@/components/site/inline-contact-form";
import { serviceDetails } from "@/data/services";
import { getRouteBySlug } from "@/lib/service-routes";
import { JsonLd, getBreadcrumbSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Digital Marketing Services in Anaheim & Orange County",
  description:
    "Explore full-service digital marketing, SEO, AI Search (GEO), Google Ads, brand strategy, web & app development, and CRM automation — all under one roof at Katella Digital.",
  alternates: { canonical: "/services" },
};

const groups = [
  {
    name: "Marketing & Growth",
    eyebrow: "Acquisition, Search & AI Visibility",
    desc: "Compounding organic search, AI Search (GEO), paid media, and content systems engineered for measurable ROI.",
  },
  {
    name: "Brand & Creative",
    eyebrow: "Positioning, Identity & Motion",
    desc: "Distinctive brand systems, visual identities, and high-converting motion creative that command authority.",
  },
  {
    name: "Web & Apps",
    eyebrow: "Engineering & Conversion UX",
    desc: "Sub-second static websites, e-commerce storefronts, UI/UX systems, and custom web & mobile applications.",
  },
  {
    name: "Campaigns & Systems",
    eyebrow: "Integrated Launches & Revenue Ops",
    desc: "Multi-channel advertising launches, commercial video suites, and CRM automation tying spend to closed revenue.",
  },
] as const;

const approachSteps = [
  {
    no: "01",
    title: "Listen",
    desc: "We audit your market, competitors, analytics, and sales friction before writing a single recommendation.",
  },
  {
    no: "02",
    title: "Think",
    desc: "We align brand positioning, channel budget, and technical architecture inside one unified 90-day roadmap.",
  },
  {
    no: "03",
    title: "Make",
    desc: "Senior strategists, designers, media buyers, and engineers execute together — zero handoff friction.",
  },
  {
    no: "04",
    title: "Grow",
    desc: "Weekly testing, clean attribution, and relentless optimization focused on qualified pipeline and profit.",
  },
];

export default function ServicesHubPage() {
  return (
    <PageShell>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <div className="pt-28 sm:pt-32 lg:pt-40 pb-20">
        {/* Hero */}
        <section className="pb-14 sm:pb-20">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl space-y-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Full-Service Capabilities
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl lg:text-[64px] text-white text-balance">
                Everything your brand needs to grow, under one roof
                <span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
                Twenty-one specialized marketing, creative, SEO/GEO, and
                engineering capabilities organized into four integrated
                practices — so every channel amplifies the next.
              </p>
            </div>
          </div>
        </section>

        {/* Categorized Services Glass Grids */}
        <section className="space-y-10 pb-16 sm:pb-20">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 space-y-10">
            {groups.map((group) => {
              const items = serviceDetails.filter(
                (s) => s.category === group.name
              );
              return (
                <div
                  key={group.name}
                  className="kd-obsidian-card rounded-3xl p-7 sm:p-10"
                >
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8 pb-6 border-b border-white/10">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#FF4D73] mb-2">
                        {group.eyebrow}
                      </p>
                      <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                        {group.name}
                      </h2>
                    </div>
                    <p className="text-sm text-white/65 max-w-md">
                      {group.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {items.map((svc) => {
                      const canonicalPath =
                        getRouteBySlug(svc.slug)?.path ||
                        `/services/${svc.slug}`;
                      return (
                      <Link
                        key={svc.slug}
                        href={canonicalPath}
                        className="group kd-glass-tile kd-obsidian-card-hover rounded-2xl overflow-hidden flex flex-col justify-between"
                      >
                        <div>
                          <div className="relative aspect-[16/9] overflow-hidden bg-[#0a0204]">
                            <img
                              src={svc.heroImage}
                              alt={`${svc.name} — Katella Digital`}
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#060000]/75 via-transparent to-transparent" />
                            <span className="absolute top-3 left-3 rounded-full bg-[#060000]/75 backdrop-blur-md border border-white/15 px-2.5 py-0.5 font-mono text-[10px] text-[#FF4D73]">
                              {svc.no}
                              {svc.isPillar ? " · PILLAR" : ""}
                            </span>
                            <span className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/15 backdrop-blur-md group-hover:bg-white text-white group-hover:text-[#060000] flex items-center justify-center transition-colors">
                              <ArrowUpRight className="h-4 w-4" />
                            </span>
                          </div>

                          <div className="p-5 space-y-2">
                            <h3 className="font-display font-bold text-lg text-white group-hover:text-[#FF4D73] transition-colors">
                              {svc.name}
                            </h3>
                            <p className="text-xs sm:text-sm text-white/65 leading-relaxed line-clamp-3">
                              {svc.heroOutcome}
                            </p>
                          </div>
                        </div>

                        <div className="px-5 py-3.5 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                          <span>{svc.deliverablesStarting}</span>
                          <span className="inline-flex items-center gap-1 font-semibold text-white/85 group-hover:text-white">
                            Details <ArrowRight className="h-3.5 w-3.5 text-[#FF4D73]" />
                          </span>
                        </div>
                      </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4-Step Approach */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
                Our approach
              </p>
              <h2 className="font-display font-bold tracking-[-0.03em] text-3xl sm:text-4xl text-white">
                A calm, considered process.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {approachSteps.map((st) => (
                <div
                  key={st.no}
                  className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 space-y-3"
                >
                  <span className="font-mono text-xs text-[#FF4D73]">
                    {st.no}
                  </span>
                  <h3 className="font-display font-bold text-xl text-white">
                    {st.title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Not sure where to start? */}
        <section className="pt-12 sm:pt-16">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                  Start with clarity
                </p>
                <h2 className="font-display font-bold tracking-[-0.03em] text-3xl sm:text-4xl text-white">
                  Not sure where to start?
                </h2>
                <p className="text-base text-white/70 leading-relaxed">
                  Tell us your revenue target and current bottlenecks. We&apos;ll
                  audit your site, search visibility, and paid funnel — and map
                  the highest-leverage 90-day sequence.
                </p>
              </div>
              <div className="lg:col-span-7">
                <InlineContactForm
                  heading="Book a free 20-minute strategy review"
                  ctaLabel="Request strategy review"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
