# Content Guide

This guide is for editors updating the site's copy without touching
frontend components. Every piece of text that appears in more than one
place is stored in a file under `lib/` or `content/`. Change it there,
commit, and the whole site updates.

If you're not sure where a piece of text lives, search for it in your
editor — the repo is small enough that a full-text search always finds
the source.

---

## 1. Brand, contact, regulatory — `lib/site.ts`

This is the single source of truth for anything that appears in the
header, footer, or regulatory strip.

```ts
export const siteConfig = {
  name: "Mukta Finserv LLP",
  shortName: "Mukta Finserv",
  tagline: "Wealth, Refined.",
  description: "...",
  url: "https://muktafinserv.in",

  contact: {
    email: "info@muktafinserv.in",
    phone: "+91 00000 00000",
    phoneHref: "tel:+910000000000",
    whatsapp: "+91 00000 00000",
    whatsappHref: "https://wa.me/910000000000",
    address: { line1, line2, country },
  },

  social: { linkedin, instagram, youtube, twitter },

  regulatory: {
    arnNumber: "ARN-XXXXXX",
    arnValidThrough: "DD-MM-YYYY",
    cinNumber: "AAA-0000",
    riskWarning: "...",
  },

  services: [ /* slug + label for each service */ ],
  primaryNav: [ /* top-nav items */ ],
  legal: [ /* footer legal links */ ],
  ctas: { primary, secondary },
};
```

### Update phone, email, WhatsApp

Edit the `contact` block. Keep `phoneHref` as a `tel:` URL (digits only,
no spaces) and `whatsappHref` as a `https://wa.me/…` link.

### Update ARN / CIN

Edit the `regulatory` block. Also update the long `riskWarning` string
so the embedded numbers match — this paragraph is mandatory per
AMFI/SEBI and appears verbatim in the footer.

### Add or remove a service from the top nav / footer

Edit the `services` array. Each entry is `{ slug, label }`. The slug
becomes the URL (`/services/<slug>`) — once set, don't change it, or
external links will break.

After adding a service to this list, also add a `services.ts` entry
(see §3) with the long-form copy for its detail page.

---

## 2. Service-page long copy — `lib/services.ts`

Each service page reads its hero copy, "why us" section, process steps,
inclusions, and FAQ from this file. Open it and find the entry that
matches the slug you want to edit. Update strings in place — the page
re-reads on save in dev, and rebuilds in production.

Adding a new service is a two-step process:

1. Add `{ slug, label }` to `siteConfig.services` in `lib/site.ts`.
2. Add a full entry keyed by that slug in `lib/services.ts`.

If you forget step 2, the page will 404 and the build will flag a
missing slug during `generateStaticParams`.

---

## 3. Add a blog post

Blog posts are TSX files under `content/insights/`. Each file exports a
default `Post` object. Adding one takes three steps.

### Step 1 — create the file

Create `content/insights/<your-slug>.tsx`. Use one of the existing
files as a starting template — easiest is
`content/insights/the-case-for-doing-nothing.tsx`.

```tsx
import type { Post } from "@/lib/insights";

const post: Post = {
  slug: "your-slug",
  title: "Your Headline",
  dek: "One-sentence standfirst — shown on cards and at the top of the post.",
  category: "Philosophy",     // see postCategories in lib/insights.ts
  publishedAt: "2026-05-18",  // ISO date, sorts newest-first
  readMinutes: 5,
  author: { name: "Partner Name", role: "Managing Partner" },
  body: (
    <>
      <p>First paragraph…</p>
      <h2>A section heading</h2>
      <p>More prose.</p>
      <blockquote>A pull quote.</blockquote>
      <p>Close out the thought.</p>
    </>
  ),
};

export default post;
```

**Allowed tags** in `body`: `<p>`, `<h2>`, `<h3>`, `<ul>`, `<ol>`,
`<li>`, `<blockquote>`, `<em>`, `<strong>`, `<a>`. The `Prose`
component in `components/insights/Prose.tsx` styles all of these
automatically — don't add `className` attributes.

### Step 2 — register it

Open `lib/insights.ts`. Import your new post at the top, then add it
to the `allPosts` array:

```ts
import postYour from "@/content/insights/your-slug";

const allPosts: Post[] = [
  postAllocation,
  postDirectRegular,
  postFiveQuestions,
  postRefuse,
  postDoingNothing,
  postYour,    // ← add here
];
```

Why explicit imports and not a glob? Turbopack doesn't resolve dynamic
`.tsx` imports at build time. The static registry is the reliable path.

### Step 3 — verify

Run `npm run dev`, visit `/blog`, and click through. Then
`npm run build` to confirm it prerenders cleanly.

---

## 4. Edit or add an FAQ — `lib/faq.ts`

The FAQ page is fully data-driven. Open `lib/faq.ts`, find the
category, and edit the entries in place:

```ts
{
  id: "why-regular-plan",
  category: "Investing",
  question: "Why do you deal in Regular plans only?",
  answer: "…",
}
```

The JSON-LD FAQPage schema and the FAQ search index are generated from
this same array, so a single edit updates everything.

To add a new category: append it to the `faqCategories` array at the
top, then start using it as a `category` value.

---

## 5. Edit a calculator's copy

Form labels and intro copy for each calculator live beside the
calculator component in `components/calculators/forms/<name>.tsx`.
The calculator card text (what shows on the `/calculators` index) lives
in the `calculators` registry in `lib/calculators.ts`.

**Do not touch the pure math functions** (`calcSip`, `calcEmi`, etc.)
in `lib/calculators.ts`. If you need to change a formula, flag it for
engineering review — these have been tested against standard
industry-accepted formulas.

---

## 6. Social sharing image

The 1200×630 preview shown when the site is shared on LinkedIn /
WhatsApp / X is generated at `app/opengraph-image.tsx`. Edit the JSX
there to change the layout; it's rendered at build time via `next/og`.

For a per-page image (e.g. a custom OG card for a specific blog post),
add `opengraph-image.tsx` inside that route segment —
e.g. `app/blog/[slug]/opengraph-image.tsx`.

---

## 7. Regulatory copy (don't paraphrase)

The footer risk-warning paragraph in `siteConfig.regulatory.riskWarning`
is mandated by AMFI for MF distributors. Edit only the ARN number and
validity date — keep the surrounding language verbatim. If there's any
doubt, consult compliance before committing.

---

## Common mistakes

- **Editing a service page by hand in `app/services/[slug]/page.tsx`** —
  don't. That file dispatches to data in `lib/services.ts`. Edit the
  data, not the page.
- **Changing a blog post's `slug` after publishing** — will break
  external links. Keep the slug forever; edit the title freely.
- **Forgetting to register a new post/service** — add the file *and*
  register it in the library file. The build will fail loudly otherwise,
  which is a feature, not a bug.
