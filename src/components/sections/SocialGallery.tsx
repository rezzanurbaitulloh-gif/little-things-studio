import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryPhotos } from "@/data/gallery";
import { siteConfig } from "@/config/site";
import { isInstagramConfigured } from "@/lib/whatsapp";
import { ArrowUpRightIcon, InstagramIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

/**
 * Curated studio gallery — explicitly NOT a live Instagram feed (FR-08).
 * Each photo links out only when a real post URL + profile are configured;
 * otherwise it renders as a static figure with an informative muted state.
 */
export function SocialGallery() {
  const igReady = isInstagramConfigured();

  return (
    <section className="bg-cream py-20 sm:py-28" aria-label="Studio gallery">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Studio Moments"
            title={
              <>
                Little moments,
                <br />
                <em className="text-terracotta">captured.</em>
              </>
            }
          />
          <Reveal delay={200}>
            <p className="flex items-center gap-2 text-sm text-muted sm:pb-2">
              <InstagramIcon className="h-4 w-4" />
              {siteConfig.instagramHandle}
              <span className="text-terracotta" aria-hidden="true">
                ✳
              </span>
              kurasi studio, bukan feed langsung
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {galleryPhotos.map((photo, i) => {
            const href = igReady && photo.instagramUrl ? photo.instagramUrl : null;
            const frame = (
              <figure className="group relative aspect-square overflow-hidden rounded-[1.25rem]">
                <Image
                  src={photo.image}
                  alt={photo.imageAlt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 24vw, 46vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.05]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/70 to-transparent px-4 pb-3.5 pt-12"
                >
                  <p className="text-xs font-medium text-cream">{photo.caption}</p>
                </div>
                <span
                  className={cn(
                    "absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full shadow-sm transition-all duration-300",
                    href
                      ? "bg-cream/90 text-forest group-hover:bg-terracotta group-hover:text-cream"
                      : "bg-cream/60 text-forest/45"
                  )}
                >
                  {href ? (
                    <ArrowUpRightIcon className="h-4 w-4" />
                  ) : (
                    <InstagramIcon className="h-4 w-4" />
                  )}
                </span>
              </figure>
            );

            return (
              <Reveal key={photo.image} delay={i * 80}>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Buka post Instagram: ${photo.caption}`}
                    className="block"
                  >
                    {frame}
                  </a>
                ) : (
                  <div title="Tautan Instagram belum dikonfigurasi">{frame}</div>
                )}
              </Reveal>
            );
          })}
        </div>

        {!igReady ? (
          <p className="mt-6 text-xs leading-relaxed text-muted">
            Demo — tautan Instagram belum dikonfigurasi, jadi foto ditampilkan
            sebagai galeri statis tanpa tautan keluar.
          </p>
        ) : null}
      </Container>
    </section>
  );
}
