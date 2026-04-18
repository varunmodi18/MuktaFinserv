import { Calculator, FileText, MessageCircle } from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/Section";
import {
  CardLink,
  CardEyebrow,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";

type Teaser = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  Icon: React.ComponentType<{
    className?: string;
    strokeWidth?: number;
    "aria-hidden"?: boolean;
  }>;
};

const teasers: Teaser[] = [
  {
    href: "/blog/the-quiet-discipline-of-asset-allocation",
    eyebrow: "Latest Insight",
    title: "The Quiet Discipline of Asset Allocation",
    description:
      "Why mix matters more than the manager — and how we set the long-term defaults that survive the next bear market.",
    Icon: FileText,
  },
  {
    href: "/calculators/sip",
    eyebrow: "Featured Calculator",
    title: "SIP Growth Calculator",
    description:
      "Model the long-arc impact of a monthly SIP. Adjust amount, tenure, and expected return to see the path.",
    Icon: Calculator,
  },
  {
    href: "/faq",
    eyebrow: "Common Question",
    title: "Regular vs Direct Mutual Funds — what is the real cost?",
    description:
      "A plain-language breakdown of trail commissions, advisory value, and when each route makes sense.",
    Icon: MessageCircle,
  },
];

export function ResourcesTeaser() {
  return (
    <Section surface="primary" tone="dark">
      <SectionHeader
        eyebrow="Resources"
        title="Read, model, decide."
        intro="Insights, calculators, and answers — published openly so you can think clearly about your wealth."
      />

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {teasers.map(({ href, eyebrow, title, description, Icon }) => (
          <CardLink key={href} href={href} ariaLabel={title}>
            <Icon
              className="h-9 w-9 text-gold-500"
              strokeWidth={1.25}
              aria-hidden
            />
            <CardEyebrow className="mt-6 block">{eyebrow}</CardEyebrow>
            <CardTitle className="mt-3 text-xl">{title}</CardTitle>
            <CardDescription className="mt-3">{description}</CardDescription>
            <span className="mt-6 inline-flex items-center gap-2 font-body text-[0.8rem] tracking-[0.18em] uppercase text-gold-300">
              Read More
              <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                →
              </span>
            </span>
          </CardLink>
        ))}
      </div>
    </Section>
  );
}
