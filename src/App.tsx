import { useState, lazy, Suspense } from "react";
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
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const Quote = lazy(() => import("./pages/Quote"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PhotographyPortfolio = lazy(() => import("./pages/PhotographyPortfolio"));
const VideographyPortfolio = lazy(() => import("./pages/VideographyPortfolio"));
const GraphicDesignPortfolio = lazy(() => import("./pages/GraphicDesignPortfolio"));
const WebUIUXPortfolio = lazy(() => import("./pages/WebUIUXPortfolio"));
const SocialMediaPortfolio = lazy(() => import("./pages/SocialMediaPortfolio"));
const BrandingPortfolio = lazy(() => import("./pages/BrandingPortfolio"));

// Loading fallback component with better UX
const PageLoader = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-background gap-4">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
    <p className="text-sm text-muted-foreground animate-pulse">Loading...</p>
  </div>
);

// Global state for modals
export let openTermsModal: (() => void) | null = null;
export let openPrivacyModal: (() => void) | null = null;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes (formerly cacheTime)
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 1,
    },
  },
});

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
                <Suspense fallback={<PageLoader />}>
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
                </Suspense>
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
