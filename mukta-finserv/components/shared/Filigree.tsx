import { cn } from "@/lib/cn";

type FiligreeProps = {
  size?: number;
  className?: string;
  tone?: "gold" | "ink-muted";
};

/**
 * A centred horizontal ornamental flourish — a hairline rule with a
 * lozenge-and-dot motif at the centre. Sits above section H2s.
 */
export function Filigree({
  size = 96,
  className,
  tone = "gold",
}: FiligreeProps) {
  const stroke = tone === "gold" ? "var(--color-gold-500)" : "currentColor";
  return (
    <svg
      role="presentation"
      width={size}
      height={size * 0.16}
      viewBox="0 0 200 32"
      fill="none"
      stroke={stroke}
      strokeWidth={1}
      strokeLinecap="round"
      className={cn("opacity-80", className)}
      aria-hidden="true"
    >
      {/* Left rule */}
      <line x1="4" y1="16" x2="80" y2="16" />
      {/* Centre lozenge */}
      <path d="M88 16 L100 8 L112 16 L100 24 Z" />
      {/* Centre dot */}
      <circle cx="100" cy="16" r="1.4" fill={stroke} stroke="none" />
      {/* Right rule */}
      <line x1="120" y1="16" x2="196" y2="16" />
    </svg>
  );
}
