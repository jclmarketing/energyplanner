import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  cta,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  cta?: { label: string; href: string }[];
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="container-x pt-20 pb-16 lg:pt-32 lg:pb-24">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="max-w-4xl mt-2 text-balance">{title}</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lede mt-6 max-w-2xl">{intro}</p>
        </Reveal>
        {cta && (
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-3">
              {cta.map((c, i) => (
                <Link key={c.href} href={c.href} className={i === 0 ? "btn btn-primary" : "btn btn-ghost"}>
                  {c.label}
                </Link>
              ))}
            </div>
          </Reveal>
        )}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-40 w-[640px] h-[640px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(245,158,11,0.30), transparent 70%)",
        }}
      />
    </section>
  );
}
