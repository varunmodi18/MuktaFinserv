import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllServiceSlugs,
  getServiceBySlug,
} from "@/lib/services";
import { ServiceTemplate } from "@/components/services/ServiceTemplate";
import { buildMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return buildMetadata({ title: "Service not found" });
  return buildMetadata({
    title: service.label,
    description: service.heroIntro,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();
  return <ServiceTemplate service={service} />;
}
