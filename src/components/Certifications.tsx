import { useState, useRef, useEffect } from "react";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Certifications = () => {
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

  const certifications = [
    {
      title: "Machine Learning",
      provider: "Stanford University / Coursera",
      date: "2023",
      status: "Completed",
      description: "Comprehensive course covering supervised learning, unsupervised learning, and neural networks with practical applications.",
      skills: ["Linear Regression", "Neural Networks", "Clustering", "Anomaly Detection"],
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      title: "Databases and SQL for Data Science",
      provider: "IBM / Coursera",
      date: "2023",
      status: "Completed",
      description: "Advanced database concepts and SQL optimization techniques for data science applications.",
      skills: ["SQL", "Database Design", "Data Warehousing", "Query Optimization"],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Full Stack Web Development",
      provider: "Meta / Coursera",
      date: "2023",
      status: "Completed",
      description: "End-to-end web development including frontend frameworks, backend APIs, and deployment strategies.",
      skills: ["React", "Node.js", "APIs", "Deployment"],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      title: "Azure AI Fundamentals",
      provider: "Microsoft",
      date: "In Progress",
      status: "In Progress",
      description: "Cloud-based AI services and machine learning solutions on Microsoft Azure platform.",
      skills: ["Azure ML", "Cognitive Services", "AI Ethics", "Cloud Computing"],
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
    }
  ];

  return (
    <section id="certifications" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized 
            certification programs and specialized training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className={`group bg-card-gradient border-border/50 hover:shadow-hover transition-all duration-500 hover:scale-105 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${cert.bgColor} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Award className={`h-6 w-6 ${cert.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{cert.provider}</p>
                    </div>
                  </div>
                  
                  <Badge 
                    variant={cert.status === "Completed" ? "default" : "secondary"}
                    className={cert.status === "Completed" ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"}
                  >
                    {cert.status}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                  
                  {cert.status === "Completed" && (
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Certificate
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional learning note */}
        <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <p className="text-muted-foreground italic">
            Committed to continuous learning and staying current with emerging technologies in AI/ML and data engineering.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;