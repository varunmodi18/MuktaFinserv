import { cn } from "@/lib/cn";

type Props = {
  label: string;
  value: string;
  sublabel?: string;
  accent?: "gold" | "ink";
  className?: string;
};

export function ResultStat({
  label,
  value,
  sublabel,
  accent = "ink",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 border-l border-gold-500/30 pl-5",
        className,
      )}
    >
      <span className="font-caption text-[0.65rem] tracking-[0.22em] uppercase text-ink-muted">
        {label}
      </span>
      <span
        className={cn(
          "font-stat text-3xl leading-none md:text-4xl",
          accent === "gold" ? "text-gold-300" : "text-ink",
        )}
      >
        {value}
      </span>
      {sublabel ? (
        <span className="font-body text-xs text-ink-muted">{sublabel}</span>
      ) : null}
    </div>
  );
}
