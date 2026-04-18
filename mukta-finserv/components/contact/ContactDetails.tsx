import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function ContactDetails() {
  return (
    <div className="flex flex-col gap-10">
      <DetailBlock
        Icon={Phone}
        eyebrow="Direct Line"
        title={siteConfig.contact.phone}
        href={siteConfig.contact.phoneHref}
        hint="Partner hours, Mon–Fri"
      />
      <DetailBlock
        Icon={Mail}
        eyebrow="Email"
        title={siteConfig.contact.email}
        href={`mailto:${siteConfig.contact.email}`}
        hint="One business day response"
      />
      <DetailBlock
        Icon={MessageCircle}
        eyebrow="WhatsApp"
        title={siteConfig.contact.whatsapp}
        href={siteConfig.contact.whatsappHref}
        hint="For existing clients"
      />
      <DetailBlock
        Icon={MapPin}
        eyebrow="Office"
        title={siteConfig.contact.address.line1}
        hint={`${siteConfig.contact.address.line2} · ${siteConfig.contact.address.country}`}
      />
    </div>
  );
}

function DetailBlock({
  Icon,
  eyebrow,
  title,
  href,
  hint,
}: {
  Icon: React.ComponentType<{
    className?: string;
    strokeWidth?: number;
    "aria-hidden"?: boolean;
  }>;
  eyebrow: string;
  title: string;
  href?: string;
  hint?: string;
}) {
  const body = (
    <div className="flex items-start gap-5 border-l border-gold-500/30 pl-6">
      <Icon
        className="mt-1 h-5 w-5 shrink-0 text-gold-500"
        strokeWidth={1.25}
        aria-hidden
      />
      <div className="flex flex-col gap-1">
        <span className="font-caption text-[0.68rem] tracking-[0.2em] uppercase text-gold-300">
          {eyebrow}
        </span>
        <span className="font-display text-xl leading-tight text-ink md:text-2xl">
          {title}
        </span>
        {hint ? (
          <span className="font-body text-sm text-ink-muted">{hint}</span>
        ) : null}
      </div>
    </div>
  );
  if (href) {
    return (
      <a
        href={href}
        className="group block transition-colors"
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {body}
      </a>
    );
  }
  return body;
}
