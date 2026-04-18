import { Section } from "@/components/shared/Section";
import { EyebrowLabel } from "@/components/shared/EyebrowLabel";
import { DropCap } from "@/components/shared/DropCap";
import { Button } from "@/components/ui/Button";
import { Filigree } from "@/components/shared/Filigree";

export function BrandStory() {
  return (
    <Section surface="primary" tone="dark">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
        {/* Left: editorial text */}
        <div className="lg:col-span-7">
          <EyebrowLabel>The Mukta Approach</EyebrowLabel>
          <h2 className="font-display mt-6 text-4xl leading-[1.1] tracking-tight text-ink md:text-5xl">
            Built for the families who measure success in decades.
          </h2>
          <div className="mt-8 max-w-xl">
            <DropCap>
              Mukta Finserv was founded on the conviction that wealth deserves
              the quiet rigour of long-term thinking. We partner with discerning
              families to build portfolios that mature across generations, not
              quarters. Our practice is private, our process is measured, and
              our accountability to clients is absolute.
            </DropCap>
          </div>
          <div className="mt-10">
            <Button variant="ghost" href="/about" withArrow>
              Read Our Story
            </Button>
          </div>
        </div>

        {/* Right: ornament panel */}
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius)] border border-gold-500/20 bg-bg-tertiary">
            {/* Decorative inner frame */}
            <div className="absolute inset-6 border border-gold-500/15" />
            {/* Centred ornament */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-8 text-center">
              <Filigree size={120} />
              <p className="font-display text-3xl leading-tight text-ink md:text-4xl">
                &ldquo;Wealth, refined.&rdquo;
              </p>
              <span className="font-body text-[0.7rem] tracking-[0.25em] uppercase text-gold-300">
                — House Motto
              </span>
            </div>
            {/* Subtle vignette */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
