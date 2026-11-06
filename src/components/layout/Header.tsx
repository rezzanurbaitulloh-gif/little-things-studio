"use client";

import { useEffect, useState } from "react";
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
  { href: "/#collection", label: "Collection" },
  { href: "/#occasions", label: "Occasions" },
  { href: "/#our-story", label: "Our Story" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const waReady = isWhatsAppConfigured();
  const igReady = isInstagramConfigured();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500",
          scrolled
            ? "border-b border-line bg-ivory/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-[4.25rem] w-full max-w-[76rem] items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label={`${siteConfig.name} — home`}
          >
            <LogoMark className="h-8 w-8 text-terracotta transition-transform duration-500 group-hover:rotate-45" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.35rem] tracking-tight">
                Little Things
              </span>
              <span className="eyebrow text-[0.5625rem] text-muted">Studio</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-forest/85 transition-colors hover:text-terracotta after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-terracotta after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            {igReady ? (
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Little Things Studio"
                className="hidden h-10 w-10 items-center justify-center rounded-full border border-forest/15 text-forest transition-colors hover:border-terracotta hover:text-terracotta sm:flex"
              >
                <InstagramIcon className="h-[1.15rem] w-[1.15rem]" />
              </a>
            ) : null}
            {waReady ? (
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary hidden h-10 min-h-10 px-5 text-sm sm:inline-flex"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat with Us
              </a>
            ) : null}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/15 text-forest transition-colors hover:border-terracotta hover:text-terracotta lg:hidden"
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
          "fixed inset-0 z-50 flex flex-col bg-forest text-cream transition-all duration-500 lg:hidden",
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div className="flex h-[4.25rem] items-center justify-between px-5 sm:px-8">
          <span className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8 text-butter" />
            <span className="font-display text-[1.35rem]">Little Things</span>
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 transition-colors hover:border-cream"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
        <nav
          className="flex flex-1 flex-col justify-center gap-2 px-8"
          aria-label="Mobile"
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "font-display text-[2.6rem] leading-tight text-cream transition-all duration-500 hover:translate-x-2 hover:text-butter",
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: menuOpen ? `${120 + i * 70}ms` : "0ms" }}
            >
              <span className="eyebrow mr-3 align-super text-[0.625rem] text-butter/80">
                0{i + 1}
              </span>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="px-8 pb-10">
          {waReady ? (
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat with Us
            </a>
          ) : (
            <p className="text-sm text-cream/60">
              WhatsApp & Instagram contact will appear here once configured.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
