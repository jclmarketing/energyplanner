"use client";

/**
 * Supplier marquee — dual-row infinite horizontal scroll with stylised
 * supplier wordmarks. Wordmarks are intentionally typographic (not pixel-
 * replica brand logos) so the strip reads as a cohesive partner roster
 * rather than a Bootstrap stock-photo wall.
 */

type Supplier = {
  name: string;
  style?: "default" | "serif" | "thin" | "wide" | "bold" | "mono" | "italic";
  letterSpacing?: string;
};

const ROW_A: Supplier[] = [
  { name: "British Gas", style: "wide" },
  { name: "EDF Energy", style: "bold", letterSpacing: "-0.04em" },
  { name: "E.ON Next", style: "thin" },
  { name: "SSE", style: "bold" },
  { name: "Drax", style: "serif" },
  { name: "n.power", style: "default" },
  { name: "Opus Energy", style: "italic" },
  { name: "Crown Gas & Power", style: "serif" },
];

const ROW_B: Supplier[] = [
  { name: "Yu Energy", style: "bold" },
  { name: "Smartest Energy", style: "thin" },
  { name: "TotalEnergies", style: "wide" },
  { name: "SEFE Energy", style: "default" },
  { name: "Pozitive Energy", style: "italic" },
  { name: "Conrad Energy", style: "serif" },
  { name: "Engie", style: "thin", letterSpacing: "0.08em" },
  { name: "Gazprom Energy", style: "default" },
];

function Wordmark({ supplier }: { supplier: Supplier }) {
  const base = "shrink-0 px-8 lg:px-12 whitespace-nowrap text-[28px] lg:text-[34px] leading-none";
  const styles: Record<NonNullable<Supplier["style"]>, string> = {
    default: "font-sans font-medium tracking-tight",
    serif: "font-display font-medium italic",
    thin: "font-sans font-light tracking-wide",
    wide: "font-sans font-semibold tracking-[0.12em] uppercase text-[24px] lg:text-[28px]",
    bold: "font-sans font-bold tracking-tight",
    mono: "font-mono font-medium",
    italic: "font-display font-medium italic tracking-tight",
  };
  return (
    <span
      className={`${base} ${styles[supplier.style ?? "default"]}`}
      style={{ letterSpacing: supplier.letterSpacing }}
    >
      {supplier.name}
    </span>
  );
}

function Row({ suppliers, direction, duration }: { suppliers: Supplier[]; direction: "left" | "right"; duration: number }) {
  const items = [...suppliers, ...suppliers, ...suppliers];
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex items-center"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
          width: "max-content",
        }}
      >
        {items.map((s, i) => (
          <Wordmark key={`${s.name}-${i}`} supplier={s} />
        ))}
      </div>
    </div>
  );
}

export function SupplierMarquee() {
  return (
    <section className="relative bg-[color:var(--color-ink)] text-white overflow-hidden">
      <div className="container-x pt-12 pb-6">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/40">
          <span>Whole-of-market supplier panel</span>
          <span className="hidden sm:inline">12+ active suppliers</span>
        </div>
      </div>

      <div className="space-y-3 py-6 text-white/85">
        <Row suppliers={ROW_A} direction="left" duration={45} />
        <Row suppliers={ROW_B} direction="right" duration={55} />
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[color:var(--color-ink)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[color:var(--color-ink)] to-transparent" />

      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.333%, 0, 0); }
        }
        @keyframes marquee-right {
          0% { transform: translate3d(-33.333%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
      `}</style>

      <div className="container-x pt-2 pb-12">
        <div className="flex items-center justify-end text-xs uppercase tracking-[0.22em] text-white/40">
          <span>Every supplier currently quoting your meter</span>
        </div>
      </div>
    </section>
  );
}
