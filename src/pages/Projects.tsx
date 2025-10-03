import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "AI-Driven Optimization for Sustainable Manufacturing",
    description: "Developing machine learning models to optimize manufacturing processes, reducing energy consumption and waste generation.",
    tags: ["Machine Learning", "Optimization", "Sustainability"],
    status: "Ongoing",
  },
  {
    title: "Cheminformatics for Green Chemistry",
    description: "Using computational chemistry and AI to predict environmentally friendly chemical synthesis pathways.",
    tags: ["Cheminformatics", "AI", "Green Chemistry"],
    status: "Ongoing",
  },
  {
    title: "Resource Allocation in Circular Economy Systems",
    description: "Multi-objective optimization framework for resource allocation in circular economy supply chains.",
    tags: ["Optimization", "Circular Economy", "Operations Research"],
    status: "Published",
  },
  {
    title: "Predictive Maintenance for Industrial Sustainability",
    description: "Deep learning models for predictive maintenance to extend equipment lifetime and reduce environmental impact.",
    tags: ["Deep Learning", "Predictive Analytics", "Industry 4.0"],
    status: "Completed",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
              Research Projects
            </h1>
            <p className="text-lg text-muted-foreground">
              Current and completed research initiatives in AI for sustainability
            </p>
          </div>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant={project.status === "Ongoing" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-base mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
