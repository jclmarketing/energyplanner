import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/site";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[color:var(--color-ink)] text-[color:var(--color-bone)] mt-24">
      <div className="container-x py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo/white.svg" alt="Energy Planner" width={56} height={56} className="h-12 w-12" />
              <span className="font-display text-xl text-white tracking-tight">Energy Planner</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-[260px]">
              Independent business energy procurement and audit specialist based in Lytham St Annes.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/70">
              <a href={`tel:${site.phoneE164}`} className="flex items-center gap-2 hover:text-white">
                <Phone size={14} />
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail size={14} />
                {site.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>
                  {site.address.street}, {site.address.locality}, {site.address.postalCode}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {nav.footer.services.map((it) => (
                <li key={it.href}>
                  <Link href={it.href} className="hover:text-white">{it.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white mb-5">Company</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {nav.footer.company.map((it) => (
                <li key={it.href}>
                  <Link href={it.href} className="hover:text-white">{it.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white mb-5">Resources</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {nav.footer.resources.map((it) => (
                <li key={it.href}>
                  <Link href={it.href} className="hover:text-white">{it.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/50">
          <div>
            &copy; {new Date().getFullYear()} {site.legalName}. Registered in England &amp; Wales, company number {site.companiesHouseNumber}.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/how-we-get-paid" className="hover:text-white">How we get paid</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
