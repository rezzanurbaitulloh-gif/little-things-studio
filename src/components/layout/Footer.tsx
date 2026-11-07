import Link from "next/link";
import { siteConfig } from "@/config/site";
import { isInstagramConfigured, isWhatsAppConfigured } from "@/lib/whatsapp";
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
  { href: "/#our-story", label: "Cerita" },
  { href: "/#contact", label: "Kontak" },
];

export function Footer() {
  const waReady = isWhatsAppConfigured();
  const igReady = isInstagramConfigured();

  return (
    <footer id="contact" className="bg-warm-paper text-ink-black border-t border-solid border-[rgba(34,35,31,0.12)]">
      <Container className="pb-12 pt-20 sm:pt-24">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[28rem]">
            <span className="flex items-center gap-2.5">
              <LogoMark className="h-8 w-8 text-tomato-red" />
              <span className="font-display text-xl">Little Things</span>
            </span>
            <p className="mt-6 body-md max-w-[26rem] leading-relaxed text-ink-black/70">
              Hadiah personal untuk momen yang ingin kamu ingat. Setiap rangkaian
              dibuat satu per satu dengan kertas kraft dan perhatian pada detail
              kecil.
            </p>
          </div>
          <div className="hidden lg:flex lg:flex-col lg:gap-12 lg:ml-auto">
            <nav aria-label="Footer">
              <p className="eyebrow mb-6 text-ink-black/50">Jelajahi</p>
              <ul className="space-y-4">
                {footerNav.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group text-sm font-medium text-ink-black transition-colors hover:text-tomato-red"
                    >
                      {link.label}
                      <ArrowUpRightIcon className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100 inline-block ml-1.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              {waReady ? (
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Pesan via WhatsApp
                </a>
              ) : null}
              {igReady ? (
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-ink-black transition-colors hover:text-tomato-red"
                >
                  <InstagramIcon className="h-4 w-4 inline mr-2" />
                  Instagram
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-solid border-[rgba(34,35,31,0.12)] pt-8 text-sm text-ink-black/50 sm:flex-row">
          <p>
            © 2026 {siteConfig.name}. Hak cipta dilindungi.
          </p>
          <p className="font-display text-sm italic text-ink-black/50">
            dirangkai dengan hati, dibungkus dengan rasa
          </p>
        </div>
      </Container>
    </footer>
  );
}
