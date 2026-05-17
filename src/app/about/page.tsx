import { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { TrustStrip } from "@/components/ui/TrustStrip";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Energy Planner | Independent UK Business Energy Specialists",
  description: "Energy Planner Ltd is an independent UK business energy procurement and audit specialist based in Lytham St Annes. Whole-of-market broker, fees disclosed on every quote.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "About", href: "/about" }])} />

      <section className="container-x pt-24 lg:pt-36 pb-12">
        <Reveal><span className="eyebrow">About Energy Planner</span></Reveal>
        <Reveal delay={0.05}><h1 className="mt-2 max-w-4xl text-balance">Built around how buyers actually want to buy energy.</h1></Reveal>
        <Reveal delay={0.1}><p className="lede mt-8 max-w-2xl">Independent. Whole-of-market. Fee disclosed on every quote. Based in Lytham St Annes, working with UK businesses from single-site SMEs to multi-site portfolios.</p></Reveal>
      </section>

      <section className="container-x py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-12">
            <Reveal>
              <div>
                <h2>Why we exist</h2>
                <p className="mt-5 text-lg leading-relaxed text-[color:var(--color-ink-muted)]">UK business energy is sold the way mobile phone contracts used to be sold. A broker calls, a quote arrives, a contract gets signed, and twelve months later you find out three other suppliers were 18% cheaper. We built Energy Planner because that model fails the buyer.</p>
                <p className="mt-4 text-lg leading-relaxed text-[color:var(--color-ink-muted)]">We work the other way round. Audit the bills you already pay. Quote every supplier currently active on your meter. Show our fee on the same page as the supplier rates. Tell you which contract we would sign in your position and why. Then handle the paperwork and warn you six months ahead of the next renewal.</p>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h2>What independence actually means</h2>
                <p className="mt-5 text-lg leading-relaxed text-[color:var(--color-ink-muted)]">Energy Planner Ltd holds no equity from suppliers, accepts no preferential commission structures, and has no minimum volume commitments. Every quote round opens to every B2B supplier currently quoting on your meter type and usage band. The contract you sign is the one that wins on price, terms and supplier fit, not the one that pays us best.</p>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h2>The disciplines we run on</h2>
                <ul className="mt-5 space-y-3 text-lg text-[color:var(--color-ink-muted)]">
                  <li className="leading-relaxed"><strong className="text-[color:var(--color-ink)]">Whole of market.</strong> Every supplier. Not a panel of three.</li>
                  <li className="leading-relaxed"><strong className="text-[color:var(--color-ink)]">Fees disclosed.</strong> Pence per kWh, on every quote, in writing.</li>
                  <li className="leading-relaxed"><strong className="text-[color:var(--color-ink)]">Audit first.</strong> Check the bills before negotiating new ones.</li>
                  <li className="leading-relaxed"><strong className="text-[color:var(--color-ink)]">Strategic.</strong> Contract structure that fits your profile, not ours.</li>
                  <li className="leading-relaxed"><strong className="text-[color:var(--color-ink)]">Long-term.</strong> Renewal warnings, market commentary, ongoing validation.</li>
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h2>Who we work with</h2>
                <p className="mt-5 text-lg leading-relaxed text-[color:var(--color-ink-muted)]">UK businesses from single-site SMEs through to multi-site portfolios up to around 50 GWh combined demand. Sectors include manufacturing, hospitality, care, multi-site retail, schools and academies, farms and horticulture, warehouse and logistics, and professional services.</p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <Reveal>
              <div className="rounded-3xl border border-[color:var(--color-line)] bg-white p-8 lg:p-10">
                <p className="eyebrow">Quick facts</p>
                <dl className="mt-4 space-y-5">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.16em] text-[color:var(--color-ink-muted)]">Registered</dt>
                    <dd className="font-display text-2xl text-[color:var(--color-ink)] mt-1">Energy Planner Ltd</dd>
                    <dd className="text-sm text-[color:var(--color-ink-muted)]">Companies House 15822406</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.16em] text-[color:var(--color-ink-muted)]">Based</dt>
                    <dd className="font-display text-2xl text-[color:var(--color-ink)] mt-1">Lytham St Annes</dd>
                    <dd className="text-sm text-[color:var(--color-ink-muted)]">Lancashire, UK</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.16em] text-[color:var(--color-ink-muted)]">Coverage</dt>
                    <dd className="font-display text-2xl text-[color:var(--color-ink)] mt-1">UK-wide</dd>
                    <dd className="text-sm text-[color:var(--color-ink-muted)]">All distribution areas, all meter types</dd>
                  </div>
                </dl>
                <div className="mt-8 pt-8 border-t border-[color:var(--color-line)] flex flex-col gap-3">
                  <Link href="/team" className="btn btn-ghost">Meet the team<ArrowRight size={14} /></Link>
                  <Link href="/how-we-get-paid" className="btn btn-ghost">How we get paid<ArrowRight size={14} /></Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <TrustStrip />
      <CtaBlock title="Ready to put us to work?" />
    </>
  );
}
