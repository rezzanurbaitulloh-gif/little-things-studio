# LITTLE THINGS STUDIO
## Product Requirement Document, UI/UX Blueprint & Technical Blueprint

**Project type:** Static interactive business website  
**Project purpose:** Portfolio project for a web development service targeting local UMKM  
**Primary niche:** Bouquet, souvenir, hampers, handmade gifts, and custom gifts  
**Art direction:** Playful Luxury × Editorial Gift Boutique  
**Tagline:** A little gift, a lot of meaning.

---

# PART 1 — PRODUCT REQUIREMENT DOCUMENT (PRD)

## 1. Project Overview

Little Things Studio adalah website konsep untuk sebuah gift boutique yang menjual berbagai produk hadiah, mulai dari flower bouquet, snack bouquet, hampers, gift box, souvenir, hingga custom gifts.

Website dirancang untuk menghadirkan pengalaman menjelajahi koleksi produk seperti sebuah galeri visual editorial, bukan katalog e-commerce konvensional.

Pengunjung dapat melihat foto produk, membuka detail dengan mengklik gambar, membaca deskripsi, melihat harga, memilih variasi, dan melakukan pemesanan melalui WhatsApp.

Website ini merupakan concept project untuk portofolio, bukan website toko yang benar-benar beroperasi.

## 2. Project Goals

Tujuan utama:
- Membangun demo website gift boutique dengan identitas visual yang kuat.
- Menampilkan kemampuan desain UI/UX dan frontend development.
- Menunjukkan bagaimana UMKM dapat memiliki website profesional.
- Membuat pengalaman eksplorasi produk yang menarik.
- Mempermudah calon pembeli menghubungi penjual.

Tujuan sekunder:
- Menjadi bahan penawaran jasa website ke UMKM lokal.
- Menjadi fondasi template yang dapat dikembangkan untuk client lain.
- Menjadi studi kasus portofolio yang bisa dipresentasikan secara profesional.

## 3. Target Audience

Primary audience:
- Pemilik toko buket rumahan.
- Pemilik toko souvenir.
- UMKM hampers dan gift box.
- Pengrajin hadiah custom.
- Toko hadiah wisuda dan ulang tahun.

Website end-user:
- Pelanggan yang mencari hadiah.
- Orang yang ingin memberikan kejutan.
- Pelanggan yang mencari hadiah wisuda, ulang tahun, anniversary, wedding, dan acara khusus.

## 4. Brand Personality

Karakter brand:
- Warm
- Playful
- Thoughtful
- Creative
- Elegant
- Handmade
- Approachable

Website tidak boleh terasa seperti:
- Marketplace generik.
- Template toko online murah.
- Website corporate yang terlalu formal.
- Website luxury yang dingin dan sulit didekati.
- Desain AI-generated yang hanya mengandalkan gradient, glassmorphism, dan rounded cards.

## 5. Core Design Concept

**Playful Luxury × Editorial Image Gallery**

Inspirasi:
- Native Poppy: keberanian warna, komposisi kreatif, identitas visual ekspresif.
- Ode à la Rose: fotografi produk, elegansi, presentasi bunga, dan kesan premium.

Keduanya digunakan sebagai referensi arah visual, bukan untuk menyalin layout, aset, atau identitas brand.

Hasil akhir harus mempunyai karakter Little Things Studio sendiri.

## 6. Functional Requirements

### FR-01 — Homepage
- Menampilkan hero visual.
- Menampilkan pengenalan brand.
- Menampilkan koleksi produk pilihan.
- Menampilkan kategori produk.
- Menampilkan occasion collection.
- Menampilkan custom gift section.
- Menampilkan proses pembuatan atau behind the craft.
- Menampilkan social gallery.
- Menampilkan informasi kontak dan lokasi demo.

### FR-02 — Interactive Product Gallery
- Produk ditampilkan menggunakan foto sebagai elemen utama.
- Tidak menampilkan harga secara dominan di tampilan galeri.
- Layout menggunakan kombinasi ukuran gambar yang bervariasi.
- Nama produk dapat muncul melalui hover pada desktop.
- Pada mobile, nama atau indikator interaksi harus tetap tersedia.
- Setiap gambar dapat diklik untuk membuka detail produk.
- Produk memiliki kategori dan identitas unik.

### FR-03 — Product Detail
Saat produk diklik, tampilkan modal editorial yang berisi:
- Foto produk utama.
- Galeri foto tambahan.
- Nama produk.
- Kode produk.
- Deskripsi.
- Harga.
- Pilihan ukuran.
- Pilihan warna jika tersedia.
- Informasi variasi.
- Ketersediaan demo.
- Informasi custom request.
- Tombol WhatsApp.
- Link Instagram apabila tersedia.

Modal harus mendukung:
- Tombol close.
- Klik backdrop untuk menutup.
- Escape untuk menutup.
- Navigasi gambar.
- Scroll internal jika konten terlalu panjang.
- Keyboard navigation.
- Responsive mobile layout.

### FR-04 — Product Category
Kategori:
1. Flower Bouquet
2. Snack Bouquet
3. Gift Hampers
4. Gift Box
5. Graduation Gifts
6. Souvenirs
7. Custom Gifts

Pengunjung dapat memilih kategori untuk memfilter galeri.

### FR-05 — Occasion Collection

Kategori berdasarkan momen:
- Birthday.
- Graduation.
- Anniversary.
- Wedding.
- Thank You.
- Just Because.

Occasion collection berfungsi sebagai jalur eksplorasi alternatif berdasarkan kebutuhan pengunjung.

### FR-06 — Product Customization

Untuk produk yang mendukung custom:
- Ukuran.
- Warna.
- Kartu ucapan.
- Catatan tambahan.

Pilihan yang tersedia harus berdasarkan konfigurasi produk, bukan semua produk dipaksa memiliki variasi yang sama.

### FR-07 — WhatsApp Ordering

Ketika tombol pemesanan ditekan, buka WhatsApp menggunakan URL wa.me dengan pesan otomatis.

Contoh pesan:

Halo Little Things Studio!

Saya tertarik memesan produk berikut:

Nama produk: Blooming Love
Kode produk: FL-001
Ukuran: Medium
Warna: Pink
Kartu ucapan: Ya
Catatan: Mohon informasi ketersediaan produk.

Apakah produk ini masih tersedia?

Nomor WhatsApp diambil dari konfigurasi website.

### FR-08 — Instagram

- Tombol Instagram mengarah ke profil resmi yang dikonfigurasi.
- Social gallery dapat menampilkan foto pilihan.
- Tidak perlu Instagram API.
- Jangan menampilkan feed palsu seolah-olah terhubung langsung ke Instagram.

### FR-09 — Responsive Design

Website wajib berfungsi pada:
- Mobile 360px.
- Mobile 390px.
- Tablet 768px.
- Laptop 1366px.
- Desktop 1440px.

### FR-10 — Static Content Management

Seluruh produk dan informasi website menggunakan file konfigurasi lokal.

Tidak diperlukan:
- Database.
- Authentication.
- Backend.
- Admin dashboard.
- Payment gateway.
- Checkout system.
- Order management system.

## 7. Non-Functional Requirements

Performance:
- Gambar dioptimalkan.
- Lazy loading untuk gambar non-hero.
- Hindari dependency berlebihan.
- Hindari animasi yang membebani perangkat.
- Jangan memuat semua foto resolusi besar sekaligus.

Accessibility:
- Semantic HTML.
- Alt text.
- Focus state.
- Keyboard navigation.
- Modal focus management.
- Reduced motion support.
- Kontras warna memadai.

SEO:
- Page title.
- Meta description.
- Open Graph.
- Favicon.
- Semantic headings.
- Sitemap dan robots jika sesuai framework.
- Metadata produk yang relevan.

## 8. Out of Scope

Tidak termasuk:
- Pembayaran online.
- Login pelanggan.
- Keranjang belanja persisten.
- Dashboard admin.
- Database produk.
- Manajemen stok real-time.
- Integrasi Instagram API.
- Tracking pengiriman.
- Sistem transaksi otomatis.

## 9. Success Criteria

Proyek dianggap selesai jika:
- Seluruh halaman berfungsi.
- Semua foto produk memiliki fungsi interaktif.
- Detail produk tampil sesuai data yang dipilih.
- Filter kategori bekerja.
- Variasi produk dapat dipilih.
- WhatsApp menghasilkan pesan sesuai produk dan variasi.
- Link Instagram bekerja jika dikonfigurasi.
- Tidak ada tombol palsu.
- Tidak ada gambar rusak.
- Tidak ada placeholder.
- Tidak ada overflow horizontal pada mobile.
- Layout lolos audit visual desktop dan mobile.
- Build production berhasil.

---

# PART 2 — UI/UX BLUEPRINT

## 1. Global Design System

### Color Palette

Primary background:
- Ivory: #F4EFE6

Primary accent:
- Terracotta: #D77C69

Secondary:
- Sage: #A9B69B
- Butter: #E8C98E

Dark:
- Forest: #343A32

Supporting:
- Soft white: #FFFCF7
- Muted text: #77746E
- Border: #E4DED3

Penggunaan:
- Ivory sebagai background dominan.
- Forest untuk teks utama.
- Terracotta untuk CTA dan aksen.
- Sage dan Butter sebagai elemen dekoratif.
- Soft white untuk panel dan modal.

Jangan menggunakan semua warna dengan intensitas sama. Terracotta dan Forest menjadi identitas yang paling kuat.

### Typography

Display:
- DM Serif Display.

Alternative:
- Cormorant Garamond.

Body:
- DM Sans.

Penggunaan:
- Headline menggunakan display serif.
- Body menggunakan sans-serif.
- Label menggunakan uppercase dengan letter spacing.
- Harga menggunakan typography yang mudah dibaca.

### Layout Rules

- Editorial grid.
- Asymmetric composition.
- Whitespace yang cukup.
- Foto menjadi pusat perhatian.
- Hindari semua section memakai layout identik.
- Hindari rounded card di setiap elemen.
- Gunakan border tipis seperlunya.
- Gunakan radius secara selektif.
- Jangan menjadikan semua section sebagai kumpulan kartu.

## 2. Global Navigation

Desktop:
- Logo di kiri.
- Navigation di tengah atau kanan.
- Links: Home, Collection, Our Story, Contact.
- Instagram icon.
- WhatsApp CTA.

Navigation harus minimalis dan tidak mendominasi hero.

Mobile:
- Logo.
- Menu toggle.
- WhatsApp CTA dapat ditempatkan pada menu atau floating contact yang tidak mengganggu.

Header dapat menggunakan sticky behavior setelah melewati hero, dengan perubahan background yang halus.

## 3. Homepage Blueprint

### SECTION 01 — HERO

Tujuan:
Membangun kesan pertama dan memperkenalkan karakter brand.

Layout:
- Editorial composition.
- Headline besar.
- Foto utama produk.
- Supporting image kecil sebagai elemen visual tambahan.
- Eyebrow text.
- CTA Explore Collection.
- CTA Contact Us.

Headline:

"A little gift,
a lot of meaning."

Supporting text:

"Thoughtfully made gifts for every little and big moment."

Visual:
- Foto bouquet atau gift arrangement berkualitas tinggi.
- Foto tidak boleh sekadar ditempel sebagai background.
- Komposisi harus terasa seperti editorial photography.
- Tambahkan dekorasi grafis tipis yang mendukung identitas brand.

Animation:
- Headline muncul dengan stagger.
- Hero image reveal menggunakan clip-path.
- Supporting image masuk dengan delay kecil.
- CTA menggunakan hover transition.

### SECTION 02 — BRAND INTRODUCTION

Tujuan:
Membangun hubungan emosional dengan pengunjung.

Headline:

"Small things can hold the biggest feelings."

Konten:
Deskripsi singkat tentang hadiah yang dibuat dengan perhatian terhadap detail.

Layout:
- Heading besar.
- Paragraf pendek.
- Foto proses wrapping atau detail produk.
- Komposisi editorial, bukan dua kolom generik.

Animation:
- Text reveal.
- Image fade/clip reveal.

### SECTION 03 — FEATURED COLLECTION

Tujuan:
Memperkenalkan produk utama melalui visual.

Headline:

"Things made to make you smile."

Subtitle:

"A little collection of thoughtful surprises."

Layout:
- Asymmetric image gallery.
- Kombinasi foto landscape, portrait, dan square.
- Setiap item memiliki product identity.
- Foto menjadi fokus.
- Nama dapat muncul pada hover desktop.
- Mobile menyediakan label atau indikator yang selalu terlihat.

Produk demo:
1. Blooming Love.
2. Little Celebration.
3. Happy Graduation.
4. Tiny Memories.
5. Golden Hour.
6. Sweetest Surprise.

INTERACTION:

Desktop:
- Hover image: zoom 1.03.
- Overlay tipis.
- Product name muncul.
- Indikator "View Product".
- Cursor normal atau custom indicator yang tidak mengganggu aksesibilitas.

Mobile:
- Tidak mengandalkan hover.
- Tampilkan nama produk atau label kecil.
- Seluruh gambar memiliki area klik yang jelas.

Click:
- Membuka Product Detail Modal.

### SECTION 04 — PRODUCT DETAIL MODAL

Ini merupakan salah satu fitur terpenting dalam website.

Desktop:
- Modal lebar dengan komposisi dua kolom.
- Kiri: foto utama dan thumbnail.
- Kanan: nama, deskripsi, harga, variasi, dan CTA.
- Tombol close di sudut kanan atas.

Mobile:
- Modal fullscreen atau hampir fullscreen.
- Foto di bagian atas.
- Detail di bawah.
- CTA dapat sticky di area bawah selama tidak menutupi konten.
- Scroll harus nyaman.

Detail layout:

01. Product image gallery.
02. Product number.
03. Product title.
04. Product description.
05. Product price.
06. Size selection.
07. Color selection jika relevan.
08. Gift message option.
09. Additional note.
10. WhatsApp CTA.
11. Instagram link.

Animation:
- Backdrop fade.
- Modal scale 0.97 ke 1.
- Image transition.
- Close transition.

Accessibility:
- Trap focus ketika modal terbuka.
- Restore focus setelah ditutup.
- Escape untuk menutup.
- Tombol mempunyai aria-label.
- Body scroll terkunci ketika modal terbuka.

### SECTION 05 — SHOP BY OCCASION

Headline:

"For every little and big moment."

Kategori:
- Birthday.
- Graduation.
- Anniversary.
- Wedding.
- Thank You.
- Just Because.

Layout:
- Visual category tiles.
- Setiap kategori memakai foto berbeda.
- Jangan menggunakan icon generik sebagai pengganti fotografi.
- Klik kategori membawa pengunjung ke galeri yang sudah difilter.

### SECTION 06 — CUSTOM GIFT

Headline:

"Your idea. Our little magic."

Supporting:

"Have something special in mind? Let's create it together."

Visual:
- Custom gift box.
- Ribbon wrapping.
- Greeting card.
- Detail tangan dalam proses pembuatan.

CTA:
"Create Your Custom Gift"

CTA membuka WhatsApp dengan pesan custom inquiry.

### SECTION 07 — BEHIND THE CRAFT

Tujuan:
Menunjukkan bahwa produk dibuat dengan perhatian dan detail.

Konten:
- Proses wrapping.
- Pemilihan bunga.
- Penataan hampers.
- Greeting card.
- Detail packaging.

Layout:
- Editorial collage.
- Foto dengan ukuran bervariasi.
- Sedikit teks.
- Tidak perlu membuat galeri terlalu panjang.

### SECTION 08 — SOCIAL GALLERY

Headline:

"A little more from our world."

Konten:
- Foto produk.
- Packaging.
- Detail pesanan.
- Behind the scenes.

Setiap foto dapat diarahkan ke Instagram jika URL kontennya tersedia.

Jangan mengklaim galeri sebagai live Instagram feed.

### SECTION 09 — FINAL CTA

Headline:

"Make someone's day a little more special."

Supporting:
"Find something thoughtful, or let us create one just for you."

CTA:
- Explore Collection.
- Chat with Us.

### SECTION 10 — FOOTER

Isi:
- Logo.
- Short brand statement.
- Navigation.
- Instagram.
- WhatsApp.
- Business hours.
- Location demo.
- Copyright.

Pastikan informasi demo tidak disajikan sebagai alamat bisnis sungguhan.

---

# PART 3 — INTERACTION & ANIMATION SPECIFICATION

## 1. Animation Philosophy

Motion harus memberikan karakter, bukan menjadi dekorasi berlebihan.

Gunakan:
- CSS transitions.
- IntersectionObserver untuk scroll reveal jika diperlukan.
- Transform dan opacity.
- Clip-path secara selektif.
- Native smooth scrolling.
- CSS keyframes untuk animasi kecil.

Gunakan library animasi hanya jika benar-benar memberikan manfaat dan sesuai kondisi project.

## 2. Motion Tokens

Fast:
120–180ms.

Normal:
220–350ms.

Slow:
450–700ms.

Easing:
- ease-out.
- cubic-bezier(0.22, 1, 0.36, 1).

## 3. Animation Mapping

Hero:
- Text stagger.
- Image clip reveal.
- CTA fade.

Gallery:
- Image reveal.
- Hover zoom.
- Overlay fade.
- Label transition.

Modal:
- Backdrop fade.
- Scale entrance.
- Image transition.

Scroll:
- Section reveal.
- Gentle parallax pada elemen tertentu.

Navigation:
- Smooth state transition.
- Mobile menu slide/fade.

## 4. Performance Rules

- Hindari animasi layout berat.
- Utamakan transform dan opacity.
- Batasi parallax.
- Jangan menggunakan cursor custom yang menghambat pengguna.
- Implementasikan prefers-reduced-motion.
- Jangan menjalankan animasi tanpa henti hanya untuk dekorasi.

---

# PART 4 — TECHNICAL BLUEPRINT

## 1. Recommended Stack

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- CSS transitions.
- Local static data.
- Vercel deployment.

Sebelum memasang dependency, audit repository dan package yang sudah tersedia.

Jangan menambahkan library besar jika fitur dapat dibuat dengan CSS dan React biasa.

## 2. Suggested Folder Structure

src/
  app/
    layout.tsx
    page.tsx
    globals.css
    not-found.tsx

  components/
    layout/
      Header.tsx
      Footer.tsx
      MobileMenu.tsx

    sections/
      HeroSection.tsx
      BrandIntro.tsx
      FeaturedGallery.tsx
      OccasionSection.tsx
      CustomGiftSection.tsx
      BehindTheCraft.tsx
      SocialGallery.tsx
      FinalCTA.tsx

    products/
      ProductGallery.tsx
      ProductCard.tsx
      ProductModal.tsx
      ProductImageGallery.tsx
      ProductOptions.tsx

    ui/
      Button.tsx
      SectionHeading.tsx
      Container.tsx
      Reveal.tsx

  data/
    products.ts
    categories.ts
    occasions.ts
    gallery.ts

  config/
    site.ts

  lib/
    whatsapp.ts
    product-utils.ts

  types/
    product.ts

public/
  images/
    hero/
    products/
    categories/
    process/
    social/
    brand/

Struktur boleh disesuaikan jika repository sudah memiliki konvensi yang lebih baik.

## 3. Product Data Model

Setiap produk harus memiliki struktur konsisten.

Contoh:

{
  id: "blooming-love",
  code: "FL-001",
  name: "Blooming Love",
  category: "flower-bouquet",
  occasions: ["birthday", "anniversary"],
  description: "A thoughtful arrangement of beautiful blooms.",
  price: 185000,
  priceLabel: "From Rp185.000",
  images: [
    "/images/products/blooming-love-01.webp",
    "/images/products/blooming-love-02.webp"
  ],
  sizes: [
    { label: "Small", price: 125000 },
    { label: "Medium", price: 185000 },
    { label: "Large", price: 250000 }
  ],
  colors: ["Pink", "Cream", "Peach"],
  supportsGiftMessage: true,
  supportsCustomNote: true,
  availability: "available",
  instagramUrl: null
}

Tipe data harus ditentukan secara eksplisit menggunakan TypeScript.

Harga yang ditampilkan harus mengikuti variasi yang dipilih.

Produk tanpa variasi tidak boleh menampilkan pilihan yang tidak relevan.

## 4. Site Configuration

Semua informasi bisnis harus terpusat.

Contoh:

export const siteConfig = {
  name: "Little Things Studio",
  tagline: "A little gift, a lot of meaning.",
  whatsappNumber: "REPLACE_WITH_VALID_NUMBER",
  instagramUrl: "REPLACE_WITH_INSTAGRAM_URL",
  locationLabel: "Demo Location",
  businessHours: "Demo Business Hours"
};

Gunakan placeholder konfigurasi yang jelas.

Jangan membuat nomor WhatsApp atau akun Instagram palsu.

Jika konfigurasi belum diisi, tombol terkait harus dinonaktifkan secara informatif atau diarahkan ke contact fallback yang valid.

## 5. WhatsApp Utility

Buat helper untuk membangun pesan otomatis.

Format nomor:
- Country code Indonesia: 62.
- Hilangkan spasi, tanda tambah, dan karakter yang tidak diperlukan.
- Jangan mengubah nomor yang sudah memiliki country code secara keliru.

Encode pesan menggunakan encodeURIComponent.

Gunakan URL:
https://wa.me/NUMBER?text=ENCODED_MESSAGE

Pesan harus memuat:
- Nama toko.
- Nama produk.
- Kode produk.
- Variasi.
- Harga jika tersedia.
- Gift message jika diisi.
- Catatan tambahan.

Validasi nomor sebelum membuat link.

## 6. Static Behavior

Semua produk dibaca dari file data.

Filter dilakukan di client-side.

Modal menggunakan state React.

Tidak ada request database.

Tidak ada endpoint pemesanan.

Tidak ada simulasi transaksi yang mengaku berhasil.

## 7. Image Strategy

Prioritas utama: aset foto berkualitas tinggi dan konsisten.

Target minimal:
- 2 hero photos.
- 8 product photosets.
- 6 category images.
- 4 process photos.
- 4 social gallery photos.
- 2 brand detail images.

Setiap photoset idealnya memiliki:
- Main product photo.
- Detail/close-up.
- Alternative angle.

Sumber aset:
1. Foto original yang dibuat khusus untuk demo.
2. Foto dari image generation jika tersedia.
3. Foto stock berlisensi dan dapat digunakan.

Jangan:
- Mengambil foto brand lain dan mengaku sebagai produk sendiri.
- Menggunakan URL gambar acak yang belum diverifikasi.
- Menggunakan satu gambar berulang untuk semua produk.
- Menggunakan placeholder kosong.
- Menggunakan emoji sebagai pengganti foto.

Optimasi:
- WebP atau AVIF jika didukung.
- Responsive image sizing.
- Lazy loading.
- Priority hanya untuk hero image.
- Descriptive filenames.
- Alt text yang relevan.

---

# PART 5 — IMPLEMENTATION ROADMAP

Pengerjaan dilakukan bertahap. Jangan melompat ke tahap berikutnya sebelum tahap saat ini lolos audit.

## PHASE 0 — Repository Audit

- Periksa struktur project.
- Periksa framework.
- Periksa dependency.
- Periksa konfigurasi build.
- Periksa aset yang tersedia.
- Identifikasi fitur atau kode lama.
- Tentukan strategi implementasi.

Deliverable:
Repository audit report.

Acceptance:
Tidak ada perubahan destruktif tanpa alasan yang jelas.

## PHASE 1 — Brand & Design Foundation

- Implementasikan design tokens.
- Setup typography.
- Setup color system.
- Setup global layout.
- Implementasikan navigation dan footer.
- Siapkan asset library.

Deliverable:
Design foundation yang konsisten.

Acceptance:
Typography, warna, spacing, dan layout sudah sesuai art direction.

Lakukan audit dan push ke GitHub.

## PHASE 2 — Homepage

- Hero.
- Brand introduction.
- Featured gallery.
- Occasion section.
- Custom gift.
- Behind the craft.
- Social gallery.
- Final CTA.
- Footer.

Deliverable:
Homepage lengkap.

Acceptance:
Seluruh section memiliki komposisi berbeda dan tidak terasa seperti template berulang.

Audit dan push ke GitHub.

## PHASE 3 — Product Interaction

- Product data model.
- Gallery filtering.
- Product detail modal.
- Image navigation.
- Product variations.
- Custom message.
- WhatsApp ordering.
- Instagram links.

Deliverable:
Website interaktif.

Acceptance:
Setiap produk menampilkan data yang tepat dan pemesanan menghasilkan pesan WhatsApp yang benar.

Audit dan push ke GitHub.

## PHASE 4 — Motion & Responsive

- Scroll reveal.
- Hover transitions.
- Modal transitions.
- Mobile navigation.
- Mobile gallery.
- Responsive product modal.
- Reduced motion support.

Deliverable:
Responsive dan motion system.

Acceptance:
Tidak ada overflow, interaksi gagal, atau elemen tertutup pada mobile.

Audit dan push ke GitHub.

## PHASE 5 — Final QA & Deployment

- Test semua link.
- Test semua produk.
- Test seluruh kategori.
- Test variasi.
- Test WhatsApp.
- Test Instagram.
- Test keyboard navigation.
- Test responsive.
- Test production build.
- Deploy ke Vercel.

Visual audit wajib:
- 375px.
- 768px.
- 1366px.
- 1440px.

Deliverable:
Live portfolio-ready website.

Acceptance:
Tidak ada error build, gambar rusak, tombol mati, atau tampilan yang belum selesai.

Audit akhir dan push ke GitHub.

---

# PART 6 — MASTER PROMPT FOR OPENCODE

Kamu bertindak sebagai Senior Product Designer, Art Director, Senior Frontend Engineer, dan UI/UX Specialist.

Tugasmu adalah mengimplementasikan website Little Things Studio berdasarkan seluruh PRD dan blueprint di atas.

Jangan hanya menjelaskan rencana. Audit repository, buat keputusan teknis, implementasikan, jalankan project, uji, dan perbaiki sampai hasilnya siap dipresentasikan sebagai portfolio website profesional.

## A. PRINCIPLES

1. Design quality harus menjadi prioritas utama.
2. Jangan membuat desain generik AI.
3. Jangan menyalin mentah website referensi.
4. Jangan membuat layout marketplace konvensional.
5. Jangan mengubah seluruh produk menjadi kartu rounded.
6. Jangan menggunakan gradient ungu/biru generik.
7. Jangan menggunakan glassmorphism secara berlebihan.
8. Jangan menggunakan decorative blobs tanpa fungsi.
9. Jangan mengandalkan animasi fade-up yang sama di setiap section.
10. Jangan menggunakan placeholder gambar.
11. Jangan mengarang data bisnis nyata.
12. Jangan membuat fitur palsu.
13. Jangan menghapus kode yang sudah ada tanpa audit dan alasan.

## B. VISUAL DIRECTION

Gunakan arah:

PLAYFUL LUXURY × EDITORIAL GIFT BOUTIQUE.

Gabungkan:
- Native Poppy-inspired expressive art direction.
- Ode à la Rose-inspired refined product presentation.

Buat identitas sendiri.

Visual harus:
- Editorial.
- Warm.
- Expressive.
- Thoughtful.
- Premium tetapi approachable.
- Image-driven.
- Memiliki whitespace yang terencana.

Foto produk adalah elemen utama desain.

## C. DESIGN EXECUTION

Setiap section harus memiliki komposisi yang dipikirkan.

Jangan membuat semua section memakai:
- Heading kiri.
- Gambar kanan.
- Grid empat kartu.
- Background sama.
- Spacing identik.

Gunakan variasi:
- Asymmetric grid.
- Full-width photography.
- Editorial split.
- Overlapping composition jika relevan.
- Image collage.
- Large typography.
- Alternating visual rhythm.

Tetap jaga konsistensi identitas.

## D. IMAGE QUALITY

Jangan mengimplementasikan homepage dengan foto yang tidak relevan.

Buat asset inventory sebelum implementasi.

Pastikan:
- Setiap produk punya foto yang sesuai.
- Hero punya visual kuat.
- Foto kategori berbeda.
- Foto proses sesuai konten.
- Gambar memiliki crop yang tepat.
- Tidak ada gambar yang rusak.

Jika menggunakan image generation atau sumber gambar eksternal, pastikan file tersedia secara lokal atau URL telah diverifikasi dan penggunaannya sesuai lisensi.

Utamakan aset lokal yang sudah dioptimalkan.

## E. PRODUCT GALLERY

Ini adalah fitur pembeda utama.

Implementasikan image-first gallery:
- Asymmetric composition.
- Variable image sizes.
- Minimal visible product text.
- Hover product reveal.
- Clear clickable indication.
- Responsive mobile arrangement.

Setiap item harus benar-benar interaktif.

Klik gambar membuka product modal yang sesuai dengan data produk tersebut.

## F. PRODUCT MODAL

Buat modal yang terasa seperti editorial product presentation.

Desktop:
- Large two-column composition.
- Product gallery di satu sisi.
- Product information di sisi lain.

Mobile:
- Fullscreen atau hampir fullscreen.
- Image di atas.
- Product detail di bawah.
- CTA mudah dijangkau.

Implementasikan:
- Image navigation.
- Product description.
- Price.
- Variant selection.
- Gift message.
- Custom notes.
- WhatsApp ordering.
- Instagram link.

Pastikan state dan data setiap produk tidak tertukar.

## G. MOTION

Motion harus terasa halus dan intentional.

Gunakan:
- Clip reveal.
- Staggered text.
- Subtle image zoom.
- Smooth modal transitions.
- Section reveal.
- Minimal parallax.

Hindari motion yang membebani perangkat.

Hormati prefers-reduced-motion.

## H. TECHNICAL QUALITY

Gunakan:
- Next.js.
- TypeScript.
- Tailwind CSS.
- Static product data.
- Local configuration.
- Vercel-compatible deployment.

Sesuaikan dengan kondisi repository setelah audit.

Jangan memasang dependency berlebihan.

Jangan membuat backend atau database.

## I. IMPLEMENTATION WORKFLOW

Ikuti urutan:

1. Repository audit.
2. Brand/design foundation.
3. Homepage.
4. Product gallery dan modal.
5. WhatsApp integration.
6. Motion.
7. Responsive.
8. QA.
9. Deployment.

Setiap fase harus memiliki:
- Checklist pekerjaan.
- Implementasi.
- Test.
- Visual review.
- Acceptance audit.
- GitHub commit dan push jika remote tersedia serta sudah dikonfigurasi.

Jangan lanjut ke fase berikutnya jika acceptance criteria fase saat ini belum terpenuhi.

Jangan hanya membuat dokumentasi lalu berhenti. Implementasikan pekerjaan sesuai tahap.

## J. VISUAL QA

Jalankan website dan lakukan screenshot review.

Viewport:
- 375px.
- 768px.
- 1366px.
- 1440px.

Audit:
- Visual hierarchy.
- Typography.
- Whitespace.
- Image crop.
- Section rhythm.
- Navigation.
- Gallery.
- Modal.
- CTA.
- Mobile behavior.

Perbaiki masalah yang ditemukan.

Jika screenshot/browser tool tidak tersedia, jangan mengaku telah melakukan visual testing. Lakukan pemeriksaan alternatif dan jelaskan keterbatasannya.

## K. FINAL ACCEPTANCE

Website hanya dianggap selesai apabila:

- Memiliki identitas visual yang kuat.
- Seluruh section berfungsi.
- Galeri produk interaktif.
- Detail produk akurat.
- Filter bekerja.
- Variasi produk bekerja.
- WhatsApp ordering bekerja dengan konfigurasi valid.
- Responsive.
- Tidak ada broken images.
- Tidak ada dead buttons.
- Tidak ada console errors yang belum ditangani.
- Production build berhasil.
- Siap digunakan sebagai portfolio demonstration.

## L. FINAL REPORT

Setelah selesai, laporkan:

1. Fitur yang sudah dibuat.
2. Struktur project.
3. Design system.
4. Asset yang digunakan.
5. Hasil responsive testing.
6. Hasil functional testing.
7. Build status.
8. Deployment status.
9. Git commit.
10. Hal yang masih membutuhkan konfigurasi manual.

Mulai dengan PHASE 0 — REPOSITORY AUDIT.

Jangan langsung mengerjakan semuanya tanpa audit terlebih dahulu. 
