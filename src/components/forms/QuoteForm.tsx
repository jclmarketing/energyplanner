"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

type MeterType = "single-phase" | "three-phase" | "half-hourly" | "unknown";
type SpendBand = "under-5k" | "5k-15k" | "15k-50k" | "50k-150k" | "150k-plus" | "unknown";
type RenewalWindow = "in-contract" | "0-3" | "3-6" | "6-12" | "out-of-contract" | "unknown";

type FormState = {
  postcode: string;
  meter: MeterType | "";
  spend: SpendBand | "";
  renewal: RenewalWindow | "";
  name: string;
  company: string;
  email: string;
  phone: string;
};

const steps = [
  { id: "postcode", label: "Your site" },
  { id: "meter", label: "Meter type" },
  { id: "spend", label: "Energy spend" },
  { id: "renewal", label: "Renewal" },
  { id: "details", label: "Your details" },
] as const;

export function QuoteForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>({
    postcode: "",
    meter: "",
    spend: "",
    renewal: "",
    name: "",
    company: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const progress = ((step + 1) / steps.length) * 100;

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const canAdvance = () => {
    switch (step) {
      case 0: return /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i.test(data.postcode.trim());
      case 1: return !!data.meter;
      case 2: return !!data.spend;
      case 3: return !!data.renewal;
      case 4: return !!data.name && !!data.company && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email) && data.phone.replace(/\D/g, "").length >= 10;
      default: return false;
    }
  };

  const submit = async () => {
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Submission failed");
      }
      setStatus("success");
    } catch (e) {
      setStatus("error");
      setErrorMsg(e instanceof Error ? e.message : "Something went wrong");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-[color:var(--color-line)] bg-white p-10 lg:p-14 text-center shadow-[0_30px_80px_-40px_rgba(10,22,40,0.20)]">
        <div className="w-16 h-16 mx-auto rounded-full bg-[color:var(--color-amber-soft)] flex items-center justify-center text-[color:var(--color-amber-deep)] mb-6">
          <Check size={28} strokeWidth={2.5} />
        </div>
        <h3 className="font-display text-2xl text-[color:var(--color-ink)] mb-3">Got it.</h3>
        <p className="text-[color:var(--color-ink-muted)] max-w-md mx-auto leading-relaxed">
          Thanks {data.name.split(" ")[0]}. We will be in touch within one working day with whole-of-market quotes for your {data.postcode.toUpperCase()} site. Watch for an email from <strong className="text-[color:var(--color-ink)]">enquiries@energyplanner.co.uk</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-[color:var(--color-line)] bg-white shadow-[0_30px_80px_-40px_rgba(10,22,40,0.20)] overflow-hidden">
      <div className="p-8 lg:p-10 border-b border-[color:var(--color-line-soft)]">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-amber-deep)]">
            Step {step + 1} of {steps.length}
          </p>
          <p className="text-xs uppercase tracking-[0.16em] text-[color:var(--color-ink-muted)]">
            {steps[step].label}
          </p>
        </div>
        <div className="h-1 bg-[color:var(--color-line-soft)] rounded-full overflow-hidden">
          <div
            className="h-full bg-[color:var(--color-amber)] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="p-8 lg:p-10 min-h-[340px]">
        {step === 0 && (
          <Step title="What is the postcode of the site?" subtitle="We use this to confirm distribution area, meter type and supplier coverage.">
            <input
              type="text"
              value={data.postcode}
              onChange={(e) => set("postcode", e.target.value)}
              autoFocus
              placeholder="FY8 5FT"
              className="w-full max-w-xs px-5 py-4 text-2xl font-display tracking-wide uppercase rounded-2xl border border-[color:var(--color-line)] focus:outline-none focus:border-[color:var(--color-amber)] focus:ring-4 focus:ring-[color:var(--color-amber-soft)]"
            />
          </Step>
        )}

        {step === 1 && (
          <Step title="What kind of meter is on site?">
            <RadioGrid
              value={data.meter}
              onChange={(v) => set("meter", v as MeterType)}
              options={[
                { value: "single-phase", label: "Single phase", hint: "Most small businesses, sub-100 kVA" },
                { value: "three-phase", label: "Three phase", hint: "Higher load, industrial or larger commercial" },
                { value: "half-hourly", label: "Half-hourly", hint: "100+ kVA, smart meter, settled half-hourly" },
                { value: "unknown", label: "Not sure", hint: "We can check from your bill" },
              ]}
            />
          </Step>
        )}

        {step === 2 && (
          <Step title="Roughly what does the site spend on energy per year?">
            <RadioGrid
              value={data.spend}
              onChange={(v) => set("spend", v as SpendBand)}
              options={[
                { value: "under-5k", label: "Under £5,000" },
                { value: "5k-15k", label: "£5,000 to £15,000" },
                { value: "15k-50k", label: "£15,000 to £50,000" },
                { value: "50k-150k", label: "£50,000 to £150,000" },
                { value: "150k-plus", label: "£150,000+" },
                { value: "unknown", label: "Not sure" },
              ]}
            />
          </Step>
        )}

        {step === 3 && (
          <Step title="When does the current contract end?" subtitle="Most suppliers let us lock in pricing up to 12 months ahead.">
            <RadioGrid
              value={data.renewal}
              onChange={(v) => set("renewal", v as RenewalWindow)}
              options={[
                { value: "0-3", label: "Within 3 months" },
                { value: "3-6", label: "3 to 6 months" },
                { value: "6-12", label: "6 to 12 months" },
                { value: "in-contract", label: "12+ months" },
                { value: "out-of-contract", label: "Out of contract / deemed rates" },
                { value: "unknown", label: "Not sure" },
              ]}
            />
          </Step>
        )}

        {step === 4 && (
          <Step title="Where should we send the quotes?">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextInput label="Your name" value={data.name} onChange={(v) => set("name", v)} autoFocus placeholder="Jane Smith" />
              <TextInput label="Business name" value={data.company} onChange={(v) => set("company", v)} placeholder="Acme Ltd" />
              <TextInput label="Work email" type="email" value={data.email} onChange={(v) => set("email", v)} placeholder="jane@acme.co.uk" />
              <TextInput label="Phone" type="tel" value={data.phone} onChange={(v) => set("phone", v)} placeholder="07700 900123" />
            </div>
            <p className="mt-6 text-xs text-[color:var(--color-ink-muted)]">
              By submitting you agree we may contact you about your energy contracts. We never share your data. Unsubscribe at any time.
            </p>
          </Step>
        )}
      </div>

      {status === "error" && (
        <div className="px-8 lg:px-10 py-3 bg-red-50 border-t border-red-100 text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      <div className="px-8 lg:px-10 py-6 bg-[color:var(--color-bone-warm)] border-t border-[color:var(--color-line-soft)] flex items-center justify-between">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className={cn("btn btn-ghost", step === 0 && "opacity-0 pointer-events-none")}
        >
          <ArrowLeft size={14} />
          Back
        </button>
        {step < steps.length - 1 ? (
          <button
            type="button"
            onClick={next}
            disabled={!canAdvance()}
            className={cn("btn btn-primary", !canAdvance() && "opacity-40 cursor-not-allowed")}
          >
            Continue
            <ArrowRight size={14} />
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={!canAdvance() || status === "submitting"}
            className={cn("btn btn-amber", (!canAdvance() || status === "submitting") && "opacity-60 cursor-not-allowed")}
          >
            {status === "submitting" ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                Sending
              </>
            ) : (
              <>
                Send for quotes
                <ArrowRight size={14} />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

function Step({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-2xl lg:text-3xl text-[color:var(--color-ink)] tracking-tight">{title}</h3>
      {subtitle && <p className="mt-2 text-[color:var(--color-ink-muted)]">{subtitle}</p>}
      <div className="mt-7">{children}</div>
    </div>
  );
}

function TextInput({
  label, value, onChange, type = "text", placeholder, autoFocus,
}: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; placeholder?: string; autoFocus?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.16em] text-[color:var(--color-ink-muted)] mb-2 block">{label}</span>
      <input
        type={type}
        value={value}
        autoFocus={autoFocus}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-[color:var(--color-line)] focus:outline-none focus:border-[color:var(--color-amber)] focus:ring-4 focus:ring-[color:var(--color-amber-soft)]"
      />
    </label>
  );
}

function RadioGrid({
  options, value, onChange,
}: {
  options: { value: string; label: string; hint?: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {options.map((opt) => {
        const active = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={cn(
              "text-left p-4 rounded-2xl border transition-all",
              active
                ? "border-[color:var(--color-amber)] bg-[color:var(--color-amber-soft)]/40 ring-4 ring-[color:var(--color-amber-soft)]"
                : "border-[color:var(--color-line)] hover:border-[color:var(--color-ink-muted)] bg-white",
            )}
          >
            <div className="flex items-center gap-3">
              <span className={cn("w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0", active ? "border-[color:var(--color-amber-deep)] bg-[color:var(--color-amber-deep)]" : "border-[color:var(--color-line)]")}>
                {active && <Check size={12} className="text-white" strokeWidth={3} />}
              </span>
              <div>
                <div className="font-medium text-[color:var(--color-ink)]">{opt.label}</div>
                {opt.hint && <div className="text-xs text-[color:var(--color-ink-muted)] mt-0.5">{opt.hint}</div>}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
