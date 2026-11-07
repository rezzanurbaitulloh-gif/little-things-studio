"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { occasions } from "@/data/occasions";

const occasionOrder = ["birthday", "anniversary", "graduation", "wedding", "thank-you", "just-because"] as const;

export function OccasionSection() {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (!selected) return;
    const el = document.getElementById("collection");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.dispatchEvent(
      new CustomEvent<string>("select-occasion", { detail: selected })
    );
  }, [selected]);

  const orderedOccasions = occasionOrder.map(
    (id) => occasions.find((o) => o.id === id)!
  );

  return (
    <section
      id="moments"
      className="scroll-mt-20 bg-warm-paper py-16 sm:py-20"
      aria-labelledby="moments-title"
    >
      <Container>
        <Reveal delay={0}>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow flex items-center gap-2 text-tomato-red">
                <span aria-hidden="true" className="text-ink-black">✳</span>
                Momen
              </p>
              <h2 id="moments-title" className="display-2 mt-2 text-balance text-ink-black">
                Pilih momennya,
                <br />
                <span className="italic text-tomato-red">kami siapkan sisanya.</span>
              </h2>
              <p className="body-md mt-2 max-w-[32rem] text-ink-black/70 leading-relaxed">
                Satu sentuhan — koleksi di bawah langsung tersaring untuknya.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          {/* Daftar editorial — kiri */}
          <Reveal delay={80} className="col-span-1 sm:col-span-12 lg:col-span-6">
            <ol className="space-y-8">
              {orderedOccasions.map((occasion, i) => {
                const active = selected === occasion.id;
                return (
                  <li
                    key={occasion.id}
                    onClick={() => setSelected(active ? null : occasion.id)}
                    className="cursor-pointer select-none group relative pl-16"
                  >
                    <span
                      className={cn(
                        "absolute left-0 top-0 font-display text-[3rem] leading-none select-none transition-colors duration-300",
                        active
                          ? "text-tomato-red font-bold"
                          : "text-ink-black/20"
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-display text-lg text-ink-black transition-colors group-hover:text-tomato-red">
                        {occasion.name}
                      </p>
                      <p className="body-sm mt-1 text-ink-black/60 leading-relaxed">
                        {occasion.description}
                      </p>
                    </div>
                    {active && (
                      <span
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-tomato-red"
                        aria-hidden="true"
                      />
                    )}
                  </li>
                );
              })}
            </ol>
          </Reveal>

          {/* Gambar pendamping selektif — kanan */}
          <Reveal delay={160} className="col-span-1 sm:col-span-12 lg:col-span-6 flex flex-col gap-8 lg:flex-row">
            {orderedOccasions.slice(0, 3).map((occasion) => (
              <div
                key={occasion.id}
                className={cn(
                  "relative overflow-hidden border border-solid border-[rgba(34,35,31,0.12)]",
                  selected === occasion.id ? "border-tomato-red" : "",
                  "aspect-square lg:aspect-[4/5] rounded-none"
                )}
              >
                <Image
                  src={occasion.image}
                  alt={occasion.imageAlt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 25vw, 90vw"
                  className="object-cover transition-transform duration-1000 ease-[var(--ease-soft)] group-hover:scale-[1.03] motion-reduce:transition-none"
                />
                <span
                  className="absolute left-4 top-4 font-display text-xs text-ink-black/50 tracking-tight uppercase"
                >
                  {occasion.id.charAt(0).toUpperCase() + occasion.id.slice(1)}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
