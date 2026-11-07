import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { ArrowRightIcon } from "@/components/ui/icons";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-[4.25rem]" aria-label="Pengantar">
      <div className="relative mx-auto grid w-full max-w-[76rem] grid-cols-1 items-center gap-10 px-5 pb-14 pt-10 sm:px-8 lg:min-h-[calc(100svh-4.25rem)] lg:grid-cols-12 lg:gap-6 lg:px-10 lg:pb-24 lg:pt-6">
        {/* Copy */}
        <div className="lg:col-span-6 lg:pr-6">
          <Reveal delay={0}>
            <p className="eyebrow flex items-center gap-2.5 text-forest">
              <span aria-hidden="true" className="text-terracotta">✳</span> Boutique hadiah handmade — Malang
            </p>
          </Reveal>

          <AnimatedHeadline
            className="display-1 mt-5 text-forest"
            lines={[
              { text: "Hal kecil," },
              { text: "makna yang besar.", className: "italic text-terracotta" },
            ]}
          />

          <Reveal delay={120}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Bouquet, hampers, dan gift box yang dirangkai tangan satu per
              satu — untuk momen kecil maupun besar orang yang kamu sayang.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href="/#collection" variant="primary" className="w-full sm:w-auto">
                Lihat Koleksi
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
              <Button href="/#custom-gifts" variant="outline" className="w-full sm:w-auto">
                Pesan Custom
              </Button>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-8 flex items-center gap-3 text-sm text-muted">
              <span className="inline-block h-px w-10 bg-terracotta" aria-hidden="true" />
              Dirangkai tangan dalam batch kecil — Malang, Indonesia
            </p>
          </Reveal>
        </div>

        {/* Imagery */}
        <div className="relative lg:col-span-6">
          <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-none">
            {/* passive butter mat behind the photo */}
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 hidden h-[55%] w-[55%] rounded-t-[999px] bg-butter-soft md:block"
            />

            {/* main arch image */}
            <Reveal variant="clip" delay={150} className="relative">
              <figure className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[1.75rem] border-[10px] border-cream">
                <Image
                  src="/images/hero/hero-main.webp"
                  alt="Bouquet ranunculus merah muda yang dirangkai rapat, dibungkus kertas kraft oleh Little Things Studio"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 92vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>

            {/* secondary overlapping image */}
            <Reveal
              delay={520}
              className="absolute -bottom-8 -left-4 w-[38%] sm:w-[42%] lg:-left-14 lg:w-[42%]"
            >
              <figure className="relative aspect-square overflow-hidden rounded-2xl border-[6px] border-cream">
                <Image
                  src="/images/hero/hero-secondary.webp"
                  alt="Beberapa bouquet tulip dibungkus kertas kraft di atas bangku kayu"
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 14vw, 38vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
