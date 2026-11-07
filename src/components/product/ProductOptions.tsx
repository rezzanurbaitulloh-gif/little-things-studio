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
  "border border-solid border-[rgba(34,35,31,0.12)] px-4 py-2 text-sm font-medium transition-colors duration-200";
const chipIdle = "bg-transparent text-ink-black hover:border-tomato-red hover:text-tomato-red";
const chipActive = "border-ink-black bg-ink-black text-warm-paper";

const textareaClass =
  "w-full resize-none border border-solid border-[rgba(34,35,31,0.12)] px-4 py-3 text-sm text-ink-black placeholder:text-ink-black/40 transition-colors focus:border-tomato-red focus:outline-none";

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
    <div className="space-y-8">
      {/* Sizes */}
      {product.sizes.length > 0 ? (
        <div>
          <p className="eyebrow mb-4 text-ink-black" id="option-size-label">
            Ukuran
          </p>
          <div role="radiogroup" aria-labelledby="option-size-label" className="flex flex-wrap gap-3">
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
                <span className={cn("ml-2", i === sizeIndex ? "text-warm-paper/90" : "text-ink-black/60")}>
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
          <p className="eyebrow mb-4 text-ink-black" id="option-color-label">
            Warna
          </p>
          <div role="radiogroup" aria-labelledby="option-color-label" className="flex flex-wrap gap-3">
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
          <span className="eyebrow mb-4 flex items-center justify-between text-ink-black">
            Kartu Ucapan
            <span className="font-body text-sm font-medium text-ink-black/50 normal-case tracking-normal">
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
          <span className="eyebrow mb-4 block text-ink-black">Catatan untuk Kami</span>
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
