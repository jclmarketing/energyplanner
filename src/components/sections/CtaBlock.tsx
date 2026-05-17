import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import { ArrowRight, Phone } from "lucide-react";

export function CtaBlock({
  title = "Ready for a sharper energy strategy?",
  subtitle = "60-second multi-step form, no hard sell, no auto-renewal traps. We'll come back with the best contract structures and prices we can source for your specific usage profile.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <div className="rounded-3xl bg-[color:var(--color-ink)] text-white px-8 py-14 lg:px-16 lg:py-20 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -bottom-32 -right-20 w-[520px] h-[520px] rounded-full opacity-25 blur-3xl"
              style={{ background: "radial-gradient(closest-side, rgba(245,158,11,0.55), transparent 70%)" }}
            />
            <div className="relative max-w-2xl">
              <h2 className="text-white">{title}</h2>
              <p className="mt-5 text-white/75 text-lg leading-relaxed">{subtitle}</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/contact#quote" className="btn btn-amber">
                  Get a quote
                  <ArrowRight size={16} />
                </Link>
                <a href={`tel:${site.phoneE164}`} className="btn btn-ghost text-white border-white/20 hover:bg-white/5">
                  <Phone size={14} />
                  Call {site.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
