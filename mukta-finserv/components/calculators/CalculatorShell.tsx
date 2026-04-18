import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/services/Breadcrumb";
import { EyebrowLabel } from "@/components/shared/EyebrowLabel";
import type { CalculatorMeta } from "@/lib/calculators";

type Props = {
  meta: CalculatorMeta;
  form: ReactNode;
  result: ReactNode;
};

export function CalculatorShell({ meta, form, result }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gold-500/15 bg-bg-primary">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 20% 10%, rgba(212,175,55,0.12) 0%, transparent 50%)",
          }}
        />
        <div className="mx-auto w-full max-w-(--content-max) px-(--content-gutter) pt-28 pb-16 md:pt-36 md:pb-20">
          <Breadcrumb
            items={[
              { href: "/", label: "Home" },
              { href: "/calculators", label: "Calculators" },
              { label: meta.label },
            ]}
          />
          <div className="mt-10 max-w-3xl">
            <EyebrowLabel>{meta.eyebrow}</EyebrowLabel>
            <h1 className="font-display mt-5 text-[clamp(2.25rem,4vw+1rem,4.25rem)] leading-[1.05] tracking-tight text-ink">
              {meta.label}
            </h1>
            <p className="mt-6 font-body text-base leading-relaxed text-ink-muted md:text-lg">
              {meta.blurb}
            </p>
          </div>
        </div>
      </section>

      {/* Workspace */}
      <section className="border-b border-gold-500/15 bg-bg-secondary">
        <div className="mx-auto w-full max-w-(--content-max) px-(--content-gutter) py-16 md:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <aside className="lg:col-span-5">
              <div className="border border-gold-500/20 bg-bg-primary p-8">
                <h2 className="font-caption text-[0.7rem] tracking-[0.22em] uppercase text-gold-300">
                  Inputs
                </h2>
                <div className="mt-8">{form}</div>
              </div>
            </aside>
            <div className="lg:col-span-7">{result}</div>
          </div>
        </div>
      </section>
    </>
  );
}
