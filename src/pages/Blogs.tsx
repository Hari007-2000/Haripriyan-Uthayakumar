import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
              Research Blog
            </h1>
            <p className="text-lg text-muted-foreground">
              Insights and discussions on AI, sustainability, and bio-manufacturing
            </p>
          </div>

          {/* Featured Blog Post */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">
                The Convergence of AI and Sustainable Bio-Manufacturing: An Interdisciplinary Perspective
              </CardTitle>
              <CardDescription>Published on October 4, 2025</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <div className="space-y-6">
                <p>
                  The intersection of artificial intelligence and sustainable bio-manufacturing represents 
                  one of the most promising frontiers in modern scientific research. As we face growing 
                  environmental challenges and the need for more sustainable industrial practices, this 
                  interdisciplinary field offers innovative solutions that could revolutionize how we 
                  approach manufacturing.
                </p>

                <h3 className="text-xl font-semibold mt-6">The Interdisciplinary Nature</h3>
                <p>
                  At its core, this research field brings together multiple disciplines:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Artificial Intelligence:</strong> Deep learning models and optimization 
                    algorithms that can predict and enhance bio-manufacturing processes.
                  </li>
                  <li>
                    <strong>Chemical Engineering:</strong> Understanding and optimizing reaction 
                    pathways and process parameters.
                  </li>
                  <li>
                    <strong>Biology:</strong> Working with biological systems and understanding 
                    cellular processes.
                  </li>
                  <li>
                    <strong>Environmental Science:</strong> Ensuring processes are sustainable and 
                    environmentally friendly.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">Current Challenges and Opportunities</h3>
                <p>
                  The field faces several key challenges that present exciting research opportunities:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    <strong>Process Optimization:</strong> Developing AI models that can optimize 
                    complex bio-manufacturing processes in real-time while considering multiple 
                    objectives like yield, quality, and environmental impact.
                  </li>
                  <li>
                    <strong>Scalability:</strong> Creating solutions that work not just in the 
                    laboratory but can be scaled to industrial production while maintaining 
                    sustainability.
                  </li>
                  <li>
                    <strong>Data Integration:</strong> Combining diverse data types from different 
                    disciplines to create comprehensive models and insights.
                  </li>
                </ol>

                <h3 className="text-xl font-semibold mt-6">Future Directions</h3>
                <p>
                  The future of this field holds immense potential. Some promising directions include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Development of autonomous bio-manufacturing systems that can self-optimize and 
                    adapt to changing conditions.
                  </li>
                  <li>
                    Integration of machine learning with real-time monitoring systems for improved 
                    process control.
                  </li>
                  <li>
                    Creation of more sustainable and efficient production methods for 
                    pharmaceuticals and chemicals.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">Impact on Industry and Society</h3>
                <p>
                  The implications of this research extend far beyond academic interest. By combining 
                  AI with sustainable bio-manufacturing, we can:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reduce environmental impact of industrial processes</li>
                  <li>Lower production costs while increasing efficiency</li>
                  <li>Create more sustainable supply chains</li>
                  <li>Accelerate the development of new sustainable materials and products</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">Conclusion</h3>
                <p>
                  The integration of AI and sustainable bio-manufacturing represents a crucial step 
                  toward a more sustainable future. Through interdisciplinary collaboration and 
                  continued research, we can develop solutions that not only advance scientific 
                  knowledge but also contribute to solving real-world environmental challenges.
                </p>
              </div>

              <div className="mt-8 border-t pt-6">
                <p className="text-muted-foreground">
                  <em>Written by Haripriyan Uthayakumar</em>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <Button variant="outline" className="gap-2">
              Subscribe to Updates
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blogs;