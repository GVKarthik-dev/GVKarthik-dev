import { useState, useRef, useEffect } from "react";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
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

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "venkata.karthik.dev@gmail.com",
      href: "mailto:venkata.karthik.dev@gmail.com",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/venkata-karthik/",
      color: "text-blue-600",
      bgColor: "bg-blue-600/10"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my repositories",
      href: "https://github.com/GVKarthik-dev",
      color: "text-gray-600",
      bgColor: "bg-gray-600/10"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, and 
            exciting projects in AI/ML and data engineering. Let's build something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.label}
                className={`group bg-card-gradient border-border/50 hover:shadow-hover transition-all duration-500 hover:scale-105 cursor-pointer ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${method.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className={`h-8 w-8 ${method.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{method.label}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{method.value}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                    onClick={() => window.open(method.href, method.label === "Email" ? "_self" : "_blank")}
                  >
                    Connect
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional info card */}
          <Card 
            className={`bg-hero-gradient p-8 text-center ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '450ms' }}
          >
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Ready to collaborate?
              </h3>
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                Whether you're looking to discuss a project, explore partnership opportunities, 
                or just want to chat about the latest in AI/ML, I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  variant="secondary"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                  onClick={() => window.open("mailto:venkata.karthik.dev@gmail.com", "_self")}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() => window.open("https://www.linkedin.com/in/venkata-karthik/", "_blank")}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;