/**
 * Mukta Finserv — central site configuration.
 * Edit brand metadata, nav, services list, regulatory text, and contact info here.
 * Anything that surfaces in more than one component should live in this file.
 */

export const siteConfig = {
  name: "Mukta Finserv LLP",
  shortName: "Mukta Finserv",
  tagline: "Wealth, Refined.",
  description:
    "Premium wealth management, mutual-fund distribution, and financial advisory for HNIs, professionals, and NRIs.",
  url: "https://muktafinserv.in",

  contact: {
    email: "info@muktafinserv.in",
    phone: "+91 00000 00000",
    phoneHref: "tel:+910000000000",
    whatsapp: "+91 00000 00000",
    whatsappHref: "https://wa.me/910000000000",
    address: {
      line1: "Registered Office Address Line 1",
      line2: "Line 2, City, State PIN",
      country: "India",
    },
  },

  social: {
    linkedin: "https://www.linkedin.com/company/mukta-finserv",
    instagram: "https://www.instagram.com/muktafinserv",
    youtube: "https://www.youtube.com/@muktafinserv",
    twitter: "https://twitter.com/muktafinserv",
  },

  regulatory: {
    arnNumber: "ARN-XXXXXX",
    arnValidThrough: "DD-MM-YYYY",
    cinNumber: "AAA-0000",
    riskWarning:
      "Mutual Fund investments are subject to market risks. Read all scheme related documents carefully before investing. Past performance is not indicative of future results. Mukta Finserv LLP is an AMFI-registered Mutual Fund Distributor (ARN: XXXXXX, valid through DD-MM-YYYY). We deal in Regular Plans only and earn trailing commissions on client investments. Commission disclosure is provided to clients at the time of investment.",
  },

  primaryNav: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ] as const,

  services: [
    { slug: "mutual-funds", label: "Mutual Funds" },
    { slug: "insurance", label: "Insurance" },
    { slug: "pms-aif", label: "PMS / AIF" },
    { slug: "estate-planning", label: "Estate & Will Planning" },
    { slug: "tax-planning", label: "Tax Planning" },
    { slug: "retirement-planning", label: "Retirement Planning" },
    { slug: "nri-services", label: "NRI Services" },
    { slug: "goal-based-investing", label: "Goal-Based Investing" },
  ] as const,

  resources: [
    { slug: "calculators", label: "Calculators" },
    { slug: "blog", label: "Insights" },
    { slug: "faq", label: "FAQs" },
  ] as const,

  legal: [
    { label: "Disclaimer", href: "/legal/disclaimer", external: false },
    { label: "Privacy Policy", href: "/legal/privacy", external: false },
    { label: "Disclosure", href: "/legal/disclosure", external: false },
    { label: "AMFI Risk Factors", href: "/legal/amfi-risk-factors", external: false },
    { label: "SEBI Investor Charter", href: "/legal/investor-charter", external: false },
    { label: "Code of Conduct", href: "/legal/code-of-conduct", external: false },
    { label: "SCORES", href: "https://scores.gov.in/", external: true },
  ] as const,

  ctas: {
    primary: { label: "Schedule Consultation", href: "/contact" },
    secondary: { label: "Investor Login", href: "/login" },
  },
} as const;

export type ServiceSlug = (typeof siteConfig.services)[number]["slug"];
