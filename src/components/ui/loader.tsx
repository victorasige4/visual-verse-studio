import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LoaderFiveProps {
  text?: string;
  className?: string;
}

export const LoaderFive: React.FC<LoaderFiveProps> = ({ 
  text = "Loading...", 
  className 
}) => {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-8", className)}>
      {/* Animated circles */}
      <div className="relative w-20 h-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-accent"
            style={{
              rotate: i * 72,
            }}
            animate={{
              rotate: 360 + i * 72,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Text with fade animation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center"
      >
        <motion.p
          className="text-2xl md:text-3xl font-heading font-medium text-foreground"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {text}
        </motion.p>
      </motion.div>
    </div>
  );
};

