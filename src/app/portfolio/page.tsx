import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PageShell from "@/components/site/page-shell";
import BrandMarquee from "@/components/site/marquee";
import FinalCTA from "@/components/site/final-cta";
import PortfolioGridClient from "@/components/site/portfolio-grid-client";
import { portfolioDetails } from "@/data/portfolio";
import { JsonLd, getBreadcrumbSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies — Selected Marketing Work",
  description:
    "Explore selected digital marketing campaigns, SEO growth programs, brand systems, and conversion websites shipped by Katella Digital.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioHubPage() {
  return (
    <PageShell>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ])}
      />

      <div className="pt-28 sm:pt-32 lg:pt-40 pb-10">
        {/* Hero */}
        <section className="pb-12 sm:pb-16">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs font-mono text-white/55 mb-6"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-white/35" />
              <span className="text-[#FF4D73]">Portfolio</span>
            </nav>

            <div className="max-w-3xl space-y-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Selected work
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl lg:text-[64px] text-white">
                Creativity that drives growth
                <span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
                Real campaigns, search architectures, brand identities, and
                high-converting web systems built for ambitious companies across
                California and the US.
              </p>
            </div>
          </div>
        </section>

        {/* Filterable Projects Grid */}
        <section className="pb-16 sm:pb-20">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
            <PortfolioGridClient projects={portfolioDetails} />
          </div>
        </section>

        {/* Client Strip */}
        <BrandMarquee />

        {/* CTA */}
        <FinalCTA />
      </div>
    </PageShell>
  );
}
