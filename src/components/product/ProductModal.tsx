"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Product } from "@/types/product";
import { cn } from "@/lib/cn";
import { availabilityLabels, formatIDR } from "@/lib/product-utils";
import { buildOrderMessage, buildWhatsAppUrl, isInstagramConfigured } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { categories } from "@/data/categories";
import { CloseIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/icons";
import { ProductImageGallery } from "./ProductImageGallery";
import { ProductOptions } from "./ProductOptions";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const availabilityDot: Record<Product["availability"], string> = {
  available: "bg-sage",
  "made-to-order": "bg-butter",
  limited: "bg-terracotta",
};

/**
 * Product detail modal.
 * - Desktop: centered two-column dialog (gallery left, scrollable details right).
 * - Mobile: full-screen sheet (image on top, details below, page scrolls inside).
 * - A11y: role=dialog + aria-modal, focus trapped inside, ESC / backdrop close,
 *   focus restored to the trigger on unmount, body scroll locked.
 */
export function ProductModal({ product, onClose }: ProductModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [sizeIndex, setSizeIndex] = useState(0);
  const [color, setColor] = useState<string | null>(product.colors[0] ?? null);
  const [giftMessage, setGiftMessage] = useState("");
  const [note, setNote] = useState("");

  const size = product.sizes[sizeIndex] ?? null;
  const price = size?.price ?? product.price;
  const categoryName =
    categories.find((c) => c.id === product.category)?.name ?? "Gift";

  // FR-03: Instagram link when available — product-level URL first,
  // then the site profile, but only when a real URL is configured.
  const instagramUrl =
    product.instagramUrl ??
    (isInstagramConfigured() ? siteConfig.instagramUrl : null);

  const waUrl = useMemo(() => {
    const message = buildOrderMessage({
      product,
      sizeLabel: size?.label ?? null,
      sizePrice: size?.price ?? null,
      color,
      giftMessage: giftMessage.trim() || null,
      note: note.trim() || null,
    });
    return buildWhatsAppUrl(message);
  }, [product, size, color, giftMessage, note]);

  // Scroll lock, initial focus, ESC close, and Tab focus trap.
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    dialog?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialog) return;

      const focusables = dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || !dialog.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || !dialog.contains(active))) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 overflow-y-auto bg-cream lg:overflow-hidden lg:bg-forest/70 lg:backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      {/* Centering wrapper — its padding doubles as the desktop backdrop */}
      <div
        className="flex min-h-full items-stretch justify-center lg:items-center lg:p-6"
        onClick={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
      >
        <div
          ref={dialogRef}
          tabIndex={-1}
          className={cn(
            "modal-panel relative flex w-full flex-col bg-cream outline-none",
            "lg:grid lg:max-h-[88vh] lg:max-w-5xl lg:grid-cols-[1.05fr_1fr]",
            "lg:overflow-hidden lg:rounded-[2rem]",
            "lg:shadow-[0_40px_90px_-30px_rgb(38_43_38/0.55)]"
          )}
        >
          {/* Gallery column */}
          <div className="lg:h-full lg:min-h-0">
            <ProductImageGallery
              images={product.images}
              alt={product.imageAlt}
              name={product.name}
            />
          </div>

          {/* Details column */}
          <div className="flex flex-col px-5 pb-9 pt-12 sm:px-8 lg:overflow-y-auto lg:py-10 lg:pl-10 lg:pr-8">
            <p className="eyebrow text-terracotta">
              {categoryName} <span aria-hidden="true">·</span> {product.code}
            </p>
            <h3 id="product-modal-title" className="display-3 mt-2 text-forest">
              {product.name}
            </h3>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-ivory px-3 py-1 text-xs font-medium text-forest">
                <span
                  aria-hidden="true"
                  className={cn("h-1.5 w-1.5 rounded-full", availabilityDot[product.availability])}
                />
                {availabilityLabels[product.availability]}
              </span>
              <span className="font-display text-xl text-forest">{formatIDR(price)}</span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted">{product.description}</p>

            <div className="dotted-rule my-6" aria-hidden="true" />

            <ProductOptions
              product={product}
              sizeIndex={sizeIndex}
              onSizeChange={setSizeIndex}
              color={color}
              onColorChange={setColor}
              giftMessage={giftMessage}
              onGiftMessageChange={setGiftMessage}
              note={note}
              onNoteChange={setNote}
            />

            {/* Order CTA */}
            <div className="mt-8">
              {waUrl ? (
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Pesan via WhatsApp
                </a>
              ) : (
                <>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="btn btn-primary w-full"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Pesan via WhatsApp
                  </button>
                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    Demo — nomor WhatsApp belum dikonfigurasi, jadi tombol ini
                    dinonaktifkan. Pesanan akan tersusun otomatis begitu nomor
                    diisi.
                  </p>
                </>
              )}
              <p className="mt-3 text-xs text-muted">
                Pesanan dikonfirmasi lewat chat — pembayaran & pengiriman menyusul.
              </p>
              {instagramUrl ? (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Lihat ${product.name} di Instagram`}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-terracotta underline-offset-2 transition-colors hover:text-terracotta-deep hover:underline"
                >
                  <InstagramIcon className="h-3.5 w-3.5" />
                  Lihat di Instagram
                </a>
              ) : null}
            </div>
          </div>

          {/* Close — fixed on mobile (stays visible while scrolling), absolute on desktop */}
          <button
            type="button"
            onClick={onClose}
            aria-label={`Tutup detail ${product.name}`}
            className="fixed right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-cream/95 text-forest shadow-lg transition-colors hover:bg-cream lg:absolute lg:right-5 lg:top-5"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
