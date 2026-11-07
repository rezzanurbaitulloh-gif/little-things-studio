import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

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
    title: "Bermakna",
    text: "Tidak ada dua hadiah yang keluar dari studio dengan bentuk yang sama persis.",
  },
];

export function StorySection() {
  return (
    <section
      id="our-story"
      className="scroll-mt-20 bg-warm-paper py-16 sm:py-20"
      aria-labelledby="story-title"
    >
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-14">
          {/* Cerita — kiri */}
          <div className="lg:col-span-7">
            <Reveal delay={0}>
              <p className="eyebrow flex items-center gap-2 text-tomato-red">
                <span aria-hidden="true" className="text-ink-black">✳</span>
                Cerita Kami
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 id="story-title" className="display-2 mt-2 text-balance text-ink-black">
                Hal kecil bisa menyimpan{" "}
                <span className="italic text-tomato-red">perasaan besar.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="body-lg mt-4 max-w-[34rem] text-ink-black/70 leading-relaxed">
                Little Things Studio dimulai dari satu meja dapur, satu gulung
                kertas kraft, dan satu keyakinan: hadiah tidak harus besar untuk
                berarti. Karena itu kami sibuk dengan hal-hal kecil — ketegangan
                pita, arah tangkai, tulisan tangan di kartu — karena di situ
                rasanya tinggal.
              </p>
            </Reveal>

            <div className="mt-12 border-t border-solid border-[rgba(34,35,31,0.12)] pt-10">
              <Reveal delay={300}>
                <h3 className="display-3 mb-4 text-balance text-ink-black">
                  Cara kerja kami
                </h3>
              </Reveal>
              <div className="grid gap-6 sm:grid-cols-3">
                {values.map((v) => (
                  <div key={v.title} className="border-t border-solid border-[rgba(34,35,31,0.12)] pt-6">
                    <Reveal
                      delay={400}
                      className="flex items-center gap-2"
                    >
                      <span
                        aria-hidden="true"
                        className="text-tomato-red font-display text-lg"
                      >
                        ✳
                      </span>
                      <span className="font-display text-lg text-ink-black">
                        {v.title}
                      </span>
                    </Reveal>
                    <p className="body-sm mt-3 text-ink-black/70 leading-relaxed">
                      {v.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Foto proses — kanan */}
          <div className="relative lg:col-span-5">
            <Reveal variant="clip" delay={150} className="relative">
              <figure className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/process/brand-02.webp"
                  alt="Florist menata bunga segar di meja kerja studio"
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
            <Reveal delay={380} className="relative z-10 -mt-16 ml-0 w-[52%] sm:-ml-8 lg:-ml-0">
              <figure className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/process/process-wrap-rose.webp"
                  alt="Tangan membungkus satu rose dengan kertas merah"
                  fill
                  sizes="(min-width: 1024px) 20vw, 50vw"
                  className="object-cover"
                />
              </figure>
              <figcaption className="mt-4 flex items-center gap-2 text-xs text-ink-black/50">
                <span className="inline-block h-px w-6 bg-tomato-red" aria-hidden="true" />
                rangkaian pertama, tetap favorit kami
              </figcaption>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
