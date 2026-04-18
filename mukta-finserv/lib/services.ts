import type { ServiceSlug } from "./site";
import { siteConfig } from "./site";

export type Persona = {
  title: string;
  description: string;
};

export type ServiceProcessStep = {
  numeral: string;
  title: string;
  body: string;
};

export type ServiceFaq = {
  q: string;
  a: string;
};

export type RelatedCalculator = {
  slug: string;
  label: string;
  description: string;
};

export type ServiceDetail = {
  slug: ServiceSlug;
  label: string;
  eyebrow: string;
  heroIntro: string;
  whatWeOffer: string[];
  personas: Persona[];
  process: ServiceProcessStep[];
  relatedCalculators?: RelatedCalculator[];
  faqs: ServiceFaq[];
};

/** All services in display order (matches siteConfig.services). */
export async function getAllServices(): Promise<ServiceDetail[]> {
  const loaders = siteConfig.services.map(
    ({ slug }) => import(`@/content/services/${slug}`).then((m) => m.default as ServiceDetail)
  );
  return Promise.all(loaders);
}

export async function getServiceBySlug(
  slug: string
): Promise<ServiceDetail | null> {
  const known = siteConfig.services.find((s) => s.slug === slug);
  if (!known) return null;
  const mod = await import(`@/content/services/${known.slug}`);
  return mod.default as ServiceDetail;
}

/** Static slug list for generateStaticParams(). */
export function getAllServiceSlugs(): ServiceSlug[] {
  return siteConfig.services.map((s) => s.slug);
}
