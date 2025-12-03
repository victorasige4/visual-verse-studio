import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button } from "@/components/ui/button";
import { InfiniteWorkShowcase } from "@/components/ui/infinite-work-showcase";

const GraphicDesignPortfolio = () => {
  const cards = graphicDesignData.map((card, index) => (
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
            Graphic Design Portfolio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Crafting visual identities that leave lasting impressions
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

const WorkShowcase = ({ works }: { works: Array<{ image: string; title: string; description?: string }> }) => {
  return (
    <div className="py-4">
      <InfiniteWorkShowcase items={works} direction="left" speed="slow" />
    </div>
  );
};

const graphicDesignData = [
  {
    category: "Graphic Design",
    title: "Logo Design",
    src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=800&fit=crop&auto=format",
    content: (
      <WorkShowcase
        works={[
          { image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=1200&fit=crop", title: "Modern Logo", description: "Clean brand identity" },
          { image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=1200&fit=crop", title: "Minimalist Design", description: "Simple elegance" },
          { image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=1200&fit=crop", title: "Brand Identity", description: "Complete system" },
          { image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=800&h=1200&fit=crop", title: "Corporate Logo", description: "Professional mark" },
          { image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=1200&fit=crop", title: "Startup Branding", description: "Fresh identity" },
          { image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=1200&fit=crop", title: "Logo Variations", description: "Versatile designs" },
          { image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?w=800&h=1200&fit=crop", title: "Emblem Design", description: "Classic style" },
          { image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=1200&fit=crop", title: "Icon System", description: "Complete set" },
        ]}
      />
    ),
  },
  {
    category: "Graphic Design",
    title: "Posters & Flyers",
    src: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&h=800&fit=crop&auto=format",
    content: (
      <WorkShowcase
        works={[
          { image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=1200&fit=crop", title: "Event Poster", description: "Bold design" },
          { image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=1200&fit=crop", title: "Promotional Flyer", description: "Eye-catching" },
          { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1200&fit=crop", title: "Concert Poster", description: "Music event" },
          { image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=1200&fit=crop", title: "Business Flyer", description: "Corporate promo" },
          { image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=1200&fit=crop", title: "Sale Poster", description: "Promotional design" },
          { image: "https://images.unsplash.com/photo-1600172454132-e67be7fec5c5?w=800&h=1200&fit=crop", title: "Festival Flyer", description: "Vibrant colors" },
          { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1200&fit=crop", title: "Grand Opening", description: "Launch promo" },
          { image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop", title: "Exhibition Poster", description: "Art showcase" },
        ]}
      />
    ),
  },
  {
    category: "Graphic Design",
    title: "Print Materials",
    src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop&auto=format",
    content: (
      <WorkShowcase
        works={[
          { image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=1200&fit=crop", title: "Business Cards", description: "Professional identity" },
          { image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=1200&fit=crop", title: "Brochure Design", description: "Informative layouts" },
          { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1200&fit=crop", title: "Catalog Design", description: "Product showcase" },
          { image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=1200&fit=crop", title: "Magazine Layout", description: "Editorial design" },
          { image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=1200&fit=crop", title: "Letterhead", description: "Brand stationery" },
          { image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=1200&fit=crop", title: "Annual Report", description: "Corporate document" },
          { image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=800&h=1200&fit=crop", title: "Packaging Insert", description: "Product info" },
          { image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=1200&fit=crop", title: "Menu Design", description: "Restaurant brand" },
        ]}
      />
    ),
  },
  {
    category: "Graphic Design",
    title: "Social Media Graphics",
    src: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=800&fit=crop&auto=format",
    content: (
      <WorkShowcase
        works={[
          { image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=1200&fit=crop", title: "Instagram Posts", description: "Engaging visuals" },
          { image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=1200&fit=crop", title: "Social Campaign", description: "Platform optimized" },
          { image: "/images/social media post.jpg", title: "Content Series", description: "Brand consistency" },
          { image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&h=1200&fit=crop", title: "Story Templates", description: "Interactive design" },
          { image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=1200&fit=crop", title: "Feed Layout", description: "Grid aesthetics" },
          { image: "https://images.unsplash.com/photo-1600172454132-e67be7fec5c5?w=800&h=1200&fit=crop", title: "Promo Graphics", description: "Sales posts" },
          { image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=1200&fit=crop", title: "Announcement", description: "News graphics" },
          { image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1200&fit=crop", title: "Quote Graphics", description: "Inspirational posts" },
        ]}
      />
    ),
  },
];

export default GraphicDesignPortfolio;

