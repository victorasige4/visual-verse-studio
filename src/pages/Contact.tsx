import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

// TikTok icon component (not available in lucide-react)
const Tiktok = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
      fill="currentColor"
    />
  </svg>
);

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: <Mail size={24} />, label: "Email", value: "hello@visualverse.com" },
    { icon: <Phone size={24} />, label: "Phone", value: "+254 (794) 044-598" },
    { icon: <MapPin size={24} />, label: "Location", value: "Nairobi, KE" },
  ];

  const socials = [
    { icon: <Instagram size={24} />, name: "Instagram", url: "#" },
    { icon: <Linkedin size={24} />, name: "LinkedIn", url: "#" },
    { icon: <Facebook size={24} />, name: "Facebook", url: "#" },
    { icon: <Youtube size={24} />, name: "YouTube", url: "#" },
    { icon: <Tiktok size={24} />, name: "Tiktok", url: "#" },
  ];

  return (
    <div className="min-h-screen relative bg-neutral-950">
      <BackgroundRippleEffect />
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
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed">
              Let's start a conversation about your next project
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="cinematic-section relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-1 bg-accent mb-4" />
              <h2 className="text-4xl font-heading font-bold mb-3 text-white">Send us a message</h2>
              <p className="text-lg text-neutral-300 mb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 bg-muted/30 border-border focus:border-accent"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 bg-muted/30 border-border focus:border-accent"
                  />
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="h-12 bg-muted/30 border-border focus:border-accent"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-muted/30 border-border focus:border-accent resize-none"
                  />
                </div>
                <HoverBorderGradient
                  containerClassName="rounded-full w-full"
                  as="div"
                  className="bg-accent hover:bg-accent/90 text-white font-medium glow-effect"
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-transparent hover:bg-transparent text-white border-0 font-medium w-full px-0 py-0 h-auto"
                  >
                    Send Message
                  </Button>
                </HoverBorderGradient>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <div className="w-16 h-1 bg-accent mb-4" />
                <h2 className="text-4xl font-heading font-bold mb-3 text-white">Contact Information</h2>
                <p className="text-lg text-neutral-300 mb-6">
                  Reach out through any of these channels. We're here to help bring your vision to life.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        {info.icon}
                      </div>
                      <div>
                        <div className="font-medium text-sm text-neutral-400 mb-1">
                          {info.label}
                        </div>
                        <div className="text-lg font-medium text-white">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-white">Follow Us</h3>
                <div className="flex gap-4">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="w-12 h-12 rounded-full bg-muted/30 hover:bg-accent flex items-center justify-center text-foreground hover:text-white transition-all duration-300 group"
                      aria-label={social.name}
                    >
                      <div className="transform group-hover:scale-110 transition-transform">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                <h3 className="text-2xl font-heading font-bold mb-4 text-white">Office Hours</h3>
                <div className="space-y-2 text-neutral-300">
                  <p>Monday - Friday: 9:00 AM - 4:00 PM</p>
                  <p>Saturday & Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
