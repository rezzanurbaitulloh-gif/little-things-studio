import Link from "next/link";
import { siteConfig } from "@/config/site";
import { isInstagramConfigured, isWhatsAppConfigured } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import {
  ArrowUpRightIcon,
  InstagramIcon,
  LogoMark,
  WhatsAppIcon,
} from "@/components/ui/icons";

const footerNav = [
  { href: "/", label: "Beranda" },
  { href: "/#collection", label: "Koleksi" },
  { href: "/#moments", label: "Momen" },
  { href: "/#our-story", label: "Cerita Kami" },
  { href: "/#contact", label: "Kontak" },
];

export function Footer() {
  const waReady = isWhatsAppConfigured();
  const igReady = isInstagramConfigured();
  const hasVisit = Boolean(siteConfig.locationLabel || siteConfig.businessHours);

  return (
    <footer id="contact" className="bg-forest-deep text-cream">
      <Container className="pb-10 pt-16 sm:pt-20">
        {/* Big closing statement */}
        <div className="flex flex-col gap-10 border-b border-cream/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow mb-4 text-cream/90 flex items-center gap-2.5">
              <span aria-hidden="true" className="text-terracotta">✳</span> {siteConfig.name}
            </p>
            <p className="font-display text-[clamp(1.9rem,4vw,3rem)] leading-[1.1]">
              A little gift,
              <br />
              <em className="text-butter">a lot of meaning.</em>
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            {waReady ? (
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            ) : null}
            {igReady ? (
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                <InstagramIcon className="h-4 w-4" />
                {siteConfig.instagramHandle ?? "Instagram"}
              </a>
            ) : null}
          </div>
        </div>

        {/* Info columns */}
        <div
          className={cn(
            "grid gap-10 py-12 sm:grid-cols-2",
            hasVisit ? "lg:grid-cols-3" : "lg:grid-cols-2"
          )}
        >
          <div>
            <span className="flex items-center gap-2.5">
              <LogoMark className="h-8 w-8 text-terracotta" />
              <span className="font-display text-xl">Little Things</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              Thoughtfully made gifts for every little and big moment — wrapped
              by hand, sent with heart.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="eyebrow mb-4 text-cream/50">Jelajahi</p>
            <ul className="space-y-2.5">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-cream/80 transition-colors hover:text-butter"
                  >
                    {link.label}
                    <ArrowUpRightIcon className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {hasVisit ? (
            <div>
              <p className="eyebrow mb-4 text-cream/50">Visit</p>
              {siteConfig.locationLabel ? (
                <p className="text-sm leading-relaxed text-cream/80">
                  {siteConfig.locationLabel}
                </p>
              ) : null}
              {siteConfig.businessHours ? (
                <p
                  className={
                    siteConfig.locationLabel
                      ? "mt-3 text-sm leading-relaxed text-cream/80"
                      : "text-sm leading-relaxed text-cream/80"
                  }
                >
                  {siteConfig.businessHours}
                </p>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/45 sm:flex-row">
          <p>
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-display text-sm italic text-cream/55">
            dirangkai dengan hati, dibungkus dengan rasa
          </p>
        </div>
      </Container>
    </footer>
  );
}
