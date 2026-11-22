"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const openContact = () => {
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
  };

  return (
    <section
      id="contact"
      data-shape="rocket"
      data-ax="0.76"
      data-ay="0.52"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#060000] shadow-[0_24px_80px_rgba(0,0,0,0.65)]"
        >
          {/* Bespoke crimson light-ribbon backdrop */}
          <img
            src="/images/home-cta-backdrop.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060000]/92 via-[#060000]/75 to-[#060000]/55" />

          <div className="relative z-10 px-7 sm:px-12 lg:px-16 py-14 sm:py-20 lg:py-24 max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-4">
              Let&apos;s think
            </p>
            <h2 className="font-display font-extrabold tracking-[-0.03em] leading-[1.05] text-3xl sm:text-5xl lg:text-[54px] text-white">
              Ready to grow your business? Let&apos;s talk.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-white/75 leading-relaxed max-w-xl">
              Tell us your business goals — we&apos;ll bring the marketing
              strategy, creative campaigns, SEO &amp; AI search systems, and
              engineering to achieve them.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={openContact}
                className="group inline-flex items-center gap-2.5 rounded-full bg-white hover:bg-white/90 text-[#060000] px-6 py-3.5 text-sm font-semibold transition-all duration-200 cursor-pointer"
              >
                Start a project
                <span className="h-6 w-6 rounded-full bg-[#060000] text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </button>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#060000]/55 hover:bg-[#060000]/80 hover:border-white/45 text-white px-6 py-3.5 text-sm font-medium transition-all duration-200 backdrop-blur-md"
              >
                View our work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
