import { Metadata } from "next";
import { PillarPage } from "@/components/sections/PillarPage";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Energy Procurement Strategy | Risk-Managed Flex & Fixed Contracts",
  description: "Strategic energy procurement for UK businesses. Risk-managed flexible contracts, click strategies, basket procurement and fixed-price options designed around your usage profile.",
  alternates: { canonical: "/energy-procurement" },
};

const faqs = [
  { q: "What is the difference between fixed-price and flexible energy procurement?", a: "Fixed-price locks unit rates and standing charges for a term, giving full price certainty. Flexible contracts (flex) let you buy energy in tranches at wholesale prices over a buying window, hedging against spikes but requiring active management. Flex typically makes sense at around 1 GWh+ annual consumption." },
  { q: "What is a basket flex contract?", a: "A basket combines multiple businesses' or sites' demand into a single procurement vehicle. The supplier hedges the aggregated volume; participants benefit from scale-improved pricing and shared risk management. Best for portfolios in the 2-20 GWh range or groups of similar businesses." },
  { q: "What is a click strategy?", a: "A click strategy is a pre-agreed plan to buy tranches of your energy at defined market triggers (e.g. wholesale falls below X, or fixed dates throughout the buying window). It removes the emotion from procurement decisions and disciplines a flex contract to a strategy rather than guesswork." },
  { q: "Is risk-managed procurement only for large companies?", a: "Largely yes. Below around 1 GWh annual consumption the admin overhead and management cost usually outweigh the wholesale-exposure benefit. We will tell you honestly if your volume does not justify it." },
  { q: "Who manages the click decisions in a flex contract?", a: "Either you, your broker, or a delegated procurement manager. Most SMEs delegate. We provide market commentary, recommend click points against your agreed strategy, and execute on your sign-off. The decision is always yours." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Energy Procurement", href: "/energy-procurement" }]),
        faqSchema(faqs),
        serviceSchema({ name: "Energy Procurement Strategy", description: "Risk-managed flexible and fixed-price energy procurement for UK businesses with significant energy spend.", url: `${site.url}/energy-procurement`, serviceType: "Energy Procurement Consulting" }),
      ]} />
      <PillarPage
        eyebrow="Energy Procurement"
        title="Strategic procurement for businesses where energy is a material line item, not an afterthought."
        intro="Fixed-price, partial flex, full basket flex, click strategies. We design the procurement structure around your usage profile, risk tolerance and team capacity, then execute against it. Not a one-off switch."
        keyPoints={[
          "Fixed and flexible structures",
          "Click strategies on sign-off",
          "Multi-site basket support",
          "Market commentary, no jargon",
        ]}
        sections={[
          {
            heading: "When fixed-price is the right answer",
            body: "For most UK SMEs on stable usage profiles, a 24 or 36-month fixed contract bought at the right point in the wholesale cycle is the right call. Full price certainty, simple budgeting, no ongoing management cost. We are not in the business of selling complexity that does not earn its keep.",
          },
          {
            heading: "When flex starts to make sense",
            body: "Above around 1 GWh annual consumption, the spread between hedged-in-tranches pricing and a single point-in-time fix becomes large enough to justify the management overhead. Manufacturers, multi-site retailers, cold storage operators and process-heavy businesses typically benefit.",
            bullets: [
              "Full flex: buy 100% in tranches across a buying window",
              "Partial flex: fix the baseload, flex the variable demand",
              "Basket flex: pool with other businesses for scale-improved pricing",
              "Click strategy: pre-agreed triggers (price, time, market signal) discipline the buying",
            ],
          },
          {
            heading: "What we actually do",
            body: "Three workstreams. Strategy design (matching contract structure to your profile and risk). Execution (running the LOA, supplier engagement, click recommendations and signature). Ongoing monitoring (market commentary, bill validation, renewal planning).",
            bullets: [
              "Quarterly market commentary and click recommendations in plain English",
              "All click decisions remain with you, on email sign-off",
              "Bill audit and validation across the contract life",
              "Six-month renewal warning so you negotiate from choice",
            ],
          },
          {
            heading: "Industries we work with",
            body: "Manufacturing, hospitality groups, multi-site retail, care home groups, agriculture and horticulture, schools and academy trusts, warehouse and logistics operators. If your business has multiple sites or significant single-site demand, the procurement structure starts to matter.",
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { label: "Energy audits and bill validation", href: "/energy-audits" },
          { label: "Compare business energy", href: "/compare-business-energy" },
          { label: "Business gas", href: "/business-gas" },
        ]}
      />
    </>
  );
}
