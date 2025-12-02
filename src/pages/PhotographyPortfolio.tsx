import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button } from "@/components/ui/button";

const PhotographyPortfolio = () => {
  const cards = photographyData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-8">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>
      </div>

      {/* Header */}
      <div className="w-full py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-xl md:text-5xl font-bold text-foreground font-heading mb-4">
            Photography Portfolio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Capturing life's precious moments with creativity and precision
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
              src={`https://images.unsplash.com/photo-${1516035069371 + index}-29a1b244cc32?w=1200&h=800&fit=crop&auto=format`}
              alt={`${title} example`}
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-2xl mt-8"
            />
          </div>
        );
      })}
    </>
  );
};

const photographyData = [
  {
    category: "Photography",
    title: "Weddings",
    src: "/images/Weddings.jpg",
    content: (
      <DummyContent
        title="Wedding Photography"
        description="Capturing the magic of your special day with timeless elegance. From intimate moments to grand celebrations, we preserve every emotion and detail that makes your wedding uniquely yours."
      />
    ),
  },
  {
    category: "Photography",
    title: "Graduations",
    src: "/images/Graduations.jpg",
    content: (
      <DummyContent
        title="Graduation Photography"
        description="Celebrating your academic achievements with professional portraits and candid moments. We capture the pride, joy, and excitement of this milestone in your educational journey."
      />
    ),
  },
  {
    category: "Photography",
    title: "Family Shoots",
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&h=800&fit=crop&auto=format",
    content: (
      <DummyContent
        title="Family Photography"
        description="Creating lasting memories with your loved ones. Our family shoots capture the warmth, connection, and unique dynamics that make your family special, in natural and authentic ways."
      />
    ),
  },
  {
    category: "Photography",
    title: "Birthdays",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&h=800&fit=crop&auto=format",
    content: (
      <DummyContent
        title="Birthday Photography"
        description="Documenting the joy and celebration of your special day. From milestone birthdays to intimate gatherings, we capture the laughter, surprises, and unforgettable moments."
      />
    ),
  },
  {
    category: "Photography",
    title: "Corporate Events",
    src: "/images/Corporate Events.jpg",
    content: (
      <DummyContent
        title="Corporate Event Photography"
        description="Professional documentation of your business events, conferences, and corporate gatherings. We capture the professionalism, networking, and key moments that define your corporate culture."
      />
    ),
  },
];

export default PhotographyPortfolio;

