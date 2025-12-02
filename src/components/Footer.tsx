import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Mail, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FloatingParticles } from "@/components/ui/floating-particles";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// TikTok icon component (outline version)
const Tiktok = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
    />
  </svg>
);

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/visualverse-creations", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/visualverse.creations/", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61584634318128", label: "Facebook" },
  { icon: Tiktok, href: "https://tiktok.com", label: "TikTok" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const copyrightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Animate footer entrance
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Stagger social icons animation
      if (socialRef.current) {
        gsap.fromTo(
          socialRef.current.children,
          {
            opacity: 0,
            scale: 0,
            rotation: -180,
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: socialRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Animate text elements
      if (textRef.current) {
        gsap.fromTo(
          textRef.current.children,
          {
            opacity: 0,
            x: -30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Animate quick links
      if (linksRef.current) {
        gsap.fromTo(
          linksRef.current.children,
          {
            opacity: 0,
            x: 30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: linksRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Animate copyright
      if (copyrightRef.current) {
        gsap.fromTo(
          copyrightRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: copyrightRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleSocialHover = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    const icon = e.currentTarget;
    gsap.to(icon, {
      scale: 1.2,
      rotation: 360,
      duration: 0.5,
      ease: "back.out(1.7)",
    });
  };

  const handleSocialLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const icon = e.currentTarget;
    gsap.to(icon, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };


  return (
    <footer
      ref={footerRef}
      className="relative bg-background border-t border-border overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50" />
      
      {/* Floating particles effect */}
      <FloatingParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand Section */}
          <div ref={textRef} className="space-y-6">
          <div className="space-y-4">
            <img 
              src="/logo file.png" 
              alt="VisualVerse" 
                className="h-10 w-auto brightness-0 invert"
            />
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
              Bold. Creative. Cinematic.<br />
              Bringing stories to life, one frame at a time.
            </p>
            </div>
            
            {/* Contact Button */}
            <a
              href="mailto:hello@visualverse.com"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-heading text-sm uppercase tracking-wider"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3 });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { scale: 1, duration: 0.3 });
              }}
            >
              <Mail size={16} />
              <span>EMAIL</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Quick Links */}
          <div ref={linksRef} className="space-y-6">
            <h4 className="text-sm font-heading font-semibold text-accent uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors font-body uppercase tracking-wider"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div ref={linksRef} className="space-y-6">
            <h4 className="text-sm font-heading font-semibold text-accent uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Photography",
                "Videography",
                "Graphic Design",
                "Web & UI/UX",
                "Digital Marketing",
                "Branding"
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors font-body uppercase tracking-wider"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-heading font-semibold text-accent uppercase tracking-wider">
              Connect
            </h4>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground font-body">
                hello@visualverse.com
              </p>
              <div ref={socialRef} className="flex flex-nowrap gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                <a
                      key={social.label}
                      href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                      className="group relative w-12 h-12 aspect-square rounded-lg border border-accent/30 hover:border-accent flex items-center justify-center text-accent/70 hover:text-accent transition-all duration-300 overflow-visible shrink-0"
                      aria-label={social.label}
                      onMouseEnter={(e) => handleSocialHover(e, index)}
                      onMouseLeave={handleSocialLeave}
                    >
                      <div className="absolute inset-0 bg-accent/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg" />
                      <Icon size={20} className="relative z-10" />
                </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          ref={copyrightRef}
          className="pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground font-body uppercase tracking-wider">
              © {currentYear} VisualVerse Creations. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-xs text-muted-foreground hover:text-accent transition-colors font-body uppercase tracking-wider"
              >
                Privacy
              </Link>
              <span className="text-muted-foreground/30">|</span>
              <Link
                to="/terms"
                className="text-xs text-muted-foreground hover:text-accent transition-colors font-body uppercase tracking-wider"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};
