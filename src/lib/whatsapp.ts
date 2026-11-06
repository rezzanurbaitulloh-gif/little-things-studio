import { siteConfig } from "@/config/site";
import type { Product } from "@/types/product";
import { formatIDR } from "@/lib/product-utils";

/**
 * Normalize an Indonesian phone number into international format ("62…").
 * - strips every non-digit character (spaces, "+", dashes)
 * - "62…" stays as-is, "08…" / "8…" get the "62" country code prefix
 */
export function normalizeWhatsAppNumber(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return null;
  if (digits.startsWith("62")) return digits;
  if (digits.startsWith("0")) return `62${digits.slice(1)}`;
  if (digits.startsWith("8")) return `62${digits}`;
  return digits;
}

/** True only when a real number has been configured in siteConfig. */
export function isWhatsAppConfigured(): boolean {
  const normalized = normalizeWhatsAppNumber(siteConfig.whatsappNumber ?? "");
  return Boolean(normalized && normalized.length >= 9 && normalized.length <= 15);
}

export function isInstagramConfigured(): boolean {
  return siteConfig.instagramUrl.startsWith("https://");
}

export interface OrderDetails {
  product: Pick<Product, "name" | "code" | "price">;
  sizeLabel?: string | null;
  sizePrice?: number | null;
  color?: string | null;
  giftMessage?: string | null;
  note?: string | null;
}

/** Build the pre-filled WhatsApp order/inquiry message. */
export function buildOrderMessage({
  product,
  sizeLabel,
  sizePrice,
  color,
  giftMessage,
  note,
}: OrderDetails): string {
  const price = sizePrice ?? product.price;
  const lines = [
    `Halo ${siteConfig.name}!`,
    "",
    "Saya tertarik memesan produk berikut:",
    "",
    `Nama produk: ${product.name}`,
    `Kode produk: ${product.code}`,
    sizeLabel ? `Ukuran: ${sizeLabel}` : null,
    color ? `Warna: ${color}` : null,
    price ? `Harga: ${formatIDR(price)}` : null,
    giftMessage ? `Kartu ucapan: ${giftMessage}` : null,
    note ? `Catatan: ${note}` : "Catatan: Mohon informasi ketersediaan produk.",
    "",
    "Apakah produk ini masih tersedia?",
  ];
  return lines.filter((line): line is string => line !== null).join("\n");
}

/** Build a custom-gift inquiry message. */
export function buildCustomGiftMessage(note?: string | null): string {
  const lines = [
    `Halo ${siteConfig.name}!`,
    "",
    "Saya ingin membuat custom gift.",
    "Ide saya:",
    note?.trim() ? note.trim() : "Mohon info lebih lanjut soal opsi custom gift-nya.",
    "",
    "Apakah bisa dibantu?",
  ];
  return lines.join("\n");
}

/**
 * Build a wa.me deep link. Returns null when the number is not configured —
 * callers must render an informative disabled state instead of a dead link.
 */
export function buildWhatsAppUrl(message: string): string | null {
  if (!isWhatsAppConfigured()) return null;
  const number = normalizeWhatsAppNumber(siteConfig.whatsappNumber);
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
