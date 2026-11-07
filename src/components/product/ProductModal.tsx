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
  available: "bg-tomato-red",
  "made-to-order": "bg-soft-marigold",
  limited: "bg-ink-black",
};

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
      className="modal-backdrop fixed inset-0 z-50 overflow-y-auto bg-warm-paper lg:overflow-hidden lg:bg-[rgba(34,35,31,0.6)]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
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
            "modal-panel relative flex w-full flex-col bg-warm-paper outline-none",
            "lg:grid lg:max-h-[88vh] lg:max-w-[80rem] lg:grid-cols-[1.15fr_1fr]",
            "lg:overflow-hidden lg:rounded-none"
          )}
        >
          <div className="lg:h-full lg:min-h-0">
            <ProductImageGallery
              images={product.images}
              alt={product.imageAlt}
              name={product.name}
            />
          </div>

          <div className="flex flex-col px-5 pb-12 pt-14 sm:px-8 lg:overflow-y-auto lg:py-14 lg:pl-12 lg:pr-10">
            <p className="eyebrow text-ink-black">
              {categoryName} <span aria-hidden="true">·</span> {product.code}
            </p>
            <h3 id="product-modal-title" className="display-3 mt-4 text-ink-black">
              {product.name}
            </h3>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="inline-flex items-center gap-1.5 rounded-none border border-solid border-[rgba(34,35,31,0.12)] px-3 py-1 text-xs font-medium text-ink-black">
                <span
                  aria-hidden="true"
                  className={cn("h-1.5 w-1.5 rounded-none", availabilityDot[product.availability])}
                />
                {availabilityLabels[product.availability]}
              </span>
              <span className="font-display text-xl text-ink-black">
                {formatIDR(price)}
              </span>
            </div>

            <p className="mt-6 body-md text-ink-black/70 leading-relaxed">
              {product.description}
            </p>

            <div className="border-t border-solid border-[rgba(34,35,31,0.12)] my-8" aria-hidden="true" />

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

            {waUrl ? (
              <div className="mt-10">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Pesan via WhatsApp
                </a>
                <p className="mt-4 body-sm text-ink-black/60">
                  Pesanan dikonfirmasi lewat chat — pembayaran & pengiriman
                  menyusul.
                </p>
                {instagramUrl ? (
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Lihat ${product.name} di Instagram`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink-black transition-colors hover:text-tomato-red"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    Lihat di Instagram
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={`Tutup detail ${product.name}`}
            className="fixed right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-none bg-warm-paper/95 text-ink-black transition-colors hover:bg-warm-paper lg:absolute lg:right-6 lg:top-6"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
