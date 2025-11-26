import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Camera, Layout, Megaphone, Lightbulb, Pen } from "lucide-react";

const Services = () => {
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" });

  const services = [
    {
      icon: <Palette size={32} />,
      title: "Branding",
      description: "Complete brand identity systems that capture your essence and resonate with your audience.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
    },
    {
      icon: <Camera size={32} />,
      title: "Photography & Videography",
      description: "Cinematic visuals that tell your story with authenticity and artistic vision.",
      features: ["Commercial Photography", "Video Production", "Product Photography", "Event Coverage"],
    },
    {
      icon: <Pen size={32} />,
      title: "Graphic Design",
      description: "Bold, impactful designs that communicate your message with clarity and style.",
      features: ["Marketing Materials", "Print Design", "Packaging Design", "Visual Assets"],
    },
    {
      icon: <Layout size={32} />,
      title: "UI/UX & Web Design",
      description: "Digital experiences that are both beautiful and intuitive, designed for impact.",
      features: ["Website Design", "Mobile Apps", "User Experience", "Interface Design"],
    },
    {
      icon: <Megaphone size={32} />,
      title: "Social Media & Digital Marketing",
      description: "Strategic campaigns that amplify your voice and engage your community.",
      features: ["Social Strategy", "Content Creation", "Campaign Management", "Analytics"],
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Creative Strategy",
      description: "Strategic thinking that transforms ideas into compelling visual narratives.",
      features: ["Brand Positioning", "Creative Direction", "Campaign Strategy", "Storytelling"],
    },
  ];

  const process = [
    { step: "01", title: "Discovery", description: "Understanding your vision, goals, and audience" },
    { step: "02", title: "Strategy", description: "Crafting a tailored approach to your unique needs" },
    { step: "03", title: "Creation", description: "Bringing ideas to life with precision and artistry" },
    { step: "04", title: "Refinement", description: "Perfecting every detail until it's extraordinary" },
    { step: "05", title: "Launch", description: "Delivering work that exceeds expectations" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="w-16 h-1 bg-accent mx-auto mb-8" />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 tracking-tight">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Full-service creative solutions tailored to bring your vision to life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="cinematic-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-lg bg-gradient-to-br from-muted/30 to-muted/10 hover:from-primary/10 hover:to-accent/10 transition-all duration-500 hover-lift"
              >
                <div className="text-accent mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="cinematic-section bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="w-16 h-1 bg-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven approach to delivering exceptional results
            </p>
          </motion.div>

          <div className="space-y-12">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isProcessInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex items-start gap-8 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-heading font-bold text-xl group-hover:scale-110 transition-transform duration-500">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 pt-4">
                  <h3 className="text-3xl font-heading font-bold mb-3">{step.title}</h3>
                  <p className="text-lg text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cinematic-section">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Ready to create something extraordinary?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/quote"
                className="inline-flex items-center justify-center h-11 rounded-md px-8 bg-accent hover:bg-accent/90 text-white font-medium transition-colors glow-effect"
              >
                Request Quote
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-11 rounded-md px-8 border border-accent text-accent hover:bg-accent hover:text-white font-medium transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
