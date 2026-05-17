import { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "How We Get Paid | Transparent Energy Broker Fee Disclosure",
  description: "Energy Planner is paid by the supplier you choose, via a small uplift per kWh disclosed in writing on every quote. Full transparency. No direct charge to your business.",
  alternates: { canonical: "/how-we-get-paid" },
};

const faqs = [
  { q: "Do I pay Energy Planner directly?", a: "No. We are paid by the supplier you choose at the point you sign a contract with them, via a small uplift per kilowatt-hour added to the unit rate. That uplift is disclosed in writing on every quote we issue." },
  { q: "How much is the broker uplift typically?", a: "Across a typical SME contract, our uplift sits in the 0.1 to 0.5 pence per kWh range. The exact number is on the quote you see before you sign. On larger flex contracts the uplift is usually lower in pence terms but spread over much higher volume." },
  { q: "Is the broker uplift on top of the supplier price or part of it?", a: "It is built into the unit rate the supplier quotes us. We show the uplift separately so you can see what portion of the unit rate is supplier margin and what is broker fee. The total you pay per kWh is exactly what is on the quote." },
  { q: "What if I want to compare your quote to a direct supplier quote?", a: "You can. Ask the supplier for a direct quote, then compare net. Direct quotes from supplier sales lines are typically priced at retail without negotiation room, so the brokered net often comes out lower even with our uplift included. If a direct quote beats ours, take it." },
  { q: "What is the Ofgem TPI Code of Practice?", a: "The Third Party Intermediary Code of Practice sets standards for energy brokers including mandatory fee disclosure, fair sales practices and complaints handling. Ofgem is moving aspects of this into formal regulation. We operate to TPI Code standards." },
];

export default function HowWeGetPaidPage() {
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ label: "Home", href: "/" }, { label: "How we get paid", href: "/how-we-get-paid" }]),
        faqSchema(faqs),
      ]} />

      <section className="container-x pt-24 lg:pt-36 pb-12">
        <Reveal><span className="eyebrow">Fee transparency</span></Reveal>
        <Reveal delay={0.05}><h1 className="mt-2 max-w-4xl text-balance">How Energy Planner gets paid, in plain English.</h1></Reveal>
        <Reveal delay={0.1}><p className="lede mt-8 max-w-2xl">No hidden margin. No undisclosed commissions. No charges levied direct to your business. The supplier pays us a small per-kWh uplift, and you see the exact number on every quote before you sign.</p></Reveal>
      </section>

      <section className="container-x py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-12">
            <Reveal>
              <div>
                <h2>The mechanism, step by step</h2>
                <ol className="mt-5 space-y-4 text-lg text-[color:var(--color-ink-muted)] leading-relaxed">
                  <li><strong className="text-[color:var(--color-ink)] block">01. We collect quotes.</strong> Using your Letter of Authority, we request live prices from every B2B supplier currently quoting on your meter.</li>
                  <li><strong className="text-[color:var(--color-ink)] block">02. The supplier quotes a base rate.</strong> This is the unit rate they would offer us without any broker uplift.</li>
                  <li><strong className="text-[color:var(--color-ink)] block">03. We add a disclosed uplift.</strong> Typically 0.1 to 0.5 pence per kWh, shown separately on the quote.</li>
                  <li><strong className="text-[color:var(--color-ink)] block">04. You see both numbers.</strong> The base rate and the uplift, on the same line, before you decide.</li>
                  <li><strong className="text-[color:var(--color-ink)] block">05. You sign or you do not.</strong> If you sign, the supplier pays us our uplift across the contract life. If you do not, we are paid nothing.</li>
                </ol>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h2>Why brokered pricing usually still wins</h2>
                <p className="mt-5 text-lg leading-relaxed text-[color:var(--color-ink-muted)]">Suppliers reserve their best wholesale-driven pricing for brokered volume. A direct walk-up quote from a supplier sales line is typically priced at retail with no negotiation room. The brokered net (supplier price plus broker uplift) usually beats the direct quote even with our fee included. If it does not, take the direct quote. We will tell you when that is the case.</p>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h2>What we will never do</h2>
                <ul className="mt-5 space-y-3 text-lg text-[color:var(--color-ink-muted)]">
                  <li>Hide the broker fee inside the unit rate without disclosure.</li>
                  <li>Push you onto a longer contract for the higher commission take.</li>
                  <li>Recommend a supplier because their commission is higher, not their price.</li>
                  <li>Charge you a fee on top of the brokered uplift.</li>
                  <li>Auto-roll your contract or lock you in beyond what you signed.</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <Reveal>
              <div className="rounded-3xl bg-[color:var(--color-ink)] text-white p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-amber)] mb-4">Sample disclosure</p>
                <h3 className="text-white text-2xl font-display mb-6">What you see on every quote.</h3>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between text-white/80"><span>Supplier base unit rate</span><span>24.40 p/kWh</span></div>
                  <div className="flex justify-between text-white/80"><span>Standing charge</span><span>52 p/day</span></div>
                  <div className="flex justify-between text-[color:var(--color-amber)] border-t border-white/15 pt-3"><span>Energy Planner uplift</span><span>0.30 p/kWh</span></div>
                  <div className="flex justify-between text-white font-semibold pt-3 border-t border-white/15"><span>Total unit rate</span><span>24.70 p/kWh</span></div>
                </div>
                <p className="text-xs text-white/60 mt-6 leading-relaxed">Illustrative figures. Real quotes show the same breakdown structure. Pass-through items shown separately.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-bone-warm)] border-y border-[color:var(--color-line)] py-20 lg:py-24">
        <div className="container-x">
          <div className="max-w-3xl">
            <Reveal><span className="eyebrow">Questions on fees</span></Reveal>
            <Reveal delay={0.05}><h2 className="mt-2">What buyers ask before signing anything.</h2></Reveal>
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

      <CtaBlock title="See it for yourself." subtitle="The next quote we send will have the broker uplift disclosed line by line. No marketing. Just the numbers." />
    </>
  );
}
