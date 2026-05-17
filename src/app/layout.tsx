import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd, organizationSchema, localBusinessSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Energy Planner | Business Energy Procurement, Audits & Bill Validation",
    template: "%s | Energy Planner",
  },
  description: site.description,
  keywords: [
    "compare business energy",
    "business energy comparison",
    "business electricity prices",
    "business gas comparison",
    "energy procurement",
    "business energy broker UK",
  ],
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.name,
    title: "Energy Planner | Strategic Energy Procurement for UK Business",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Energy Planner",
    description: site.description,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${geistSans.variable} ${fraunces.variable}`}>
      <head>
        <JsonLd data={[organizationSchema(), localBusinessSchema(), websiteSchema()]} />
      </head>
      <body className="min-h-dvh flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
