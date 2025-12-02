import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
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
                  TERMS & CONDITIONS
                </h1>
                <p className="text-sm text-muted-foreground">
                  Last Updated: December 2, 2024
                </p>
              </div>

              <div className="space-y-6 text-foreground">
                <section>
                  <h2 className="text-2xl font-heading font-bold mb-3">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Welcome to VisualVerse. By accessing or using our website, services, or contacting us for any project, you agree to follow these Terms & Conditions. If you do not agree, please do not use our site or services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-3">2. Services Provided</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    VisualVerse offers creative services including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Photography & videography</li>
                    <li>Branding & design</li>
                    <li>Graphic design</li>
                    <li>UI/UX & web design</li>
                    <li>Social media & digital marketing</li>
                    <li>Creative consultancy</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    All services are customized to the client's needs.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-3">3. Quotes & Payments</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>All quotes are valid for 14 days unless stated otherwise.</li>
                    <li>A 50% deposit is required to confirm any project.</li>
                    <li>The remaining balance is due upon completion and before final delivery.</li>
                    <li>Payments are not refundable once work has begun, except in specific cases agreed upon in writing.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-3">4. Project Timelines</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Timelines are estimated based on project scope.</li>
                    <li>Delays caused by late feedback, missing files, or client revisions may push delivery dates.</li>
                    <li>VisualVerse is not responsible for delays caused by circumstances beyond our control.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-3">5. Revisions</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Each service includes a set number of revisions (stated in your quotation or contract).</li>
                    <li>Additional revisions are billed separately.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-3">6. Ownership & Usage Rights</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>VisualVerse retains ownership of all creative assets until full payment is received.</li>
                    <li>Clients receive the rights specified in their contract (e.g., personal use, commercial use, licensing terms).</li>
                    <li>Raw files (RAW photos, unedited footage, design source files) remain the property of VisualVerse unless purchased separately.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-3">7. Portfolio Usage</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    VisualVerse may use completed work (photos, videos, designs, logos, websites) in portfolios, social media, and marketing unless the client requests confidentiality in writing.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-3">8. Client Responsibilities</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Clients must:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Provide accurate information</li>
                    <li>Supply required content on time</li>
                    <li>Secure permissions for locations, models, music, etc.</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    VisualVerse is not responsible for legal issues arising from client-provided materials.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-3">9. Cancellations</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Deposits are non-refundable once production or design work has started.</li>
                    <li>If a client cancels mid-project, payment for work completed up to that point is required.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-3">10. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    VisualVerse is not liable for:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Losses caused by client misuse of materials</li>
                    <li>Website downtime or third-party platform issues</li>
                    <li>Damages resulting from events beyond our control</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    We deliver work "as is" based on the agreed scope.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-3">11. Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update these Terms at any time. Continued use of our website or services means you accept the updated version.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-heading font-bold mb-3">12. Contact</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions, email: <a href="mailto:hello@visualverse.com" className="text-accent hover:underline">hello@visualverse.com</a>
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

