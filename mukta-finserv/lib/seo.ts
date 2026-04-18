import type { Metadata } from "next";
import { siteConfig } from "./site";

type SeoInput = {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noindex?: boolean;
};

/**
 * Build per-page Next.js Metadata that inherits sensible brand defaults.
 * Pass `{ title }` at minimum; everything else falls back to siteConfig.
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  ogImage,
  noindex = false,
}: SeoInput): Metadata {
  const canonical = new URL(path, siteConfig.url).toString();

  // When ogImage is explicit, use it. Otherwise leave `images` undefined so
  // Next.js picks up the nearest `opengraph-image.tsx` file-convention asset.
  const ogImages = ogImage
    ? [{ url: ogImage, width: 1200, height: 630, alt: title }]
    : undefined;
  const twitterImages = ogImage ? [ogImage] : undefined;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_IN",
      ...(ogImages ? { images: ogImages } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(twitterImages ? { images: twitterImages } : {}),
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
