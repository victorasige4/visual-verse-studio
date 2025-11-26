import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
      <section ref={missionRef} className="cinematic-section">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To create visual narratives that transcend the ordinary. We believe 
              in the power of imagery to inspire, connect, and transform. Every 
              project is an opportunity to craft something unforgettable.
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
              className="space-y-6"
            >
              <div className="w-16 h-1 bg-accent" />
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Born from Passion
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded in 2018, VisualVerse emerged from a simple belief: 
                  that visual storytelling should be both art and impact.
                </p>
                <p>
                  What started as a small creative studio has evolved into a 
                  full-service agency, working with brands across the globe to 
                  create campaigns that resonate and inspire.
                </p>
                <p>
                  Today, we continue to push creative boundaries, blending 
                  cinematic aesthetics with strategic thinking.
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
              <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-8xl font-heading font-bold text-accent/20">VV</div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent/10 rounded-lg -z-10" />
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="cinematic-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="w-16 h-1 bg-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
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
                <h3 className="text-2xl font-heading font-bold mb-4">{value.title}</h3>
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
            className="text-center mb-20"
          >
            <div className="w-16 h-1 bg-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
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
    </div>
  );
};

export default About;
