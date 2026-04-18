import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Wordmark({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const ink = tone === "light" ? "text-ink" : "text-ink-inverse";
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — Home`}
      className={cn("group inline-flex flex-col leading-none", className)}
    >
      <span
        className={cn(
          "font-display text-[1.5rem] tracking-[0.01em] transition-colors",
          ink
        )}
      >
        {siteConfig.shortName}
      </span>
      <span
        aria-hidden="true"
        className="mt-1 h-px w-8 bg-gold-500 transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-12"
      />
    </Link>
  );
}
