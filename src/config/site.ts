/**
 * Central site configuration.
 *
 * `whatsappNumber`, `instagramUrl`, `locationLabel` and `businessHours` are
 * intentionally empty/null until real business data is available. Every
 * touchpoint reads from here and HIDES itself while a value is missing —
 * never hardcode a fake number, account, address or opening hours.
 * Fill in real values and the UI activates automatically.
 */
export const siteConfig = {
  name: "Little Things Studio",
  shortName: "Little Things",
  tagline: "A little gift, a lot of meaning.",
  description:
    "Thoughtfully made gifts for every little and big moment — flower bouquets, snack bouquets, hampers, gift boxes and custom keepsakes, wrapped with care.",
  url: "https://little-things-studio-nine.vercel.app",
  /** International format without "+" — e.g. "6281234567890". Empty = WhatsApp touchpoints hidden. */
  whatsappNumber: "",
  /** Full profile URL — e.g. "https://instagram.com/littlethings.studio". Empty = Instagram touchpoints hidden. */
  instagramUrl: "",
  /** Display handle, e.g. "@littlethings.studio". Null = footer shows a plain "Instagram" label. */
  instagramHandle: null as string | null,
  /** Real shop location. Null until confirmed by the business — hidden from UI while null. */
  locationLabel: null as string | null,
  /** Real opening hours. Null until confirmed by the business — hidden from UI while null. */
  businessHours: null as string | null,
} as const;

export type SiteConfig = typeof siteConfig;
