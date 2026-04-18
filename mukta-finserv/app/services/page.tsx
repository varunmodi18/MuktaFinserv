import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/Section";
import { EyebrowLabel } from "@/components/shared/EyebrowLabel";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/home/CTABand";
import { servicesSummary } from "@/content/services-summary";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Eight practice areas — mutual funds, insurance, PMS, estate planning, tax, retirement, NRI services, and goal-based investing — delivered by a single partner-led team.",
  path: "/services",
});

export default function ServicesIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gold-500/15 bg-bg-primary">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 70% 20%, rgba(212,175,55,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="mx-auto w-full max-w-(--content-max) px-(--content-gutter) pt-28 pb-16 md:pt-36 md:pb-24">
          <EyebrowLabel>Our Services</EyebrowLabel>
          <h1 className="font-display mt-6 max-w-4xl text-[clamp(2.75rem,5vw+1rem,5.5rem)] leading-[1.02] tracking-tight text-ink">
            Solutions tailored to your life's goals.
          </h1>
          <p className="font-body mt-8 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            Each practice area stands on its own. More often than not, we
            coordinate two or three of them into a single plan so nothing you
            own is working against anything else you own.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="primary" withArrow>
              Schedule a Consultation
            </Button>
            <Button href="#practice-areas" variant="secondary">
              Explore Practice Areas
            </Button>
          </div>
        </div>
      </section>

      {/* Practice areas grid — larger cards with photo/image slot */}
      <Section surface="primary" tone="dark" id="practice-areas">
        <SectionHeader
          eyebrow="Practice Areas"
          title="Eight disciplines, one team."
          intro="Click any card to read the full brief — what we offer, who it suits, how we execute, and answers to the questions that come up first."
        />

        <ul className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {servicesSummary.map(({ slug, label, blurb, Icon }) => (
            <li key={slug}>
              <a
                href={`/services/${slug}`}
                className="group block border border-gold-500/15 bg-bg-secondary p-10 transition-[border-color,background-color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-gold-500/60"
              >
                <div className="flex items-start justify-between">
                  <Icon
                    className="h-10 w-10 text-gold-500"
                    strokeWidth={1.25}
                    aria-hidden
                  />
                  <ArrowUpRight
                    className="h-5 w-5 text-ink-muted transition-[transform,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:text-gold-300"
                    strokeWidth={1.25}
                    aria-hidden
                  />
                </div>
                <h3 className="font-display mt-8 text-3xl leading-tight text-ink group-hover:text-gold-100">
                  {label}
                </h3>
                <p className="font-body mt-4 max-w-xl text-[0.98rem] leading-relaxed text-ink-muted">
                  {blurb}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 font-body text-[0.8rem] tracking-[0.18em] uppercase text-gold-300">
                  Read the Brief
                  <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <CTABand />
    </>
  );
}
