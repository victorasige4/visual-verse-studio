import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Camera, Layers, Monitor, Megaphone, Lightbulb, Film } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Palette,
    title: "Branding",
    description: "Strategic brand identity that captures your essence and resonates with your audience.",
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    description: "Cinematic visual storytelling that brings your narrative to life with stunning clarity.",
  },
  {
    icon: Layers,
    title: "Graphic Design",
    description: "Bold, innovative designs that communicate your message with visual impact.",
  },
  {
    icon: Monitor,
    title: "UI/UX & Web Design",
    description: "Seamless digital experiences that blend aesthetics with intuitive functionality.",
  },
  {
    icon: Megaphone,
    title: "Social Media & Marketing",
    description: "Data-driven campaigns that amplify your voice across digital channels.",
  },
  {
    icon: Lightbulb,
    title: "Creative Strategy",
    description: "Innovative thinking that transforms challenges into creative opportunities.",
  },
  {
    icon: Film,
    title: "Studio Services",
    description: "Full-service production facilities equipped for any creative vision.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="cinematic-section bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive creative services tailored to elevate your brand
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to="/services">
                <div className="group p-8 rounded-lg border border-border hover:border-accent transition-all duration-500 hover-lift cursor-pointer bg-card">
                  <service.icon className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
