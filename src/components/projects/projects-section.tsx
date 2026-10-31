import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  badge?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "jab-leather",
    title: "JAB LEATHER",
    description:
      "E-commerce platform with 14-category catalog, variants, cart, wishlist, checkout, USD/PKR currency engine, and Shopify-style admin.",
    image: "/projects/jab-leather.png",
    tech: ["React", "Node", "Express", "PostgreSQL", "Supabase"],
    liveUrl: "https://jableather.vercel.app",
    githubUrl: "https://github.com/Arham38/jab-leather",
  },
  {
    id: "codecraft-lms",
    title: "CodeCraft Academy LMS",
    description:
      "Interactive course platform with anti-cheat quizzes, attendance, gradebook, and role-based access control.",
    image: "/projects/codecraft-lms.png",
    tech: ["React", "Node", "Express", "MongoDB", "Playwright"],
    liveUrl: "https://codecraft-lms.vercel.app",
    githubUrl: "https://github.com/Arham38/codecraft-lms",
  },
  {
    id: "sme-erp",
    title: "SME ERP",
    description:
      "Enterprise resource planning solution with 8 modules, 40+ REST APIs, and role-based access control.",
    image: "/projects/sme-erp.png",
    tech: ["React", "Node", "Express", "MongoDB", "MERN"],
    liveUrl: "https://sme-erp.vercel.app",
    githubUrl: "https://github.com/Arham38/sme-erp",
  },
  {
    id: "authentix-ai",
    title: "AuthentixAI",
    badge: "In Progress",
    description:
      "Deepfake video and audio analyzer for identity verification. Final year project developed in a team of 3.",
    image: "/projects/authentix-ai.png",
    tech: ["Next.js", "FastAPI", "MongoDB", "PyTorch (planned)"],
    githubUrl: "https://github.com/Arham38/authentix-ai",
  },
];

export function ProjectsSection() {
  return (
    <Section id="projects" className="border-b border-border">
      <Container>
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-h2 text-text-primary">Projects</h2>
        </div>

        {/* 2-Column Equal-Height Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-[12px] border border-border bg-surface p-6 transition-colors duration-150 hover:border-border-hover"
            >
              <div className="space-y-4">
                {/* Screenshot Placeholder */}
                <div className="relative aspect-video w-full rounded-[8px] border border-border overflow-hidden bg-surface-2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 520px"
                    className="object-cover"
                  />
                </div>

                {/* Title & Badge */}
                <div className="flex items-center justify-between gap-2 pt-1">
                  <h3 className="text-h3 text-text-primary">
                    {project.title}
                  </h3>
                  {project.badge && (
                    <span className="font-sans text-xs px-2 py-0.5 rounded border border-border text-text-tertiary">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* 2-Line Description */}
                <p className="text-body text-sm line-clamp-2">
                  {project.description}
                </p>

                {/* Max 5 Tech Tags (12px JetBrains Mono) */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.slice(0, 5).map((t) => (
                    <Badge key={t} variant="tag">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-border font-sans text-sm">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline flex items-center gap-1 font-medium"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-text-primary flex items-center gap-1.5 font-medium transition-colors"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
