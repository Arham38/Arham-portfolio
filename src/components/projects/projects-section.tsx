"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { FeaturedProjectCard } from "./featured-project-card";
import { ProjectCard } from "./project-card";
import { PROJECTS } from "@/content/projects";

export function ProjectsSection() {
  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const gridProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <Section id="projects" className="border-t border-border/60">
      <Container>
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-16">
          <Reveal delay={0.05}>
            <Badge variant="accent">Portfolio</Badge>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-h2 tracking-tight">Selected Work</h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-body text-muted max-w-2xl leading-relaxed">
              Real products, real clients, tested and deployed.
            </p>
          </Reveal>
        </div>

        {/* Featured Card (Full-Width) */}
        <div className="mb-8">
          <Reveal delay={0.2}>
            <FeaturedProjectCard project={featuredProject} />
          </Reveal>
        </div>

        {/* 2-Column Grid (1 Column on Mobile) for Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridProjects.map((project, idx) => (
            <Reveal key={project.slug} delay={0.15 + idx * 0.08} className="h-full flex">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
