import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { ExpandableCardDemo, type ExpandableCard } from "../ui/expandable-card";
import { Cover } from "../ui/cover";

const portfolioCards: ExpandableCard[] = [
  {
    description: "Photography",
    title: "Graduation Photography",
    src: "/images/Graduations.jpg",
    ctaText: "View Project",
    ctaLink: "/portfolio/photography#graduations",
    content: () => {
      return (
        <p>
          Capturing the magic and emotion of your special moments with timeless elegance and 
          artistic vision. We specialize in creating beautiful photography that tells 
          your unique story through authentic moments and stunning compositions. <br /> <br /> 
          From intimate ceremonies to grand celebrations, we preserve every precious detail—the 
          stolen glances, joyful tears, heartfelt expressions, and jubilant celebrations. Our approach 
          blends photojournalistic storytelling with artistic portraiture, ensuring your 
          album becomes a treasured keepsake. We work discreetly to capture genuine emotions while 
          creating breathtaking portraits you'll cherish forever.
        </p>
      );
    },
  },
  {
    description: "Photography",
    title: "Corporate Event Photography",
    src: "/images/Corporate Events.jpg",
    ctaText: "View Project",
    ctaLink: "/portfolio/photography#corporate-events",
    content: () => {
      return (
        <p>
          Capturing the magic and emotion of your special moments with timeless elegance and 
          artistic vision. We specialize in creating beautiful photography that tells 
          your unique story through authentic moments and stunning compositions. <br /> <br /> 
          From intimate ceremonies to grand celebrations, we preserve every precious detail—the 
          stolen glances, joyful tears, heartfelt expressions, and jubilant celebrations. Our approach 
          blends photojournalistic storytelling with artistic portraiture, ensuring your 
          album becomes a treasured keepsake. We work discreetly to capture genuine emotions while 
          creating breathtaking portraits you'll cherish forever.
        </p>
      );
    },
  },
  {
    description: "Photography",
    title: "Wedding Photography",
    src: "/images/Weddings.jpg",
    ctaText: "View Project",
    ctaLink: "/portfolio/photography#weddings",
    content: () => {
      return (
        <p>
          Capturing the magic and emotion of your special moments with timeless elegance and 
          artistic vision. We specialize in creating beautiful photography that tells 
          your unique story through authentic moments and stunning compositions. <br /> <br /> 
          From intimate ceremonies to grand celebrations, we preserve every precious detail—the 
          stolen glances, joyful tears, heartfelt expressions, and jubilant celebrations. Our approach 
          blends photojournalistic storytelling with artistic portraiture, ensuring your 
          album becomes a treasured keepsake. We work discreetly to capture genuine emotions while 
          creating breathtaking portraits you'll cherish forever.
        </p>
      );
    },
  },
];

export const PortfolioPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="cinematic-section bg-gradient-to-b from-muted/20 to-background py-8">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-1 bg-accent mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3">
            <Cover>Featured Work</Cover>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A glimpse into our creative universe
          </p>
        </motion.div>

        <ExpandableCardDemo cards={portfolioCards} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 flex justify-center"
        >
          <Link to="/portfolio">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="div"
              className="bg-midnight-cyan text-soft-aqua hover:bg-soft-aqua hover:text-primary font-medium text-lg px-12 py-6"
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent hover:bg-transparent text-soft-aqua border-0 font-medium text-lg px-0 py-0 h-auto"
              >
                View More Projects
              </Button>
            </HoverBorderGradient>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
