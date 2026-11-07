import type { Product } from "@/types/product";

/** Format an IDR amount without decimals: 185000 -> "Rp185.000". */
export function formatIDR(amount: number): string {
  return `Rp${amount.toLocaleString("id-ID")}`;
}

/** "From Rp125.000" style label using the lowest size price when available. */
export function getPriceLabel(product: Product): string {
  if (product.sizes.length > 0) {
    const lowest = Math.min(product.price, ...product.sizes.map((s) => s.price));
    return `From ${formatIDR(lowest)}`;
  }
  return product.priceLabel || formatIDR(product.price);
}

export const availabilityLabels: Record<Product["availability"], string> = {
  available: "Tersedia",
  "made-to-order": "Dibuat atas pesanan",
  limited: "Stok terbatas",
};
