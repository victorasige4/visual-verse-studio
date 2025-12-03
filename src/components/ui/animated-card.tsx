import { cn } from "@/lib/utils";
import { ReactNode, memo } from "react";

interface AnimatedCardProps {
  title: string;
  description: string;
  staticImage: string;
  hoverImage: string;
  className?: string;
  children?: ReactNode;
}

export const AnimatedCard = memo(function AnimatedCard({
  title,
  description,
  staticImage,
  hoverImage,
  className,
}: AnimatedCardProps) {
  return (
    <div className="w-full transform transition-transform duration-500 hover:scale-105 hover:-translate-y-2">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-lg shadow-xl flex flex-col justify-end p-8 border border-transparent dark:border-neutral-800",
          "bg-cover bg-center",
          // Preload hover image by setting it in a pseudo-element
          "before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/80 after:via-black/40 after:to-transparent after:z-10",
          "hover:after:from-black/90 hover:after:via-black/60",
          "hover:shadow-2xl hover:shadow-accent/20",
          "transition-all duration-500",
          className
        )}
        style={{
          backgroundImage: `url(${staticImage})`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundImage = `url(${hoverImage})`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundImage = `url(${staticImage})`;
        }}
      >
        <div className="text relative z-50">
          <h3 className="font-bold text-2xl md:text-3xl text-white relative mb-4 transform transition-transform duration-300 group-hover:translate-x-1 drop-shadow-lg">
            {title}
          </h3>
          <p className="font-normal text-base md:text-lg text-gray-50 relative transform transition-transform duration-300 group-hover:translate-x-1 drop-shadow-md">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
});

