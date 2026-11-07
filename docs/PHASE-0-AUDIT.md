# Phase 0 — Audit & Kondisi Awal

Tanggal: 2026-11-07 · Basis commit: `ea3cc06` (compliance detail.md + ESC fix)

## 1. Kondisi Awal (yang sudah bagus — dipertahankan)

- **Stack**: Next.js 16.4.5 App Router + React 19 + Tailwind 4 + TypeScript, static output. Layak, tidak diganti.
- **Data model** (`src/data/products.ts`): 8 produk, kategori/momen/varian/availability terstruktur rapi — dipertahankan.
- **WhatsApp builder** (`src/lib/whatsapp.ts`): normalisasi nomor 62…, validasi, `buildOrderMessage`/`buildCustomGiftMessage` sesuai spec — dipertahankan.
- **Config terpusat** (`src/config/site.ts`) — semua touchpoint membaca dari sini.
- **ProductModal**: focus trap, ESC, backdrop click, scroll lock, reduced-motion — solid.
- **SEO**: metadata, OG, sitemap, robots, favicon — sudah ada.
- **A11y dasar**: semantic landmarks, alt text, focus states, reduced-motion block.
- **Build**: 7 route static, 0 error.

## 2. Daftar Masalah per Prioritas

### Critical — menghambat produksi/kepercayaan
| ID | Masalah | Status |
|----|---------|--------|
| C1 | 13 lokasi string demo/placeholder terlihat pengunjung (demoNotice, "Demo Location", "Demo Hours", "belum dikonfigurasi" ×6, fallback text Header, note modal/section) | ✅ Diperbaiki Phase 0 |
| C2 | Pola fallback lama = CTA disabled-informative (CTA mati di mata pengunjung). Brief: fallback aman = **hide** elemen tanpa data | ✅ Diperbaiki Phase 0 |
| C3 | Kunci harga minimum "Mulai Rp350.000" di Custom Gifts — klaim bisnis belum terverifikasi | ✅ Diperbaiki Phase 0 |

### High — UX & alur
| ID | Masalah | Status |
|----|---------|--------|
| H1 | Label nav masih Inggris (Collection/Occasions/Our Story/Contact); brief minta Beranda/Koleksi/Momen/Cerita Kami/Kontak | Phase 1 |
| H2 | Struktur homepage belum sesuai alur brief A–K: tidak ada Category Navigation section; BrandIntro & BehindTheCraft duplikatif; hero 2 foto + badge berputar dekoratif | Phase 2 |
| H3 | Race condition ESC mobile menu (listener terpasang terlambat) | ✅ Fixed `ea3cc06` |
| H4 | Info produk (nama/harga/status) bergantung hover di beberapa kartu | Phase 3 |

### Medium — kualitas desain & konsistensi
| ID | Masalah | Status |
|----|---------|--------|
| M1 | Modal entrance tanpa animasi halus | ✅ Fixed `ea3cc06` |
| M2 | Social gallery grid seragam → harus editorial, tidak seragam | Phase 2 |
| M3 | Copy campur Inggris/Indonesia belum konsisten | Phase 1–2 |

### Low — penyempurnaan
| ID | Masalah | Status |
|----|---------|--------|
| L1 | aria-label hamburger statis | ✅ Fixed `ea3cc06` |
| L2 | Selector test `[role="dialog"]` ambigu (2 dialog di DOM) — catatan testing saja | Catatan |

## 3. Inventaris String Demo yang Dihapus (Phase 0)

1. `site.ts` — `demoNotice`, `locationLabel: "Demo Location…"`, `businessHours: "Demo Hours…"` → jadi `null` (hide-when-null)
2. `Footer.tsx` — "WhatsApp — belum dikonfigurasi", "Instagram — belum dikonfigurasi", `{demoNotice}`, "Product photography uses licensed stock imagery for this demo."
3. `Header.tsx` — "WhatsApp & Instagram contact will appear here once configured."
4. `ProductModal.tsx` — "Demo — nomor WhatsApp belum dikonfigurasi…"
5. `CustomGiftSection.tsx` — "Demo — nomor WhatsApp belum dikonfigurasi…" + "Mulai Rp350.000…"
6. `SocialGallery.tsx` — `title="Tautan Instagram belum dikonfigurasi"` + note demo

Komentar kode (products.ts, gallery.ts, site.ts header) bukan output pengunjung — diperbarui seperlunya saja.

## 4. Kebijakan Fallback Baru

> **Hide-when-unconfigured.** Elemen tanpa data nyata TIDAK dirender. Tidak ada
> CTA mati, tidak ada teks placeholder. Mengisi `siteConfig` mengaktifkan UI
> secara otomatis — tidak ada hardcoded di komponen.

Pengecualian yang dipertahankan: Hero "Contact Us" fallback ke anchor `/#contact`
(sudah benar sejak awal — anchor selalu valid).

## 5. Verifikasi Phase 0

- [x] `bun run lint` — 0 error
- [x] `bunx tsc --noEmit` — 0 error
- [x] `bun run build` — sukses, 7 route static
- [x] Grep ulang: 0 string demo user-visible tersisa
- [x] Commit + push ke GitHub

## 6. Data Bisnis Nyata yang Masih Diperlukan (sebelum go-live)

1. `whatsappNumber` — nomor WA bisnis (format internasional tanpa "+")
2. `instagramUrl` + `instagramHandle` — akun IG resmi
3. `locationLabel` — lokasi nyata (jika ada)
4. `businessHours` — jam operasional nyata (jika ada)
5. Foto produk asli + harga riil (data katalog saat ini = demo)
6. Klaim cerita brand yang terverifikasi (Our Story)
