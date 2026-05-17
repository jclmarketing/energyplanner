import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { guides } from "@/lib/guides";

const staticPages = [
  "",
  "/compare-business-energy",
  "/compare-business-energy-prices",
  "/business-electricity",
  "/business-gas",
  "/energy-procurement",
  "/energy-audits",
  "/business-energy-broker",
  "/about",
  "/team",
  "/how-we-get-paid",
  "/contact",
  "/guides",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  return [
    ...staticPages.map((p) => ({
      url: `${site.url}${p}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: p === "" ? 1 : p === "/contact" ? 0.95 : 0.8,
    })),
    ...guides.map((g) => ({
      url: `${site.url}/guides/${g.slug}`,
      lastModified: g.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
