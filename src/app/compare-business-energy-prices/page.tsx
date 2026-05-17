import { Metadata } from "next";
import { PillarPage } from "@/components/sections/PillarPage";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Compare Business Energy Prices | Independent UK Broker",
  description: "Compare live business energy prices across every UK supplier. Transparent fees, fixed-price and flexible contracts compared side-by-side. Quotes in 48 hours.",
  alternates: { canonical: "/compare-business-energy-prices" },
};

const faqs = [
  { q: "Why do business energy prices vary so much between suppliers?", a: "Wholesale costs are similar across suppliers but margin, risk premium, network costs and customer-segment strategy vary widely. A supplier targeting growth in your size band may price 15-25% below a supplier whose books are full. That is the spread we surface." },
  { q: "Are prices fixed for the whole contract?", a: "On a fixed-price contract, yes for unit rates and standing charges. Pass-through charges (TNUoS, BSUoS, CfD, RO) move with market and are typically billed separately. We make this transparent in the quote." },
  { q: "What is a good business electricity price per kWh in 2026?", a: "It depends heavily on profile and contract length. As of early 2026, typical UK SME fixed-price quotes are in the 22-30p/kWh range for electricity and 6-10p/kWh for gas, before standing charges and pass-throughs. Half-hourly and multi-site portfolios usually see better unit rates but the comparison gets more complex." },
  { q: "Can prices change after I sign?", a: "Unit rates and standing charges on a fixed contract cannot change. Government-set pass-through charges (climate change levy, CfD, etc.) can move and are billed at the rates in force when the unit is consumed. We flag this on every quote." },
  { q: "How quickly do prices move?", a: "Wholesale prices update intraday. Supplier quotes are usually valid for 24 to 72 hours. We move fast on your behalf because waiting two weeks to sign is the most common cause of a price increase." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Compare Business Energy Prices", href: "/compare-business-energy-prices" }]),
        faqSchema(faqs),
        serviceSchema({ name: "Business Energy Price Comparison", description: "Live business energy price comparison across UK suppliers with transparent fee disclosure.", url: `${site.url}/compare-business-energy-prices` }),
      ]} />
      <PillarPage
        eyebrow="Compare Business Energy Prices"
        title="Live business energy prices, every supplier, fee disclosed on every line."
        intro="The fastest way to see what your business should actually be paying for electricity and gas. We pull live prices from every B2B supplier currently quoting, lay them side by side, and show our fee separately so you can judge the value."
        keyPoints={[
          "Live wholesale-driven prices",
          "Single, three-phase and HH metering",
          "Multi-site portfolios supported",
          "Fee disclosed per kWh, every quote",
        ]}
        sections={[
          {
            heading: "Why your current price might be 30% higher than the market",
            body: "Three reasons. One: you rolled onto deemed or out-of-contract rates, which suppliers price punitively. Two: your last contract was signed in the 2022-2023 wholesale spike and the renewal pricing is benchmarked against that, not today. Three: your broker had a panel of three suppliers and you got the cheapest of the three, not the cheapest available.",
          },
          {
            heading: "What we compare",
            bullets: [
              "Unit rates (pence per kWh) for day, night, evening/weekend where relevant",
              "Standing charges (pence per day)",
              "Capacity charges and KVA where applicable",
              "Pass-through items shown line by line",
              "Contract length options (12, 24, 36, 48 months)",
              "Our broker uplift, disclosed in pence per kWh",
            ],
          },
          {
            heading: "Pricing factors most brokers gloss over",
            body: "Quote validity windows, exit fees, basket clauses, auto-rollover terms, change-of-tenancy provisions, and credit-check triggers all affect the real economics of a contract. We surface these so you do not sign something that looks cheap on day one and expensive on month thirteen.",
          },
          {
            heading: "What happens after you compare",
            body: "You pick a contract or you do not. If you do, we run the signature, supplier acceptance and meter agent updates. If you do not, we keep a calendar reminder for your renewal date and circle back. No follow-up calls in the meantime.",
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { label: "Compare business energy", href: "/compare-business-energy" },
          { label: "Business electricity prices", href: "/business-electricity" },
          { label: "Business gas prices per kWh", href: "/business-gas" },
        ]}
      />
    </>
  );
}
