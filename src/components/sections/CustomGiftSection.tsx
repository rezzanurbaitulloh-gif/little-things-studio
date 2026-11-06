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
    text: "Mulai Rp350.000 — kami susun yang paling berkesan di dalamnya.",
  },
];

export function CustomGiftSection() {
  const waUrl = buildWhatsAppUrl(buildCustomGiftMessage());

  return (
    <section className="bg-forest py-20 text-cream sm:py-28" aria-label="Custom gifts">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow flex items-center gap-2.5 text-butter">
                <span aria-hidden="true">✳</span> Custom Gifts
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="display-2 mt-5 text-balance">
                Tell us the person.
                <br />
                <em className="text-butter">We wrap the rest.</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 max-w-lg leading-relaxed text-cream/70">
                Punya ide hadiah yang tidak ada di katalog? Kami rakit satu per
                satu mengikuti ceritamu — dari tema cozy sampai kotak self-care
                lengkap.
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
                      <p className="font-display text-lg">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-cream/60">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={380}>
              <div className="mt-9">
                {waUrl ? (
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Mulai Inquiry Custom
                  </a>
                ) : (
                  <>
                    <span
                      className="btn btn-primary cursor-not-allowed opacity-60"
                      aria-disabled="true"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      Mulai Inquiry Custom
                    </span>
                    <p className="mt-3 max-w-md text-xs leading-relaxed text-cream/55">
                      Demo — nomor WhatsApp belum dikonfigurasi. Tombol ini
                      aktif otomatis begitu nomor diisi di konfigurasi situs.
                    </p>
                  </>
                )}
              </div>
            </Reveal>
          </div>

          {/* Imagery */}
          <div className="relative lg:col-span-5">
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 hidden h-24 w-24 rounded-full border border-dashed border-butter/40 lg:block"
            />
            <Reveal variant="clip" delay={200} className="relative">
              <figure className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/process/process-kraft.webp"
                  alt="Rolls of kraft paper and wrapping supplies on the studio table"
                  fill
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
            <Reveal
              delay={420}
              className="absolute -bottom-6 left-5 flex items-center gap-3 rounded-2xl bg-cream px-5 py-4 text-forest shadow-[0_20px_40px_-20px_rgb(0_0_0/0.4)] sm:left-8"
            >
              <span aria-hidden="true" className="text-2xl text-terracotta">
                ✳
              </span>
              <div>
                <p className="font-display text-base leading-tight">Made-for-You Box</p>
                <p className="text-xs text-muted">one idea, one box, no repeats</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
