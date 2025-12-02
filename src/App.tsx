import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Preloader } from "./components/Preloader";
import { TermsModal } from "./components/TermsModal";
import { PrivacyModal } from "./components/PrivacyModal";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import PhotographyPortfolio from "./pages/PhotographyPortfolio";
import VideographyPortfolio from "./pages/VideographyPortfolio";
import GraphicDesignPortfolio from "./pages/GraphicDesignPortfolio";
import WebUIUXPortfolio from "./pages/WebUIUXPortfolio";
import SocialMediaPortfolio from "./pages/SocialMediaPortfolio";
import BrandingPortfolio from "./pages/BrandingPortfolio";

// Global state for modals
export let openTermsModal: (() => void) | null = null;
export let openPrivacyModal: (() => void) | null = null;

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  // Expose the functions globally
  openTermsModal = () => setIsTermsModalOpen(true);
  openPrivacyModal = () => setIsPrivacyModalOpen(true);

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
          <ScrollToTop />
          {isLoading ? (
            <Preloader onComplete={() => setIsLoading(false)} duration={3000} />
          ) : (
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/portfolio/photography" element={<PhotographyPortfolio />} />
                  <Route path="/portfolio/videography" element={<VideographyPortfolio />} />
                  <Route path="/portfolio/graphic-design" element={<GraphicDesignPortfolio />} />
                  <Route path="/portfolio/web-ui-ux" element={<WebUIUXPortfolio />} />
                  <Route path="/portfolio/social-media" element={<SocialMediaPortfolio />} />
                  <Route path="/portfolio/branding" element={<BrandingPortfolio />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/quote" element={<Quote />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
          </main>
          <Footer />
              <WhatsAppButton />
              <ScrollToTopButton />
        </div>
          )}
          {/* Modals at root level - cover entire page */}
          <TermsModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
          <PrivacyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
};

export default App;
