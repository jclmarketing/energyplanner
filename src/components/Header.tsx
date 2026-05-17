"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled ? "bg-[color:var(--color-bone)]/85 backdrop-blur-md border-b border-[color:var(--color-line)]" : "bg-transparent",
      )}
    >
      <div className="container-x flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-3" aria-label="Energy Planner home">
          <Image
            src="/logo/dark.svg"
            alt="Energy Planner"
            width={56}
            height={56}
            className="h-12 w-12"
            priority
          />
          <span className="font-display text-lg tracking-tight text-[color:var(--color-ink)]">Energy Planner</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[color:var(--color-ink-soft)]">
          {nav.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[color:var(--color-ink)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${site.phoneE164}`}
            className="flex items-center gap-2 text-sm font-medium text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]"
          >
            <Phone size={14} />
            {site.phone}
          </a>
          <Link href="/contact#quote" className="btn btn-amber">
            Get a quote
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[color:var(--color-line)] bg-[color:var(--color-bone)]">
          <div className="container-x py-6 flex flex-col gap-1">
            {nav.primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-[color:var(--color-ink-soft)] border-b border-[color:var(--color-line-soft)]"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-6">
              <a href={`tel:${site.phoneE164}`} className="btn btn-ghost w-full">
                <Phone size={14} />
                Call {site.phone}
              </a>
              <Link href="/contact#quote" onClick={() => setOpen(false)} className="btn btn-amber w-full">
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
