"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";

interface ProductImageGalleryProps {
  images: string[];
  alt: string;
  name: string;
}

/**
 * Image navigator inside the product modal — main frame with wrap-around
 * prev/next controls and dot indicators. Swaps animate via `.img-swap`
 * (disabled under reduced motion in globals.css).
 */
export function ProductImageGallery({ images, alt, name }: ProductImageGalleryProps) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-sage-soft sm:aspect-[16/10] lg:aspect-auto lg:h-full">
      <Image
        key={images[index]}
        src={images[index]}
        alt={`${alt} — foto ${index + 1} dari ${total}`}
        fill
        priority={index === 0}
        sizes="(min-width: 1024px) 55vw, 100vw"
        className="img-swap object-cover"
      />

      {total > 1 ? (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={`Foto sebelumnya — ${name}`}
            className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-forest transition-colors hover:bg-cream sm:left-4"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={`Foto berikutnya — ${name}`}
            className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-forest transition-colors hover:bg-cream sm:right-4"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-cream px-3 py-2">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ke foto ${i + 1} dari ${total}`}
                aria-pressed={i === index}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-5 bg-cream" : "w-1.5 bg-cream/50 hover:bg-cream/80"
                )}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
