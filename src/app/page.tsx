import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { ProjectsSection } from "@/components/projects/projects-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { SkillsSection } from "@/components/skills/skills-section";
import { GitHubSection } from "@/components/github/github-section";
import { AboutSection } from "@/components/about/about-section";
import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/footer/footer";
import { BackToTop } from "@/components/ui/back-to-top";
import { CommandPalette } from "@/components/command-palette/command-palette";
import { AIChatBubble } from "@/components/chatbot/ai-chat-bubble";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-bg text-text selection:bg-accent/20 selection:text-accent">
      {/* Global Interactive Command Palette (Ctrl+K / Cmd+K) */}
      <CommandPalette />

      {/* Shell: 72px Sticky Translucent Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content">
        {/* Phase 1: Hero Section */}
        <Hero />

        {/* Phase 2: Selected Work Projects Section with CI/Test Badges */}
        <ProjectsSection />

        {/* Phase 3: Trajectory & Experience Timeline */}
        <ExperienceSection />

        {/* Phase 3: Technical Arsenal 3x2 Grid */}
        <SkillsSection />

        {/* Phase 5: GitHub Activity Heatmap & Pinned Repos */}
        <GitHubSection />

        {/* Phase 3: Background & About */}
        <AboutSection />

        {/* Phase 4: Contact & Direct Inquiries */}
        <ContactSection />
      </main>

      {/* Shell Footer */}
      <Footer />

      {/* Dynamic Actions */}
      <AIChatBubble />
      <BackToTop />
    </div>
  );
}
