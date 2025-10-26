import React from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import posts from "@/lib/blogs";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Post not found</h2>
            <p className="text-muted-foreground mb-6">We couldn't find the requested blog post.</p>
            <Link to="/blogs">
              <Button variant="outline">Back to blogs</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <div className="text-muted-foreground mb-4">{post.date} — By {post.author}</div>
              <div>{post.content}</div>
              <div className="mt-8">
                <Link to="/blogs">
                  <Button variant="ghost">← Back to blogs</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
