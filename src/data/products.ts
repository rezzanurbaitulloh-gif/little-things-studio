import type { Product } from "@/types/product";

/**
 * Demo catalogue. All photos are licensed stock (Pexels License — free for
 * commercial use, no attribution required; see assets/LICENSES.md).
 * Descriptions are demo copy written for this concept project.
 */
export const products: Product[] = [
  {
    id: "blooming-love",
    code: "FL-001",
    name: "Blooming Love",
    category: "flower-bouquet",
    occasions: ["birthday", "anniversary", "just-because"],
    description:
      "A round, abundant hand-tied bouquet of fresh roses and seasonal fillers, wrapped in our signature kraft and linen paper. The kind of arrangement that makes a doorway feel different.",
    price: 185000,
    priceLabel: "From Rp125.000",
    images: [
      "/images/products/blooming-love-01.webp",
      "/images/products/blooming-love-02.webp",
      "/images/products/blooming-love-03.webp",
    ],
    imageAlt: "Lush hand-tied rose bouquet wrapped in signature paper",
    sizes: [
      { label: "Small", price: 125000 },
      { label: "Medium", price: 185000 },
      { label: "Large", price: 250000 },
    ],
    colors: ["Pink", "Cream", "Peach", "Red"],
    supportsGiftMessage: true,
    supportsCustomNote: true,
    availability: "available",
    featured: true,
    instagramUrl: null,
  },
  {
    id: "golden-hour",
    code: "FL-002",
    name: "Golden Hour",
    category: "flower-bouquet",
    occasions: ["anniversary", "thank-you", "just-because"],
    description:
      "Warm sunset tones — orchids, pale roses and dried grasses gathered in a loose, meadow-style wrap. Made for slow evenings and soft light.",
    price: 210000,
    priceLabel: "From Rp160.000",
    images: [
      "/images/products/golden-hour-01.webp",
      "/images/products/golden-hour-02.webp",
    ],
    imageAlt: "Warm-toned orchid and rose bouquet wrapped in brown paper",
    sizes: [
      { label: "Regular", price: 160000 },
      { label: "Grand", price: 210000 },
    ],
    colors: ["Amber", "Ivory"],
    supportsGiftMessage: true,
    supportsCustomNote: true,
    availability: "made-to-order",
    featured: true,
    instagramUrl: null,
  },
  {
    id: "little-celebration",
    code: "SB-001",
    name: "Little Celebration",
    category: "snack-bouquet",
    occasions: ["birthday", "graduation", "just-because"],
    description:
      "A bouquet you can actually eat — chocolates and sweet treats arranged petal by petal with faux blooms and a satin bow. Surprisingly sturdy, dangerously gone in a day.",
    price: 165000,
    priceLabel: "From Rp165.000",
    images: [
      "/images/products/little-celebration-01.webp",
      "/images/products/little-celebration-02.webp",
      "/images/products/little-celebration-03.webp",
    ],
    imageAlt: "Chocolate and candy bouquet arranged with decorative flowers",
    sizes: [
      { label: "Petite", price: 165000 },
      { label: "Party", price: 245000 },
    ],
    colors: [],
    supportsGiftMessage: true,
    supportsCustomNote: true,
    availability: "made-to-order",
    featured: true,
    instagramUrl: null,
  },
  {
    id: "the-little-hamper",
    code: "GH-001",
    name: "The Little Hamper",
    category: "gift-hampers",
    occasions: ["thank-you", "birthday", "wedding"],
    description:
      "A woven basket packed with curated snacks, artisanal bites and a handwritten card — finished with cellophane, ribbon and a dried flower sprig. Our most-gifted hamper for thank-you season.",
    price: 295000,
    priceLabel: "From Rp295.000",
    images: [
      "/images/products/little-hamper-01.webp",
      "/images/products/little-hamper-02.webp",
      "/images/products/little-hamper-03.webp",
    ],
    imageAlt: "Woven gift hamper basket filled with gourmet snacks",
    sizes: [
      { label: "Classic", price: 295000 },
      { label: "Deluxe", price: 425000 },
    ],
    colors: ["Natural", "Ivory"],
    supportsGiftMessage: true,
    supportsCustomNote: true,
    availability: "made-to-order",
    featured: true,
    instagramUrl: null,
  },
  {
    id: "sweetest-surprise",
    code: "GB-001",
    name: "Sweetest Surprise",
    category: "gift-box",
    occasions: ["birthday", "anniversary", "just-because"],
    description:
      "A rigid keepsake box dressed in matte paper and a wide ribbon, filled with treats and trinkets chosen to match the person, not just the occasion.",
    price: 175000,
    priceLabel: "From Rp175.000",
    images: [
      "/images/products/sweetest-surprise-01.webp",
      "/images/products/sweetest-surprise-02.webp",
      "/images/products/sweetest-surprise-03.webp",
    ],
    imageAlt: "Elegant gift boxes with ribbon on a neutral background",
    sizes: [
      { label: "Small", price: 175000 },
      { label: "Medium", price: 245000 },
    ],
    colors: ["Forest", "Blush", "Ivory"],
    supportsGiftMessage: true,
    supportsCustomNote: true,
    availability: "available",
    featured: true,
    instagramUrl: null,
  },
  {
    id: "happy-graduation",
    code: "GR-001",
    name: "Happy Graduation",
    category: "graduation-gifts",
    occasions: ["graduation"],
    description:
      "The wisuda essential — a bright hand-tied bouquet photographed beautifully next to any cap and gown, with an optional mini graduation plush and ribbon badge.",
    price: 150000,
    priceLabel: "From Rp150.000",
    images: [
      "/images/products/happy-graduation-01.webp",
      "/images/products/happy-graduation-02.webp",
      "/images/products/happy-graduation-03.webp",
    ],
    imageAlt: "Graduate holding a white rose bouquet in cap and gown",
    sizes: [
      { label: "Small", price: 150000 },
      { label: "Medium", price: 200000 },
      { label: "Jumbo", price: 285000 },
    ],
    colors: ["Mixed Bright", "Pastel", "Sunflower"],
    supportsGiftMessage: true,
    supportsCustomNote: true,
    availability: "made-to-order",
    featured: true,
    instagramUrl: null,
  },
  {
    id: "tiny-memories",
    code: "SO-001",
    name: "Tiny Memories",
    category: "souvenirs",
    occasions: ["wedding", "thank-you", "birthday"],
    description:
      "Pocket-sized dried flower keepsakes with a mini greeting card — sweet for wedding favours, event goodie bags, or a small gesture that still says a lot.",
    price: 25000,
    priceLabel: "From Rp25.000",
    images: [
      "/images/products/tiny-memories-01.webp",
      "/images/products/tiny-memories-02.webp",
    ],
    imageAlt: "Small dried flower keepsake with greeting card on rustic wood",
    sizes: [
      { label: "Single", price: 25000 },
      { label: "Set of 5", price: 110000 },
      { label: "Set of 10", price: 200000 },
    ],
    colors: [],
    supportsGiftMessage: true,
    supportsCustomNote: false,
    availability: "available",
    featured: true,
    instagramUrl: null,
  },
  {
    id: "made-for-you",
    code: "CG-001",
    name: "Made-for-You Box",
    category: "custom-gifts",
    occasions: ["birthday", "anniversary", "just-because", "thank-you"],
    description:
      "Tell us the person, the story and the budget — we design the rest. A one-off gift box assembled around your idea, from vinyl-and-mug cozy themes to full self-care sets.",
    price: 350000,
    priceLabel: "Starts from Rp350.000",
    images: [
      "/images/products/made-for-you-01.webp",
      "/images/products/made-for-you-02.webp",
    ],
    imageAlt: "Custom curated gift box with mug and keepsakes",
    sizes: [
      { label: "Signature", price: 350000 },
      { label: "Signature Plus", price: 500000 },
    ],
    colors: [],
    supportsGiftMessage: true,
    supportsCustomNote: true,
    availability: "made-to-order",
    featured: false,
    instagramUrl: null,
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.category === categoryId);
}
