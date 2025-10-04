import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import qrchemImage from "@/assets/figures/QR code.png";
import microAlgaeImage from "@/assets/figures/micro-algae.png";
import nanoParticleImage from "@/assets/figures/nano-particle.png";

const publications = [
  {
    title: "QRChEM: A Deep Learning Framework for Materials Property Prediction and Design Using QR Codes",
    journal: "ACS Engineering Au",
    year: 2023,
    type: "Journal Article",
    doi: "10.1021/acsengineeringau.3c00055",
    description: "A novel approach combining QR code representation with deep learning for materials property prediction, enabling efficient and accurate molecular property predictions.",
    image: qrchemImage,
  },
  {
    title: "Modeling of CO₂ Fixation by Microalgae using Hybrid AI and Fuzzy Logic Methods",
    journal: "Environmental Science and Pollution Research",
    year: 2022,
    type: "Journal Article",
    doi: "10.1007/s11356-022-19683-0",
    description: "Novel hybrid approach combining AI, fuzzy logic, and genetic algorithms for optimizing microalgal carbon dioxide fixation processes.",
    image: microAlgaeImage,
  },
  {
    title: "Green Synthesis of Silver Nanoparticles: RSM-ANN-LM Hybrid Modeling",
    journal: "Chemical Physics Impact",
    year: 2023,
    type: "Journal Article",
    doi: "10.1016/j.chphi.2023.100231",
    description: "Advanced hybrid modeling approach combining RSM and neural networks for precise prediction of green-synthesized silver nanoparticle sizes.",
    image: nanoParticleImage,
  },
];

const Publications = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
              Publications
            </h1>
            <p className="text-lg text-muted-foreground">
              Peer-reviewed research articles and conference papers
            </p>
          </div>

          <div className="space-y-12">
            {publications.map((pub, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="aspect-video bg-muted rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                      <img 
                        src={pub.image}
                        alt={`${pub.title} visualization`}
                        className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                      <Badge className="w-fit" variant="outline">{pub.type}</Badge>
                      <h3 className="text-xl font-semibold leading-tight">{pub.title}</h3>
                      <p className="text-primary font-medium">{pub.journal} | {pub.year}</p>
                      <p className="text-sm text-muted-foreground">{pub.description}</p>
                      <p className="text-sm">
                        DOI: <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline underline-offset-4">{pub.doi}</a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="text-center pt-6 border-t">
              <a
                href="https://scholar.google.com/citations?user=K_mqgDwAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
              >
                View Complete Publication List on Google Scholar
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Publications;
