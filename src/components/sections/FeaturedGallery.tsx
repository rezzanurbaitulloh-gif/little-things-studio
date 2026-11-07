"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductModal } from "@/components/product/ProductModal";
import { categories } from "@/data/categories";
import { occasions } from "@/data/occasions";
import { products } from "@/data/products";
import type { CategoryId, OccasionId, Product } from "@/types/product";
import { cn } from "@/lib/cn";
import { CloseIcon } from "@/components/ui/icons";

/**
 * Editorial asymmetric grid — spans pair up into full 12-col rows
 * (7+5, 4+8, 5+7, 6+6) so the layout stays composed at any filter result.
 * Row height is fixed on lg; mobile alternates portrait/landscape tiles.
 */
const gridPattern = [
  "aspect-[4/3] lg:col-span-7 lg:aspect-auto",
  "aspect-[4/5] lg:col-span-5 lg:aspect-auto",
  "aspect-[4/5] lg:col-span-4 lg:aspect-auto",
  "aspect-[4/3] lg:col-span-8 lg:aspect-auto",
  "aspect-[4/3] lg:col-span-5 lg:aspect-auto",
  "aspect-[4/5] lg:col-span-7 lg:aspect-auto",
  "aspect-[4/3] lg:col-span-6 lg:aspect-auto",
  "aspect-[4/5] lg:col-span-6 lg:aspect-auto",
];

export function FeaturedGallery() {
  const [category, setCategory] = useState<CategoryId | "all">("all");
  const [occasion, setOccasion] = useState<OccasionId | null>(null);
  const [selected, setSelected] = useState<Product | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  // Occasion tiles (independent server section) request a filter via event.
  useEffect(() => {
    const onSelectOccasion = (event: Event) => {
      const detail = (event as CustomEvent<OccasionId>).detail;
      if (detail) setOccasion(detail);
    };
    window.addEventListener("select-occasion", onSelectOccasion);
    return () => window.removeEventListener("select-occasion", onSelectOccasion);
  }, []);

  const visible = useMemo(
    () =>
      products.filter(
        (p) =>
          (category === "all" || p.category === category) &&
          (!occasion || p.occasions.includes(occasion))
      ),
    [category, occasion]
  );

  const occasionName = occasions.find((o) => o.id === occasion)?.name ?? null;
  const filtersActive = category !== "all" || occasion !== null;

  return (
    <section id="collection" className="scroll-mt-24 bg-ivory py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="The Collection"
            title={
              <>
                Things made to
                <br />
                <em className="text-terracotta">make you smile.</em>
              </>
            }
            description="A little collection of thoughtful surprises."
          />
        </div>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          Hover to peek — tap for sizes, colours and a gift card.
        </p>

        {/* Category filter chips */}
        <div className="mt-10 -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 no-scrollbar sm:mx-0 sm:flex-wrap sm:px-0">
          <button
            type="button"
            onClick={() => setCategory("all")}
            aria-pressed={category === "all"}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
              category === "all"
                ? "border-forest bg-forest text-cream"
                : "border-line bg-cream text-forest hover:border-terracotta hover:text-terracotta"
            )}
          >
            Semua <span className="opacity-60">{products.length}</span>
          </button>
          {categories.map((c) => {
            const count = products.filter((p) => p.category === c.id).length;
            const active = category === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategory(c.id)}
                aria-pressed={active}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
                  active
                    ? "border-forest bg-forest text-cream"
                    : "border-line bg-cream text-forest hover:border-terracotta hover:text-terracotta"
                )}
              >
                {c.shortName} <span className="opacity-60">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Active occasion indicator */}
        {occasionName ? (
          <div className="mt-5 flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-butter-soft px-4 py-2 text-sm font-medium text-forest">
              Untuk: {occasionName}
              <button
                type="button"
                onClick={() => setOccasion(null)}
                aria-label="Hapus filter acara"
                className="flex h-5 w-5 items-center justify-center rounded-full text-forest/60 transition-colors hover:bg-forest/10 hover:text-forest"
              >
                <CloseIcon className="h-3 w-3" />
              </button>
            </span>
          </div>
        ) : null}

        {/* Grid / empty state */}
        {visible.length === 0 ? (
          <div className="mt-10 rounded-[1.5rem] border border-line bg-cream p-10 text-center sm:p-14">
            <p className="font-display text-2xl text-forest">Belum ada yang cocok.</p>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted">
              Kombinasi filter ini belum punya produk — hapus salah satu filter,
              atau minta kami buatkan yang custom.
            </p>
            <button
              type="button"
              onClick={() => {
                setCategory("all");
                setOccasion(null);
              }}
              className="btn btn-outline mt-6"
            >
              Reset filter
            </button>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-[24rem] lg:grid-cols-12 lg:gap-6">
            {visible.map((product, i) => (
              <Reveal
                key={product.id}
                delay={(i % 4) * 90}
                className={gridPattern[i % gridPattern.length]}
              >
                <ProductCard product={product} onOpen={setSelected} />
              </Reveal>
            ))}
          </div>
        )}

        {filtersActive && visible.length > 0 ? (
          <p className="mt-6 text-center text-xs text-muted">
            Menampilkan {visible.length} dari {products.length} produk —{" "}
            <button
              type="button"
              onClick={() => {
                setCategory("all");
                setOccasion(null);
              }}
              className="font-medium text-terracotta underline underline-offset-2 hover:text-terracotta-deep"
            >
              reset filter
            </button>
          </p>
        ) : null}
      </Container>

      {selected ? <ProductModal product={selected} onClose={closeModal} /> : null}
    </section>
  );
}
