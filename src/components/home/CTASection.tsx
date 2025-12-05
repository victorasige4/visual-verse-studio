import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="cinematic-section bg-gradient-to-br from-midnight-cyan to-soft-aqua text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
            Let's Create What the World Remembers.
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Ready to transform your vision into a cinematic reality? Let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/quote" className="w-full sm:w-auto flex justify-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="div"
                className="bg-soft-aqua text-primary hover:bg-midnight-cyan/90 font-medium text-base md:text-lg px-6 py-3 md:px-12 md:py-6"
              >
                <Button
                  size="lg"
                  className="bg-transparent hover:bg-transparent text-primary border-0 font-medium text-base md:text-lg px-0 py-0 h-auto"
                >
                  Start a Project
                </Button>
              </HoverBorderGradient>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto flex justify-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="div"
                className="bg-midnight-cyan text-soft-aqua hover:bg-soft-aqua hover:text-primary font-medium text-base md:text-lg px-6 py-3 md:px-12 md:py-6"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent hover:bg-transparent text-soft-aqua border-0 font-medium text-base md:text-lg px-0 py-0 h-auto"
                >
                  Get in Touch
                </Button>
              </HoverBorderGradient>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
