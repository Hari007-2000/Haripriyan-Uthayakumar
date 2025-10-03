import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award, Code } from "lucide-react";

const CV = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
              Curriculum Vitae
            </h1>
            <p className="text-lg text-muted-foreground">
              Academic and professional background
            </p>
          </div>

          <div className="space-y-8">
            {/* Education */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-primary" size={28} />
                  <CardTitle className="text-2xl">Education</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold">PhD in Computer Science</h3>
                  <p className="text-muted-foreground">University Name | 2021 - Present</p>
                  <p className="mt-2 text-sm">
                    Focus: AI for Sustainability, Sustainable Manufacturing, Optimization, and Cheminformatics
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Master of Science in Computer Science</h3>
                  <p className="text-muted-foreground">University Name | 2019 - 2021</p>
                  <p className="mt-2 text-sm">
                    Thesis: Machine Learning for Industrial Process Optimization
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Bachelor of Science in Computer Science</h3>
                  <p className="text-muted-foreground">University Name | 2015 - 2019</p>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Briefcase className="text-primary" size={28} />
                  <CardTitle className="text-2xl">Research Experience</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold">Research Assistant</h3>
                  <p className="text-muted-foreground">University Research Lab | 2021 - Present</p>
                  <ul className="mt-2 text-sm space-y-1 list-disc list-inside">
                    <li>Developing AI models for sustainable manufacturing optimization</li>
                    <li>Conducting research in cheminformatics and green chemistry</li>
                    <li>Publishing research in high-impact journals</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Research Intern</h3>
                  <p className="text-muted-foreground">Industry Partner | Summer 2022</p>
                  <ul className="mt-2 text-sm space-y-1 list-disc list-inside">
                    <li>Applied machine learning to real-world manufacturing problems</li>
                    <li>Collaborated with cross-functional teams</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Code className="text-primary" size={28} />
                  <CardTitle className="text-2xl">Technical Skills</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Programming Languages</h3>
                    <p className="text-sm text-muted-foreground">
                      Python, R, MATLAB, Julia, C++
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Machine Learning</h3>
                    <p className="text-sm text-muted-foreground">
                      TensorFlow, PyTorch, Scikit-learn, Keras
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Optimization</h3>
                    <p className="text-sm text-muted-foreground">
                      Gurobi, CPLEX, Pyomo, OR-Tools
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Cheminformatics</h3>
                    <p className="text-sm text-muted-foreground">
                      RDKit, ChemPy, OpenBabel
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Awards */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Award className="text-primary" size={28} />
                  <CardTitle className="text-2xl">Awards & Honors</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold">Best Paper Award</h3>
                  <p className="text-muted-foreground text-sm">International Conference on Sustainable AI | 2023</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Graduate Research Fellowship</h3>
                  <p className="text-muted-foreground text-sm">University Name | 2021-2024</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Outstanding Graduate Student Award</h3>
                  <p className="text-muted-foreground text-sm">Department of Computer Science | 2021</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CV;
