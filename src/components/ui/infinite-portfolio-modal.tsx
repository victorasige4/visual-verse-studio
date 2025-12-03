import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface WorkItem {
  image: string;
  title: string;
  description?: string;
}

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  works: WorkItem[];
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  isOpen,
  onClose,
  title,
  category,
  works,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  useOutsideClick(containerRef, () => onClose());

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] h-screen overflow-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-full w-full bg-black/90 backdrop-blur-lg"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            ref={containerRef}
            className="relative z-[10000] mx-auto my-10 max-w-7xl rounded-3xl bg-background p-4 md:p-10"
          >
            <button
              className="sticky top-4 right-0 ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-accent hover:bg-accent/90 transition-colors mb-4"
              onClick={onClose}
            >
              <IconX className="h-6 w-6 text-white" />
            </button>

            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-accent/90 text-white text-xs font-medium rounded-full mb-3 uppercase tracking-wider">
                {category}
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
                {title}
              </h2>
              <p className="text-muted-foreground text-lg">
                Explore our collection of {title.toLowerCase()} work
              </p>
            </div>

            {/* Infinite Carousel inside Modal */}
            <InfiniteWorkCarousel items={works} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Infinite carousel for work items inside modal
const InfiniteWorkCarousel: React.FC<{ items: WorkItem[] }> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      if (containerRef.current) {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
        containerRef.current.style.setProperty("--animation-duration", "60s");
      }

      setStart(true);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.title}-${idx}`}
            className="group relative shrink-0 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            style={{
              width: "280px",
              height: "420px",
            }}
          >
            <div className="relative w-full h-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h3 className="text-white font-heading font-bold text-xl mb-1 leading-tight">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-gray-200 text-sm leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 transition-all duration-300 rounded-xl pointer-events-none" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

