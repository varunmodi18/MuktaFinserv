import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  TwitterIcon,
} from "@/components/shared/SocialIcons";
import { NewsletterForm } from "@/components/contact/NewsletterForm";

const socialLinks = [
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: siteConfig.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: siteConfig.social.youtube, label: "YouTube", Icon: YoutubeIcon },
  { href: siteConfig.social.twitter, label: "Twitter", Icon: TwitterIcon },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-gold-500/15 bg-bg-secondary text-ink-muted">
      <div className="mx-auto w-full max-w-(--content-max) px-(--content-gutter) py-20">
        {/* Newsletter strip */}
        <div className="grid grid-cols-1 items-start gap-10 border-b border-gold-500/15 pb-12 md:grid-cols-[1fr_auto] md:gap-16">
          <div className="max-w-xl">
            <p className="font-caption text-[0.7rem] tracking-[0.22em] uppercase text-gold-300">
              The Quarterly Note
            </p>
            <h2 className="mt-3 font-display text-2xl leading-tight text-ink md:text-3xl">
              Read what we write before it reaches clients.
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-ink-muted">
              Four letters a year. House view, selected reading, and the
              occasional correction. No promotions, ever.
            </p>
          </div>
          <div className="w-full md:w-[420px]">
            <NewsletterForm />
          </div>
        </div>

        {/* Main 4-column grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand block */}
          <div>
            <span className="font-display text-2xl text-ink">
              {siteConfig.shortName}
            </span>
            <div
              aria-hidden="true"
              className="mt-2 h-px w-10 bg-gold-500"
            />
            <p className="mt-6 max-w-xs font-body text-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <ul className="mt-6 flex items-center gap-4">
              {socialLinks.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center border border-gold-500/30 text-gold-300 transition-colors hover:border-gold-500 hover:bg-gold-500/10 hover:text-gold-100"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.25} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <FooterColumn title="Navigate">
            {siteConfig.primaryNav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
            <FooterLink href={siteConfig.ctas.secondary.href}>
              {siteConfig.ctas.secondary.label}
            </FooterLink>
          </FooterColumn>

          {/* Services */}
          <FooterColumn title="Services">
            {siteConfig.services.slice(0, 6).map((s) => (
              <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                {s.label}
              </FooterLink>
            ))}
            <FooterLink href="/services">All Services →</FooterLink>
          </FooterColumn>

          {/* Contact */}
          <FooterColumn title="Contact">
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-body text-sm text-ink transition-colors hover:text-gold-300"
              >
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.contact.phoneHref}
                className="font-body text-sm text-ink transition-colors hover:text-gold-300"
              >
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="font-body text-sm leading-relaxed">
              {siteConfig.contact.address.line1}
              <br />
              {siteConfig.contact.address.line2}
              <br />
              {siteConfig.contact.address.country}
            </li>
          </FooterColumn>
        </div>

        {/* Regulatory disclosure block */}
        <div className="mt-16 border-t border-gold-500/15 pt-10">
          <p className="font-caption text-[0.7rem] tracking-[0.18em] uppercase text-gold-300">
            Regulatory Disclosure
          </p>
          <p className="mt-4 max-w-4xl font-body text-xs leading-relaxed text-ink-muted">
            {siteConfig.regulatory.riskWarning}
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-body text-xs text-ink-muted">
            <span>
              AMFI ARN:{" "}
              <span className="text-gold-300">
                {siteConfig.regulatory.arnNumber}
              </span>
            </span>
            <span>
              Valid through:{" "}
              <span className="text-gold-300">
                {siteConfig.regulatory.arnValidThrough}
              </span>
            </span>
            <span>
              LLP CIN:{" "}
              <span className="text-gold-300">
                {siteConfig.regulatory.cinNumber}
              </span>
            </span>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-gold-500/10 pt-6 md:flex-row md:items-center">
          <p className="font-body text-xs text-ink-muted">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {siteConfig.legal.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="font-body text-xs text-ink-muted transition-colors hover:text-gold-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-caption text-[0.7rem] tracking-[0.18em] uppercase text-gold-300">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="font-body text-sm text-ink transition-colors hover:text-gold-300"
      >
        {children}
      </Link>
    </li>
  );
}
