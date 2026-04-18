import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { EyebrowLabel } from "@/components/shared/EyebrowLabel";
import { Reveal } from "@/components/shared/Reveal";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-bg-primary"
    >
      {/* Layered backdrop */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {/* Warm radial glow at top-right */}
        <div
          className="absolute -top-1/3 right-[-15%] h-[80vh] w-[80vh] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.08) 40%, transparent 70%)",
          }}
        />
        {/* Bottom horizon glow */}
        <div
          className="absolute inset-x-0 bottom-0 h-[40vh]"
          style={{
            background:
              "linear-gradient(to top, rgba(31,27,22,0.7) 0%, transparent 100%)",
          }}
        />
        {/* Faint gold dust noise */}
        <div
          className="absolute inset-0 opacity-[0.07] mix-blend-screen"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.83  0 0 0 0 0.69  0 0 0 0 0.22  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            backgroundSize: "240px 240px",
          }}
        />
        {/* Subtle vertical hairline divisions evoking marble */}
        <div
          className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 opacity-30"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(212,175,55,0.25) 30%, rgba(212,175,55,0.25) 70%, transparent 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="mx-auto flex min-h-[100svh] w-full max-w-(--content-max) flex-col justify-between px-(--content-gutter) pb-10 pt-32 md:pt-40">
        {/* Top: brand affirmation strip */}
        <div className="flex items-center justify-between text-[0.7rem] tracking-[0.2em] uppercase text-ink-muted">
          <span className="font-body">Est. {new Date().getFullYear()}</span>
          <span className="hidden font-body sm:inline">
            Mumbai · Pune · Bengaluru
          </span>
        </div>

        {/* Centre: headline */}
        <div className="flex flex-1 flex-col items-start justify-center py-16">
          <Reveal duration={0.6}>
            <EyebrowLabel>{siteConfig.name}</EyebrowLabel>
          </Reveal>
          <Reveal delay={0.1} duration={0.8} distance={28}>
            <h1
              id="hero-heading"
              className="font-display mt-8 text-[clamp(3rem,7vw+1rem,6.5rem)] leading-[0.98] tracking-[-0.012em] text-ink"
            >
              Wealth,
              <br />
              <span className="text-gold-300">Refined</span> for Generations.
            </h1>
          </Reveal>
          <Reveal delay={0.25} duration={0.7}>
            <p className="font-body mt-8 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
              A private wealth practice for families and professionals who measure
              success in decades — built on patient research, plain-spoken advice,
              and unhurried execution.
            </p>
          </Reveal>
          <Reveal delay={0.4} duration={0.6}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button variant="primary" href="/contact" withArrow size="lg">
                Begin Your Journey
              </Button>
              <Button variant="secondary" href="/services" size="lg">
                Explore Services
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Bottom: registration badges */}
        <div className="flex flex-col items-start gap-4 border-t border-gold-500/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-[0.7rem] tracking-[0.18em] uppercase text-ink-muted">
            AMFI ARN: {siteConfig.regulatory.arnNumber}
            <span className="mx-3 text-gold-500/40">·</span>
            LLP CIN: {siteConfig.regulatory.cinNumber}
          </p>
          <div className="flex items-center gap-3 text-[0.7rem] tracking-[0.18em] uppercase text-ink-muted">
            <span>Scroll</span>
            <span
              aria-hidden="true"
              className="block h-px w-10 bg-gold-500/60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
