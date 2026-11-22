"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const creativePoints = [
  {
    title: "High-impact ideas",
    desc: "Bold creative campaigns engineered to stop the scroll and stand apart in crowded feeds.",
  },
  {
    title: "Full-channel execution",
    desc: "Seamless coordination across paid search, paid social, video, email, and landing experiences.",
  },
  {
    title: "Memorable brand systems",
    desc: "Visual consistency that compounds brand recall and lowers customer acquisition costs over time.",
  },
  {
    title: "Data-tested campaigns",
    desc: "We validate messaging, hooks, and creative angles before scaling budget for maximum return on ad spend.",
  },
];

export default function CreativityShowcase() {
  return (
    <section id="creativity" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left narrative */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] mb-3">
                  The sky&apos;s the limit
                </p>
                <h2 className="font-display font-bold tracking-[-0.03em] leading-[1.06] text-3xl sm:text-4xl text-white">
                  Creative campaigns that deliver real business growth.
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {creativePoints.map((pt) => (
                  <div
                    key={pt.title}
                    className="kd-glass-tile rounded-xl p-4 space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-4 w-4 shrink-0 rounded-full bg-[#C71F42]/25 border border-[#C71F42]/50 flex items-center justify-center text-[#FF4D73]">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      <h3 className="text-sm font-semibold text-white">
                        {pt.title}
                      </h3>
                    </div>
                    <p className="text-xs text-white/65 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white hover:bg-white/90 text-[#060000] px-5 py-2.5 text-sm font-semibold transition-colors"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Right framed production visual */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-7"
            >
              <div className="rounded-2xl overflow-hidden border border-white/12 bg-[#060000]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/images/home-creativity-shoot.webp"
                    alt="Katella Digital commercial campaign production and creative direction studio"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060000]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs">
                    <span className="font-mono uppercase tracking-[0.18em] text-white/80">
                      Katella Digital Studio
                    </span>
                    <span className="text-white/55">
                      Creative Direction · Video · Campaign Production
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
