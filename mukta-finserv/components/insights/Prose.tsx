import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Editorial typography wrapper for long-form blog content.
 * Child JSX should use standard HTML elements — styles flow via descendant selectors.
 */
export function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "font-body text-ink-muted",
        "[&>p]:mt-5 [&>p]:text-lg [&>p]:leading-[1.8]",
        "[&>h2]:mt-16 [&>h2]:mb-4 [&>h2]:font-display [&>h2]:text-3xl [&>h2]:leading-tight [&>h2]:text-ink md:[&>h2]:text-4xl",
        "[&>h3]:mt-12 [&>h3]:mb-3 [&>h3]:font-display [&>h3]:text-2xl [&>h3]:leading-tight [&>h3]:text-ink",
        "[&>ul]:mt-5 [&>ul]:space-y-2 [&>ul]:pl-6 [&>ul>li]:relative [&>ul>li]:text-lg [&>ul>li]:leading-relaxed",
        "[&>ol]:mt-5 [&>ol]:space-y-2 [&>ol]:pl-6 [&>ol>li]:text-lg [&>ol>li]:leading-relaxed [&>ol]:list-[lower-roman] [&>ol]:marker:text-gold-500",
        "[&>ul>li]:before:absolute [&>ul>li]:before:-left-5 [&>ul>li]:before:top-[0.75em] [&>ul>li]:before:h-px [&>ul>li]:before:w-3 [&>ul>li]:before:bg-gold-500",
        "[&>blockquote]:my-12 [&>blockquote]:border-l-2 [&>blockquote]:border-gold-500 [&>blockquote]:pl-8 [&>blockquote]:font-display [&>blockquote]:text-2xl [&>blockquote]:leading-tight [&>blockquote]:text-ink md:[&>blockquote]:text-3xl",
        "[&_strong]:font-semibold [&_strong]:text-ink",
        "[&_em]:italic [&_em]:text-ink",
        "[&_a]:text-gold-300 [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-gold-500/40 hover:[&_a]:decoration-gold-500",
        "[&>hr]:my-16 [&>hr]:border-0 [&>hr]:h-px [&>hr]:bg-gold-500/20",
        className,
      )}
    >
      {children}
    </div>
  );
}
