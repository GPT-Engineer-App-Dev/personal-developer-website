import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Blog() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-lg">Check out my latest blog posts.</p>
        <ul className="list-disc list-inside">
          <li>Blog Post 1 - <Link to="/blog/post-1" className="text-blue-500">Read More</Link></li>
          <li>Blog Post 2 - <Link to="/blog/post-2" className="text-blue-500">Read More</Link></li>
          <li>Blog Post 3 - <Link to="/blog/post-3" className="text-blue-500">Read More</Link></li>
        </ul>
        <Button as={Link} to="/contact" variant="primary">
          Get in Touch
        </Button>
      </section>
    </div>
  );
}

export default Blog;