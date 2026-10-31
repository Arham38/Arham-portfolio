"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Clock, CheckCircle2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons";
import { type Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  const isInProgress = project.status === "in-progress";

  return (
    <div className="group relative flex flex-col justify-between rounded-[14px] border border-border bg-surface p-6 sm:p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border-bright hover:shadow-[0_14px_36px_-6px_rgba(108,99,255,0.18)]">
      {/* Background Soft Accent Glow */}
      <div
        className="absolute -inset-px rounded-[14px] bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="space-y-4">
        {/* Top Header: Category & In-Progress Badge */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[11px] font-semibold tracking-wider text-muted uppercase">
            {project.category}
          </span>

          {isInProgress && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-amber-400 shadow-sm">
              <Clock className="h-3 w-3" />
              In Progress
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-text tracking-tight group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        {/* 2-Line Outcome */}
        <p className="text-body text-sm text-muted leading-relaxed line-clamp-3">
          {project.outcome}
        </p>

        {/* Tech Pills (Max 5, JetBrains Mono) */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-2 py-0.5 rounded-[6px] bg-surface-2 border border-border text-muted font-medium group-hover:border-accent/30 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Quality Badges Row */}
        {project.qualityBadges && (
          <div className="flex flex-wrap items-center gap-1.5 pt-1 font-mono text-[10px] text-muted">
            <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-surface-2 border border-border">
              <CheckCircle2 className="h-2.5 w-2.5 text-success" />
              <span>{project.qualityBadges.tests}</span>
            </span>
            <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-surface-2 border border-border">
              <Shield className="h-2.5 w-2.5 text-accent" />
              <span>{project.qualityBadges.coverage}</span>
            </span>
            <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-surface-2 border border-border">
              <span className="h-1 w-1 rounded-full bg-success" />
              <span>CI</span>
            </span>
          </div>
        )}
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-border/50 mt-6">
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="primary"
              size="sm"
              rightIcon={<ArrowUpRight className="h-3.5 w-3.5" />}
              className="font-mono text-xs h-8 px-3"
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
              size="sm"
              leftIcon={<GithubIcon className="h-3.5 w-3.5" />}
              rightIcon={<ArrowUpRight className="h-3.5 w-3.5" />}
              className="font-mono text-xs h-8 px-3"
            >
              GitHub
            </Button>
          </a>
        )}

        <Link href={project.links.caseStudy} className="ml-auto">
          <Button
            variant="ghost"
            size="sm"
            rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
            className="font-mono text-xs h-8 px-3 text-accent hover:text-accent"
          >
            Case Study
          </Button>
        </Link>
      </div>
    </div>
  );
}
