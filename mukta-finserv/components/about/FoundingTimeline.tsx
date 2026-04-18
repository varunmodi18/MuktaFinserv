import { foundingTimeline } from "@/content/about";

export function FoundingTimeline() {
  return (
    <ol className="relative mx-auto max-w-3xl">
      {/* Vertical connector */}
      <span
        aria-hidden="true"
        className="absolute left-6 top-2 bottom-2 w-px bg-gold-500/30 md:left-8"
      />

      {foundingTimeline.map((event, i) => (
        <li key={i} className="relative grid grid-cols-[3rem_1fr] gap-6 pb-12 last:pb-0 md:grid-cols-[4rem_1fr] md:gap-8">
          {/* Node */}
          <div className="relative flex items-start justify-start pt-1">
            <span className="relative z-10 flex h-12 w-12 items-center justify-center border border-gold-500/50 bg-bg-primary md:h-16 md:w-16">
              <span className="font-stat text-[0.9rem] leading-none text-gold-500 md:text-[0.95rem]">
                {event.year}
              </span>
            </span>
          </div>

          {/* Content */}
          <div className="pb-2">
            <h3 className="font-display text-2xl leading-tight text-ink md:text-3xl">
              {event.title}
            </h3>
            <p className="mt-3 font-body text-[0.95rem] leading-relaxed text-ink-muted md:text-base">
              {event.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
