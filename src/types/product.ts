export type CategoryId =
  | "flower-bouquet"
  | "snack-bouquet"
  | "gift-hampers"
  | "gift-box"
  | "graduation-gifts"
  | "souvenirs"
  | "custom-gifts";

export type OccasionId =
  | "birthday"
  | "graduation"
  | "anniversary"
  | "wedding"
  | "thank-you"
  | "just-because";

export type Availability = "available" | "made-to-order" | "limited";

export interface ProductSize {
  label: string;
  price: number;
}

export interface Product {
  id: string;
  code: string;
  name: string;
  category: CategoryId;
  occasions: OccasionId[];
  description: string;
  /** Base / "from" price in IDR. */
  price: number;
  priceLabel: string;
  images: string[];
  imageAlt: string;
  sizes: ProductSize[];
  colors: string[];
  supportsGiftMessage: boolean;
  supportsCustomNote: boolean;
  availability: Availability;
  featured: boolean;
  instagramUrl: string | null;
}

export interface Category {
  id: CategoryId;
  name: string;
  shortName: string;
  description: string;
}

export interface Occasion {
  id: OccasionId;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface GalleryPhoto {
  image: string;
  imageAlt: string;
  caption: string;
  instagramUrl: string | null;
}
