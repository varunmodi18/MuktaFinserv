import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  surface?: "dark" | "secondary" | "light" | "cream";
  bordered?: boolean;
  hoverGold?: boolean;
};

const surfaceStyles = {
  dark: "bg-bg-primary text-ink",
  secondary: "bg-bg-secondary text-ink",
  light: "bg-surface-light text-ink-inverse",
  cream: "bg-surface-cream text-ink-inverse",
} as const;

export function Card({
  surface = "secondary",
  bordered = true,
  hoverGold = true,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-[var(--radius)] p-8 transition-[border-color,background-color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        surfaceStyles[surface],
        bordered && "border border-gold-500/15",
        hoverGold && "hover:border-gold-500/60",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

type CardLinkProps = Omit<CardProps, "onClick"> & {
  href: string;
  external?: boolean;
  ariaLabel?: string;
};

/**
 * Variant of Card that wraps the entire surface in a link. Used by service
 * grid cards, blog cards, etc.
 */
export function CardLink({
  href,
  external = false,
  ariaLabel,
  surface = "secondary",
  bordered = true,
  hoverGold = true,
  className,
  children,
  ...rest
}: CardLinkProps) {
  const cls = cn(
    "group relative block rounded-[var(--radius)] p-8 transition-[border-color,background-color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
    surfaceStyles[surface],
    bordered && "border border-gold-500/15",
    hoverGold && "hover:border-gold-500/60 hover:-translate-y-0.5",
    className
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={cls}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={cls}>
      {children}
    </Link>
  );
}

export function CardEyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-body text-[0.7rem] tracking-[0.18em] uppercase text-gold-300",
        className
      )}
    >
      {children}
    </span>
  );
}

export function CardTitle({
  children,
  className,
  as: As = "h3",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h2" | "h3" | "h4";
}) {
  return (
    <As
      className={cn(
        "font-display text-2xl leading-tight text-ink group-hover:text-gold-100",
        className
      )}
    >
      {children}
    </As>
  );
}

export function CardDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("font-body text-[0.95rem] text-ink-muted leading-relaxed", className)}>
      {children}
    </p>
  );
}
