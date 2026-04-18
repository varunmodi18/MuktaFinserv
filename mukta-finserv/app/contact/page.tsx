import type { Metadata } from "next";
import { EyebrowLabel } from "@/components/shared/EyebrowLabel";
import { ConsultationForm } from "@/components/contact/ConsultationForm";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Schedule a consultation with a Mukta Finserv partner. A short conversation, no pitch — just listening.",
  path: "/contact",
});

export default function ContactPage() {
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
        <div className="mx-auto w-full max-w-(--content-max) px-(--content-gutter) pt-28 pb-16 md:pt-36 md:pb-20">
          <EyebrowLabel>Consultation</EyebrowLabel>
          <h1 className="font-display mt-6 max-w-4xl text-[clamp(2.75rem,5vw+1rem,5.5rem)] leading-[1.02] tracking-tight text-ink">
            Let&rsquo;s begin with a conversation.
          </h1>
          <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-ink-muted md:text-xl">
            Forty-five minutes, in person or over video. We listen before we
            suggest anything. No product pitches in the first meeting — and
            no obligation after it, either.
          </p>
        </div>
      </section>

      {/* Workspace */}
      <section className="border-b border-gold-500/15 bg-bg-secondary">
        <div className="mx-auto w-full max-w-(--content-max) px-(--content-gutter) py-16 md:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <ConsultationForm />
            </div>
            <aside className="lg:col-span-4">
              <div className="sticky top-32 flex flex-col gap-10">
                <div>
                  <h2 className="font-caption text-[0.7rem] tracking-[0.22em] uppercase text-gold-300">
                    Or reach us directly
                  </h2>
                  <p className="mt-4 font-body text-sm leading-relaxed text-ink-muted">
                    The form is for the first meeting. For anything else —
                    existing clients, press, empanelments — these are the
                    direct lines.
                  </p>
                </div>
                <ContactDetails />
                <div className="border-t border-gold-500/15 pt-8">
                  <p className="font-caption text-[0.68rem] tracking-[0.2em] uppercase text-gold-300">
                    Discretion
                  </p>
                  <p className="mt-3 font-body text-sm leading-relaxed text-ink-muted">
                    Anything you share here stays between you and the
                    partner you speak with. We do not market to submitted
                    contacts.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
