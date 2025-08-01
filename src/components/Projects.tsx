import { useState, useRef, useEffect } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Projects = () => {
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

  const projects = [
    {
      title: "LLM Document QA (RAG)",
      description: "Natural language QA system for large PDF corpora with intelligent chunking and retrieval.",
      longDescription: "Built a comprehensive RAG (Retrieval-Augmented Generation) system that enables natural language querying of large PDF document collections. Implemented sophisticated document chunking strategies, semantic search with vector databases, and optimized prompt engineering workflows using LangChain. The system handles complex multi-document queries and provides accurate, contextual answers with source citations.",
      technologies: ["LangChain", "Vector DB", "FastAPI", "Python", "OpenAI", "FAISS"],
      features: [
        "Advanced document chunking with overlap optimization",
        "Semantic search using dense vector embeddings",
        "Multi-document query synthesis",
        "Source attribution and confidence scoring",
        "RESTful API with real-time streaming responses"
      ],
      category: "Generative AI"
    },
    {
      title: "MLOps Pipeline for AI Deployment",
      description: "CI/CD-driven pipeline with Docker and GitHub Actions ensuring robust monitoring and model drift detection.",
      longDescription: "Developed a comprehensive MLOps pipeline that automates the entire machine learning lifecycle from experimentation to production deployment. The system includes automated testing, model versioning, containerized deployments, and continuous monitoring for model performance degradation and data drift.",
      technologies: ["Docker", "GitHub Actions", "MLflow", "Kubernetes", "Prometheus", "Grafana"],
      features: [
        "Automated model testing and validation",
        "Containerized deployment with Kubernetes",
        "Real-time model performance monitoring",
        "Automated model retraining triggers",
        "A/B testing framework for model comparison"
      ],
      category: "MLOps"
    },
    {
      title: "Dynamic ETL Pipelines",
      description: "Python ETL solution for ingesting REST/cloud data with automated schema evolution and anomaly detection.",
      longDescription: "Created a flexible and scalable ETL pipeline system that automatically adapts to changing data schemas and detects anomalies in real-time. The system processes data from multiple sources including REST APIs, cloud storage, and streaming platforms, with built-in data quality checks and monitoring.",
      technologies: ["Python", "Apache Airflow", "Pandas", "Azure", "PostgreSQL", "Redis"],
      features: [
        "Automatic schema detection and evolution",
        "Real-time anomaly detection algorithms",
        "Multi-source data ingestion (REST, Cloud, Streaming)",
        "Data quality validation and reporting",
        "Scalable processing with parallel execution"
      ],
      category: "Data Engineering"
    },
    {
      title: "Event Sourcing Platform",
      description: "Real-time backend in FastAPI + GraphQL serving 100k+ users with high availability and performance.",
      longDescription: "Architected and implemented a high-performance event sourcing platform capable of handling real-time events for over 100,000 concurrent users. The system features eventual consistency, CQRS patterns, and horizontal scalability with GraphQL APIs for flexible data querying.",
      technologies: ["FastAPI", "GraphQL", "PostgreSQL", "Redis", "Docker", "Nginx"],
      features: [
        "Event sourcing with CQRS architecture",
        "Real-time event streaming and processing",
        "Horizontal scaling with load balancing",
        "GraphQL API with subscription support",
        "High availability with failover mechanisms"
      ],
      category: "Backend Development"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of production-ready solutions spanning AI/ML, data engineering, 
            and scalable backend systems with real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`group bg-card-gradient border-border/50 hover:shadow-hover transition-all duration-500 hover:scale-105 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-primary/10 text-primary">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs bg-muted">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-3 pt-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="flex-1 group/btn">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl mb-2">{project.title}</DialogTitle>
                        <DialogDescription>
                          <Badge variant="outline" className="mb-4">
                            {project.category}
                          </Badge>
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">Project Overview</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {project.longDescription}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">Key Features</h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start">
                                <ArrowRight className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button variant="ghost" size="sm" className="px-3">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="px-3">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;