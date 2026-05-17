import Link from "next/link";
import { ArrowRight, LineChart, ClipboardCheck, FileSearch, Zap, Flame, Phone, MoveUpRight, ShieldCheck } from "lucide-react";
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
  { q: "How are you paid?", a: "Suppliers pay us a small uplift per unit (pence per kWh) when we place a contract. That uplift is disclosed in writing on every quote. We do not charge the business directly." },
  { q: "Are you tied to specific suppliers?", a: "No. We are an independent whole-of-market broker. We compare every licensed B2B supplier currently quoting, not a curated few." },
  { q: "How long does the process take?", a: "Most quotes return within one to three working days. Switching takes 4 to 6 weeks to go live." },
  { q: "Can I start in contract?", a: "Yes. Most suppliers let us lock in renewal pricing up to 12 months ahead. The earlier we look, the more pricing windows you have." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ label: "Home", href: "/" }]), faqSchema(faqs)]} />

      {/* HERO — split editorial composition with full-bleed image */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-12 min-h-[88vh] lg:min-h-[760px]">
          {/* Left: type column */}
          <div className="lg:col-span-7 flex flex-col justify-between relative bg-[color:var(--color-bone)] z-10">
            <div aria-hidden className="absolute top-0 right-0 w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] -translate-y-1/4 translate-x-1/4 rounded-full opacity-50 blur-3xl"
              style={{ background: "radial-gradient(closest-side, rgba(245,158,11,0.32), transparent 70%)" }} />

            <div className="relative px-6 lg:px-16 pt-20 pb-10 lg:py-24">
              <Reveal>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-muted)] mb-12">
                  <span className="inline-block w-2 h-2 rounded-full bg-[color:var(--color-amber)]" />
                  <span>Whole of market · Fees disclosed · Lytham St Annes</span>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="font-display leading-[0.96] tracking-[-0.035em] text-[clamp(2.75rem,7vw,5.5rem)] text-balance">
                  Energy<br />
                  <span className="italic text-[color:var(--color-amber-deep)]">planning</span>{" "}
                  for the<br />
                  people who<br />
                  <span className="italic">sign</span> the contracts.
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-10 max-w-md text-lg text-[color:var(--color-ink-soft)] leading-relaxed">
                  Whole-of-market procurement, bill validation and risk-managed flex. Built for UK businesses that buy energy with discipline, not under deadline pressure.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-10 flex flex-wrap items-center gap-5">
                  <Link
                    href="/contact#quote"
                    style={{ color: "#FFFFFF", backgroundColor: "var(--color-ink)" }}
                    className="inline-flex items-center gap-3 hover:bg-[color:var(--color-ink-soft)] font-medium px-7 py-4 rounded-full text-base transition-colors"
                  >
                    Get a quote
                    <ArrowRight size={16} />
                  </Link>
                  <a href={`tel:${site.phoneE164}`} className="group inline-flex items-center gap-3 text-[color:var(--color-ink)] font-medium">
                    <span className="w-11 h-11 rounded-full border border-[color:var(--color-line)] flex items-center justify-center group-hover:bg-[color:var(--color-bone-warm)] transition-all">
                      <Phone size={14} />
                    </span>
                    <span>{site.phone}</span>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Bottom strip with key facts */}
            <div className="relative border-t border-[color:var(--color-line)] px-6 lg:px-16 py-6 lg:py-8 bg-[color:var(--color-bone)]">
              <div className="grid grid-cols-3 gap-4 lg:gap-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]">Suppliers</p>
                  <p className="mt-1 font-display text-2xl lg:text-3xl tracking-tight">12<span className="text-[color:var(--color-amber-deep)]">+</span></p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]">Quote turnaround</p>
                  <p className="mt-1 font-display text-2xl lg:text-3xl tracking-tight">48<span className="text-[color:var(--color-amber-deep)] text-lg">hr</span></p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]">Charged to you</p>
                  <p className="mt-1 font-display text-2xl lg:text-3xl tracking-tight">£0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: full-bleed photography */}
          <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-full bg-[color:var(--color-ink)]">
            <img
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1400&q=85&auto=format&fit=crop"
              alt="Solar array at golden hour, representing the modern UK energy landscape Energy Planner navigates"
              loading="eager"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,22,40,0.45) 0%, rgba(10,22,40,0.1) 50%, rgba(245,158,11,0.18) 100%)" }} />

            {/* Floating market signal card over image */}
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10">
              <Reveal delay={0.2}>
                <div className="rounded-2xl bg-white/95 backdrop-blur-md p-6 lg:p-8 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[color:var(--color-amber-deep)] font-semibold">Market signal · this week</p>
                  <p className="mt-3 font-display text-xl lg:text-2xl tracking-tight leading-snug">
                    Wholesale electricity <span className="italic text-[color:var(--color-amber-deep)]">softening</span>, gas <span className="italic text-[color:var(--color-amber-deep)]">volatile</span>.
                  </p>
                  <p className="mt-3 text-sm text-[color:var(--color-ink-muted)] leading-relaxed">
                    Renewing in the next 6–12 months? The window to lock pricing is open on most meter types.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <SupplierMarquee />

      {/* POSITION STATEMENT with image collage */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow">01 · Position</p>
              <Reveal>
                <h2 className="mt-4 font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-[-0.025em] text-balance">
                  Most brokers sell the same three suppliers and call it <span className="italic text-[color:var(--color-amber-deep)]">choice.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-8 text-lg text-[color:var(--color-ink-muted)] leading-relaxed max-w-xl">
                  We quote every supplier currently active on your meter and call that the actual market. No commission-led recommendations, no panel of three, no pretending three is twelve.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85&auto=format&fit=crop"
                    alt="Modern UK office interior, the working environment for typical Energy Planner clients"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(10,22,40,0.6) 100%)" }} />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-[10px] uppercase tracking-[0.24em] opacity-80">Buyers we work with</p>
                    <p className="mt-2 font-display text-xl tracking-tight">SMEs · multi-site groups · manufacturers · care · hospitality · academies</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* BENTO SERVICES */}
      <section className="py-20 lg:py-28 bg-[color:var(--color-bone-warm)] border-y border-[color:var(--color-line)]">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-6 mb-12 lg:mb-16">
            <div className="col-span-12 lg:col-span-3">
              <p className="eyebrow">02 · Services</p>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <Reveal>
                <h2 className="font-display text-[clamp(1.875rem,4vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-balance">
                  Six disciplines. One operating model: buyer-first.
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-3 lg:gap-4">
            {/* Big feature — Procurement */}
            <Reveal className="md:col-span-4 md:row-span-2">
              <Link href="/energy-procurement" className="group relative block h-full min-h-[480px] rounded-[28px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1400&q=85&auto=format&fit=crop"
                  alt="Wind turbines on UK landscape at golden hour"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,22,40,0.3) 0%, rgba(10,22,40,0.92) 80%)" }} />
                <div className="relative h-full flex flex-col justify-end p-8 lg:p-12 text-white">
                  <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-amber)]">Featured · Risk-managed procurement</p>
                  <h3 className="mt-5 font-display text-3xl lg:text-5xl leading-[1.05] tracking-[-0.02em] text-white text-balance max-w-xl">
                    Procurement strategy for where energy is a line item that matters.
                  </h3>
                  <p className="mt-5 text-white/85 text-base lg:text-lg leading-relaxed max-w-lg">
                    Flex contracts, click strategies, baskets, partial fixed. Built around your profile and your team&apos;s capacity.
                  </p>
                  <div className="mt-8 flex items-center gap-3">
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
                  <Link href={s.h} className="group block h-full min-h-[200px] rounded-[28px] bg-white hover:bg-[color:var(--color-bone)] border border-[color:var(--color-line)] p-7 transition-colors">
                    <Icon size={22} strokeWidth={1.5} className="text-[color:var(--color-amber-deep)]" />
                    <h3 className="mt-8 font-display text-2xl tracking-tight">{s.t}</h3>
                    <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">{s.b}</p>
                    <span className="inline-flex items-center gap-1 mt-5 text-sm text-[color:var(--color-ink)] group-hover:gap-2 transition-all">Learn more <ArrowRight size={12} /></span>
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
                <Reveal key={s.h} className="md:col-span-3">
                  <Link href={s.h} className="group block h-full min-h-[170px] rounded-[28px] border border-[color:var(--color-line)] bg-white hover:bg-[color:var(--color-bone)] p-7 transition-colors">
                    <div className="flex items-start justify-between">
                      <Icon size={22} strokeWidth={1.5} className="text-[color:var(--color-amber-deep)]" />
                      <ArrowRight size={16} className="text-[color:var(--color-ink-muted)] group-hover:text-[color:var(--color-ink)] group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="mt-6 font-display text-xl lg:text-2xl tracking-tight">{s.t}</h3>
                    <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">{s.b}</p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMAGE-DRIVEN METHOD */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Image column */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative aspect-[3/4] rounded-[28px] overflow-hidden lg:sticky lg:top-32">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=85&auto=format&fit=crop"
                    alt="Person reviewing energy contract documents at desk"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, transparent 40%, rgba(10,22,40,0.7) 100%)" }} />
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[color:var(--color-amber)]">Our process</p>
                    <p className="mt-3 font-display text-2xl tracking-tight">Four steps. No 30-page proposal.</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Steps column */}
            <div className="lg:col-span-7">
              <p className="eyebrow">03 · Method</p>
              {[
                { num: "01", title: "Discovery", body: "Fifteen minutes. Meters, sites, supplier, renewal date. We send a one-page Letter of Authority by e-sign." },
                { num: "02", title: "Whole-of-market quote", body: "Live prices from every supplier currently quoting your meter. Our fee on every line." },
                { num: "03", title: "Recommendation", body: "Which contract we would sign in your position, and why. If your existing supplier is the right answer, we say that." },
                { num: "04", title: "Manage to renewal", body: "Bills validated for the term. Six-month renewal warning. The next negotiation starts on your timing." },
              ].map((step, i) => (
                <Reveal key={step.num} delay={i * 0.04}>
                  <div className="grid grid-cols-12 gap-4 py-8 lg:py-10 border-t border-[color:var(--color-line)] first:border-t-0 first:pt-0">
                    <div className="col-span-2">
                      <span className="font-display text-4xl lg:text-5xl text-[color:var(--color-amber-deep)] leading-none">{step.num}</span>
                    </div>
                    <div className="col-span-10">
                      <h3 className="font-display text-2xl lg:text-3xl tracking-tight">{step.title}</h3>
                      <p className="mt-3 text-[color:var(--color-ink-muted)] leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PULL QUOTE OVER PHOTOGRAPHY */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581094289810-adf5d25690e3?w=2000&q=85&auto=format&fit=crop"
          alt="Electricity pylons at dusk, abstract energy infrastructure"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,22,40,0.75) 0%, rgba(10,22,40,0.85) 100%)" }} />

        <div className="container-x relative">
          <Reveal>
            <blockquote className="max-w-5xl mx-auto text-center text-white">
              <p className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.08] tracking-[-0.025em] text-balance">
                &ldquo;Buying energy well is a discipline.<br />
                <span className="italic text-[color:var(--color-amber)]">It is not</span> what gets sold as one.&rdquo;
              </p>
              <footer className="mt-12 text-xs uppercase tracking-[0.24em] text-white/60">
                Energy Planner · House view
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* FAQ — trimmed */}
      <section className="py-24 lg:py-32 bg-[color:var(--color-bone-warm)] border-b border-[color:var(--color-line)]">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 mb-14">
            <div className="lg:col-span-4">
              <p className="eyebrow">04 · Questions</p>
              <h2 className="mt-4 font-display text-[clamp(1.875rem,3.5vw,3rem)] leading-[1.1] tracking-[-0.02em]">
                Quick answers to the questions buyers ask.
              </h2>
              <Link href="/guides" className="inline-flex items-center gap-2 mt-8 text-sm font-medium hover:text-[color:var(--color-amber-deep)]">
                Read the full guides <ArrowRight size={14} />
              </Link>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-10">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={(i % 2) * 0.05}>
                  <div>
                    <h3 className="font-display text-lg lg:text-xl tracking-tight">{f.q}</h3>
                    <p className="mt-3 text-[color:var(--color-ink-muted)] text-sm leading-relaxed">{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
