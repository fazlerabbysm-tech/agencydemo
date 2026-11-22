export interface SubService {
  title: string;
  desc: string;
  image?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  duration: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface WorkCard {
  title: string;
  cat: string;
  image: string;
  href?: string;
}

export interface PricingModel {
  name: string;
  starting: string;
  bestFor: string;
  desc: string;
}

export interface ServiceDetail {
  slug: string;
  no: string;
  category:
    | "Brand & Creative"
    | "Marketing & Growth"
    | "Web & Apps"
    | "Campaigns & Systems";
  isPillar?: boolean;
  name: string;
  heroTitle: string;
  heroOutcome: string;
  heroImage: string;
  bestFor: string[];
  notSureText: string;
  problemTitle: string;
  problemPoints: string[];
  includedTitle: string;
  subServices: SubService[];
  processTitle: string;
  processSteps: ProcessStep[];
  deliverablesTitle: string;
  deliverablesScope: string;
  deliverablesStarting: string;
  pricingModels: PricingModel[];
  caseStudyMetric: string;
  caseStudyQuote: string;
  caseStudyAuthor: string;
  relatedWork: WorkCard[];
  faqTitle: string;
  faqs: FAQItem[];
  relatedServices: string[];
}

const defaultPricing = (retainer: string, project: string): PricingModel[] => [
  {
    name: "Monthly Retainer",
    starting: retainer,
    bestFor: "Compounding growth & continuous optimization",
    desc: "Dedicated senior strategists, creative production, weekly testing sprints, and transparent monthly attribution reporting.",
  },
  {
    name: "Fixed-Scope Project",
    starting: project,
    bestFor: "Launches, redesigns, audits & foundational builds",
    desc: "Clear deliverables, locked timeline, milestone reviews, and full ownership of all source assets and documentation upon handoff.",
  },
  {
    name: "Performance-Aligned",
    starting: "Custom hybrid",
    bestFor: "Qualified pipeline & scaling paid acquisition",
    desc: "Base execution fee paired with mutually agreed KPI milestones tied directly to qualified leads, revenue, or ROAS targets.",
  },
];

const sharedWork: WorkCard[] = [
  {
    title: "Apex Solar California",
    cat: "Google Ads & Local SEO · 3.8x installs",
    image: "/images/portfolio-apex-solar.webp",
    href: "/portfolio/apex-solar",
  },
  {
    title: "Aurora Goods",
    cat: "E-commerce Growth · +34% CVR",
    image: "/images/portfolio-aurora-ecommerce.webp",
    href: "/portfolio/aurora-goods",
  },
  {
    title: "Vela Hospitality",
    cat: "Brand & Social Launch · 2.4M reach",
    image: "/images/portfolio-vela-hospitality.webp",
    href: "/portfolio/vela-hospitality",
  },
];

interface CompactServiceSeed {
  slug: string;
  no: string;
  category: ServiceDetail["category"];
  isPillar?: boolean;
  name: string;
  heroTitle: string;
  heroOutcome: string;
  heroImage: string;
  bestFor: string[];
  problemTitle: string;
  problemPoints: string[];
  subServices: SubService[];
  processSteps: ProcessStep[];
  deliverablesScope: string;
  retainer: string;
  project: string;
  metric: string;
  quote: string;
  author: string;
  faqs: FAQItem[];
  relatedServices: string[];
}

function buildService(s: CompactServiceSeed): ServiceDetail {
  return {
    slug: s.slug,
    no: s.no,
    category: s.category,
    isPillar: s.isPillar,
    name: s.name,
    heroTitle: s.heroTitle,
    heroOutcome: s.heroOutcome,
    heroImage: s.heroImage,
    bestFor: s.bestFor,
    notSureText:
      "Not sure which scope fits your current stage? Request a 20-minute strategy review and we will audit your current setup before proposing anything.",
    problemTitle: s.problemTitle,
    problemPoints: s.problemPoints,
    includedTitle: `What ${s.name.toLowerCase()} includes`,
    subServices: s.subServices,
    processTitle: "First 30 days & execution rhythm",
    processSteps: s.processSteps,
    deliverablesTitle: "Engagement & pricing models",
    deliverablesScope: s.deliverablesScope,
    deliverablesStarting: s.retainer,
    pricingModels: defaultPricing(s.retainer, s.project),
    caseStudyMetric: s.metric,
    caseStudyQuote: s.quote,
    caseStudyAuthor: s.author,
    relatedWork: sharedWork,
    faqTitle: "The questions we get asked",
    faqs: s.faqs,
    relatedServices: s.relatedServices,
  };
}

const seeds: CompactServiceSeed[] = [
  // ==================== MARKETING & GROWTH ====================
  {
    slug: "digital-marketing",
    no: "01",
    category: "Marketing & Growth",
    isPillar: true,
    name: "Digital Marketing",
    heroTitle: "Digital marketing in California engineered to multiply revenue.",
    heroOutcome:
      "Full-funnel SEO, AI Search (GEO), Google & Meta Ads, content strategy, and conversion optimization working together inside one measurable revenue plan.",
    heroImage: "/images/services-agency-strategy.webp",
    bestFor: [
      "Growth-stage B2B & service companies",
      "E-commerce & DTC brands scaling ROAS",
      "Multi-location California businesses",
    ],
    problemTitle: "Why disconnected marketing channels stall growth",
    problemPoints: [
      "Your paid ads, SEO, and website are managed by separate vendors with conflicting KPIs and zero shared attribution.",
      "Ad spend rises every quarter while landing-page conversion rates stay flat because nobody owns the full buyer journey.",
      "Monthly reports show impressions and clicks instead of qualified pipeline, booked calls, and real cost per acquisition.",
    ],
    subServices: [
      { title: "Search Engine Optimization (SEO)", desc: "Technical foundations, high-intent commercial pages, and authority building that compound organic demand." },
      { title: "Paid Search & Google Ads", desc: "Intent-segmented search, shopping, and Performance Max campaigns optimized strictly for revenue." },
      { title: "Paid Social (Meta, LinkedIn & TikTok)", desc: "Creative-led acquisition funnels with weekly hook testing and retargeting sequences." },
      { title: "AI Search Optimization (GEO)", desc: "Entity clarity, structured data, and answer-first pages so ChatGPT, Perplexity, and AI Overviews cite your brand." },
      { title: "Content & Editorial Strategy", desc: "Bottom-of-funnel comparisons, playbooks, and regional authority pages that convert buyers." },
      { title: "CRO & Attribution Analytics", desc: "Server-side tracking, CRM pipeline sync, and landing-page testing to lift return on every click." },
    ],
    processSteps: [
      { step: "01", title: "Discovery & Audit", desc: "Full audit of ad accounts, search visibility, analytics tracking, competitors, and conversion leaks.", duration: "Week 1" },
      { step: "02", title: "Channel Roadmap", desc: "Prioritized 90-day growth roadmap aligning budget split, messaging angles, and KPI baselines.", duration: "Week 2" },
      { step: "03", title: "Infrastructure & Launch", desc: "Clean conversion tracking, high-speed landing pages, and structured campaign rollout.", duration: "Week 3–4" },
      { step: "04", title: "Scale & Compound", desc: "Weekly creative iteration, bid refinement, SEO publishing, and executive revenue reporting.", duration: "Ongoing" },
    ],
    deliverablesScope:
      "Dedicated growth strategist, paid media management, technical & content SEO, conversion tracking, and transparent live KPI reporting.",
    retainer: "From $3,500 / mo",
    project: "From $4,500",
    metric: "3.8x qualified pipeline in 90 days",
    quote: "Katella Digital connected our Google Ads, Local SEO, and landing pages into one system — our cost per booked consultation dropped 44% in one quarter.",
    author: "VP of Growth — Apex Solar California",
    faqs: [
      { q: "How quickly can we see results from digital marketing?", a: "Paid search and paid social campaigns generate qualified leads within the first 2–4 weeks. SEO and AI Search (GEO) build compounding organic pipeline over 3–6 months." },
      { q: "Do we keep ownership of our ad accounts and analytics?", a: "Yes — 100%. Every Google Ads, Meta, GA4, and Search Console property stays owned by your business." },
      { q: "How do you report ROI?", a: "We track real business outcomes — qualified leads, booked consultations, cost per acquisition, and closed revenue — not vanity impressions." },
    ],
    relatedServices: ["seo", "google-ads", "ai-search-geo", "performance-marketing"],
  },
  {
    slug: "seo",
    no: "02",
    category: "Marketing & Growth",
    name: "SEO",
    heroTitle: "SEO agency in Anaheim built for commercial intent and revenue.",
    heroOutcome:
      "Ranking is the last step, not the first. We pair clean technical architecture, commercial topic clusters, and high-authority PR so organic search becomes your lowest-CAC acquisition channel.",
    heroImage: "/images/service-seo.webp",
    bestFor: [
      "B2B companies targeting high-value queries",
      "E-commerce catalogs scaling non-branded traffic",
      "Brands reducing dependence on paid ads",
    ],
    problemTitle: "Why most SEO retainers fail to move pipeline",
    problemPoints: [
      "Publishing generic top-of-funnel blog posts that bring clicks from people who will never buy.",
      "Bloated site architectures, duplicate templates, and slow mobile pages blocking crawl efficiency.",
      "Zero alignment between commercial service pages, internal links, and actual sales conversations.",
    ],
    subServices: [
      { title: "Technical SEO & Core Web Vitals", desc: "Crawlability, static speed optimization, clean canonicals, sitemap hygiene, and index governance." },
      { title: "Commercial Keyword Architecture", desc: "Mapping every buyer-intent query to dedicated high-converting service and solution pages." },
      { title: "On-Page & Semantic Optimization", desc: "Answer-first copy, clear heading hierarchy, and rich JSON-LD structured data." },
      { title: "Authority & Digital PR", desc: "Earning relevant editorial citations and brand mentions that lift domain trust." },
    ],
    processSteps: [
      { step: "01", title: "Technical & Intent Audit", desc: "Deep crawl, log analysis, competitor gap audit, and revenue-keyword prioritization.", duration: "Week 1–2" },
      { step: "02", title: "Architecture & Fixes", desc: "Resolve technical blockers, upgrade core landing pages, and deploy full JSON-LD schema.", duration: "Week 3–4" },
      { step: "03", title: "Content & Internal Links", desc: "Ship authoritative pillar pages, comparison guides, and tight internal link networks.", duration: "Month 2–3" },
      { step: "04", title: "Authority & Compounding", desc: "Digital PR, snippet optimization, and monthly pipeline attribution tracking.", duration: "Ongoing" },
    ],
    deliverablesScope:
      "Technical SEO management, commercial page creation, schema architecture, link authority building, and monthly search-to-lead reporting.",
    retainer: "From $2,500 / mo",
    project: "From $3,500",
    metric: "+210% organic qualified leads",
    quote: "Instead of fluff blog posts, Katella rebuilt our commercial service architecture — organic search is now our #1 source of sales calls.",
    author: "Founder — B2B Services Client, Orange County",
    faqs: [
      { q: "How long does SEO take to compound?", a: "Technical improvements and commercial page rewrites often show movement in 4–8 weeks, with compounding pipeline growth between months 3 and 6." },
      { q: "Does your SEO include AI Search (GEO)?", a: "Yes. Every SEO engagement includes structured data, entity consistency, and answer-first formatting designed for both Google and AI assistants." },
    ],
    relatedServices: ["local-seo", "ai-search-geo", "content-marketing", "digital-marketing"],
  },
  {
    slug: "local-seo",
    no: "03",
    category: "Marketing & Growth",
    name: "Local SEO",
    heroTitle: "Dominate Google Maps and local search across Orange County & California.",
    heroOutcome:
      "Capture high-intent local buyers searching 'near me' with optimized Google Business Profiles, city-specific landing pages, review velocity systems, and clean local citations.",
    heroImage: "/images/service-local-seo.webp",
    bestFor: [
      "Multi-location service businesses",
      "Healthcare, legal, home services & hospitality",
      "Orange County & Southern California brands",
    ],
    problemTitle: "Why local buyers pick competitors ranked in the top 3",
    problemPoints: [
      "Over 70% of local clicks go to the Google Map Pack — ranking #5 means you are effectively invisible.",
      "Inconsistent NAP citations, neglected Google Business Profiles, and weak review workflows hold back local trust.",
      "Generic location pages fail to convert mobile visitors looking to call or book immediately.",
    ],
    subServices: [
      { title: "Google Business Profile Optimization", desc: "Categories, services, media cadence, Q&A, and conversion tracking for every location." },
      { title: "City & Service-Area Landing Pages", desc: "Fast, locally relevant static pages built to rank across Anaheim, Irvine, LA, and surrounding cities." },
      { title: "Review Velocity & Reputation", desc: "Automated post-service review workflows that steadily grow 5-star social proof." },
      { title: "Local Schema & Citation Cleanup", desc: "Consistent LocalBusiness JSON-LD and directory authority across major US indexes." },
    ],
    processSteps: [
      { step: "01", title: "Local Grid Audit", desc: "Geo-grid rank mapping across every target zip code and competitor GBP benchmark.", duration: "Week 1" },
      { step: "02", title: "GBP & Citation Overhaul", desc: "Optimize profiles, fix NAP inconsistencies, and deploy LocalBusiness schema.", duration: "Week 2–3" },
      { step: "03", title: "City Pages & Reviews", desc: "Launch conversion-focused city pages and automated customer review flows.", duration: "Month 1–2" },
      { step: "04", title: "Track Calls & Bookings", desc: "Monthly geo-grid gains, call tracking, and direction/booking attribution.", duration: "Ongoing" },
    ],
    deliverablesScope:
      "GBP management, geo-grid tracking, city landing pages, review generation workflows, and call-tracked monthly reporting.",
    retainer: "From $1,800 / mo",
    project: "From $2,500",
    metric: "Top 3 Map Pack across 9 SoCal cities",
    quote: "Our phone calls from Google Maps more than tripled within 90 days of launching Katella's local SEO program.",
    author: "Operations Director — Regional Home Services Brand",
    faqs: [
      { q: "Can you manage Local SEO for multiple locations?", a: "Yes — we build scalable location page templates and manage multi-location Google Business Profiles with per-city call tracking." },
      { q: "Do you track actual phone calls from Google Maps?", a: "Yes, we set up UTM parameters and dynamic call tracking so you know exactly how many calls and bookings come from local search." },
    ],
    relatedServices: ["seo", "google-ads", "digital-marketing", "ai-search-geo"],
  },
  {
    slug: "google-ads",
    no: "04",
    category: "Marketing & Growth",
    name: "Google Ads",
    heroTitle: "Google Ads management focused on qualified leads — not wasted clicks.",
    heroOutcome:
      "Capture high-intent buyers the exact moment they search for your solution with tightly structured Search, Shopping, and YouTube campaigns paired with dedicated conversion landing pages.",
    heroImage: "/images/service-google-ads.webp",
    bestFor: [
      "Brands needing predictable lead flow fast",
      "High-ticket B2B & local service companies",
      "E-commerce brands scaling Google Shopping",
    ],
    problemTitle: "Where 40% of typical Google Ads budgets leak away",
    problemPoints: [
      "Broad-match keywords without aggressive negative lists burning budget on irrelevant searches.",
      "Sending paid clicks to slow generic homepages instead of message-matched landing pages.",
      "Optimizing bids for raw form fills instead of CRM-verified qualified opportunities and sales.",
    ],
    subServices: [
      { title: "High-Intent Search Campaigns", desc: "Exact and phrase-match architecture segmented by buyer intent and margin." },
      { title: "Shopping & Performance Max", desc: "Feed optimization, product segmentation, and ROAS guardrails for e-commerce." },
      { title: "Dedicated Landing Pages", desc: "Sub-second static landing pages tailored to each ad group to double conversion rates." },
      { title: "Offline Conversion & CRM Sync", desc: "Feeding closed-won CRM data back into Google Ads so bidding targets your best customers." },
    ],
    processSteps: [
      { step: "01", title: "Account & Waste Audit", desc: "Identify wasted search terms, broken conversion tags, and immediate CPA wins.", duration: "Week 1" },
      { step: "02", title: "Restructure & Tracking", desc: "Build clean campaign structure, server-side conversion tracking, and landing pages.", duration: "Week 2" },
      { step: "03", title: "Launch & Daily Tuning", desc: "Negative keyword mining, ad copy split-tests, and bid strategy calibration.", duration: "Week 3–4" },
      { step: "04", title: "Scale Winning Segments", desc: "Expand profitable keyword pockets while holding strict target CPA / ROAS.", duration: "Ongoing" },
    ],
    deliverablesScope:
      "Full Google Ads management, keyword & negative-list governance, ad copy testing, landing-page CRO, and live ROI dashboard.",
    retainer: "From $2,000 / mo",
    project: "From $2,500",
    metric: "-44% Cost Per Qualified Lead",
    quote: "They cut wasted ad spend in week one and nearly quadrupled our booked consultations with the same monthly budget.",
    author: "Marketing Director — Apex Solar California",
    faqs: [
      { q: "What monthly ad spend do you recommend starting with?", a: "Most clients see strong statistical learning starting between $3,000 and $10,000+ per month in ad spend, depending on industry CPCs." },
      { q: "Do you build landing pages for our Google Ads?", a: "Yes — dedicated high-speed landing pages are one of the fastest ways to lower CPA and boost Quality Score." },
    ],
    relatedServices: ["performance-marketing", "seo", "local-seo", "digital-marketing"],
  },
  {
    slug: "performance-marketing",
    no: "05",
    category: "Marketing & Growth",
    name: "Performance Marketing",
    heroTitle: "Performance marketing engineered around MER, CAC, and profitable scale.",
    heroOutcome:
      "Cross-channel paid acquisition across Google, Meta, LinkedIn, YouTube, and TikTok — powered by weekly creative testing sprints and rigorous revenue attribution.",
    heroImage: "/images/service-performance-marketing.webp",
    bestFor: [
      "DTC e-commerce scaling past $100k/mo",
      "B2B SaaS & enterprise lead generation",
      "Brands tired of agency media buyers who ignore creative",
    ],
    problemTitle: "Why media buying alone no longer beats the algorithm",
    problemPoints: [
      "Ad platforms automate targeting — your real competitive edge is creative velocity, offer clarity, and landing-page conversion.",
      "Ad fatigue silently erodes ROAS when campaigns run the same creative for months.",
      "Platform-reported ROAS overcounts conversions unless validated against true blended MER and CRM revenue.",
    ],
    subServices: [
      { title: "Multi-Channel Media Buying", desc: "Unified budget allocation across Meta, Google, LinkedIn, YouTube, and TikTok." },
      { title: "Weekly Creative Testing Sprints", desc: "Structured testing of hooks, formats, UGC, static graphics, and motion ads." },
      { title: "Funnel & Offer CRO", desc: "Landing pages, lead magnets, quiz funnels, and checkout optimization." },
      { title: "Blended MER & Attribution", desc: "Clear weekly scorecards linking spend to net revenue and payback period." },
    ],
    processSteps: [
      { step: "01", title: "Unit Economics & Audit", desc: "Model target CAC, LTV, and contribution margin before touching ad spend.", duration: "Week 1" },
      { step: "02", title: "Creative & Funnel Sprint", desc: "Produce initial test matrix of hooks, visuals, and matched landing pages.", duration: "Week 2–3" },
      { step: "03", title: "Structured Launch", desc: "Isolate winning creatives, audiences, and offers with disciplined spend caps.", duration: "Week 4" },
      { step: "04", title: "Scale Winners Weekly", desc: "Graduate winners to scaling campaigns and ship fresh creative variations every 2 weeks.", duration: "Ongoing" },
    ],
    deliverablesScope:
      "Cross-channel paid acquisition, bi-weekly performance creative production, conversion landing pages, and executive MER reporting.",
    retainer: "From $3,500 / mo",
    project: "From $4,500",
    metric: "4.2x Blended ROAS at Scale",
    quote: "Combining creative production and media buying under one roof finally unlocked profitable scale for our Meta and Google spend.",
    author: "Head of E-commerce — California DTC Brand",
    faqs: [
      { q: "Do you produce the ad creative too?", a: "Yes. Performance marketing without creative iteration fails — our designers and motion team produce fresh ad variations every sprint." },
      { q: "How do you measure cross-channel performance?", a: "We combine platform CAPI/enhanced conversions with GA4, CRM attribution, and blended Marketing Efficiency Ratio (MER)." },
    ],
    relatedServices: ["google-ads", "advertising-campaigns", "social-media-management", "digital-marketing"],
  },
  {
    slug: "content-marketing",
    no: "06",
    category: "Marketing & Growth",
    name: "Content Marketing",
    heroTitle: "Content marketing that earns authority, ranks in search, and closes deals.",
    heroOutcome:
      "Editorial strategy, bottom-of-funnel buyer guides, case studies, and thought leadership crafted for both human decision-makers and AI answer engines.",
    heroImage: "/images/service-content-marketing.webp",
    bestFor: [
      "B2B teams with considered sales cycles",
      "Brands building organic authority & trust",
      "Companies feeding SEO, email, and LinkedIn from one engine",
    ],
    problemTitle: "Why generic AI-spun blog content hurts your brand",
    problemPoints: [
      "Surface-level articles repeat what everyone else says and fail to earn rankings, backlinks, or buyer trust.",
      "Sales teams lack sharp case studies, comparison guides, and proof assets to move prospects over the line.",
      "Content sits isolated on a blog instead of powering email nurture, LinkedIn distribution, and AI search citations.",
    ],
    subServices: [
      { title: "Editorial & Topic Cluster Strategy", desc: "Mapping buyer questions across awareness, evaluation, and decision stages." },
      { title: "SEO & GEO Long-Form Articles", desc: "Research-backed, answer-first guides engineered to rank in Google and AI overviews." },
      { title: "Case Studies & Sales Enablement", desc: "Proof-driven customer stories and comparison pages that shorten sales cycles." },
      { title: "Multi-Channel Repurposing", desc: "Turning each pillar piece into LinkedIn threads, email newsletters, and short-form scripts." },
    ],
    processSteps: [
      { step: "01", title: "Voice & Topic Audit", desc: "Interview your subject-matter experts and map high-intent content gaps.", duration: "Week 1–2" },
      { step: "02", title: "90-Day Editorial Calendar", desc: "Prioritize high-converting topics balanced across SEO, GEO, and sales enablement.", duration: "Week 3" },
      { step: "03", title: "Produce & Publish", desc: "Research, write, design custom visuals, optimize schema, and publish cleanly.", duration: "Monthly" },
      { step: "04", title: "Distribute & Measure", desc: "Repurpose across social/email and track assisted conversions and search growth.", duration: "Ongoing" },
    ],
    deliverablesScope:
      "Editorial roadmap, 4–8 deeply researched articles/case studies per month, visual formatting, internal linking, and distribution kits.",
    retainer: "From $2,500 / mo",
    project: "From $3,000",
    metric: "3.1x organic assisted pipeline",
    quote: "Prospects now mention our guides on discovery calls before we even pitch — it completely changed our close rate.",
    author: "CEO — B2B Advisory Firm, Irvine",
    faqs: [
      { q: "How do you capture our industry expertise without wasting our time?", a: "We run one focused 30-minute SME interview per month and turn those insights into authoritative articles, case studies, and social posts." },
      { q: "Is the content optimized for AI search too?", a: "Yes — every piece uses clean semantic headings, direct answer summaries, and structured Article/FAQ schema." },
    ],
    relatedServices: ["seo", "ai-search-geo", "social-media-management", "digital-marketing"],
  },
  {
    slug: "ai-search-geo",
    no: "07",
    category: "Marketing & Growth",
    name: "AI Search (GEO)",
    heroTitle: "Generative Engine Optimization (GEO) so AI assistants recommend your brand.",
    heroOutcome:
      "Make your business the cited answer across ChatGPT, Perplexity, Claude, and Google AI Overviews through entity engineering, structured knowledge graphs, and answer-first content.",
    heroImage: "/images/service-ai-search-geo.webp",
    bestFor: [
      "Forward-thinking B2B & regional market leaders",
      "Brands noticing clicks shifting to AI summaries",
      "Companies competing in high-value advisory & service niches",
    ],
    problemTitle: "Why strong Google rankings don't guarantee AI citations",
    problemPoints: [
      "AI engines synthesize recommendations from clear entities, structured data, and third-party corroboration — not keyword density.",
      "Misconfigured robots rules, client-side JS rendering, or vague marketing copy make sites unreadable to AI crawlers.",
      "Competitors with clearer proof points and FAQ structures are being recommended by ChatGPT while better businesses are omitted.",
    ],
    subServices: [
      { title: "AI Visibility & Prompt Benchmarking", desc: "Baseline tracking across ChatGPT, Perplexity, Claude, and Google AI Overviews for core buyer prompts." },
      { title: "Entity & Knowledge Graph Schema", desc: "Connected Organization, Service, FAQPage, and Article JSON-LD graphs across every page." },
      { title: "AI Crawler & Technical Readiness", desc: "Static HTML rendering, clean semantic markup, robots governance, and fast edge delivery." },
      { title: "Answer-First Content & Digital PR", desc: "Structuring pages and third-party citations so LLMs confidently quote and recommend you." },
    ],
    processSteps: [
      { step: "01", title: "AI Prompt Audit", desc: "Test 50+ real commercial prompts to benchmark current citations vs. top competitors.", duration: "Week 1" },
      { step: "02", title: "Entity & Schema Build", desc: "Align brand entity signals and deploy interconnected JSON-LD across core pages.", duration: "Week 2–3" },
      { step: "03", title: "Answer Architecture", desc: "Upgrade service, pricing, and comparison pages into clear, citable buyer answers.", duration: "Month 1–2" },
      { step: "04", title: "Citation Growth & Tracking", desc: "Monthly AI visibility scorecards and authoritative third-party brand mentions.", duration: "Ongoing" },
    ],
    deliverablesScope:
      "AI visibility benchmarking, technical crawler readiness, complete JSON-LD graph, answer-first content rewrites, and monthly citation tracking.",
    retainer: "From $2,500 / mo",
    project: "From $3,500",
    metric: "4.6x increase in AI answer citations",
    quote: "Within two months of Katella's GEO overhaul, prospects started telling us ChatGPT recommended us as the top agency in our category.",
    author: "Managing Partner — California Professional Services Firm",
    faqs: [
      { q: "How is GEO different from traditional SEO?", a: "SEO focuses on ranking links in search results; GEO focuses on making your brand clearly understood, trusted, and cited inside synthesized AI answers — the two reinforce each other." },
      { q: "Can you measure AI search traffic and citations?", a: "Yes. We track both direct AI referral traffic (ChatGPT, Perplexity, Gemini) and monthly citation share across your priority commercial prompts." },
    ],
    relatedServices: ["seo", "content-marketing", "digital-marketing", "web-app-dev"],
  },
  {
    slug: "social-media-management",
    no: "08",
    category: "Marketing & Growth",
    name: "Social Media Management",
    heroTitle: "Social media management that builds real audience demand and bookings.",
    heroOutcome:
      "Cohesive visual feeds, vertical short-form video, active community management, and paid social amplification across Instagram, LinkedIn, TikTok, and YouTube Shorts.",
    heroImage: "/images/service-social-media.webp",
    bestFor: [
      "Hospitality, retail, lifestyle & consumer brands",
      "Founders & B2B teams growing LinkedIn authority",
      "Businesses needing consistent agency-grade creative every month",
    ],
    problemTitle: "Why inconsistent posting fails to move the needle",
    problemPoints: [
      "Random stock graphics and off-brand templates make premium businesses look generic.",
      "Without short-form video hooks and paid amplification, organic reach stalls at a tiny fraction of followers.",
      "Posting without clear conversion paths turns social into a time sink with no measurable pipeline.",
    ],
    subServices: [
      { title: "Monthly Content & Editorial Calendar", desc: "Planned campaigns aligned with launches, seasonal demand, and brand pillars." },
      { title: "Short-Form Reels & Carousel Design", desc: "Scroll-stopping vertical video edits and cohesive dark/crimson or brand-native graphics." },
      { title: "Community & DM Engagement", desc: "Active comment responses, creator coordination, and lead routing from inbound DMs." },
      { title: "Paid Social Boost & Reporting", desc: "Putting smart media spend behind top organic performers with clear monthly metrics." },
    ],
    processSteps: [
      { step: "01", title: "Channel & Visual Audit", desc: "Define content pillars, visual templates, tone of voice, and competitor positioning.", duration: "Week 1" },
      { step: "02", title: "Monthly Content Batch", desc: "Script, design, and edit the full month's reels, carousels, and captions for approval.", duration: "Week 2" },
      { step: "03", title: "Publish & Engage", desc: "Consistent scheduling, community management, and targeted paid amplification.", duration: "Weekly" },
      { step: "04", title: "Analyze & Iterate", desc: "Double down on top-retention hooks and highest-converting formats each month.", duration: "Monthly" },
    ],
    deliverablesScope:
      "12–20 custom posts/reels per month, platform copywriting, visual templates, community management, and monthly growth insights.",
    retainer: "From $2,200 / mo",
    project: "From $2,800",
    metric: "2.4M regional impressions in 6 weeks",
    quote: "Our Instagram and TikTok finally look like a flagship hospitality brand — and drove 62% of our opening-quarter reservations.",
    author: "Founder — Vela Hospitality Group",
    faqs: [
      { q: "Do we approve posts before they go live?", a: "Always. You review and approve the full content calendar ahead of time with easy feedback rounds." },
      { q: "Which platforms do you manage?", a: "Instagram, LinkedIn, TikTok, Facebook, X, and YouTube Shorts — focused strictly on where your buyers spend time." },
    ],
    relatedServices: ["motion-graphics", "advertising-campaigns", "brand-identity", "digital-marketing"],
  },

  // ==================== BRAND & CREATIVE ====================
  {
    slug: "brand-strategy-identity",
    no: "09",
    category: "Brand & Creative",
    isPillar: true,
    name: "Brand Strategy & Identity",
    heroTitle: "Brand strategy & visual identity built to command premium market position.",
    heroOutcome:
      "We define your positioning, voice, logo system, color language, and design guidelines so every ad, website, and pitch deck looks unmistakably category-leading.",
    heroImage: "/images/service-brand-strategy-identity.webp",
    bestFor: [
      "New ventures launching with ambition",
      "Established companies outgrowing an outdated look",
      "Brands preparing for scale, funding, or expansion",
    ],
    problemTitle: "The hidden tax of a forgettable brand",
    problemPoints: [
      "When you look like every other competitor in your market, buyers default to comparing you on price alone.",
      "Disconnected visuals across ads, social media, and your website create subtle friction that lowers conversion rates.",
      "Without a documented brand system, every new campaign or hire drifts further off-brand.",
    ],
    subServices: [
      { title: "Brand Positioning & Strategy", desc: "Audience definition, competitive whitespace, messaging pillars, and value proposition." },
      { title: "Logo & Mark Architecture", desc: "Primary wordmark, icon mark, responsive lockups, and clear-space specifications." },
      { title: "Color, Type & Visual Language", desc: "Digital-first color systems, typography hierarchy, and art-direction rules." },
      { title: "Comprehensive Brand Guidelines", desc: "Actionable brand book + Figma templates for web, social, decks, and print." },
    ],
    processSteps: [
      { step: "01", title: "Discovery Workshop", desc: "Deep-dive stakeholder interviews, competitor audit, and positioning territory mapping.", duration: "Week 1" },
      { step: "02", title: "Strategy & Direction", desc: "Lock messaging narrative, brand personality, and curated visual moodboards.", duration: "Week 2" },
      { step: "03", title: "Identity Design", desc: "Craft logo suite, typography, color tokens, and real-world digital & social mockups.", duration: "Week 3–4" },
      { step: "04", title: "Brand Book & Handoff", desc: "Deliver complete vector files, Figma design kit, and usage guidelines.", duration: "Week 5" },
    ],
    deliverablesScope:
      "Brand strategy deck, complete logo suite, color & typography system, social & deck templates, and full vector/Figma brand guidelines.",
    retainer: "From $3,000 / mo",
    project: "From $6,500",
    metric: "+41% landing page conversion post-rebrand",
    quote: "The new identity immediately elevated how enterprise prospects perceived us — our average contract value jumped in the very first quarter.",
    author: "Co-Founder — California SaaS Company",
    faqs: [
      { q: "Do we receive full editable source files?", a: "Yes — Figma libraries, SVG/EPS/PDF vector logos, font licensing links, and ready-to-use social templates." },
      { q: "Can you roll the new brand directly into our website and ads?", a: "Yes! Because strategy, branding, web, and marketing sit under one roof, your new identity launches consistently everywhere." },
    ],
    relatedServices: ["brand-strategy", "brand-identity", "logo-design", "ui-ux"],
  },
  {
    slug: "brand-strategy",
    no: "10",
    category: "Brand & Creative",
    name: "Brand Strategy",
    heroTitle: "Sharp positioning and messaging before a single pixel is designed.",
    heroOutcome:
      "Clarify who you serve, why you win, and how you speak — creating a strategic north star that aligns leadership, marketing campaigns, and sales conversations.",
    heroImage: "/images/service-brand-strategy.webp",
    bestFor: [
      "Companies entering new markets or verticals",
      "Teams struggling to articulate their differentiation",
      "Founders preparing for a full rebrand or website rebuild",
    ],
    problemTitle: "Why visual redesigns fail without strategy underneath",
    problemPoints: [
      "A pretty new coat of paint cannot fix vague headlines or an undifferentiated offer.",
      "Sales and marketing teams use different language to describe what the company actually does.",
      "Paid campaigns underperform because core buyer objections and value hooks were never sharpened.",
    ],
    subServices: [
      { title: "Competitive Whitespace Audit", desc: "Mapping how competitors position themselves so you own an unoccupied angle." },
      { title: "ICP & Buyer Messaging Matrix", desc: "Pain points, decision triggers, proof points, and objections for every buyer persona." },
      { title: "Brand Narrative & Taglines", desc: "Homepage headline systems, elevator pitches, and tone-of-voice playbooks." },
      { title: "Offer & Architecture Clarity", desc: "Structuring service tiers and product lines so buyers choose quickly." },
    ],
    processSteps: [
      { step: "01", title: "Stakeholder & Customer Research", desc: "Audit current messaging, sales calls, and top 8 market competitors.", duration: "Week 1" },
      { step: "02", title: "Positioning Architecture", desc: "Draft sharp positioning statements, pillars, and differentiation narrative.", duration: "Week 2" },
      { step: "03", title: "Messaging Playbook", desc: "Deliver homepage copy frameworks, ad hooks, and tone-of-voice guide.", duration: "Week 3" },
    ],
    deliverablesScope:
      "Positioning blueprint, competitor matrix, buyer persona messaging guide, voice guidelines, and homepage/campaign copy frameworks.",
    retainer: "Advisory from $2,000 / mo",
    project: "From $4,000",
    metric: "2.3x higher sales call conversion",
    quote: "Our entire team finally describes what we do in one crisp sentence — and prospects immediately get why we are different.",
    author: "CEO — B2B Tech Firm, Orange County",
    faqs: [
      { q: "Can we do Brand Strategy standalone before redesigning our site?", a: "Absolutely — many clients start with a 3-week Brand Strategy sprint that then feeds directly into their website and ad campaigns." },
    ],
    relatedServices: ["brand-strategy-identity", "brand-identity", "content-marketing", "digital-marketing"],
  },
  {
    slug: "brand-identity",
    no: "11",
    category: "Brand & Creative",
    name: "Brand Identity",
    heroTitle: "Cohesive visual identity systems built for digital-first brands.",
    heroOutcome:
      "Beyond a logo — complete color architecture, typography scales, motion cues, and component templates engineered to shine across web, social, and ad creative.",
    heroImage: "/images/service-brand-identity.webp",
    bestFor: [
      "Digital-first brands scaling across web & social",
      "Companies unifying fragmented marketing collateral",
      "High-growth startups needing an agency-grade design system",
    ],
    problemTitle: "Why logo-only branding breaks down in the real world",
    problemPoints: [
      "A standalone logo file leaves teams guessing on colors, fonts, layouts, and social graphics.",
      "Inconsistent visual polish weakens trust right when high-value buyers evaluate your brand.",
    ],
    subServices: [
      { title: "Visual Language & Color Tokens", desc: "Accessible dark/light palettes, gradient systems, and contrast rules built for screens." },
      { title: "Typography & Grid Systems", desc: "Editorial display/body pairings and responsive layout proportions." },
      { title: "Social & Campaign Kits", desc: "Ready-to-ship Figma templates for Instagram, LinkedIn, ads, and pitch decks." },
      { title: "Digital Brand Book", desc: "Clear do's and don'ts any designer or marketer can execute immediately." },
    ],
    processSteps: [
      { step: "01", title: "Creative Direction", desc: "Explore distinct visual territories aligned to your brand strategy.", duration: "Week 1" },
      { step: "02", title: "Core Identity Build", desc: "Design complete typography, color, imagery, and graphic system.", duration: "Week 2–3" },
      { step: "03", title: "Real-World Applications", desc: "Stress-test across web hero, social cards, ad creatives, and decks.", duration: "Week 4" },
    ],
    deliverablesScope:
      "Complete visual identity system, Figma design tokens, social & presentation kits, and digital brand guidelines.",
    retainer: "Design support from $2,500 / mo",
    project: "From $5,000",
    metric: "100% visual consistency across 6+ channels",
    quote: "Every ad, pitch deck, and web page now feels unmistakably ours — our team ships creative twice as fast.",
    author: "Marketing Lead — Consumer Lifestyle Brand",
    faqs: [
      { q: "Will the identity work for both digital and print?", a: "Yes — we deliver exact HEX/RGB/HSL digital tokens alongside CMYK and Pantone print specifications." },
    ],
    relatedServices: ["brand-strategy-identity", "logo-design", "ui-ux", "social-media-management"],
  },
  {
    slug: "logo-design",
    no: "12",
    category: "Brand & Creative",
    name: "Logo Design",
    heroTitle: "Timeless, scalable logo marks engineered to work from favicon to billboard.",
    heroOutcome:
      "Clean geometric precision and conceptual clarity — responsive logo lockups designed to remain sharp at 16px app icons and commanding at full campaign scale.",
    heroImage: "/images/service-logo-design.webp",
    bestFor: [
      "New businesses launching their first flagship mark",
      "Established brands modernizing a dated legacy logo",
      "Product lines and sub-brands needing clean lockups",
    ],
    problemTitle: "Why crowded, trendy logos age poorly",
    problemPoints: [
      "Overly detailed marks turn muddy on mobile screens, social avatars, and embroidered merch.",
      "Template logos look generic and can create trademark headaches as you grow.",
    ],
    subServices: [
      { title: "Primary Wordmark & Symbol", desc: "Original vector concepts crafted from scratch — never recycled templates." },
      { title: "Responsive Lockups", desc: "Horizontal, stacked, icon-only, and social avatar variations." },
      { title: "Monochrome & Dark/Light Modes", desc: "Engineered for high contrast on both dark and light backgrounds." },
      { title: "Production File Package", desc: "SVG, EPS, PDF, and high-res PNG exports with clear-space rules." },
    ],
    processSteps: [
      { step: "01", title: "Brief & Visual Research", desc: "Clarify industry cues, brand personality, and competitive marks to avoid.", duration: "Week 1" },
      { step: "02", title: "Concept Presentations", desc: "Review 3 distinct, thoughtfully presented logo directions in real context.", duration: "Week 2" },
      { step: "03", title: "Refinement & Master Files", desc: "Optical kerning polish, lockup suite, and full vector handoff.", duration: "Week 3" },
    ],
    deliverablesScope:
      "3 original concepts, 2 refinement rounds, responsive logo suite, color & monochrome versions, and complete vector files.",
    retainer: "N/A — Fixed Project",
    project: "From $2,200",
    metric: "100% original trademark-ready marks",
    quote: "Clean, sharp, and immediately memorable — it looks incredible on our site, app icon, and trade show booth.",
    author: "Founder — Orange County Startup",
    faqs: [
      { q: "How many concepts and revisions are included?", a: "We present 3 distinct strategic directions followed by 2 dedicated refinement rounds to perfect the chosen mark." },
    ],
    relatedServices: ["brand-identity", "brand-strategy-identity", "motion-graphics", "ui-ux"],
  },
  {
    slug: "motion-graphics",
    no: "13",
    category: "Brand & Creative",
    name: "Motion Graphics",
    heroTitle: "Motion graphics and animated ad creative built to stop the scroll.",
    heroOutcome:
      "Product explainers, animated brand systems, kinetic typography, and high-converting motion ads delivered in vertical, square, and widescreen formats.",
    heroImage: "/images/service-motion-graphics.webp",
    bestFor: [
      "Paid social teams needing scroll-stopping video ads",
      "SaaS & tech products explaining complex features simply",
      "Brands launching new campaigns or identities",
    ],
    problemTitle: "Why static graphics lose attention in modern feeds",
    problemPoints: [
      "Viewers decide within 2 seconds whether to keep scrolling — weak openings kill ad performance.",
      "Poorly paced animations fail to communicate the core offer before viewers drop off.",
    ],
    subServices: [
      { title: "Performance Motion Ads", desc: "Hook-tested animated ad sets built specifically for Meta, TikTok, and YouTube." },
      { title: "Product & SaaS Explainers", desc: "60–90 second animated walkthroughs that turn complex software into clear value." },
      { title: "Brand Motion Systems", desc: "Logo stings, lower thirds, and kinetic type systems for consistent video branding." },
      { title: "3D Product Visuals", desc: "Photorealistic 3D renders and animated product reveals without studio logistics." },
    ],
    processSteps: [
      { step: "01", title: "Script & Hook Strategy", desc: "Write tight scripts designed to hook in 3 seconds and drive a clear CTA.", duration: "Week 1" },
      { step: "02", title: "Storyboard & Styleframes", desc: "Approve visual frames aligned to your brand palette before animation begins.", duration: "Week 2" },
      { step: "03", title: "Animate & Sound Design", desc: "Smooth motion design, transitions, and licensed audio mix.", duration: "Week 3" },
      { step: "04", title: "Multi-Format Delivery", desc: "Export 9:16, 1:1, and 16:9 masters ready for immediate campaign launch.", duration: "Week 4" },
    ],
    deliverablesScope:
      "Script, styleframes, full animation, sound design, 2 revision rounds, and multi-aspect ratio delivery.",
    retainer: "From $3,000 / mo",
    project: "From $3,500",
    metric: "3x higher thumb-stop & CTR on paid social",
    quote: "Our animated product ads outperformed every static creative we had run all year by nearly 3x.",
    author: "Growth Lead — Pulse Fintech",
    faqs: [
      { q: "Do you deliver multiple aspect ratios for different platforms?", a: "Yes — every package includes horizontal (16:9), square (1:1), and vertical (9:16) cuts." },
    ],
    relatedServices: ["video-production", "social-media-management", "advertising-campaigns", "brand-identity"],
  },

  // ==================== WEB & APPS ====================
  {
    slug: "web-app-dev",
    no: "14",
    category: "Web & Apps",
    isPillar: true,
    name: "Web & App Development",
    heroTitle: "Sub-second websites and digital products engineered to convert.",
    heroOutcome:
      "Modern Next.js static & hybrid websites, e-commerce storefronts, and custom web applications designed for Core Web Vitals, SEO/GEO dominance, and measurable lead conversion.",
    heroImage: "/images/service-web-app-dev.webp",
    bestFor: [
      "Brands replacing slow, bloated WordPress sites",
      "High-growth companies building SEO & conversion engines",
      "Teams launching custom web portals or e-commerce stores",
    ],
    problemTitle: "How a slow website quietly drains every marketing dollar",
    problemPoints: [
      "Every extra second of mobile load time slashes conversion rates and inflates your Google & Meta CPA.",
      "Bloated page builders break Core Web Vitals, fail accessibility checks, and limit technical SEO.",
      "Fragile plugins create security vulnerabilities and constant maintenance bills.",
    ],
    subServices: [
      { title: "Static & Edge-First Marketing Sites", desc: "Next.js SSG websites deployed on Vercel Edge CDN for instant loads and near-zero hosting cost." },
      { title: "Conversion Architecture & UX", desc: "Clear buyer journeys, responsive mobile flows, and frictionless inquiry systems." },
      { title: "E-commerce & Headless Stores", desc: "Shopify, headless storefronts, and checkout optimization built to lift AOV and CVR." },
      { title: "Custom Web & Mobile Apps", desc: "React, TypeScript, and scalable API integrations tailored to your operations." },
    ],
    processSteps: [
      { step: "01", title: "Architecture & Sitemap", desc: "Define SEO URL hierarchy, conversion flows, and technical stack.", duration: "Week 1" },
      { step: "02", title: "UI/UX Design System", desc: "Interactive prototypes and responsive desktop/mobile design tokens.", duration: "Week 2–3" },
      { step: "03", title: "Engineering & SEO Build", desc: "Clean TypeScript/Next.js build, WebP optimization, JSON-LD, and analytics.", duration: "Week 4–6" },
      { step: "04", title: "QA & Edge Launch", desc: "Lighthouse 95+ audit, redirect mapping, and zero-downtime deployment.", duration: "Week 7" },
    ],
    deliverablesScope:
      "Custom responsive design, Next.js/TypeScript codebase, technical SEO & schema, WebP asset pipeline, and full GitHub/Vercel ownership.",
    retainer: "Support from $1,500 / mo",
    project: "From $6,000",
    metric: "98+ Lighthouse Performance · +52% leads",
    quote: "Moving off our slow legacy site to Katella's static Next.js architecture lifted mobile conversions by 52% in the first month.",
    author: "Director of Digital — Orange County Enterprise Client",
    faqs: [
      { q: "Will we own the code and hosting accounts?", a: "100%. All code lives in your GitHub repository and deploys cleanly to your Vercel or preferred cloud account." },
      { q: "Can you migrate our SEO rankings without traffic loss?", a: "Yes — we map every legacy URL with clean 301 redirects and preserve or upgrade all metadata and structured data." },
    ],
    relatedServices: ["ui-ux", "ecommerce-development", "web-applications", "seo"],
  },
  {
    slug: "ui-ux",
    no: "15",
    category: "Web & Apps",
    name: "UI/UX Design",
    heroTitle: "Interfaces that feel effortless — and guide visitors straight to action.",
    heroOutcome:
      "Research-backed UX wireframes, conversion-focused landing pages, and scalable Figma design systems built for modern web and mobile products.",
    heroImage: "/images/service-ui-ux.webp",
    bestFor: [
      "Websites with high traffic but weak conversion rates",
      "SaaS products simplifying complex onboarding & workflows",
      "Engineering teams needing a clean, developer-ready Figma system",
    ],
    problemTitle: "Why confusing interfaces kill conversion silently",
    problemPoints: [
      "Cluttered layouts, weak hierarchy, and unclear calls to action force buyers to work too hard to understand your offer.",
      "Designers hand off disconnected mockups that break across mobile viewports and slow down developers.",
    ],
    subServices: [
      { title: "UX Audits & Conversion Mapping", desc: "Pinpointing drop-off friction across mobile and desktop user flows." },
      { title: "Wireframing & Interactive Prototypes", desc: "Clickable Figma prototypes validated with stakeholders before code begins." },
      { title: "Visual UI & Design Systems", desc: "Reusable components, tokens, states, and responsive breakpoints." },
      { title: "CRO Landing Page Design", desc: "High-clarity campaign pages crafted to maximize paid media ROI." },
    ],
    processSteps: [
      { step: "01", title: "UX Discovery & Audit", desc: "Analyze funnel data, user recordings, and core buyer tasks.", duration: "Week 1" },
      { step: "02", title: "Wireframes & Flow", desc: "Structure information hierarchy and frictionless conversion paths.", duration: "Week 2" },
      { step: "03", title: "High-Fidelity UI System", desc: "Craft polished responsive screens and component library in Figma.", duration: "Week 3–4" },
    ],
    deliverablesScope:
      "UX audit, interactive Figma prototypes, responsive desktop & mobile UI, and developer-ready design system.",
    retainer: "From $3,000 / mo",
    project: "From $4,500",
    metric: "+38% form completion rate",
    quote: "Their UX redesign removed three unnecessary steps from our quote funnel and immediately boosted booked demos.",
    author: "Product Lead — Southern California SaaS",
    faqs: [
      { q: "Do you work alongside our internal developers?", a: "Yes — we deliver clean, tokenized Figma files with clear specs or build the frontend directly with our engineers." },
    ],
    relatedServices: ["web-app-dev", "brand-identity", "ecommerce-development", "mobile-app-development"],
  },
  {
    slug: "ecommerce-development",
    no: "16",
    category: "Web & Apps",
    name: "E-commerce Development",
    heroTitle: "High-converting e-commerce storefronts built for speed and higher AOV.",
    heroOutcome:
      "Shopify, Shopify Plus, and headless Next.js commerce builds paired with merchandising UX, clean product feeds, and conversion optimization.",
    heroImage: "/images/service-ecommerce-dev.webp",
    bestFor: [
      "DTC brands scaling past $50k–$500k/mo",
      "Brands migrating from slow legacy themes",
      "Catalogs needing clean filtering, bundles & subscriptions",
    ],
    problemTitle: "Where e-commerce stores lose high-intent shoppers",
    problemPoints: [
      "Heavy third-party apps drag mobile page speed below 3 seconds, killing paid social ROAS.",
      "Cluttered product pages hide shipping clarity, reviews, and clear variant selection.",
    ],
    subServices: [
      { title: "Custom Shopify & Headless Builds", desc: "Lean, fast storefront themes engineered for mobile thumb-zone shopping." },
      { title: "PDP & Cart Conversion Optimization", desc: "Sticky add-to-cart, smart upsells, bundle builders, and trust micro-copy." },
      { title: "Catalog & Feed Architecture", desc: "Clean SKU taxonomy, Google Merchant feeds, and SEO collection pages." },
      { title: "Klaviyo & Retention Integration", desc: "Seamless abandoned-cart, post-purchase, and VIP email/SMS sync." },
    ],
    processSteps: [
      { step: "01", title: "Store & Funnel Audit", desc: "Benchmark mobile speed, PDP drop-off, cart abandonment, and AOV.", duration: "Week 1" },
      { step: "02", title: "Commerce UX Design", desc: "Design high-converting collection, product, and slide-cart flows.", duration: "Week 2–3" },
      { step: "03", title: "Build & Integrations", desc: "Develop lean storefront, payment flows, subscriptions, and analytics.", duration: "Week 4–6" },
      { step: "04", title: "Launch & CRO Sprints", desc: "QA across devices and iterate post-launch on conversion wins.", duration: "Week 7+" },
    ],
    deliverablesScope:
      "Custom storefront build, mobile speed optimization, PDP/cart CRO, analytics & pixel setup, and team training.",
    retainer: "CRO from $2,500 / mo",
    project: "From $7,500",
    metric: "+34% store conversion rate",
    quote: "Our mobile checkout speed doubled and conversion rate jumped 34% within 60 days of relaunch.",
    author: "Founder — Aurora Goods",
    faqs: [
      { q: "Do you build on Shopify or headless Next.js?", a: "Both — we recommend the architecture that maximizes your speed, flexibility, and lowest total operating cost." },
    ],
    relatedServices: ["web-app-dev", "performance-marketing", "ui-ux", "crm-automation"],
  },
  {
    slug: "web-applications",
    no: "17",
    category: "Web & Apps",
    name: "Web Applications",
    heroTitle: "Custom web applications, client portals, and interactive tools built to scale.",
    heroOutcome:
      "TypeScript, React, and Next.js engineering for SaaS dashboards, interactive calculators, booking platforms, and internal operational tools.",
    heroImage: "/images/service-web-apps.webp",
    bestFor: [
      "Businesses launching customer portals or booking engines",
      "Startups building MVPs with production-grade code",
      "Marketing teams building interactive ROI calculators & quote tools",
    ],
    problemTitle: "Why off-the-shelf SaaS tools hit ceilings fast",
    problemPoints: [
      "Patching five disconnected no-code tools creates brittle workflows and frustrating client experiences.",
      "Poorly architected apps accumulate technical debt that makes every new feature slow and expensive.",
    ],
    subServices: [
      { title: "Interactive Quote & ROI Calculators", desc: "Custom lead-generating web tools embedded directly into your marketing funnel." },
      { title: "Customer Portals & Dashboards", desc: "Secure, responsive client workspaces with clean role-based access." },
      { title: "API & CRM Integrations", desc: "Connecting Stripe, HubSpot, Salesforce, and custom data pipelines reliably." },
      { title: "Performance & Cloud Deployment", desc: "CI/CD, automated type safety, and scalable Vercel/cloud hosting." },
    ],
    processSteps: [
      { step: "01", title: "Technical Scoping", desc: "Define user flows, data model, API integrations, and milestone plan.", duration: "Week 1" },
      { step: "02", title: "UX Prototype", desc: "Validate every screen and edge case before engineering starts.", duration: "Week 2" },
      { step: "03", title: "Iterative Sprints", desc: "Weekly staging previews with automated checks and clean TypeScript code.", duration: "Week 3–6" },
      { step: "04", title: "Launch & Documentation", desc: "Production rollout, monitoring, and full repository handoff.", duration: "Week 7" },
    ],
    deliverablesScope:
      "Scoped architecture, full-stack TypeScript codebase, automated QA, deployment setup, and clean technical documentation.",
    retainer: "Engineering from $4,000 / mo",
    project: "From $9,000",
    metric: "60% faster quote-to-close workflow",
    quote: "The interactive estimator Katella built became our highest-converting lead asset within two weeks of launch.",
    author: "VP Operations — California Service Brand",
    faqs: [
      { q: "Can you integrate with our existing CRM or ERP?", a: "Yes — we build clean REST/webhook integrations with HubSpot, Salesforce, Stripe, and custom backends." },
    ],
    relatedServices: ["web-app-dev", "ui-ux", "mobile-app-development", "crm-automation"],
  },
  {
    slug: "mobile-app-development",
    no: "18",
    category: "Web & Apps",
    name: "Mobile App Development",
    heroTitle: "Polished iOS and Android apps built for retention and everyday speed.",
    heroOutcome:
      "Cross-platform React Native & modern mobile experiences designed with native-grade animations, intuitive UX, and seamless backend sync.",
    heroImage: "/images/service-mobile-apps.webp",
    bestFor: [
      "Consumer & hospitality loyalty apps",
      "Service businesses launching mobile booking experiences",
      "Startups shipping iOS and Android from one shared codebase",
    ],
    problemTitle: "Why most business mobile apps get uninstalled in week one",
    problemPoints: [
      "Clunky web-wrappers feel sluggish and frustrate users compared to modern native experiences.",
      "Building separate iOS and Android teams doubles cost and slows down every product release.",
    ],
    subServices: [
      { title: "Mobile UX & Prototyping", desc: "Gesture-friendly navigation and streamlined onboarding flows." },
      { title: "iOS & Android Engineering", desc: "Shared TypeScript/React Native codebase with native performance." },
      { title: "Push, Loyalty & Payments", desc: "Apple Pay, Google Pay, notifications, and real-time account sync." },
      { title: "App Store Launch & ASO", desc: "Submission compliance, store screenshots, and App Store Optimization." },
    ],
    processSteps: [
      { step: "01", title: "Product & Feature Scope", desc: "Prioritize v1 features around core user retention and business goals.", duration: "Week 1–2" },
      { step: "02", title: "Mobile UI/UX Design", desc: "Interactive mobile prototypes tested on real iOS and Android devices.", duration: "Week 3–4" },
      { step: "03", title: "Build & Beta Testing", desc: "Iterative TestFlight & Play Console beta releases.", duration: "Week 5–10" },
      { step: "04", title: "Store Release & Growth", desc: "App Store/Play Store approval plus acquisition & retention campaigns.", duration: "Week 11+" },
    ],
    deliverablesScope:
      "End-to-end mobile design, iOS & Android builds, backend integration, QA, and App Store/Google Play launch.",
    retainer: "Maintenance from $2,500 / mo",
    project: "From $15,000",
    metric: "4.8★ average store rating",
    quote: "From UX design to App Store launch, Katella shipped on schedule and our customers love how fast the app feels.",
    author: "Founder — Hospitality & Retail Group",
    faqs: [
      { q: "Do you handle App Store and Google Play submissions?", a: "Yes — we guide you through developer accounts, compliance reviews, store listings, and launch." },
    ],
    relatedServices: ["ui-ux", "web-applications", "web-app-dev", "advertising-campaigns"],
  },

  // ==================== CAMPAIGNS & SYSTEMS ====================
  {
    slug: "advertising-campaigns",
    no: "19",
    category: "Campaigns & Systems",
    isPillar: true,
    name: "Advertising Campaigns",
    heroTitle: "Integrated advertising campaigns engineered for breakout market reach.",
    heroOutcome:
      "From big-idea creative concepting and campaign production to multi-channel digital, connected TV, and regional media buying — built to move markets and drive revenue.",
    heroImage: "/images/service-advertising-campaigns.webp",
    bestFor: [
      "Major product, store, or brand launches",
      "Seasonal retail & hospitality promotions",
      "Regional California brands scaling market share",
    ],
    problemTitle: "Why fragmented campaigns fade into the background",
    problemPoints: [
      "Running disconnected ads with no unifying concept wastes impressions and fails to build brand memory.",
      "Without matched landing pages and retargeting sequences, awareness campaigns fail to capture demand.",
    ],
    subServices: [
      { title: "Campaign Concept & Big Idea", desc: "Distinctive creative territories, headlines, and visual hooks built to stand out." },
      { title: "Full-Channel Media Planning", desc: "Coordinated spend across YouTube, Meta, Google, LinkedIn, programmatic, and CTV." },
      { title: "Campaign Asset Production", desc: "Static, motion, video cutdowns, and dedicated campaign landing pages." },
      { title: "Live Optimization & Lift Reporting", desc: "Daily pacing, creative rotation, and clear campaign ROI wrap-up." },
    ],
    processSteps: [
      { step: "01", title: "Campaign Brief & Insight", desc: "Define campaign objective, audience segments, and target KPIs.", duration: "Week 1" },
      { step: "02", title: "Creative Concepting", desc: "Present unifying campaign concept, scripts, and visual mockups.", duration: "Week 2" },
      { step: "03", title: "Production & Funnel Build", desc: "Produce all media formats and build the dedicated campaign landing page.", duration: "Week 3–4" },
      { step: "04", title: "Launch, Optimize & Scale", desc: "Coordinated rollout with real-time creative and bid optimization.", duration: "Campaign Run" },
    ],
    deliverablesScope:
      "Campaign strategy, creative concept, multi-channel asset suite, landing page, media buying, and post-campaign ROI report.",
    retainer: "From $4,000 / mo",
    project: "From $6,500",
    metric: "1.8M+ targeted campaign reach",
    quote: "Katella unified our creative, landing page, and paid media into our most profitable launch campaign to date.",
    author: "CMO — Regional Consumer Brand",
    faqs: [
      { q: "Can you manage both creative production and media buying?", a: "Yes — owning both ensures the creative is engineered specifically for the channels and KPIs that matter." },
    ],
    relatedServices: ["performance-marketing", "motion-graphics", "video-production", "social-media-management"],
  },
  {
    slug: "video-production",
    no: "20",
    category: "Campaigns & Systems",
    name: "Video & Brand Production",
    heroTitle: "Commercial video and campaign storytelling built for modern screens.",
    heroOutcome:
      "Strategic brand films, customer testimonial documentaries, executive thought leadership, and paid-ready short-form video suites crafted to convert attention into trust.",
    heroImage: "/images/service-video-production.webp",
    bestFor: [
      "Brands elevating homepage & campaign storytelling",
      "B2B companies turning client wins into video case studies",
      "Launch campaigns needing hero films + social cutdowns",
    ],
    problemTitle: "Why expensive brand videos often sit unwatched",
    problemPoints: [
      "Production teams film pretty visuals without thinking about 3-second ad hooks, captions, or funnel placement.",
      "Shooting one 2-minute video without planning modular cutdowns leaves massive ROI on the table.",
    ],
    subServices: [
      { title: "Brand Story & Anthem Films", desc: "High-craft hero videos that establish instant credibility on your site and pitches." },
      { title: "Client Video Case Studies", desc: "Authentic customer proof stories that accelerate enterprise sales cycles." },
      { title: "Modular Paid Ad Suites", desc: "Multiple hooks and vertical/square cutdowns captured from one efficient production." },
      { title: "Post-Production & Color", desc: "Editorial pacing, motion graphics overlays, sound mix, and captioning." },
    ],
    processSteps: [
      { step: "01", title: "Strategy & Scripting", desc: "Map funnel placement, talking points, and modular hook variations.", duration: "Week 1" },
      { step: "02", title: "Pre-Production", desc: "Casting/interviews, shot lists, locations, and visual direction.", duration: "Week 2" },
      { step: "03", title: "Production & Edit", desc: "Capture clean footage and deliver hero cut plus social/ad variations.", duration: "Week 3–4" },
    ],
    deliverablesScope:
      "Creative treatment, scripting, production coordination, hero edit, and 6+ vertical/square paid & social cutdowns.",
    retainer: "Quarterly video sprints",
    project: "From $5,500",
    metric: "+64% landing page engagement time",
    quote: "One shoot gave us our homepage brand film plus 12 high-converting paid social ads we ran for months.",
    author: "Marketing Director — Orange County Brand",
    faqs: [
      { q: "Do we get vertical social cutdowns from the same production?", a: "Yes — we plan every shot list for both 16:9 widescreen and 9:16 vertical framing so you maximize every shoot." },
    ],
    relatedServices: ["motion-graphics", "advertising-campaigns", "social-media-management", "brand-strategy-identity"],
  },
  {
    slug: "crm-automation",
    no: "21",
    category: "Campaigns & Systems",
    name: "CRM & Marketing Automation",
    heroTitle: "CRM pipelines and lifecycle automation that turn leads into closed revenue.",
    heroOutcome:
      "Connect your website forms, ad platforms, HubSpot/CRM pipelines, and automated email/SMS follow-ups so zero qualified leads ever slip through the cracks.",
    heroImage: "/images/service-crm-automation.webp",
    bestFor: [
      "Sales teams losing leads due to slow manual follow-up",
      "Growing brands connecting marketing spend to closed CRM deals",
      "E-commerce & B2B teams scaling lifecycle email & SMS revenue",
    ],
    problemTitle: "Why lead generation fails without backend follow-up",
    problemPoints: [
      "Responding to an inbound lead in 24 hours instead of 5 minutes cuts conversion probability dramatically.",
      "Without clean CRM stages and UTM attribution, leadership cannot see which campaigns actually drive revenue.",
    ],
    subServices: [
      { title: "CRM Setup & Pipeline Hygiene", desc: "HubSpot, Pipedrive, or Salesforce pipelines configured around your real sales process." },
      { title: "Instant Lead Routing & Speed-to-Lead", desc: "Automated Slack/SMS alerts, calendar booking links, and instant confirmation emails." },
      { title: "Lifecycle Email & SMS Flows", desc: "Welcome series, nurture sequences, re-engagement, and post-purchase retention." },
      { title: "Closed-Loop Revenue Attribution", desc: "Syncing UTM parameters and deal values back to Google & Meta Ads." },
    ],
    processSteps: [
      { step: "01", title: "Funnel & CRM Audit", desc: "Map every lead source, handoff delay, and tracking gap.", duration: "Week 1" },
      { step: "02", title: "System Architecture", desc: "Configure pipelines, properties, UTM capture, and ad-platform integrations.", duration: "Week 2" },
      { step: "03", title: "Automation & Email Flows", desc: "Write, design, and launch core speed-to-lead and nurture workflows.", duration: "Week 3–4" },
      { step: "04", title: "Optimize & Report", desc: "Monitor reply rates, show rates, and closed-loop revenue attribution.", duration: "Ongoing" },
    ],
    deliverablesScope:
      "CRM pipeline configuration, form & ad attribution wiring, automated lead-response & nurture sequences, and team playbook.",
    retainer: "From $2,000 / mo",
    project: "From $3,800",
    metric: "+47% lead-to-booked-call rate",
    quote: "Instant automated follow-up and clean HubSpot attribution turned the exact same ad leads into 47% more booked calls.",
    author: "Sales Director — Southern California B2B Brand",
    faqs: [
      { q: "Which CRM and email platforms do you work with?", a: "HubSpot, Klaviyo, Brevo, Salesforce, Pipedrive, ActiveCampaign, and custom webhook integrations." },
    ],
    relatedServices: ["digital-marketing", "google-ads", "web-applications", "performance-marketing"],
  },
];

export const serviceDetails: ServiceDetail[] = seeds.map(buildService);

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug);
}
