import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { BrandStory } from "@/components/home/BrandStory";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { PhilosophyPillars } from "@/components/home/PhilosophyPillars";
import { LeadershipSpotlight } from "@/components/home/LeadershipSpotlight";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { ResourcesTeaser } from "@/components/home/ResourcesTeaser";
import { CTABand } from "@/components/home/CTABand";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  ...buildMetadata({
    title: siteConfig.tagline,
    path: "/",
  }),
  title: {
    absolute: `${siteConfig.name} — ${siteConfig.tagline}`,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BrandStory />
      <ServicesGrid />
      <PhilosophyPillars />
      <LeadershipSpotlight />
      <Process />
      <Testimonials />
      <ResourcesTeaser />
      <CTABand />
    </>
  );
}
