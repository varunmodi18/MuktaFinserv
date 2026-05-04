import { EyebrowLabel } from "@/components/shared/EyebrowLabel";
import { Filigree } from "@/components/shared/Filigree";
import { DropCap } from "@/components/shared/DropCap";
import { CountUp } from "@/components/shared/CountUp";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardLink,
  CardEyebrow,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";

/**
 * Dev showcase — visible at /dev/components.
 * Delete this directory before deploy (Phase 9).
 */
export default function ComponentsDevPage() {
  return (
    <div className="mx-auto w-full max-w-(--content-max) px-(--content-gutter) pt-32 pb-24">
      <header className="mb-20 flex flex-col items-start gap-6">
        <EyebrowLabel>Internal · Phase 2</EyebrowLabel>
        <h1 className="font-display text-5xl text-ink md:text-6xl">
          Component Showcase
        </h1>
        <p className="font-body max-w-2xl text-ink-muted md:text-lg">
          Visual reference for the shared primitives that compose every page.
          This route is for development only and ships out before launch.
        </p>
      </header>

      <Section title="EyebrowLabel">
        <div className="flex flex-col gap-6">
          <EyebrowLabel>Default · Gold · Left</EyebrowLabel>
          <EyebrowLabel align="center">Centered Variant</EyebrowLabel>
          <EyebrowLabel withRule={false}>Without Rule</EyebrowLabel>
        </div>
      </Section>

      <Section title="Filigree">
        <div className="flex flex-col items-center gap-6">
          <Filigree />
          <Filigree size={140} />
          <Filigree size={200} />
        </div>
      </Section>

      <Section title="DropCap">
        <DropCap>
          Aparigraha Enterprises was founded on the conviction that wealth deserves the
          quiet rigour of long-term thinking. We partner with discerning
          families to build portfolios that mature across generations, not
          quarters. Our practice is private, our process is measured, and our
          accountability to clients is absolute.
        </DropCap>
      </Section>

      <Section title="CountUp">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          <Stat label="Assets Under Advice" value={1250} prefix="₹" suffix=" Cr" />
          <Stat label="Families Served" value={450} suffix="+" />
          <Stat label="Years of Experience" value={20} suffix="+" />
          <Stat label="Cities" value={12} />
        </div>
      </Section>

      <Section title="Buttons">
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="primary" withArrow>
            Primary w/ arrow
          </Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="secondary" withArrow>
            Secondary w/ arrow
          </Button>
          <Button variant="ghost">Ghost link</Button>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary" size="md">
            Medium
          </Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Button variant="primary" href="/contact">
            As Next.js Link
          </Button>
          <Button variant="secondary" href="https://example.com" external>
            External link
          </Button>
        </div>
      </Section>

      <Section title="Card">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardEyebrow>Service</CardEyebrow>
            <CardTitle className="mt-4">Mutual Funds</CardTitle>
            <CardDescription className="mt-3">
              Curated portfolios across equity, debt, and hybrid funds, aligned
              to your goals and reviewed quarterly.
            </CardDescription>
          </Card>
          <CardLink href="/services/insurance" ariaLabel="Insurance services">
            <CardEyebrow>Service</CardEyebrow>
            <CardTitle className="mt-4">Insurance</CardTitle>
            <CardDescription className="mt-3">
              Term, health, and asset cover sized to your liabilities and family
              obligations — no product pushes.
            </CardDescription>
          </CardLink>
          <Card surface="cream">
            <CardEyebrow className="text-gold-700">On Cream</CardEyebrow>
            <CardTitle className="mt-4 text-ink-inverse group-hover:text-ink-inverse">
              Editorial Card
            </CardTitle>
            <CardDescription className="mt-3 text-ink-inverse-muted">
              For warm light sections — Philosophy, Testimonials, Blog teasers.
            </CardDescription>
          </Card>
        </div>
      </Section>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-24">
      <div className="mb-8 flex items-center gap-4">
        <span className="font-caption text-[0.7rem] tracking-[0.2em] uppercase text-gold-500">
          {title}
        </span>
        <span aria-hidden="true" className="h-px flex-1 bg-gold-500/15" />
      </div>
      {children}
    </section>
  );
}

function Stat({
  label,
  value,
  prefix,
  suffix,
}: {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <CountUp
        to={value}
        prefix={prefix}
        suffix={suffix}
        className="text-5xl md:text-6xl"
      />
      <span className="font-body text-[0.7rem] tracking-[0.18em] uppercase text-ink-muted">
        {label}
      </span>
    </div>
  );
}
