"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Plus,
  Calendar,
  FileText,
} from "lucide-react";
import { serviceDetails, type ServiceDetail } from "@/data/services";
import Navbar from "@/components/site/navbar";

interface Props {
  slug: string | null;
  onClose: () => void;
  onSwitchService: (slug: string) => void;
}

export default function ServiceDetailModal({
  slug,
  onClose,
  onSwitchService,
}: Props) {
  const service = serviceDetails.find((s) => s.slug === slug);

  // Lock body scroll when page is open
  useEffect(() => {
    if (service) {
      document.body.style.overflow = "hidden";
      const el = document.getElementById("service-page-scroll");
      if (el) el.scrollTop = 0;
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [service]);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-white"
        >
          {/* === HOMEPAGE NAVBAR (same as homepage, with back button) === */}
          <Navbar
            variant="service"
            onBack={onClose}
            scrollContainerId="service-page-scroll"
          />

          {/* === SCROLLABLE PAGE CONTENT === */}
          <motion.div
            id="service-page-scroll"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-screen overflow-y-auto"
          >
            <ServiceContent
              key={service.slug}
              service={service}
              onSwitchService={onSwitchService}
              onClose={onClose}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ServiceContent({
  service,
  onSwitchService,
  onClose,
}: {
  service: ServiceDetail;
  onSwitchService: (slug: string) => void;
  onClose: () => void;
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const otherServices = serviceDetails.filter((s) => s.slug !== service.slug);

  return (
    <div className="clear-both">
      {/* ============ HERO ============ */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-black text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${service.problemImage})`,
            backgroundColor: "#0a0a0a",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

        <div className="relative z-10 mx-auto max-w-[1200px] w-full px-6 md:px-10 py-16 md:py-24">
          <p className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-white/70 mb-6">
            {service.no} — {service.name}
          </p>
          <h1 className="font-display font-bold tracking-[-0.02em] leading-[0.95] text-[10vw] md:text-[6vw] lg:text-[5vw] break-words max-w-4xl">
            {service.heroTitle}
          </h1>
          <p className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl">
            {service.heroOutcome}
          </p>

          {/* Best for */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50">
              Best for:
            </span>
            {service.bestFor.map((b) => (
              <span
                key={b}
                className="text-xs md:text-sm px-3 py-1 rounded-full border border-white/30 text-white/80"
              >
                {b}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#contact"
              onClick={onClose}
              className="group inline-flex items-center gap-3 bg-white text-black pl-6 pr-2 py-2 rounded-full hover:bg-black hover:text-white border border-white transition-colors duration-300"
            >
              <span className="text-sm font-medium tracking-wide uppercase">
                Get a quote
              </span>
              <span className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                <ArrowUpRight size={18} strokeWidth={2} />
              </span>
            </a>
            <a
              href="#work-modal"
              className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-white/80 hover:text-white border-b border-white/30 hover:border-white pb-1 transition-all"
            >
              See examples
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Not sure it fits */}
          <p className="mt-8 text-sm text-white/60">
            {service.notSureText} —{" "}
            <a href="#contact" onClick={onClose} className="underline underline-offset-4 hover:text-white">
              talk to us
            </a>
          </p>
        </div>
      </section>

      {/* ============ PROBLEM ============ */}
      <section className="bg-white py-16 md:py-24 border-b border-black/10">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-black/50">
                The problem
              </span>
              <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[0.95] text-3xl md:text-5xl lg:text-6xl">
                {service.problemTitle}
              </h2>
              <ul className="mt-8 space-y-4">
                {service.problemPoints.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                    <span className="text-base md:text-lg text-black/70 leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
              <img
                src={service.problemImage}
                alt={service.problemTitle}
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT'S INCLUDED ============ */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50">
            {service.includedTitle}
          </span>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[0.95] text-3xl md:text-5xl lg:text-6xl mb-12">
            What you get
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {service.subServices.map((s, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900 mb-5">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-4 left-4 font-mono text-xs tracking-[0.2em] text-white/80">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-white/60 leading-relaxed">
                  {s.desc}
                </p>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="mt-3 inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors"
                >
                  Learn more
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="bg-white py-16 md:py-24 border-b border-black/10">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-black/50">
                {service.processTitle}
              </span>
              <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[0.95] text-3xl md:text-5xl lg:text-6xl mb-10">
                Steps & timeline
              </h2>
              <div className="space-y-6">
                {service.processSteps.map((p, i) => (
                  <div key={i} className="flex gap-5 border-b border-black/10 pb-6 last:border-0">
                    <span className="font-display font-light text-4xl md:text-5xl leading-none tracking-tighter text-black/30 shrink-0">
                      {p.step}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-4 mb-1">
                        <h3 className="font-display font-bold text-lg md:text-xl tracking-tight">
                          {p.title}
                        </h3>
                        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/40 shrink-0">
                          {p.duration}
                        </span>
                      </div>
                      <p className="text-sm md:text-base text-black/60 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                onClick={onClose}
                className="mt-8 inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-white hover:text-black border border-black transition-colors duration-300"
              >
                <Calendar size={16} />
                Book a discovery call
              </a>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
              <img
                src={service.processImage}
                alt="Process"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ DELIVERABLES + SCOPE ============ */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
              <img
                src={service.deliverablesImage}
                alt="Deliverables"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div>
              <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50">
                {service.deliverablesTitle}
              </span>
              <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[0.95] text-3xl md:text-5xl lg:text-6xl">
                {service.deliverablesStarting}
              </h2>
              <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed">
                {service.deliverablesScope}
              </p>
              <a
                href="#contact"
                onClick={onClose}
                className="mt-8 inline-flex items-center gap-3 bg-white text-black pl-6 pr-2 py-2 rounded-full hover:bg-transparent hover:text-white border border-white transition-colors duration-300"
              >
                <span className="text-sm font-medium tracking-wide uppercase">
                  Request a proposal
                </span>
                <span className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <FileText size={16} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ RELATED WORK ============ */}
      <section id="work-modal" className="bg-white py-16 md:py-24 border-b border-black/10">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-black/50">
            Related work
          </span>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[0.95] text-3xl md:text-5xl lg:text-6xl mb-12">
            Recent {service.name.toLowerCase()} projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {service.relatedWork.map((w, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 mb-4">
                  <img
                    src={w.image}
                    alt={w.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                </div>
                <h3 className="font-display font-bold text-lg md:text-xl tracking-tight">
                  {w.title}
                </h3>
                <p className="mt-1 font-mono text-[10px] tracking-[0.2em] uppercase text-black/50">
                  {w.cat}
                </p>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="mt-3 inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-black/60 hover:text-black border-b border-black/30 hover:border-black pb-0.5 transition-all"
                >
                  View project
                  <ArrowRight size={12} />
                </a>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-black/50">
            See all {service.name.toLowerCase()} work —{" "}
            <a href="#work" onClick={onClose} className="underline underline-offset-4 hover:text-black">
              view full archive
            </a>
          </p>
        </div>
      </section>

      {/* ============ CASE STUDY + TESTIMONIAL ============ */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
              <img
                src={service.caseStudyImage}
                alt="Case study"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div>
              <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50">
                Case study
              </span>
              <div className="mt-4 font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-none">
                {service.caseStudyMetric}
              </div>
              <blockquote className="mt-8 text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed font-display font-light italic">
                &ldquo;{service.caseStudyQuote}&rdquo;
              </blockquote>
              <p className="mt-6 font-mono text-xs tracking-[0.2em] uppercase text-white/50">
                {service.caseStudyAuthor}
              </p>
              <a
                href="#contact"
                onClick={onClose}
                className="mt-8 inline-flex items-center gap-3 border border-white/30 hover:bg-white hover:text-black px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase transition-colors duration-300"
              >
                Read the full case study
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-white py-16 md:py-24 border-b border-black/10">
        <div className="mx-auto max-w-[1000px] px-6 md:px-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-black/50">
            {service.faqTitle}
          </span>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[0.95] text-3xl md:text-5xl lg:text-6xl mb-10">
            Questions, answered
          </h2>
          <div className="border-t border-black/15">
            {service.faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="border-b border-black/15">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full py-5 md:py-6 flex items-center gap-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-mono text-xs tracking-[0.2em] text-black/40 shrink-0">
                      0{i + 1}
                    </span>
                    <span className="flex-1 font-display font-medium text-base md:text-xl tracking-tight">
                      {f.q}
                    </span>
                    <span
                      className={`shrink-0 h-8 w-8 md:h-9 md:w-9 rounded-full border border-black/30 flex items-center justify-center transition-all duration-300 ${
                        isOpen ? "bg-black text-white rotate-45" : ""
                      }`}
                    >
                      <Plus size={14} strokeWidth={2} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 md:pb-7 pl-8 md:pl-12 pr-10 md:pr-14 text-sm md:text-base text-black/70 leading-relaxed">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          <p className="mt-8 text-sm text-black/60">
            Still have questions?{" "}
            <a href="#contact" onClick={onClose} className="underline underline-offset-4 hover:text-black font-medium">
              Ask us directly
            </a>
          </p>
        </div>
      </section>

      {/* ============ RELATED SERVICES ============ */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50">
            Related services
          </span>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[0.95] text-3xl md:text-5xl lg:text-6xl mb-10">
            Explore more
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <button
                key={s.slug}
                onClick={() => onSwitchService(s.slug)}
                className="group text-left p-6 md:p-8 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 group-hover:text-black/50 transition-colors">
                  {s.no}
                </span>
                <h3 className="mt-3 font-display font-bold text-xl md:text-2xl tracking-tight">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm text-white/60 group-hover:text-black/60 transition-colors">
                  Explore {s.name}
                </p>
                <ArrowRight size={20} className="mt-4 transition-transform group-hover:translate-x-2" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section id="contact-page" className="bg-white py-16 md:py-24 border-t border-black/10">
        <div className="mx-auto max-w-[800px] px-6 md:px-10 text-center">
          <h2 className="font-display font-bold tracking-[-0.02em] leading-[0.95] text-3xl md:text-5xl lg:text-6xl">
            Ready to start?
          </h2>
          <p className="mt-4 text-base md:text-lg text-black/60">
            Book a 30-minute call or send us your brief — we&apos;ll respond within 24 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@cuttingedger.co"
              className="group inline-flex items-center gap-3 bg-black text-white pl-6 pr-2 py-2 rounded-full hover:bg-white hover:text-black border border-black transition-colors duration-300"
            >
              <span className="text-sm font-medium tracking-wide uppercase">
                Book a call
              </span>
              <span className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <Calendar size={16} />
              </span>
            </a>
            <a
              href="mailto:hello@cuttingedger.co"
              className="group inline-flex items-center gap-3 border border-black px-6 py-2.5 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-black hover:text-white transition-colors duration-300"
            >
              Send your brief
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-black text-white border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-8 sm:gap-12 md:gap-8">
            {/* Brand + tagline */}
            <div className="col-span-2 md:col-span-5">
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                }}
                className="flex items-center gap-2 group mb-5"
              >
                <span className="h-2.5 w-2.5 bg-white rounded-full transition-transform group-hover:scale-150" />
                <span className="font-bold tracking-tight text-lg md:text-xl">
                  CUTTING<span className="font-light">EDGER</span>
                </span>
              </a>
              <p className="text-white/60 text-sm md:text-base max-w-sm leading-relaxed">
                E-commerce catalogs, color protocols, virtual production & CGI,
                and white-label agency extension. Four services, one studio,
                relentless precision.
              </p>
            </div>

            {/* Service links */}
            <div className="md:col-span-3">
              <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-white/40 mb-4 sm:mb-5">
                Services
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {serviceDetails.map((s) => (
                  <li key={s.slug}>
                    <button
                      onClick={() => onSwitchService(s.slug)}
                      className="text-sm md:text-base text-white/80 hover:text-white relative inline-block group text-left"
                    >
                      {s.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-2">
              <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-white/40 mb-4 sm:mb-5">
                Contact
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="mailto:hello@cuttingedger.co" className="text-sm md:text-base text-white/80 hover:text-white transition-colors">
                    hello@cuttingedger.co
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm md:text-base text-white/80 hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm md:text-base text-white/80 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-white/40 mb-4 sm:mb-5">
                Studio
              </p>
              <p className="text-sm md:text-base text-white/80">Berlin, Germany</p>
              <p className="text-sm md:text-base text-white/80 mt-2">Mon — Fri, 9–18 CET</p>
            </div>
          </div>
        </div>

        {/* Mega wordmark */}
        <div className="px-5 sm:px-6 md:px-10 pb-6 sm:pb-8">
          <div className="font-bold tracking-[-0.04em] leading-none text-[11vw] md:text-[14vw] lg:text-[13vw] text-white select-none">
            CUTTINGEDGER
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 py-5 sm:py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-xs font-mono tracking-[0.15em] uppercase text-white/40">
            <span>© 2026 Cuttingedger — Berlin</span>
            <span>Made in monochrome</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
