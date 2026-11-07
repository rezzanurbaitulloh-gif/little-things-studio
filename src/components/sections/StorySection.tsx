import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const values = [
  {
    title: "Dirangkai tangan",
    text: "Setiap tangkai diletakkan satu per satu, tidak pernah terburu-buru.",
  },
  {
    title: "Batch kecil",
    text: "Kami menerima lebih sedikit order, tapi mengerjakannya lebih baik.",
  },
  {
    title: "Dibuat bermakna",
    text: "Tidak ada dua hadiah yang keluar dari studio dengan bentuk yang sama persis.",
  },
];

const steps = [
  {
    n: "01",
    title: "Mulai dari momennya",
    text: "Mulai dari momennya — kami bantu terjemahkan jadi pilihan bunga, snack, atau kotak yang pas. Tidak perlu tahu istilah florist.",
    image: "/images/process/process-wrapping-table.webp",
    alt: "Meja kerja dengan pita, kertas, dan bunga yang disiapkan untuk satu pesanan",
  },
  {
    n: "02",
    title: "Dirangkai dengan tangan",
    text: "Setiap order dirangkai di meja yang sama, oleh tangan yang sama — bukan assembly line. Ribbon diikat dua kali, selalu.",
    image: "/images/process/process-florists.webp",
    alt: "Florist merangkai bouquet bersama di studio",
  },
  {
    n: "03",
    title: "Berangkat dengan kartu",
    text: "Kartu ucapan ditulis tangan, lalu diserahterimakan dengan hati-hati — foto kondisi akhir selalu kami kirim sebelum berangkat.",
    image: "/images/process/custom-handover.webp",
    alt: "Hadiah jadi diserahterimakan dengan hati-hati",
  },
];

export function StorySection() {
  return (
    <section
      id="our-story"
      className="scroll-mt-24 bg-cream py-20 sm:py-28"
      aria-labelledby="story-title"
    >
      <Container>
        {/* Blok cerita */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal delay={0}>
              <p className="eyebrow flex items-center gap-2.5 text-forest">
                <span aria-hidden="true" className="text-terracotta">✳</span> Cerita Kami
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h2 id="story-title" className="display-2 mt-5 text-balance text-forest">
                Hal kecil bisa menyimpan{" "}
                <span className="relative mx-1 inline-block h-[0.92em] w-[2.1em] overflow-hidden rounded-full align-[-0.12em]" aria-hidden="true">
                  <Image
                    src="/images/process/brand-01.webp"
                    alt=""
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </span>{" "}
                perasaan yang <em className="text-terracotta">besar.</em>
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Little Things Studio dimulai dari satu meja dapur, satu gulung
                kertas kraft, dan satu keyakinan: hadiah tidak harus besar untuk
                berarti. Karena itu kami sibuk dengan hal-hal kecil — ketegangan
                pita, arah tangkai, tulisan tangan di kartu — karena di situ
                rasanya tinggal.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <ul className="mt-10 grid gap-6 sm:grid-cols-3">
                {values.map((v) => (
                  <li key={v.title} className="border-t border-forest/10 pt-4">
                    <p className="flex items-center gap-2 font-display text-lg text-forest">
                      <span className="text-terracotta" aria-hidden="true">
                        ✳
                      </span>
                      {v.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{v.text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Komposisi foto offset */}
          <div className="relative lg:col-span-5">
            <div
              aria-hidden="true"
              className="absolute -left-6 top-10 hidden h-[70%] w-[70%] rounded-t-[999px] bg-sage-soft lg:block"
            />
            <Reveal variant="clip" delay={200} className="relative">
              <figure className="relative ml-auto aspect-[4/5] w-[82%] overflow-hidden rounded-[1.75rem]">
                <Image
                  src="/images/process/brand-02.webp"
                  alt="Florist menata bunga segar di meja kerja studio"
                  fill
                  sizes="(min-width: 1024px) 32vw, 90vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
            <Reveal delay={380} className="relative z-10 -mt-14 ml-0 w-[52%] sm:-ml-4">
              <figure className="relative aspect-square overflow-hidden rounded-2xl border-[6px] border-cream">
                <Image
                  src="/images/process/process-wrap-rose.webp"
                  alt="Tangan membungkus satu rose dengan kertas merah"
                  fill
                  sizes="(min-width: 1024px) 18vw, 50vw"
                  className="object-cover"
                />
              </figure>
              <figcaption className="mt-3 flex items-center gap-2 text-xs text-muted">
                <span className="inline-block h-px w-6 bg-terracotta" aria-hidden="true" />
                rangkaian pertama, tetap favorit kami
              </figcaption>
            </Reveal>
          </div>
        </div>

        {/* Sub-blok: Cara kerja kami */}
        <div className="mt-14 border-t border-line pt-14">
          <Reveal delay={0}>
            <h3 className="display-3 text-balance text-forest">
              Tiga langkah kecil,{" "}
              <em className="text-terracotta">tanpa jalan pintas.</em>
            </h3>
            <p className="mt-4 max-w-xl text-base leading-relaxed sm:text-lg text-muted">
              Begitu pesanan masuk, ini yang terjadi di studio — dari meja kerja
              sampai tangan penerima.
            </p>
          </Reveal>

          <div className="mt-14 space-y-16 sm:space-y-20">
            {steps.map((step, i) => {
              const flipped = i % 2 === 1;
              return (
                <div
                  key={step.n}
                  className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10"
                >
                  <Reveal className={cn("lg:col-span-2", flipped && "lg:order-3")}>
                    <p
                      aria-hidden="true"
                      className="font-display text-[clamp(3.5rem,7vw,6rem)] leading-none text-terracotta/35"
                    >
                      {step.n}
                    </p>
                  </Reveal>

                  <Reveal
                    variant="clip"
                    delay={120}
                    className={cn("lg:col-span-5", flipped && "lg:order-1")}
                  >
                    <figure
                      className={cn(
                        "relative aspect-[4/3] overflow-hidden rounded-[1.75rem]",
                        i === 1 && "rounded-t-[999px]"
                      )}
                    >
                      <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        sizes="(min-width: 1024px) 40vw, 92vw"
                        className="object-cover"
                      />
                    </figure>
                  </Reveal>

                  <Reveal
                    delay={220}
                    className={cn("lg:col-span-5", flipped && "lg:order-2")}
                  >
                    <h4 className="display-3 text-forest">{step.title}</h4>
                    <p className="mt-4 max-w-md leading-relaxed text-muted">{step.text}</p>
                    <span
                      aria-hidden="true"
                      className="mt-5 inline-block h-px w-12 bg-terracotta"
                    />
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
