export default function Loading() {
  return (
    <section className="bg-bg-primary">
      <div className="mx-auto w-full max-w-(--content-max) px-(--content-gutter) pt-32 pb-24 md:pt-40">
        <div className="flex flex-col gap-5">
          <Shimmer className="h-3 w-28" />
          <Shimmer className="h-16 w-full max-w-3xl md:h-20" />
          <Shimmer className="h-16 w-3/4 max-w-2xl md:h-20" />
          <Shimmer className="mt-4 h-4 w-full max-w-xl" />
          <Shimmer className="h-4 w-5/6 max-w-lg" />
        </div>
        <div className="mt-16 border-t border-gold-500/15 pt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-col gap-3">
                <Shimmer className="h-3 w-20" />
                <Shimmer className="h-8 w-3/4" />
                <Shimmer className="h-3 w-full" />
                <Shimmer className="h-3 w-5/6" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <span className="sr-only" role="status" aria-live="polite">
        Loading content
      </span>
    </section>
  );
}

function Shimmer({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`relative block overflow-hidden bg-gold-500/5 ${className ?? ""}`}
    >
      <span
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold-500/15 to-transparent"
        style={{
          animation: "shimmer 1.8s cubic-bezier(0.22, 1, 0.36, 1) infinite",
        }}
      />
    </span>
  );
}
