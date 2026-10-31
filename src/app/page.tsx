import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { ProjectsSection } from "@/components/projects/projects-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { SkillsSection } from "@/components/skills/skills-section";
import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/footer/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg text-text-primary selection:bg-accent/15 selection:text-accent">
      {/* 1. Navbar: Sticky, clean, 1px bottom border */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Projects */}
        <ProjectsSection />

        {/* 4. Experience */}
        <ExperienceSection />

        {/* 5. Skills */}
        <SkillsSection />

        {/* 6. Contact */}
        <ContactSection />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
