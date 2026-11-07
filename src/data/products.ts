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
      "Buket rose segar yang dirangkai tangan, utuh, dibungkus kertas kraft dan linen khami kami. Rangkaian yang membuat pintu rumah terasa berbeda.",
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
      "Tonais matahari terbenam — anggrek, rose pucat, dan rumput kering dikumpulkan dalam ikatan longgar gaya padang rumput. Dibuat untuk malam tenang dan cahaya lembut.",
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
      "Buket yang bisa dimakan — cokelat dan manisan disusun kelopak demi kelopak dengan bunga tiruan dan pita satin. Kokohnya mengejutkan, hilang dalam sehari.",
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
      "Keranjang kerajinan penuh snack terpilih, camilan artisan, dan kartu tulisan tangan — diselesaikan dengan selofan, pita, dan cabang bunga kering. Hampers kami yang paling sering dikirim untuk saison terima kasih.",
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
      "Kotak kenangan keras dengan kertas mat dan pita lebar, diisi dengan camilan dan hiasan yang dipilih untuk orang, bukan sekadar momen.",
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
      "Esensial wisuda — buket rose putih yang dirangkai tangan, difoto indah di samping toga dan topi wisuda, dengan opsi mainan lembut wisuda mini dan pita peringatan.",
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
      "Ingatan bunga kering ukuran kantung dengan kartu ucapan mini — manis untuk sukamanja pernikahan, goodie bag acara, atau gerbang kecil yang masih berarti banyak.",
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
      "Ceritakan orangnya, ceritanya, dan budget-nya — kami desain sisanya. Kotak hadiah unik yang disusun di sekitar ide kamu, dari theme cozy vinyl-and-mug hingga set self-care lengkap.",
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
