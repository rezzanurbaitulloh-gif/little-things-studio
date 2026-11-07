import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const values = [
  { title: "Hand-tied", text: "Every stem placed by hand, never rushed." },
  { title: "Small batch", text: "We wrap fewer orders, better." },
  { title: "Made to mean", text: "No two gifts leave the studio the same." },
];

export function BrandIntro() {
  return (
    <section id="our-story" className="scroll-mt-24 bg-cream py-20 sm:py-28" aria-label="Our story">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Statement */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow flex items-center gap-2.5 text-terracotta">
                <span aria-hidden="true">✳</span> Our Story
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="display-2 mt-5 text-balance text-forest">
                Small things can hold the{" "}
                <span className="relative inline-block align-baseline">
                  {/* inline image chip inside the headline */}
                  <span className="relative mx-1 inline-block h-[0.92em] w-[2.1em] overflow-hidden rounded-full align-[-0.12em]">
                    <Image
                      src="/images/process/brand-01.webp"
                      alt=""
                      fill
                      sizes="120px"
                      className="object-cover"
                      aria-hidden="true"
                    />
                  </span>
                  <em className="text-terracotta">biggest</em>
                </span>{" "}
                feelings.
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Little Things Studio began at a kitchen table with a roll of
                kraft paper and one stubborn belief: a gift doesn&rsquo;t need to
                be big to matter. So we obsess over the small stuff — the
                ribbon tension, the stem angle, the card handwriting — because
                that&rsquo;s where the feeling lives.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <ul className="mt-10 grid gap-6 sm:grid-cols-3">
                {values.map((v, i) => (
                  <li key={v.title} className="border-t-2 border-forest/10 pt-4">
                    <p className="flex items-center gap-2 font-display text-lg text-forest">
                      <span className="text-terracotta" aria-hidden="true">
                        {"✳"}
                      </span>
                      {v.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{v.text}</p>
                    <span className="sr-only">{i}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Offset imagery */}
          <div className="relative lg:col-span-5">
            <div
              aria-hidden="true"
              className="absolute -left-6 top-10 hidden h-[70%] w-[70%] rounded-t-[999px] bg-sage-soft lg:block"
            />
            <Reveal variant="clip" delay={200} className="relative">
              <figure className="relative ml-auto aspect-[4/5] w-[82%] overflow-hidden rounded-[1.75rem]">
                <Image
                  src="/images/process/brand-02.webp"
                  alt="Florist arranging fresh flowers at the studio worktable"
                  fill
                  sizes="(min-width: 1024px) 32vw, 90vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
            <Reveal
              delay={380}
              className="relative z-10 -mt-14 ml-0 w-[52%] sm:-ml-4"
            >
              <figure className="relative aspect-square overflow-hidden rounded-2xl border-[6px] border-cream shadow-[0_18px_36px_-18px_rgb(52_58_50/0.35)]">
                <Image
                  src="/images/process/process-wrap-rose.webp"
                  alt="Close-up of hands wrapping a single rose in red paper"
                  fill
                  sizes="(min-width: 1024px) 18vw, 50vw"
                  className="object-cover"
                />
              </figure>
              <figcaption className="mt-3 flex items-center gap-2 text-xs text-muted">
                <span className="inline-block h-px w-6 bg-terracotta" aria-hidden="true" />
                the first wrap, still our favourite
              </figcaption>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
