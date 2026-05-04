# Brand & Design System

The Aparigraha Enterprises visual language is **black + gold + warm cream**, set
in serif type. It's inspired by sapientwealth.com, eticawealth.com,
enrichwise.com, sanctumwealth.com, and equiruswealth.com — firms that
feel discreet rather than promotional.

Every brand token is defined once in `styles/tokens.css` and surfaced
to Tailwind utilities via the `@theme inline` block in
`app/globals.css`. There is no `tailwind.config.ts` — Tailwind v4 reads
tokens directly from CSS.

---

## Colour

### Core surfaces

| Token | Value | Use |
|---|---|---|
| `--color-bg-primary` | `#0A0A0A` | Page base — near-black |
| `--color-bg-secondary` | `#141414` | Section alternation |
| `--color-bg-tertiary` | `#1F1B16` | Deep brown-black for chrome |
| `--color-surface-light` | `#FFFFFF` | Inverted sections (rare) |
| `--color-surface-cream` | `#FAF7F0` | Editorial / cream surfaces |

Tailwind utilities: `bg-bg-primary`, `bg-bg-secondary`, `bg-bg-tertiary`,
`bg-surface-light`, `bg-surface-cream`.

### Gold scale

| Token | Value | Role |
|---|---|---|
| `--color-gold-50` | `#FFF8E1` | Softest highlight |
| `--color-gold-100` | `#F5E6B8` | Active state text |
| `--color-gold-300` | `#E5C97A` | Body emphasis, eyebrow labels |
| `--color-gold-500` | `#D4AF37` | **Primary brand gold** — CTAs, rules, focus |
| `--color-gold-600` | `#B8941F` | Pressed state |
| `--color-gold-700` | `#8C6E14` | Darkest, seldom used |

Utilities: `text-gold-*`, `bg-gold-*`, `border-gold-*`.

### Type colour

| Token | Value | Use |
|---|---|---|
| `--color-text-on-dark` | `#F5F1E8` | Body text on dark surfaces |
| `--color-text-on-dark-muted` | `#A8A29E` | Secondary text on dark |
| `--color-text-on-light` | `#1A1A1A` | Body text on light surfaces |
| `--color-text-on-light-muted` | `#4A4A4A` | Secondary on light |

Utilities: `text-ink`, `text-ink-muted`, `text-ink-inverse`,
`text-ink-inverse-muted`.

### Contrast rules

- **Gold on black for body text fails WCAG AA.** Reserve gold body text
  for short labels, eyebrow captions, display headlines, and pull
  quotes — never paragraphs.
- Body copy on dark surfaces uses `text-ink` (warm off-white).
- Regulatory/disclosure copy uses `text-ink-muted` and stays above 14px
  so it remains legible.

---

## Typography

Three serif families, loaded via `next/font/google` in
`app/layout.tsx`:

| Role | Family | CSS var | Tailwind |
|---|---|---|---|
| Display headlines | Cormorant Garamond | `--font-cormorant` → `--font-display` | `font-display` |
| Body, navigation, buttons | Lora | `--font-lora` → `--font-body` | `font-body` |
| Stats, large numerals | Playfair Display | `--font-playfair` → `--font-stat` | `font-stat` |

Body text sits at `1rem` / line-height `1.65`. The app uses the type
scale below for display.

### Type scale

| Token | Value | Typical use |
|---|---|---|
| `--fs-h1` | `clamp(3rem, 5vw + 1rem, 5.5rem)` | Page heroes |
| `--fs-h2` | `clamp(2.25rem, 3vw + 1rem, 3.5rem)` | Section headers |
| `--fs-h3` | `2rem` | Card titles |
| `--fs-h4` | `1.375rem` | Detail titles |
| `--fs-body-l` | `1.125rem` | Lead paragraphs |
| `--fs-body-m` | `1rem` | Body |
| `--fs-caption` | `0.8125rem` | Eyebrows, metadata |
| `--fs-stat` | `clamp(4rem, 6vw + 1rem, 7.5rem)` | Hero stats |

Most components use Tailwind's arbitrary-value `text-[clamp(...)]`
rather than these CSS vars directly — the vars exist as the single
source of truth but individual headings often tune tracking or leading
per component.

### Editorial conventions

- Display headlines are tight: `leading-[1.02]` and
  `tracking-tight` (or `-tracking-[0.012em]`).
- Eyebrow labels are uppercase Lora at `0.8125rem`, letterspacing
  `0.18em`–`0.22em`, coloured `gold-300` or `gold-500`.
- A 40–64px gold rule (`h-px w-10 bg-gold-500/70` or similar) always
  sits below display eyebrows — see `components/shared/EyebrowLabel.tsx`.

---

## Layout

| Token | Default | Mobile |
|---|---|---|
| `--content-max` | `1280px` | — |
| `--content-gutter` | `2rem` | `1rem` below 600px, `1.25rem` below 900px |
| `--section-pad-y` | `7.5rem` | `3rem` below 600px, `4rem` below 900px |

The standard section shell is:

```tsx
<section className="border-b border-gold-500/15 bg-bg-primary">
  <div className="mx-auto w-full max-w-(--content-max) px-(--content-gutter) py-(--section-pad-y)">
    …
  </div>
</section>
```

Or use the `<Section>` / `<SectionHeader>` primitives in
`components/shared/Section.tsx`.

---

## Motion

| Token | Value |
|---|---|
| `--ease-royal` | `cubic-bezier(0.22, 1, 0.36, 1)` |

This single easing curve is used everywhere. Durations cluster around
`300ms` for interactive micro-motion (hover, active, focus transitions)
and `500–700ms` for scroll-triggered reveals.

### Motion primitives

`components/shared/Reveal.tsx` exposes three components:

- `<Reveal>` — fade-up on scroll-into-view. Props: `delay`, `duration`,
  `distance`, `once`, `amount`.
- `<Stagger>` + `<StaggerItem>` — sequenced fade-up for lists.
- All three honour `prefers-reduced-motion` and skip animation when set.

Prefer these over ad-hoc `whileInView` calls — they've been built to
avoid the SSR hydration flash and work correctly with Turbopack's
client-component boundaries.

---

## Borders, shadows, radii

- **Corner radius**: `--radius: 4px`. Buttons and inputs use this
  single value. Cards are square (no radius) — it reads more editorial.
- **Borders**: hairline gold at low opacity.
  `border-gold-500/15` for section dividers, `border-gold-500/30` for
  cards and inputs, `border-gold-500/60` for emphasised containers.
- **No box shadows.** Depth comes from colour and hairline rules, not
  shadow blur. The backdrop glow on heroes uses radial gradients
  inline-styled on an `aria-hidden` div.

---

## Iconography

- **lucide-react** for UI icons (chevrons, menu, close, check).
- **Custom SVG** for brand marks — `components/shared/Filigree.tsx`
  (ornamental flourish used on hero / 404) and the social glyphs in
  `components/shared/SocialIcons.tsx`.
- Use `strokeWidth={1.25}` on icons larger than `h-5` and
  `strokeWidth={1.5}` or `2` on smaller icons — the default Lucide
  stroke (2px) looks heavy on the serif layout.

---

## Tailwind / token cheat-sheet

| Tailwind | CSS var |
|---|---|
| `bg-bg-primary` | `--color-bg-primary` |
| `text-ink` | `--color-text-on-dark` |
| `text-ink-muted` | `--color-text-on-dark-muted` |
| `bg-gold-500` | `--color-gold-500` |
| `font-display` | `--font-cormorant` |
| `font-body` | `--font-lora` |
| `font-stat` | `--font-playfair` |
| `max-w-(--content-max)` | `--content-max` |
| `px-(--content-gutter)` | `--content-gutter` |
| `py-(--section-pad-y)` | `--section-pad-y` |

---

## Extending the palette

Adding a new token is a two-step process:

1. Declare the CSS variable in `styles/tokens.css`.
2. Map it to a Tailwind utility by adding it to the `@theme inline`
   block in `app/globals.css`. Without step 2, the variable exists but
   `bg-your-token` won't work.
