import { Metadata } from "next";
import { PillarPage } from "@/components/sections/PillarPage";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Compare Business Energy | Whole-of-Market UK Broker",
  description: "Compare business energy prices across every UK supplier currently quoting. Independent whole-of-market broker. Fixed-price and flexible contracts compared in 48 hours.",
  alternates: { canonical: "/compare-business-energy" },
};

const faqs = [
  { q: "How does a business energy comparison actually work?", a: "We collect a recent bill and a Letter of Authority, then send your meter details to every B2B supplier currently quoting in your distribution area. They return live prices and we lay them side by side with our fee disclosed line by line." },
  { q: "Will I save money switching business energy supplier?", a: "Often, but not always. Out-of-contract or deemed-rate tariffs are usually 30-50% more expensive than negotiated rates, so the savings there can be substantial. If you are already on a competitively priced fixed contract from 18-24 months ago, today's prices may be similar or higher. We tell you either way." },
  { q: "How long does the switch take?", a: "Typically 4 to 6 weeks from contract signature to go-live. We handle the supplier paperwork, objection management, and meter agent updates so your team does not chase it." },
  { q: "Can I compare prices if I am in contract?", a: "Yes. Most suppliers let us lock in renewal pricing up to 12 months ahead of your end date. The earlier we look, the more pricing windows are open to you. If you are within 90 days of renewal there is a real risk of auto-rollover to deemed rates, which is what we want to avoid." },
  { q: "Do you charge me to compare?", a: "No. We are paid by the supplier you choose, via a small uplift per kWh that is disclosed in writing on every quote. You see the uplift before signing and decide whether the savings justify it. See How We Get Paid for the full mechanism." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Compare Business Energy", href: "/compare-business-energy" }]),
        faqSchema(faqs),
        serviceSchema({
          name: "Business Energy Comparison",
          description: "Whole-of-market UK business energy comparison covering fixed-price and flexible contracts across electricity and gas.",
          url: `${site.url}/compare-business-energy`,
        }),
      ]} />
      <PillarPage
        eyebrow="Compare Business Energy"
        title="Compare every supplier quoting on your meter, not just the ones paying highest commission."
        intro="An independent UK whole-of-market business energy comparison built around your actual usage profile. Fixed-price, flexible, single or multi-site. Fees disclosed on every quote."
        keyPoints={[
          "Whole-of-market supplier panel",
          "Quotes typically within 48 hours",
          "Fee disclosed on every line",
          "No charge direct to your business",
        ]}
        sections={[
          {
            heading: "How a proper business energy comparison should work",
            body: "Most brokers run a comparison against three or four suppliers they have backed-out commission with. That is not whole-of-market. We quote every B2B supplier currently active in your distribution area and present you with everything that came back, including the contracts we would not recommend, so you can see the full landscape.",
            bullets: [
              "Single Letter of Authority covers all suppliers, no repeated paperwork",
              "Standing charges, unit rates, capacity charges and pass-through items shown separately",
              "Our uplift in pence per kWh disclosed against each option",
              "Side-by-side cost projection for 12, 24, 36 and 48 month terms",
            ],
          },
          {
            heading: "Fixed-price versus flexible: choose with eyes open",
            body: "A fixed-price contract is simple, predictable and right for most SMEs. A flexible contract lets larger users hedge against wholesale movements but introduces basket risk and admin overhead. We will not push you into flex just because the margin is higher for us. We map your usage profile against current curves and recommend the structure that fits.",
          },
          {
            heading: "What we need from you to start",
            body: "Three things and you are done. Anything missing we can chase from the supplier directly with the LOA.",
            bullets: [
              "A recent bill (PDF or photo is fine)",
              "Confirmation of meter point reference (MPAN for electric, MPRN for gas)",
              "A signed Letter of Authority (we send a single page e-sign)",
            ],
          },
          {
            heading: "After the comparison",
            body: "Once you have chosen a contract we handle the rollover, supplier objection management, and meter agent updates. We monitor invoices for the duration of the contract through our audit and validation process, and warn you six months ahead of renewal so the next negotiation starts when the market is right for you, not when the contract end-date forces it.",
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { label: "Compare business energy prices", href: "/compare-business-energy-prices" },
          { label: "Business electricity", href: "/business-electricity" },
          { label: "Business gas", href: "/business-gas" },
          { label: "How we get paid", href: "/how-we-get-paid" },
        ]}
      />
    </>
  );
}
