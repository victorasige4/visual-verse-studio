import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Quote = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote request submitted!",
      description: "We'll review your request and get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      timeline: "",
      description: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen relative bg-neutral-950">
      <BackgroundBeams />
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="w-16 h-1 bg-accent mx-auto mb-4" />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-4 tracking-tight text-white">
              Request a <span className="text-gradient">Quote</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed">
              Tell us about your project and we'll provide a tailored proposal
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="cinematic-section relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 rounded-lg bg-gradient-to-br from-muted/30 to-muted/10"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-heading font-bold text-white">Your Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-neutral-300">Name *</label>
                    <Input
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 bg-background border-border focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-neutral-300">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 bg-background border-border focus:border-accent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-neutral-300">Company</label>
                  <Input
                    name="company"
                    placeholder="Your Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="h-12 bg-background border-border focus:border-accent"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6 pt-6 border-t border-neutral-800">
                <h2 className="text-2xl font-heading font-bold text-white">Project Details</h2>
                <div>
                  <label className="block text-sm font-medium mb-2 text-neutral-300">Service Needed *</label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => handleSelectChange("service", value)}
                    required
                  >
                    <SelectTrigger className="h-12 bg-background border-border">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="branding">Branding</SelectItem>
                      <SelectItem value="photography">Photography & Videography</SelectItem>
                      <SelectItem value="design">Graphic Design</SelectItem>
                      <SelectItem value="web">UI/UX & Web Design</SelectItem>
                      <SelectItem value="marketing">Social Media & Digital Marketing</SelectItem>
                      <SelectItem value="strategy">Creative Strategy</SelectItem>
                      <SelectItem value="multiple">Multiple Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-neutral-300">Budget Range</label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) => handleSelectChange("budget", value)}
                    >
                      <SelectTrigger className="h-12 bg-background border-border">
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k">$50,000+</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-neutral-300">Timeline</label>
                    <Select
                      value={formData.timeline}
                      onValueChange={(value) => handleSelectChange("timeline", value)}
                    >
                      <SelectTrigger className="h-12 bg-background border-border">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">ASAP (1-2 weeks)</SelectItem>
                        <SelectItem value="short">1-2 months</SelectItem>
                        <SelectItem value="medium">2-4 months</SelectItem>
                        <SelectItem value="long">4+ months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-neutral-300">Project Description *</label>
                  <Textarea
                    name="description"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="bg-background border-border focus:border-accent resize-none"
                  />
                </div>
              </div>

              <HoverBorderGradient
                containerClassName="rounded-full w-full"
                as="div"
                className="bg-accent hover:bg-accent/90 text-white font-medium text-lg py-6 glow-effect"
              >
                <Button
                  type="submit"
                  size="lg"
                  className="bg-transparent hover:bg-transparent text-white border-0 font-medium text-lg w-full px-0 py-0 h-auto"
                >
                  Submit Quote Request
                </Button>
              </HoverBorderGradient>

              <p className="text-sm text-neutral-400 text-center">
                We'll review your request and get back to you within 24 hours with a tailored proposal.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="cinematic-section bg-gradient-to-b from-muted/20 to-background relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-16 h-1 bg-accent mx-auto mb-3" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-3 text-white">
              Why Choose VisualVerse?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Award-winning creatives with years of industry experience",
              },
              {
                title: "Tailored Solutions",
                description: "Custom strategies designed specifically for your unique needs",
              },
              {
                title: "Proven Results",
                description: "150+ successful projects delivering measurable impact",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <h3 className="text-2xl font-heading font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-neutral-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
