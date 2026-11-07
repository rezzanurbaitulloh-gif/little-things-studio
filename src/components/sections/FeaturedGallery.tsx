"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProductModal } from "@/components/product/ProductModal";
import { getProduct } from "@/data/products";
import type { Product } from "@/types/product";

const featuredIds = [
  "the-little-hamper",
  "blooming-love",
  "sweetest-surprise",
  "little-celebration",
] as const;

const featuredAlts: Record<(typeof featuredIds)[number], string> = {
  "the-little-hamper":
    "The Little Hamper — keranjang hadiah berisi snack dan bunga, dibungkus kraft",
  "blooming-love": "Bouquet rose yang dirangkai tangan dengan kertas khas studio",
  "sweetest-surprise": "Gift box elegan berisi bunga dan snack dengan pita pilihan",
  "little-celebration":
    "Bouquet snack dari cokelat dan permen yang dirangkai seperti buket bunga",
};

const featured = featuredIds
  .map((id) => getProduct(id))
  .filter((p): p is Product => Boolean(p));

export function FeaturedGallery() {
  const [selected, setSelected] = useState<Product | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  const [tileA, ...companions] = featured;

  if (!tileA) return null;

  return (
    <section id="collection" className="scroll-mt-24 bg-cream py-20 sm:py-28" aria-labelledby="collection-title">
      <Container>
        <Reveal delay={0}>
          <p className="eyebrow flex items-center gap-2.5 text-forest">
            <span aria-hidden="true" className="text-terracotta">✳</span> Koleksi Pilihan
          </p>
          <h2 id="collection-title" className="display-2 mt-4 text-balance text-forest">
            Favorit dari{" "}
            <span className="italic text-terracotta">meja kami.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed sm:text-lg text-muted">
            Beberapa favorit kami dari katalog — tiap ukuran bisa disesuaikan
            dengan momen dan anggaranmu.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-12 lg:mt-14">
          {/* Tile A — large */}
          <Reveal delay={80} className="sm:col-span-12 lg:col-span-7">
            <ProductTile
              product={tileA}
              alt={featuredAlts[tileA.id as keyof typeof featuredAlts] ?? tileA.imageAlt}
              figureClass="aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/5]"
              rounded="rounded-[1.75rem]"
              nameClass="font-display text-xl text-forest lg:text-2xl"
              onOpen={setSelected}
            />
          </Reveal>

          {/* Companions */}
          <div className="grid grid-cols-1 gap-5 sm:col-span-12 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
            {companions.map((product, index) => (
              <Reveal key={product.id} delay={80 * (index + 1)}>
                <ProductTile
                  product={product}
                  alt={featuredAlts[product.id as keyof typeof featuredAlts] ?? product.imageAlt}
                  figureClass="aspect-[16/10]"
                  rounded="rounded-[1.25rem]"
                  nameClass="font-display text-lg text-forest sm:text-base lg:text-xl"
                  compact
                  onOpen={setSelected}
                />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <div className="mt-12 border-t border-line pt-6">
            <Link
              href="/#collection"
              className="inline-flex items-center gap-2 text-forest underline-offset-4 transition-colors duration-300 ease-[var(--ease-soft)] hover:text-terracotta-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
            >
              Lihat semua koleksi <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </Container>

      {selected ? <ProductModal product={selected} onClose={closeModal} /> : null}
    </section>
  );
}

interface ProductTileProps {
  product: Product;
  alt: string;
  figureClass: string;
  rounded: string;
  nameClass: string;
  compact?: boolean;
  onOpen: (product: Product) => void;
}

function ProductTile({
  product,
  alt,
  figureClass,
  rounded,
  nameClass,
  compact = false,
  onOpen,
}: ProductTileProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(product)}
      aria-haspopup="dialog"
      className="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
    >
      <figure className={`relative overflow-hidden ${rounded} ${figureClass}`}>
        <Image
          src={product.images[0]}
          alt={alt}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 56vw, 92vw"
          className="object-cover transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </figure>
      <div
        className={
          compact
            ? "mt-3 flex items-start justify-between gap-3"
            : "mt-4 flex items-start justify-between gap-4"
        }
      >
        <div className="min-w-0">
          <p className={`text-balance ${nameClass}`}>{product.name}</p>
          <p className={`text-muted ${compact ? "text-xs" : "text-sm"}`}>
            {product.priceLabel}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-forest transition-colors duration-300 ease-[var(--ease-soft)] group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-forest-deep"
        >
          ↗
        </span>
      </div>
    </button>
  );
}
