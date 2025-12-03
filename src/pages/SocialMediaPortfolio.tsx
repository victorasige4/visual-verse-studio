import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button } from "@/components/ui/button";
import { InfiniteWorkShowcase } from "@/components/ui/infinite-work-showcase";

const SocialMediaPortfolio = () => {
  const cards = socialMediaData.map((card, index) => (
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
            Social Media & Digital Marketing Portfolio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Growing your brand through strategic digital marketing
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
      <InfiniteWorkShowcase items={works} direction="right" speed="slow" />
    </div>
  );
};

const socialMediaData = [
  {
    category: "Social Media & Digital Marketing",
    title: "Content Strategy",
    src: "/images/social media post.jpg",
    content: (
      <WorkShowcase
        works={[
          { image: "/images/social media post.jpg", title: "Instagram Feed", description: "Cohesive brand posts" },
          { image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=1200&fit=crop", title: "Story Design", description: "Interactive content" },
          { image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=1200&fit=crop", title: "Carousel Posts", description: "Engaging series" },
          { image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&h=1200&fit=crop", title: "Promo Graphics", description: "Sales content" },
          { image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=1200&fit=crop", title: "Quote Posts", description: "Inspirational content" },
          { image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=1200&fit=crop", title: "Product Posts", description: "Showcase items" },
          { image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=1200&fit=crop", title: "Announcement", description: "News graphics" },
          { image: "https://images.unsplash.com/photo-1600172454132-e67be7fec5c5?w=800&h=1200&fit=crop", title: "Event Promo", description: "Digital campaigns" },
        ]}
      />
    ),
  },
];

export default SocialMediaPortfolio;

