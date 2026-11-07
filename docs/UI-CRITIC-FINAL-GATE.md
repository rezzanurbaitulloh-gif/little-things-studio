## UI-CRITIC FINAL GATE — 2026-11-07

### Verdict: FAIL

---

### Temuan (masalah hanya):

#### CRITICAL

1. **FeaturedGallery.tsx — layout tidak sesuai spec (bukan editorial 1-besar+3-kecil)**
   - File: `src/components/sections/FeaturedGallery.tsx:120`
   - Spec section D menuntut komposisi editorial: Tile A (The Little Hamper) `col-span-7` besar + 3 tile pendamping (B, C, D) di kanan `col-span-5` masing.
   - Kode sekarang: `grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3` → 4 kartu identik seragam ("4 kartu kembar" yang secara eksplisit dilarang spec: "bukan 4 kartu kembar").
   - Selain itu: chip indikator seharusnya outline `border border-line` dengan panah `↗` (spec D:4), saat ini pakai filled availability dot. Footer link `Lihat semua koleksi →` hilang.

2. **CustomGiftSection.tsx line 115 — teks tidak terlihat (invisible text)**
   - `<p className="text-xs text-cream/60">` di dalam overlay `bg-cream` (baris 108). `text-cream/60` di atas background cream = teks samar/tidak terbaca.
   - Perbaikan: ganti warna teks jadi `text-forest` atau `text-forest/60`.

3. **CustomGiftSection.tsx baris 46, 69 — kontras di bawah AA di atas bg-forest**
   - Baris 46: `text-cream/70` pada paragraf di atas `bg-forest`.
   - Baris 69: `text-cream/60` pada teks langkah di atas `bg-forest`.
   - Cream dengan opacity 60–70% di atas forest (#343a32, sangat gelap) menghasilkan netralitas abu-abu tua, kontraskirakan di bawah 4.5:1. FAIL AA.

4. **FinalCTA.tsx baris 41 — teks mikro tidak sesuai spec & kontras marginal**
   - `<p className="mt-6 text-sm text-forest/80">` di atas `bg-butter-soft`.
   - Spec 0.4 poin 3: di atas butter-soft gunakan `text-forest` (bukan muted/opacity). `text-forest/80` di atas butter-soft (#f7ead0) beresiko kontras di bawah 4.5:1.
   - Perbaikan: ganti jadi `text-forest`.

#### HIGH

5. **Footer.tsx baris 27 — background footer salah**
   - Kode: `bg-forest-deep`. Spec section K: footer bg harus `ivory`.
   - Perbaikan: ganti `bg-forest-deep` → `bg-ivory`, sesuaikan warna teks (forest, forest-deep, line).

6. **Footer.tsx — copy bahasa campur (Inggris/Indonesia)**
   - Baris 35–38: `A little gift, a lot of meaning.` (Inggris). Baris 125: `All rights reserved.` (Inggris). Baris 128: `dirangkai dengan hati, dibungkus dengan rasa` (Indonesia).
   - Spec: copy seluruhnya Bahasa Indonesia. Tagline dalam site.ts juga Inggris.
   - Perbaikan: terjemahkan semua ke Indonesia, atau konsisten satu bahasa.

7. **Header.tsx baris 138 — drawer mobile bg bukan cream solid**
   - Kode: `bg-forest text-cream` (gelap). Spec section A: drawer bg harus `cream` SOLID (bukan blur/glass, bukan gelap).
   - Perbaikan: ganti `bg-forest` → `bg-cream`, teks → `text-forest`.

8. **ProductImageGallery.tsx baris 42, 54 — shadow dekoratif + glassmorphism**
   - Baris 42: `shadow-md` pada tombol navigasi foto. Spec 0.5: HAPUS SEMUA shadow dekoratif.
   - Baris 54: `backdrop-blur-sm` + `bg-forest/45` pada dot indicator = glassmorphism. Spec 0.5: DILARANG glassmorphism.
   - Perbaikan: hapus `shadow-md`, ganti `backdrop-blur-sm` + opacity dengan bg solid.

9. **globals.css baris 239–245 — gradient dekoratif (dotted-rule)**
   - `radial-gradient` digunakan sebagai dotted line. Spec 0.5: DILARANG gradient dekoratif. Digunakan di ProductModal baris 156.
   - Perbaikan: ganti dengan hairline border atau garis mikro `bg-terracotta`.

10. **Copy bahasa Inggris di data produk (user-visible)**
    - `src/data/products.ts` baris 15–227: semua `description` dalam English. Ditampilkan di ProductModal baris 154.
    - `CustomGiftSection.tsx` baris 114: `Made-for-You Box` (English).
    - Spec: copy seluruhnya Bahasa Indonesia.
    - Perbaikan: terjemahkan deskripsi produk dan label ke Indonesia.

#### MEDIUM

11. **globals.css baris 121 — transform hover menggeser layout**
    - `.btn:hover:not(:disabled)` pakai `transform: translateY(-2px)`. Spec 0.6: tanpa transform yang menggeser layout.
    - Perbaikan: ganti dengan background/color shift saja (sudah ada via variant hover).

12. **CategoryNavigation.tsx — Custom Gifts aspek rasio tidak tepat**
    - Baris 109: figure pakai `lg:aspect-auto` dan wrapper `lg:aspect-[21/9]`. Spec C: banner Custom Gifts harus `aspect-[21/9]` pada foto.
    - Perbaikan: pindahkan `aspect-[21/9]` ke figure, pastikan foto + panel dalam wrapper `rounded-[1.75rem] overflow-hidden border border-line`.

13. **Header.tsx baris 77 — eyebrow wordmark pakai text-muted**
    - `<span className="eyebrow ... text-muted">Studio</span>`. Spec 0.4: teks eyebrow harus `text-forest`.
    - Perbaikan: ganti `text-muted` → `text-forest`.

---

### Anti-slop check: FAIL

- Tidak ada div soup ✓ (semantik header/main/section/nav, figure)
- Tidak ada hardcoded hex di UI ✓ (hanya `#f4efe6` di layout.tsx themeColor meta — acceptable)
- Tidak ada lorem ipsum / fake data user-visible ✓
- Tidak ada repetitive card clones ✗ — FeaturedGallery memiliki 4 kartu identik (dilaporkan di atas)
- Tidak ada glassmorphism/gradient/glow dekoratif ✗ — `shadow-md`, `backdrop-blur-sm`, `dotted-rule` radial-gradient (dilaporkan di atas)
- Tidak ada animasi loop (marquee/spin-slow/float) ✓ — grep nol hasil
- UI memiliki POV (editorial gift boutique) ✓ — tapi diundur oleh masalah di atas

### Kontras AA: FAIL

- btn-primary: terracotta (#d77c69) vs forest-deep (#262b26) = 4.79:1 ✓ (sudah benar di globals.css baris 98–101)
- CustomGiftSection paragraf `text-cream/70` di atas forest ✗ (kemungkinan < 4.5:1)
- CustomGiftSection teks langkah `text-cream/60` di atas forest ✗ (kemungkinan < 4.5:1)
- CustomGiftSection overlay `text-cream/60` di atas cream ✗ (invisible)
- FinalCTA mikro `text-forest/80` di atas butter-soft ✗ (spec paksa `text-forest`)
- Muted teks hanya di atas ivory/cream ✓ (kecuali CustomGiftSection yang bg-nya forest)

### Copy kejujuran: FAIL

- Tidak ada klaim bisnis tidak terverifikasi ✓ (tidak ada "standar produksi", testimoni, rating palsu)
- Tidak ada "Demo"/placeholder teks ke pengunjung ✓ (Phase 0 sudah bersih, hanya code comment)
- Bahasa campur ✗ — produk description English, Footer English, "Made-for-You Box" English di tengah Indonesia

### Anchor/nav: PASS

- `#collection`, `#custom-gifts`, `#our-story`, `#moments`, `#contact` — persis 1× masing-masing ✓
- Cocok nav: Koleksi→#collection, Momen→#moments, Cerita Kami→#our-story, Kontak→#contact ✓
- Hero Contact Us fallback ke #contact — tidak ada tombol Contact Us di Hero (sudah dihapus), tidak ada CTA mati ✓

### Responsive: PASS (verifikasi ulang cepat)

- 6 breakpoint (375/390/768/1024/1366/1440) sudah QA PASS, tidak ada horizontal overflow ✓
- Screenshot di docs/screenshots/ konsisten ✓
- Catatan: FeaturedGallery grid uniform akan tetap overflow-free tapi bukan desain yang diinginkan spec

### Motion: PASS

- Tidak ada animate-marquee / spin-slow / float (grep nol) ✓
- Reveal scroll (one-shot), img-swap (one-shot), modal-in/backdrop-in (one-shot) ✓
- `prefers-reduced-motion` guard ada di globals.css baris 182–199 ✓
- AnimatedHeadline hanya di Hero, sekali jalan ✓

### Fallback policy: PASS

- WhatsApp/IG touchpoint hide saat `isWhatsAppConfigured()`/`isInstagramConfigured()` false ✓ (Header, Footer, CustomGiftSection, ProductModal)
- Tidak ada CTA mati ✓
- Tidak ada teks "belum dikonfigurasi" ke pengunjung ✓

---

### Verification (build/type/lint)

- `bun run build` → PASS (7 route static, 0 error)
- `bunx tsc --noEmit` → PASS (0 error)
- `bun run lint` → PASS (0 warning/error)

---

### Production: BLOCK

Risiko produksi:
1. Teks invisible (CustomGiftSection overlay) → UX broken terlihat langsung.
2. Kontras sub-AA di CustomGiftSection + FinalCTA → aksi regulatori (WCAG AA) + kebacaan buruk.
3. Footer bg gelap + copy Inggris → tidak sesuai spec dan brand terasa tidak konsisten.
4. FeaturedGallery layout seragam → tidak sesuai sengaja dengan art direction editorial.
5. Glassmorphism/shadow di ProductImageGallery → melanggu kebijakan anti-slop 0.5.

---

### Catatan perbaikan (jika FAIL): file:line + perbaikan spesifik

| # | File:Line | Perbaikan spesifik |
|---|-----------|-------------------|
| 1 | `src/components/sections/FeaturedGallery.tsx:120` | Ubah grid dari `grid-cols-3` uniform ke editorial: Tile A (The Little Hamper) `col-span-7` + B/C/D kanan `col-span-5`, `aspect-[4/5]` untuk A, `aspect-[16/10]` untuk B/C/D. Tambah chip outline `border border-line rounded-full h-8 w-8` dengan panah `↗`. Tambah footer link `Lihat semua koleksi →`. Caption selalu terlihat (nama + priceLabel), bukan hover-gated. |
| 2 | `src/components/sections/CustomGiftSection.tsx:115` | `text-cream/60` → `text-forest` (overlay bg-cream, teks cream/60 tidak terlihat). |
| 3 | `src/components/sections/CustomGiftSection.tsx:46` | `text-cream/70` → `text-cream` atau `text-forest/90` untuk kontras AA di atas bg-forest. |
| 4 | `src/components/sections/CustomGiftSection.tsx:69` | `text-cream/60` → `text-forest` atau `text-cream/90` untuk kontras AA di atas bg-forest. |
| 5 | `src/components/sections/FinalCTA.tsx:41` | `text-forest/80` → `text-forest` (spec 0.4 poin 3: di butter-soft pakai text-forest penuh). |
| 6 | `src/components/layout/Footer.tsx:27` | `bg-forest-deep` → `bg-ivory`. Sesuaikan teks: border `border-forest/10` → `border-line`, teks cream → forest. |
| 7 | `src/components/layout/Footer.tsx:35-38,125,128` | Terjemahkan "A little gift, a lot of meaning." dan "All rights reserved." ke Indonesia. |
| 8 | `src/components/layout/Header.tsx:138` | `bg-forest text-cream` → `bg-cream text-forest` (drawer mobile cream solid per spec A). |
| 9 | `src/components/product/ProductImageGallery.tsx:42` | Hapus `shadow-md`. |
| 10 | `src/components/product/ProductImageGallery.tsx:54` | Hapus `backdrop-blur-sm`, ganti `bg-forest/45` dengan bg solid (mis. `bg-cream`). |
| 11 | `src/app/globals.css:239-245` | Hapus `dotted-rule` radial-gradient, ganti dengan hairline border atau garis mikro `bg-terracotta`. |
| 12 | `src/data/products.ts:15-227` | Terjemahkan semua `description` produk ke Bahasa Indonesia. |
| 13 | `src/components/sections/CustomGiftSection.tsx:114` | `Made-for-You Box` → Indonesia (mis. "Box Untukmu"). |
| 14 | `src/components/layout/Header.tsx:77` | `text-muted` → `text-forest` (eyebrow wordmark). |

---

### VERDICT: FAIL

Terdapat 4 masalah Critical, 6 masalah High, dan 3 Medium. Tidak ada yang boleh lolos ke production sebelum diperbaiki. Routing revisi: `@ui-builder` untuk struktur/layout dan kode, `@ui-designer` untuk token/kontrak visual, `@qa-engineer` untuk verifikasi kontras AA setelah perbaikan.

Setelah semua perbaikan di atas, jalankan ulang `bun run build`, `tsc --noEmit`, `lint`, dan visual QA 6 breakpoint sebelum verdict ubah ke PASS.
