import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { FocusCards } from "@/components/ui/focus-cards";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const galleryRef = useRef(null);
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "-100px" });

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
            <div className="w-16 h-1 bg-accent mx-auto mb-4" />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-4 tracking-tight">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              A collection of stories we've helped bring to life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Focus Cards */}
      <section ref={galleryRef} className="cinematic-section py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <div className="w-16 h-1 bg-accent mx-auto mb-3" />
          </motion.div>
          
          <FocusCards cards={[
            {
              title: "Photography",
              src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=800&fit=crop&auto=format",
            },
            {
              title: "Graphic Design",
              src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop&auto=format",
            },
            {
              title: "Web & UI/UX Design",
              src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop&auto=format",
            },
            {
              title: "Social Media & Digital Marketing",
              src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop&auto=format",
            },
            {
              title: "Branding",
              src: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1200&h=800&fit=crop&auto=format",
            },
            {
              title: "Videography",
              src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&auto=format",
            },
          ]} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="cinematic-section bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-100 items-center justify-center text-center">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "6", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl md:text-6xl font-heading font-bold text-gradient mb-4">
                  {stat.number}
                </div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
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
              Want to see your project here?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's create something extraordinary together
            </p>
            <div className="flex justify-center">
              <Link to="/quote">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="div"
                  className="bg-accent hover:bg-accent/90 text-white font-medium text-lg px-12 py-6 glow-effect"
                >
                  <Button className="bg-transparent hover:bg-transparent text-white border-0 font-medium text-lg px-0 py-0 h-auto">
                    Start Your Project
                  </Button>
                </HoverBorderGradient>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
