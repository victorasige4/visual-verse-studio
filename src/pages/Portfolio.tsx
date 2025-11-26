import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const Portfolio = () => {
  const galleryRef = useRef(null);
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "-100px" });
  
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Branding", "Photography", "Web Design", "Campaign", "Video"];

  const projects = [
    { title: "Brand Revolution", category: "Branding", gradient: "from-primary to-accent" },
    { title: "Urban Stories", category: "Photography", gradient: "from-accent to-primary" },
    { title: "Digital Dreams", category: "Web Design", gradient: "from-primary/80 to-accent/80" },
    { title: "Creative Futures", category: "Campaign", gradient: "from-accent/80 to-primary/80" },
    { title: "Motion Narrative", category: "Video", gradient: "from-primary/90 to-accent/90" },
    { title: "Visual Identity", category: "Branding", gradient: "from-accent/70 to-primary/70" },
    { title: "Captured Moments", category: "Photography", gradient: "from-primary to-accent/80" },
    { title: "Interface Artistry", category: "Web Design", gradient: "from-accent to-primary/80" },
    { title: "Social Impact", category: "Campaign", gradient: "from-primary/70 to-accent" },
    { title: "Cinematic Story", category: "Video", gradient: "from-accent/90 to-primary" },
    { title: "Brand Experience", category: "Branding", gradient: "from-primary/80 to-accent/70" },
    { title: "Editorial Vision", category: "Photography", gradient: "from-accent/80 to-primary/90" },
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

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
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              A collection of stories we've helped bring to life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-accent text-white"
                    : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section ref={galleryRef} className="cinematic-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isGalleryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
                className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-sm uppercase tracking-wider text-accent mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-heading font-bold group-hover:translate-x-2 transition-transform duration-300">
                      {project.title}
                    </h3>
                  </motion.div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 transition-colors duration-500 rounded-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="cinematic-section bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "15", label: "Awards Won" },
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
            <a
              href="/quote"
              className="inline-flex items-center justify-center h-11 rounded-md px-8 bg-accent hover:bg-accent/90 text-white font-medium transition-colors glow-effect"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
