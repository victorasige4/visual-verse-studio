import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { AnimatedCard } from "@/components/ui/animated-card";

const About = () => {
  const missionRef = useRef(null);
  const teamRef = useRef(null);
  const valuesRef = useRef(null);
  
  const isMissionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" });
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  const team = [
    { name: "Alex Rivera", role: "Creative Director", bio: "15+ years shaping visual narratives" },
    { name: "Maya Chen", role: "Lead Designer", bio: "Award-winning brand storyteller" },
    { name: "Jordan Blake", role: "Photography Director", bio: "Capturing moments that matter" },
    { name: "Sofia Martinez", role: "Strategy Lead", bio: "Transforming ideas into impact" },
  ];

  const values = [
    { title: "Cinematic Vision", description: "Every frame tells a story worth remembering" },
    { title: "Bold Creativity", description: "We push boundaries to create the extraordinary" },
    { title: "Authentic Connection", description: "Building brands that resonate deeply" },
    { title: "Premium Craft", description: "Excellence in every detail, every time" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="w-16 h-1 bg-accent mx-auto mb-4" />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-4 tracking-tight">
              About <span className="text-gradient">VisualVerse</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              We are a collective of storytellers, designers, and visionaries 
              crafting experiences that move people.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="cinematic-section relative">
        <FloatingParticles />
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            To create work that doesn't just look beautiful, but leaves a lasting impression. 
            Every project is an opportunity to push boundaries and redefine 
            what's possible in creative media.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="cinematic-section bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="w-16 h-1 bg-accent" />
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Born from Passion
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                At Visual Verse, we believe that every brand, every event, and every moment 
                has a story waiting to be told. We are a creative media powerhouse 
                dedicated to bringing stories to life, one frame at a time.
                </p>
                <p>
                From stunning visuals to engaging digital experiences, we craft content that 
                doesn't just look good—it resonates, captivates, and inspires. Whatever service you need, 
                we turn ideas into impactful visual narratives that leave a lasting impression.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/images/photographer.jpg" 
                  alt="Professional photographer with camera" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent/10 rounded-lg -z-10" />
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="cinematic-section relative">
        <FloatingParticles />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <div className="w-16 h-1 bg-accent mx-auto mb-3" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every project we undertake
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-lg bg-gradient-to-br from-muted/30 to-muted/10 hover:from-muted/50 hover:to-muted/20 transition-all duration-500"
              >
                <h3 className="text-2xl font-heading font-bold mb-2">{value.title}</h3>
                <p className="text-lg text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="cinematic-section bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <div className="w-16 h-1 bg-accent mx-auto mb-3" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3">
              Meet the Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The creative minds behind VisualVerse
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isTeamInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-5xl font-heading font-bold text-accent/30">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">{member.name}</h3>
                <p className="text-accent font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default About;
