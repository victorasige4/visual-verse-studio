import { motion } from "framer-motion";
import { ServicesList } from "@/components/home/ServicesList";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { AnimatedCard } from "@/components/ui/animated-card";
import { Link } from "react-router-dom";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="hsl(var(--accent))"
        />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="w-16 h-1 bg-accent mx-auto mb-4" />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-4 tracking-tight">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Full-service creative solutions tailored to bring your vision to life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <ServicesList />

      {/* Why Choose Us Section */}
      <section className="cinematic-section bg-gradient-to-b from-muted/20 to-background relative">
        <FloatingParticles />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="w-16 h-1 bg-accent mx-auto mb-3" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3">
              Why Choose Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What sets VisualVerse apart from the rest
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Story-Led Creativity",
                description: "We don't just design or shoot — we craft visuals that connect, inspire, and make people feel something.",
                staticImage: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&h=600&fit=crop&auto=format",
                hoverImage: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTBqaGE3ZXg3dWQ5NnJ0YzBnZGRxMGJrYnN3cHR3ZGFqOGJ4Y3RlZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlPwMAzh13pcZ20/giphy.gif",
              },
              {
                title: "Tailored Solutions",
                description: "Custom strategies designed specifically for your unique needs",
                staticImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&auto=format",
                hoverImage: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGw4ZzRhZ2ZkZjBvdTRzZGNnYnV2YmNtcDRhcTZoMGJ2NWh5ZGRkZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKSjRrfIPjeiVyM/giphy.gif",
              },
              {
                title: "Quality",
                description: "Every project is handled with care, originality, and attention to detail so your brand always looks its best.",
                staticImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop&auto=format",
                hoverImage: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWJ5bGU5YXc0YnBqYXBxZGU5ZDdxYnBvMGt2ZGM5aGFuYjZhYzNkdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tPnAAJxXTvpLwJy/giphy.gif",
              },
              {
                title: "A One-Stop Creative Hub",
                description: "We offer an all-in-one solution to elevate your brand.",
                staticImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&auto=format",
                hoverImage: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGJkOHB6YjBqcGZpbmFqYzRnYWRqMGN5OGJ5cWZxbzBxYjBkdGRtZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlHFRbmaZtBRhXG/giphy.gif",
              },
              {
                title: "Client-Centric Approach",
                description: "Your vision is our priority. We listen, understand your goals, and shape our work around what matters most to you.",
                staticImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop&auto=format",
                hoverImage: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWdmcGNhZmU4dTNqNWFuZGZvdGVlcjBxYWZvYWNyYXJrZGRpOWZlOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7qDSOvfaCO9b3MlO/giphy.gif",
              },
              {
                title: "Timely Delivery, Every Time",
                description: "We respect deadlines without compromising on quality. Expect efficiency, professionalism, and results that exceed expectations.",
                staticImage: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&h=600&fit=crop&auto=format",
                hoverImage: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXNxYzZkOHNqZnRhcGRqeXBjbWE5YWNvZWRjdWJnbGNjcTBhcHRnYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiTnwgQ8Wjs1sUB4k/giphy.gif",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AnimatedCard
                  title={item.title}
                  description={item.description}
                  staticImage={item.staticImage}
                  hoverImage={item.hoverImage}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cinematic-section">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Ready to bring your vision to life?
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
                    Get Started
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

export default Services;
