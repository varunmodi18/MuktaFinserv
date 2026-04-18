import { cn } from "@/lib/cn";

type DropCapProps = {
  children: string;
  className?: string;
  tone?: "gold" | "ink";
};

/**
 * Wraps the first character of a paragraph in a large serif drop-cap.
 * Pass a string only; we split off the first character so the rest can flow
 * naturally with `float`.
 */
export function DropCap({ children, className, tone = "gold" }: DropCapProps) {
  const first = children.charAt(0);
  const rest = children.slice(1);
  const colour = tone === "gold" ? "text-gold-500" : "text-ink";

  return (
    <p className={cn("font-body text-base text-ink leading-relaxed md:text-lg", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "font-display float-left mr-3 mt-1 text-[4.25rem] leading-[0.85] tracking-tight",
          colour
        )}
      >
        {first}
      </span>
      <span>{rest}</span>
    </p>
  );
}
