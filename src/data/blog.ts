export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Marketing" | "AI Search (GEO)" | "Branding" | "Web & Tech" | "Strategy";
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  author: {
    name: string;
    role: string;
  };
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-search-visibility-how-to-check-your-brand",
    title: "AI Search Visibility: How to Check If Your Business Appears in AI Answers",
    excerpt:
      "Buyers increasingly ask ChatGPT, Perplexity, and Google AI Overviews before clicking a search result. Here is a practical audit framework to measure and improve your brand's AI visibility.",
    category: "AI Search (GEO)",
    date: "Nov 18, 2026",
    readTime: "8 min read",
    image: "/images/service-ai-search-geo.webp",
    featured: true,
    author: {
      name: "Katella Strategy Team",
      role: "SEO & AI Search Practice",
    },
    sections: [
      {
        heading: "Why AI answers are reshaping high-intent discovery",
        paragraphs: [
          "Traditional blue links still drive significant traffic, but high-intent B2B and local buyers now synthesize vendor shortlists directly inside AI answer engines. If your brand is missing from those synthesized recommendations, you lose deals before the buyer ever opens a website.",
          "AI visibility is not a black box. Models pull from three consistent signals: clear entity authority across the web, structured on-site documentation that directly answers buyer questions, and verifiable third-party mentions.",
        ],
      },
      {
        heading: "A 4-step AI visibility audit you can run this week",
        paragraphs: [
          "Start by testing 15 to 20 real commercial prompts across ChatGPT, Perplexity, Claude, and Google AI Overviews — covering category queries, city-specific searches, and direct competitor comparisons.",
        ],
        bullets: [
          "Document whether your brand is named, cited with a link, or omitted altogether.",
          "Inspect which competitors get recommended and note the exact sources the AI cites.",
          "Check your robots.txt and server headers to ensure AI crawlers can read public marketing pages.",
          "Audit your Service, Organization, and FAQPage JSON-LD schema for entity consistency.",
        ],
      },
      {
        heading: "Turning visibility into qualified pipeline",
        paragraphs: [
          "Ranking inside AI answers only pays off when your landing pages convert the referral click. Pair clear proof points, transparent engagement models, and fast static page loads so every AI-referred visitor moves smoothly into a consultation.",
        ],
      },
    ],
  },
  {
    slug: "how-to-appear-in-chatgpt-practical-guide",
    title: "How to Appear in ChatGPT: A Practical GEO Guide for Growth Brands",
    excerpt:
      "Generative Engine Optimization (GEO) combines technical clarity, original proof, and consistent entity signals so AI assistants cite your business with confidence.",
    category: "AI Search (GEO)",
    date: "Nov 14, 2026",
    readTime: "9 min read",
    image: "/images/service-seo.webp",
    author: {
      name: "Katella Strategy Team",
      role: "SEO & AI Search Practice",
    },
    sections: [
      {
        heading: "Write answer-first pages, not keyword-stuffed essays",
        paragraphs: [
          "AI retrieval pipelines extract concise, self-contained passages that directly answer a buyer's question. Pages built around vague marketing slogans rarely get cited; pages that state scope, pricing structures, timelines, and trade-offs clearly get quoted repeatedly.",
        ],
      },
      {
        heading: "Strengthen brand entity consistency across the web",
        paragraphs: [
          "Make sure your agency name, location, core service categories, and positioning match across your website schema, Google Business Profile, LinkedIn, Clutch, and press mentions. Ambiguous naming dilutes entity confidence.",
        ],
      },
    ],
  },
  {
    slug: "seo-vs-google-ads-where-to-spend-first",
    title: "SEO vs. Google Ads: Where Should Growing Businesses Spend First?",
    excerpt:
      "Paid search buys immediate intent; organic SEO builds a compounding acquisition moat. Here is how to sequence budget without wasting your first 90 days.",
    category: "Marketing",
    date: "Nov 10, 2026",
    readTime: "7 min read",
    image: "/images/service-google-ads.webp",
    author: {
      name: "Katella Growth Desk",
      role: "Paid Media & Acquisition",
    },
    sections: [
      {
        heading: "Use Google Ads to validate high-converting messaging fast",
        paragraphs: [
          "Before committing six months of editorial budget to a keyword cluster, run tightly scoped exact-match search campaigns to prove which offers, headlines, and landing pages actually generate qualified sales conversations.",
        ],
      },
      {
        heading: "Reinvest paid learnings into compounding SEO assets",
        paragraphs: [
          "Once paid search identifies your highest-margin queries, build dedicated service pages, comparison guides, and technical SEO foundations around those exact topics to lower blended customer acquisition cost quarter over quarter.",
        ],
      },
    ],
  },
  {
    slug: "structured-data-for-ai-and-modern-seo",
    title: "Structured Data for AI Search: What Every Business Website Should Include",
    excerpt:
      "From Organization and Service graphs to FAQPage and BreadcrumbList — the exact JSON-LD architecture that helps search engines and LLMs understand your business.",
    category: "Web & Tech",
    date: "Nov 6, 2026",
    readTime: "8 min read",
    image: "/images/service-web-app-dev.webp",
    author: {
      name: "Katella Engineering",
      role: "Web Performance & Architecture",
    },
    sections: [
      {
        heading: "Connect entities with stable @id references",
        paragraphs: [
          "Isolated schema blocks force crawlers to guess how your company, services, articles, and reviews relate. Linking every Service and Article back to a canonical Organization @id creates a clean, machine-readable knowledge graph.",
        ],
      },
      {
        heading: "Keep schema 100% aligned with visible copy",
        paragraphs: [
          "Never stuff hidden claims into JSON-LD. Every FAQ answer, office address, and service description in structured data should match what a human visitor reads on the page.",
        ],
      },
    ],
  },
  {
    slug: "brand-identity-vs-logo-what-your-company-needs",
    title: "Brand Identity vs. Logo: What a Scaling Business Actually Needs",
    excerpt:
      "A logo is a mark; a brand system is the positioning, typography, color hierarchy, and visual rules that make every ad, landing page, and deck unmistakably yours.",
    category: "Branding",
    date: "Nov 2, 2026",
    readTime: "7 min read",
    image: "/images/service-brand-identity.webp",
    author: {
      name: "Katella Creative Studio",
      role: "Brand & Art Direction",
    },
    sections: [
      {
        heading: "Why disconnected visuals quietly tax your ad spend",
        paragraphs: [
          "When your paid social ads, landing pages, and sales decks look like three different companies, buyers hesitate. Cohesive visual identity builds immediate trust and lifts landing-page conversion rates across every paid channel.",
        ],
      },
      {
        heading: "The deliverables that matter in a real identity system",
        paragraphs: [
          "Insist on practical, production-ready assets: responsive logo lockups, digital-first color contrast tokens, typography hierarchy, social templates, and clear usage guidelines your internal team can ship with on day one.",
        ],
      },
    ],
  },
  {
    slug: "performance-creative-that-actually-converts",
    title: "Performance Marketing & Creative Testing: How Top Brands Scale ROAS",
    excerpt:
      "Media buying algorithms are smarter than ever — which means creative hooks, landing-page speed, and offer clarity are now the biggest levers for lower CPA.",
    category: "Strategy",
    date: "Oct 27, 2026",
    readTime: "6 min read",
    image: "/images/service-performance-marketing.webp",
    author: {
      name: "Katella Growth Desk",
      role: "Performance & Conversion",
    },
    sections: [
      {
        heading: "Treat creative as a weekly experiment, not a quarterly campaign",
        paragraphs: [
          "Ad fatigue hits fast across Meta, YouTube, and TikTok. High-performing accounts ship structured creative sprints — testing distinct opening hooks, proof formats, and calls to action every two weeks.",
        ],
      },
      {
        heading: "Close the gap between ad click and landing page",
        paragraphs: [
          "Sending cold traffic to a generic homepage kills conversion rates. Match every campaign angle to a dedicated, sub-second static landing page with aligned messaging, social proof, and a frictionless inquiry flow.",
        ],
      },
    ],
  },
];
