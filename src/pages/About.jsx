import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function About() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-lg">Hi, I'm [Your Name], a passionate developer with experience in [Your Skills].</p>
        <p className="text-lg">I have worked on various projects involving [Technologies Used].</p>
        <Button as={Link} to="/contact" variant="primary">
          Get in Touch
        </Button>
      </section>
    </div>
  );
}

export default About;