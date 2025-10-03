import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Machine Learning Approaches for Sustainable Manufacturing Process Optimization",
    authors: "Your Name, Co-Author A, Co-Author B",
    journal: "Journal of Cleaner Production",
    year: 2024,
    type: "Journal Article",
    doi: "10.1016/j.jclepro.2024.xxxxx",
  },
  {
    title: "AI-Enabled Cheminformatics for Green Synthesis Pathway Prediction",
    authors: "Your Name, Co-Author C",
    journal: "ACS Sustainable Chemistry & Engineering",
    year: 2023,
    type: "Journal Article",
    doi: "10.1021/acssuschemeng.xxxxx",
  },
  {
    title: "Multi-Objective Optimization Framework for Circular Economy Supply Chains",
    authors: "Your Name, Co-Author D, Co-Author E",
    journal: "Resources, Conservation and Recycling",
    year: 2023,
    type: "Journal Article",
    doi: "10.1016/j.resconrec.2023.xxxxx",
  },
  {
    title: "Deep Learning for Predictive Maintenance in Sustainable Manufacturing",
    authors: "Your Name, Co-Author F",
    conference: "International Conference on Sustainable AI",
    year: 2023,
    type: "Conference Paper",
  },
  {
    title: "A Review of AI Applications in Sustainable Manufacturing",
    authors: "Your Name",
    journal: "Sustainable Production and Consumption",
    year: 2022,
    type: "Review Article",
    doi: "10.1016/j.spc.2022.xxxxx",
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

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <FileText className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <CardTitle className="text-xl">{pub.title}</CardTitle>
                        <Badge variant="outline">{pub.type}</Badge>
                      </div>
                      <CardDescription className="mt-2 space-y-1">
                        <p className="text-sm">{pub.authors}</p>
                        <p className="text-sm font-medium">
                          {pub.journal || pub.conference} ({pub.year})
                        </p>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                {pub.doi && (
                  <CardContent>
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <ExternalLink size={16} />
                      DOI: {pub.doi}
                    </a>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Publications;
