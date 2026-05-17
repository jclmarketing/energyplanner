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
          <div className="relative rounded-[28px] overflow-hidden bg-[color:var(--color-ink)] text-white">
            {/* Imagery — abstract industrial photography */}
            <div className="absolute inset-0 opacity-30 mix-blend-luminosity">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80&auto=format&fit=crop"
                alt=""
                aria-hidden
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(110deg, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.85) 50%, rgba(10,22,40,0.6) 100%)" }} />
            </div>
            <div aria-hidden className="absolute -bottom-32 -right-20 w-[520px] h-[520px] rounded-full opacity-35 blur-3xl"
              style={{ background: "radial-gradient(closest-side, rgba(245,158,11,0.65), transparent 70%)" }} />

            <div className="relative px-8 py-14 lg:px-16 lg:py-24">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-amber)] mb-6">Next step</p>
                <h2 className="text-white font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.02em] text-balance">{title}</h2>
                <p className="mt-6 text-white/80 text-lg leading-relaxed max-w-xl">{subtitle}</p>
                <div className="mt-12 flex flex-wrap items-center gap-5">
                  <Link
                    href="/contact#quote"
                    className="inline-flex items-center gap-3 bg-[color:var(--color-amber)] text-[color:var(--color-ink)] hover:bg-white hover:text-[color:var(--color-ink)] font-semibold px-8 py-4 rounded-full text-base transition-colors"
                  >
                    Get a quote
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href={`tel:${site.phoneE164}`}
                    className="group inline-flex items-center gap-3 text-white font-medium"
                  >
                    <span className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white transition-all">
                      <Phone size={14} />
                    </span>
                    <span className="text-base">{site.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
