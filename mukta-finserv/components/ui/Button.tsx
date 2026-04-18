import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-body tracking-[0.02em] " +
  "transition-[background-color,border-color,color,transform] " +
  "duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] " +
  "rounded-[var(--radius)] focus-visible:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-bg-primary disabled:opacity-50 disabled:pointer-events-none";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-bg-primary hover:bg-gold-300 active:bg-gold-600",
  secondary:
    "border border-gold-500/60 text-gold-300 hover:border-gold-500 " +
    "hover:bg-gold-500/10 hover:text-gold-100",
  ghost:
    "text-ink hover:text-gold-300 underline-offset-[6px] hover:underline " +
    "decoration-gold-500/70",
};

const sizeStyles: Record<Size, string> = {
  sm: "text-[0.8125rem] px-4 py-2",
  md: "text-[0.9rem] px-6 py-3",
  lg: "text-[1rem] px-8 py-4",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type AsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type AsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href"> & {
    href: string;
    external?: boolean;
  };

type ButtonProps = AsButton | AsLink;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    withArrow = false,
    className,
    children,
    ...rest
  } = props;

  const cls = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  const inner = (
    <>
      <span>{children}</span>
      {withArrow ? (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      ) : null}
    </>
  );

  if ("href" in rest && rest.href) {
    const { href, external, ...anchorProps } = rest as AsLink;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("group", cls)}
          {...anchorProps}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cn("group", cls)} {...anchorProps}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      className={cn("group", cls)}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {inner}
    </button>
  );
}
