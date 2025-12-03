import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button } from "@/components/ui/button";
import { InfiniteWorkShowcase } from "@/components/ui/infinite-work-showcase";

const BrandingPortfolio = () => {
  const cards = brandingData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-8">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>
      </div>

      <div className="w-full py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-xl md:text-5xl font-bold text-foreground font-heading mb-4">
            Branding Portfolio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Building powerful brands that stand out and connect
          </p>
        </motion.div>
        <Carousel items={cards} hideArrows={true} />
      </div>

      {/* CTA Section */}
      <section className="cinematic-section">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Want to see your project here?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's create something extraordinary together
            </p>
            <div className="flex justify-center">
              <Link to="/quote">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="div"
                  className="bg-accent hover:bg-accent/90 text-white font-medium text-lg px-12 py-6 glow-effect"
                >
                  <Button className="bg-transparent hover:bg-transparent text-white border-0 font-medium text-lg px-0 py-0 h-auto">
                    Start Your Project
                  </Button>
                </HoverBorderGradient>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const WorkShowcase = ({ works }: { works: Array<{ image: string; title: string; description?: string }> }) => {
  return (
    <div className="py-4">
      <InfiniteWorkShowcase items={works} direction="left" speed="slow" />
    </div>
  );
};

const brandingData = [
  {
    category: "Branding",
    title: "Logos & Branding",
    src: "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=1200&h=800&fit=crop&auto=format",
    content: (
      <WorkShowcase
        works={[
          { image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=1200&fit=crop", title: "Modern Logo", description: "Clean brand mark" },
          { image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=1200&fit=crop", title: "Brand Identity", description: "Complete system" },
          { image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=1200&fit=crop", title: "Visual Identity", description: "Color & typography" },
          { image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=800&h=1200&fit=crop", title: "Logo Variations", description: "Versatile designs" },
          { image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=1200&fit=crop", title: "Brand Mark", description: "Icon design" },
          { image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?w=800&h=1200&fit=crop", title: "Emblem Design", description: "Classic style" },
          { image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=1200&fit=crop", title: "Corporate Identity", description: "Professional branding" },
          { image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=1200&fit=crop", title: "Brand Assets", description: "Complete package" },
        ]}
      />
    ),
  },
  {
    category: "Branding",
    title: "Brand Guidelines",
    src: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&h=800&fit=crop&auto=format",
    content: (
      <WorkShowcase
        works={[
          { image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=1200&fit=crop", title: "Brand Book", description: "Complete standards" },
          { image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=1200&fit=crop", title: "Style Guide", description: "Visual rules" },
          { image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=1200&fit=crop", title: "Color Palette", description: "Brand colors" },
          { image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=1200&fit=crop", title: "Typography", description: "Font system" },
          { image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=1200&fit=crop", title: "Logo Usage", description: "Application rules" },
          { image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=800&h=1200&fit=crop", title: "Brand Patterns", description: "Design elements" },
          { image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=1200&fit=crop", title: "Brand Voice", description: "Tone & messaging" },
          { image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=1200&fit=crop", title: "Application Examples", description: "Real-world usage" },
        ]}
      />
    ),
  },
];

export default BrandingPortfolio;

