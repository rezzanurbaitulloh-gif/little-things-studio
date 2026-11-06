import type { GalleryPhoto } from "@/types/product";

/**
 * Curated "social gallery" — a selection of demo photos pointing to Instagram.
 * This is NOT a live feed and is never presented as one (see FR-08).
 * `instagramUrl` stays null until a real post URL is configured.
 */
export const galleryPhotos: GalleryPhoto[] = [
  {
    image: "/images/social/social-01.webp",
    imageAlt: "Colorful mixed bouquets featuring roses and sunflowers",
    caption: "Sunday market picks",
    instagramUrl: null,
  },
  {
    image: "/images/social/social-02.webp",
    imageAlt: "Bouquet display inside a cozy flower shop",
    caption: "The studio corner",
    instagramUrl: null,
  },
  {
    image: "/images/social/social-03.webp",
    imageAlt: "Rose bouquet styled with chocolates and a lantern",
    caption: "An evening order",
    instagramUrl: null,
  },
  {
    image: "/images/social/social-04.webp",
    imageAlt: "Chocolates and flowers arranged on wooden trays",
    caption: "Hamper prep day",
    instagramUrl: null,
  },
];
