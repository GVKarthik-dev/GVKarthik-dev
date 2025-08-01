import { useState, useRef, useEffect } from "react";
import { Code, Database, Cloud, Brain, GitBranch, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
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

  const skillCategories = [
    {
      icon: Brain,
      title: "AI/ML & Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "PyTorch", level: 90 },
        { name: "scikit-learn", level: 88 },
        { name: "TensorFlow", level: 85 }
      ]
    },
    {
      icon: Database,
      title: "Data Engineering",
      skills: [
        { name: "FastAPI", level: 92 },
        { name: "Azure Data Factory", level: 87 },
        { name: "Apache Spark", level: 83 },
        { name: "ETL/ELT Pipelines", level: 90 }
      ]
    },
    {
      icon: Cloud,
      title: "MLOps & Cloud",
      skills: [
        { name: "Docker", level: 89 },
        { name: "GitHub Actions", level: 86 },
        { name: "MLflow", level: 88 },
        { name: "Azure ML", level: 84 }
      ]
    },
    {
      icon: Code,
      title: "Generative AI",
      skills: [
        { name: "LLM Fine-tuning", level: 91 },
        { name: "RAG Systems", level: 93 },
        { name: "LangChain/LangGraph", level: 89 },
        { name: "Vector Databases", level: 87 }
      ]
    },
    {
      icon: Database,
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "Delta Lake", level: 82 },
        { name: "Vector DBs", level: 87 }
      ]
    },
    {
      icon: Users,
      title: "Collaboration",
      skills: [
        { name: "Agile Methodologies", level: 92 },
        { name: "Code Reviews", level: 90 },
        { name: "Team Mentorship", level: 88 },
        { name: "Technical Documentation", level: 89 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning the entire ML lifecycle, from data engineering 
            to production deployment and everything in between.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className={`group bg-card-gradient border-border/50 hover:shadow-hover transition-all duration-500 hover:scale-105 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-hero-gradient rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(index * 150) + (skillIndex * 100)}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;