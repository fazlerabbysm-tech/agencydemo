import Navbar from "@/components/site/navbar";
import Hero from "@/components/site/hero";
import BrandMarquee from "@/components/site/marquee";
import StatsValues from "@/components/site/stats-values";
import Services from "@/components/site/services";
import WorkShowcase from "@/components/site/work-showcase";
import FinalCTA from "@/components/site/final-cta";
import FAQ from "@/components/site/faq";
import Footer from "@/components/site/footer";
import CursorGlow from "@/components/site/cursor-glow";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col text-white relative"
      style={{
        background:
          "linear-gradient(120deg, #060000 0%, #2F000A 35%, #9A0E28 70%, #C71F42 100%)",
      }}
    >
      <CursorGlow />
      <Navbar />
      <main className="flex-1 relative z-10">
        {/* 01 — Hero */}
        <Hero />

        {/* 02 — Brand marquee */}
        <BrandMarquee />

        {/* 03 — Stats + What We Believe + Values */}
        <StatsValues />

        {/* 04 — Services — links to /services/<slug> */}
        <Services />

        {/* 05 — Work showcase — links to /portfolio/<slug> */}
        <WorkShowcase />

        {/* 06 — Final call to action */}
        <FinalCTA />

        {/* 07 — FAQ */}
        <FAQ />
      </main>
      <Footer className="relative z-10" />
    </div>
  );
}
