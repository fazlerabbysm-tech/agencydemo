"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative bg-black text-white py-20 sm:py-32 md:py-48 overflow-hidden"
    >
      {/* Subtle radial spotlight */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[10px] sm:text-[11px] md:text-xs tracking-[0.3em] uppercase text-white/50 mb-8 sm:mb-10 md:mb-14"
        >
          ✦ Ready when you are
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold tracking-[-0.03em] leading-[0.95] text-[11vw] sm:text-[8vw] lg:text-[7vw] max-w-[14ch] mx-auto text-balance"
        >
          Let&apos;s make something that lasts.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 sm:mt-14 md:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <a
            href="mailto:hello@cuttingedger.co"
            className="group inline-flex items-center gap-3 bg-white text-black pl-5 sm:pl-7 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full hover:bg-transparent hover:text-white border border-white transition-colors duration-300"
          >
            <span className="text-xs sm:text-sm md:text-base font-medium tracking-wide uppercase">
              Start a project
            </span>
            <span className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
              <ArrowUpRight size={16} strokeWidth={2} className="sm:hidden" />
              <ArrowUpRight size={20} strokeWidth={2} className="hidden sm:block" />
            </span>
          </a>

          <a
            href="mailto:hello@cuttingedger.co"
            className="font-mono text-xs sm:text-sm tracking-wide text-white/70 hover:text-white transition-colors underline underline-offset-4 decoration-white/30"
          >
            hello@cuttingedger.co
          </a>
        </motion.div>
      </div>
    </section>
  );
}
