import { motion } from "framer-motion";
import { PinContainer } from "@/components/ui/3d-pin";

const services = [
  { 
    number: "01", 
    title: "Photography", 
    description: "Visual storytelling",
    portfolioId: "photography",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop&auto=format",
    highlights: ["Weddings", "Graduations", "Family Shoots", "Birthdays", "Corporate Events", "Church Events"]
  },
  { 
    number: "02", 
    title: "Videography", 
    description: "Capturing moments that matter",
    portfolioId: "videography",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format",
    highlights: ["Wedding Films", "Corporate Videos", "Documentaries", "Music Videos", "Event Coverage", "Commercial Production"]
  },
  { 
    number: "03", 
    title: "Graphic Design", 
    description: "Digital & print",
    portfolioId: "graphic-design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&auto=format",
    highlights: ["Logo Design", "Brand Identity", "Print Materials", "Social Media Graphics", "Packaging Design", "Marketing Collaterals"]
  },
  { 
    number: "04", 
    title: "Web & UI/UX Design", 
    description: "Experience design",
    portfolioId: "web-ui-ux-design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&auto=format",
    highlights: ["Website Design", "Mobile Apps", "User Interface", "User Experience", "E-commerce", "Web Applications"]
  },
  { 
    number: "05", 
    title: "Social Media & Digital Marketing", 
    description: "Strategy & campaigns",
    portfolioId: "social-media-digital-marketing",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&auto=format",
    highlights: ["Content Strategy", "Social Media Management", "PPC Advertising", "SEO Optimization", "Email Marketing", "Analytics & Reporting"]
  },
  { 
    number: "06", 
    title: "Branding", 
    description: "Identity & strategy",
    portfolioId: "branding",
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=600&fit=crop&auto=format",
    highlights: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Naming & Positioning", "Brand Messaging", "Rebranding"]
  },
];

export const ServicesList = () => {
  return (
    <section className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 xl:gap-20">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ x: 20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="group h-[32rem] flex items-center justify-center"
            >
              <PinContainer
                title={service.title}
                href={`/portfolio#${service.portfolioId}`}
                containerClassName="w-full h-full"
                highlights={service.highlights}
              >
                <div className="relative flex basis-full flex-col items-center justify-center p-4 tracking-tight w-[20rem] h-[20rem] rounded-2xl overflow-hidden">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 group-hover/pin:opacity-50"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      opacity: 1,
                    }}
                  />
                  
                  {/* Gradient Overlay for text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm opacity-60 font-light text-foreground">
                        {service.number}
                      </span>
                    </div>
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-2xl text-foreground text-center drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

