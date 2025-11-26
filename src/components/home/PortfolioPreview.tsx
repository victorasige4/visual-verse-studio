import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Brand Revolution",
    category: "Branding",
    image: "gradient-1",
  },
  {
    title: "Urban Stories",
    category: "Photography",
    image: "gradient-2",
  },
  {
    title: "Digital Dreams",
    category: "Web Design",
    image: "gradient-3",
  },
  {
    title: "Creative Futures",
    category: "Campaign",
    image: "gradient-4",
  },
];

export const PortfolioPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="cinematic-section bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A glimpse into our creative universe
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
            >
              <Link to="/portfolio">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    index % 4 === 0
                      ? "from-primary to-accent"
                      : index % 4 === 1
                      ? "from-accent to-primary"
                      : index % 4 === 2
                      ? "from-primary/80 to-accent/80"
                      : "from-accent/80 to-primary/80"
                  } transition-transform duration-700 group-hover:scale-110`}
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
                    <h3 className="text-3xl font-heading font-bold group-hover:translate-x-2 transition-transform duration-300">
                      {project.title}
                    </h3>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/portfolio">
            <Button
              size="lg"
              variant="outline"
              className="group border-accent text-accent hover:bg-accent hover:text-white"
            >
              View All Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
