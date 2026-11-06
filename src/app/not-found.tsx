import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/icons";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-ivory px-5 text-center">
      <LogoMark className="h-12 w-12 text-terracotta" />
      <p className="eyebrow mt-8 text-terracotta">404 — Not Found</p>
      <h1 className="display-2 mt-4 max-w-md text-balance text-forest">
        This little thing <em className="text-terracotta">went missing.</em>
      </h1>
      <p className="mt-4 max-w-sm leading-relaxed text-muted">
        Halaman yang kamu cari tidak ada atau sudah pindah. Yuk kembali ke
        koleksi kami.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3.5">
        <Button href="/" variant="dark">
          Back to Home
        </Button>
        <Button href="/#collection" variant="outline">
          Browse the Collection
        </Button>
      </div>
      <p className="mt-10 text-xs text-muted">
        <Link href="/" className="underline underline-offset-2 hover:text-forest">
          little things studio
        </Link>{" "}
        — concept project for portfolio purposes.
      </p>
    </main>
  );
}
