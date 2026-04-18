import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Breadcrumb } from "@/components/services/Breadcrumb";
import { Prose } from "@/components/insights/Prose";
import { PostCard } from "@/components/insights/PostCard";
import { CTABand } from "@/components/home/CTABand";
import { JsonLd } from "@/components/shared/JsonLd";
import {
  formatPublished,
  getAllPostSlugs,
  getAllPostSummaries,
  getPostBySlug,
} from "@/lib/insights";
import { buildMetadata } from "@/lib/seo";
import { articleJsonLd } from "@/lib/jsonld";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return buildMetadata({ title: "Post not found" });
  return buildMetadata({
    title: post.title,
    description: post.dek,
    path: `/blog/${post.slug}`,
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPostSummaries();
  const related = allPosts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        (p.category === post.category || true),
    )
    .slice(0, 2);

  return (
    <>
      <JsonLd data={articleJsonLd(post)} />
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gold-500/15 bg-bg-primary">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 10% 10%, rgba(212,175,55,0.12) 0%, transparent 55%)",
          }}
        />
        <div className="mx-auto w-full max-w-(--content-max) px-(--content-gutter) pt-28 pb-16 md:pt-36 md:pb-20">
          <Breadcrumb
            items={[
              { href: "/", label: "Home" },
              { href: "/blog", label: "Insights" },
              { label: post.category },
            ]}
          />
          <div className="mt-10 max-w-4xl">
            <span className="font-caption text-[0.7rem] tracking-[0.22em] uppercase text-gold-300">
              {post.category}
            </span>
            <h1 className="font-display mt-5 text-[clamp(2.25rem,4.5vw+1rem,5rem)] leading-[1.02] tracking-tight text-ink">
              {post.title}
            </h1>
            <p className="mt-8 font-body text-xl leading-relaxed text-ink-muted md:text-2xl md:leading-[1.5]">
              {post.dek}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-gold-500/15 pt-6">
              <div className="flex flex-col">
                <span className="font-caption text-[0.65rem] tracking-[0.2em] uppercase text-ink-muted">
                  Written by
                </span>
                <span className="mt-1 font-body text-base text-ink">
                  {post.author.name}
                </span>
                <span className="font-body text-xs text-ink-muted">
                  {post.author.role}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-caption text-[0.65rem] tracking-[0.2em] uppercase text-ink-muted">
                  Published
                </span>
                <span className="mt-1 font-body text-base text-ink">
                  {formatPublished(post.publishedAt)}
                </span>
                <span className="font-body text-xs text-ink-muted">
                  {post.readMinutes} min read
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="border-b border-gold-500/15 bg-bg-secondary">
        <div className="mx-auto w-full max-w-3xl px-(--content-gutter) py-20 md:py-28">
          <Prose>{post.body}</Prose>

          <div className="mt-24 border-t border-gold-500/20 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-caption text-[0.7rem] tracking-[0.22em] uppercase text-gold-300 transition-colors hover:text-gold-100"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              All Insights
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 ? (
        <section className="border-b border-gold-500/15 bg-bg-primary">
          <div className="mx-auto w-full max-w-(--content-max) px-(--content-gutter) py-20 md:py-24">
            <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">
              Continue reading
            </h2>
            <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {related.map((p) => (
                <li key={p.slug}>
                  <PostCard post={p} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <CTABand />
    </>
  );
}
