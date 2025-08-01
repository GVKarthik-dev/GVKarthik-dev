import { useState, useEffect } from "react";
import { Moon, Sun, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [isDark, setIsDark] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © 2025 G V Karthik. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Passionate about AI/ML and creating impactful solutions.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              {isDark ? (
                <Sun className="h-5 w-5 transition-transform duration-300 rotate-0 hover:rotate-180" />
              ) : (
                <Moon className="h-5 w-5 transition-transform duration-300 rotate-0 hover:-rotate-12" />
              )}
            </Button>

            {/* Scroll to top */}
            {showScrollTop && (
              <Button
                variant="outline"
                size="icon"
                onClick={scrollToTop}
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-fade-in-up"
                title="Scroll to top"
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Designed and developed with ❤️ Passionate about AI/ML.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;