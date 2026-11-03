# CUTTINGEDGER

A black & white creative studio agency homepage — pure monochrome, full-bleed type, smooth motion. Built as a single-page frontend showcase.

![Tech](https://img.shields.io/badge/Next.js-16-black) ![Tech](https://img.shields.io/badge/TypeScript-5-black) ![Tech](https://img.shields.io/badge/Tailwind-4-black) ![Tech](https://img.shields.io/badge/Framer%20Motion-12-black)

## Sections

1. **Hero** — full-screen image slider (4 slides, smooth crossfade + slow zoom), clickable indicators with progress bars, prominent Get Started CTA, pauses on hover
2. **Brand marquee** — 2 lines of brand names moving in opposite directions (top left, bottom right) creating an anti-clockwise rotation
3. **What can we do for you?** — sticky B&W portrait image + big display heading, body copy, 4 animated stats
4. **WHAT CAN WE HELP YOU WITH** — 6 service cards in an auto-rotating horizontal marquee
5. **Selected work** — 4 image cards auto-rotating in the opposite direction
6. **Our process** — single-line horizontal timeline with 4 phases (Listen → Define → Design → Deliver)
7. **Final CTA** — one-line bold display text + white pill CTA + email link
8. **FAQ** — 6-question accordion with smooth expand/collapse

Plus a sticky frosted navbar and a footer with a live Berlin clock, link columns, and a giant wordmark.

## Tech stack

- **Next.js 16** with App Router + Turbopack
- **TypeScript 5**
- **Tailwind CSS 4** with custom CSS variables for the strict B&W palette
- **Framer Motion 12** for slider, accordion, and scroll-reveal animations
- **shadcn/ui** (New York style) + **Lucide React** icons
- Custom CSS keyframes for the marquees (left / right / slow variants)
- Typography: Space Grotesk (display), Inter (body), JetBrains Mono (labels)

## Getting started

```bash
bun install
bun run dev      # http://localhost:3000
```

Or with npm / pnpm:

```bash
npm install && npm run dev
# or
pnpm install && pnpm dev
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Homepage (composes all 8 sections)
│   └── globals.css         # B&W design tokens + marquee keyframes
└── components/
    ├── site/
    │   ├── navbar.tsx
    │   ├── hero.tsx
    │   ├── marquee.tsx
    │   ├── what-we-do.tsx
    │   ├── services.tsx
    │   ├── work-showcase.tsx
    │   ├── process.tsx
    │   ├── final-cta.tsx
    │   ├── faq.tsx
    │   └── footer.tsx
    └── ui/                 # shadcn/ui components
```

## Design notes

- **Strict B&W palette** — pure black `#000`, pure white `#FFF`, and grays only. Enforced via CSS variables.
- All imagery is grayscale-filtered for consistency.
- Fully responsive — verified at desktop (1440×900) and mobile (390×844).

## License

MIT
