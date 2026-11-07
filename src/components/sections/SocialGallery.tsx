import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Studio gallery — statis dan asimetris. Tidak ada tautan Instagram, ikon, atau
 * caption overlay karena akun IG belum dikonfigurasi (hide-when-unconfigured).
 */
export function SocialGallery() {
  return (
    <section className="bg-ivory py-20 sm:py-28" aria-label="Studio gallery">
      <Container>
        <div className="flex flex-col gap-6">
          <Reveal delay={0}>
            <p className="eyebrow flex items-center gap-2.5 text-forest">
              <span aria-hidden="true" className="text-terracotta">✳</span> Momen Studio
            </p>
            <h2 className="display-2 mt-4 text-balance text-forest">
              Sedikit lagi,{" "}
              <br />
              <em className="italic text-terracotta">dari dunia kami.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              Potret rangkaian, pengemasan, dan pengiriman — langsung dari studio kami.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-12 sm:gap-5">
          {/* Baris pertama: 5 + 4 + 3 = 12 */}
          <Reveal
            delay={0}
            className="relative col-span-1 sm:col-span-5 aspect-[4/5]"
          >
            <figure className="relative overflow-hidden rounded-[1.25rem]">
              <Image
                src="/images/social/social-01.webp"
                alt="Rangkaian bouquet siap kirim di meja studio"
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 40vw, 92vw"
                className="object-cover"
              />
            </figure>
          </Reveal>
          <Reveal
            delay={100}
            className="relative col-span-1 sm:col-span-4 aspect-[3/4] mt-16 sm:mt-0"
          >
            <figure className="relative overflow-hidden rounded-[1.25rem]">
              <Image
                src="/images/social/social-02.webp"
                alt="Proses pengemasan hampers di studio"
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 31vw, 46vw"
                className="object-cover"
              />
            </figure>
          </Reveal>
          <Reveal
            delay={200}
            className="relative col-span-1 sm:col-span-3 aspect-square mt-32 sm:mt-0"
          >
            <figure className="relative overflow-hidden rounded-[1.25rem]">
              <Image
                src="/images/social/social-03.webp"
                alt="Detail pita dan kartu ucapan tulisan tangan"
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 25vw, 46vw"
                className="object-cover"
              />
            </figure>
          </Reveal>
          {/* Baris kedua: col-span-6 col-start-4 */}
          <Reveal
            delay={300}
            className="relative col-span-1 sm:col-span-6 sm:col-start-4 aspect-[16/10]"
          >
            <figure className="relative overflow-hidden rounded-[1.25rem]">
              <Image
                src="/images/social/social-04.webp"
                alt="Momen serah terima hadiah ke penerima"
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 56vw, 92vw"
                className="object-cover"
              />
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
