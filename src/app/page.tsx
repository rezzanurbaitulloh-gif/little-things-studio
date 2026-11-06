import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandIntro } from "@/components/sections/BrandIntro";
import { FeaturedGallery } from "@/components/sections/FeaturedGallery";
import { OccasionSection } from "@/components/sections/OccasionSection";
import { CustomGiftSection } from "@/components/sections/CustomGiftSection";
import { BehindTheCraft } from "@/components/sections/BehindTheCraft";
import { SocialGallery } from "@/components/sections/SocialGallery";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      {/* Skip link — first focusable element for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-cream focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <HeroSection />
        <BrandIntro />
        <FeaturedGallery />
        <OccasionSection />
        <CustomGiftSection />
        <BehindTheCraft />
        <SocialGallery />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
