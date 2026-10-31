import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  Lock,
  Terminal,
} from "lucide-react";
import { Navbar } from "@/components/navbar/navbar";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GithubIcon } from "@/components/icons";
import { ArchitectureDiagram } from "@/components/projects/architecture-diagram";
import { PROJECTS, getProjectBySlug } from "@/content/projects";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Case Study | Muhammad Arham`,
    description: project.outcome,
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Next / Previous Project Navigation calculation
  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const prevProject =
    currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject =
    currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  const isInProgress = project.status === "in-progress";

  return (
    <div className="relative min-h-screen bg-bg text-text selection:bg-accent/20 selection:text-accent">
      <Navbar />

      <main className="pb-24">
        {/* Back Link & Breadcrumbs */}
        <div className="border-b border-border/50 bg-surface/30 py-4">
          <Container>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Selected Work</span>
            </Link>
          </Container>
        </div>

        {/* 1. Hero Section */}
        <Section className="py-12 lg:py-16">
          <Container>
            <div className="space-y-6 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
                  {project.category}
                </span>

                {isInProgress ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 font-mono text-xs font-medium text-amber-400">
                    <Clock className="h-3 w-3" />
                    In Progress
                  </span>
                ) : (
                  <Badge variant="success" dot pulse>
                    Production Verified
                  </Badge>
                )}
              </div>

              <h1 className="text-hero text-text tracking-tight font-heading">
                {project.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted font-mono border-y border-border/60 py-3">
                <div>
                  <span className="text-muted/70 block text-xs">Role</span>
                  <span className="text-text font-medium">{project.role}</span>
                </div>
                <div className="h-6 w-px bg-border/60" />
                <div>
                  <span className="text-muted/70 block text-xs">Timeline</span>
                  <span className="text-text font-medium">{project.timeline}</span>
                </div>
                <div className="h-6 w-px bg-border/60" />
                <div>
                  <span className="text-muted/70 block text-xs">Architecture</span>
                  <span className="text-text font-medium">MERN / PostgreSQL / RLS</span>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="primary"
                      size="md"
                      rightIcon={<ArrowUpRight className="h-4 w-4" />}
                      className="font-mono"
                    >
                      Live Demo
                    </Button>
                  </a>
                )}

                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="md"
                      leftIcon={<GithubIcon className="h-4 w-4" />}
                      rightIcon={<ArrowUpRight className="h-4 w-4" />}
                      className="font-mono"
                    >
                      Source Code
                    </Button>
                  </a>
                )}
              </div>
            </div>

            {/* Visual Cover Mockup */}
            <div className="mt-12 rounded-[16px] border border-border bg-surface p-4 sm:p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#FF5F56]/80" />
                  <span className="h-3 w-3 rounded-full bg-[#FFBD2E]/80" />
                  <span className="h-3 w-3 rounded-full bg-[#27C93F]/80" />
                  <span className="ml-2 font-mono text-xs text-muted flex items-center gap-1.5">
                    <Lock className="h-3 w-3 text-accent" />
                    https://{project.slug}.internal/overview
                  </span>
                </div>
                <span className="font-mono text-xs text-muted">Client Release v2.0</span>
              </div>

              <div className="rounded-[10px] bg-surface-2 p-6 md:p-8 space-y-4 border border-border/50">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-lg font-bold text-text">
                    {project.title}
                  </h3>
                  <Badge variant="outline">Verified Architecture</Badge>
                </div>
                <p className="text-body text-muted text-sm max-w-2xl">
                  {project.outcome}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-bg border border-border text-text font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 2. Overview (Problem -> Solution in 3 sentences) */}
        <Section className="py-12 border-t border-border/50">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <Badge variant="accent" className="mb-2">
                  Executive Brief
                </Badge>
                <h2 className="text-h2">The Overview</h2>
              </div>
              <div className="md:col-span-8 space-y-6">
                <div className="rounded-[12px] border border-border bg-surface p-6 space-y-2">
                  <span className="font-mono text-xs font-semibold text-accent uppercase">
                    The Problem
                  </span>
                  <p className="text-body text-text leading-relaxed">
                    {project.overview.problem}
                  </p>
                </div>

                <div className="rounded-[12px] border border-accent/30 bg-accent-soft/30 p-6 space-y-2">
                  <span className="font-mono text-xs font-semibold text-accent uppercase">
                    The Engineering Solution
                  </span>
                  <p className="text-body text-text leading-relaxed">
                    {project.overview.solution}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 3. Key Metrics Row */}
        <Section className="py-12 border-t border-border/50 bg-surface/30">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-[12px] border border-border bg-surface p-5 text-center sm:text-left space-y-1 hover:border-accent/40 transition-colors"
                >
                  <span className="font-mono text-xs text-muted block">
                    {m.label}
                  </span>
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-accent">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* 4. Architecture Diagram */}
        <Section className="py-12 border-t border-border/50">
          <Container>
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-2">
                  System Design
                </Badge>
                <h2 className="text-h2">Architecture Overview</h2>
              </div>

              <ArchitectureDiagram
                title={project.architecture.title}
                description={project.architecture.description}
                layers={project.architecture.layers}
              />
            </div>
          </Container>
        </Section>

        {/* 5. Key Features Blocks */}
        <Section className="py-12 border-t border-border/50 bg-surface/20">
          <Container>
            <div className="space-y-8">
              <div>
                <Badge variant="accent" className="mb-2">
                  Functionality
                </Badge>
                <h2 className="text-h2">Key Features & Deep Dives</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feat) => (
                  <Card key={feat.title} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-accent px-2 py-0.5 rounded bg-accent-soft border border-accent/20">
                        {feat.tag}
                      </span>
                      <Zap className="h-4 w-4 text-muted" />
                    </div>

                    <h3 className="font-heading text-xl font-bold text-text">
                      {feat.title}
                    </h3>

                    <p className="text-body text-sm text-muted leading-relaxed">
                      {feat.description}
                    </p>

                    <div className="pt-2 border-t border-border/50 flex items-center gap-2 font-mono text-xs text-text">
                      <CheckCircle2 className="h-3.5 w-3.5 text-success shrink-0" />
                      <span>{feat.highlight}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* 6. Challenges & Solutions */}
        <Section className="py-12 border-t border-border/50">
          <Container>
            <div className="space-y-8">
              <div>
                <Badge variant="outline" className="mb-2">
                  Critical Thinking
                </Badge>
                <h2 className="text-h2">Engineering Challenges & Solutions</h2>
                <p className="text-body text-muted max-w-2xl mt-1">
                  How complex bottlenecks and distributed state dilemmas were systematically diagnosed and resolved.
                </p>
              </div>

              <div className="space-y-6">
                {project.challenges.map((c, i) => (
                  <div
                    key={i}
                    className="rounded-[14px] border border-border bg-surface p-6 sm:p-8 space-y-4 hover:border-border-bright transition-colors"
                  >
                    <div className="flex items-center gap-2 font-mono text-xs text-accent">
                      <Terminal className="h-4 w-4" />
                      <span>Hurdle 0{i + 1}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                      <div className="md:col-span-6 space-y-2">
                        <span className="font-mono text-xs text-muted block uppercase">
                          The Challenge
                        </span>
                        <p className="text-body text-sm text-text leading-relaxed font-medium">
                          {c.challenge}
                        </p>
                      </div>

                      <div className="md:col-span-6 space-y-2 border-t md:border-t-0 md:border-l border-border/60 pt-4 md:pt-0 md:pl-6">
                        <span className="font-mono text-xs text-accent block uppercase">
                          The Architectural Fix
                        </span>
                        <p className="text-body text-sm text-muted leading-relaxed">
                          {c.solution}
                        </p>
                        <div className="pt-2 text-xs font-mono text-success flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          <span>{c.result}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* 7. Security and Testing (The Differentiator) */}
        <Section className="py-12 border-t border-border/50 bg-surface/30">
          <Container>
            <div className="space-y-8">
              <div>
                <Badge variant="success" dot className="mb-2">
                  The Differentiator
                </Badge>
                <h2 className="text-h2">Security & Quality Assurance</h2>
                <p className="text-body text-muted max-w-2xl mt-1">
                  {project.securityAndTesting.differentiator}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Security Card */}
                <div className="rounded-[14px] border border-border bg-surface p-6 sm:p-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-accent" />
                    <h3 className="font-heading text-lg font-bold text-text">
                      Security Hardening
                    </h3>
                  </div>

                  <ul className="space-y-3 font-mono text-xs text-muted">
                    {project.securityAndTesting.security.map((sec, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{sec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testing Card */}
                <div className="rounded-[14px] border border-border bg-surface p-6 sm:p-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <h3 className="font-heading text-lg font-bold text-text">
                      Automated Testing Rigor
                    </h3>
                  </div>

                  <ul className="space-y-3 font-mono text-xs text-muted">
                    {project.securityAndTesting.testing.map((test, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-success mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 8. Tech Stack & What I'd Improve Next */}
        <Section className="py-12 border-t border-border/50">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Full Tech Stack */}
              <div className="md:col-span-6 space-y-6">
                <div>
                  <Badge variant="outline" className="mb-2">
                    Components
                  </Badge>
                  <h3 className="text-h3">Full Technology Stack</h3>
                </div>

                <div className="space-y-4">
                  {project.fullStack.map((cat) => (
                    <div
                      key={cat.category}
                      className="rounded-[10px] border border-border bg-surface p-4 space-y-2"
                    >
                      <span className="font-mono text-xs text-muted block uppercase">
                        {cat.category}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {cat.items.map((it) => (
                          <span
                            key={it}
                            className="font-mono text-xs px-2.5 py-1 rounded bg-surface-2 border border-border text-text font-medium"
                          >
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What I'd Improve Next */}
              <div className="md:col-span-6 space-y-6">
                <div>
                  <Badge variant="accent" className="mb-2">
                    Retrospective
                  </Badge>
                  <h3 className="text-h3">What I&apos;d Improve Next</h3>
                </div>

                <div className="rounded-[14px] border border-border bg-surface p-6 sm:p-7 space-y-4">
                  <p className="text-body text-sm text-muted leading-relaxed">
                    Production systems are never finished. Here are the prioritized engineering enhancements planned for next iterations:
                  </p>

                  <div className="space-y-3 font-mono text-xs text-text">
                    {project.improvements.map((imp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded bg-surface-2 border border-border/50"
                      >
                        <span className="text-accent font-bold">0{idx + 1}</span>
                        <span className="leading-relaxed">{imp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 9. Next / Previous Project Navigation */}
        <Section className="py-12 border-t border-border/50 bg-surface/20">
          <Container>
            <div className="space-y-4">
              <span className="font-mono text-xs text-muted block text-center">
                Explore More Projects
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Previous */}
                <Link
                  href={prevProject.links.caseStudy}
                  className="group rounded-[12px] border border-border bg-surface p-5 hover:border-accent transition-all duration-250 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-1.5 font-mono text-xs text-muted group-hover:text-accent">
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Previous Case Study</span>
                  </div>
                  <div className="font-heading font-bold text-lg text-text mt-2 group-hover:text-accent transition-colors">
                    {prevProject.title}
                  </div>
                </Link>

                {/* Next */}
                <Link
                  href={nextProject.links.caseStudy}
                  className="group rounded-[12px] border border-border bg-surface p-5 hover:border-accent transition-all duration-250 flex flex-col justify-between text-right"
                >
                  <div className="flex items-center justify-end gap-1.5 font-mono text-xs text-muted group-hover:text-accent">
                    <span>Next Case Study</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                  <div className="font-heading font-bold text-lg text-text mt-2 group-hover:text-accent transition-colors">
                    {nextProject.title}
                  </div>
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-xs font-mono text-muted">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span>© {new Date().getFullYear()} Muhammad Arham · Portfolio</span>
            <Link href="/#projects" className="text-accent hover:underline">
              Return to Top ↑
            </Link>
          </div>
        </Container>
      </footer>
    </div>
  );
}
