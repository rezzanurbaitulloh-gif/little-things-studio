import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/icons";
import { buildCustomGiftMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

const steps = [
  {
    n: "01",
    title: "Siapa yang terima",
    text: "Ceritakan orangnya — hobinya, selera warnanya, hal kecil yang dia suka.",
  },
  {
    n: "02",
    title: "Cerita & momennya",
    text: "Ulang tahun, permintaan maaf, atau rayakan kecil tanpa alasan besar.",
  },
  {
    n: "03",
    title: "Budget-nya",
    text: "Bahas rentang budget yang nyaman — kami usulkan konsep yang paling berkesan di dalamnya.",
  },
];

export function CustomGiftSection() {
  const waUrl = buildWhatsAppUrl(buildCustomGiftMessage());

  return (
    <section id="custom-gifts" className="bg-forest py-20 text-cream sm:py-28" aria-label="Custom gifts">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow flex items-center gap-2.5 text-cream">
                <span aria-hidden="true" className="text-terracotta">✳</span> Hadiah Kustom
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="display-2 mt-5 text-balance text-cream">
                Ceritakan idemu,<br />
                <em className="italic text-terracotta">kami rangkaikan.</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 max-w-lg leading-relaxed text-cream">
                Cerita momen dan anggaranmu — kami bantu wujudkan lewat percakapan
                WhatsApp. Foto kondisi akhir selalu kami kirim sebelum barang berangkat.
              </p>
            </Reveal>

            <Reveal delay={280}>
              <ol className="mt-9 max-w-lg">
                {steps.map((step, i) => (
                  <li
                    key={step.n}
                    className={`flex items-start gap-5 py-4 ${
                      i > 0 ? "border-t border-cream/10" : ""
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="font-display text-xl leading-none text-butter/80"
                    >
                      {step.n}
                    </span>
                    <div>
                      <p className="font-display text-lg text-cream">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-cream/90">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={380}>
              {waUrl ? (
                <div className="mt-9">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Buat Hadiah Kustom
                  </a>
                </div>
              ) : null}
            </Reveal>
          </div>

          {/* Imagery */}
          <div className="relative lg:col-span-5">
            <Reveal variant="clip" delay={200} className="relative">
              <figure className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/process/process-kraft.webp"
                  alt="Gulungan kertas kraft dan alat bungkus di atas meja kerja studio"
                  fill
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
            <Reveal
              delay={420}
              className="absolute -bottom-6 left-5 flex items-center gap-3 rounded-2xl bg-cream px-5 py-4 text-forest sm:left-8"
            >
              <span aria-hidden="true" className="text-2xl text-terracotta">
                ✳
              </span>
              <div>
                <p className="font-display text-base leading-tight">Box Untukmu</p>
                <p className="text-xs text-forest">Satu ide, satu box, tidak ada yang sama.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
