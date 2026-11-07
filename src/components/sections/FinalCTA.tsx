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
              className="flex h-14 w-14 items-center justify-center rounded-full bg-terracotta text-2xl text-forest-deep"
            >
              ✳
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-2 mt-6 text-balance text-forest">
              Bikin hari seseorang<br />
              <em className="italic text-terracotta">terasa lebih spesial.</em>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-forest">
              Temukan yang sudah jadi di katalog, atau ceritakan idemu — kami bantu
              wujudkan.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap justify-center gap-3.5 sm:flex-nowrap">
              <Button href="/#collection" variant="dark" className="w-full sm:w-auto">
                Lihat Koleksi
              </Button>
              <Button href="/#contact" variant="outline" className="w-full sm:w-auto">
                Hubungi Kami
              </Button>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 text-sm text-forest">
              Pesanan dirangkai per batch kecil — semakin cepat pesan, semakin aman
              untuk tanggal spesialmu.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
