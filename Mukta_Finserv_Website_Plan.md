# Mukta Finserv LLP — Website Build Plan for Claude Code

> **Purpose:** A complete, step-by-step execution plan for Claude Code to build a production-ready, premium wealth-management website for **Mukta Finserv LLP**.
> **Inspiration:** eticawealth.com, enrichwise.com, sapientwealth.in, sanctumwealth.com, equiruswealth.com.
> **Visual identity:** Black + Gold + White, with serif typography and a subtle royal/luxury feel.

---

## 1. Project Overview

### 1.1 Brand Brief

| Attribute | Value |
|---|---|
| Brand Name | Mukta Finserv LLP |
| Industry | Wealth Management / Mutual Fund Distribution / Financial Advisory |
| Tagline (placeholder) | *"Wealth, Refined."* (replace with final tagline) |
| Brand Personality | Trustworthy, premium, royal, restrained, scholarly |
| Target Audience | HNIs, MNIs, salaried professionals, business owners, NRIs, retirees |
| Primary CTA | "Schedule a Consultation" / "Start Your Investment Journey" |
| Secondary CTA | "Explore Services" / "Investor Login" |

### 1.2 Design Philosophy

The five reference sites converge on a few patterns Mukta Finserv must honour:

1. **Trust signals first** — AUM, years of experience, client count, country count are displayed prominently.
2. **Service-grid as the primary navigation** — services are illustrated with iconography and linked individually.
3. **Founder-led storytelling** — the leadership team is shown with photos and credentials.
4. **Testimonial walls** — long-form quotes with named clients.
5. **Educational resources** — calculators, blogs, FAQs lower the barrier and build authority.
6. **Strict regulatory footer** — AMFI ARN, SEBI disclosures, risk warnings.

Mukta will differentiate through a **deep black + gold** palette (most peers use blue/green) and **serif-driven typography** (most peers use sans-serif), giving an editorial, "private bank" feel rather than a "fintech app" feel.

---

## 2. Visual System

### 2.1 Colour Palette

```
/* Core */
--color-bg-primary:     #0A0A0A   /* near-black, page background */
--color-bg-secondary:   #141414   /* card / section background */
--color-bg-tertiary:    #1F1B16   /* warm dark for hero accents */
--color-surface-light:  #FFFFFF   /* light-mode sections, cards */
--color-surface-cream:  #FAF7F0   /* warm off-white for editorial sections */

/* Accent — Gold scale */
--color-gold-50:        #FFF8E1
--color-gold-100:       #F5E6B8
--color-gold-300:       #E5C97A
--color-gold-500:       #D4AF37   /* primary gold — buttons, links, accents */
--color-gold-600:       #B8941F
--color-gold-700:       #8C6E14   /* deep gold for hover */

/* Type */
--color-text-on-dark:        #F5F1E8   /* warm white */
--color-text-on-dark-muted:  #A8A29E
--color-text-on-light:       #1A1A1A
--color-text-on-light-muted: #4A4A4A

/* Lines & Dividers */
--color-divider-dark:   rgba(212, 175, 55, 0.20)   /* gold at 20% on dark */
--color-divider-light:  rgba(10, 10, 10, 0.10)
```

**Usage rules**

- Default page chrome: `--color-bg-primary` with `--color-text-on-dark`.
- Gold is reserved for: primary CTAs, key headlines (selectively), dividers, icon strokes, hover states, statistic numbers.
- Avoid gold backgrounds larger than a button — keep gold as a *line and accent* colour, never a flood, to preserve the royal, restrained tone.
- Alternate dark/light sections to create rhythm (dark hero → light services → dark testimonials → light blog → dark footer).

### 2.2 Typography

Use Google Fonts (free, open-source). Two-family system:

| Role | Font | Weights | Usage |
|---|---|---|---|
| Display / Headlines | **Cormorant Garamond** | 400, 500, 600 | H1, H2, hero, section titles |
| Body / UI | **Lora** *(or)* **Source Serif 4** | 400, 500, 600 | Paragraphs, lists, captions, buttons |
| Numerical / Stats | **Playfair Display** | 600, 700 | Large stat numbers (AUM, years, clients) |

Pair an alternative for clients who want lighter editorial feel: **EB Garamond** (display) + **Lora** (body).

**Sample type scale (desktop)**

```
H1 — 72–88px, Cormorant Garamond 500, line-height 1.05, letter-spacing -0.01em
H2 — 48–56px, Cormorant Garamond 500, line-height 1.10
H3 — 32px,    Cormorant Garamond 500
H4 — 22px,    Cormorant Garamond 500
Body L — 18px, Lora 400, line-height 1.65
Body M — 16px, Lora 400, line-height 1.65
Caption — 13px, Lora 500, letter-spacing 0.08em, UPPERCASE (eyebrow labels)
Stat numerals — 80–120px, Playfair Display 600
```

### 2.3 Layout System

- **Grid:** 12-column, max content width 1280px, gutter 32px desktop / 16px mobile.
- **Section padding:** 120px top/bottom desktop, 64px tablet, 48px mobile.
- **Border radius:** 4px (sharp, premium), never large rounded corners.
- **Shadows:** very subtle — `0 1px 2px rgba(0,0,0,0.4)` on dark cards; almost none on light.
- **Iconography:** Thin-line, gold strokes, 1.5px weight. Use Lucide React icons re-styled, or hand-drawn SVG.

### 2.4 Royal / Luxury Accents

To deliver the requested "royal touch" without becoming gaudy:

- Thin gold horizontal rule (1px) under section eyebrows.
- Small ornamental SVG flourish (a centred filigree) above section H2s.
- Serif drop-caps on the first paragraph of long-form sections (About, Philosophy).
- Subtle gold-foil noise texture on hero backgrounds (CSS `background-blend-mode: overlay` with a faint noise PNG).
- Gold underline-on-hover for inline links, with a slow `cubic-bezier(0.22, 1, 0.36, 1)` transition.
- Hairline gold borders around portrait photos in the team section.

---

## 3. Information Architecture & Sitemap

```
Home
├── About Us
│   ├── Our Story
│   ├── Philosophy & Values
│   └── Leadership Team
├── Services
│   ├── Mutual Funds
│   ├── Insurance (Life & General)
│   ├── PMS / AIF
│   ├── Estate & Will Planning
│   ├── Tax Planning
│   ├── Retirement Planning
│   ├── NRI Services
│   └── Goal-Based Investing
├── Resources
│   ├── Calculators (SIP, Retirement, EMI, Education, etc.)
│   ├── Blog / Insights
│   ├── FAQs
│   └── News & Media
├── Contact Us
│   ├── Enquiry Form
│   ├── Office Locations
│   └── Book an Appointment
└── Investor Login (external link / portal)
```

**Footer navigation** mirrors the above plus: Disclosure, Disclaimer, Privacy Policy, AMFI Risk Factors, Code of Conduct, ARN registration block.

---

## 4. Page-by-Page Specifications

> For each page, sections are listed top-to-bottom in the order they should appear.

### 4.1 Home Page (`/`)

1. **Header / Navigation**
   - Sticky, transparent over hero, solid black on scroll.
   - Left: wordmark "Mukta Finserv" in Cormorant Garamond, gold underscore mark below.
   - Centre: nav links (About, Services, Resources, Contact).
   - Right: gold outline "Investor Login" button + filled gold "Schedule Consultation" button.
   - Mobile: hamburger → full-screen overlay menu, items in serif large type.

2. **Hero Section**
   - Background: deep black with faint gold particle/noise overlay; optional video loop of a quiet, opulent setting (skyline at dusk, marble texture).
   - Eyebrow: "MUKTA FINSERV LLP" in spaced caps, gold.
   - H1 (serif, large): *"Wealth, Refined for Generations."* (replace with final copy)
   - Sub-line: 1–2 sentences on what Mukta does.
   - Two CTAs: gold filled "Begin Your Journey" + ghost "Explore Services".
   - Bottom strip: small AMFI / SEBI registration badges in muted gold.

3. **Trust Bar (Stats)**
   - Four large numerals in Playfair Display: AUM (₹___ Cr), Families Served, Years of Experience, Cities/Countries.
   - Each numeral animates count-up on scroll into view.
   - Hairline gold dividers between stats.

4. **Brand Story / Mission Snippet**
   - Two-column: left a short paragraph about Mukta's founding ethos; right a soft portrait or abstract gold motif.
   - Drop-cap on the paragraph.

5. **Services Grid**
   - Section eyebrow: "OUR SERVICES" + gold rule.
   - H2: *"Comprehensive Solutions for Every Goal"*.
   - 3×3 or 4×2 grid of service cards. Each card:
     - Thin-line gold icon, 48×48.
     - Service name (H4 serif).
     - One-line description (Lora 16px).
     - "Learn More →" link in gold.
   - Hover: card border turns gold, icon glows subtly.

6. **Philosophy Pillars**
   - Section background: warm cream (`--color-surface-cream`) for visual rhythm.
   - Title: *"Our Guiding Principles"*.
   - 4–6 pillars (e.g., Client First, Transparency, Discipline, Education, Long-Term Thinking, Confidentiality) in a 2 or 3 column layout.
   - Each pillar: small gold roman numeral (I, II, III…), bold serif title, short body.

7. **Leadership Spotlight**
   - Dark section.
   - Title: *"Stewarded by Experienced Hands"*.
   - 2–4 leadership cards: portrait (sepia/duotone treatment), name (serif), designation, 2-line bio, LinkedIn icon.
   - "Meet the Full Team →" link below.

8. **Process / How We Work**
   - 5-step horizontal timeline: Discover → Design → Deploy → Monitor → Review.
   - Connector line in gold between numbered roman-numeral nodes.

9. **Testimonials Carousel**
   - Background: cream section.
   - Large opening quotation mark in gold.
   - Long-form testimonial (3–5 sentences), client name, designation, location.
   - Carousel navigation in thin gold arrows; optional auto-advance every 8s.

10. **Resources Teaser**
    - Three columns: latest blog post, featured calculator, FAQ highlight — each links to deeper page.

11. **Final CTA Band**
    - Black background, full-bleed.
    - Centred serif H2: *"Begin a conversation about your wealth."*
    - Gold filled CTA button.
    - Below: contact phone + email in muted gold, click-to-call.

12. **Footer**
    - 4 columns: brand block (logo + 1-line about + social icons), Quick Links, Services, Contact.
    - Below: full regulatory disclosure block (ARN, SEBI registrations, risk warning paragraph).
    - Bottom strip: copyright, sitemap, privacy/disclaimer links.

### 4.2 About Us (`/about`)

- Hero with H1 *"Our Story"* and a 2-paragraph editorial intro with drop-cap.
- Founding timeline (vertical, gold connector line).
- Philosophy section (mirrors home but expanded to 8–10 principles).
- Leadership team grid — full team, not just spotlight.
- Awards / Affiliations strip (logos in gold-monochrome treatment).
- CTA band at bottom.

### 4.3 Services Index (`/services`)

- Hero: *"Solutions Tailored to Your Life's Goals"*.
- Grid of all services as larger cards (image + title + 2-line desc + arrow).
- Each card links to dedicated service page.

### 4.4 Service Detail Page (`/services/[slug]`)

Template applies to: mutual-funds, insurance, pms-aif, estate-planning, tax-planning, retirement-planning, nri-services, goal-based-investing.

Sections:
1. Breadcrumb (Home / Services / [Service]).
2. Hero with service name (H1 serif) and 1-paragraph intro.
3. "What we offer" — bulleted feature list with gold check-marks.
4. "Who it's for" — 3–4 client persona cards.
5. Process — 3-step explanation specific to the service.
6. Related calculators (if applicable) — link cards.
7. FAQ accordion (4–6 questions).
8. CTA band: "Speak with an advisor about [Service]".

### 4.5 Resources / Calculators (`/calculators`)

- Grid of calculators: SIP, Step-Up SIP, Lumpsum, Retirement, Education, Marriage, EMI, Future Value.
- Each calculator opens its own page with:
  - Inputs (amount, rate, tenure) — gold focus rings on inputs.
  - Real-time output — large serif numeral.
  - Recharts line/bar chart of growth over time, gold-on-black palette.
  - "Disclaimer: Calculations are illustrative…" footnote.

### 4.6 Blog / Insights (`/blog`)

- Grid of post cards: featured image, category tag in gold, title (serif), excerpt, date, read-time.
- Sidebar with categories and recent posts on detail view.
- Article page: editorial typography, generous line-height, drop-cap, gold pull-quotes.

### 4.7 FAQ (`/faq`)

- Categorised accordion (General, Mutual Funds, Tax, NRI, Estate Planning).
- Accordion expand/collapse with smooth height transition; chevron rotates and turns gold on open.

### 4.8 Contact (`/contact`)

- Two-column: left form (Name, Email, Phone, Service of Interest dropdown, Message) with gold-bordered inputs; right office address, phone, email, embedded Google Map (dark-themed) + "Book Appointment" button linking to a Calendly/Zoho Bookings URL.
- Below: WhatsApp floating bubble (gold).

### 4.9 Login Pages (placeholder routes)

- Simple branded shell pages for Investor Login and Employee Login that redirect to actual portal URLs (Investwell, NSE NMF, MF Utility, etc., to be configured later).

---

## 5. Technical Stack & Architecture

### 5.1 Recommended Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | **Next.js 14 (App Router)** | SEO-friendly SSR/SSG, image optimisation, file-based routing. |
| Language | **TypeScript** | Type-safety, better DX. |
| Styling | **Tailwind CSS** + CSS variables for theme tokens | Fast iteration; tokens map cleanly to brand colours. |
| Component Library | **shadcn/ui** (selectively) | Accessible primitives (Accordion, Dialog, Tabs); restyled to brand. |
| Icons | **lucide-react** | Thin-line, easily restylable in gold. |
| Animation | **Framer Motion** | Hero fades, count-up stats, hover micro-interactions. |
| Charts | **Recharts** | Calculator outputs. |
| Forms | **react-hook-form** + **zod** | Validation for contact form. |
| CMS (optional) | **Sanity** *or* **Contentlayer** (MDX) | Blog and team content edit-friendly. Start with MDX; upgrade to Sanity if non-technical editors will manage content. |
| Email backend | **Resend** *or* **EmailJS** | Send contact-form submissions to `info@muktafinserv.in`. |
| Analytics | **Plausible** *or* **Google Analytics 4** | Privacy-respecting metric. |
| Deployment | **Vercel** | Zero-config for Next.js, free SSL, edge CDN. |
| Domain | `muktafinserv.in` (purchase via GoDaddy/BigRock) | Point DNS to Vercel. |

### 5.2 Project Structure

```
mukta-finserv/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Home
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx            # Services index
│   │   └── [slug]/page.tsx     # Dynamic service detail
│   ├── calculators/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── faq/page.tsx
│   ├── contact/page.tsx
│   ├── api/
│   │   └── contact/route.ts    # Contact form handler
│   └── globals.css             # Tailwind + CSS vars
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── TrustBar.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── PhilosophyPillars.tsx
│   │   ├── LeadershipSpotlight.tsx
│   │   ├── Process.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTABand.tsx
│   ├── ui/                     # shadcn primitives, restyled
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Accordion.tsx
│   │   └── Input.tsx
│   ├── shared/
│   │   ├── EyebrowLabel.tsx
│   │   ├── Filigree.tsx        # SVG ornament
│   │   ├── DropCap.tsx
│   │   └── CountUp.tsx
│   └── calculators/
│       ├── SipCalculator.tsx
│       └── RetirementCalculator.tsx
├── content/
│   ├── services/               # MDX files for service pages
│   ├── blog/                   # MDX files for blog posts
│   ├── team.json               # Leadership data
│   ├── testimonials.json
│   └── faqs.json
├── public/
│   ├── images/
│   ├── icons/
│   ├── ornaments/              # SVG filigrees
│   └── favicons/
├── lib/
│   ├── seo.ts                  # Per-page metadata helper
│   ├── calculators.ts          # Pure calc functions
│   └── analytics.ts
├── styles/
│   └── tokens.css              # CSS variables (colours, type scale)
├── tailwind.config.ts          # Theme extends with brand tokens
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

### 5.3 Tailwind Theme Extension (sketch)

```ts
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      bg: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        tertiary: 'var(--color-bg-tertiary)',
      },
      gold: {
        50: '#FFF8E1',
        100: '#F5E6B8',
        300: '#E5C97A',
        500: '#D4AF37',
        600: '#B8941F',
        700: '#8C6E14',
      },
      surface: {
        light: '#FFFFFF',
        cream: '#FAF7F0',
      },
    },
    fontFamily: {
      display: ['var(--font-cormorant)', 'serif'],
      body:    ['var(--font-lora)', 'serif'],
      stat:    ['var(--font-playfair)', 'serif'],
    },
    borderRadius: { DEFAULT: '4px' },
    maxWidth: { content: '1280px' },
  }
}
```

---

## 6. Build Sequence — Claude Code Execution Plan

Claude Code should execute the following phases **in order**, committing at the end of each phase. Each phase is a self-contained prompt.

### Phase 0 — Project Bootstrap

**Goal:** Scaffold a clean Next.js + TypeScript + Tailwind project.

**Tasks:**
1. `npx create-next-app@latest mukta-finserv --ts --tailwind --app --eslint --src-dir=false`.
2. Install deps: `framer-motion lucide-react recharts react-hook-form zod @hookform/resolvers clsx tailwind-merge`.
3. Initialise shadcn/ui: `npx shadcn@latest init` — choose neutral base, then add `button card accordion input dialog`.
4. Configure Google Fonts in `app/layout.tsx` using `next/font/google` for Cormorant Garamond, Lora, Playfair Display; expose as CSS vars.
5. Create `styles/tokens.css` with the colour and type variables from §2.1 and §2.2; import in `globals.css`.
6. Update `tailwind.config.ts` per §5.3.
7. Set base `<body>` to `bg-bg-primary text-[--color-text-on-dark] font-body`.

**Deliverable:** `npm run dev` shows a blank dark page with the right fonts and colours.

### Phase 1 — Layout Shell

**Goal:** Build site-wide Header, Footer, and root layout.

**Tasks:**
1. Build `components/layout/Header.tsx` with sticky behaviour, transparent-on-hero / solid-on-scroll using `useScroll`.
2. Build `components/layout/MobileMenu.tsx` — full-screen overlay using shadcn Dialog.
3. Build `components/layout/Footer.tsx` with 4-column layout, regulatory disclosure block, social icons.
4. Wire Header + Footer into `app/layout.tsx`.
5. Add SEO defaults via `lib/seo.ts` and Next.js `metadata` export.

**Deliverable:** Every route shows consistent header/footer chrome.

### Phase 2 — Shared Primitives

**Goal:** Build reusable atomic components.

**Tasks:**
1. `EyebrowLabel` — small uppercase gold label with an underline rule.
2. `Filigree` — SVG ornament component with size prop.
3. `DropCap` — wraps first letter of a paragraph in large serif gold style.
4. `CountUp` — Framer Motion driven count-up animation.
5. `Button` — restyle shadcn Button with primary (gold filled), secondary (gold outline), ghost variants; sharp 4px radius.
6. `Card` — base card with optional gold-border-on-hover.

**Deliverable:** Storybook-style demo route `/dev/components` (delete before deploy) showing all primitives.

### Phase 3 — Home Page

**Goal:** Build the home page, top-to-bottom, per §4.1.

**Tasks:**
1. `components/home/Hero.tsx` — full-viewport black hero with particle SVG, eyebrow, H1, subline, two CTAs, registration badges.
2. `components/home/TrustBar.tsx` — 4 stats with `CountUp` triggered on scroll-into-view (Framer Motion `whileInView`).
3. `components/home/BrandStory.tsx` — two-column with drop-cap.
4. `components/home/ServicesGrid.tsx` — data-driven from `content/services-summary.json`; cards with gold hover.
5. `components/home/PhilosophyPillars.tsx` — cream-background section with roman-numeral pillars.
6. `components/home/LeadershipSpotlight.tsx` — reads from `content/team.json`.
7. `components/home/Process.tsx` — 5-step horizontal timeline.
8. `components/home/Testimonials.tsx` — carousel using Framer Motion + `useState` index.
9. `components/home/ResourcesTeaser.tsx`.
10. `components/home/CTABand.tsx`.
11. Compose all in `app/page.tsx`.

**Deliverable:** `/` is fully functional and visually polished on desktop, tablet, mobile.

### Phase 4 — About, Services, Service Detail Pages

**Tasks:**
1. Build `app/about/page.tsx` with timeline, expanded philosophy, full team, affiliations.
2. Build `app/services/page.tsx` with service grid.
3. Build `app/services/[slug]/page.tsx` reading from `content/services/*.mdx`. Each MDX file has frontmatter (title, description, hero image) and a body.
4. Author the 8 service MDX stubs with the structure in §4.4.
5. Add `lib/services.ts` for `getAllServices()` and `getServiceBySlug()`.

**Deliverable:** All static informational pages live.

### Phase 5 — Calculators

**Tasks:**
1. Build pure calculator functions in `lib/calculators.ts` (sip, stepUpSip, lumpsum, retirement, emi, education, marriage, futureValue).
2. Build `app/calculators/page.tsx` — index grid.
3. Build `app/calculators/[slug]/page.tsx` — dynamic, switch on slug to render the right calculator component.
4. Each calculator has form inputs (react-hook-form + zod), real-time output, and a Recharts area chart showing growth.
5. Restyle Recharts default colours to match brand (gold gradient fill on black background).

**Deliverable:** All 8 calculators usable on desktop and mobile.

### Phase 6 — Blog & FAQ

**Tasks:**
1. Set up MDX support via `next-mdx-remote` or `@next/mdx`.
2. Build `app/blog/page.tsx` — listing of posts from `content/blog/*.mdx`.
3. Build `app/blog/[slug]/page.tsx` — article page with editorial typography, gold pull-quotes, share buttons.
4. Build `app/faq/page.tsx` — categorised accordion from `content/faqs.json`.
5. Author 3 placeholder blog posts and 10 FAQ entries to demo the system.

**Deliverable:** Blog and FAQ live and working.

### Phase 7 — Contact & Forms

**Tasks:**
1. Build `app/contact/page.tsx` per §4.8.
2. Build `app/api/contact/route.ts` — POST handler that validates with zod, then sends an email via Resend (env var `RESEND_API_KEY` and `CONTACT_EMAIL`).
3. Add success/error toast UI on submit.
4. Embed Google Map iframe (dark-themed via Snazzy Maps style URL).
5. Add WhatsApp floating bubble component (`components/shared/WhatsAppBubble.tsx`).

**Deliverable:** Contact form submits successfully and emails reach the configured inbox.

### Phase 8 — Polish, Animations, Accessibility

**Tasks:**
1. Add subtle scroll-triggered fade-up animations on every section (Framer Motion `whileInView`).
2. Implement hover micro-interactions on every interactive element.
3. Audit all pages with Lighthouse — target 90+ on Performance, 100 on Accessibility, 100 on Best Practices, 100 on SEO.
4. Ensure all images use `next/image` with explicit `width`/`height` and meaningful `alt`.
5. Add `prefers-reduced-motion` guards on all motion components.
6. Verify keyboard navigation, focus rings (gold), skip-to-content link.
7. Verify colour contrast — gold-on-black for body text fails WCAG AA; restrict gold body text to large headlines only.

**Deliverable:** Production-ready accessible site.

### Phase 9 — SEO, Analytics, Final Setup

**Tasks:**
1. Generate `app/sitemap.ts` and `app/robots.ts`.
2. Add OpenGraph and Twitter card metadata for every page.
3. Create OG image template (1200×630) in dark + gold.
4. Add JSON-LD structured data: `Organization`, `WebSite`, `LocalBusiness`, `FAQPage` (on FAQ), `Article` (on blog posts).
5. Install Plausible/GA4 script via `next/script`.
6. Set up Vercel project, connect GitHub repo, configure environment variables.
7. Configure custom domain `muktafinserv.in` and SSL.
8. Set up form-submission email forwarding.

**Deliverable:** Live production site at `https://muktafinserv.in`.

### Phase 10 — Documentation & Handover

**Tasks:**
1. Write `README.md` with: setup, env vars, content authoring guide (how to add a blog post / service / team member), deployment steps.
2. Write `CONTENT_GUIDE.md` for non-technical editors.
3. Document brand tokens in `BRAND.md`.

**Deliverable:** Anyone (or future Claude Code session) can pick up the project and continue work.

---

## 7. Content Checklist (Before Phase 4)

These assets/content items must be supplied by the founder before service pages and team sections can be finalised:

**Brand & legal**
- [ ] Final tagline
- [ ] Final logo (SVG, light + dark variants)
- [ ] AMFI ARN number
- [ ] LLP CIN number
- [ ] Registered office address
- [ ] Branch addresses (if any)
- [ ] Authorised email and phone numbers
- [ ] WhatsApp business number

**Founder/team**
- [ ] Founder photo (high-res, professional)
- [ ] Founder name, designation, bio (150 words)
- [ ] LinkedIn URLs
- [ ] Repeat for each team member

**Editorial copy**
- [ ] Mission statement (50–100 words)
- [ ] Founding story / "Our Story" (250–400 words)
- [ ] Philosophy pillars list (4–8 items, each with title + 30-word description)
- [ ] Long-form descriptions for each of the 8 service pages (200–400 words each)
- [ ] 3–5 client testimonials (with name + designation + permission)
- [ ] Initial blog posts (or commission writing)

**Visual assets**
- [ ] Hero imagery (custom photography or licensed stock — black & gold tones)
- [ ] Office interior photos for Contact page
- [ ] Affiliation/partner logos (AMFI, NSE, BSE, etc.)

---

## 8. Compliance & Regulatory Footer (Mandatory)

The footer must include — verbatim where indicated by SEBI/AMFI guidelines:

> *"Mutual Fund investments are subject to market risks. Read all scheme related documents carefully before investing. Past performance is not indicative of future results. Mukta Finserv LLP is an AMFI-registered Mutual Fund Distributor (ARN: __________, valid through __________). We deal in Regular Plans only and earn trailing commissions on client investments. Commission disclosure is provided to clients at the time of investment."*

Plus links to: Disclaimer, Privacy Policy, Disclosure, AMFI Risk Factors, SEBI Investor Charter, Code of Conduct, SCORES.

---

## 9. Suggested Timeline

| Phase | Duration (developer-days) |
|---|---|
| 0 — Bootstrap | 0.5 |
| 1 — Layout Shell | 1 |
| 2 — Primitives | 1 |
| 3 — Home Page | 3 |
| 4 — About / Services / Service Detail | 3 |
| 5 — Calculators | 2 |
| 6 — Blog & FAQ | 1.5 |
| 7 — Contact & Forms | 1 |
| 8 — Polish & A11y | 1.5 |
| 9 — SEO & Deploy | 1 |
| 10 — Docs | 0.5 |
| **Total** | **~16 days** |

With Claude Code working in parallel sessions and content provided on time, a usable beta can be live in **2 weeks**, polished launch in **3–4 weeks**.

---

## 10. How to Hand This Plan to Claude Code

When opening Claude Code in your terminal, paste the following kickoff prompt:

> *"Read `Mukta_Finserv_Website_Plan.md` in this directory. Begin executing Phase 0. After each phase, stop, summarise what you built, and wait for my approval before starting the next phase. Use the file structure, design tokens, and component names exactly as specified. If any decision is ambiguous, ask before proceeding."*

This keeps you in the loop after every milestone and prevents Claude Code from drifting from the spec.

---

## 11. Future Enhancements (Post-Launch)

- Investor portal SSO integration with Investwell / NSE NMF / MFU.
- Newsletter signup with double opt-in (Mailchimp or ConvertKit).
- WhatsApp Business API integration for automated lead capture.
- Multilingual support (Hindi, Marathi).
- Client dashboard showing portfolio snapshot (read-only, via Investwell API).
- Webinar registration and recording library.
- Podcast embed for founder interviews.

---

*End of plan. Version 1.0 — generated for Mukta Finserv LLP.*
