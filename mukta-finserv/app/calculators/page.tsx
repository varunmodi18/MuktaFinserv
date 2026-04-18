import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/shared/Section";
import { EyebrowLabel } from "@/components/shared/EyebrowLabel";
import { CTABand } from "@/components/home/CTABand";
import { calculators } from "@/lib/calculators";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Calculators",
  description:
    "Quiet, accurate calculators for SIP, step-up SIP, lumpsum, retirement, EMI, education, marriage, and future value.",
  path: "/calculators",
});

export default function CalculatorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gold-500/15 bg-bg-primary">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 20% 10%, rgba(212,175,55,0.12) 0%, transparent 55%)",
          }}
        />
        <div className="mx-auto w-full max-w-(--content-max) px-(--content-gutter) pt-28 pb-20 md:pt-36 md:pb-28">
          <EyebrowLabel>Resources</EyebrowLabel>
          <h1 className="font-display mt-6 max-w-4xl text-[clamp(2.75rem,5vw+1rem,5.5rem)] leading-[1.02] tracking-tight text-ink">
            Calculators.
          </h1>
          <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-ink-muted md:text-xl">
            A small set of tools, each one doing a single thing accurately.
            Useful as conversation starters — but no substitute for a plan that
            accounts for taxes, behaviour, and the rest of your life.
          </p>
        </div>
      </section>

      {/* Grid */}
      <Section surface="secondary" tone="dark">
        <SectionHeader
          eyebrow="Tools"
          title="Eight calculators, one discipline."
          intro="Move the inputs. See the shape of the answer. Then call us for what the numbers don't capture."
        />
        <ul className="mt-16 grid grid-cols-1 gap-px bg-gold-500/15 md:grid-cols-2">
          {calculators.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/calculators/${c.slug}`}
                className="group relative flex h-full flex-col gap-5 bg-bg-primary p-10 transition-colors hover:bg-bg-tertiary"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-caption text-[0.7rem] tracking-[0.2em] uppercase text-gold-300">
                    {c.eyebrow}
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-ink-muted transition-colors group-hover:text-gold-300"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display text-3xl leading-tight text-ink group-hover:text-gold-100">
                  {c.label}
                </h3>
                <p className="font-body text-[0.95rem] leading-relaxed text-ink-muted">
                  {c.blurb}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CTABand />
    </>
  );
}
