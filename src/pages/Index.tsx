import { Navbar } from "@/components/Navbar";
import { CursorFollower } from "@/components/CursorFollower";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { FAQSection } from "@/components/sections/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <CursorFollower />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <FAQSection maxItems={5} />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
