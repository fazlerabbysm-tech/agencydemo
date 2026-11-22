# Katella Digital

Full-service marketing agency website built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion. Configured for Vercel free hosting with statically pre-rendered pages (SSG) and a single serverless contact endpoint (`/api/contact`).

## Tech Stack

- **Next.js 16** (App Router, static pre-rendering for all content routes)
- **React 19** + **TypeScript 5**
- **Tailwind CSS 4**
- **Framer Motion 12** + **Lucide React**

## Getting Started

```bash
bun install
bun run dev
```

## Scripts

```bash
bun run dev        # Start local dev server
bun run build      # Production build (SSG pages + /api/contact)
bun run start      # Start production server
bun run lint       # Run ESLint
bun run typecheck  # Run TypeScript check
```

## Vercel Deployment

1. Connect the repository in Vercel.
2. Add optional environment variables from `.env.example` (`BREVO_API_KEY`, `CONTACT_EMAIL`, `TURNSTILE_SECRET_KEY`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`) for live contact form email delivery.
3. Deploy — all marketing, service, portfolio, and case-study pages are served statically from Vercel's CDN.
