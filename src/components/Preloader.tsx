import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoaderFive } from "./ui/loader";

interface PreloaderProps {
  onComplete?: () => void;
  duration?: number;
}

export const Preloader: React.FC<PreloaderProps> = ({ 
  onComplete, 
  duration = 3000 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete?.();
      }, 500); // Wait for fade out animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          <LoaderFive text="Welcome To Our Universe..." />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

