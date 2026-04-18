import type { ReactNode } from "react";
import postAllocation from "@/content/insights/the-quiet-discipline-of-asset-allocation";
import postDirectRegular from "@/content/insights/direct-vs-regular-what-a-trail-commission-buys";
import postFiveQuestions from "@/content/insights/five-questions-before-you-hire-a-wealth-manager";
import postRefuse from "@/content/insights/why-we-refuse-some-products";
import postDoingNothing from "@/content/insights/the-case-for-doing-nothing";

export const postCategories = [
  "Asset Allocation",
  "Mutual Funds",
  "Advisory",
  "Philosophy",
  "Behavior",
] as const;

export type PostCategory = (typeof postCategories)[number];

export type Post = {
  slug: string;
  title: string;
  dek: string;
  category: PostCategory;
  publishedAt: string; // ISO date
  readMinutes: number;
  author: { name: string; role: string };
  body: ReactNode;
};

export type PostSummary = Omit<Post, "body">;

const allPosts: Post[] = [
  postAllocation,
  postDirectRegular,
  postFiveQuestions,
  postRefuse,
  postDoingNothing,
];

export function getAllPosts(): Post[] {
  return [...allPosts].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1,
  );
}

export function getAllPostSummaries(): PostSummary[] {
  return getAllPosts().map(({ body: _body, ...rest }) => rest);
}

export function getPostBySlug(slug: string): Post | null {
  return allPosts.find((p) => p.slug === slug) ?? null;
}

export function getAllPostSlugs(): string[] {
  return allPosts.map((p) => p.slug);
}

export function formatPublished(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
