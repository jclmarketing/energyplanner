import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { TrustStrip } from "@/components/ui/TrustStrip";

export type PillarFAQ = { q: string; a: string };

export type PillarSection = {
  heading: string;
  body?: string | React.ReactNode;
  bullets?: string[];
};

export function PillarPage({
  eyebrow,
  title,
  intro,
  keyPoints,
  sections,
  faqs,
  relatedLinks,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  keyPoints: string[];
  sections: PillarSection[];
  faqs?: PillarFAQ[];
  relatedLinks?: { label: string; href: string }[];
}) {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(245,158,11,0.28), transparent 70%)" }} />
        <div className="container-x relative pt-20 pb-16 lg:pt-32 lg:pb-20">
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-2 text-balance max-w-4xl">{title}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede mt-6 max-w-2xl">{intro}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact#quote" className="btn btn-primary">Get a quote<ArrowRight size={16} /></Link>
              <Link href="/how-we-get-paid" className="btn btn-ghost">How we get paid</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Key points */}
      <section className="py-12 lg:py-16 bg-[color:var(--color-bone-warm)] border-y border-[color:var(--color-line)]">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
            {keyPoints.map((p, i) => (
              <Reveal key={p} delay={(i % 4) * 0.05}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[color:var(--color-amber-deep)] mt-1 shrink-0" />
                  <p className="text-[15px] text-[color:var(--color-ink)] leading-snug">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Body sections */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="max-w-3xl">
            {sections.map((s, i) => (
              <Reveal key={s.heading} delay={(i % 3) * 0.05}>
                <div className="mb-16 last:mb-0">
                  <h2 className="text-balance">{s.heading}</h2>
                  {s.body && (typeof s.body === "string" ? (
                    <p className="mt-5 text-lg text-[color:var(--color-ink-muted)] leading-relaxed">{s.body}</p>
                  ) : (
                    <div className="mt-5 text-lg text-[color:var(--color-ink-muted)] leading-relaxed">{s.body}</div>
                  ))}
                  {s.bullets && (
                    <ul className="mt-6 space-y-3">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-[color:var(--color-amber-deep)] mt-1.5 shrink-0" />
                          <span className="text-[color:var(--color-ink-muted)]">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TrustStrip />

      {faqs && faqs.length > 0 && (
        <section className="py-20 lg:py-28">
          <div className="container-x">
            <div className="max-w-3xl">
              <Reveal><span className="eyebrow">Common questions</span></Reveal>
              <Reveal delay={0.05}><h2 className="mt-2">What buyers ask before signing.</h2></Reveal>
            </div>
            <div className="mt-12 grid lg:grid-cols-2 gap-x-12 gap-y-10">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={(i % 2) * 0.05}>
                  <div>
                    <h3 className="text-lg lg:text-xl font-display">{f.q}</h3>
                    <p className="mt-3 text-[color:var(--color-ink-muted)] leading-relaxed">{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedLinks && relatedLinks.length > 0 && (
        <section className="py-14 bg-[color:var(--color-bone-warm)] border-y border-[color:var(--color-line)]">
          <div className="container-x">
            <p className="eyebrow">Related</p>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              {relatedLinks.map((l) => (
                <Link key={l.href} href={l.href} className="text-[color:var(--color-ink)] hover:text-[color:var(--color-amber-deep)] underline underline-offset-4">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBlock />
    </>
  );
}
