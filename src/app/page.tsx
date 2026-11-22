import Navbar from "@/components/site/navbar";
import Hero from "@/components/site/hero";
import BrandMarquee from "@/components/site/marquee";
import WhyUs from "@/components/site/why-us";
import StatsValues from "@/components/site/stats-values";
import Services from "@/components/site/services";
import HomeProcess from "@/components/site/home-process";
import CreativityShowcase from "@/components/site/creativity-showcase";
import WorkShowcase from "@/components/site/work-showcase";
import InsightsSection from "@/components/site/insights-section";
import FinalCTA from "@/components/site/final-cta";
import Footer from "@/components/site/footer";
import CursorGlow from "@/components/site/cursor-glow";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-white relative kd-canvas-bg">
      <CursorGlow />
      <Navbar />
      <main className="flex-1 relative z-10">
        {/* 01 — Hero */}
        <Hero />

        {/* 02 — Trusted Brand Logos */}
        <BrandMarquee />

        {/* 03 — Why Katella Digital */}
        <WhyUs />

        {/* 04 — By the Numbers (Proof, not promises) */}
        <StatsValues />

        {/* 05 — What We Do (Interactive 01–07 Services Switcher) */}
        <Services />

        {/* 06 — How We Think (6-Step Growth Path) */}
        <HomeProcess />

        {/* 07 — The Sky's the Limit (Creativity Showcase) */}
        <CreativityShowcase />

        {/* 08 — Selected Work (6 Campaign & Project Cards) */}
        <WorkShowcase />

        {/* 09 — Insights (6 Latest Articles) */}
        <InsightsSection />

        {/* 10 — Final CTA Banner */}
        <FinalCTA />
      </main>
      <Footer className="relative z-10" />
    </div>
  );
}
