import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { encode } from "qss";
import React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  layout?: string;
} & (
  | { isStatic: true; imageSrc: string }
  | { isStatic?: false; imageSrc?: never }
);

// Portfolio section images mapping
const portfolioImages: Record<string, string> = {
  photography: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=800&fit=crop&auto=format",
  videography: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&auto=format",
  "graphic-design": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop&auto=format",
  "web-ui-ux-design": "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop&auto=format",
  "social-media-digital-marketing": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop&auto=format",
  branding: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1200&h=800&fit=crop&auto=format",
};

export const LinkPreview = ({
  children,
  url,
  className,
  width = 200,
  height = 125,
  quality = 50,
  layout = "fixed",
  isStatic = false,
  imageSrc = "",
}: LinkPreviewProps) => {
  const isInternalLink = url.startsWith("/");
  let src;
  
  if (isStatic) {
    src = imageSrc;
  } else if (isInternalLink) {
    // Check if it's a portfolio link with hash
    if (url.includes("/portfolio#")) {
      const hash = url.split("#")[1];
      src = portfolioImages[hash] || "";
    } else {
      // For other internal links, try to use microlink with full URL
      if (typeof window !== "undefined") {
        const fullUrl = window.location.origin + url;
        const params = encode({
          url: fullUrl,
          screenshot: true,
          meta: false,
          embed: "screenshot.url",
          colorScheme: "dark",
          "viewport.isMobile": true,
          "viewport.deviceScaleFactor": 1,
          "viewport.width": width * 3,
          "viewport.height": height * 3,
        });
        src = `https://api.microlink.io/?${params}`;
      } else {
        src = "";
      }
    }
  } else {
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * 3,
      "viewport.height": height * 3,
    });
    src = `https://api.microlink.io/?${params}`;
  }

  const [isOpen, setOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const translateX = useSpring(x, springConfig);

  const navigate = useNavigate();

  const handleMouseMove = (event: any) => {
    const targetRect = event.target.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2; // Reduce the effect to make it subtle
    x.set(offsetFromCenter);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isInternalLink) {
      e.preventDefault();
      navigate(url);
      // Scroll to hash if present
      if (url.includes("#")) {
        const hash = url.split("#")[1];
        setTimeout(() => {
          const element = document.querySelector(`#${hash}`);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    }
  };

  return (
    <>
      {isMounted && src ? (
        <div className="hidden">
          <img
            src={src}
            width={width}
            height={height}
            alt="hidden image"
          />
        </div>
      ) : null}
      <HoverCardPrimitive.Root
        openDelay={50}
        closeDelay={100}
        onOpenChange={(open) => {
          setOpen(open);
        }}
      >
        {isInternalLink ? (
          <HoverCardPrimitive.Trigger
            onMouseMove={handleMouseMove}
            onClick={handleClick}
            className={cn("text-black dark:text-white cursor-pointer", className)}
            asChild
          >
            <Link to={url}>
              {children}
            </Link>
          </HoverCardPrimitive.Trigger>
        ) : (
          <HoverCardPrimitive.Trigger
            onMouseMove={handleMouseMove}
            className={cn("text-black dark:text-white", className)}
            href={url}
          >
            {children}
          </HoverCardPrimitive.Trigger>
        )}
        <HoverCardPrimitive.Content
          className="[transform-origin:var(--radix-hover-card-content-transform-origin)] z-50"
          side="top"
          align="center"
          sideOffset={10}
        >
          <AnimatePresence mode="wait">
            {isOpen && src ? (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className="shadow-xl rounded-xl"
                style={{
                  x: translateX,
                }}
              >
                {isInternalLink ? (
                  <Link
                    to={url}
                    onClick={handleClick}
                    className="block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800 dark:bg-neutral-900"
                    style={{ fontSize: 0 }}
                  >
                    <img
                      src={isStatic ? imageSrc : src}
                      width={width}
                      height={height}
                      className="rounded-lg"
                      alt="preview image"
                    />
                  </Link>
                ) : (
                  <a
                    href={url}
                    className="block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800 dark:bg-neutral-900"
                    style={{ fontSize: 0 }}
                  >
                    <img
                      src={isStatic ? imageSrc : src}
                      width={width}
                      height={height}
                      className="rounded-lg"
                      alt="preview image"
                    />
                  </a>
                )}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Root>
    </>
  );
};

