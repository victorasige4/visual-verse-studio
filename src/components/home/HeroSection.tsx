import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Boxes Animation */}
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-0 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className={cn("text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-4 tracking-tight text-white relative z-20")}>
            <span className="text-gradient">VisualVerse</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl lg:text-3xl text-neutral-300 mb-8 max-w-4xl mx-auto font-light relative z-20"
        >
          Bold. Creative. Cinematic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative z-20"
        >
          <Link to="/portfolio">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white border-2 border-midnight-cyan font-medium text-lg px-12 py-6 glow-effect"
            >
              Explore Our Work
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-neutral-300 hover:text-accent transition-colors cursor-pointer z-20"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
};
