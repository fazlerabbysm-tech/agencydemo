"use client";

const brandsTop = [
  "AURORA GOODS",
  "ECHO MOTORS",
  "MERIDIAN CO",
  "HARBOR GOODS",
  "STELLAR HOTEL",
  "ZENITH PRESS",
  "NOMAD JNL",
  "VANTA STUDIO",
];

const brandsBottom = [
  "AGENCY COLLECTIVE",
  "VECTOR FORM",
  "CIPHER LABS",
  "PRISM TYPE",
  "OAKLEY & CO",
  "ORBIT KIT",
  "FORMA STUDIO",
  "NORD ATELIER",
];

export default function BrandMarquee() {
  return (
    <section
      aria-label="Trusted by"
      className="bg-[#111111] text-white py-10 sm:py-14 md:py-20 overflow-hidden border-y border-[#2a2a2a]"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 mb-6 sm:mb-10 md:mb-14">
        <p className="font-mono text-[10px] sm:text-[11px] md:text-xs tracking-[0.25em] uppercase text-white/50">
          ✦ Trusted by 250+ brands — 2017 / 2026
        </p>
      </div>

      {/* Top line — moves LEFT (right to left) */}
      <div className="marquee-pause relative">
        <div className="flex w-max marquee-track-left">
          {[...brandsTop, ...brandsTop].map((b, i) => (
            <BrandItem key={`top-${i}`} name={b} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom line — moves RIGHT (left to right) → together forms anti-clockwise rotation */}
      <div className="marquee-pause relative mt-2 sm:mt-3 md:mt-4">
        <div className="flex w-max marquee-track-right">
          {[...brandsBottom, ...brandsBottom].map((b, i) => (
            <BrandItem key={`bot-${i}`} name={b} index={i} variant="outline" />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandItem({
  name,
  index,
  variant = "solid",
}: {
  name: string;
  index: number;
  variant?: "solid" | "outline";
}) {
  return (
    <span className="flex items-center shrink-0">
      <span
        className={`font-display font-semibold tracking-tight text-[8vw] sm:text-[6vw] md:text-[5.5vw] lg:text-[4.5vw] leading-none px-5 sm:px-8 md:px-12 ${
          variant === "outline"
            ? "text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.55)]"
            : "text-white"
        }`}
      >
        {name}
      </span>
      <span className="text-[#46E2E2] text-xl sm:text-2xl md:text-3xl">✦</span>
    </span>
  );
}
