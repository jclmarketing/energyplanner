import { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { ExternalLink, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team",
  description: "The team behind Energy Planner. Independent UK business energy procurement and audit specialists based in Lytham St Annes.",
  alternates: { canonical: "/team" },
};

const team = [
  {
    name: "Iain Founder",
    role: "Director",
    bio: "Twenty years inside UK B2B energy supply and brokerage. Iain founded Energy Planner to put procurement decisions back in the hands of the buyer, with whole-of-market access and full fee transparency on every contract.",
    linkedin: "#",
    email: "iain@energyplanner.co.uk",
  },
  {
    name: "Account Team",
    role: "Procurement & client services",
    bio: "Our procurement specialists run the quote rounds, manage supplier relationships, validate invoices and handle renewal planning. Every client has a named account contact, not a queue.",
    email: "team@energyplanner.co.uk",
  },
];

export default function TeamPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Team", href: "/team" }])} />

      <section className="container-x pt-24 lg:pt-36 pb-12">
        <Reveal><span className="eyebrow">The team</span></Reveal>
        <Reveal delay={0.05}><h1 className="mt-2 max-w-4xl text-balance">People who understand the supplier side, working for the buy side.</h1></Reveal>
        <Reveal delay={0.1}><p className="lede mt-8 max-w-2xl">Energy Planner is a small, focused team based in Lytham St Annes. Senior expertise on every account. No call centres, no script-reading.</p></Reveal>
      </section>

      <section className="container-x py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <article className="rounded-3xl border border-[color:var(--color-line)] bg-white p-10">
                <div className="w-20 h-20 rounded-2xl bg-[color:var(--color-amber-soft)] flex items-center justify-center font-display text-2xl text-[color:var(--color-amber-deep)] mb-6">
                  {m.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h2 className="font-display text-3xl text-[color:var(--color-ink)]">{m.name}</h2>
                <p className="mt-1 text-[color:var(--color-amber-deep)] text-sm font-semibold uppercase tracking-[0.16em]">{m.role}</p>
                <p className="mt-5 text-[color:var(--color-ink-muted)] leading-relaxed">{m.bio}</p>
                <div className="mt-6 flex items-center gap-4 text-sm">
                  {m.linkedin && <a href={m.linkedin} className="inline-flex items-center gap-2 text-[color:var(--color-ink)] hover:text-[color:var(--color-amber-deep)]"><ExternalLink size={14} />LinkedIn</a>}
                  {m.email && <a href={`mailto:${m.email}`} className="inline-flex items-center gap-2 text-[color:var(--color-ink)] hover:text-[color:var(--color-amber-deep)]"><Mail size={14} />{m.email}</a>}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 max-w-2xl">
          <Reveal>
            <div className="p-8 rounded-2xl bg-[color:var(--color-bone-warm)] border border-[color:var(--color-line)]">
              <p className="text-sm text-[color:var(--color-ink-muted)]">Working on something specific?{" "}
                <Link href="/contact" className="text-[color:var(--color-amber-deep)] underline underline-offset-4">Get in touch directly</Link>{" "}
                and ask for the team member best suited to your sector.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
