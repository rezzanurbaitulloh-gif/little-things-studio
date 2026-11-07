import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="bg-butter-soft py-20 sm:py-24" aria-label="Call to action">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <span
              aria-hidden="true"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-terracotta text-2xl text-cream"
            >
              ✳
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-2 mt-6 text-balance text-forest">
              Make someone&rsquo;s day
              <br />
              <em className="text-terracotta">a little more special.</em>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              Find something thoughtful, or let us create one just for you.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap justify-center gap-3.5">
              <Button href="/#collection" variant="dark">
                Explore Collection
              </Button>
              <Button href="/#contact" variant="outline">
                Chat with Us
              </Button>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 text-xs text-muted">
              Small-batch orders — makin early makin aman untuk tanggal spesial.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
