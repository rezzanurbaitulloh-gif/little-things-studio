import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const categories = [
  {
    name: "Bouquets",
    image: "/images/products/blooming-love-01.webp",
    alt: "Bouquet bunga segar dari koleksi Little Things Studio",
    span: "col-span-2 sm:col-span-3 lg:col-span-5",
    figure: "aspect-[16/10] lg:aspect-[4/5]",
    sizes: "(min-width: 1024px) 40vw, 92vw",
  },
  {
    name: "Snack Bouquets",
    image: "/images/products/little-celebration-01.webp",
    alt: "Bouquet snack dari biskuit dan cokelat yang dirangkai seperti buket bunga",
    span: "col-span-2 sm:col-span-3 lg:col-span-7",
    figure: "aspect-[16/10]",
    sizes: "(min-width: 1024px) 56vw, 92vw",
  },
  {
    name: "Hampers",
    image: "/images/products/little-hamper-01.webp",
    alt: "Keranjang hampers berisi snack dan bunga dengan pita satin",
    span: "col-span-1 sm:col-span-3 lg:col-span-4",
    figure: "aspect-[4/3]",
    sizes: "(min-width: 1024px) 31vw, 46vw",
  },
  {
    name: "Gift Boxes",
    image: "/images/products/sweetest-surprise-01.webp",
    alt: "Gift box berisi bunga dan snack yang dibuka dari atas",
    span: "col-span-1 sm:col-span-3 lg:col-span-3",
    figure: "aspect-[4/3]",
    sizes: "(min-width: 1024px) 25vw, 46vw",
  },
  {
    name: "Souvenirs",
    image: "/images/products/tiny-memories-01.webp",
    alt: "Souvenir kecil berisi bunga kering dalam kemasan kraft",
    span: "col-span-1 sm:col-span-3 lg:col-span-5",
    figure: "aspect-[4/3]",
    sizes: "(min-width: 1024px) 40vw, 46vw",
  },
] as const;

export function CategoryNavigation() {
  return (
    <section className="bg-ivory py-20 sm:py-28" aria-labelledby="categories-title">
      <div className="mx-auto w-full max-w-[76rem] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal delay={0}>
            <p className="eyebrow flex items-center gap-2.5 text-forest">
              <span aria-hidden="true" className="text-terracotta">✳</span> Jelajahi
            </p>
            <h2 id="categories-title" className="display-2 mt-4 text-balance text-forest">
              Mulai dari yang{" "}
              <span className="italic text-terracotta">dia suka.</span>
            </h2>
          </Reveal>
          <Reveal delay={100} className="lg:max-w-xs">
            <p className="text-base leading-relaxed text-muted">
              Enam cara untuk bilang &ldquo;aku peduli&rdquo; — pilih yang
              paling mirip momennya.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-6 sm:gap-5 lg:mt-14 lg:grid-cols-12">
          {categories.map((category, index) => (
            <Reveal key={category.name} delay={80 * index} className={category.span}>
              <Link
                href="/#collection"
                className="group block h-full overflow-hidden rounded-[1.25rem] border border-line bg-cream transition-colors duration-300 ease-[var(--ease-soft)] hover:border-forest/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
              >
                <figure className={`relative overflow-hidden ${category.figure}`}>
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    loading="lazy"
                    sizes={category.sizes}
                    className="object-cover transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </figure>
                <div className="flex items-center justify-between px-1 pb-3 pt-3">
                  <span className="font-display text-lg text-forest">
                    {category.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-4 w-4 text-terracotta transition-transform duration-300 ease-[var(--ease-soft)] group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}

          {/* Custom Gifts — wide banner */}
          <Reveal delay={80 * categories.length} className="col-span-2 sm:col-span-6 lg:col-span-12">
            <Link
              href="/#custom-gifts"
              className="group block overflow-hidden rounded-[1.75rem] border border-line bg-cream transition-colors duration-300 ease-[var(--ease-soft)] hover:border-forest/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
            >
              <div className="grid grid-cols-12">
                <figure className="relative col-span-12 aspect-[16/10] overflow-hidden lg:col-span-8 lg:aspect-[21/9]">
                  <Image
                    src="/images/products/made-for-you-01.webp"
                    alt="Gift box custom yang dirangkai khusus sesuai permintaan pelanggan"
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 60vw, 92vw"
                    className="object-cover transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </figure>
                <div className="col-span-12 flex flex-col justify-center gap-2 bg-cream p-6 lg:col-span-4 lg:p-8">
                  <span className="font-display text-lg text-forest">
                    Custom Gifts
                  </span>
                  <p className="text-sm leading-relaxed text-muted">
                    Ceritakan momen dan anggaranmu — kami rangkai dari nol.
                  </p>
                  <span
                    aria-hidden="true"
                    className="mt-2 h-4 w-4 text-terracotta transition-transform duration-300 ease-[var(--ease-soft)] group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
