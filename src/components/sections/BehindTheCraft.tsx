import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

const steps = [
  {
    n: "01",
    title: "Pick the feeling",
    text: "Mulai dari momennya — kami bantu terjemahkan jadi pilihan bunga, snack, atau kotak yang pas. Tidak perlu tahu istilah florist.",
    image: "/images/process/process-wrapping-table.webp",
    alt: "Wrapping table with ribbons, paper and flowers prepared for an order",
  },
  {
    n: "02",
    title: "Wrapped by hand",
    text: "Setiap order dirangkai di meja yang sama, oleh tangan yang sama — bukan assembly line. Ribbon diikat dua kali, selalu.",
    image: "/images/process/process-florists.webp",
    alt: "Florists assembling a bouquet together at the studio",
  },
  {
    n: "03",
    title: "Sent with a note",
    text: "Kartu ucapan ditulis tangan, lalu diserahterimakan dengan hati-hati — foto kondisi akhir selalu kami kirim sebelum berangkat.",
    image: "/images/process/custom-handover.webp",
    alt: "Finished gift being handed over with care",
  },
];

export function BehindTheCraft() {
  return (
    <section id="craft" className="scroll-mt-24 bg-ivory py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Behind the Craft"
          title={
            <>
              Three small steps,
              <br />
              <em className="text-terracotta">zero shortcuts.</em>
            </>
          }
          description="Begitu pesanan masuk, ini yang terjadi di studio — dari meja kerja sampai tangan penerima."
        />

        <div className="mt-14 space-y-16 sm:space-y-20">
          {steps.map((step, i) => {
            const flipped = i % 2 === 1;
            return (
              <div
                key={step.n}
                className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10"
              >
                {/* Number */}
                <Reveal
                  className={cn("lg:col-span-2", flipped && "lg:order-3")}
                >
                  <p
                    aria-hidden="true"
                    className="font-display text-[clamp(3.5rem,7vw,6rem)] leading-none text-terracotta/35"
                  >
                    {step.n}
                  </p>
                </Reveal>

                {/* Image */}
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

                {/* Copy */}
                <Reveal
                  delay={220}
                  className={cn("lg:col-span-5", flipped && "lg:order-2")}
                >
                  <h3 className="display-3 text-forest">{step.title}</h3>
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
      </Container>
    </section>
  );
}
