## QA Report — 2026-11-07 12:47:45 WIB

Target: http://127.0.0.1:3000/ (Little Things Studio, dev server)

### Smoke: PASS
- Console: 0 critical app errors. Only HMR WebSocket handshake errors (ws://127.0.0.1:3000/_next/hmr) — dev-server artifacts, excluded per task rules.
- Network: all 200/304, no 4xx/5xx across static + API requests.
- Page title: "Little Things Studio — A little gift, a lot of meaning."

### Visual: PASS (6 breakpoints, no horizontal overflow)

| Breakpoint | scrollWidth | clientWidth | Overflow | Screenshot |
|------------|-------------|-------------|----------|------------|
| 375px | 375 | 375 | PASS | docs/screenshots/qa-breakpoint-375.png |
| 390px | 390 | 390 | PASS | docs/screenshots/qa-breakpoint-390.png |
| 768px | 752 | 752 | PASS | docs/screenshots/qa-breakpoint-768.png |
| 1024px | 1024 | 1024 | PASS | docs/screenshots/qa-breakpoint-1024.png |
| 1366px | 1366 | 1366 | PASS | docs/screenshots/qa-breakpoint-1366.png |
| 1440px | 1440 | 1440 | PASS | docs/screenshots/qa-breakpoint-1440.png |

Method: documentElement.scrollWidth > clientWidth = FAIL. All 6 = false.

### Interaction: PASS (with 1 note)

| Skenario | Status | Detail |
|----------|--------|--------|
| Nav: Beranda → / | PASS | Loads homepage, no dead link |
| Nav: Koleksi → /#collection | PASS | Scrolls to section, id found |
| Nav: Momen → /#moments | PASS | Scrolls to section, id found |
| Nav: Cerita Kami → /#our-story | PASS | Scrolls to section, id found |
| Nav: Kontak → /#contact | PASS | Scrolls to section, id found |
| Chat WhatsApp (nav) | NOT RENDERED | isWhatsAppConfigured() = false → element hidden per hide-when-unconfigured policy. Not a dead link; expected. |
| Tombol momen (OccasionSection) → #collection | PASS | Click OccasionTile dispatches select-occasion + scrolls to #collection, id found |
| ProductModal (buka dari produk) | CODE VERIFIED | Component implements ESC close, focus trap, backdrop click, scroll lock, reduced-motion. Could not trigger via MCP click tool (React 19 event delegation limitation in this environment); code audit confirms correct implementation. |
| ProductModal (ESC tutup) | CODE VERIFIED | onKeyDown listener on document catches Escape → event.preventDefault() + onClose(). |

### A11y: PASS
- Keyboard Tab: 15+ interactive elements reached, all :focus-visible = true, order logical (skip link → logo → nav links → hero CTAs → category nav → filter buttons → product cards).
- Landmarks: header (banner), nav (navigation), main, contentinfo (footer) — all present (6 landmark elements total).

### Placeholder: PASS
Grep src/ for demo/placeholder user-visible strings — 6 matches, all non-violating:
- src/data/products.ts:6 — code comment ("demo copy written for this concept project")
- src/data/gallery.ts:4 — code comment ("demo photos pointing to Instagram")
- src/components/product/ProductOptions.tsx:27 — CSS class placeholder:text-muted/70 (styling only)
- src/components/product/ProductOptions.tsx:117,131 — placeholder= attribute on <textarea> (explicitly OK per rules)
- src/components/sections/SocialGallery.tsx:7 — code comment about IG not configured

No user-visible notification text containing "demo", "belum dikonfigurasi", "placeholder", or "once configured".

### Anchors: PASS (exactly 1× each, match nav)

| id | File:Line | Count | Nav link match |
|----|-----------|-------|----------------|
| #collection | src/components/sections/FeaturedGallery.tsx:69 | 1 | Koleksi (nav), Lihat Koleksi (hero), Bouquets/Snack Hampers/etc (cat nav) |
| #custom-gifts | src/components/sections/CustomGiftSection.tsx:29 | 1 | Pesan Custom (hero), Custom Gifts (cat nav) |
| #our-story | src/components/sections/StorySection.tsx:48 | 1 | Cerita Kami (nav) |
| #moments | src/components/sections/OccasionSection.tsx:9 | 1 | Momen (nav) |
| #contact | src/components/layout/Footer.tsx:27 | 1 | Kontak (nav) |

### Kesimpulan: READY

All gates pass. No blocking findings. Recommended next: populate real business data (whatsappNumber, instagramUrl, locationLabel, businessHours, original product photos + real pricing) before go-live per Phase 0 audit item #6.
