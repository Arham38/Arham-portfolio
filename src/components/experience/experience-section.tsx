"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, CheckCircle2, Calendar, MapPin, ExternalLink } from "lucide-react";
import { EXPERIENCES } from "@/content/experience";

export function ExperienceSection() {
  return (
    <Section id="experience" className="border-t border-border/60">
      <Container>
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-16">
          <Reveal delay={0.05}>
            <Badge variant="accent">Trajectory</Badge>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-h2 tracking-tight">Experience & Education</h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-body text-muted max-w-2xl leading-relaxed">
              Proven engineering impact in production environments and rigorous foundational computer science education.
            </p>
          </Reveal>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-border/80 pl-6 sm:pl-10 ml-3 sm:ml-6 space-y-12 sm:space-y-16">
          {EXPERIENCES.map((item, idx) => {
            const isWork = item.type === "work";

            return (
              <div key={item.id} className="relative group">
                {/* Timeline Node Dot */}
                <div
                  className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-bg border-2 border-accent group-hover:scale-125 group-hover:bg-accent group-hover:shadow-[0_0_12px_rgba(108,99,255,0.6)] transition-all duration-250"
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent group-hover:bg-white transition-colors" />
                </div>

                <Reveal delay={0.1 + idx * 0.1}>
                  <Card className="space-y-6">
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-heading font-bold text-xl sm:text-2xl text-text">
                            {item.role}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          <span className="font-semibold text-accent text-sm sm:text-base">
                            {item.organization}
                          </span>

                          {item.organizationUrl && (
                            <a
                              href={item.organizationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted hover:text-accent transition-colors"
                              aria-label={`Visit ${item.organization}`}
                            >
                              <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          )}

                          <span className="text-border" aria-hidden="true">·</span>

                          <span className="inline-flex items-center gap-1 font-mono text-xs text-muted">
                            <MapPin className="h-3 w-3" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 sm:self-start">
                        {isWork ? (
                          <Badge variant="accent">
                            <Briefcase className="h-3 w-3 mr-1" />
                            {item.badge}
                          </Badge>
                        ) : (
                          <Badge variant="outline">
                            <GraduationCap className="h-3 w-3 mr-1" />
                            {item.badge}
                          </Badge>
                        )}

                        <span className="font-mono text-xs text-muted flex items-center gap-1.5 bg-surface-2 px-2.5 py-1 rounded-[6px] border border-border">
                          <Calendar className="h-3 w-3 text-accent" />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    {/* Impact Bullets: Outcome-First */}
                    <div className="space-y-3">
                      <span className="font-mono text-xs font-semibold text-muted uppercase tracking-wider block">
                        {isWork ? "Engineering Outcomes & Impact" : "Academic Focus & Core Foundations"}
                      </span>

                      <ul className="space-y-3">
                        {item.impactBullets.map((bullet, bulletIdx) => (
                          <li
                            key={bulletIdx}
                            className="flex items-start gap-3 text-body text-sm text-text leading-relaxed"
                          >
                            <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies / Competencies Tags */}
                    {item.techUsed && (
                      <div className="pt-2 border-t border-border/40 flex flex-wrap items-center gap-1.5">
                        <span className="font-mono text-[11px] text-muted mr-1">Stack:</span>
                        {item.techUsed.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-xs px-2 py-0.5 rounded-[6px] bg-surface-2 border border-border/60 text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </Card>
                </Reveal>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
