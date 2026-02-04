import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import TimelineSection from "@/components/TimelineSection";
import GallerySection from "@/components/GallerySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <IntroSection />
      <TimelineSection />
      <GallerySection />
      <FooterSection />
    </main>
  );
};

export default Index;
