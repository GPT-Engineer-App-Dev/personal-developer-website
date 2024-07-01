import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Index() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to My Developer Portfolio</h1>
        <p className="text-lg">Hi, I'm [Your Name], a passionate developer.</p>
        <Button as={Link} to="/about" variant="primary">
          Learn More About Me
        </Button>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-muted-foreground">A brief introduction about myself.</p>
        <Button as={Link} to="/about" variant="outline">
          Read More
        </Button>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Highlighted Projects</h2>
        <p className="text-muted-foreground">Some of my recent work.</p>
        <Button as={Link} to="/projects" variant="outline">
          View Projects
        </Button>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Recent Blog Posts</h2>
        <p className="text-muted-foreground">Check out my latest articles.</p>
        <Button as={Link} to="/blog" variant="outline">
          Read Blog
        </Button>
      </section>
    </div>
  );
}

export default Index;