# Mukta Finserv LLP — Website

Premium wealth-management marketing site for Mukta Finserv LLP.
Next.js 16 (App Router) · React 19 · Tailwind v4 · TypeScript.

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

Build and preview the production bundle:

```bash
npm run build
npm run start
```

Lint:

```bash
npm run lint
```

Node 20+ recommended.

---

## Environment variables

Copy `.env.example` to `.env.local` and fill in what you need. Everything is
optional for local dev — analytics is skipped when keys are missing, and the
contact form logs to the console instead of sending email.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Load Plausible analytics in production. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Fallback to GA4 if Plausible not set. |
| `RESEND_API_KEY` | *(reserved — not yet wired.)* Email provider for contact form. |
| `CONTACT_EMAIL` | *(reserved.)* Destination inbox for consultation requests. |

The consultation form currently runs a zod-validated server action that logs
to the server console. Hook up Resend (or any SMTP provider) inside
`app/contact/actions.ts` when you're ready.

---

## Project structure

```
app/                       Next App Router routes
  layout.tsx               Root shell, fonts, JSON-LD, analytics
  page.tsx                 Home
  about/                   About us
  services/                Services index + [slug] detail
  calculators/             Calculators index + [slug] detail
  blog/                    Insights index + [slug] article
  faq/                     FAQ page
  contact/                 Contact page + server action
  not-found.tsx            Branded 404
  error.tsx                Branded error boundary
  loading.tsx              Shimmer skeleton
  sitemap.ts               /sitemap.xml
  robots.ts                /robots.txt
  opengraph-image.tsx      1200×630 social preview

components/
  home/                    Home-page sections (Hero, BrandStory, …)
  layout/                  Header, Footer, MobileMenu, Wordmark
  services/                Service cards, detail blocks, breadcrumb
  calculators/             Form primitives, charts, calculator shells
  insights/                Blog Prose, PostCard, CategoryFilter
  faq/                     FaqSearch
  contact/                 ConsultationForm, NewsletterForm, ContactDetails
  shared/                  EyebrowLabel, Section, Reveal, JsonLd, Analytics…
  ui/                      Button

content/
  insights/                Blog posts (one .tsx per post)

lib/
  site.ts                  Brand config, nav, services, contact, regulatory
  services.ts              Service-page copy (hero, sections, FAQs)
  calculators.ts           Pure calc functions + registry
  insights.ts              Blog registry (static imports + helpers)
  faq.ts                   FAQ data
  contact.ts               Zod schemas for forms
  seo.ts                   buildMetadata() helper
  jsonld.ts                Schema.org builders
  cn.ts                    clsx + tailwind-merge

styles/tokens.css          CSS design tokens (colors, type scale, layout)
app/globals.css            Tailwind v4 @theme wiring + base styles
```

---

## Adding content

See **[CONTENT_GUIDE.md](./CONTENT_GUIDE.md)** for full instructions on
editing copy, adding blog posts, adding service pages, and updating
regulatory numbers.

Quick pointers:

- **Tagline, contact details, ARN, social links** → `lib/site.ts`
- **Service-page long copy** → `lib/services.ts`
- **New blog post** → add a file in `content/insights/`, register it in
  `lib/insights.ts`
- **FAQs** → `lib/faq.ts`

---

## Design tokens & brand

All brand tokens (black/gold palette, serif type stack, spacing, easing)
are defined in `styles/tokens.css` and surfaced to Tailwind via
`app/globals.css`. See **[BRAND.md](./BRAND.md)**.

---

## Deployment

### Vercel (recommended)

1. Push this repo to GitHub.
2. Import the repo into Vercel. Framework presets auto-detect Next.js 16.
3. Add environment variables from `.env.example`.
4. Deploy. Vercel will preview every PR automatically.
5. Add the custom domain `muktafinserv.in` in *Project → Settings → Domains*
   and follow the DNS instructions.

### Anywhere else

`npm run build` produces a standard Next.js output. Any host that runs
Node 20+ and supports the Next.js adapter works — AWS Amplify, Netlify
(with the Next.js runtime plugin), Fly.io, a self-hosted Node server, etc.

---

## Tech stack notes

- **Tailwind v4** uses the CSS-first `@theme inline` directive — there is
  no `tailwind.config.ts`. Design tokens live in `styles/tokens.css` and
  are mapped to utilities in `app/globals.css`.
- **Turbopack** is the default bundler. Dynamic `import()` of `.tsx` files
  with a template-literal path does not resolve — the blog and services
  registries use explicit static imports.
- **react-hook-form + zod 4**: use `z.number()` with
  `register("field", { valueAsNumber: true })`, not `z.coerce.number()` —
  the latter produces an input/output type mismatch with `zodResolver`.
- **framer-motion 12**: the `Reveal` / `Stagger` primitives in
  `components/shared/Reveal.tsx` use the imperative `animate()` API on
  plain DOM refs (not `motion.*` components) for cleaner SSR behavior.
- **Recharts** emits `width(-1)/height(-1)` warnings during prerender.
  These are cosmetic — the charts size correctly on the client.

---

## License

Proprietary. © Mukta Finserv LLP.
