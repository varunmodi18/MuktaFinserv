import { cn } from "@/lib/cn";
import { EyebrowLabel } from "./EyebrowLabel";
import { Filigree } from "./Filigree";
import { Reveal } from "./Reveal";

type Surface = "primary" | "secondary" | "tertiary" | "cream" | "light";
type Tone = "dark" | "light";

const surfaceClass: Record<Surface, string> = {
  primary: "bg-bg-primary",
  secondary: "bg-bg-secondary",
  tertiary: "bg-bg-tertiary",
  cream: "bg-surface-cream",
  light: "bg-surface-light",
};

export type SectionProps = {
  surface?: Surface;
  tone?: Tone;
  id?: string;
  fullBleed?: boolean;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
};

export function Section({
  surface = "primary",
  tone = "dark",
  id,
  fullBleed = false,
  className,
  innerClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      data-tone={tone}
      className={cn(
        "py-(--section-pad-y)",
        surfaceClass[surface],
        tone === "dark" ? "text-ink" : "text-ink-inverse",
        className
      )}
    >
      <div
        className={cn(
          fullBleed
            ? "w-full"
            : "mx-auto w-full max-w-(--content-max) px-(--content-gutter)",
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: Tone;
  withFiligree?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  withFiligree = false,
  className,
}: SectionHeaderProps) {
  const titleColor = tone === "dark" ? "text-ink" : "text-ink-inverse";
  const introColor = tone === "dark" ? "text-ink-muted" : "text-ink-inverse-muted";

  return (
    <Reveal
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {withFiligree ? (
        <Filigree size={align === "center" ? 120 : 96} />
      ) : null}
      {eyebrow ? (
        <EyebrowLabel
          tone={tone === "dark" ? "gold" : "ink-inverse"}
          align={align}
        >
          {eyebrow}
        </EyebrowLabel>
      ) : null}
      <h2
        className={cn(
          "font-display max-w-3xl text-4xl leading-[1.1] tracking-tight md:text-5xl lg:text-[3.5rem]",
          titleColor,
          align === "center" && "mx-auto"
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "font-body max-w-2xl text-base leading-relaxed md:text-lg",
            introColor,
            align === "center" && "mx-auto"
          )}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
