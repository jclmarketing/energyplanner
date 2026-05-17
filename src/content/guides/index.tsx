import { ReactNode } from "react";
import { GuideHowToCompare } from "./how-to-compare";
import { GuideFixedVsFlex } from "./fixed-vs-flex";

export type GuideContent = {
  body: ReactNode;
  faqs?: { q: string; a: string }[];
};

export const guideContent: Record<string, GuideContent> = {
  "how-to-compare-business-energy-suppliers-2026": {
    body: <GuideHowToCompare />,
    faqs: [
      { q: "How many suppliers should I get quotes from?", a: "Every supplier currently quoting on your meter type and usage band. In practice that is typically 6 to 12 active suppliers depending on your size and profile. A broker with a whole-of-market panel covers all of them in a single request." },
      { q: "Should I ever go direct to a supplier?", a: "Occasionally. Suppliers reserve their best pricing for brokered volume, so direct walk-up quotes are usually higher. But if you have a long relationship with a supplier and your renewal is competitive, taking the direct quote and skipping the broker fee can be the right call. Compare and decide." },
      { q: "What is the worst-case scenario if I do not switch?", a: "Auto-rollover to deemed or out-of-contract rates, typically 30 to 50% higher than negotiated tariffs. On a £25k/year electricity bill, that is £7,500 to £12,500 of avoidable cost per year of inaction." },
      { q: "Is there a best time of year to switch?", a: "Not really. Wholesale prices move continuously and seasonally, but a good broker is in the market every day. The best time to switch is when your contract end window opens (typically 6 to 12 months before end date), not when the calendar says January." },
    ],
  },
  "fixed-vs-flexible-business-energy-contracts": {
    body: <GuideFixedVsFlex />,
    faqs: [
      { q: "What annual consumption is the threshold for flex?", a: "Around 1 GWh (1,000,000 kWh) per year. Below that, the wholesale spread you can capture with flex usually does not cover the management overhead. Above 2-3 GWh, flex becomes increasingly attractive." },
      { q: "Can I switch from fixed to flex partway through a contract?", a: "No. Each contract is fixed-term and fixed-structure. The decision point is at renewal. We can model how a flex contract would have performed against your historic fixed contract as a way to test whether the switch makes sense for next time." },
      { q: "What is the worst case on a flex contract?", a: "You click all your tranches at the wrong moments and end up paying more than you would have on a fixed contract. A click strategy and disciplined execution exist specifically to mitigate this. We will not recommend flex without a click strategy in place." },
      { q: "Is partial flex a thing?", a: "Yes. You fix your baseload (the predictable minimum demand) and flex the variable demand on top. Common for manufacturers, cold storage and 24/7 operations where baseload is large and predictable." },
    ],
  },
};
