import { Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSkills = () => {
    const element = document.getElementById('skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-hero-glow"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Main title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-text-gradient bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
              G V Karthik
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            AI/ML Engineer — Delivering Scalable, Production-Grade 
            <span className="text-primary"> Machine Learning</span> & 
            <span className="text-accent"> Generative AI</span> Solutions
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            I am an AI/ML engineer with two years' experience designing, deploying, and optimizing 
            leading-edge machine learning and generative AI systems in production. I thrive at the 
            intersection of data engineering, scalable cloud deployments, and LLM-powered pipelines.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <Button 
              size="lg"
              className="bg-hero-gradient hover:shadow-glow hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToSkills}
              className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300 px-8 py-6 text-lg font-semibold"
            >
              View My Work
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <button 
              onClick={scrollToSkills}
              className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300 group"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown className="h-6 w-6 animate-bounce group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-30"></div>
    </section>
  );
};

export default Hero;