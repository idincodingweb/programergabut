import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import TimelineSection from "@/components/TimelineSection";
import GallerySection from "@/components/GallerySection";
import FooterSection from "@/components/FooterSection";
import MusicPlayer from "@/components/MusicPlayer";
import FallingHearts from "@/components/FallingHearts";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <MusicPlayer />
      <FallingHearts />
      <HeroSection />
      <IntroSection />
      <TimelineSection />
      <GallerySection />
      <FooterSection />
    </main>
  );
};

export default Index;
