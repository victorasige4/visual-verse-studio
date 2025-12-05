import { cn } from "@/lib/utils";
import React, { useEffect, useState, useMemo, useCallback } from "react";

interface WorkItem {
  image: string;
  title: string;
  description?: string;
  hideText?: boolean;
}

export const InfiniteWorkShowcase = React.memo(({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: WorkItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
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
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "30s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "50s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "70s");
      }
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Only duplicate if not already duplicated
      if (scrollerContent.length === items.length) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
      }

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [items.length, getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
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
            className="group relative shrink-0 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            style={{
              width: "280px",  // 4 inches
              height: "420px", // 6 inches
            }}
          >
            {/* Image */}
            <div className="relative w-full h-full bg-muted">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading={idx < 4 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={idx < 2 ? "high" : "auto"}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              
              {/* Gradient Overlay - only show if text is visible */}
              {!item.hideText && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <h3 className="text-white font-heading font-semibold text-lg mb-1 leading-tight">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-gray-200 text-xs leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                </>
              )}

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 transition-all duration-300 rounded-xl pointer-events-none" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

