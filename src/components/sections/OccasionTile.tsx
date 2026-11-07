"use client";

import Image from "next/image";
import type { Occasion } from "@/types/product";
import { ArrowUpRightIcon } from "@/components/ui/icons";

/**
 * Occasion tile — dispatches `select-occasion` so the (independent) gallery
 * section can filter, then scrolls the reader to `#collection`.
 */
export function OccasionTile({ occasion }: { occasion: Occasion }) {
  const handleClick = () => {
    window.dispatchEvent(
      new CustomEvent<Occasion["id"]>("select-occasion", { detail: occasion.id })
    );
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document
      .getElementById("collection")
      ?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Lihat hadiah untuk ${occasion.name}`}
      className="group block w-full text-left"
    >
      <figure className="relative aspect-[3/4] overflow-hidden rounded-[1.25rem]">
        <Image
          src={occasion.image}
          alt={occasion.imageAlt}
          fill
          sizes="(min-width: 1024px) 15vw, (min-width: 640px) 30vw, 62vw"
          className="object-cover transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <span
          aria-hidden="true"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-forest opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <ArrowUpRightIcon className="h-4 w-4" />
        </span>
      </figure>
      <p className="mt-3 font-display text-lg text-forest transition-colors group-hover:text-terracotta">
        {occasion.name}
      </p>
      <p className="mt-0.5 text-xs leading-relaxed text-muted">{occasion.description}</p>
    </button>
  );
}
