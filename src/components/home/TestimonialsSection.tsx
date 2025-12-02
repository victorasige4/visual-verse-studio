import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { FloatingParticles } from "@/components/ui/floating-particles";

const testimonials = [
  {
    quote:
      "VisualVerse transformed our brand identity completely. Their creative vision and attention to detail exceeded all our expectations. The new branding has significantly increased our market presence.",
    name: "Sarah Johnson",
    designation: "CEO, Tech Innovations Inc.",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Working with VisualVerse was an absolute pleasure. Their photography and videography team captured our product launch in a way that truly told our story. The results were stunning.",
    name: "Michael Chen",
    designation: "Marketing Director, Global Brands",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The web design and UI/UX work VisualVerse did for us was exceptional. Our user engagement increased by 60% after the redesign. They truly understand how to create digital experiences that convert.",
    name: "Emily Rodriguez",
    designation: "Founder, Digital Solutions Co.",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "VisualVerse's social media strategy and content creation helped us reach new audiences we never thought possible. Their creative campaigns generated over 2 million impressions in just three months.",
    name: "David Thompson",
    designation: "Brand Manager, Lifestyle Brands",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "From concept to execution, VisualVerse delivered beyond our expectations. Their graphic design work for our annual campaign was award-worthy. We couldn't be happier with the results.",
    name: "Lisa Anderson",
    designation: "Creative Director, Fashion House",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="cinematic-section py-8 bg-background overflow-hidden relative">
      <FloatingParticles />
      <div className="relative z-10 max-w-8xl mx-auto px-10 mb-4">
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

      <div className="w-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
};

