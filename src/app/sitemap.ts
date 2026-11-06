import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      // Deterministic build date — `new Date()` (wall clock) is blocked during prerender.
      lastModified: new Date("2026-01-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
