import Navbar from "@/components/site/navbar";
import Hero from "@/components/site/hero";
import BrandMarquee from "@/components/site/marquee";
import WhatWeDo from "@/components/site/what-we-do";
import Services from "@/components/site/services";
import WorkShowcase from "@/components/site/work-showcase";
import FinalCTA from "@/components/site/final-cta";
import FAQ from "@/components/site/faq";
import Footer from "@/components/site/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />
      <main className="flex-1">
        {/* 01 — Hero with image slider + Get Started CTA */}
        <Hero />

        {/* 02 — Brand marquee, 2 lines, anti-clockwise rotation */}
        <BrandMarquee />

        {/* 03 — "What can we do for you?" with visual image */}
        <WhatWeDo />

        {/* 04 — "WHAT CAN WE HELP YOU WITH" auto-rotating service cards */}
        <Services />

        {/* 05 — Work showcase, 4 image/video cards, rotating with title only */}
        <WorkShowcase />

        {/* 06 — Final call to action, one-line text */}
        <FinalCTA />

        {/* 07 — FAQ */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
