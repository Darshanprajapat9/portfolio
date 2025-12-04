import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { FooterSection } from "@/components/sections/FooterSection";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ProjectsSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Projects;
