import { Metadata } from "next";
import { PillarPage } from "@/components/sections/PillarPage";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Business Electricity Quotes & Prices per kWh",
  description: "Live UK business electricity quotes. Single-phase, three-phase and half-hourly meters. Compare every supplier's per-kWh rate with transparent broker fee disclosure.",
  alternates: { canonical: "/business-electricity" },
};

const faqs = [
  { q: "What is a typical business electricity rate per kWh?", a: "As of early 2026 most UK SMEs are paying 22-30p/kWh on negotiated fixed contracts, plus standing charges and pass-through items. Multi-site portfolios and half-hourly meters typically see lower unit rates due to scale and granular profile data." },
  { q: "What is the difference between single-phase and three-phase electricity?", a: "Single-phase covers most small businesses and runs on one live conductor. Three-phase uses three conductors and handles much heavier loads (workshops, industrial, larger commercial). The meter type affects which suppliers will quote and what tariffs are available." },
  { q: "What does half-hourly metering mean for procurement?", a: "Half-hourly (HH) settlement applies to sites with peak demand above 100 kVA and uses live consumption data settled every 30 minutes. It opens up more sophisticated procurement structures including pass-through, partial flex and basket buying. We can quote both fixed and flex on HH." },
  { q: "Can I get a green or renewable business electricity contract?", a: "Yes. Most suppliers offer REGO-backed contracts (Renewable Energy Guarantees of Origin) on standard tariffs, often at no premium. Genuinely traceable PPAs (Power Purchase Agreements) tend to start at 1-3 MWh demand and carry different commercial logic." },
  { q: "How do I switch business electricity supplier without disruption?", a: "Switching is supply-side only, the electricity flowing into the meter does not change. We handle supplier acceptance, objection management and meter agent updates. There is no break in supply at any point." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Business Electricity", href: "/business-electricity" }]),
        faqSchema(faqs),
        serviceSchema({ name: "Business Electricity Procurement", description: "Whole-of-market UK business electricity procurement across single-phase, three-phase and half-hourly metering.", url: `${site.url}/business-electricity` }),
      ]} />
      <PillarPage
        eyebrow="Business Electricity"
        title="Business electricity quotes priced against your meter, not a panel."
        intro="Single-phase, three-phase or half-hourly. Single site or 200-site portfolio. We quote every UK B2B supplier currently active on your meter type and show our fee on every line."
        keyPoints={[
          "All meter types supported",
          "Live rates updated daily",
          "Multi-site portfolios welcome",
          "REGO-backed renewable options",
        ]}
        sections={[
          {
            heading: "What drives your business electricity price",
            body: "Wholesale (typically 50-60% of the unit rate), supplier margin (5-15%), network charges (15-20%), policy costs like CfD and RO (10-15%), and your own profile factors (peak demand, day-night split, load factor). We break these out so you can see where movement is coming from when prices change.",
          },
          {
            heading: "Single-phase, three-phase, half-hourly",
            bullets: [
              "Single-phase: typical small businesses, shops, offices. Standard meter (Profile Class 03/04). Most suppliers quote.",
              "Three-phase: workshops, multi-unit retail, industrial. Profile Class 05-08. Pricing benefits from scale on usage band.",
              "Half-hourly: 100+ kVA sites. Live settled consumption opens up pass-through, partial flex and basket procurement.",
            ],
          },
          {
            heading: "Multi-site portfolios",
            body: "If you run 5+ sites we treat the portfolio as a single procurement exercise. Suppliers price the portfolio as a single risk, which typically delivers 8-15% better unit rates than negotiating per-site. We also handle billing consolidation, meter agent transfers, and validation across the estate.",
          },
          {
            heading: "Green and renewable contracts",
            body: "REGO-backed tariffs are widely available and increasingly the default at no premium. For businesses with sustainability reporting obligations (ESOS Phase 4, SECR) we can structure contracts that produce the right paperwork at year end without paying for greenwash you do not need.",
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { label: "Compare business energy prices", href: "/compare-business-energy-prices" },
          { label: "Business gas", href: "/business-gas" },
          { label: "Risk-managed procurement", href: "/energy-procurement" },
        ]}
      />
    </>
  );
}
