import { suppliers } from "@/lib/site";

export function TrustStrip({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <section
      className={
        isDark
          ? "bg-[color:var(--color-ink)] text-white border-y border-white/10"
          : "bg-[color:var(--color-bone-warm)] border-y border-[color:var(--color-line)]"
      }
    >
      <div className="container-x py-10">
        <p
          className={
            "text-xs font-semibold uppercase tracking-[0.22em] text-center mb-6 " +
            (isDark ? "text-white/50" : "text-[color:var(--color-ink-muted)]")
          }
        >
          Suppliers we compare and contract with
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {suppliers.map((s) => (
            <span
              key={s}
              className={
                "font-display text-base lg:text-lg tracking-tight " +
                (isDark ? "text-white/70" : "text-[color:var(--color-ink-soft)]")
              }
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
