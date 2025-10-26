import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import posts from "@/lib/blogs";

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
              Insights and discussions on AI, sustainability, and data science
            </p>
          </div>

          <div className="grid gap-6">
            {posts.map((post) => (
              <Card key={post.slug}>
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-4">
                    <Link to={`/blogs/${post.slug}`}>
                      <Button variant="outline" className="gap-2">
                        Read
                        <ArrowRight size={16} />
                      </Button>
                    </Link>
                    <p className="text-sm text-muted-foreground">By {post.author}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
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