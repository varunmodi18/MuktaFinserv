import Link from "next/link";
import type { PostSummary } from "@/lib/insights";
import { formatPublished } from "@/lib/insights";

export function PostCard({ post }: { post: PostSummary }) {
  return (
    <article className="group relative flex h-full flex-col bg-bg-primary">
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col gap-6 border border-gold-500/15 p-10 transition-colors hover:border-gold-500/50"
      >
        <div className="flex items-center gap-3 font-caption text-[0.68rem] tracking-[0.2em] uppercase text-gold-300">
          <span>{post.category}</span>
          <span aria-hidden="true" className="h-px w-6 bg-gold-500/40" />
          <span className="text-ink-muted">
            {post.readMinutes} min read
          </span>
        </div>
        <h3 className="font-display text-3xl leading-tight text-ink transition-colors group-hover:text-gold-100 md:text-[2rem]">
          {post.title}
        </h3>
        <p className="font-body text-[1.02rem] leading-relaxed text-ink-muted">
          {post.dek}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-gold-500/15 pt-6">
          <div className="flex flex-col gap-0.5">
            <span className="font-body text-sm text-ink">
              {post.author.name}
            </span>
            <span className="font-body text-xs text-ink-muted">
              {formatPublished(post.publishedAt)}
            </span>
          </div>
          <span className="font-body text-[0.72rem] tracking-[0.18em] uppercase text-gold-300 transition-transform group-hover:translate-x-1">
            Read →
          </span>
        </div>
      </Link>
    </article>
  );
}
