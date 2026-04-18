"use client";

import Link from "next/link";
import { useEffect } from "react";
import { X } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-50 bg-bg-primary transition-[opacity,visibility] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        open
          ? "visible opacity-100"
          : "invisible opacity-0 pointer-events-none"
      )}
    >
      <div className="flex h-full flex-col px-(--content-gutter) py-6">
        <div className="flex items-center justify-between">
          <span className="font-display text-2xl text-ink">
            {siteConfig.shortName}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-gold-300"
          >
            <X className="h-6 w-6" strokeWidth={1.25} aria-hidden="true" />
          </button>
        </div>

        <div className="my-8 h-px w-12 bg-gold-500/60" aria-hidden="true" />

        <nav aria-label="Mobile primary" className="flex flex-1 flex-col gap-2">
          {siteConfig.primaryNav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              className={cn(
                "font-display border-b border-gold-500/10 py-5 text-3xl text-ink transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-gold-300 sm:text-4xl",
                open
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 flex flex-col gap-3">
          <Link
            href={siteConfig.ctas.secondary.href}
            onClick={onClose}
            className="border border-gold-500/60 py-3 text-center font-body text-sm tracking-wide text-gold-300 transition-colors hover:border-gold-500 hover:bg-gold-500/10 hover:text-gold-100"
          >
            {siteConfig.ctas.secondary.label}
          </Link>
          <Link
            href={siteConfig.ctas.primary.href}
            onClick={onClose}
            className="bg-gold-500 py-3 text-center font-body text-sm tracking-wide text-bg-primary transition-colors hover:bg-gold-300"
          >
            {siteConfig.ctas.primary.label}
          </Link>
        </div>

        <p className="mt-8 text-center font-body text-xs text-ink-muted">
          <a
            href={siteConfig.contact.phoneHref}
            className="text-gold-300 hover:text-gold-100"
          >
            {siteConfig.contact.phone}
          </a>
          {" · "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-gold-300 hover:text-gold-100"
          >
            {siteConfig.contact.email}
          </a>
        </p>
      </div>
    </div>
  );
}
