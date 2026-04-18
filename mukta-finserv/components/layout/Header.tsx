"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Wordmark } from "./Wordmark";
import { MobileMenu } from "./MobileMenu";

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[background-color,backdrop-filter,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "border-b border-gold-500/15 bg-bg-primary/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-20 w-full max-w-(--content-max) items-center justify-between px-(--content-gutter)">
          <Wordmark />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-10 lg:flex"
          >
            {siteConfig.primaryNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "font-body group relative text-[0.95rem] transition-colors",
                    active ? "text-gold-300" : "text-ink hover:text-gold-300",
                  )}
                >
                  <span className="relative">
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute -bottom-1 left-0 h-px bg-gold-500 transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        active ? "w-full" : "w-0 group-hover:w-full",
                      )}
                    />
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={siteConfig.ctas.secondary.href}
              className="border border-gold-500/60 px-5 py-2.5 font-body text-[0.85rem] tracking-wide text-gold-300 transition-colors duration-300 hover:border-gold-500 hover:bg-gold-500/10 hover:text-gold-100"
            >
              {siteConfig.ctas.secondary.label}
            </Link>
            <Link
              href={siteConfig.ctas.primary.href}
              className="bg-gold-500 px-5 py-2.5 font-body text-[0.85rem] tracking-wide text-bg-primary transition-colors duration-300 hover:bg-gold-300"
            >
              {siteConfig.ctas.primary.label}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-gold-300 lg:hidden"
          >
            <Menu className="h-6 w-6" strokeWidth={1.25} aria-hidden="true" />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
