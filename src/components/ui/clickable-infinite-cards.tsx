import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export interface ClickablePortfolioItem {
  image: string;
  title: string;
  category: string;
  description?: string;
  onClick?: () => void;
}

export const ClickableInfiniteCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: ClickablePortfolioItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  
  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.title}-${idx}`}
            onClick={item.onClick}
            className="group relative shrink-0 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            style={{
              width: "320px",
              height: "480px",
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
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <span className="inline-block px-3 py-1 bg-accent/90 text-white text-xs font-medium rounded-full mb-3 uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-white font-heading font-bold text-2xl mb-2 leading-tight">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-gray-200 text-sm leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                )}
                <p className="text-accent text-sm font-medium mt-3">
                  Click to view works →
                </p>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 transition-all duration-300 rounded-2xl pointer-events-none" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

