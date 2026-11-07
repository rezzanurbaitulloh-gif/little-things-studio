import type { Occasion } from "@/types/product";

export const occasions: Occasion[] = [
  {
    id: "birthday",
    name: "Ulang Tahun",
    description: "Hari lahir lebih warna dengan bunga.",
    image: "/images/categories/occasion-birthday.webp",
    imageAlt: "Rangkaian bunga ulang tahun warna pastel dengan hiasan meriah",
  },
  {
    id: "graduation",
    name: "Wisuda",
    description: "Toga, topi wisuda, dan air mata bangga.",
    image: "/images/categories/occasion-graduation.webp",
    imageAlt: "Toga wisuda di sekeliling beraneka bunga di rumput hijau",
  },
  {
    id: "anniversary",
    name: "Hari Jadi",
    description: "Cinta, diulang dan dibungkus kembali.",
    image: "/images/categories/occasion-anniversary.webp",
    imageAlt: "Bouquet rose merah dipasangkan dengan gift box elegan",
  },
  {
    id: "wedding",
    name: "Pernikahan",
    description: "Tangkai lunak untuk sumpah yang tulus.",
    image: "/images/categories/occasion-wedding.webp",
    imageAlt: "Pemegang bouquet halus berisi rose dan hiasan hijau",
  },
  {
    id: "thank-you",
    name: "Terima Kasih",
    description: "Keterima kasian, diikat pita.",
    image: "/images/categories/occasion-thankyou.webp",
    imageAlt: "Rangkaian tulip warna-warni dengan tag hadiah kosong",
  },
  {
    id: "just-because",
    name: "Sekadar Sayang",
    description: "Tanpa momen pun boleh. Sulit.",
    image: "/images/categories/occasion-justbecause.webp",
    imageAlt: "Bunga kering warna muda di latar belakang pastel",
  },
];
