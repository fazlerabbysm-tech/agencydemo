export interface SubService {
  title: string;
  desc: string;
  image: string;
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
}

export interface ServiceDetail {
  slug: string;
  no: string;
  name: string;
  heroTitle: string;
  heroOutcome: string;
  bestFor: string[];
  notSureText: string;
  problemTitle: string;
  problemPoints: string[];
  problemImage: string;
  includedTitle: string;
  subServices: SubService[];
  processTitle: string;
  processSteps: ProcessStep[];
  processImage: string;
  deliverablesTitle: string;
  deliverablesScope: string;
  deliverablesStarting: string;
  deliverablesImage: string;
  relatedWork: WorkCard[];
  caseStudyImage: string;
  caseStudyMetric: string;
  caseStudyQuote: string;
  caseStudyAuthor: string;
  faqTitle: string;
  faqs: FAQItem[];
  relatedServices: string[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "ecommerce",
    no: "01",
    name: "E-commerce Catalog Optimization",
    heroTitle: "Catalogs that sell themselves.",
    heroOutcome:
      "Studio-grade product imagery, listing architecture, and conversion-driven catalog systems. You get a catalog that loads fast, reads clean, and sells on every screen — from Amazon to your own storefront.",
    bestFor: ["D2C brands", "Marketplace sellers", "Mid-size e-commerce teams"],
    notSureText: "Not sure it fits? Talk to us",
    problemTitle: "Your catalog is leaking revenue",
    problemPoints: [
      "Product photos that look amateur next to your competitors",
      "Inconsistent lighting, backgrounds, and angles across SKUs",
      "Listings that take 5+ seconds to load on mobile",
      "Copy that describes features instead of selling outcomes",
      "No system — every new product shoot starts from scratch",
    ],
    problemImage:
      "/images/detail-ecommerce-problem.jpg",
    includedTitle: "What's included",
    subServices: [
      {
        title: "Product Photography",
        desc: "Studio-grade imagery on white, lifestyle, and detail shots — shot to a consistent style guide.",
        image: "/images/detail-ecommerce-sub-photo.jpg",
      },
      {
        title: "Listing Copywriting",
        desc: "Conversion-driven titles, bullets, and descriptions optimized for search and scroll.",
        image: "/images/detail-ecommerce-sub-copy.jpg",
      },
      {
        title: "Catalog Architecture",
        desc: "Category structure, navigation, and filtering that helps customers find and buy faster.",
        image: "/images/detail-ecommerce-sub-arch.jpg",
      },
      {
        title: "PIM & Asset Management",
        desc: "A single source of truth for every product image, spec, and description — synced everywhere.",
        image: "/images/detail-ecommerce-sub-pim.jpg",
      },
    ],
    processTitle: "How we work",
    processSteps: [
      { step: "01", title: "Audit", desc: "We review your top 50 SKUs — photography, copy, page speed, and conversion data.", duration: "Week 1" },
      { step: "02", title: "Shoot", desc: "In-studio or on-location photography using a locked style guide for consistency.", duration: "Week 2–3" },
      { step: "03", title: "Optimize", desc: "Retouch, compress, and write copy. We build the listing system your team can reuse.", duration: "Week 3–4" },
      { step: "04", title: "Deploy", desc: "Publish across your channels, train your team, and hand off the full asset library.", duration: "Week 5" },
    ],
    processImage: "/images/detail-ecommerce-process.jpg",
    deliverablesTitle: "Deliverables & scope",
    deliverablesScope:
      "Full catalog optimization for up to 100 SKUs: photography, retouching, listing copy, and a reusable style guide your team can follow for every future product.",
    deliverablesStarting: "Starting from $12,000",
    deliverablesImage: "/images/detail-ecommerce-deliverables.jpg",
    relatedWork: [
      { title: "Aurora Goods", cat: "500 SKUs · D2C skincare", image: "/images/detail-ecommerce-work-1.jpg" },
      { title: "Harbor Goods", cat: "320 SKUs · Home & living", image: "/images/detail-ecommerce-work-2.jpg" },
      { title: "Vanta Studio", cat: "180 SKUs · Fashion accessories", image: "/images/detail-ecommerce-work-3.jpg" },
    ],
    caseStudyImage: "/images/detail-ecommerce-casestudy.jpg",
    caseStudyMetric: "+34% conversion rate",
    caseStudyQuote:
      "They rebuilt our entire catalog in 5 weeks. Within two months our conversion rate was up 34% and our ad spend was working harder than ever.",
    caseStudyAuthor: "Maria Chen, Head of E-commerce at Aurora Goods",
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Do you handle the photography in-house or do we need a studio?", a: "In-house. We have a 200sqm studio in Berlin with full lighting, white cyclorama, and macro setups. For lifestyle shots we come to your location or source a location for you." },
      { q: "Can you work with our existing PIM system?", a: "Yes. We've worked with Akeneo, Salsify, Plytix, and custom systems. If you don't have one, we'll recommend one and set it up as part of the engagement." },
      { q: "What if we have more than 100 SKUs?", a: "We scope per 100 SKUs. For 500+ we run a dedicated production line with a fixed weekly cadence and a per-SKU rate that drops as volume increases." },
      { q: "Do you write the listing copy or just the photography?", a: "Both. We have copywriters who specialize in e-commerce — they write titles, bullets, A+ content, and descriptions optimized for Amazon, Shopify, and your DTC store." },
      { q: "How fast can you turn around a new product launch?", a: "Standard turnaround is 5 business days from shoot to published listing. For launches we offer a 48-hour rush option for up to 20 SKUs." },
      { q: "Do you offer ongoing catalog maintenance?", a: "Yes. After the initial engagement, most clients move to a monthly retainer where we handle new product shoots, seasonal refreshes, and listing updates." },
    ],
    relatedServices: ["Color Standardization Protocol", "Virtual Production & CGI Studio", "White-Label Agency Extension"],
  },

  {
    slug: "color",
    no: "02",
    name: "Color Standardization Protocol",
    heroTitle: "One color, every surface.",
    heroOutcome:
      "Pantone-precise color systems calibrated across every screen, print, and product. You get a single source of truth for your brand color — so what your designer sees is what your customer gets, every time.",
    bestFor: ["Established brands", "Multi-channel retailers", "Print + digital teams"],
    notSureText: "Not sure it fits? Talk to us",
    problemTitle: "Your color is breaking across channels",
    problemPoints: [
      "Your brand red looks different on Instagram, in print, and on product",
      "Every photographer and printer delivers a slightly different shade",
      "You have 5 'official' color files and no one knows which is current",
      "Product photos don't match the physical product — returns go up",
      "Your team wastes hours color-correcting instead of creating",
    ],
    problemImage: "/images/detail-color-problem.jpg",
    includedTitle: "What's included",
    subServices: [
      { title: "Color Audit", desc: "We map every place your color appears — digital, print, product, packaging — and identify every inconsistency.", image: "/images/detail-color-sub-audit.jpg" },
      { title: "Pantone & ICC System", desc: "A locked palette with Pantone references, ICC profiles, and hex codes calibrated for every output.", image: "/images/detail-color-sub-system.jpg" },
      { title: "Calibration Setup", desc: "We calibrate your monitors, printers, and photographer's workflow to the new standard.", image: "/images/detail-color-sub-calibration.jpg" },
      { title: "Brand Color Guide", desc: "A living document your team, vendors, and partners follow — with usage rules and test files.", image: "/images/detail-color-sub-guide.jpg" },
    ],
    processTitle: "How we work",
    processSteps: [
      { step: "01", title: "Audit", desc: "We collect every color file, photograph, and printed sample to map the current state.", duration: "Week 1" },
      { step: "02", title: "Define", desc: "We lock the master palette — Pantone, CMYK, RGB, and hex — for every surface and output.", duration: "Week 1–2" },
      { step: "03", title: "Calibrate", desc: "We calibrate your monitors, set up ICC profiles, and train your photographer and printer.", duration: "Week 2" },
      { step: "04", title: "Document", desc: "We deliver the brand color guide, test files, and a verification workflow for new assets.", duration: "Week 3" },
    ],
    processImage: "/images/detail-color-process.jpg",
    deliverablesTitle: "Deliverables & scope",
    deliverablesScope:
      "Full color standardization protocol: audit, master palette, ICC profiles, monitor calibration for up to 10 workstations, and a brand color guide.",
    deliverablesStarting: "Starting from $8,000",
    deliverablesImage: "/images/detail-color-deliverables.jpg",
    relatedWork: [
      { title: "Maison Noir", cat: "12 touchpoints · Luxury fashion", image: "/images/detail-color-work-1.jpg" },
      { title: "Stellar Hotel", cat: "8 properties · Hospitality", image: "/images/detail-color-work-2.jpg" },
      { title: "Zenith Press", cat: "Publication · Print + digital", image: "/images/detail-color-work-3.jpg" },
    ],
    caseStudyImage: "/images/detail-color-casestudy.jpg",
    caseStudyMetric: "92% fewer color returns",
    caseStudyQuote:
      "Before, every product photo looked slightly different and customers complained. After the protocol, color-related returns dropped 92% in the first quarter.",
    caseStudyAuthor: "James Voss, Creative Director at Maison Noir",
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "We already have brand guidelines with our colors. Do we still need this?", a: "Most brand guidelines list hex codes but don't cover how color behaves across print, product, and uncalibrated screens. We bridge that gap — your guidelines define the what, we define the how." },
      { q: "Do you work with our existing printer and photographer?", a: "Yes. We don't replace your vendors — we calibrate them. We work directly with your print partner and photographer to ensure everyone is outputting to the same standard." },
      { q: "What hardware do we need?", a: "A colorimeter for each monitor (we recommend X-Rite i1Display or Calibrite). We can supply these or use yours. For print, your printer needs to support ICC profiles — most commercial printers do." },
      { q: "How often should we re-calibrate?", a: "Monitors drift over time. We recommend monthly calibration for design workstations and quarterly for the full system. We include a calibration schedule in the guide." },
      { q: "Can you handle packaging and product materials too?", a: "Yes. We work with your packaging supplier to test Pantone references on the actual material — whether it's recycled board, glass, metal, or fabric." },
      { q: "What if we rebrand later?", a: "The protocol is designed to be updated. If you rebrand, we re-run the define and calibrate phases with the new palette — typically a 1-week engagement at half the original cost." },
    ],
    relatedServices: ["E-commerce Catalog Optimization", "Virtual Production & CGI Studio", "White-Label Agency Extension"],
  },

  {
    slug: "cgi",
    no: "03",
    name: "Virtual Production & CGI Studio",
    heroTitle: "Worlds built in pixels.",
    heroOutcome:
      "Real-time virtual sets, photoreal CGI, and unreal environments for film, brand, and product. You get cinematic production without the cost of a physical shoot — locations, sets, and products that exist only in pixels, but look completely real.",
    bestFor: ["Automotive & tech brands", "Film & TV productions", "Product launches"],
    notSureText: "Not sure it fits? Talk to us",
    problemTitle: "Physical shoots are slowing you down",
    problemPoints: [
      "Location scouting, permits, and travel eat your production budget",
      "Weather and logistics delay shoots by weeks",
      "Product prototypes don't exist yet — but you need to launch now",
      "Reshoots cost as much as the original shoot",
      "Your competitor's CGI looks better than your real footage",
    ],
    problemImage: "/images/detail-cgi-problem.jpg",
    includedTitle: "What's included",
    subServices: [
      { title: "Virtual Sets & Environments", desc: "Real-time LED volume or green-screen environments built in Unreal Engine — any location, any time of day.", image: "/images/detail-cgi-sub-virtual.jpg" },
      { title: "Product CGI", desc: "Photoreal 3D product renders — perfect for launches where the physical prototype doesn't exist yet.", image: "/images/detail-cgi-sub-product.jpg" },
      { title: "Motion Capture", desc: "On-set mocap for character animation, stunt previsualization, and virtual camera work.", image: "/images/detail-cgi-sub-mocap.jpg" },
      { title: "Color & Finish", desc: "Final color grade, compositing, and delivery in any format — from cinema to social cutdowns.", image: "/images/detail-cgi-sub-finish.jpg" },
    ],
    processTitle: "How we work",
    processSteps: [
      { step: "01", title: "Concept", desc: "We design the virtual world — environments, lighting, and camera moves — before a single frame is shot.", duration: "Week 1–2" },
      { step: "02", title: "Build", desc: "We model, texture, and light the CGI assets in Unreal Engine or offline renderers.", duration: "Week 2–4" },
      { step: "03", title: "Shoot", desc: "Virtual production day — real-time capture on LED volume or green screen with your talent.", duration: "Week 5" },
      { step: "04", title: "Finish", desc: "Compositing, color grade, and delivery. We hand off all 3D assets for future reuse.", duration: "Week 6" },
    ],
    processImage: "/images/detail-cgi-process.jpg",
    deliverablesTitle: "Deliverables & scope",
    deliverablesScope:
      "Full virtual production for one scene or product launch: environment design, CGI build, 1-day virtual shoot, and final color-graded delivery. All 3D assets included for future reuse.",
    deliverablesStarting: "Starting from $35,000",
    deliverablesImage: "/images/detail-cgi-deliverables.jpg",
    relatedWork: [
      { title: "ECHO Motors", cat: "Launch film · Zero physical shoot", image: "/images/detail-cgi-work-1.jpg" },
      { title: "Meridian Co", cat: "Product launch · 6 CGI films", image: "/images/detail-cgi-work-2.jpg" },
      { title: "Cipher Labs", cat: "Brand film · Virtual sets", image: "/images/detail-cgi-work-3.jpg" },
    ],
    caseStudyImage: "/images/detail-cgi-casestudy.jpg",
    caseStudyMetric: "$280K saved vs. physical shoot",
    caseStudyQuote:
      "We launched the new EV with a full CGI film — no physical car, no location, no weather risk. It cost 60% less than the planned shoot and looked better than anything we could have filmed.",
    caseStudyAuthor: "Daniel Park, Marketing Director at ECHO Motors",
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Can CGI really look as good as a real photograph?", a: "For most product and automotive work, yes — and often better. We use the same rendering technology as major film studios. For close-up fabric or food, real photography still wins. We'll tell you honestly which approach is right for each shot." },
      { q: "Do you have your own LED volume / virtual production stage?", a: "Yes. We have a 6m x 3m LED volume in our Berlin studio for small to mid-size shoots. For larger productions we partner with a nearby 20m x 6m stage. Both run Unreal Engine in real-time." },
      { q: "What if we need to change the product after the shoot?", a: "That's the advantage of CGI — changes are easy. Swapping a color, updating a detail, or changing the angle is a render, not a reshoot. Most changes take 24–48 hours." },
      { q: "Can you match our existing brand color standard?", a: "Yes — especially if we've also done your Color Standardization Protocol. CGI color is fully controlled in the render, so it's actually easier to match than real photography." },
      { q: "How long does a typical CGI product film take?", a: "A 30-second product launch film typically takes 4–6 weeks from concept to delivery. Complex environments or character work can take 8–12 weeks." },
      { q: "Do we own the 3D assets after the project?", a: "Yes. All 3D models, textures, and scene files are handed off to you at the end. You can reuse them for future campaigns, AR/VR, or your website — no licensing fees." },
    ],
    relatedServices: ["E-commerce Catalog Optimization", "Color Standardization Protocol", "White-Label Agency Extension"],
  },

  {
    slug: "whitelabel",
    no: "04",
    name: "White-Label Agency Extension",
    heroTitle: "Your studio, our hands.",
    heroOutcome:
      "Embedded production capacity for agencies — design, dev, and motion work that ships under your brand, not ours. You get a senior team that learns your clients, your standards, and your workflow — without the overhead of hiring.",
    bestFor: ["Creative agencies", "Design studios", "In-house brand teams"],
    notSureText: "Not sure it fits? Talk to us",
    problemTitle: "You're turning down work you can't staff",
    problemPoints: [
      "Clients want services you don't have the team for — motion, CGI, dev",
      "Hiring full-time senior staff for fluctuating project flow is risky",
      "Freelancers are unreliable, inconsistent, and hard to manage",
      "Your team is stretched thin and quality is slipping",
      "You're losing pitches because you can't show production capacity",
    ],
    problemImage: "/images/detail-whitelabel-problem.jpg",
    includedTitle: "What's included",
    subServices: [
      { title: "Design Production", desc: "Brand systems, marketing collateral, social assets — produced to your agency's standards.", image: "/images/detail-whitelabel-sub-design.jpg" },
      { title: "Development", desc: "Webflow, Next.js, and Shopify builds — responsive, accessible, and ready to hand to your client.", image: "/images/detail-whitelabel-sub-dev.jpg" },
      { title: "Motion & Video", desc: "Brand films, social cutdowns, and motion graphics — edited and color-graded in your style.", image: "/images/detail-whitelabel-sub-motion.jpg" },
      { title: "Account Management", desc: "A dedicated producer who learns your clients and acts as an extension of your team.", image: "/images/detail-whitelabel-sub-am.jpg" },
    ],
    processTitle: "How we work",
    processSteps: [
      { step: "01", title: "Onboard", desc: "We learn your brand standards, client base, and workflow. You introduce us to your team.", duration: "Week 1" },
      { step: "02", title: "Pilot", desc: "We run one project together — end to end — to calibrate quality and communication.", duration: "Week 2–4" },
      { step: "03", title: "Scale", desc: "We take on more work as your pipeline grows — same team, same standards, more capacity.", duration: "Ongoing" },
      { step: "04", title: "Deliver", desc: "Every project ships under your brand. Your client never sees us — we're your studio.", duration: "Every project" },
    ],
    processImage: "/images/detail-whitelabel-process.jpg",
    deliverablesTitle: "Deliverables & scope",
    deliverablesScope:
      "Monthly retainer for dedicated production capacity: 1 senior producer + up to 3 specialists (design, dev, motion) allocated to your projects. Minimum 3-month engagement.",
    deliverablesStarting: "Starting from $8,000/month",
    deliverablesImage: "/images/detail-whitelabel-deliverables.jpg",
    relatedWork: [
      { title: "Agency Collective", cat: "200+ assets · Multi-client", image: "/images/detail-whitelabel-work-1.jpg" },
      { title: "Forma Studio", cat: "12 months · Embedded team", image: "/images/detail-whitelabel-work-2.jpg" },
      { title: "Nord Atelier", cat: "6 clients · Ongoing retainer", image: "/images/detail-whitelabel-work-3.jpg" },
    ],
    caseStudyImage: "/images/detail-whitelabel-casestudy.jpg",
    caseStudyMetric: "3x more projects shipped",
    caseStudyQuote:
      "We doubled our client base in a year without hiring a single full-time person. Their team is our team — our clients don't even know they exist.",
    caseStudyAuthor: "Sarah Lindgren, Partner at Agency Collective",
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Will our clients know we're working with you?", a: "No. Every deliverable ships under your brand — your files, your naming, your presentation. We sign an NDA and act as an extension of your team. Your client never sees us." },
      { q: "How do you match our quality standards?", a: "We start with a pilot project where we calibrate to your standards. We use your templates, your brand guidelines, and your review process. By the end of the pilot, we work the way you work." },
      { q: "What if we only need help for a few weeks?", a: "We offer project-based engagements for short bursts — minimum 2 weeks. The monthly retainer is for agencies that need ongoing capacity, but we're flexible for the right fit." },
      { q: "Can you work in our project management tools?", a: "Yes. We've worked in Asana, Monday, Notion, ClickUp, Basecamp, and custom tools. We adapt to your workflow — we don't force you to use ours." },
      { q: "What happens if we're not happy with the work?", a: "Every project includes two rounds of revisions. If something isn't right, we fix it — no extra charge. If we're consistently not a fit, you can cancel the retainer with 30 days' notice." },
      { q: "Do you sign NDAs?", a: "Always. Before any work starts, we sign a mutual NDA and a white-label agreement that confirms all work is delivered under your brand with no attribution to us." },
    ],
    relatedServices: ["E-commerce Catalog Optimization", "Color Standardization Protocol", "Virtual Production & CGI Studio"],
  },
];
