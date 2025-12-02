import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="cinematic-section bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="w-16 h-1 bg-accent" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              A One Stop Creative Hub
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are VisualVerse — a full-service creative media agency dedicated to crafting 
              cinematic experiences that resonate. From bold branding to immersive storytelling, 
              we transform ideas into unforgettable visual narratives.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is simple: to create work that doesn't just look beautiful, 
              but leaves a lasting impression. Every project is an opportunity to push 
              boundaries and redefine what's possible in creative media.
            </p>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-6xl font-heading font-bold text-accent/30">VV</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
