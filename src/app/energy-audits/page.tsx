import { Metadata } from "next";
import { PillarPage } from "@/components/sections/PillarPage";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Energy Bill Validation, Audits, ESOS Phase 4 & SECR",
  description: "Energy bill validation, invoice audits and reclaim of historic overcharges for UK businesses. ESOS Phase 4 and SECR compliance support. No-find-no-fee on recovery.",
  alternates: { canonical: "/energy-audits" },
};

const faqs = [
  { q: "What is an energy bill audit?", a: "A line-by-line check of your historic energy invoices against your contract terms, meter readings and supplier billing rules. We typically find errors in 30-60% of audited accounts, most commonly in standing charge calculation, pass-through pricing, KVA charges and tariff coding." },
  { q: "How far back can I reclaim energy overcharges?", a: "Under the Limitation Act 1980, contractual claims in England and Wales can typically go back 6 years. We focus the audit on the most recent 24-48 months because that is where the volume of recoverable error usually sits, and supplier records are most accurate." },
  { q: "Do you charge if you find nothing?", a: "No. The recovery audit is no-find-no-fee. If we find no recoverable error, you owe nothing. If we recover money, we share an agreed percentage of the recovery as our fee, deducted at source." },
  { q: "What is ESOS Phase 4?", a: "The Energy Savings Opportunity Scheme Phase 4 compliance deadline is 5 December 2027. Large undertakings (250+ employees or £44m+ turnover and £38m+ balance sheet) must complete an ESOS audit every four years. We help scope, source assessors and prepare submission packs." },
  { q: "What is SECR reporting?", a: "Streamlined Energy and Carbon Reporting (SECR) is the annual disclosure requirement for large UK companies covering energy use, GHG emissions and intensity ratios. We support data collection, calculation, and the narrative section for inclusion in your director's report." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Energy Audits", href: "/energy-audits" }]),
        faqSchema(faqs),
        serviceSchema({ name: "Energy Audits and Bill Validation", description: "Energy bill validation, recovery audits and ESOS/SECR compliance support for UK businesses.", url: `${site.url}/energy-audits`, serviceType: "Energy Audit Service" }),
      ]} />
      <PillarPage
        eyebrow="Audits, Validation & Compliance"
        title="Check the bills you already pay before you negotiate the next contract."
        intro="A surprising number of UK businesses are paying more than their contract says they should. We audit the invoices, recover overcharges, and handle the ESOS and SECR paperwork while we are in the data."
        keyPoints={[
          "Recovery on no-find-no-fee",
          "Typical error rate 30-60%",
          "ESOS Phase 4 ready",
          "SECR data and narrative",
        ]}
        sections={[
          {
            heading: "Why bill audits find money 30-60% of the time",
            body: "Suppliers bill millions of meters across thousands of tariff variants. Errors get introduced at change of tenancy, contract renewal, meter exchange, supplier acquisition, and supplier system migration. Most errors are small per-invoice but compound over months. We have seen single-site recoveries from a few hundred pounds to over £40,000.",
          },
          {
            heading: "What we audit",
            bullets: [
              "Standing charge application against contract terms",
              "Unit rate accuracy across tariff zones (day, night, eve/weekend)",
              "KVA and capacity charges versus authorised supply capacity",
              "Climate Change Levy, CfD, RO and FiT pass-through accuracy",
              "Estimated versus actual reads and re-billing",
              "VAT rate accuracy (5% versus 20% qualifying use)",
              "Out-of-contract and deemed-rate billing periods",
            ],
          },
          {
            heading: "ESOS Phase 4: scope and timeline",
            body: "Phase 4 covers the qualifying period of 31 December 2026 backwards. Compliance must be submitted by 5 December 2027. We do not deliver the lead assessor sign-off (that requires a Lead Assessor on the Environment Agency register) but we scope your obligation, prepare the energy data, source a qualified assessor, and run the submission process.",
          },
          {
            heading: "SECR: the annual disclosure",
            body: "SECR sits in your director's report (or strategic report) and discloses UK energy use, associated GHG emissions, intensity ratios and energy efficiency actions taken. We pull supplier data, calculate emissions to the relevant DEFRA conversion factors, and draft narrative copy that satisfies the regulation without overcommitting.",
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { label: "Energy procurement strategy", href: "/energy-procurement" },
          { label: "Compare business energy", href: "/compare-business-energy" },
        ]}
      />
    </>
  );
}
