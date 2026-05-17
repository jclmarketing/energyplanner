import { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Energy Planner | Get a Quote in 60 Seconds",
  description: "Get a whole-of-market business energy quote in 60 seconds. Phone, email or contact form. Energy Planner Ltd, Lytham St Annes, Lancashire.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }])} />

      <section className="container-x pt-24 lg:pt-36 pb-12">
        <Reveal><span className="eyebrow">Get in touch</span></Reveal>
        <Reveal delay={0.05}><h1 className="mt-2 max-w-3xl text-balance">A 60-second form. A real reply within one working day.</h1></Reveal>
        <Reveal delay={0.1}><p className="lede mt-8 max-w-2xl">Fill in five short steps and we will come back with whole-of-market quotes from every supplier currently active on your meter. Fee disclosed on every line.</p></Reveal>
      </section>

      <section className="container-x py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div id="quote" className="lg:col-span-7 scroll-mt-24">
            <Reveal><QuoteForm /></Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Reveal>
              <div className="rounded-3xl border border-[color:var(--color-line)] bg-white p-8 lg:p-10 lg:sticky lg:top-32">
                <p className="eyebrow">Other ways to reach us</p>
                <h2 className="font-display text-2xl text-[color:var(--color-ink)] mt-2 mb-8">Speak to a person.</h2>

                <dl className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone size={20} className="text-[color:var(--color-amber-deep)] mt-1 shrink-0" />
                    <div>
                      <dt className="text-xs uppercase tracking-[0.16em] text-[color:var(--color-ink-muted)]">Phone</dt>
                      <dd className="mt-1"><a href={`tel:${site.phoneE164}`} className="font-display text-2xl text-[color:var(--color-ink)] hover:text-[color:var(--color-amber-deep)]">{site.phone}</a></dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail size={20} className="text-[color:var(--color-amber-deep)] mt-1 shrink-0" />
                    <div>
                      <dt className="text-xs uppercase tracking-[0.16em] text-[color:var(--color-ink-muted)]">Email</dt>
                      <dd className="mt-1"><a href={`mailto:${site.email}`} className="text-lg text-[color:var(--color-ink)] hover:text-[color:var(--color-amber-deep)]">{site.email}</a></dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin size={20} className="text-[color:var(--color-amber-deep)] mt-1 shrink-0" />
                    <div>
                      <dt className="text-xs uppercase tracking-[0.16em] text-[color:var(--color-ink-muted)]">Visit</dt>
                      <dd className="mt-1 text-[color:var(--color-ink)] text-lg">
                        {site.address.street}<br />
                        {site.address.locality}<br />
                        {site.address.region} {site.address.postalCode}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock size={20} className="text-[color:var(--color-amber-deep)] mt-1 shrink-0" />
                    <div>
                      <dt className="text-xs uppercase tracking-[0.16em] text-[color:var(--color-ink-muted)]">Hours</dt>
                      <dd className="mt-1 text-[color:var(--color-ink)] text-lg">Monday to Friday<br />09:00 to 17:30</dd>
                    </div>
                  </div>
                </dl>

                <div className="mt-10 pt-8 border-t border-[color:var(--color-line)]">
                  <p className="text-xs text-[color:var(--color-ink-muted)] leading-relaxed">
                    {site.legalName}. Registered in England &amp; Wales, company number {site.companiesHouseNumber}. Independent whole-of-market energy broker.
                  </p>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
