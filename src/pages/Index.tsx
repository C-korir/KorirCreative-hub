import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import CollaborationsSection from "@/components/portfolio/CollaborationsSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <CollaborationsSection />
      <ContactSection />

      <footer className="py-8 px-6 border-t border-border/50 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Collins Korir. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
