import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Brain, Leaf, FlaskConical, TrendingUp, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(30, 64, 128, 0.9), rgba(20, 184, 166, 0.8)), url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              AI for a Sustainable Future
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              PhD Research in Sustainable Manufacturing, Optimization, and Cheminformatics
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/projects">
                <Button size="lg" variant="secondary" className="gap-2">
                  View Projects
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/publications">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Publications
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              About My Research
            </h2>
            <p className="text-lg text-muted-foreground">
              I'm a PhD student exploring the intersection of artificial intelligence and sustainability. 
              My work focuses on developing innovative solutions for sustainable manufacturing, 
              leveraging machine learning, optimization techniques, and cheminformatics to address 
              critical environmental challenges in industrial processes.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Research Focus Areas
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Brain className="text-primary mb-2" size={40} />
                <CardTitle>AI & Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Developing advanced ML models for predictive analytics and decision-making in sustainable systems
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Leaf className="text-secondary mb-2" size={40} />
                <CardTitle>Sustainable Manufacturing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Optimizing manufacturing processes to reduce environmental impact and resource consumption
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <TrendingUp className="text-accent mb-2" size={40} />
                <CardTitle>Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Multi-objective optimization frameworks for complex industrial and environmental problems
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <FlaskConical className="text-primary mb-2" size={40} />
                <CardTitle>Cheminformatics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Computational chemistry approaches for green synthesis and sustainable chemical processes
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Let's Collaborate
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Interested in discussing research opportunities, collaborations, or my work? 
              Feel free to reach out.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gap-2">
                Get in Touch
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
