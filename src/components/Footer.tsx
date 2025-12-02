import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Mail, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { openTermsModal, openPrivacyModal } from "@/App";

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
              {/* WhatsApp Button */}
              <a
                href="https://api.whatsapp.com/send?phone=254794044598&text=Hi%2C%20I'm%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-5 px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-lg transition-all duration-300 font-heading text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3 });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, { scale: 1, duration: 0.3 });
                }}
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>WHATSAPP</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              
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
              <button
                onClick={() => openPrivacyModal?.()}
                className="text-xs text-muted-foreground hover:text-accent transition-colors font-body uppercase tracking-wider"
              >
                Privacy
              </button>
              <span className="text-muted-foreground/30">|</span>
              <button
                onClick={() => openTermsModal?.()}
                className="text-xs text-muted-foreground hover:text-accent transition-colors font-body uppercase tracking-wider"
              >
                Terms
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
