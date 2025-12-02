import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  useOutsideClick(containerRef, () => onClose());

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] h-screen overflow-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg z-[9999]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            ref={containerRef}
            className="relative z-[10000] mx-auto my-10 h-fit max-w-4xl rounded-3xl bg-background p-4 font-sans md:p-10"
          >
            <button
              className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-accent hover:bg-accent/90 transition-colors"
              onClick={onClose}
            >
              <IconX className="h-6 w-6 text-white" />
            </button>
            
            <div className="py-6 space-y-8">
              <div>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-2">
                  PRIVACY POLICY
                </h1>
                <p className="text-sm text-muted-foreground">
                  Last Updated: December 2, 2024
                </p>
              </div>

              <div className="space-y-6 text-foreground">
                <section>
                  <h2 className="text-2xl font-heading font-bold mb-3">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    VisualVerse is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-3">2. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We may collect:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">A. Information You Provide Directly</h3>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Messages sent through contact forms</li>
                        <li>Project details and requirements</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">B. Automatically Collected Data</h3>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>IP address</li>
                        <li>Browser type</li>
                        <li>Device information</li>
                        <li>Pages visited</li>
                        <li>Cookies (for analytics and performance)</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-3">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We use your data to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Respond to inquiries</li>
                    <li>Provide quotes and project proposals</li>
                    <li>Process payments</li>
                    <li>Deliver services</li>
                    <li>Improve our website</li>
                    <li>Send updates about VisualVerse (optional and unsubscribe-friendly)</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3 font-semibold">
                    We do not sell or rent your personal information to anyone.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-3">4. Cookies & Tracking Technologies</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We use cookies to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Improve website functionality</li>
                    <li>Analyze traffic and engagement</li>
                    <li>Personalize browsing experience</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    You can disable cookies in your browser settings.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-3">5. Sharing of Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We may share your data only with:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Trusted third-party tools (e.g., email providers, analytics platforms)</li>
                    <li>Payment processors</li>
                    <li>Contractors who assist us in delivering services</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    All collaborators follow strict confidentiality standards.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-3">6. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We take reasonable measures to protect your data, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Secure servers</li>
                    <li>Encrypted communication where applicable</li>
                    <li>Limited access to personal information</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    However, no method of transmission is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-3">7. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Request access to your data</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt out of email communication</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Contact us anytime to exercise these rights.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-3">8. Third-Party Links</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may contain links to external sites. We are not responsible for their privacy practices or content.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-3">9. Changes to This Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy occasionally. Updates will be posted on this page.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-3">10. Contact</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    General inquiries: <a href="mailto:hello@visualverse.com" className="text-accent hover:underline">hello@visualverse.com</a>
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

