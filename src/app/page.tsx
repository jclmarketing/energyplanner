import Link from "next/link";
import { ArrowRight, ShieldCheck, LineChart, ClipboardCheck, FileSearch, Zap, Flame, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { TrustStrip } from "@/components/ui/TrustStrip";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Planner | Compare Business Energy, Procurement & Audits",
  description:
    "Strategic energy procurement, bill validation and broker services for UK businesses. Fixed-price and risk-managed flexible contracts. Lytham St Annes.",
  alternates: { canonical: "/" },
};

const services = [
  { icon: LineChart, title: "Compare Business Energy", href: "/compare-business-energy", blurb: "We compare every supplier on the market, not just the few that pay highest commission. Built around your usage profile, not theirs." },
  { icon: Zap, title: "Business Electricity", href: "/business-electricity", blurb: "Fixed-price and pass-through tariffs for single-rate, three-phase and half-hourly meters across single and multi-site portfolios." },
  { icon: Flame, title: "Business Gas", href: "/business-gas", blurb: "Commercial gas contracts from sub-25,000 kWh micro businesses up to multi-site corporates on flex baskets." },
  { icon: ShieldCheck, title: "Risk-Managed Procurement", href: "/energy-procurement", blurb: "Click strategies, basket procurement and hedged flex contracts for businesses that buy in volume and need wholesale exposure." },
  { icon: FileSearch, title: "Energy Audits & Validation", href: "/energy-audits", blurb: "Bill audits, invoice validation, reclaim of overcharges, ESOS Phase 4 and SECR support. Recovery on a no-find-no-fee basis." },
  { icon: ClipboardCheck, title: "Business Energy Broker", href: "/business-energy-broker", blurb: "Independent broker. Whole-of-market panel. Transparent fee disclosure on every quote. No auto-renewal traps." },
];

const faqs = [
  { q: "What does Energy Planner actually do?", a: "We help UK businesses procure electricity and gas contracts on better terms than they can get going direct, validate the bills that follow, and design risk-managed buying strategies for businesses with significant energy spend." },
  { q: "How are you paid?", a: "Suppliers pay us a small uplift per unit (pence per kWh) when we place a contract with them. That uplift is disclosed in writing on every quote we issue. We do not charge the business directly. See How We Get Paid for full detail." },
  { q: "Are you tied to specific suppliers?", a: "No. We are an independent whole-of-market broker. We compare every licensed B2B supplier currently quoting, not a curated few." },
  { q: "How long does the process take?", a: "Most quotes come back within one to three working days of receiving your LOA and a recent bill. Switching takes 4 to 6 weeks to go live, governed by industry standard timelines." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ label: "Home", href: "/" }]), faqSchema(faqs)]} />

      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute -top-40 -right-40 w-[720px] h-[720px] rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(245,158,11,0.30), transparent 65%)" }} />
        <div aria-hidden className="absolute top-1/3 -left-32 w-[420px] h-[420px] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(13,148,136,0.35), transparent 65%)" }} />

        <div className="container-x relative pt-24 pb-24 lg:pt-36 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <Reveal><span className="eyebrow">Whole-of-market business energy broker</span></Reveal>
              <Reveal delay={0.05}><h1 className="mt-3 text-balance">Strategic energy procurement for businesses that take buying seriously.</h1></Reveal>
              <Reveal delay={0.1}><p className="lede mt-6 max-w-xl">Fixed-price contracts, risk-managed flex procurement, bill validation and audit support. Built for UK SMEs and multi-site portfolios that want a planner, not a pitch.</p></Reveal>
              <Reveal delay={0.15}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link href="/contact#quote" className="btn btn-primary">Get a quote in 60 seconds<ArrowRight size={16} /></Link>
                  <a href={`tel:${site.phoneE164}`} className="btn btn-ghost"><Phone size={14} />{site.phone}</a>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-[color:var(--color-ink-muted)]">
                  <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-[color:var(--color-amber-deep)]" /> Whole-of-market</span>
                  <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-[color:var(--color-amber-deep)]" /> Fees disclosed on every quote</span>
                  <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-[color:var(--color-amber-deep)]" /> Lytham St Annes, UK-based</span>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.25}>
                <div className="rounded-3xl border border-[color:var(--color-line)] bg-white p-8 lg:p-10 shadow-[0_30px_80px_-40px_rgba(10,22,40,0.25)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-amber-deep)] mb-6">Why owners choose us</p>
                  <ul className="space-y-5">
                    <li><p className="font-display text-2xl text-[color:var(--color-ink)] tracking-tight">Whole-of-market.</p><p className="text-sm mt-1 text-[color:var(--color-ink-muted)]">Not a panel of three.</p></li>
                    <li><p className="font-display text-2xl text-[color:var(--color-ink)] tracking-tight">Fees disclosed.</p><p className="text-sm mt-1 text-[color:var(--color-ink-muted)]">Every quote. Every time.</p></li>
                    <li><p className="font-display text-2xl text-[color:var(--color-ink)] tracking-tight">Audit-first.</p><p className="text-sm mt-1 text-[color:var(--color-ink-muted)]">We check the bills you already pay.</p></li>
                    <li><p className="font-display text-2xl text-[color:var(--color-ink)] tracking-tight">Strategic.</p><p className="text-sm mt-1 text-[color:var(--color-ink-muted)]">Not just a one-off contract switch.</p></li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <Reveal><div><div className="font-display text-5xl lg:text-6xl text-[color:var(--color-ink)] tracking-tight"><AnimatedCounter value={100} suffix="%" /></div><p className="mt-3 text-sm uppercase tracking-[0.16em] text-[color:var(--color-ink-muted)]">Independent. Whole of market.</p></div></Reveal>
            <Reveal delay={0.08}><div><div className="font-display text-5xl lg:text-6xl text-[color:var(--color-ink)] tracking-tight"><AnimatedCounter value={12} suffix="+" /></div><p className="mt-3 text-sm uppercase tracking-[0.16em] text-[color:var(--color-ink-muted)]">B2B suppliers on panel</p></div></Reveal>
            <Reveal delay={0.16}><div><div className="font-display text-5xl lg:text-6xl text-[color:var(--color-ink)] tracking-tight"><AnimatedCounter value={48} suffix="hr" /></div><p className="mt-3 text-sm uppercase tracking-[0.16em] text-[color:var(--color-ink-muted)]">Typical quote turnaround</p></div></Reveal>
            <Reveal delay={0.24}><div><div className="font-display text-5xl lg:text-6xl text-[color:var(--color-ink)] tracking-tight"><AnimatedCounter value={0} suffix="p" /></div><p className="mt-3 text-sm uppercase tracking-[0.16em] text-[color:var(--color-ink-muted)]">Charged direct to your business</p></div></Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[color:var(--color-bone-warm)]">
        <div className="container-x">
          <Reveal><span className="eyebrow">What we do</span></Reveal>
          <Reveal delay={0.05}><h2 className="max-w-3xl mt-2 text-balance">Six services. One discipline. Buy energy the way buyers in every other category already buy.</h2></Reveal>
          <Reveal delay={0.1}><p className="lede mt-6 max-w-2xl">Most brokers move you from one fixed contract to another and call it strategy. We start with usage, profile, contract risk and renewal exposure, then choose the contract structure that matches.</p></Reveal>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--color-line)] rounded-3xl overflow-hidden border border-[color:var(--color-line)]">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.href} delay={(i % 3) * 0.06}>
                  <Link href={s.href} className="block bg-[color:var(--color-bone)] hover:bg-white transition-colors p-8 lg:p-10 h-full group">
                    <div className="w-12 h-12 rounded-2xl bg-[color:var(--color-amber-soft)] flex items-center justify-center text-[color:var(--color-amber-deep)] mb-6 group-hover:bg-[color:var(--color-amber)] transition-colors">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-display tracking-tight">{s.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">{s.blurb}</p>
                    <span className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-[color:var(--color-ink)] group-hover:gap-2 transition-all">Learn more <ArrowRight size={14} /></span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <Reveal><span className="eyebrow">The Energy Planner method</span></Reveal>
              <Reveal delay={0.05}><h2 className="mt-2 text-balance">Four steps from first call to live contract.</h2></Reveal>
              <Reveal delay={0.1}><p className="lede mt-6">No long sales meetings. No 30-page proposal. A short discovery call, a recent bill, and a Letter of Authority. That gets you proper quotes.</p></Reveal>
            </div>

            <div className="lg:col-span-7">
              {[
                { num: "01", title: "Discovery and Letter of Authority", body: "A 15 minute conversation about your sites, meters, current supplier, renewal date and any pain points (auto-renewal trap, bill disputes, multi-site sprawl). We send a single Letter of Authority so we can get pricing on your behalf." },
                { num: "02", title: "Whole-of-market quote", body: "We pull live prices from every supplier currently quoting your meter type and usage band. You get a side by side comparison with our fee disclosed line by line." },
                { num: "03", title: "Recommendation, not a sales pitch", body: "We tell you which contract we would sign in your position and why. If fixed-price wins, we say so. If a flex basket would save more, we say that. If staying with your existing supplier is the right call, we say that too." },
                { num: "04", title: "Contract management to renewal", body: "Once live we monitor the contract, validate every invoice, and warn you 6 months before renewal so the next negotiation starts when the market is right, not when your contract decides." },
              ].map((step, i) => (
                <Reveal key={step.num} delay={i * 0.05}>
                  <div className="border-t border-[color:var(--color-line)] py-10 first:pt-0 first:border-t-0">
                    <div className="flex items-start gap-6">
                      <span className="font-display text-3xl text-[color:var(--color-amber-deep)] shrink-0 leading-none">{step.num}</span>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-display">{step.title}</h3>
                        <p className="mt-3 text-[color:var(--color-ink-muted)] leading-relaxed">{step.body}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[color:var(--color-bone-warm)]">
        <div className="container-x">
          <div className="max-w-3xl">
            <Reveal><span className="eyebrow">Common questions</span></Reveal>
            <Reveal delay={0.05}><h2 className="mt-2 text-balance">Straight answers to the questions buyers actually ask.</h2></Reveal>
          </div>
          <div className="mt-16 grid lg:grid-cols-2 gap-x-12 gap-y-10">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 2) * 0.06}>
                <div>
                  <h3 className="text-lg lg:text-xl font-display text-[color:var(--color-ink)]">{f.q}</h3>
                  <p className="mt-3 text-[color:var(--color-ink-muted)] leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-14">
            <Link href="/guides" className="btn btn-ghost">Read the full guides<ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
