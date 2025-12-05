import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, memo } from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { FloatingParticles } from "@/components/ui/floating-particles";

const services = [
  { number: "01", title: "Photography", description: "Visual storytelling", portfolioId: "photography" },
  { number: "02", title: "Videography", description: "Capturing moments that matters", portfolioId: "videography" },
  { number: "03", title: "Graphic Design", description: "Digital & print", portfolioId: "graphic-design" },
  { number: "04", title: "Web & UI/UX Design", description: "Experience design", portfolioId: "web-ui-ux-design" },
  { number: "05", title: "Social Media & Digital Marketing", description: "Strategy & campaigns", portfolioId: "social-media-digital-marketing" },
  { number: "06", title: "Branding", description: "Identity & strategy", portfolioId: "branding" },
];

export const ServicesSection = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section ref={ref} className="cinematic-section bg-background relative">
      <FloatingParticles />
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-32">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold">
            Services
          </h2>
        </motion.div>
        <div className="space-y-1">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.1 + index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <motion.div
                whileHover={{ x: 20 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="group cursor-pointer border-t border-border py-8 md:py-12"
              >
                <div className="flex items-center gap-8 md:gap-16">
                  <span className="text-sm md:text-base opacity-40 font-light w-12">
                    {service.number}
                  </span>
                  <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold flex-1 group-hover:text-soft-aqua transition-colors duration-500">
                    <LinkPreview 
                      url={`/portfolio#${service.portfolioId}`}
                      className="hover:text-soft-aqua transition-colors duration-500"
                      width={250}
                      height={150}
                    >
                      {service.title}
                    </LinkPreview>
                  </h3>
                  <p className="text-lg md:text-xl opacity-60 font-light hidden md:block">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
});
