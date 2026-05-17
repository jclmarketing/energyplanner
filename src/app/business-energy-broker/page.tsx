import { Metadata } from "next";
import { PillarPage } from "@/components/sections/PillarPage";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Business Energy Broker UK | Whole-of-Market, Fee Disclosed",
  description: "Independent UK business energy broker based in Lytham St Annes. Whole-of-market supplier panel. Broker fee disclosed on every quote. No charge direct to your business.",
  alternates: { canonical: "/business-energy-broker" },
};

const faqs = [
  { q: "What does a business energy broker do?", a: "An energy broker acts on behalf of the business buying energy. We hold a Letter of Authority that lets us request prices from every supplier, run the comparison, recommend a contract, and handle the supplier paperwork. The contract sits between you and the supplier, not us." },
  { q: "Are business energy brokers worth it?", a: "For most UK SMEs, yes. Suppliers price brokered contracts differently to direct walk-up quotes (the broker brings volume and saves the supplier acquisition cost). A good broker also unlocks suppliers you would never normally encounter and warns you about contract terms that look harmless but matter. The honest test is whether the broker discloses their fee. If they will not, find one who will." },
  { q: "How are energy brokers paid?", a: "Suppliers pay brokers a small uplift per kWh that is added to the unit rate and disclosed in writing under Ofgem's TPI Code of Practice. Our uplift is shown on every quote we issue, so you can see what we are paid and decide whether it justifies the service." },
  { q: "What is the Ofgem TPI Code of Practice?", a: "A voluntary code of conduct for Third Party Intermediaries (brokers) that requires fee disclosure, fair sales practices, complaints handling and contract transparency. Ofgem is in the process of moving aspects of this into mandatory regulation. We operate to TPI Code standards regardless." },
  { q: "Can I use a broker if I am already in contract?", a: "Yes. We can audit your current bills now, prepare the next renewal early (typically 6-12 months ahead of contract end), and source comparison pricing so you negotiate from choice rather than deadline pressure." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Business Energy Broker", href: "/business-energy-broker" }]),
        faqSchema(faqs),
        serviceSchema({ name: "Business Energy Broker Service", description: "Independent whole-of-market UK business energy broker with transparent fee disclosure.", url: `${site.url}/business-energy-broker`, serviceType: "Energy Broker" }),
      ]} />
      <PillarPage
        eyebrow="Business Energy Broker"
        title="An independent broker, in Lytham St Annes, working for the buyer."
        intro="Whole-of-market UK panel. Broker fee disclosed on every quote. No call centre. No commission-led recommendations. A planner first, a broker second."
        keyPoints={[
          "Whole-of-market panel",
          "Fee disclosed in pence per kWh",
          "Ofgem TPI Code aligned",
          "Lytham St Annes, UK-based",
        ]}
        sections={[
          {
            heading: "Why brokered pricing usually beats direct",
            body: "Suppliers reserve their best pricing for brokered volume because brokers bring books of qualified, contract-ready businesses with low acquisition cost. A walk-up direct quote from a supplier sales line will typically be quoted at retail rates with no negotiation room. A brokered quote is competitive by design.",
          },
          {
            heading: "What independent actually means",
            body: "We have no equity, supplier kick-backs or volume commitments with any single supplier. Every quote round is open to every B2B supplier currently quoting. The supplier that wins your contract is the one with the best price, terms and fit, not the one with the best commission deal for us.",
          },
          {
            heading: "The fee disclosure mechanism",
            body: "Every quote we issue includes our broker uplift in pence per kWh, shown separately from supplier rates. Across a typical SME contract, broker uplift sits in the 0.1 to 0.5p/kWh range. You see the number before you sign and can compare it to other brokers' quotes, or ask the supplier for a direct quote and compare the net difference.",
          },
          {
            heading: "What we will not do",
            bullets: [
              "Bundle you onto a 5-year contract for the commission lift",
              "Hide fees in the unit rate without disclosure",
              "Cold-call your team weekly with new offers",
              "Tell you to switch when your existing contract is genuinely competitive",
            ],
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { label: "How we get paid", href: "/how-we-get-paid" },
          { label: "Compare business energy", href: "/compare-business-energy" },
          { label: "About Energy Planner", href: "/about" },
        ]}
      />
    </>
  );
}
