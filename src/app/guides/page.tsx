import { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { guides } from "@/lib/guides";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Energy Guides | UK Procurement & Contract Resources",
  description: "Practical UK business energy guides on procurement, contracts, bill validation, compliance and supplier comparison. Written by Energy Planner.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }])} />

      <section className="container-x pt-24 lg:pt-36 pb-12">
        <Reveal><span className="eyebrow">Guides &amp; resources</span></Reveal>
        <Reveal delay={0.05}><h1 className="mt-2 max-w-4xl text-balance">Practical UK business energy guides, written by people who place contracts every week.</h1></Reveal>
        <Reveal delay={0.1}><p className="lede mt-8 max-w-2xl">Procurement, contracts, bill validation, compliance and supplier comparison. No marketing copy. Just the stuff that helps you make a better decision.</p></Reveal>
      </section>

      <section className="container-x py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-px bg-[color:var(--color-line)] rounded-3xl overflow-hidden border border-[color:var(--color-line)]">
          {guides.map((g, i) => (
            <Reveal key={g.slug} delay={(i % 2) * 0.06}>
              <Link href={`/guides/${g.slug}`} className="block bg-[color:var(--color-bone)] hover:bg-white transition-colors p-8 lg:p-10 h-full group">
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-[color:var(--color-amber-deep)] font-semibold uppercase tracking-[0.16em]">{g.category}</span>
                  <span className="text-[color:var(--color-ink-muted)]">·</span>
                  <span className="text-[color:var(--color-ink-muted)] flex items-center gap-1"><Clock size={12} />{g.readMinutes} min read</span>
                  {g.status === "draft" && (
                    <>
                      <span className="text-[color:var(--color-ink-muted)]">·</span>
                      <span className="text-[color:var(--color-ink-muted)] italic">Coming soon</span>
                    </>
                  )}
                </div>
                <h2 className="font-display text-2xl lg:text-3xl mt-4 text-[color:var(--color-ink)] leading-tight tracking-tight">{g.title}</h2>
                <p className="mt-4 text-[color:var(--color-ink-muted)] leading-relaxed">{g.description}</p>
                <span className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-[color:var(--color-ink)] group-hover:gap-2 transition-all">
                  Read the guide<ArrowRight size={14} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
