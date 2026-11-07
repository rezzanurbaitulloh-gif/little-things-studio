# PHASE 2 — DESIGN SPEC: Redesign Homepage Little Things Studio

> Art direction: **Playful Luxury × Editorial Gift Boutique** — hangat, personal, playful-elegan, handmade.
> Dokumen ini adalah kontrak implementasi. `ui-builder` menerjemahkan spec ini **persis** — jangan improvisasi struktur, copy, atau token di luar yang tertulis.
> Stack: Next.js (App Router) + Tailwind v4 (`@theme` di `globals.css`). Font: DM Serif Display (display) + DM Sans (body) — sudah terpasang.

---

## 0. ATURAN GLOBAL (berlaku untuk semua section)

### 0.1 Token yang DIPAKAI (sudah ada di `globals.css` — jangan hardcode hex)

| Token | Nilai | Pemakaian |
|---|---|---|
| `--color-ivory` | `#f4efe6` | Dasar halaman (body bg) |
| `--color-cream` | `#fffcf7` | Surface section selang-seling, frame foto |
| `--color-terracotta` | `#d77c69` | Aksen PENTING saja: CTA primary bg, display-italic accent, garis mikro, simbol ✳ |
| `--color-terracotta-deep` | `#bd6350` | Hover state CTA, aksen teks kecil bila perlu |
| `--color-sage` / `--color-sage-soft` | `#a9b69b` / `#e3e8da` | Blok warna pasif di BELAKANG foto (mat), maksimal 1–2× per halaman |
| `--color-butter` / `--color-butter-soft` | `#e8c98e` / `#f7ead0` | Sama: mat pasif + bg Final CTA |
| `--color-forest` | `#343a32` | Semua teks utama |
| `--color-forest-deep` | `#262b26` | Teks di atas terracotta (lihat 0.4) |
| `--color-muted` | `#77746e` | Teks sekunder — HANYA di atas ivory/cream (lihat 0.4) |
| `--color-line` | `#e4ded3` | Hairline divider & border |
| `--font-display` / `--font-sans` | DM Serif / DM Sans | Sesuai peran |
| `--ease-soft` | `cubic-bezier(0.22,1,0.36,1)` | Semua transisi |

Utility yang tersedia: `eyebrow`, `display-1/2/3`, `btn`, `btn-primary`, `btn-dark`, `btn-outline`, `btn-light`, `text-balance`, `no-scrollbar`.

### 0.2 Sistem radius (bervariasi TERKONTROL — bukan asal rounded)

| Radius | Dipakai untuk | Frekuensi |
|---|---|---|
| `rounded-t-[999px]` (arch) | **HANYA 1 foto**: hero utama | 1× per halaman |
| `rounded-[1.75rem]` | Foto besar section (featured, story, custom, banner kategori) | dominan |
| `rounded-[1.25rem]` | Tile kategori, foto galeri sosial | dominan |
| `rounded-2xl` | Foto overlap kecil (secondary) | sesekali |
| `rounded-full` | Tombol pill, chip ✳, chip panah, garis mikro | elemen UI saja |

### 0.3 Spacing & rhythm

- Section vertical: `py-20 sm:py-28` (konsisten dengan kode existing). Jangan tambah padding acak.
- Container: `mx-auto w-full max-w-[76rem] px-5 sm:px-8 lg:px-10`.
- Grid dasar: `grid-cols-12`, gap `gap-5` (foto) / `gap-8` (kolom konten).
- Divider antar-blok dalam section: hairline `border-t border-line` + jarak `mt-14` — BUKAN card ber-background.

### 0.4 Kontras AA (WAJIB — ada 2 koreksi dari kode existing)

1. **`btn-primary` diganti**: `background: var(--color-terracotta)` + `color: var(--color-forest-deep)` (`#262b26`). Kontras = **4.79:1 ✓ AA**. Teks cream di atas terracotta (kode lama) hanya ≈2.9:1 — FAIL, jangan dipakai. Sekalian: **hapus `box-shadow` dari `btn-primary`** (lihat 0.5).
2. **`eyebrow`**: teks eyebrow `text-terracotta` (11px) FAIL AA (≈3.2:1). Ganti: teks eyebrow = `text-forest`; simbol ✳ tetap terracotta dengan `aria-hidden="true"` (non-text, ≥3:1 ✓).
3. `text-muted` hanya di atas `ivory`/`cream` (≈4.6:1 ✓). Di atas `butter-soft` (section K) gunakan `text-forest`.
4. Italic terracotta pada display (≥24px) aman (large-text 3:1 ✓). Jangan pakai terracotta untuk teks <24px selain simbol dekoratif `aria-hidden`.

### 0.5 Depth & dekorasi (anti-slop global)

- **Shadow: HAPUS SEMUA** `shadow-[...]` dekoratif pada foto/kartu/tombol. Depth datang dari: frame `border-cream` tebal pada foto, hairline border, dan kontras surface ivory↔cream.
- **DILARANG**: glassmorphism, gradient dekoratif (termasuk gradient scrim di atas foto), glow, floating blob, ornamen SVG acak, badge berputar, marquee, animasi loop tak berujung.
- **Dekorasi yang BOLEH**: mat blok warna pasif di belakang foto (sage-soft/butter-soft, `rounded-t-[999px]` atau persegi, maksimal 2× per halaman), garis mikro `h-px w-10 bg-terracotta`, simbol ✳ kecil `aria-hidden`.
- **Foto = fokus**: setiap foto `object-cover` + `aspect-*` eksplisit + `sizes` benar; `priority` hanya hero.

### 0.6 Motion (hanya 4 jenis, semua one-shot, hormati `prefers-reduced-motion`)

1. **Scroll reveal ringan** — komponen `Reveal` existing (fade-up, sekali jalan). Stagger maksimal 80–120ms antar item.
2. **Image reveal** — `Reveal variant="clip"` untuk foto utama per section.
3. **Gentle zoom** — hover foto pada elemen interaktif: `scale-[1.03]`–`[1.04]`, `duration-700`, `ease-[var(--ease-soft)]`. Foto statis (galeri sosial) TANPA zoom.
4. **Micro-interaction tombol** — `btn` existing: hover `bg` shift + arrow `translate-x-0.5`. Tanpa transform yang menggeser layout.

`AnimatedHeadline` dipertahankan HANYA di Hero (reveal per-baris sekali jalan) dengan fallback `motion-reduce:transform-none motion-reduce:opacity-100`.

---

## A. Nav (Header) — penyelarasan ringan

- **Tujuan**: navigasi 5 anchor yang tenang dan editorialis, tanpa chrome berat.
- **Layout**: tinggi bar `h-[4.25rem]` (selaras `pt-[4.25rem]` hero existing). Wordmark kiri (font-display), link kanan: Beranda · Koleksi · Momen · Cerita Kami · Kontak.
- **Copy**: sudah Indonesia ✓ — pertahankan.
- **Interaksi**: hover/active link = underline hairline 1.5px `bg-terracotta` via pseudo-element `after` (width animasi 200ms `--ease-soft`, offset 6px). Focus mengikuti `:focus-visible` global.
- **Responsive**: ≥1024 link inline; <1024 tombol hamburger (touch ≥44×44px) + drawer bg `cream` SOLID (BUKAN blur/glass), item `py-3` (≥44px), tutup via Esc + klik overlay.
- **Visual note kecil**: bg bar = `ivory`, `border-b border-line` muncul saat scroll >8px (bukan blur, tanpa shadow). Hapus link `#craft` dari nav (section craft dilebur — lihat I).
- **Anti-slop**: nav tanpa gradient/glass; underline hairline satu-satunya aksen — halaman dimulai dari konten, bukan chrome.

---

## B. Hero

- **Tujuan**: first impression editorial — satu foto bermakna + headline pendek yang nempel, bukan poster penuh tulisan.
- **Layout** (grid 12 kolom, `lg:min-h-[calc(100svh-4.25rem)]`):
  - Kolom kiri `lg:col-span-6`: eyebrow → headline `display-1` → sub (`max-w-md`) → 2 CTA → micro-tagline.
  - Kolom kanan `lg:col-span-6`: foto utama arch `aspect-[4/5]`, `rounded-t-[999px] rounded-b-[1.75rem]`, `border-[10px] border-cream`, **tanpa shadow**. Foto overlap sekunder: `-bottom-8 -left-4 lg:-left-14`, `w-[42%] max-w-[13rem]`, `aspect-square`, `rounded-2xl`, `border-[6px] border-cream`.
  - **Mat pasif** (pengganti lingkaran butter + arc SVG yang dihapus): satu blok `bg-butter-soft rounded-t-[999px]` di belakang kanan-bawah foto — `absolute -bottom-6 -right-6 h-[55%] w-[55%]`, `aria-hidden`, hidden di mobile.
- **Copy** (final, Bahasa Indonesia):
  - Eyebrow: `Boutique hadiah handmade — Malang`
  - Headline (2 baris): `Hal kecil,` / `makna yang besar.` (baris 2: `italic text-terracotta`)
  - Sub: `Bouquet, hampers, dan gift box yang dirangkai tangan satu per satu — untuk momen kecil maupun besar orang yang kamu sayang.`
  - CTA primary: `Lihat Koleksi` → `/#collection` (variant primary, ikon panah)
  - CTA secondary: `Pesan Custom` → `/#custom-gifts` (variant outline)
  - Micro-tagline: `Dirangkai tangan dalam batch kecil — Malang, Indonesia` (dengan garis mikro `h-px w-10 bg-terracotta`)
- **Image**:
  - `/images/hero/hero-main.webp` — alt: `Bouquet ranunculus merah muda yang dirangkai rapat, dibungkus kertas kraft oleh Little Things Studio` — `priority`, `sizes="(min-width:1024px) 42vw, 92vw"`.
  - `/images/hero/hero-secondary.webp` — alt: `Beberapa bouquet tulip dibungkus kertas kraft di atas bangku kayu` — `loading="lazy"`, `sizes="(min-width:1024px) 14vw, 38vw"`.
- **Interaksi**: `Reveal` copy berurutan (0/120/220/300ms); foto utama `Reveal variant="clip"`; CTA micro-interaction sesuai 0.6. **Tidak ada elemen berputar/berjalan.**
- **Responsive**: 375 — satu kolom, copy dulu, foto `max-w-[22rem]` mx-auto, overlap sekunder `w-[38%]`, CTA full-width bertumpuk (`w-full sm:w-auto`). 768 — tetap stack, foto `max-w-[26rem]`. ≥1024 — dua kolom seimbang.
- **Anti-slop**: komposisi arch + overlap + satu mat pasif = bahasa editorial khas; headline 4 kata, bukan kalimat marketing panjang; semua ornamen bergerak dihapus sehingga foto jadi satu-satunya bintang.

**HAPUS dari Hero existing**: lingkaran `bg-butter-soft` kanan-atas, SVG dotted arc, **rotating badge** (seluruh blok `animate-spin-slow`), **occasion marquee** (seluruh blok `animate-marquee` di dasar section).

---

## C. Category Navigation — SECTION BARU

- **Tujuan**: pintu masuk katalog — 6 kategori dalam komposisi editorial bervariasi ukuran, terlihat tepat setelah hero.
- **Layout** (section bg `ivory`, `py-20 sm:py-28`):
  - Heading kiri: eyebrow `Jelajahi` + `display-2`: `Mulai dari yang` / `dia suka.` (baris 2 italic terracotta). Sub 1 kalimat di kanan-bawah heading (hanya ≥1024): `Enam cara untuk bilang "aku peduli" — pilih yang paling mirip momennya.`
  - Grid desktop ≥1024 (`grid-cols-12 gap-5`):

    | Tile | Span | Aspect | Foto |
    |---|---|---|---|
    | Bouquets | `col-span-5` | `aspect-[4/5]` | `/images/products/blooming-love-01.webp` |
    | Snack Bouquets | `col-span-7` | `aspect-[16/10]` | `/images/products/little-celebration-01.webp` |
    | Hampers | `col-span-4` | `aspect-[4/3]` | `/images/products/little-hamper-01.webp` |
    | Gift Boxes | `col-span-3` | `aspect-[4/3]` | `/images/products/sweetest-surprise-01.webp` |
    | Souvenirs | `col-span-5` | `aspect-[4/3]` | `/images/products/tiny-memories-01.webp` |
    | Custom Gifts | `col-span-12` | banner `aspect-[21/9]` | `/images/products/made-for-you-01.webp` |

  - Anatomi tile: `<a href="/#collection">` berisi `figure` (foto `object-cover`) + **caption bar di bawah foto** (bukan overlay): `flex items-center justify-between px-1 pt-3` — nama kategori `font-display text-lg text-forest` + panah `↗` (`h-4 w-4 text-terracotta`). Tile bg `cream`, `rounded-[1.25rem]`, `overflow-hidden`, `border border-line`.
  - Tile Custom Gifts (banner): layout dalam `grid grid-cols-12` — foto `col-span-8` + panel `col-span-4 bg-cream p-6` berisi nama, 1 kalimat `Ceritakan momen dan anggaranmu — kami rangkai dari nol.`, dan panah. Foto & panel dalam satu wrapper `rounded-[1.75rem] overflow-hidden border border-line`.
- **Copy label tile**: `Bouquets` · `Snack Bouquets` · `Hampers` · `Gift Boxes` · `Souvenirs` · `Custom Gifts` (nama kategori mengikuti products.ts — konsisten dengan katalog).
- **Image**: path di atas, `loading="lazy"`, `sizes` per span (contoh tile besar: `(min-width:1024px) 40vw, 92vw`; kecil: `(min-width:1024px) 25vw, 46vw`).
  - Alt contoh: Bouquets → `Bouquet bunga segar dari koleksi Little Things Studio`; Custom Gifts → `Gift box custom yang dirangkai khusus sesuai permintaan pelanggan`.
- **Interaksi**: hover = foto `scale-[1.03]` (700ms soft) + panah `translate-x-0.5` + border tile `border-forest/20`. Focus-visible global. Seluruh tile = satu link anchor `#collection`.
- **Responsive**: 375 — `grid-cols-2 gap-3`: Bouquets & Snack `col-span-2` (aspect 16/10), 4 lainnya 1 kolom masing (aspect 4/3), Custom `col-span-2` (panel stack di bawah foto). Semua tile jauh melampaui touch target 44px. 768 — `grid-cols-6`: Bouquets `col-span-3`, Snack `col-span-3`, 4 kecil `col-span-3` masing (2×2), Custom `col-span-6`. ≥1024 — seperti tabel di atas.
- **Anti-slop**: bukan grid 6 kartu identik — satu tile dominan + banner wide memberi hierarki; caption di luar foto menghindari gradient scrim; foto produk asli, bukan ilustrasi generik.

---

## D. Featured Collection

- **Tujuan**: menampilkan 4 produk unggulan dalam komposisi editorial bervariasi ukuran — 1 besar + 3 pendamping — dengan info selalu terbaca.
- **Layout** (section bg `cream`, `py-20 sm:py-28`, id `collection` — pertahankan anchor existing):
  - Heading: eyebrow `Koleksi Pilihan` + `display-2`: `Favorit dari` / `meja kami.` + sub: `Beberapa favorit kami dari katalog — tiap ukuran bisa disesuaikan dengan momen dan anggaranmu.`
  - Grid ≥1024 (`grid-cols-12 gap-5`):
    - **Tile A (besar)** — The Little Hamper: `col-span-7`, foto `aspect-[4/5]`, `rounded-[1.75rem]`.
    - Kolom kanan `col-span-5 flex flex-col gap-5`: **B** Blooming Love, **C** Sweetest Surprise, **D** Little Celebration — masing `aspect-[16/10]`, `rounded-[1.25rem]`.
  - Caption **SELALU terlihat** (di bawah foto, bukan hover-dependent): baris 1 = nama produk `font-display text-xl lg:text-2xl text-forest`; baris 2 = `priceLabel` dari products.ts (`text-sm text-muted`) + di ujung kanan indikator bisa dibuka: panah `↗` dalam chip `h-8 w-8 rounded-full border border-line flex items-center justify-center text-forest` (selalu visible; hover → `bg-terracotta` + `text-forest-deep`).
  - Data 4 featured (dari `products.ts`, `featured: true`):

    | Produk | priceLabel | Foto |
    |---|---|---|
    | The Little Hamper | `From Rp295.000` | `/images/products/little-hamper-01.webp` |
    | Blooming Love | `From Rp125.000` | `/images/products/blooming-love-01.webp` |
    | Sweetest Surprise | `From Rp175.000` | `/images/products/sweetest-surprise-01.webp` |
    | Little Celebration | `From Rp165.000` | `/images/products/little-celebration-01.webp` |

  - Footer grid: link teks `Lihat semua koleksi →` (`text-forest underline-offset-4 hover:text-terracotta-deep`) menuju `/#collection`.
- **Image**: path di atas; alt deskriptif per produk (contoh A: `The Little Hamper — keranjang hadiah berisi snack dan bunga, dibungkus kraft`); `loading="lazy"` semua (hero sudah yang `priority`).
- **Interaksi**: seluruh tile = link; hover foto `scale-[1.04]` 700ms; caption tidak berubah saat hover. Stagger `Reveal` 80ms.
- **Responsive**: 375 — semua stack full-width (A dulu, aspect A tetap `4/5`), caption sama. 768 — A `col-span-12 aspect-[3/2]`, 3 pendamping `grid-cols-3` dengan caption ringkas (nama + harga, teks kecil). ≥1024 — seperti desktop.
- **Anti-slop**: variasi ukuran 1-besar + 3-kecil menciptakan ritme editorial (bukan 4 kartu kembar); harga selalu terbaca (aksesibel, tidak hover-gated); indikator buka berupa chip outline kecil — fungsional, bukan dekorasi.

---

## E. OccasionSection — penyelarasan ringan (JANGAN redesain penuh)

- **Tujuan**: memetakan katalog ke momen — struktur existing dipertahankan, hanya copy + konsistensi visual.
- **Copy**: terjemahkan headline/label Inggris → Indonesia. Saran label 6 occasion (sesuai `occasion-*.webp`): `Anniversary` → **Hari Jadi** (atau pertahankan "Anniversary" bila lebih natural), `Birthday` → **Ulang Tahun**, `Graduation` → **Wisuda**, `Just Because` → **Sekadar Sayang**, `Thank You` → **Terima Kasih**, `Wedding` → **Pernikahan**. Headline contoh: `Pilih momennya,` / `kami siapkan sisanya.` (baris 2 italic terracotta).
- **Visual note ringan**: (1) samakan radius kartu ke `rounded-[1.25rem]` + caption tanpa gradient scrim (sesuai 0.2/0.5); (2) pastikan seluruh kartu touch target ≥44px; (3) hover zoom hanya `scale-[1.03]` 700ms; (4) hapus `animate-float`/loop animation bila ada di section ini.
- **Anti-slop**: foto occasion asli + label jujur; tanpa badge "POPULER" karangan.

---

## G. CustomGiftSection — penyelarasan ringan (JANGAN redesain penuh)

- **Tujuan**: menjual layanan custom — anchor `#custom-gifts` WAJIB dipertahankan (target CTA hero "Pesan Custom").
- **Copy**: terjemahkan headline/label Inggris → Indonesia. Arah nada: personal, tanpa janji berlebihan. Contoh headline: `Bukan katalog?` / `Buat dari nol, saja.` — alternatif yang lebih hangat: `Ceritakan idemu,` / `kami rangkaikan.` Sub menyinggung proses jujur: konsultasi singkat via WhatsApp, foto kondisi akhir dikirim sebelum berangkat (fakta yang sudah ada di copy langkah 03 — konsisten, bukan klaim baru).
- **Visual note ringan**: foto proses `/images/process/process-kraft.webp` masih belum terpakai — boleh dipakai di sini bila section kekurangan foto (aspect `4/3`, `rounded-[1.75rem]`). Samakan radius/spacing/hairline dengan sistem global. Hapus animasi loop bila ada.
- **Anti-slop**: CTA custom jujur (mulai dari percakapan, bukan form palsu); tanpa badge harga "mulai dari" yang mengada-ada — harga custom hanya jika memang ada di data.

---

## H. BehindTheCraft — DILEBUR ke Section I

- Komponen `BehindTheCraft.tsx` **dihapus** dari `page.tsx`; seluruh isi (3 langkah + foto proses) dipindahkan ke dalam **StorySection (I)** sebagai sub-blok "Cara kerja kami".
- `id="craft"` dihapus. Grep seluruh `src/` untuk `#craft` / `href="#craft"` dan bersihkan (nav, footer, CTA manapun).
- Copy 3 langkah existing SUDAH Bahasa Indonesia dan jujur — dipertahankan verbatim (lihat I.5).

---

## I. Story — MERGED "Cerita Kami" (BrandIntro + BehindTheCraft → SATU section)

- **Tujuan**: satu tempat untuk kenapa brand ada + bagaimana pesanan dikerjakan — cerita dulu, proses kemudian, dipisah hairline.
- **Layout** (section `id="our-story"`, bg `cream`, `py-20 sm:py-28`, `scroll-mt-24`):
  1. **Blok cerita** (grid 12 kolom): kiri `lg:col-span-7` — eyebrow `Cerita Kami` + `display-2` + paragraf + 3 values; kanan `lg:col-span-5` — komposisi foto offset existing DIPERTAHANKAN (bagus): foto besar `brand-02.webp` `aspect-[4/5] w-[82%] ml-auto rounded-[1.75rem]` + foto overlap `process-wrap-rose.webp` `aspect-square w-[52%] -mt-14 rounded-2xl border-[6px] border-cream` + figcaption mikro. Mat pasif `bg-sage-soft rounded-t-[999px]` di belakang (existing, keep).
  2. **Inline image chip di headline** (device editorial existing — KEEP): chip foto `brand-01.webp` di dalam headline, `h-[0.92em] w-[2.1em] rounded-full`, `aria-hidden`.
  3. **3 values** (border-top hairline `border-forest/10`, grid `sm:grid-cols-3`):
     - `Dirangkai tangan` — `Setiap tangkai diletakkan satu per satu, tidak pernah terburu-buru.`
     - `Batch kecil` — `Kami menerima lebih sedikit order, tapi mengerjakannya lebih baik.`
     - `Dibuat bermakna` — `Tidak ada dua hadiah yang keluar dari studio dengan bentuk yang sama persis.`
  4. **Hairline divider** `border-t border-line mt-14 pt-14`.
  5. **Sub-blok "Cara kerja kami"** (dari BehindTheCraft, alternating zigzag `lg:grid-cols-12`, nomor display besar `text-terracotta/35` `aria-hidden`):
     - Heading kecil: `display-3`: `Tiga langkah kecil,` / `tanpa jalan pintas.` (italic terracotta) + deskripsi: `Begitu pesanan masuk, ini yang terjadi di studio — dari meja kerja sampai tangan penerima.`
     - `01 — Pick the feeling` → judul Indonesia: `Mulai dari momennya` — teks existing: `Mulai dari momennya — kami bantu terjemahkan jadi pilihan bunga, snack, atau kotak yang pas. Tidak perlu tahu istilah florist.` Foto `/images/process/process-wrapping-table.webp` (alt existing).
     - `02 — Wrapped by hand` → `Dirangkai dengan tangan` — teks existing: `Setiap order dirangkai di meja yang sama, oleh tangan yang sama — bukan assembly line. Ribbon diikat dua kali, selalu.` Foto `/images/process/process-florists.webp`.
     - `03 — Sent with a note` → `Berangkat dengan kartu` — teks existing: `Kartu ucapan ditulis tangan, lalu diserahterimakan dengan hati-hati — foto kondisi akhir selalu kami kirim sebelum berangkat.` Foto `/images/process/custom-handover.webp`.
     - Foto langkah: `aspect-[4/3] rounded-[1.75rem]` (langkah 02 tetap `rounded-t-[999px]` sebagai variasi terkontrol — satu-satunya arch kedua yang diizinkan; jika ingin lebih ketat, ubah ke `rounded-[1.75rem]` biasa).
- **Copy headline cerita (final)**: `Hal kecil bisa menyimpan` + chip foto + `perasaan yang besar.` (kata terakhir italic terracotta). Paragraf: `Little Things Studio dimulai dari satu meja dapur, satu gulung kertas kraft, dan satu keyakinan: hadiah tidak harus besar untuk berarti. Karena itu kami sibuk dengan hal-hal kecil — ketegangan pita, arah tangkai, tulisan tangan di kartu — karena di situ rasanya tinggal.`
- **Image**: path di atas; alt: brand-02 → `Florist menata bunga segar di meja kerja studio`; process-wrap-rose → `Tangan membungkus satu rose dengan kertas merah`; figcaption: `rangkaian pertama, tetap favorit kami`.
- **Interaksi**: `Reveal` berurutan; foto `Reveal variant="clip"`; tanpa animasi loop.
- **Responsive**: 375 — semua stack: cerita → foto (brand-02 full-width, overlap 52%) → values 1 kolom → 3 langkah (nomor di atas, foto, copy). 768 — values `grid-cols-3` tetap, langkah tetap stack dengan foto `col-span-7`. ≥1024 — layout zigzag penuh.
- **Anti-slop**: satu section bernafas panjang (cerita → proses) alih-alih dua section pendek yang terasa template; foto proses asli; copy jujur tanpa klaim kapasitas produksi.

---

## J. Social Gallery

- **Tujuan**: potret dunia studio sebagai penutup emosional — asimetris, foto berbicara sendiri.
- **Layout** (section bg `ivory`, `py-20 sm:py-28`):
  - Heading: eyebrow `Momen Studio` + `display-2`: `Sedikit lagi` / `dari dunia kami.` (baris 2 italic terracotta). Sub 1 kalimat: `Potret rangkaian, pengemasan, dan pengiriman — langsung dari studio kami.`
  - **HAPUS**: baris handle Instagram (`siteConfig.instagramHandle` + ikon IG) dan caption `kurasi studio, bukan feed langsung` — IG belum dikonfigurasi, jangan tampilkan handle placeholder.
  - Grid ≥1024 (`grid-cols-12 gap-5`) — asimetri terukur:
    - `social-01.webp`: `col-span-5`, `aspect-[4/5]`, `rounded-[1.25rem]`
    - `social-02.webp`: `col-span-4`, `aspect-[3/4]`, `rounded-[1.25rem]`, `mt-16` (offset vertikal)
    - `social-03.webp`: `col-span-3`, `aspect-square`, `rounded-[1.25rem]`, `mt-32`
    - `social-04.webp`: `col-span-6 col-start-4`, `aspect-[16/10]`, `rounded-[1.25rem]` (baris kedua, sedikit center-shift)
  - **Figure statis**: TANPA link, TANPA badge ikon IG di pojok, TANPA caption overlay, TANPA gradient scrim, TANPA hover zoom (non-interactive). Hanya `Reveal` ringan + `loading="lazy"`.
- **Image**: 4 path di atas; alt: `social-01` → `Rangkaian bouquet siap kirim di meja studio`; `social-02` → `Proses pengemasan hampers di studio`; `social-03` → `Detail pita dan kartu ucapan tulisan tangan`; `social-04` → `Momen serah terima hadiah ke penerima`. (Sesuaikan dengan `imageAlt` yang sudah ada di `src/data/gallery.ts` bila lebih akurat.)
- **Interaksi**: tidak ada (statis). `Reveal` stagger 100ms.
- **Responsive**: 375 — stack full-width dengan variasi aspect tetap (4/5 → 1/1 → 4/5 → 16/10) supaya tidak jadi 4 blok seragam. 768 — `grid-cols-2`: social-01 `col-span-2 aspect-[16/10]`, social-02 + social-03 berdampingan, social-04 `col-span-2 aspect-[16/9]`. ≥1024 — seperti atas.
- **Anti-slop**: offset vertikal (mt-16/mt-32) membuat kolase hidup, bukan strip 4-kotak; tanpa elemen sosial palsu (ikon/handle/link mati).

---

## K. Final CTA + Footer

- **Tujuan**: penutup hangat yang mengarahkan ke katalog & kontak — satu napas, tanpa dekorasi berlebih.
- **Layout** (section bg `butter-soft`, `py-20 sm:py-24`, konten center, max-w konten `max-w-xl`):
  - Simbol ✳ dalam lingkaran `bg-terracotta text-forest-deep` (ganti `text-cream` lama demi kontras), `h-14 w-14`, `aria-hidden` — dipertahankan sebagai satu-satunya ornamen.
  - `display-2`: `Bikin hari seseorang` / `terasa lebih spesial.` (baris 2 italic terracotta)
  - Sub: `Temukan yang sudah jadi di katalog, atau ceritakan idemu — kami bantu wujudkan.` — **warna teks `text-forest`** (bukan `text-muted`; kontras muted di butter-soft borderline).
  - CTA: `Lihat Koleksi` (variant `dark` → `/#collection`) + `Hubungi Kami` (variant `outline` → `/#contact`).
  - Note mikro: `Pesanan dirangkai per batch kecil — semakin cepat pesan, semakin aman untuk tanggal spesialmu.` (`text-sm text-forest/80`)
- **Footer** (catatan ringan — struktur existing dipertahankan): copy seluruhnya Bahasa Indonesia; `border-t border-line` sebagai pemisah; bg `ivory`; link footer touch target ≥44px; tanpa ornamen tambahan; pastikan tidak ada link `#craft`.
- **Interaksi**: `Reveal` berurutan; CTA micro-interaction standar.
- **Responsive**: 375 — CTA full-width bertumpuk; 768/≥1024 — inline center.
- **Anti-slop**: satu blok warna hangat sebagai penutup (bukan gradient banner); copy mengarahkan tanpa urgency palsu ("stok terbatas!" dsb. dilarang).

---

## PENUTUP

### 1. Keyframe / animasi yang DIHAPUS dari `globals.css`

Hapus deklarasi `@theme` berikut beserta `@keyframes`-nya, lalu **grep seluruh `src/`** dan bersihkan setiap pemakaian kelasnya:

| Dihapus | Pemakaian yang ikut dibersihkan |
|---|---|
| `--animate-marquee` + `@keyframes marquee` | HeroSection — seluruh blok occasion marquee di dasar section |
| `--animate-spin-slow` + `@keyframes spin-slow` | HeroSection — rotating badge (seluruh blok SVG textPath + chip ✳) |
| `--animate-float` + `@keyframes float` | grep `animate-float` di semua section (OccasionSection/CustomGiftSection/dll.) — hapus elemen floating-nya, bukan hanya kelasnya |

Yang DIPERTAHANKAN: `--ease-soft`, `Reveal` (scroll reveal), `Reveal variant="clip"` (image reveal), hover zoom foto interaktif, micro-interaction `btn`, `AnimatedHeadline` (Hero saja, sekali jalan + fallback reduced-motion). Tambahkan `@media (prefers-reduced-motion: reduce)` guard pada semua reveal/zoom bila belum ada.

### 2. Token baru

**Tidak ada token warna/spacing/radius baru.** Dua perubahan pada utility EXISTING di `globals.css`:

1. `btn-primary`: `color: var(--color-cream)` → **`color: var(--color-forest-deep)`** (kontras 4.79:1 AA) dan **hapus `box-shadow`**-nya.
2. `eyebrow`: pemakaian `text-terracotta` pada teks diganti `text-forest` (simbol ✳ tetap terracotta, `aria-hidden`).

Semua lainnya memakai token existing persis seperti 0.1.

### 3. Urutan section final di `page.tsx`

```
Header (A)
main#main-content
  1. HeroSection            (B)   — revisi besar
  2. CategoryNavigation     (C)   — KOMPONEN BARU: src/components/sections/CategoryNavigation.tsx
  3. FeaturedGallery        (D)   — id="collection" — revisi komposisi
  4. OccasionSection        (E)   — id="moments" (verifikasi id existing; sinkron dengan nav "Momen")
  5. CustomGiftSection      (G)   — id="custom-gifts"
  6. StorySection           (I)   — id="our-story" — GABUNGAN BrandIntro + BehindTheCraft
  7. SocialGallery          (J)   — revisi layout asimetris
  8. FinalCTA               (K)   — revisi copy
Footer
```

Perubahan file ringkas:
- **Baru**: `src/components/sections/CategoryNavigation.tsx`, `src/components/sections/StorySection.tsx` (hasil merge).
- **Dihapus**: `src/components/sections/BrandIntro.tsx`, `src/components/sections/BehindTheCraft.tsx`.
- **Direvisi**: `HeroSection`, `FeaturedGallery`, `OccasionSection`, `CustomGiftSection`, `SocialGallery`, `FinalCTA`, `Header` (hapus link `#craft`), `Footer` (copy Indonesia), `page.tsx` (urutan + import), `globals.css` (hapus 3 keyframe + koreksi `btn-primary`).
- **Verifikasi anchor**: `#collection`, `#custom-gifts`, `#our-story`, `#moments`, `#contact` harus ada persis satu masing-masing dan cocok dengan nav.

### 4. Copy — prinsip kejujuran

Dilarang mengarang: jumlah pesanan/pengiriman, "standar produksi", testimoni, rating, "paling sering dipesan" tanpa data. Semua copy di spec ini hanya menyatakan proses yang sudah ada di kode existing (dirangkai tangan, batch kecil, kartu tulisan tangan, foto kondisi akhir sebelum kirim).
