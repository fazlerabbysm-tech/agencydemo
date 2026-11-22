"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  MapPin,
  Plus,
  Minus,
} from "lucide-react";
import type { ServiceDetail } from "@/data/services";
import { serviceDetails } from "@/data/services";
import { siteConfig } from "@/lib/site-config";
import InlineContactForm from "@/components/site/inline-contact-form";

export default function ServiceDetailPage({
  service,
}: {
  service: ServiceDetail;
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const relatedServiceObjs = service.relatedServices
    .map((slug) => serviceDetails.find((s) => s.slug === slug))
    .filter((s): s is ServiceDetail => Boolean(s));

  const openModal = () => {
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
  };

  return (
    <div className="pt-28 sm:pt-32 lg:pt-36 pb-20">
      {/* 01 — Breadcrumb + Hero */}
      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-mono text-white/55 mb-6"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/35" />
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/35" />
            <span className="text-[#FF4D73]">{service.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                {service.category} · {service.no}
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.04] text-3xl sm:text-5xl lg:text-[56px] text-white text-balance">
                {service.heroTitle}
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
                {service.heroOutcome}
              </p>

              {/* Best for chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {service.bestFor.map((item) => (
                  <span
                    key={item}
                    className="kd-glass-tile rounded-full px-3.5 py-1.5 text-xs font-medium text-white/85"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#service-contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white hover:bg-white/90 text-[#060000] px-6 py-3.5 text-sm font-semibold transition-all"
                >
                  Get a free strategy audit
                  <span className="h-6 w-6 rounded-full bg-[#060000] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </a>
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#060000]/45 hover:bg-[#060000]/75 text-white px-6 py-3.5 text-sm font-medium backdrop-blur-md transition-colors cursor-pointer"
                >
                  Quick quote
                </button>
              </div>
            </div>

            {/* Right visual card */}
            <div className="lg:col-span-5">
              <div className="kd-obsidian-card rounded-3xl overflow-hidden">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={service.heroImage}
                    alt={`${service.name} — Katella Digital`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060000]/80 via-transparent to-transparent" />
                </div>
                <div className="p-5 sm:p-6 bg-[#060000]/40 backdrop-blur-xl border-t border-white/10 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D73]">
                      Proven outcome
                    </p>
                    <p className="font-display font-bold text-white text-base sm:text-lg mt-0.5">
                      {service.caseStudyMetric}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-white/60 text-right">
                    {service.deliverablesStarting}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Channels & Included Scope (Frosted Glass Grid) */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 lg:p-12">
            <div className="max-w-2xl mb-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
                Scope &amp; deliverables
              </p>
              <h2 className="font-display font-bold tracking-[-0.03em] text-2xl sm:text-4xl text-white">
                {service.includedTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.subServices.map((sub, i) => (
                <div
                  key={sub.title}
                  className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-6 flex flex-col justify-between gap-4"
                >
                  <div>
                    <span className="font-mono text-xs text-[#FF4D73]">
                      0{i + 1}
                    </span>
                    <h3 className="font-display font-bold text-lg text-white mt-3 mb-2 tracking-tight">
                      {sub.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {sub.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03 — The Problem vs. How Katella Solves It */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 kd-obsidian-card rounded-3xl p-7 sm:p-10 space-y-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
                  The challenge
                </p>
                <h2 className="font-display font-bold tracking-[-0.03em] text-2xl sm:text-3xl text-white">
                  {service.problemTitle}
                </h2>
              </div>
              <ul className="space-y-4">
                {service.problemPoints.map((point) => (
                  <li
                    key={point}
                    className="kd-glass-tile rounded-xl p-4 flex items-start gap-3.5 text-sm text-white/75 leading-relaxed"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#E81C49] shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 kd-obsidian-card rounded-3xl p-7 sm:p-10 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                  Client proof
                </p>
                <p className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                  {service.caseStudyMetric}
                </p>
                <blockquote className="text-base text-white/75 leading-relaxed italic">
                  &ldquo;{service.caseStudyQuote}&rdquo;
                </blockquote>
                <p className="font-mono text-xs text-white/50">
                  — {service.caseStudyAuthor}
                </p>
              </div>

              <div className="kd-glass-tile rounded-2xl p-4 text-xs text-white/70 leading-relaxed">
                {service.notSureText}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — First 30 Days & Process Grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="max-w-2xl mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
              Structured onboarding
            </p>
            <h2 className="font-display font-bold tracking-[-0.03em] text-2xl sm:text-4xl text-white">
              {service.processTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.processSteps.map((step) => (
              <div
                key={step.step}
                className="kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-6 flex flex-col justify-between gap-5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#FF4D73]">
                      {step.step}
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-0.5 font-mono text-[10px] text-white/70">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Pricing & Engagement Models (matching ltsthink.com pricing transparency) */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 lg:p-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div className="max-w-2xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
                  Transparent models
                </p>
                <h2 className="font-display font-bold tracking-[-0.03em] text-2xl sm:text-4xl text-white">
                  {service.deliverablesTitle}
                </h2>
              </div>
              <p className="text-sm text-white/65 max-w-md">
                {service.deliverablesScope}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {service.pricingModels.map((model, idx) => (
                <div
                  key={model.name}
                  className={`kd-glass-tile kd-obsidian-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-6 ${
                    idx === 0 ? "border-white/28" : ""
                  }`}
                >
                  <div className="space-y-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D73]">
                      {model.bestFor}
                    </p>
                    <h3 className="font-display font-bold text-xl text-white">
                      {model.name}
                    </h3>
                    <p className="font-display font-extrabold text-2xl text-white">
                      {model.starting}
                    </p>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {model.desc}
                    </p>
                  </div>

                  <a
                    href="#service-contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white hover:text-[#FF4D73] transition-colors"
                  >
                    Request tailored scope
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06 — Selected Related Work */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-2">
                Proof in action
              </p>
              <h2 className="font-display font-bold tracking-[-0.03em] text-2xl sm:text-3xl text-white">
                Work we&apos;re proud of.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="text-xs font-mono uppercase tracking-[0.18em] text-white/75 hover:text-white inline-flex items-center gap-1.5"
            >
              All projects <ArrowRight className="h-3.5 w-3.5 text-[#FF4D73]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.relatedWork.map((w) => (
              <Link
                key={w.title}
                href={w.href || "/portfolio"}
                className="group kd-obsidian-card kd-obsidian-card-hover rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={w.image}
                    alt={w.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 bg-[#060000]/35 backdrop-blur-xl border-t border-white/10 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display font-bold text-base text-white group-hover:text-[#FF4D73] transition-colors">
                      {w.title}
                    </h3>
                    <p className="text-xs text-white/60 mt-1">{w.cat}</p>
                  </div>
                  <span className="h-8 w-8 rounded-full bg-white text-[#060000] group-hover:bg-[#E81C49] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — Serving California & US Cities (Regional SEO / GEO Band) */}
      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-xl space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                Regional &amp; national reach
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                {service.name} for businesses across Southern California &amp;
                the US.
              </h2>
              <p className="text-sm text-white/65 leading-relaxed">
                Headquartered in Anaheim, Orange County — partnering with local
                leaders and national growth teams across every major US market.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[...siteConfig.serviceAreas, "Nationwide US"].map((city) => (
                <span
                  key={city}
                  className="kd-glass-tile rounded-full px-3.5 py-1.5 text-xs font-medium text-white/85 inline-flex items-center gap-1.5"
                >
                  <Check className="h-3 w-3 text-[#FF4D73]" />
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 08 — FAQ Accordion */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
                FAQ
              </p>
              <h2 className="font-display font-bold tracking-[-0.03em] text-2xl sm:text-4xl text-white">
                {service.faqTitle}
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className="kd-obsidian-card rounded-2xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                    >
                      <span className="font-display font-semibold text-base sm:text-lg text-white">
                        {faq.q}
                      </span>
                      <span className="h-8 w-8 shrink-0 rounded-full border border-white/15 bg-white/[0.05] flex items-center justify-center text-white">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 text-sm sm:text-[15px] text-white/70 leading-relaxed border-t border-white/10 pt-4">
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

      {/* 09 — Related Services */}
      {relatedServiceObjs.length > 0 && (
        <section className="py-10 sm:py-12">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-6">
              Related services
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedServiceObjs.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="group kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-5 flex flex-col justify-between gap-4"
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                      {rel.category}
                    </span>
                    <h3 className="font-display font-bold text-lg text-white mt-1.5 group-hover:text-[#FF4D73] transition-colors">
                      {rel.name}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/75 group-hover:text-white">
                    Explore <ArrowRight className="h-3.5 w-3.5 text-[#FF4D73]" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10 — Inline Lead / Audit Form */}
      <section id="service-contact" className="pt-12 sm:pt-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Start growing
              </p>
              <h2 className="font-display font-bold tracking-[-0.03em] text-3xl sm:text-4xl text-white">
                Let&apos;s see what&apos;s holding your growth back.
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Share your website and target goals. We&apos;ll review your
                current setup and come back within one business day with
                practical recommendations tailored to {service.name}.
              </p>
            </div>
            <div className="lg:col-span-7">
              <InlineContactForm
                defaultService={service.name}
                heading={`Get a free ${service.name} audit`}
                ctaLabel="Request free audit"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
