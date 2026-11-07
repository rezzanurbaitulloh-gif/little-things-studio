"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProductModal } from "@/components/product/ProductModal";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { occasions } from "@/data/occasions";
import type { Product } from "@/types/product";
import { formatIDR } from "@/lib/product-utils";
import { availabilityLabels } from "@/lib/product-utils";
import { cn } from "@/lib/cn";

type FilterKind = "all" | "category" | "occasion";

interface FilterState {
  kind: FilterKind;
  id: string;
  label: string;
}

const ALL: FilterState = { kind: "all", id: "all", label: "Semua" };

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

  useEffect(() => {
    const onSelectOccasion = (event: CustomEvent<string>) => {
      const occasionId = event.detail;
      const occasion = occasions.find((o) => o.id === occasionId);
      setFilter({
        kind: "occasion",
        id: occasionId,
        label: occasion ? occasion.name : "Semua",
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
    <section
      id="collection"
      className="scroll-mt-20 bg-warm-paper py-20 sm:py-28"
      aria-labelledby="collection-title"
    >
      <Container>
        <Reveal delay={0}>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow flex items-center gap-2 text-tomato-red">
                <span aria-hidden="true" className="text-ink-black">✳</span>
                Koleksi
              </p>
              <h2 id="collection-title" className="display-2 mt-4 text-balance text-ink-black">
                Koleksi Pilihan
              </h2>
              <p className="body-md mt-4 max-w-[32rem] text-ink-black/70 leading-relaxed">
                Setiap rangkaian dibuat satu per satu. Pilih yang paling
                sesuai momenmu.
              </p>
            </div>
            <div className="flex items-end gap-2 text-sm">
              <span className="font-display text-lg text-ink-black">
                {filtered.length} produk
              </span>
            </div>
          </div>
        </Reveal>

        {/* Filter chips */}
        <Reveal delay={80}>
          <div className="mt-12 flex flex-wrap gap-3 lg:mt-16">
            {filterOptions.map((option) => {
              const active = filter.kind === option.kind && filter.id === option.id;
              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => setFilter(option)}
                  aria-pressed={active}
                  className={cn(
                    "rounded-none border border-solid border-[rgba(34,35,31,0.12)] px-4 py-2 text-sm font-medium transition-colors duration-200",
                    active
                      ? "border-ink-black bg-ink-black text-warm-paper"
                      : "border-[rgba(34,35,31,0.12)] bg-transparent text-ink-black hover:border-tomato-red hover:text-tomato-red"
                  )}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Asymmetric editorial grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          {/* Large product - left */}
          {filtered[0] ? (
            <Reveal
              delay={80}
              className="col-span-1 sm:col-span-12 lg:col-span-7"
            >
              <ProductTile
                product={filtered[0]}
                large
                onOpen={setSelected}
              />
            </Reveal>
          ) : null}

          {/* Medium products - right column */}
          <div className="col-span-1 sm:col-span-12 lg:col-span-5 lg:grid-cols-1 lg:gap-8">
            {filtered.slice(1, 4).map((product, index) => (
              <Reveal
                key={product.id}
                delay={80 * (index + 1)}
                className="col-span-1 sm:col-span-12"
              >
                <ProductTile product={product} onOpen={setSelected} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Footer link */}
        <Reveal delay={200}>
          <div className="mt-16 border-t border-solid border-[rgba(34,35,31,0.12)] pt-8 lg:mt-20">
            <Link
              href="/#collection"
              className="inline-flex items-center gap-2 text-ink-black transition-colors hover:text-tomato-red focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tomato-red"
            >
              Lihat semua koleksi
              <span aria-hidden="true" className="text-tomato-red">→</span>
            </Link>
          </div>
        </Reveal>

        {selected ? (
          <ProductModal product={selected} onClose={closeModal} />
        ) : null}
      </Container>
    </section>
  );
}

interface ProductTileProps {
  product: Product;
  large?: boolean;
  onOpen: (product: Product) => void;
}

function ProductTile({ product, large = false, onOpen }: ProductTileProps) {
  const availabilityDot: Record<Product["availability"], string> = {
    available: "bg-tomato-red",
    "made-to-order": "bg-soft-marigold",
    limited: "bg-ink-black",
  };

  return (
    <button
      type="button"
      onClick={() => onOpen(product)}
      aria-haspopup="dialog"
      className="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tomato-red"
    >
      <figure
        className={cn(
          "relative overflow-hidden border border-solid border-[rgba(34,35,31,0.12)]",
          large ? "aspect-[4/5] rounded-none" : "aspect-[16/10] rounded-none"
        )}
      >
        <Image
          src={product.images[0]}
          alt={product.imageAlt}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 30vw, 90vw"
          className="object-cover transition-transform duration-1000 ease-[var(--ease-soft)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </figure>
      <div className="mt-6 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span
            className="font-display text-xs text-ink-black/50 tracking-tight"
          >
            {product.code}
          </span>
          <span
            aria-hidden="true"
            className={cn(
              "h-1.5 w-1.5 rounded-none",
              availabilityDot[product.availability]
            )}
          />
          <span
            className="text-xs font-medium text-ink-black/50 uppercase tracking-wider"
          >
            {availabilityLabels[product.availability]}
          </span>
        </div>
        <p className={cn("text-balance font-display text-lg text-ink-black", large ? "text-xl lg:text-2xl" : "text-lg")}>
          {product.name}
        </p>
        <p className="body-sm text-ink-black">{formatIDR(product.price)}</p>
      </div>
      <span
        aria-hidden="true"
        className={cn(
          "absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-solid border-[rgba(34,35,31,0.12)] text-ink-black transition-colors duration-300 ease-[var(--ease-soft)] group-hover:border-tomato-red group-hover:bg-tomato-red group-hover:text-warm-paper",
          large ? "mt-6 lg:mt-0" : "mt-6"
        )}
      >
        →
      </span>
    </button>
  );
}
