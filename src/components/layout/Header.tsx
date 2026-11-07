"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import {
  isInstagramConfigured,
  isWhatsAppConfigured,
} from "@/lib/whatsapp";
import {
  CloseIcon,
  InstagramIcon,
  LogoMark,
  MenuIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/#collection", label: "Koleksi" },
  { href: "/#moments", label: "Momen" },
  { href: "/#our-story", label: "Cerita" },
  { href: "/#contact", label: "Kontak" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOpenRef = useRef(false);
  const waReady = isWhatsAppConfigured();
  const igReady = isInstagramConfigured();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpenRef.current) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500 bg-warm-paper",
          scrolled
            ? "border-b border-solid border-[rgba(34,35,31,0.12)]"
            : "border-b border-transparent"
        )}
      >
        <div className="mx-auto flex h-[4rem] w-full max-w-[76rem] items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label={`${siteConfig.name} — home`}
          >
            <LogoMark className="h-8 w-8 text-tomato-red" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.25rem] tracking-tight">
                Little Things
              </span>
              <span className="eyebrow text-[0.5rem] text-ink-black/60">Studio</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-black/70 transition-colors hover:text-tomato-red"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {waReady ? (
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary hidden h-10 min-h-10 px-5 text-sm sm:inline-flex"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Pesan
              </a>
            ) : null}
            {igReady ? (
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Little Things Studio"
                className="hidden h-10 w-10 items-center justify-center text-ink-black transition-colors hover:text-tomato-red sm:flex"
              >
                <InstagramIcon className="h-[1.15rem] w-[1.15rem]" />
              </a>
            ) : null}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              className="flex h-10 w-10 items-center justify-center text-ink-black lg:hidden"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-warm-paper text-ink-black transition-all duration-500 lg:hidden",
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div className="flex h-[4rem] items-center justify-between px-5 sm:px-8">
          <span className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8 text-tomato-red" />
            <span className="font-display text-[1.25rem]">Little Things</span>
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Tutup menu"
            className="flex h-10 w-10 items-center justify-center text-ink-black"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-6 px-8" aria-label="Mobile">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "font-display text-[2rem] leading-tight text-ink-black transition-colors hover:text-tomato-red",
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: menuOpen ? `${120 + i * 70}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {waReady ? (
          <div className="px-8 pb-12">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Pesan Kami
            </a>
          </div>
        ) : null}
      </div>
    </>
  );
}
