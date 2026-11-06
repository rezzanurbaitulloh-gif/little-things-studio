"use client";

import type { Product } from "@/types/product";
import { cn } from "@/lib/cn";
import { formatIDR } from "@/lib/product-utils";

export const GIFT_MESSAGE_MAX = 180;

interface ProductOptionsProps {
  product: Product;
  sizeIndex: number;
  onSizeChange: (index: number) => void;
  color: string | null;
  onColorChange: (color: string | null) => void;
  giftMessage: string;
  onGiftMessageChange: (value: string) => void;
  note: string;
  onNoteChange: (value: string) => void;
}

const chipBase =
  "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200";
const chipIdle = "border-line bg-cream text-forest hover:border-terracotta hover:text-terracotta";
const chipActive = "border-forest bg-forest text-cream";

const textareaClass =
  "w-full resize-none rounded-xl border border-line bg-ivory px-4 py-3 text-sm text-forest placeholder:text-muted/70 transition-colors focus:border-terracotta focus:outline-none";

/**
 * Size / color pickers plus gift-message and custom-note inputs.
 * All state is lifted to the modal so the WhatsApp message stays in sync.
 */
export function ProductOptions({
  product,
  sizeIndex,
  onSizeChange,
  color,
  onColorChange,
  giftMessage,
  onGiftMessageChange,
  note,
  onNoteChange,
}: ProductOptionsProps) {
  return (
    <div className="space-y-6">
      {/* Sizes */}
      {product.sizes.length > 0 ? (
        <div>
          <p className="eyebrow mb-2.5 text-forest" id="option-size-label">
            Ukuran
          </p>
          <div
            role="radiogroup"
            aria-labelledby="option-size-label"
            className="flex flex-wrap gap-2"
          >
            {product.sizes.map((size, i) => (
              <button
                key={size.label}
                type="button"
                role="radio"
                aria-checked={i === sizeIndex}
                onClick={() => onSizeChange(i)}
                className={cn(chipBase, i === sizeIndex ? chipActive : chipIdle)}
              >
                {size.label}
                <span className={cn("ml-1.5", i === sizeIndex ? "text-cream/70" : "text-muted")}>
                  {formatIDR(size.price)}
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {/* Colors */}
      {product.colors.length > 0 ? (
        <div>
          <p className="eyebrow mb-2.5 text-forest" id="option-color-label">
            Warna
          </p>
          <div
            role="radiogroup"
            aria-labelledby="option-color-label"
            className="flex flex-wrap gap-2"
          >
            {product.colors.map((c) => (
              <button
                key={c}
                type="button"
                role="radio"
                aria-checked={color === c}
                onClick={() => onColorChange(color === c ? null : c)}
                className={cn(chipBase, color === c ? chipActive : chipIdle)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {/* Gift message */}
      {product.supportsGiftMessage ? (
        <label className="block">
          <span className="eyebrow mb-2.5 flex items-center justify-between text-forest">
            Kartu Ucapan
            <span className="font-sans text-[0.6875rem] font-medium normal-case tracking-normal text-muted">
              {giftMessage.length}/{GIFT_MESSAGE_MAX}
            </span>
          </span>
          <textarea
            value={giftMessage}
            onChange={(e) => onGiftMessageChange(e.target.value.slice(0, GIFT_MESSAGE_MAX))}
            maxLength={GIFT_MESSAGE_MAX}
            rows={3}
            placeholder="Tulis pesan hangatmu di sini… (opsional)"
            className={textareaClass}
          />
        </label>
      ) : null}

      {/* Custom note */}
      {product.supportsCustomNote ? (
        <label className="block">
          <span className="eyebrow mb-2.5 block text-forest">Catatan untuk Kami</span>
          <textarea
            value={note}
            onChange={(e) => onNoteChange(e.target.value)}
            rows={2}
            placeholder="Minta warna lain, tanggal kirim, atau hal khusus lain… (opsional)"
            className={textareaClass}
          />
        </label>
      ) : null}
    </div>
  );
}
