import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { PixelatedCanvas } from "../ui/pixelated-canvas";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="cinematic-section bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-center justify-center">
          {/* Text Content - Centered on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4 text-center w-full max-w-full md:text-left order-2 md:order-1"
          >
            <div className="w-16 h-1 bg-accent mx-auto md:mx-0" />
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight break-words">
              A One Stop Creative Hub
            </h2>
            <div className="space-y-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              <p className="break-words">
                We are VisualVerse — a full-service creative media agency dedicated to crafting 
                cinematic experiences that resonate. From bold branding to immersive storytelling, 
                we transform ideas into unforgettable visual narratives.
              </p>
              <p className="break-words">
                Our mission is simple: to create work that doesn't just look beautiful, 
                but leaves a lasting impression. Every project is an opportunity to push 
                boundaries and redefine what's possible in creative media.
              </p>
            </div>
          </motion.div>

          {/* Image/Visual Content - Centered on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full flex justify-center items-center order-1 md:order-2"
          >
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl relative w-full max-w-[90vw] sm:max-w-md md:max-w-[500px]">
              <PixelatedCanvas
                src="/images/photographer.jpg"
                width={500}
                height={500}
                cellSize={3}
                dotScale={0.9}
                shape="square"
                backgroundColor="hsl(var(--background))"
                dropoutStrength={0.35}
                interactive
                distortionStrength={5}
                distortionRadius={120}
                distortionMode="swirl"
                followSpeed={0.18}
                jitterStrength={6}
                jitterSpeed={3.5}
                sampleAverage
                tintColor="hsl(var(--accent))"
                tintStrength={0.12}
                className="w-full h-full rounded-lg"
                objectFit="cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-lg -z-10" />
            <div className="hidden md:block absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
