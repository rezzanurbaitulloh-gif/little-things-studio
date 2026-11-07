import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/icons";

export function HeroSection() {
  return (
    <section
      className="relative bg-warm-paper pt-[4rem] pb-20 sm:pb-28 lg:min-h-[calc(100svh-4rem)] lg:pb-32"
      aria-label="Pengantar"
    >
      <div className="mx-auto w-full max-w-[76rem] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-24 lg:items-center">
          {/* Copy — left */}
          <div className="lg:col-span-6">
            <Reveal delay={0}>
              <p className="eyebrow mb-6 flex items-center gap-2 text-tomato-red">
                <span aria-hidden="true" className="text-ink-black">✳</span>
                Little Things Studio
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="display-1 mb-8 text-balance text-ink-black">
                <span className="font-body text-ink-black/60">
                  Gifts that say
                </span>{" "}
                <span className="italic text-ink-black">what words can&rsquo;t.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="body-lg mb-10 max-w-[30rem] text-ink-black/70 leading-relaxed">
                Hadiah personal untuk momen yang ingin kamu ingat.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#collection"
                  className="btn btn-primary w-full sm:w-auto"
                >
                  Explore Collection
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Photo — right */}
          <div className="lg:col-span-6 flex justify-center">
            <Reveal variant="clip" delay={150} className="relative">
              <figure className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/hero/hero-main.webp"
                  alt="Bouquet ranunculus yang dirangkai rapat, dibungkus kertas kraft oleh Little Things Studio"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 92vw"
                  className="object-cover transition-transform duration-1000 ease-[var(--ease-soft)] group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
