import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { CTASection } from "@/components/home/CTASection";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioPreview />
      <CTASection />
    </div>
  );
};

export default Home;
