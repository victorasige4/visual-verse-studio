import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button } from "@/components/ui/button";

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
              src={`https://images.unsplash.com/photo-${1611162617474 + index}-5b21e879e113?w=1200&h=800&fit=crop&auto=format`}
              alt={`${title} example`}
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-2xl mt-8"
            />
          </div>
        );
      })}
    </>
  );
};

const socialMediaData = [
  {
    category: "Social Media & Digital Marketing",
    title: "Content Strategy",
    src: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1200&h=800&fit=crop&auto=format",
    content: (
      <DummyContent
        title="Content Strategy"
        description="Developing data-driven content strategies that engage your audience. We create comprehensive content plans that align with your brand goals and resonate with your target market."
      />
    ),
  },
  {
    category: "Social Media & Digital Marketing",
    title: "Social Media Management",
    src: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&h=800&fit=crop&auto=format",
    content: (
      <DummyContent
        title="Social Media Management"
        description="Managing your social presence across all platforms. We handle content creation, posting schedules, community engagement, and performance tracking to grow your following."
      />
    ),
  },
  {
    category: "Social Media & Digital Marketing",
    title: "PPC Advertising",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&auto=format",
    content: (
      <DummyContent
        title="PPC Advertising"
        description="Running targeted paid advertising campaigns. We create and optimize PPC campaigns across Google, Facebook, and other platforms to maximize your ROI."
      />
    ),
  },
  {
    category: "Social Media & Digital Marketing",
    title: "SEO Optimization",
    src: "https://images.unsplash.com/photo-1571677208715-0e8f26c6c2c2?w=1200&h=800&fit=crop&auto=format",
    content: (
      <DummyContent
        title="SEO Optimization"
        description="Improving your search engine rankings. We implement proven SEO strategies to increase your organic visibility and drive qualified traffic to your website."
      />
    ),
  },
  {
    category: "Social Media & Digital Marketing",
    title: "Email Marketing",
    src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop&auto=format",
    content: (
      <DummyContent
        title="Email Marketing"
        description="Creating email campaigns that convert. We design and execute email marketing strategies that nurture leads, engage customers, and drive sales."
      />
    ),
  },
];

export default SocialMediaPortfolio;

