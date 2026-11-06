/**
 * Central site configuration.
 *
 * IMPORTANT (demo project): `whatsappNumber` and `instagramUrl` are intentionally
 * left empty. Fill them in with real values before going live — every WhatsApp /
 * Instagram touchpoint reads from here and degrades to an informative disabled
 * state while they are empty. Never hardcode a fake number or account.
 */
export const siteConfig = {
  name: "Little Things Studio",
  shortName: "Little Things",
  tagline: "A little gift, a lot of meaning.",
  description:
    "Thoughtfully made gifts for every little and big moment — flower bouquets, snack bouquets, hampers, gift boxes and custom keepsakes, wrapped with care.",
  url: "https://little-things-studio-nine.vercel.app",
  /** International format without "+" — e.g. "6281234567890". Empty = not configured. */
  whatsappNumber: "",
  /** Full profile URL — e.g. "https://instagram.com/littlethings.studio". Empty = not configured. */
  instagramUrl: "",
  instagramHandle: "@littlethings.studio",
  locationLabel: "Demo Location — Malang, Indonesia",
  businessHours: "Demo Hours — Mon–Sat, 09.00–17.00 WIB",
  demoNotice: "Concept project for portfolio purposes — not a real store.",
} as const;

export type SiteConfig = typeof siteConfig;
