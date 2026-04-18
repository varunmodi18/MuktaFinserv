import { cn } from "@/lib/cn";

type EyebrowLabelProps = {
  children: React.ReactNode;
  tone?: "gold" | "ink" | "ink-inverse";
  className?: string;
  withRule?: boolean;
  align?: "left" | "center";
};

const toneClass = {
  gold: "text-gold-500",
  ink: "text-ink-muted",
  "ink-inverse": "text-ink-inverse-muted",
} as const;

export function EyebrowLabel({
  children,
  tone = "gold",
  className,
  withRule = true,
  align = "left",
}: EyebrowLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span
        className={cn(
          "font-body text-[0.8125rem] font-medium uppercase tracking-[0.18em]",
          toneClass[tone]
        )}
      >
        {children}
      </span>
      {withRule ? (
        <span aria-hidden="true" className="h-px w-10 bg-gold-500/70" />
      ) : null}
    </div>
  );
}
