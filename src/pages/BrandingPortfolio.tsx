import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button } from "@/components/ui/button";

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
        <Carousel items={cards} />
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

const DummyContent = ({ title, description }: { title: string; description: string }) => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-muted/30 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-muted-foreground text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-foreground">
                {title}
              </span>{" "}
              {description}
            </p>
            <img
              src={`https://images.unsplash.com/photo-${1558655146 + index}-364adaf1fcc9?w=1200&h=800&fit=crop&auto=format`}
              alt={`${title} example`}
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-2xl mt-8"
            />
          </div>
        );
      })}
    </>
  );
};

const brandingData = [
  {
    category: "Branding",
    title: "Brand Strategy",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&auto=format",
    content: (
      <DummyContent
        title="Brand Strategy"
        description="Developing comprehensive brand strategies that define your market position. We create strategic frameworks that guide all your brand decisions and communications."
      />
    ),
  },
  {
    category: "Branding",
    title: "Visual Identity",
    src: "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=1200&h=800&fit=crop&auto=format",
    content: (
      <DummyContent
        title="Visual Identity Design"
        description="Creating distinctive visual identities that make you memorable. We design complete visual systems including logos, colors, typography, and brand assets."
      />
    ),
  },
  {
    category: "Branding",
    title: "Brand Guidelines",
    src: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&h=800&fit=crop&auto=format",
    content: (
      <DummyContent
        title="Brand Guidelines"
        description="Documenting your brand standards for consistency. We create comprehensive brand guidelines that ensure your brand is applied correctly across all touchpoints."
      />
    ),
  },
  {
    category: "Branding",
    title: "Naming & Positioning",
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop&auto=format",
    content: (
      <DummyContent
        title="Brand Naming & Positioning"
        description="Finding the perfect name and position for your brand. We develop memorable brand names and positioning strategies that differentiate you in the market."
      />
    ),
  },
  {
    category: "Branding",
    title: "Brand Messaging",
    src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&auto=format",
    content: (
      <DummyContent
        title="Brand Messaging"
        description="Crafting compelling brand messages that resonate. We develop your brand voice, messaging framework, and key communications that connect with your audience."
      />
    ),
  },
];

export default BrandingPortfolio;

