import { useState, useRef, useEffect } from "react";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experience = {
    company: "Brainwave-Labs Pvt Ltd",
    position: "Software Engineer – AI/ML & Data Engineering",
    period: "Feb 2024 – Present",
    location: "India",
    achievements: [
      "Delivered scalable ML and generative AI solutions in Python and PyTorch",
      "Crafted end-to-end ETL/ELT pipelines for diverse data integration",
      "Containerized ML workflows (Docker), implemented CI/CD",
      "Tracked experiments/versioned models via MLflow",
      "Engineered RAG and LLM solutions with LangChain/LangGraph",
      "Led code reviews, supported team mentoring, followed Agile"
    ],
    technologies: [
      "Python", "PyTorch", "MLflow", "Docker", "LangChain", 
      "FastAPI", "Azure", "PostgreSQL", "CI/CD", "RAG"
    ]
  };

  return (
    <section id="experience" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building production-grade AI systems and leading cross-functional teams 
            to deliver innovative machine learning solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30"></div>
            
            {/* Experience card */}
            <div className="relative">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>
              
              <Card 
                className={`ml-20 bg-card-gradient border-border/50 hover:shadow-hover transition-all duration-500 ${
                  isVisible ? 'animate-fade-in-right' : 'opacity-0'
                }`}
              >
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-foreground mb-2 md:mb-0">
                        {experience.position}
                      </h3>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{experience.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                      <h4 className="text-xl font-semibold text-primary">
                        {experience.company}
                      </h4>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold mb-4 text-foreground">Key Achievements</h5>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement, index) => (
                        <li 
                          key={index}
                          className={`flex items-start group ${
                            isVisible ? 'animate-fade-in-up' : 'opacity-0'
                          }`}
                          style={{ animationDelay: `${(index + 1) * 100}ms` }}
                        >
                          <ChevronRight className="h-5 w-5 text-primary mr-3 mt-0.5 group-hover:translate-x-1 transition-transform duration-200" />
                          <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-lg font-semibold mb-4 text-foreground">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, index) => (
                        <Badge 
                          key={tech}
                          variant="secondary"
                          className={`bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-200 hover:scale-105 ${
                            isVisible ? 'animate-scale-in' : 'opacity-0'
                          }`}
                          style={{ animationDelay: `${600 + (index * 50)}ms` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;