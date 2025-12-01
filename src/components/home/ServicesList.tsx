import { motion } from "framer-motion";
import { PinContainer } from "@/components/ui/3d-pin";

const services = [
  { 
    number: "01", 
    title: "Photography", 
    description: "Visual storytelling",
    portfolioId: "photography",
    highlights: ["Weddings", "Graduations", "Family Shoots", "Birthdays", "Corporate Events", "Church Events"]
  },
  { 
    number: "02", 
    title: "Videography", 
    description: "Capturing moments that matter",
    portfolioId: "videography",
    highlights: ["Wedding Films", "Corporate Videos", "Documentaries", "Music Videos", "Event Coverage", "Commercial Production"]
  },
  { 
    number: "03", 
    title: "Graphic Design", 
    description: "Digital & print",
    portfolioId: "graphic-design",
    highlights: ["Logo Design", "Brand Identity", "Print Materials", "Social Media Graphics", "Packaging Design", "Marketing Collaterals"]
  },
  { 
    number: "04", 
    title: "Web & UI/UX Design", 
    description: "Experience design",
    portfolioId: "web-ui-ux-design",
    highlights: ["Website Design", "Mobile Apps", "User Interface", "User Experience", "E-commerce", "Web Applications"]
  },
  { 
    number: "05", 
    title: "Social Media & Digital Marketing", 
    description: "Strategy & campaigns",
    portfolioId: "social-media-digital-marketing",
    highlights: ["Content Strategy", "Social Media Management", "PPC Advertising", "SEO Optimization", "Email Marketing", "Analytics & Reporting"]
  },
  { 
    number: "06", 
    title: "Branding", 
    description: "Identity & strategy",
    portfolioId: "branding",
    highlights: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Naming & Positioning", "Brand Messaging", "Rebranding"]
  },
];

export const ServicesList = () => {
  return (
    <section className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 py-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ x: 20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="group h-[28rem] flex items-center justify-center"
            >
              <PinContainer
                title={service.title}
                href={`/portfolio#${service.portfolioId}`}
                containerClassName="w-full h-full"
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm opacity-40 font-light">
                      {service.number}
                    </span>
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-lg text-slate-100">
                      {service.title}
                    </h3>
                  </div>
                  <div className="text-sm !m-0 !p-0 font-normal mb-4">
                    <span className="text-slate-500">
                      {service.description}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Services Include:
                    </h4>
                    <ul className="space-y-1.5">
                      {service.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-soft-aqua/60"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-soft-aqua/20 via-midnight-cyan/20 to-accent/20" />
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

