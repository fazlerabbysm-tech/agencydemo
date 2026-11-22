"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";

export default function Hero() {
  const openContact = () => {
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
  };

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left editorial column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/75">
              Integrated Marketing &amp; Innovation
            </p>

            <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.02] text-4xl sm:text-6xl xl:text-[72px] text-white text-balance">
              Marketing that
              <br />
              drives growth<span className="text-[#E81C49]">.</span>
            </h1>

            <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-xl">
              A full-service digital marketing agency in Anaheim, California
              blending strategy, creative production, SEO, paid media, and web
              engineering to move ambitious businesses forward.
            </p>

            {/* Primary + Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={openContact}
                className="group inline-flex items-center gap-2.5 rounded-full bg-white hover:bg-white/90 text-[#060000] px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-200 cursor-pointer shadow-[0_12px_36px_rgba(0,0,0,0.45)]"
              >
                Start a project
                <span className="h-6 w-6 rounded-full bg-[#060000] text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </button>

              <Link
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#060000]/55 hover:bg-[#060000]/80 hover:border-white/45 text-white px-6 py-3.5 text-sm font-medium tracking-tight transition-all duration-200 backdrop-blur-md"
              >
                View our work
              </Link>
            </div>

            {/* 5-star review trust bar */}
            <div className="pt-4 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-white/75">
              <span className="font-mono uppercase tracking-[0.18em] text-[10px] text-white/50">
                Reviews
              </span>
              <span
                className="inline-flex items-center gap-0.5 text-[#FF4D73]"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </span>
              <span className="font-semibold text-white">4.9</span>
              <span className="text-white/60">
                · Rated by 100+ brands across California &amp; the US
              </span>
            </div>
          </motion.div>

          {/* Right studio showcase card (obsidian frame matching brand visual reference) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="kd-obsidian-card rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.65)]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/images/home-hero-studio.webp"
                  alt="Katella Digital marketing and creative studio workspace in Anaheim, California"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060000] via-transparent to-transparent opacity-70" />
              </div>

              <div className="p-5 sm:p-6 flex items-center justify-between gap-4 bg-[#060000]/45 backdrop-blur-xl border-t border-white/10">
                <div>
                  <p className="font-display font-semibold text-white text-sm sm:text-base">
                    Katella Digital — Our Creativity
                  </p>
                  <p className="text-xs text-white/55 mt-0.5">
                    Strategy · Creative · SEO &amp; GEO · Performance
                  </p>
                </div>
                <Link
                  href="/portfolio"
                  aria-label="Explore portfolio"
                  className="h-10 w-10 shrink-0 rounded-full bg-white text-[#060000] hover:bg-[#E81C49] hover:text-white flex items-center justify-center transition-colors"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
