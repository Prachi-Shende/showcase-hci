import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Users, Trophy, Lightbulb, Target } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 gradient-instagram opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80 backdrop-blur-[120px]" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="gradient-primary text-gradient font-medium">AI-Powered Portfolio Builder</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-foreground drop-shadow-lg">
              Show your work.
              <br />
              <span className="gradient-instagram text-gradient drop-shadow-xl">Showcase your journey.</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              The ultimate AI-powered platform for creators, developers, and recruiters to connect, build stunning portfolios, and explore creative projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link to="/dashboard">
                <Button variant="instagram" size="lg" className="group">
                  Start Building Your Portfolio
                  <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                </Button>
              </Link>
              <Link to="/explore">
                <Button variant="glass" size="lg">
                  Explore Projects
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm">
              <div>
                <div className="text-2xl font-bold gradient-primary text-gradient">10K+</div>
                <div className="text-muted-foreground">Creators</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-primary text-gradient">50K+</div>
                <div className="text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-primary text-gradient">1M+</div>
                <div className="text-muted-foreground">Connections</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why ShowCase Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why ShowCase?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to showcase your work and grow your professional network
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="glass rounded-2xl p-6 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="gradient-primary w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Users Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="glass rounded-2xl p-6 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-instagram" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              Ready to Amplify Your Creative Journey?
            </h2>
            <p className="text-xl text-white drop-shadow-md">
              Join ShowCase today and transform how you share your work, connect with peers, and discover new opportunities.
            </p>
            <div className="pt-4">
              <Link to="/dashboard">
                <Button size="lg" className="gradient-primary text-white hover:opacity-90 transition-opacity shadow-xl">
                  Start Your Showcase Now!
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-bold gradient-instagram text-gradient">ShowCase</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Company</a>
              <a href="#" className="hover:text-foreground transition-colors">Resources</a>
              <a href="#" className="hover:text-foreground transition-colors">Legal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    icon: Zap,
    title: "AI-Powered Portfolio Builder",
    description: "Upload your resume and let AI generate a stunning portfolio in seconds."
  },
  {
    icon: Users,
    title: "Connect & Collaborate",
    description: "Join a vibrant community of creators and network with peers."
  },
  {
    icon: Target,
    title: "Recruiter Access & Visibility",
    description: "Get discovered by top companies seeking talented professionals."
  },
  {
    icon: Lightbulb,
    title: "Inspire & Be Inspired",
    description: "Explore creative projects and gain fresh perspectives."
  }
];

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Senior Developer at TechCorp",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    quote: "ShowCase transformed how I present my work. The AI portfolio builder is a game-changer, saving countless hours on portfolio design."
  },
  {
    name: "Samantha Lee",
    role: "Product Designer, Creative",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    quote: "Finally, a platform that truly understands creative professionals. The networking features and community have been invaluable."
  },
  {
    name: "Michael Chen",
    role: "Founder at Innovation Labs",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    quote: "Recruiting has never been easier. I quickly identify top talent thanks to the rich, interactive portfolios on ShowCase."
  }
];

export default Landing;
