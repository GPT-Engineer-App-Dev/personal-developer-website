import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Projects() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-lg">Here are some of my recent projects.</p>
        <ul className="list-disc list-inside">
          <li>Project 1 - Description, Technologies Used, <a href="https://github.com/your-repo" className="text-blue-500">GitHub</a></li>
          <li>Project 2 - Description, Technologies Used, <a href="https://github.com/your-repo" className="text-blue-500">GitHub</a></li>
          <li>Project 3 - Description, Technologies Used, <a href="https://github.com/your-repo" className="text-blue-500">GitHub</a></li>
        </ul>
        <Button as={Link} to="/contact" variant="primary">
          Get in Touch
        </Button>
      </section>
    </div>
  );
}

export default Projects;