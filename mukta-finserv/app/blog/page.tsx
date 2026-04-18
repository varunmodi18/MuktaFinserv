import type { Metadata } from "next";
import { EyebrowLabel } from "@/components/shared/EyebrowLabel";
import { Section } from "@/components/shared/Section";
import { CategoryFilter } from "@/components/insights/CategoryFilter";
import { CTABand } from "@/components/home/CTABand";
import { getAllPostSummaries } from "@/lib/insights";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Insights",
  description:
    "Quiet, long-form writing on wealth, markets, and the practice of advice — published openly.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPostSummaries();
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gold-500/15 bg-bg-primary">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 80% 10%, rgba(212,175,55,0.12) 0%, transparent 55%)",
          }}
        />
        <div className="mx-auto w-full max-w-(--content-max) px-(--content-gutter) pt-28 pb-20 md:pt-36 md:pb-28">
          <EyebrowLabel>Journal</EyebrowLabel>
          <h1 className="font-display mt-6 max-w-4xl text-[clamp(2.75rem,5vw+1rem,5.5rem)] leading-[1.02] tracking-tight text-ink">
            Insights.
          </h1>
          <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-ink-muted md:text-xl">
            Long-form writing on how we think about wealth — allocation,
            selection, behaviour, and the quiet parts of the work that make
            the loud parts less consequential.
          </p>
        </div>
      </section>

      <Section surface="primary" tone="dark">
        <CategoryFilter posts={posts} />
      </Section>

      <CTABand />
    </>
  );
}
