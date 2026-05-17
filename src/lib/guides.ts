export type Guide = {
  slug: string;
  title: string;
  description: string;
  answer: string;
  category: string;
  readMinutes: number;
  publishedAt: string;
  updatedAt: string;
  status: "published" | "draft";
};

export const guides: Guide[] = [
  {
    slug: "how-to-compare-business-energy-suppliers-2026",
    title: "How to compare business energy suppliers in 2026",
    description: "The honest 2026 guide to comparing UK business energy suppliers. What to ask, what to ignore, and how to avoid the most common procurement traps.",
    answer: "To compare UK business energy suppliers properly, request quotes from every B2B supplier currently active on your meter type and usage band, compare unit rates and standing charges separately from pass-through items, and demand that any broker discloses their per-kWh uplift on every quote. Switching takes 4 to 6 weeks and has no impact on supply continuity.",
    category: "Comparison",
    readMinutes: 8,
    publishedAt: "2026-05-17",
    updatedAt: "2026-05-17",
    status: "published",
  },
  {
    slug: "fixed-vs-flexible-business-energy-contracts",
    title: "Fixed vs flexible business energy contracts: pros, cons, when to use each",
    description: "A side-by-side comparison of fixed and flexible UK business energy contracts. Includes the volume thresholds and risk profiles where each makes sense.",
    answer: "A fixed-price contract locks unit rates and standing charges for a defined term, giving full budget certainty. A flexible (flex) contract lets you buy in tranches at wholesale prices over a buying window, smoothing exposure to wholesale spikes but requiring active management. Fixed suits most UK SMEs. Flex starts to make sense at roughly 1 GWh annual consumption.",
    category: "Procurement",
    readMinutes: 9,
    publishedAt: "2026-05-17",
    updatedAt: "2026-05-17",
    status: "published",
  },
  {
    slug: "how-to-read-your-business-energy-bill",
    title: "How to read your business energy bill",
    description: "A line-by-line walkthrough of a typical UK business energy bill. Unit rates, standing charges, capacity, pass-through and the bits suppliers hope you skip.",
    answer: "A UK business energy bill breaks down into unit rate (pence per kWh consumed), standing charge (pence per day regardless of use), capacity charge (KVA, for larger meters), pass-through items (CCL, RO, CfD, FiT, TNUoS, BSUoS), and VAT. Errors most commonly appear in standing charge application, KVA calculation, and pass-through pricing.",
    category: "Bill Validation",
    readMinutes: 7,
    publishedAt: "2026-05-17",
    updatedAt: "2026-05-17",
    status: "draft",
  },
  {
    slug: "when-should-i-renew-my-business-energy-contract",
    title: "When should I renew my business energy contract?",
    description: "How early to start negotiating your next business energy renewal, and why waiting until the last month almost always costs you money.",
    answer: "Start looking at your business energy renewal 6 to 12 months ahead of contract end. Most UK B2B suppliers will let us lock in pricing up to 12 months in advance. Waiting until the contract end-window risks auto-rollover to deemed or out-of-contract rates, which are typically 30 to 50% more expensive than negotiated tariffs.",
    category: "Procurement",
    readMinutes: 6,
    publishedAt: "2026-05-17",
    updatedAt: "2026-05-17",
    status: "draft",
  },
  {
    slug: "what-is-a-business-energy-broker",
    title: "What is a business energy broker and are they worth it?",
    description: "An honest explanation of how UK business energy brokers work, what they cost, and how to spot the ones who put your interests first.",
    answer: "A business energy broker is a Third Party Intermediary that requests quotes from multiple energy suppliers on a business's behalf, compares them, and handles contract negotiation and switching. Brokers are paid by the supplier via a per-kWh uplift, which the Ofgem TPI Code of Practice requires to be disclosed. A good broker is worth it for most UK SMEs because brokered pricing usually beats direct walk-up supplier quotes.",
    category: "Broker Guide",
    readMinutes: 8,
    publishedAt: "2026-05-17",
    updatedAt: "2026-05-17",
    status: "draft",
  },
  {
    slug: "esos-phase-4-compliance-uk-businesses",
    title: "ESOS Phase 4 compliance: complete guide for UK businesses",
    description: "Everything UK large undertakings need to know about ESOS Phase 4. Qualifying criteria, deadlines, assessor sourcing and submission process.",
    answer: "ESOS Phase 4 is the fourth four-year cycle of the UK Energy Savings Opportunity Scheme. Large undertakings (250+ employees or £44m+ turnover and £38m+ balance sheet) must complete an ESOS audit and submit compliance notification by 5 December 2027, covering the qualifying period ending 31 December 2026.",
    category: "Compliance",
    readMinutes: 10,
    publishedAt: "2026-05-17",
    updatedAt: "2026-05-17",
    status: "draft",
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getPublishedGuides(): Guide[] {
  return guides.filter((g) => g.status === "published");
}
