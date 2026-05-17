import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { JsonLd, breadcrumbSchema, articleSchema, faqSchema } from "@/lib/schema";
import { guides, getGuide } from "@/lib/guides";
import { site } from "@/lib/site";
import { guideContent } from "@/content/guides";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: { title: guide.title, description: guide.description, type: "article", publishedTime: guide.publishedAt, modifiedTime: guide.updatedAt },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const content = guideContent[slug];
  const faqs = content?.faqs ?? [];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { label: "Home", href: "/" },
            { label: "Guides", href: "/guides" },
            { label: guide.title, href: `/guides/${guide.slug}` },
          ]),
          articleSchema({
            headline: guide.title,
            description: guide.description,
            slug: `/guides/${guide.slug}`,
            datePublished: guide.publishedAt,
            dateModified: guide.updatedAt,
          }),
          ...(faqs.length > 0 ? [faqSchema(faqs)] : []),
        ]}
      />

      <article className="pt-20 lg:pt-32 pb-12">
        <div className="container-x">
          <Link href="/guides" className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)] mb-8">
            <ArrowLeft size={14} />All guides
          </Link>
          <Reveal>
            <div className="flex items-center gap-3 text-xs">
              <span className="text-[color:var(--color-amber-deep)] font-semibold uppercase tracking-[0.16em]">{guide.category}</span>
              <span className="text-[color:var(--color-ink-muted)]">·</span>
              <span className="text-[color:var(--color-ink-muted)] flex items-center gap-1"><Clock size={12} />{guide.readMinutes} min read</span>
              <span className="text-[color:var(--color-ink-muted)]">·</span>
              <span className="text-[color:var(--color-ink-muted)] flex items-center gap-1"><Calendar size={12} />Updated {new Date(guide.updatedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 max-w-4xl text-balance">{guide.title}</h1>
          </Reveal>
        </div>

        <div className="container-x mt-12">
          <div className="max-w-2xl">
            <Reveal>
              <div className="rounded-2xl bg-[color:var(--color-amber-soft)]/50 border border-[color:var(--color-amber)]/30 p-6 lg:p-8 mb-12">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-amber-deep)] mb-3">Short answer</p>
                <p className="text-lg text-[color:var(--color-ink)] leading-relaxed">{guide.answer}</p>
              </div>
            </Reveal>

            {content ? (
              <Reveal>
                <div className="prose-energy">{content.body}</div>
              </Reveal>
            ) : (
              <Reveal>
                <div className="prose-energy">
                  <p><em>This guide is being written. The short answer above covers the essentials. Email us at <a href={`mailto:${site.email}`}>{site.email}</a> if you want the full briefing now.</em></p>
                  <h2>What this guide will cover</h2>
                  <ul>
                    <li>Detailed walkthrough of {guide.title.toLowerCase()}</li>
                    <li>Real-world examples from UK businesses we work with</li>
                    <li>Common mistakes to avoid</li>
                    <li>How to apply the principles to your own contracts</li>
                  </ul>
                </div>
              </Reveal>
            )}

            {faqs.length > 0 && (
              <Reveal>
                <div className="mt-16 pt-12 border-t border-[color:var(--color-line)]">
                  <h2>Frequently asked</h2>
                  <dl className="mt-8 space-y-8">
                    {faqs.map((f) => (
                      <div key={f.q}>
                        <dt className="font-display text-xl text-[color:var(--color-ink)]">{f.q}</dt>
                        <dd className="mt-3 text-[color:var(--color-ink-muted)] leading-relaxed">{f.a}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            )}

            <Reveal>
              <div className="mt-16 pt-12 border-t border-[color:var(--color-line)]">
                <p className="eyebrow">Related</p>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  {guides.filter((g) => g.slug !== guide.slug).slice(0, 4).map((g) => (
                    <Link key={g.slug} href={`/guides/${g.slug}`} className="block p-5 rounded-2xl border border-[color:var(--color-line)] hover:border-[color:var(--color-ink-muted)] transition-colors">
                      <h3 className="text-base font-display text-[color:var(--color-ink)]">{g.title}</h3>
                      <span className="inline-flex items-center gap-1 mt-3 text-sm text-[color:var(--color-amber-deep)]">Read<ArrowRight size={12} /></span>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      <CtaBlock />
    </>
  );
}
