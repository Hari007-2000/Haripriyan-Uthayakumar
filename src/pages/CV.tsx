import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award, Code, ArrowRight } from "lucide-react";
import profileImage from "@/assets/image.png";

const CV = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                  Curriculum Vitae
                </h1>
                <h2 className="text-3xl md:text-4xl font-serif mb-4 text-primary tracking-tight">
                  Haripriyan Uthayakumar
                </h2>
                <p className="text-lg text-muted-foreground">
                  Academic and professional background
                </p>
              </div>
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <img
                  src={profileImage}
                  alt="Haripriyan Uthayakumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-muted-foreground">
                I'm a PhD student at Purdue University, focusing on the intersection of AI and sustainable bio-manufacturing. 
                My research aims to develop innovative solutions for optimizing manufacturing processes while minimizing environmental impact.
              </p>
            </div>
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
                  <h3 className="text-lg font-semibold">PhD in Bio-engineering</h3>
                  <p className="text-muted-foreground">Purdue University, West Lafayette, United States | Present</p>
                  <p className="mt-2 text-sm">
                    Focus: AI for Sustainable Bio-Manufacturing, Process Optimization, and Cheminformatics
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">MS in Bio-engineering</h3>
                  <p className="text-muted-foreground">Purdue University, West Lafayette, United States</p>
                  <p className="mt-2 text-sm">
                    Focus: Sustainable Manufacturing and Process Engineering
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">BTech in Chemical Engineering</h3>
                  <p className="text-muted-foreground">Anna University, Chennai, India</p>
                  <p className="mt-2 text-sm">
                    Focus: Chemical Process Engineering and Industrial Chemistry
                  </p>
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
                    <h3 className="font-semibold mb-2">Bio-Process Engineering</h3>
                    <p className="text-sm text-muted-foreground">
                      Process Design, Scale-up, Optimization, Sustainable Manufacturing
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Artificial Intelligence</h3>
                    <p className="text-sm text-muted-foreground">
                      Machine Learning, Deep Learning, Process Optimization, Data Analytics
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Chemical Engineering</h3>
                    <p className="text-sm text-muted-foreground">
                      Process Control, Unit Operations, Reaction Engineering
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Software & Tools</h3>
                    <p className="text-sm text-muted-foreground">
                      Python, MATLAB, Aspen Plus, COMSOL, TensorFlow
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Publications */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                    width="28"
                    height="28"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  </svg>
                  <CardTitle className="text-2xl">Publications</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">QRChEM: A Deep Learning Framework for Materials Property Prediction and Design Using QR Codes</h3>
                  <p className="text-muted-foreground text-sm">ACS Engineering Au | 2023</p>
                  <p className="mt-1 text-sm">DOI: <a href="https://doi.org/10.1021/acsengineeringau.3c00055" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">10.1021/acsengineeringau.3c00055</a></p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Machine learning approaches for sustainable bioprocess optimization</h3>
                  <p className="text-muted-foreground text-sm">ACS Sustainable Chemistry & Engineering | 2022</p>
                  <p className="mt-1 text-sm">Authors: Uthayakumar, H., et al.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Deep learning for pharmaceutical process control and optimization</h3>
                  <p className="text-muted-foreground text-sm">Journal of Process Control | 2021</p>
                  <p className="mt-1 text-sm">Authors: Uthayakumar, H., et al.</p>
                </div>
                
                <div className="mt-4">
                  <a
                    href="https://scholar.google.com/citations?user=K_mqgDwAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 flex items-center gap-2"
                  >
                    View all publications on Google Scholar
                    <ArrowRight size={16} />
                  </a>
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
                  <h3 className="text-lg font-semibold">Graduate Research Excellence Award</h3>
                  <p className="text-muted-foreground text-sm">Purdue University | 2023</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Outstanding Research Paper Award</h3>
                  <p className="text-muted-foreground text-sm">Department of Bio-Engineering | 2022</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Academic Excellence Award</h3>
                  <p className="text-muted-foreground text-sm">Anna University | 2020</p>
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
