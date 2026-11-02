"use client";

import { useEffect, useState } from "react";

const footerLinks = [
  {
    title: "Studio",
    items: [
      { label: "About", href: "#about" },
      { label: "Work", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Brand Identity", href: "#services" },
      { label: "Art Direction", href: "#services" },
      { label: "Digital Experience", href: "#services" },
      { label: "Motion & Film", href: "#services" },
    ],
  },
  {
    title: "Connect",
    items: [
      { label: "Instagram", href: "#" },
      { label: "Behance", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Vimeo", href: "#" },
    ],
  },
];

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const opts: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Europe/Berlin",
      };
      setTime(now.toLocaleTimeString("en-GB", opts));
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <footer className="bg-black text-white">
      {/* Big footer wordmark */}
      <div className="border-t border-white/10 overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 pt-12 sm:pt-16 md:pt-24 pb-8 sm:pb-10">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-8 sm:gap-12 md:gap-8">
            {/* Brand + tagline */}
            <div className="col-span-2 md:col-span-5">
              <a href="#top" className="flex items-center gap-2 group mb-5 md:mb-6">
                <span className="h-2.5 w-2.5 bg-white rounded-full transition-transform group-hover:scale-150" />
                <span className="font-display font-bold tracking-tight text-lg md:text-xl">
                  CUTTING<span className="font-light">EDGER</span>
                </span>
              </a>
              <p className="text-white/60 text-sm md:text-base max-w-sm leading-relaxed">
                A black & white creative studio crafting brands, films, and
                digital experiences with relentless precision.
              </p>

              {/* Berlin clock */}
              <div className="mt-8 md:mt-10 flex items-center gap-3 text-white/70 font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                Berlin · {time || "—"}
              </div>
            </div>

            {/* Link columns */}
            {footerLinks.map((col) => (
              <div key={col.title} className="md:col-span-2">
                <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-white/40 mb-4 sm:mb-5">
                  {col.title}
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-sm md:text-base text-white/80 hover:text-white relative inline-block group"
                      >
                        {item.label}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter / contact */}
            <div className="md:col-span-1 hidden md:block" />
          </div>
        </div>

        {/* Mega wordmark */}
        <div className="px-5 sm:px-6 md:px-10 pb-6 sm:pb-8">
          <div className="font-display font-bold tracking-[-0.04em] leading-none text-[11vw] md:text-[14vw] lg:text-[13vw] text-white select-none">
            CUTTINGEDGER
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 py-5 sm:py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-xs font-mono tracking-[0.15em] uppercase text-white/40">
            <span>© 2026 Cuttingedger GmbH — Berlin</span>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Imprint
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
            <span>Made in monochrome</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
