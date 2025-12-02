import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EncryptedText } from "./ui/encrypted-text";

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
          <div className="text-center px-6">
            <EncryptedText
              text="Welcome To Our Universe..."
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold"
              encryptedClassName="text-neutral-500 dark:text-neutral-500"
              revealedClassName="text-foreground dark:text-white"
              revealDelayMs={50}
              flipDelayMs={30}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

