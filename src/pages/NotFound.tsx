import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10 px-6"
      >
        <div className="text-9xl font-heading font-bold text-gradient mb-8">404</div>
        <div className="w-24 h-1 bg-accent mx-auto mb-8" />
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-md mx-auto">
          The page you're looking for seems to have wandered off into the creative cosmos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center h-11 rounded-md px-8 bg-accent hover:bg-accent/90 text-white font-medium transition-colors glow-effect"
          >
            <Home className="mr-2" size={20} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center h-11 rounded-md px-8 border border-accent text-accent hover:bg-accent hover:text-white font-medium transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
