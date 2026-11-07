import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { buildCustomGiftMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/icons";

export function CustomGiftSection() {
  const waUrl = buildWhatsAppUrl(buildCustomGiftMessage());

  return (
    <section
      id="custom-gifts"
      className="scroll-mt-20 bg-ink-black text-warm-paper py-20 sm:py-28"
      aria-label="Custom order"
    >
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Copy — left */}
          <div className="lg:col-span-6">
            <Reveal delay={0}>
              <p className="eyebrow flex items-center gap-2 text-soft-marigold">
                <span aria-hidden="true" className="text-warm-paper">✳</span>
                Custom Order
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display-2 mt-4 text-balance text-warm-paper">
                Make it personal.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="body-lg mt-6 max-w-[28rem] text-warm-paper/80 leading-relaxed">
                Ceritakan momen, orang yang ingin kamu beri hadiah, dan budget
                yang kamu siapkan. Kami bantu wujudkan.
              </p>
            </Reveal>
            <Reveal delay={300}>
              {waUrl ? (
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-tomato-red font-medium text-lg transition-colors hover:text-soft-marigold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-soft-marigold"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Discuss Your Gift
                  <span className="text-soft-marigold">→</span>
                </a>
              ) : null}
            </Reveal>
          </div>

          {/* Photo — right */}
          <div className="lg:col-span-6 flex justify-center">
            <Reveal variant="clip" delay={150} className="relative">
              <figure className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/process/process-kraft.webp"
                  alt="Kertas kraft dan alat bungkus di atas meja kerja studio"
                  fill
                  sizes="(min-width: 1024px) 40vw, 92vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
