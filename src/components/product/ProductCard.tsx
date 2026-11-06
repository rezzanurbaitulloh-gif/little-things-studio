"use client";

import Image from "next/image";
import type { Product } from "@/types/product";
import { cn } from "@/lib/cn";
import { availabilityLabels, getPriceLabel } from "@/lib/product-utils";
import { categories } from "@/data/categories";
import { ArrowRightIcon } from "@/components/ui/icons";

interface ProductCardProps {
  product: Product;
  /** Grid placement + aspect classes owned by the parent layout pattern. */
  className?: string;
  onOpen: (product: Product) => void;
}

/**
 * Editorial product tile. The whole card is one button.
 * Labels: always visible on touch screens, hover-revealed on desktop
 * (and on keyboard focus via group-focus-visible).
 */
export function ProductCard({ product, className, onOpen }: ProductCardProps) {
  const categoryName =
    categories.find((c) => c.id === product.category)?.shortName ?? "Gift";

  return (
    <button
      type="button"
      onClick={() => onOpen(product)}
      aria-label={`Lihat detail ${product.name} — ${categoryName}, ${getPriceLabel(product)}`}
      className={cn(
        "group relative block h-full w-full overflow-hidden rounded-[1.5rem] text-left",
        "shadow-[0_2px_12px_-6px_rgb(52_58_50/0.18)] transition-shadow duration-500 hover:shadow-[0_24px_48px_-24px_rgb(52_58_50/0.35)]",
        className
      )}
    >
      <figure className="relative h-full w-full">
        <Image
          src={product.images[0]}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 55vw, 92vw"
          className="object-cover transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.045]"
        />
      </figure>

      {/* Availability chip */}
      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-cream/90 px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-forest backdrop-blur-sm">
        <span
          aria-hidden="true"
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            product.availability === "available" && "bg-sage",
            product.availability === "made-to-order" && "bg-butter",
            product.availability === "limited" && "bg-terracotta"
          )}
        />
        {availabilityLabels[product.availability]}
      </span>

      {/* Label overlay — always shown on touch, hover/focus-revealed on desktop */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/85 via-forest/45 to-transparent px-5 pb-5 pt-16 text-cream",
          "transition-all duration-500 ease-[var(--ease-soft)]",
          "sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100",
          "sm:group-focus-visible:translate-y-0 sm:group-focus-visible:opacity-100"
        )}
      >
        <p className="eyebrow text-butter">{categoryName}</p>
        <div className="mt-1 flex items-end justify-between gap-3">
          <h3 className="font-display text-[1.55rem] leading-tight">{product.name}</h3>
          <span className="shrink-0 text-sm font-medium text-cream/90">
            {getPriceLabel(product)}
          </span>
        </div>
        <span className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cream/80">
          Lihat detail
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </span>
      </div>
    </button>
  );
}
