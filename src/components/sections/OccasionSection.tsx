import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { occasions } from "@/data/occasions";
import { OccasionTile } from "./OccasionTile";

export function OccasionSection() {
  return (
    <section id="occasions" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Shop by Moment"
            title={
              <>
                Every occasion,
                <br />
                <em className="text-terracotta">covered.</em>
              </>
            }
          />
          <Reveal delay={200}>
            <p className="max-w-[16rem] text-sm leading-relaxed text-muted sm:pb-2 sm:text-right">
              Tap satu momen — koleksi di bawah langsung tersaring untuknya.
            </p>
          </Reveal>
        </div>

        {/* Snap-scroll rail on mobile, even grid from sm up */}
        <div className="mt-10 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 no-scrollbar sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-6">
          {occasions.map((occasion, i) => (
            <Reveal
              key={occasion.id}
              delay={i * 70}
              className="w-[62%] shrink-0 snap-start sm:w-auto"
            >
              <OccasionTile occasion={occasion} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
