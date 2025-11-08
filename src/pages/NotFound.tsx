import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Sparkles } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-instagram opacity-20" />
      
      <div className="relative z-10 text-center space-y-6 px-4 animate-fade-in">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full gradient-primary mb-4">
          <span className="text-5xl font-bold text-white">404</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Page not found</h1>
        <p className="text-xl text-muted-foreground max-w-md mx-auto mb-8">
          Oops! The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/">
            <Button variant="gradient" size="lg">
              <Home className="h-5 w-5" />
              Back to Home
            </Button>
          </Link>
          <Link to="/explore">
            <Button variant="glass" size="lg">
              <Sparkles className="h-5 w-5" />
              Explore Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
