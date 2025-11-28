import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  { number: "01", title: "Branding", description: "Identity & strategy" },
  { number: "02", title: "Photography", description: "Visual storytelling" },
  { number: "03", title: "Design", description: "Digital & print" },
  { number: "04", title: "Web & Digital", description: "Experience design" },
  { number: "05", title: "Marketing", description: "Strategy & campaigns" },
  { number: "06", title: "Production", description: "Studio services" },
];

export const ServicesList = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 py-32">
      <div className="max-w-7xl mx-auto w-full">
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
                    {service.title}
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
};

