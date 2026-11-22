"use client";

const trustedBrands = [
  "AURORA GOODS",
  "MAISON NOIR",
  "ECHO MOTORS",
  "APEX SOLAR",
  "VELA HOSPITALITY",
  "PULSE FINTECH",
  "PACIFIC HEALTH",
  "SOLIS ENERGY",
  "KINETIC LABS",
  "WESTCOAST RETAIL",
];

export default function BrandMarquee() {
  return (
    <section
      aria-label="Trusted clients"
      data-shape="globe"
      data-ax="0.50"
      data-ay="0.50"
      className="py-8 sm:py-10 border-y border-white/10 bg-[#060000]/55 backdrop-blur-md overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 mb-5">
        <p className="text-center font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.26em] text-white/50">
          Trusted by ambitious brands across California &amp; nationwide
        </p>
      </div>

      <div className="relative overflow-hidden marquee-pause">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#060000] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#060000] to-transparent z-10" />

        <div className="flex w-max marquee-track-left-slow">
          {[...trustedBrands, ...trustedBrands].map((brand, idx) => (
            <div
              key={`${brand}-${idx}`}
              className="flex items-center px-7 sm:px-10"
            >
              <span className="font-display font-semibold text-sm sm:text-base tracking-[0.18em] text-white/45 hover:text-white/90 transition-colors whitespace-nowrap">
                {brand}
              </span>
              <span className="ml-7 sm:ml-10 h-1 w-1 rounded-full bg-[#C71F42]/70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
