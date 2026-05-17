import { NextResponse } from "next/server";
import { z } from "zod";

const QuoteSchema = z.object({
  postcode: z.string().min(5).max(10),
  meter: z.enum(["single-phase", "three-phase", "half-hourly", "unknown"]),
  spend: z.enum(["under-5k", "5k-15k", "15k-50k", "50k-150k", "150k-plus", "unknown"]),
  renewal: z.enum(["in-contract", "0-3", "3-6", "6-12", "out-of-contract", "unknown"]),
  name: z.string().min(2).max(80),
  company: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = QuoteSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form data", issues: parsed.error.flatten() }, { status: 400 });
    }

    const data = parsed.data;
    const submittedAt = new Date().toISOString();

    // Forward to Supabase if configured (Hostinger self-hosted, t_energyplanner tenant)
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
    if (supabaseUrl && supabaseKey) {
      try {
        await fetch(`${supabaseUrl}/rest/v1/leads`, {
          method: "POST",
          headers: {
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
            "Content-Profile": "t_energyplanner",
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
          body: JSON.stringify({
            postcode: data.postcode.toUpperCase().replace(/\s+/g, " ").trim(),
            meter_type: data.meter,
            spend_band: data.spend,
            renewal_window: data.renewal,
            contact_name: data.name,
            company_name: data.company,
            email: data.email,
            phone: data.phone,
            source: "website",
            submitted_at: submittedAt,
          }),
        });
      } catch (e) {
        console.error("Supabase insert failed:", e);
        // Continue anyway so the user gets confirmation; lead is logged below
      }
    }

    // Console log as backup audit trail
    console.log("[quote-submission]", JSON.stringify({ ...data, submittedAt }));

    // Email notification via EmailIt (if configured)
    const emailitKey = process.env.EMAILIT_API_KEY;
    if (emailitKey) {
      try {
        await fetch("https://api.emailit.com/v1/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${emailitKey}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            from: "Energy Planner <noreply@energyplanner.co.uk>",
            to: ["enquiries@energyplanner.co.uk", "jon@jclmarketing.co.uk"],
            subject: `New quote request: ${data.company} (${data.postcode.toUpperCase()})`,
            text: [
              `New quote request received at ${submittedAt}`,
              "",
              `Contact: ${data.name} <${data.email}> ${data.phone}`,
              `Company: ${data.company}`,
              `Postcode: ${data.postcode.toUpperCase()}`,
              `Meter: ${data.meter}`,
              `Spend: ${data.spend}`,
              `Renewal: ${data.renewal}`,
            ].join("\n"),
          }),
        });
      } catch (e) {
        console.error("Email notification failed:", e);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[quote-api] unexpected error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
