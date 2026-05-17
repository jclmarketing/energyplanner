import Link from "next/link";
import { ArrowRight, ShieldCheck, LineChart, ClipboardCheck, FileSearch, Zap, Flame, Phone, MoveUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SupplierMarquee } from "@/components/ui/SupplierMarquee";
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

      {/* HERO — editorial mixed-type composition */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute top-0 right-0 w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] -translate-y-1/4 translate-x-1/4 rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(245,158,11,0.35), transparent 70%)" }} />

        <div className="container-x relative pt-24 lg:pt-32 pb-16 lg:pb-24">
          {/* Top meta row */}
          <div className="grid grid-cols-12 gap-4 mb-12 lg:mb-24">
            <div className="col-span-12 lg:col-span-6 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-muted)]">
              <span className="inline-block w-2 h-2 rounded-full bg-[color:var(--color-amber)]" />
              <span>Whole of market · Fees disclosed · Lytham St Annes</span>
            </div>
            <div className="hidden lg:flex col-span-6 items-center justify-end gap-8 text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-muted)]">
              <span>Est. 2024</span>
              <span>Companies House <span className="text-[color:var(--color-ink)] font-medium">15822406</span></span>
            </div>
          </div>

          {/* The headline — mixed serif/sans editorial */}
          <Reveal>
            <h1 className="leading-[0.95] tracking-[-0.04em] text-[clamp(3rem,9vw,8rem)] font-medium max-w-[18ch]">
              Energy
              <br />
              <span className="font-display italic font-normal text-[color:var(--color-amber-deep)]">planning</span> for
              <br />
              people who
              <br />
              actually <span className="font-display italic font-normal">sign</span> the
              <br />
              <span className="font-sans">contracts.</span>
            </h1>
          </Reveal>

          {/* Sub + CTA + side meta */}
          <div className="grid grid-cols-12 gap-x-8 gap-y-12 mt-16 lg:mt-20">
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={0.05}>
                <p className="text-xl lg:text-2xl text-[color:var(--color-ink-soft)] leading-snug font-light max-w-[44ch]">
                  Whole-of-market procurement, bill validation and risk-managed flex contracts.
                  Built for UK businesses that buy energy like they buy everything else: with discipline,
                  not under deadline pressure.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link href="/contact#quote" className="btn btn-primary text-base px-7 py-4">
                    Get a quote
                    <ArrowRight size={16} />
                  </Link>
                  <a href={`tel:${site.phoneE164}`} className="group inline-flex items-center gap-3 text-base font-medium">
                    <span className="w-10 h-10 rounded-full border border-[color:var(--color-line)] flex items-center justify-center group-hover:bg-[color:var(--color-bone-warm)] group-hover:border-[color:var(--color-ink)] transition-all">
                      <Phone size={14} />
                    </span>
                    <span>{site.phone}</span>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right column: live market commentary card */}
            <div className="col-span-12 lg:col-span-5 lg:pl-10">
              <Reveal delay={0.15}>
                <div className="relative h-full">
                  <div className="absolute -top-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-amber)] to-transparent opacity-50" />
                  <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-muted)] mb-5">Market signal · this week</p>
                  <div className="space-y-4 font-display text-2xl lg:text-3xl tracking-tight text-[color:var(--color-ink)] leading-snug">
                    <p>
                      Wholesale electricity{" "}
                      <span className="text-[color:var(--color-amber-deep)] italic">softening</span>
                      , gas{" "}
                      <span className="text-[color:var(--color-amber-deep)] italic">volatile</span>
                      .
                    </p>
                  </div>
                  <p className="mt-6 text-sm text-[color:var(--color-ink-muted)] leading-relaxed">
                    If your renewal lands in the next 6 to 12 months, this is a watching brief, not a panic. The window to lock pricing has opened on most meter types.
                  </p>
                  <div className="mt-8 pt-6 border-t border-[color:var(--color-line)] flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]">
                    <span>Updated weekly</span>
                    <Link href="/guides" className="inline-flex items-center gap-1 text-[color:var(--color-ink)] hover:text-[color:var(--color-amber-deep)]">
                      Market guides <MoveUpRight size={12} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <SupplierMarquee />

      {/* BIG STAT / PHILOSOPHY */}
      <section className="py-24 lg:py-32 border-b border-[color:var(--color-line)]">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 lg:col-span-2">
              <p className="eyebrow">01</p>
              <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-muted)] mt-2">Position</p>
            </div>
            <div className="col-span-12 lg:col-span-10">
              <Reveal>
                <p className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-[-0.025em] text-balance">
                  Most brokers sell the same three suppliers and call it
                  {" "}<span className="italic text-[color:var(--color-amber-deep)]">choice.</span>
                  {" "}We quote every supplier currently active on your meter and call that
                  {" "}<span className="italic">the actual market</span>.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* BENTO SERVICES */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-6 mb-14 lg:mb-20">
            <div className="col-span-12 lg:col-span-2">
              <p className="eyebrow">02</p>
              <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-muted)] mt-2">Services</p>
            </div>
            <div className="col-span-12 lg:col-span-10">
              <Reveal>
                <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] tracking-[-0.02em] text-balance">
                  Six disciplines. One operating model: buyer-first.
                </h2>
              </Reveal>
            </div>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-3 lg:gap-4">
            {/* Big feature — Procurement (USP) */}
            <Reveal className="md:col-span-4 md:row-span-2">
              <Link href="/energy-procurement" className="group relative block h-full min-h-[420px] rounded-[28px] bg-[color:var(--color-ink)] text-white p-8 lg:p-12 overflow-hidden">
                <div aria-hidden className="absolute -bottom-32 -right-20 w-[420px] h-[420px] rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(closest-side, rgba(245,158,11,0.65), transparent 70%)" }} />
                <div className="relative h-full flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-amber)]">Featured · Risk-managed</p>
                    <h3 className="mt-6 font-display text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] text-white text-balance">
                      Procurement strategy for businesses where energy is a line item that matters.
                    </h3>
                    <p className="mt-6 text-white/70 text-base lg:text-lg leading-relaxed max-w-md">
                      Flex contracts, click strategies, basket procurement, partial fixed. Designed around your profile and your team&apos;s capacity. Not sold as bolt-on complexity.
                    </p>
                  </div>
                  <div className="mt-10 flex items-center gap-3 text-white">
                    <span className="text-base font-medium">Explore procurement</span>
                    <span className="w-10 h-10 rounded-full bg-[color:var(--color-amber)] text-[color:var(--color-ink)] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>

            {[
              { icon: Zap, t: "Business Electricity", h: "/business-electricity", b: "Single, three-phase and half-hourly." },
              { icon: Flame, t: "Business Gas", h: "/business-gas", b: "Micro through to multi-site flex." },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.h} className="md:col-span-2">
                  <Link href={s.h} className="group block h-full min-h-[200px] rounded-[28px] bg-[color:var(--color-bone-warm)] hover:bg-white border border-[color:var(--color-line)] p-7 transition-colors">
                    <Icon size={22} strokeWidth={1.5} className="text-[color:var(--color-amber-deep)]" />
                    <h3 className="mt-8 font-display text-2xl tracking-tight">{s.t}</h3>
                    <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">{s.b}</p>
                    <span className="inline-flex items-center gap-1 mt-6 text-sm text-[color:var(--color-ink)] group-hover:gap-2 transition-all">Learn more <ArrowRight size={12} /></span>
                  </Link>
                </Reveal>
              );
            })}

            {[
              { icon: LineChart, t: "Compare Business Energy", h: "/compare-business-energy", b: "Live whole-of-market quotes." },
              { icon: FileSearch, t: "Audits & Validation", h: "/energy-audits", b: "Recovery on no-find-no-fee." },
              { icon: ClipboardCheck, t: "Business Energy Broker", h: "/business-energy-broker", b: "Independent. Fee disclosed." },
              { icon: ShieldCheck, t: "Compare Prices", h: "/compare-business-energy-prices", b: "Side-by-side, line by line." },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.h} className="md:col-span-3 lg:col-span-3 xl:col-span-3">
                  <Link href={s.h} className="group block h-full min-h-[180px] rounded-[28px] border border-[color:var(--color-line)] bg-white hover:bg-[color:var(--color-bone-warm)] p-7 transition-colors">
                    <div className="flex items-start justify-between">
                      <Icon size={22} strokeWidth={1.5} className="text-[color:var(--color-amber-deep)]" />
                      <ArrowRight size={16} className="text-[color:var(--color-ink-muted)] group-hover:text-[color:var(--color-ink)] group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="mt-7 font-display text-xl lg:text-2xl tracking-tight">{s.t}</h3>
                    <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">{s.b}</p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* METHOD — sticky scroll */}
      <section className="py-24 lg:py-32 bg-[color:var(--color-bone-warm)] border-y border-[color:var(--color-line)]">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-6 items-start">
            <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-32">
              <p className="eyebrow">03</p>
              <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-muted)] mt-2 mb-6">Method</p>
              <Reveal>
                <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-balance">
                  Four steps. No 30-page proposal. No long sales meeting.
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-6 text-[color:var(--color-ink-muted)] text-lg leading-relaxed">
                  A short call, a recent bill, a single Letter of Authority. From there we run the market for you and stay in the background until renewal.
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 lg:col-span-8 lg:pl-12">
              {[
                { num: "01", title: "Discovery", body: "Fifteen minutes. Meters, sites, current supplier, renewal date, anything broken. We send a one-page Letter of Authority by e-sign." },
                { num: "02", title: "Whole-of-market quote", body: "We pull live prices from every supplier currently quoting on your meter and present them side by side. Our fee is shown on every line." },
                { num: "03", title: "Recommendation", body: "We tell you which contract we would sign in your position, and why. If your existing supplier is the right answer, we say that too." },
                { num: "04", title: "Manage to renewal", body: "Bills validated for the term. Renewal warning at month 18 of a 24-month contract. The next negotiation starts on your timing, not the contract end-date." },
              ].map((step, i) => (
                <Reveal key={step.num} delay={i * 0.04}>
                  <div className="grid grid-cols-12 gap-6 py-10 lg:py-14 border-t border-[color:var(--color-line)] first:border-t-0 first:pt-0">
                    <div className="col-span-12 sm:col-span-2">
                      <span className="font-display text-5xl lg:text-6xl text-[color:var(--color-amber-deep)] leading-none">{step.num}</span>
                    </div>
                    <div className="col-span-12 sm:col-span-10">
                      <h3 className="font-display text-2xl lg:text-3xl tracking-tight">{step.title}</h3>
                      <p className="mt-4 text-[color:var(--color-ink-muted)] text-lg leading-relaxed max-w-2xl">{step.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PULL QUOTE / PHILOSOPHY */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <Reveal>
            <blockquote className="max-w-5xl mx-auto text-center">
              <p className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.08] tracking-[-0.025em] text-balance">
                &ldquo;Buying energy well is a discipline.
                {" "}<span className="italic text-[color:var(--color-amber-deep)]">It is not</span>
                {" "}what gets sold as one.&rdquo;
              </p>
              <footer className="mt-10 text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-muted)]">
                Energy Planner · House view
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-[color:var(--color-bone-warm)] border-y border-[color:var(--color-line)]">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-6 mb-14 lg:mb-20">
            <div className="col-span-12 lg:col-span-2">
              <p className="eyebrow">04</p>
              <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-muted)] mt-2">Questions</p>
            </div>
            <div className="col-span-12 lg:col-span-10">
              <Reveal>
                <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] tracking-[-0.02em] text-balance">
                  Straight answers to the questions buyers actually ask.
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 2) * 0.05}>
                <div>
                  <h3 className="font-display text-2xl tracking-tight">{f.q}</h3>
                  <p className="mt-4 text-[color:var(--color-ink-muted)] text-base leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16">
            <Link href="/guides" className="inline-flex items-center gap-2 text-sm font-medium hover:text-[color:var(--color-amber-deep)]">
              Read the full guides <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
