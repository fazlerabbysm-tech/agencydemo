"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import CursorGlow from "@/components/site/cursor-glow";
import InlineContactForm from "@/components/site/inline-contact-form";
import { siteConfig } from "@/lib/site-config";
import { portfolioDetails } from "@/data/portfolio";
import { blogPosts } from "@/data/blog";
import {
  getRouteByPath,
  getSiloLinksFor,
  type ServiceRouteMeta,
} from "@/lib/service-routes";

export interface ServiceFaqItem {
  q: string;
  a: string;
}

export function ServicePageFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <div aria-hidden="true" className="h-0 w-0" />
      <CursorGlow />
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-32 lg:pt-36">{children}</main>
      <Footer />
    </div>
  );
}

export function ServiceBreadcrumb({
  route,
}: {
  route: ServiceRouteMeta;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-1.5 text-xs text-white/55 mb-5"
    >
      <Link href="/" className="hover:text-white transition-colors">
        Home
      </Link>
      <ChevronRight className="h-3.5 w-3.5 text-white/35" />
      <Link href="/services" className="hover:text-white transition-colors">
        Services
      </Link>
      {!route.isPillar && (
        <>
          <ChevronRight className="h-3.5 w-3.5 text-white/35" />
          <Link
            href={route.siloPath}
            className="hover:text-white transition-colors font-medium text-white/75"
          >
            {route.siloLabel}
          </Link>
        </>
      )}
      <ChevronRight className="h-3.5 w-3.5 text-white/35" />
      <span className="text-[#FF4D73] font-medium">{route.shortTitle}</span>
    </nav>
  );
}

export function RegionalCoverageBand({
  eyebrow = "Across California",
  heading,
  description,
  shape = "globe",
}: {
  eyebrow?: string;
  heading: string;
  description: string;
  shape?: string;
}) {
  const cities = [
    { no: "01", city: "Anaheim", region: "Headquarters · Orange County" },
    { no: "02", city: "Irvine", region: "Tech & B2B Corridor" },
    { no: "03", city: "Newport Beach", region: "Luxury & Coastal OC" },
    { no: "04", city: "Costa Mesa", region: "Retail & Creative Hub" },
    { no: "05", city: "Los Angeles", region: "Metro & Westside" },
    { no: "06", city: "San Diego", region: "Southern California" },
  ];

  return (
    <section
      data-shape={shape}
      data-ax="0.24"
      data-ay="0.50"
      className="py-12 sm:py-16"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                {eyebrow}
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-[1.08]">
                {heading}
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                {description}
              </p>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/75">
                <MapPin className="h-3.5 w-3.5 text-[#FF4D73]" />
                06 Core Markets · 100% US Remote &amp; On-Site
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              {cities.map((c) => (
                <div
                  key={c.no}
                  className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-4 sm:p-5"
                >
                  <span className="font-mono text-[10px] text-[#FF4D73]">
                    {c.no}
                  </span>
                  <p className="font-display font-bold text-base sm:text-lg text-white mt-1">
                    {c.city}
                  </p>
                  <p className="text-[11px] text-white/55 mt-0.5">{c.region}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceFaqSection({
  eyebrow = "FAQ",
  heading = "The questions we get asked.",
  faqs,
}: {
  eyebrow?: string;
  heading?: string;
  faqs: ServiceFaqItem[];
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faq"
      data-shape="prism"
      data-ax="0.78"
      data-ay="0.50"
      className="py-12 sm:py-16"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
              {eyebrow}
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-[1.06]">
              {heading}
            </h2>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45 pt-1">
              INDEX 01–{String(faqs.length).padStart(2, "0")}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={faq.q}
                  className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <span className="flex items-center gap-3.5">
                      <span className="font-mono text-xs text-[#FF4D73] shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display font-bold text-base sm:text-lg text-white">
                        {faq.q}
                      </span>
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#FF4D73] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-14 text-sm sm:text-base text-white/75 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceWorkStrip() {
  const featuredWork = portfolioDetails.slice(0, 3);
  return (
    <section
      id="work"
      data-shape="bolt"
      data-ax="0.22"
      data-ay="0.50"
      className="py-12 sm:py-16"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
              Selected work
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
              Work we&apos;re proud of.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-white/80 hover:text-white"
          >
            View all work <ArrowRight className="h-4 w-4 text-[#FF4D73]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredWork.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group kd-obsidian-card kd-obsidian-card-hover rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0204]">
                <img
                  src={project.heroImage}
                  alt={`${project.title} — ${project.subtitle}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060000]/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-[#060000]/80 backdrop-blur-md border border-white/15 px-3 py-1 text-[11px] font-medium text-white">
                  {project.services[0]}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between gap-4 bg-[#060000]/35 border-t border-white/10">
                <div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-[#FF4D73] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-white/65 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
                    {project.industry} · {project.year}
                  </span>
                  <span className="h-8 w-8 rounded-full bg-white text-[#060000] group-hover:bg-[#E81C49] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * High-authority SEO Silo Internal Linking Module:
 * Links parent pillar, all sibling sub-services in the same silo, cross-silo partners, and relevant blog guides.
 */
export function SiloRelatedLinks({
  currentPath,
}: {
  currentPath: string;
}) {
  const current = getRouteByPath(currentPath);
  if (!current) return null;
  const { parent, siblings, crossSilo } = getSiloLinksFor(currentPath);
  const guides = current.guideSlugs
    .map((slug) => blogPosts.find((b) => b.slug === slug))
    .filter((b): b is (typeof blogPosts)[number] => Boolean(b));

  const orderedServiceLinks: Array<{
    path: string;
    label: string;
    tag: string;
  }> = [
    ...(parent
      ? [{ path: parent.path, label: parent.label, tag: "Parent Pillar" }]
      : []),
    ...siblings
      .filter((s) => s.path !== parent?.path)
      .map((s) => ({
        path: s.path,
        label: s.label,
        tag: current.siloLabel,
      })),
    ...crossSilo.map((c) => ({
      path: c.path,
      label: c.label,
      tag: c.siloLabel,
    })),
  ];

  return (
    <section
      data-shape="network"
      data-ax="0.78"
      data-ay="0.50"
      className="py-12 sm:py-16"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 space-y-8">
        {/* Silo & Cross-Pillar Service Links */}
        <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
                Related Services · {current.siloLabel} Hub
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                Explore connected services.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-white/75 hover:text-white"
            >
              All 21 services <ArrowRight className="h-4 w-4 text-[#FF4D73]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {orderedServiceLinks.map((item, idx) => (
              <Link
                key={item.path}
                href={item.path}
                className="group kd-glass-tile kd-obsidian-card-hover rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-3"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[10px] text-[#FF4D73]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45 truncate">
                      {item.tag}
                    </span>
                  </div>
                  <p className="font-display font-bold text-sm sm:text-base text-white group-hover:text-[#FF4D73] transition-colors truncate">
                    {item.label}
                  </p>
                  <p className="font-mono text-[10px] text-white/40 truncate mt-0.5">
                    {item.path}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-white/45 group-hover:text-[#FF4D73] transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Related Blog Guides */}
        {guides.length > 0 && (
          <div>
            <div className="flex items-end justify-between gap-4 mb-5">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-1.5">
                  From the blog
                </p>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  Related guides &amp; playbooks.
                </h3>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-white/75 hover:text-white"
              >
                All guides <ArrowRight className="h-3.5 w-3.5 text-[#FF4D73]" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {guides.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-5 flex flex-col justify-between gap-4"
                >
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#FF4D73] mb-2">
                      {post.category} · {post.readTime}
                    </p>
                    <h4 className="font-display font-bold text-base text-white leading-snug group-hover:text-[#FF4D73] transition-colors">
                      {post.title}
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/75 group-hover:text-white">
                    Read guide{" "}
                    <ArrowRight className="h-3.5 w-3.5 text-[#FF4D73]" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function ServiceAuditCta({
  eyebrow,
  heading,
  description,
  defaultService,
  formHeading,
  formSubheading,
  ctaLabel = "Request Free Audit",
}: {
  eyebrow: string;
  heading: string;
  description: string;
  defaultService: string;
  formHeading: string;
  formSubheading: string;
  ctaLabel?: string;
}) {
  return (
    <section
      id="service-contact"
      data-shape="heart"
      data-ax="0.22"
      data-ay="0.50"
      className="py-14 sm:py-20"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
                {eyebrow}
              </p>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-white tracking-tight leading-[1.05]">
                {heading}
              </h2>
            </div>

            <p className="text-base text-white/75 leading-relaxed">
              {description}
            </p>

            <ul className="space-y-3 pt-1">
              {[
                "Free, no-obligation written audit & roadmap",
                "Direct reply from a senior strategist within 1 business day",
                "100% client ownership of every ad account, asset & domain",
                "9+ years scaling ambitious brands across Orange County & the US",
              ].map((pt) => (
                <li
                  key={pt}
                  className="flex items-start gap-2.5 text-sm text-white/80"
                >
                  <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-[#C71F42]/25 border border-[#FF4D73]/45 flex items-center justify-center text-[#FF4D73]">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/45 bg-[#25D366]/15 hover:bg-[#25D366]/25 px-5 py-2.5 text-xs font-semibold text-white transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                WhatsApp {siteConfig.phone}
              </a>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] hover:bg-white/[0.14] px-5 py-2.5 text-xs font-semibold text-white transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-[#FF4D73]" />
                Call Us
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <InlineContactForm
              defaultService={defaultService}
              heading={formHeading}
              subheading={formSubheading}
              ctaLabel={ctaLabel}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
