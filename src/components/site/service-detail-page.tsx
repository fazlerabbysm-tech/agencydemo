"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Plus, Calendar } from "lucide-react";
import type { ServiceDetail } from "@/data/services";

interface Props {
  service: ServiceDetail;
}

/**
 * Service detail page — premium, minimal, image-light.
 *
 * Sections (8):
 *   1. Hero            — full-bleed bg image + bold typography
 *   2. Problem         — text-only, animated accordion-style points
 *   3. What's included — numbered list, hover-to-reveal descriptions
 *   4. Process         — vertical scroll-animated timeline (no image)
 *   5. Case study      — single cinematic image + testimonial quote
 *   6. FAQ             — accordion (unchanged)
 *   7. Related services — text-only grid (unchanged)
 *   8. Final CTA       — unchanged
 *
 * Total images: 2 (hero bg + case study). Previously 11+ images.
 */
export default function ServiceDetailPage({ service }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [hoveredSub, setHoveredSub] = useState<number | null>(null);

  const otherServices = [
    { slug: "ui-ux", name: "UI/UX Design", no: "01" },
    { slug: "motion-graphics", name: "Motion Graphics", no: "02" },
    { slug: "digital-marketing", name: "Digital Marketing", no: "03" },
    { slug: "web-app-dev", name: "Web & App Development", no: "04" },
  ].filter((s) => s.slug !== service.slug);

  const servicePortfolioSlug: Record<string, string> = {
    "ui-ux": "aurora-goods",
    "motion-graphics": "echo-motors",
    "digital-marketing": "maison-noir",
    "web-app-dev": "agency-collective",
  };
  const caseStudySlug = servicePortfolioSlug[service.slug] || "aurora-goods";

  return (
    <div className="clear-both">
      {/* ============ HERO ============ */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden bg-[#060000] text-white pt-24 md:pt-28">
        {/* Premium bg image with multi-layer gradient overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${service.problemImage})`,
            backgroundColor: "#060000",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060000] via-[#060000]/70 to-[#060000]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060000]/80 via-transparent to-transparent" />
        {/* Subtle red ambient glow at top-right */}
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #C71F42 0%, transparent 70%)" }}
        />

        <div className="relative z-10 mx-auto max-w-[1200px] w-full px-6 md:px-10 py-16 md:py-24">
          {/* Eyebrow — animated */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs md:text-sm tracking-[0.25em] uppercase text-[#C71F42] mb-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-[#C71F42]" />
            {service.no} — {service.name}
          </motion.p>

          {/* Hero title — large, premium typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-bold tracking-[-0.03em] leading-[0.92] text-[12vw] md:text-[7vw] lg:text-[5.5vw] break-words max-w-4xl"
          >
            {service.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl font-light"
          >
            {service.heroOutcome}
          </motion.p>

          {/* Best for — minimal pill row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/40">
              Best for
            </span>
            {service.bestFor.map((b) => (
              <span
                key={b}
                className="text-xs md:text-sm px-4 py-1.5 rounded-full border border-white/15 text-white/70 backdrop-blur-sm bg-white/5"
              >
                {b}
              </span>
            ))}
          </motion.div>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 bg-[#C71F42] text-black pl-6 pr-2 py-2 rounded-full hover:bg-transparent hover:text-[#C71F42] border border-[#C71F42] transition-colors duration-300"
            >
              <span className="text-sm font-medium tracking-wide uppercase">Get a quote</span>
              <span className="h-10 w-10 rounded-full bg-black text-[#C71F42] flex items-center justify-center group-hover:bg-[#C71F42] group-hover:text-black transition-colors duration-300">
                <ArrowUpRight size={18} strokeWidth={2} />
              </span>
            </Link>
            <Link
              href="#work-modal"
              className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-white/70 hover:text-[#C71F42] border-b border-white/20 hover:border-[#C71F42] pb-1 transition-all"
            >
              See examples
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/30">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-10 w-px bg-gradient-to-b from-[#C71F42] to-transparent"
            />
          </div>
        </motion.div>
      </section>

      {/* ============ PROBLEM ============ */}
      <section className="bg-[#1a0a0e] py-20 md:py-32 border-b border-[#3a1518]">
        <div className="mx-auto max-w-[1000px] px-6 md:px-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#C71F42] flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-[#C71F42]" />
            The problem
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold tracking-[-0.02em] leading-[0.95] text-4xl md:text-6xl lg:text-7xl text-white max-w-3xl"
          >
            {service.problemTitle}
          </motion.h2>

          {/* Problem points — premium numbered grid, no image */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {service.problemPoints.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative pl-16"
              >
                <span className="absolute left-0 top-0 font-display font-light text-5xl md:text-6xl leading-none text-[#C71F42]/40 group-hover:text-[#C71F42] transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base md:text-lg text-white/75 leading-relaxed pt-2">{p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT'S INCLUDED — text-only, numbered, hover reveal ============ */}
      <section className="bg-[#060000] text-white py-20 md:py-32">
        <div className="mx-auto max-w-[1000px] px-6 md:px-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#C71F42] flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-[#C71F42]" />
            {service.includedTitle}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold tracking-[-0.02em] leading-[0.95] text-4xl md:text-6xl lg:text-7xl mb-16"
          >
            What you get
          </motion.h2>

          {/* Numbered list — premium, no images, hover expand */}
          <div className="border-t border-[#3a1518]">
            {service.subServices.map((s, i) => {
              const isHovered = hoveredSub === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  onMouseEnter={() => setHoveredSub(i)}
                  onMouseLeave={() => setHoveredSub(null)}
                  className="group border-b border-[#3a1518] py-8 md:py-10 cursor-pointer"
                >
                  <div className="grid grid-cols-12 gap-6 items-baseline">
                    <span className="col-span-2 md:col-span-1 font-mono text-xs tracking-[0.2em] text-[#C71F42]/60 group-hover:text-[#C71F42] transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="col-span-10 md:col-span-11">
                      <h3 className="font-display font-bold text-2xl md:text-4xl tracking-tight text-white group-hover:text-[#C71F42] transition-colors duration-300">
                        {s.title}
                      </h3>
                      <AnimatePresence>
                        <motion.p
                          key={`desc-${i}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: isHovered ? 1 : 0.55,
                            height: "auto",
                          }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="mt-3 text-sm md:text-base text-white/60 leading-relaxed max-w-2xl overflow-hidden"
                        >
                          {s.desc}
                        </motion.p>
                      </AnimatePresence>
                    </div>
                    <ArrowRight
                      size={20}
                      className={`hidden md:block col-span-1 mt-1 transition-all duration-300 ${
                        isHovered
                          ? "text-[#C71F42] translate-x-1 opacity-100"
                          : "text-white/30 opacity-30"
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ PROCESS — vertical timeline, scroll-animated, no image ============ */}
      <section className="bg-[#1a0a0e] py-20 md:py-32 border-b border-[#3a1518]">
        <div className="mx-auto max-w-[1000px] px-6 md:px-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#C71F42] flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-[#C71F42]" />
            {service.processTitle}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold tracking-[-0.02em] leading-[0.95] text-4xl md:text-6xl lg:text-7xl mb-16 text-white"
          >
            Steps &amp; timeline
          </motion.h2>

          {/* Vertical timeline with line on the left */}
          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-[#C71F42] via-[#C71F42]/40 to-transparent" />

            <div className="space-y-12">
              {service.processSteps.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative pl-14 md:pl-20"
                >
                  {/* Timeline dot */}
                  <span className="absolute left-0 md:left-2 top-2 h-8 w-8 md:h-9 md:w-9 rounded-full bg-[#1a0a0e] border-2 border-[#C71F42] flex items-center justify-center font-mono text-[10px] md:text-xs text-[#C71F42]">
                    {p.step}
                  </span>

                  <div className="flex items-baseline justify-between gap-4 mb-2 flex-wrap">
                    <h3 className="font-display font-bold text-2xl md:text-4xl tracking-tight text-white">
                      {p.title}
                    </h3>
                    <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#C71F42]/80 px-3 py-1 rounded-full border border-[#C71F42]/30">
                      {p.duration}
                    </span>
                  </div>
                  <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl">{p.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 bg-[#C71F42] text-black px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-transparent hover:text-[#C71F42] border border-[#C71F42] transition-colors duration-300"
              >
                <Calendar size={16} />
                Book a discovery call
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ RELATED WORK — text-only grid, premium minimal ============ */}
      <section id="work-modal" className="bg-[#060000] text-white py-20 md:py-32 border-b border-[#3a1518]">
        <div className="mx-auto max-w-[1000px] px-6 md:px-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#C71F42] flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-[#C71F42]" />
            Related work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold tracking-[-0.02em] leading-[0.95] text-4xl md:text-6xl lg:text-7xl mb-16"
          >
            Recent {service.name.toLowerCase()} projects
          </motion.h2>

          {/* Text-only list, big numbers, hover accent line */}
          <div className="border-t border-[#3a1518]">
            {service.relatedWork.map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={`/portfolio/${caseStudySlug}`}
                  className="group block py-8 md:py-10 border-b border-[#3a1518] relative"
                >
                  {/* Hover accent line — slides in from left */}
                  <span className="absolute left-0 top-0 h-full w-1 bg-[#C71F42] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />

                  <div className="grid grid-cols-12 gap-6 items-baseline pl-4 md:pl-6">
                    <span className="col-span-2 md:col-span-1 font-mono text-xs tracking-[0.2em] text-[#C71F42]/60 group-hover:text-[#C71F42] transition-colors">
                      0{i + 1}
                    </span>
                    <div className="col-span-10 md:col-span-7">
                      <h3 className="font-display font-bold text-2xl md:text-4xl tracking-tight text-white group-hover:text-[#C71F42] transition-colors duration-300">
                        {w.title}
                      </h3>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex md:justify-end items-baseline gap-4">
                      <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/40">
                        {w.cat}
                      </span>
                      <ArrowRight
                        size={20}
                        className="text-white/40 group-hover:text-[#C71F42] group-hover:translate-x-2 transition-all duration-300"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-sm text-white/50">
            See all {service.name.toLowerCase()} work —{" "}
            <Link href="/#work" className="underline underline-offset-4 hover:text-[#C71F42]">
              view full archive
            </Link>
          </p>
        </div>
      </section>

      {/* ============ CASE STUDY + TESTIMONIAL — single cinematic image ============ */}
      <section className="bg-[#1a0a0e] text-white py-20 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Single cinematic image, big, premium */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Link href={`/case-studies/${caseStudySlug}`} className="block relative aspect-[4/3] overflow-hidden bg-[#2a0a10] group">
                <img
                  src={service.caseStudyImage}
                  alt="Case study"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060000]/80 via-transparent to-transparent" />
                {/* Premium ring */}
                <div className="absolute inset-4 ring-1 ring-inset ring-white/10 group-hover:ring-[#C71F42]/40 transition-all duration-500" />
                {/* Bottom corner label */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/70 backdrop-blur-sm bg-black/30 px-3 py-1.5 rounded-full border border-white/10">
                    Case Study
                  </span>
                  <span className="h-10 w-10 rounded-full bg-[#C71F42] flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-300">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Testimonial — premium typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#C71F42] flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#C71F42]" />
                Case study
              </span>

              {/* Big metric — display font */}
              <div className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-[#C71F42]">
                {service.caseStudyMetric}
              </div>

              {/* Quote with large opening quote mark */}
              <div className="mt-8 relative">
                <span className="absolute -left-2 -top-4 font-display font-bold text-6xl leading-none text-[#C71F42]/40 select-none">
                  &ldquo;
                </span>
                <blockquote className="pl-8 text-lg md:text-xl lg:text-2xl text-white/85 leading-relaxed font-display font-light italic">
                  {service.caseStudyQuote}
                </blockquote>
              </div>

              <p className="mt-6 font-mono text-xs tracking-[0.2em] uppercase text-white/50">
                {service.caseStudyAuthor}
              </p>

              <Link
                href={`/case-studies/${caseStudySlug}`}
                className="mt-8 inline-flex items-center gap-3 border border-[#C71F42]/40 hover:bg-[#C71F42] hover:text-black px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase transition-colors duration-300"
              >
                Read the full case study
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-[#060000] py-20 md:py-32 border-b border-[#3a1518]">
        <div className="mx-auto max-w-[900px] px-6 md:px-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#C71F42] flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-[#C71F42]" />
            {service.faqTitle}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold tracking-[-0.02em] leading-[0.95] text-4xl md:text-6xl lg:text-7xl mb-12 text-white"
          >
            Questions, answered
          </motion.h2>

          <div className="border-t border-[#3a1518]">
            {service.faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="border-b border-[#3a1518]">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full py-6 md:py-7 flex items-center gap-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-mono text-xs tracking-[0.2em] text-white/40 shrink-0">0{i + 1}</span>
                    <span className="flex-1 font-display font-medium text-base md:text-xl tracking-tight text-white group-hover:text-[#C71F42] transition-colors">
                      {f.q}
                    </span>
                    <span
                      className={`shrink-0 h-9 w-9 md:h-10 md:w-10 rounded-full border border-[#C71F42]/40 flex items-center justify-center transition-all duration-300 ${
                        isOpen ? "bg-[#C71F42] text-black rotate-45" : ""
                      }`}
                    >
                      <Plus size={16} strokeWidth={2} />
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
                        <p className="pb-7 md:pb-8 pl-8 md:pl-12 pr-10 md:pr-14 text-sm md:text-base text-white/65 leading-relaxed">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          <p className="mt-8 text-sm text-white/55">
            Still have questions?{" "}
            <Link href="/#contact" className="underline underline-offset-4 hover:text-[#C71F42] font-medium">
              Ask us directly
            </Link>
          </p>
        </div>
      </section>

      {/* ============ RELATED SERVICES ============ */}
      <section className="bg-[#1a0a0e] text-white py-20 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#C71F42] flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-[#C71F42]" />
            Related services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold tracking-[-0.02em] leading-[0.95] text-4xl md:text-6xl lg:text-7xl mb-12"
          >
            Explore more
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="group block text-left p-6 md:p-8 border border-[#3a1518] hover:border-[#C71F42] hover:bg-[#C71F42]/5 transition-all duration-500 rounded-lg h-full relative overflow-hidden"
                >
                  {/* Top-right glow that appears on hover */}
                  <span
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                    style={{ background: "radial-gradient(circle, #C71F42 0%, transparent 70%)" }}
                  />
                  <span className="relative font-mono text-[10px] tracking-[0.2em] uppercase text-[#C71F42]">{s.no}</span>
                  <h3 className="relative mt-4 font-display font-bold text-xl md:text-2xl tracking-tight">{s.name}</h3>
                  <p className="relative mt-2 text-sm text-white/55">Explore {s.name}</p>
                  <ArrowRight size={20} className="relative mt-6 transition-transform group-hover:translate-x-2 text-[#C71F42]" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section id="contact-page" className="bg-[#060000] py-20 md:py-32 border-t border-[#3a1518] relative overflow-hidden">
        {/* Subtle radial accent */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #C71F42 0%, transparent 70%)" }}
        />

        <div className="relative mx-auto max-w-[800px] px-6 md:px-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold tracking-[-0.02em] leading-[0.95] text-4xl md:text-6xl lg:text-7xl text-white"
          >
            Ready to start?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 text-base md:text-lg text-white/60"
          >
            Book a 30-minute call or send us your brief — we&apos;ll respond within 24 hours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 bg-[#C71F42] text-black pl-6 pr-2 py-2 rounded-full hover:bg-transparent hover:text-[#C71F42] border border-[#C71F42] transition-colors duration-300"
            >
              <span className="text-sm font-medium tracking-wide uppercase">Book a call</span>
              <span className="h-10 w-10 rounded-full bg-black text-[#C71F42] flex items-center justify-center group-hover:bg-[#C71F42] group-hover:text-black transition-colors">
                <Calendar size={16} />
              </span>
            </Link>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 border border-[#C71F42]/40 px-6 py-2.5 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-[#C71F42] hover:text-black transition-colors duration-300"
            >
              Send your brief
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
