import { Metadata } from "next";
import { PillarPage } from "@/components/sections/PillarPage";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Business Gas Comparison & Quotes per kWh",
  description: "Compare business gas prices across every UK B2B supplier. Sub-25,000 kWh micro businesses through to multi-site portfolios on flex contracts. Fee disclosed on every quote.",
  alternates: { canonical: "/business-gas" },
};

const faqs = [
  { q: "What is the typical business gas price per kWh?", a: "As of early 2026, UK commercial gas fixed-price contracts typically come in at 6-10p/kWh on unit rate, plus standing charges of 30-80p/day depending on supplier and meter size. Larger volume (over 1 GWh/year) usually unlocks lower unit rates." },
  { q: "What is the cheapest business gas supplier?", a: "There is no single cheapest supplier across all profiles. Crown Gas, SEFE, TotalEnergies, Yu Energy, British Gas Business, EDF and Opus all win pricing in different volume bands and contract lengths. The cheapest supplier for your specific MPRN and usage band is what the comparison shows." },
  { q: "Can I switch to a green or carbon-neutral business gas contract?", a: "Yes. Most B2B suppliers offer carbon-offset gas tariffs, with carbon credit certificates issued at year end. Genuine biomethane (green gas) contracts are available but typically at a 30-50% premium and limited supplier availability." },
  { q: "What is the difference between sub-25,000 kWh and larger commercial gas?", a: "Sub-25,000 kWh sites are classified as micro businesses under Ofgem rules and have additional consumer-style protections. Above that threshold contract terms are more flexible (longer durations, more pricing structures, basket options) but with less regulatory cushioning." },
  { q: "Can I get a flex contract on business gas?", a: "Yes, typically from around 1 GWh/year consumption. Flex contracts let you click in tranches of volume at wholesale prices over a fixed window, smoothing out wholesale spikes. The trade-off is admin overhead and a need to actively manage the basket. We can recommend whether the volume justifies it." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Business Gas", href: "/business-gas" }]),
        faqSchema(faqs),
        serviceSchema({ name: "Business Gas Procurement", description: "Whole-of-market UK business gas procurement from sub-25,000 kWh micro businesses to multi-site flex baskets.", url: `${site.url}/business-gas` }),
      ]} />
      <PillarPage
        eyebrow="Business Gas"
        title="The cheapest business gas is the one priced to your actual profile."
        intro="UK commercial gas contracts compared across every B2B supplier. Sub-25,000 kWh micro through to multi-site flex baskets. Fixed and flexible options laid out side by side."
        keyPoints={[
          "All consumption bands",
          "Micro through to multi-site flex",
          "Green and carbon-neutral options",
          "Transparent fee disclosure",
        ]}
        sections={[
          {
            heading: "What goes into a business gas price",
            body: "Wholesale gas (typically 60-70% of the unit rate), supplier margin and risk premium, transportation costs (NTS and LDZ), policy costs (CCL, RIIO) and your own profile (load, seasonality, AQ). Each component moves at different speeds, which is why a single supplier's quote can vary 15% week to week.",
          },
          {
            heading: "Micro, SME and large commercial",
            bullets: [
              "Sub-25,000 kWh/year: Ofgem micro business protections apply. Most B2B suppliers quote. Simple fixed contracts dominate.",
              "25,000 to 250,000 kWh/year: SME band. Wider supplier appetite, more contract structures, longer terms available.",
              "250,000 kWh+ : Larger commercial. Better unit pricing, possible flex structures, dedicated account management.",
              "1 GWh+ : Flex contracts viable. Click strategies, hedged baskets, partial fixed available.",
            ],
          },
          {
            heading: "Choosing between fixed and flex",
            body: "Fixed is right for most businesses. You sign a price for a term and the only thing that moves is pass-through items. Flex is right for businesses with significant volume and the management capacity to actively click tranches as wholesale dips. We will only recommend flex when the volume and team genuinely justify the overhead.",
          },
          {
            heading: "The auto-rollover trap",
            body: "If you do not renew before your contract end date, suppliers can roll you onto deemed or out-of-contract rates that are typically 30-50% higher. We hold a calendar reminder six months before your end date and circle back so you negotiate from choice, not deadline pressure.",
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { label: "Compare business energy", href: "/compare-business-energy" },
          { label: "Business electricity", href: "/business-electricity" },
          { label: "Risk-managed procurement", href: "/energy-procurement" },
        ]}
      />
    </>
  );
}
