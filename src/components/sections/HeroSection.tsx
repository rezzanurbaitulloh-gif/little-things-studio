import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/ui/icons";
import { occasions } from "@/data/occasions";
import { buildWhatsAppUrl, isWhatsAppConfigured } from "@/lib/whatsapp";

export function HeroSection() {
  const waReady = isWhatsAppConfigured();
  const waUrl = waReady
    ? buildWhatsAppUrl(
        "Halo Little Things Studio! Saya ingin bertanya soal produk kalian."
      )
    : null;

  return (
    <section className="relative overflow-hidden pt-[4.25rem]" aria-label="Introduction">
      {/* soft butter mat behind imagery */}
      <div
        aria-hidden="true"
        className="absolute right-[-6%] top-[6%] hidden aspect-square w-[46vw] max-w-[38rem] rounded-full bg-butter-soft lg:block"
      />
      {/* thin dotted arc */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="absolute left-[38%] top-[10%] hidden h-64 w-64 text-terracotta/50 lg:block"
      >
        <circle
          cx="100"
          cy="100"
          r="96"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="2 7"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative mx-auto grid w-full max-w-[76rem] grid-cols-1 items-center gap-10 px-5 pb-14 pt-10 sm:px-8 lg:min-h-[calc(100svh-4.25rem)] lg:grid-cols-12 lg:gap-6 lg:px-10 lg:pb-24 lg:pt-6">
        {/* Copy */}
        <div className="lg:col-span-6 lg:pr-6">
          <Reveal delay={0}>
            <p className="eyebrow flex items-center gap-2.5 text-terracotta">
              <span aria-hidden="true">✳</span> Gift Boutique — Handmade Orders
            </p>
          </Reveal>

          <AnimatedHeadline
            className="display-1 mt-5 text-forest"
            lines={[
              { text: "A little gift," },
              { text: "a lot of meaning.", className: "italic text-terracotta" },
            ]}
          />

          <Reveal delay={340}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Thoughtfully made gifts for every little and big moment — bouquets,
              hampers and keepsakes, wrapped by hand with unreasonable attention
              to detail.
            </p>
          </Reveal>

          <Reveal delay={440}>
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Button href="/#collection" variant="primary">
                Explore Collection
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
              {waUrl ? (
                <Button href={waUrl} variant="outline" external>
                  <WhatsAppIcon className="h-4 w-4" />
                  Contact Us
                </Button>
              ) : (
                <Button href="/#contact" variant="outline">
                  Contact Us
                </Button>
              )}
            </div>
          </Reveal>

          <Reveal delay={540}>
            <p className="mt-8 flex items-center gap-3 text-sm text-muted">
              <span className="inline-block h-px w-10 bg-terracotta" aria-hidden="true" />
              Handwrapped in small batches — Malang, Indonesia
            </p>
          </Reveal>
        </div>

        {/* Imagery */}
        <div className="relative lg:col-span-6">
          <div className="relative mx-auto max-w-[30rem] lg:max-w-none">
            {/* main arch image */}
            <Reveal variant="clip" delay={150}>
              <figure className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] border-[10px] border-cream shadow-[0_30px_60px_-30px_rgb(52_58_50/0.35)]">
                <Image
                  src="/images/hero/hero-main.webp"
                  alt="Lush pink ranunculus bouquet wrapped in clear foil, styled for a gift boutique"
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
              className="absolute -bottom-8 -left-4 w-[42%] max-w-[13rem] sm:-left-10 lg:-left-14"
            >
              <figure className="relative aspect-square overflow-hidden rounded-2xl border-[6px] border-cream shadow-[0_20px_40px_-20px_rgb(52_58_50/0.4)]">
                <Image
                  src="/images/hero/hero-secondary.webp"
                  alt="Tulip bouquets wrapped in kraft paper on a wooden bench"
                  fill
                  sizes="(min-width: 1024px) 14vw, 38vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>

            {/* rotating badge */}
            <Reveal
              delay={700}
              className="absolute -right-3 top-6 sm:-right-6 lg:-right-8"
            >
              <div className="relative flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
                <svg
                  viewBox="0 0 100 100"
                  className="animate-spin-slow absolute inset-0 h-full w-full"
                  aria-hidden="true"
                >
                  <defs>
                    <path
                      id="badge-circle"
                      d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="fill-forest text-[10.5px] font-semibold uppercase tracking-[0.24em]">
                    <textPath href="#badge-circle">
                      handmade · with love · little things ·
                    </textPath>
                  </text>
                </svg>
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-terracotta text-xl text-cream"
                >
                  ✳
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* occasion marquee */}
      <div className="relative border-y border-line bg-cream py-4" aria-hidden="true">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
            {[...occasions, ...occasions].map((o, i) => (
              <span
                key={`${o.id}-${i}`}
                className="flex items-center gap-8 whitespace-nowrap font-display text-lg italic text-forest/70"
              >
                {o.name}
                <span className="text-base not-italic text-terracotta">✳</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
