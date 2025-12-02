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
    description: "Photography & Videography",
    title: "Urban Lifestyle Series",
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
    ctaText: "View Project",
    ctaLink: "/portfolio",
    content: () => {
      return (
        <p>
          A cinematic visual storytelling project capturing the essence of urban living. 
          This series combined photography and videography to create compelling narratives 
          about city life. <br /> <br /> We produced a collection of stunning visuals that 
          showcased the vibrancy and energy of metropolitan environments. The project included 
          commercial photography, documentary-style video content, and social media assets. 
          The series received widespread acclaim and was featured in several design publications.
        </p>
      );
    },
  },
  {
    description: "Web & UI/UX Design",
    title: "E-Commerce Platform Redesign",
    src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    ctaText: "View Project",
    ctaLink: "/portfolio",
    content: () => {
      return (
        <p>
          A complete redesign of a major e-commerce platform focusing on user experience 
          and conversion optimization. The new design improved usability and accessibility 
          while maintaining brand identity. <br /> <br /> We conducted extensive user 
          research, created wireframes and prototypes, and implemented a responsive design 
          system. The redesign resulted in a 40% increase in user engagement and a 25% 
          boost in conversion rates. The platform now provides a seamless shopping experience 
          across all devices.
        </p>
      );
    },
  },
  {
    description: "Graphic Design & Print",
    title: "Annual Report Design",
    src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop",
    ctaText: "View Project",
    ctaLink: "/portfolio",
    content: () => {
      return (
        <p>
          An award-winning annual report design that transformed complex financial data 
          into an engaging visual narrative. The design combined elegant typography, 
          custom illustrations, and strategic use of white space. <br /> <br /> We created 
          a cohesive design system that made the report both informative and visually 
          appealing. The project included print design, digital PDF version, and interactive 
          web elements. The report received recognition from design associations and set 
          a new standard for corporate communications.
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
