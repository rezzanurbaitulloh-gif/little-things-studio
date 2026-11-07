import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedGallery } from "@/components/sections/FeaturedGallery";
import { OccasionSection } from "@/components/sections/OccasionSection";
import { CustomGiftSection } from "@/components/sections/CustomGiftSection";
import { StorySection } from "@/components/sections/StorySection";

export default function Home() {
  return (
    <>
      {/* Skip link — first focusable element for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-none focus:bg-ink-black focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-warm-paper"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <HeroSection />
        <FeaturedGallery />
        <OccasionSection />
        <CustomGiftSection />
        <StorySection />
      </main>

      <Footer />
    </>
  );
}
