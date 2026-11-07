"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { ProductModal } from "@/components/product/ProductModal";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { occasions } from "@/data/occasions";
import type { Product } from "@/types/product";
import { availabilityLabels } from "@/lib/product-utils";
type FilterKind = "all" | "category" | "occasion";

interface FilterState {
  kind: FilterKind;
  id: string;
  label: string;
}

const ALL: FilterState = { kind: "all", id: "all", label: "Semua Koleksi" };

const filterOptions: FilterState[] = [
  ALL,
  ...categories.map((c): FilterState => ({
    kind: "category",
    id: c.id,
    label: c.shortName,
  })),
];

export function FeaturedGallery() {
  const [filter, setFilter] = useState<FilterState>(ALL);
  const [selected, setSelected] = useState<Product | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  // Terima filter momen dari OccasionSection (tombol momen di section E).
  useEffect(() => {
    const onSelectOccasion = (event: CustomEvent<string>) => {
      const occasionId = event.detail;
      const occasion = occasions.find((o) => o.id === occasionId);
      setFilter({
        kind: "occasion",
        id: occasionId,
        label: occasion ? occasion.name : "Semua Koleksi",
      });
      const el = document.getElementById("collection");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener(
      "select-occasion",
      onSelectOccasion as unknown as EventListener
    );
    return () =>
      window.removeEventListener(
        "select-occasion",
        onSelectOccasion as unknown as EventListener
      );
  }, []);

  const filtered = products.filter((p) => {
    if (filter.kind === "all") return true;
    if (filter.kind === "category") return p.category === filter.id;
    return p.occasions.includes(filter.id as Product["occasions"][number]);
  });

  return (
    <section id="collection" className="scroll-mt-24 bg-cream py-20 sm:py-28" aria-labelledby="collection-title">
      <Container>
        <Reveal delay={0}>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow flex items-center gap-2.5 text-forest">
                <span aria-hidden="true" className="text-terracotta">✳</span>
                Koleksi Pilihan
              </p>
              <h2 id="collection-title" className="display-2 mt-4 text-balance text-forest">
                Semua Koleksi
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed sm:text-lg text-muted">
                Lengkapi momenmu dengan rangkaian kami — saring sesuai kategori
                atau momen yang kamu cari.
              </p>
            </div>
            <div className="flex items-end gap-2 text-sm">
              <span className="font-display text-lg text-forest">
                {filtered.length} produk
              </span>
            </div>
          </div>
        </Reveal>

        {/* Filter chips */}
        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap gap-3 lg:mt-14">
            {filterOptions.map((option) => {
              const active = filter.kind === option.kind && filter.id === option.id;
              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => setFilter(option)}
                  aria-pressed={active}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
                    active
                      ? "border-forest bg-forest text-cream"
                      : "border-line bg-cream text-forest hover:border-terracotta hover:text-terracotta"
                  )}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Product grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {filtered.map((product) => (
            <Reveal key={product.id} className="group block">
              <button
                type="button"
                onClick={() => setSelected(product)}
                aria-haspopup="dialog"
                className="w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
              >
                <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-line bg-cream">
                  <Image
                    src={product.images[0]}
                    alt={product.imageAlt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 30vw, 90vw"
                    className="object-cover transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </figure>
                <div className="mt-4 flex flex-col gap-2">
                  <p className="text-balance font-display text-lg text-forest">
                    {product.name}
                  </p>
                  <p className="text-sm text-muted">{product.priceLabel}</p>
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        {
                          available: "bg-sage",
                          "made-to-order": "bg-butter",
                          limited: "bg-terracotta",
                        }[product.availability]
                      )}
                    />
                    <span className="text-xs font-medium text-forest/70">
                      {availabilityLabels[product.availability]}
                    </span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
          {filtered.length === 0 && (
            <p className="mt-8 text-center text-muted">
              Tidak ada produk yang cocok dengan filter tersebut.
            </p>
          )}
        </div>

        {selected ? (
          <ProductModal product={selected} onClose={closeModal} />
        ) : null}
      </Container>
    </section>
  );
}
