import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "VisualVerse transformed our brand identity completely. Their creative vision and attention to detail exceeded all our expectations. The new branding has significantly increased our market presence.",
    name: "Sarah Johnson",
    title: "CEO, Tech Innovations Inc.",
  },
  {
    quote:
      "Working with VisualVerse was an absolute pleasure. Their photography and videography team captured our product launch in a way that truly told our story. The results were stunning.",
    name: "Michael Chen",
    title: "Marketing Director, Global Brands",
  },
  {
    quote:
      "The web design and UI/UX work VisualVerse did for us was exceptional. Our user engagement increased by 60% after the redesign. They truly understand how to create digital experiences that convert.",
    name: "Emily Rodriguez",
    title: "Founder, Digital Solutions Co.",
  },
  {
    quote:
      "VisualVerse's social media strategy and content creation helped us reach new audiences we never thought possible. Their creative campaigns generated over 2 million impressions in just three months.",
    name: "David Thompson",
    title: "Brand Manager, Lifestyle Brands",
  },
  {
    quote:
      "From concept to execution, VisualVerse delivered beyond our expectations. Their graphic design work for our annual campaign was award-worthy. We couldn't be happier with the results.",
    name: "Lisa Anderson",
    title: "Creative Director, Fashion House",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="cinematic-section py-20 bg-background overflow-hidden">
      <div className="max-w-8xl mx-auto px-10 mb-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0 }}
          className="text-center"
        >
          <div className="w-16 h-1 bg-accent mx-auto mb-3" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3">
            What Our Clients Say About Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from those who've worked with us
          </p>
        </motion.div>
      </div>

      <div className="w-full h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

