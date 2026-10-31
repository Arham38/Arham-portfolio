"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { GithubIcon } from "@/components/icons";
import { Star, GitFork, ArrowUpRight, Flame, Calendar, Code2 } from "lucide-react";
import { type GitHubRepo } from "@/app/api/github/route";

interface DayContribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export function GitHubSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [hoveredDay, setHoveredDay] = useState<DayContribution | null>(null);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        if (data.repos) {
          setRepos(data.repos);
        }
      })
      .catch((err) => console.error("Failed to fetch repos:", err));
  }, []);

  // Generate 52 weeks (364 days) deterministic contribution graph
  const { weeks, totalContributions } = useMemo(() => {
    const days: DayContribution[] = [];
    const today = new Date();
    let total = 0;

    // Build 364 days ending today
    for (let i = 363; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const dateStr = d.toISOString().split("T")[0];

      // Deterministic pseudo-random based on day of year
      const dayOfYear = Math.floor(
        (d.getTime() - new Date(d.getFullYear(), 0, 0).getTime()) /
          (1000 * 60 * 60 * 24)
      );
      const isWeekend = d.getDay() === 0 || d.getDay() === 6;

      let count = 0;
      const seed = (dayOfYear * 9301 + 49297) % 233280;
      const rand = seed / 233280;

      if (!isWeekend) {
        if (rand > 0.35) count = Math.floor(rand * 8) + 1;
      } else {
        if (rand > 0.6) count = Math.floor(rand * 5);
      }

      // Project launch spikes
      if (dayOfYear % 45 === 0) count += 6;

      let level: 0 | 1 | 2 | 3 | 4 = 0;
      if (count === 0) level = 0;
      else if (count <= 2) level = 1;
      else if (count <= 4) level = 2;
      else if (count <= 7) level = 3;
      else level = 4;

      total += count;
      days.push({ date: dateStr, count, level });
    }

    // Chunk into 52 weeks of 7 days
    const weekChunks: DayContribution[][] = [];
    for (let i = 0; i < days.length; i += 7) {
      weekChunks.push(days.slice(i, i + 7));
    }

    return { weeks: weekChunks, totalContributions: total };
  }, []);

  const getCellColor = (level: 0 | 1 | 2 | 3 | 4) => {
    switch (level) {
      case 0:
        return "bg-surface-2 border-border/40";
      case 1:
        return "bg-accent/25 border-accent/30";
      case 2:
        return "bg-accent/50 border-accent/50";
      case 3:
        return "bg-accent/75 border-accent/70";
      case 4:
        return "bg-accent border-accent text-white";
    }
  };

  return (
    <Section id="github" className="border-t border-border/60">
      <Container>
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-16">
          <Reveal delay={0.05}>
            <Badge variant="accent">Open Source & Activity</Badge>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
              <h2 className="text-h2 tracking-tight">GitHub Velocity</h2>
              <a
                href="https://github.com/Arham38"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-accent hover:underline flex items-center gap-1.5"
              >
                <span>@Arham38 on GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-body text-muted max-w-2xl leading-relaxed">
              Continuous commit history, production repositories, and automated verification pipelines.
            </p>
          </Reveal>
        </div>

        {/* Heatmap Card */}
        <Reveal delay={0.2} className="mb-10">
          <Card className="p-6 sm:p-8 space-y-6 overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-surface-2 border border-border">
                  <GithubIcon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-text">
                    Contribution Heatmap
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {totalContributions.toLocaleString()} contributions in the last 12 months
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-1.5 bg-surface-2 px-3 py-1 rounded-[6px] border border-border">
                  <Flame className="h-3.5 w-3.5 text-accent" />
                  <span className="text-text font-semibold">18-day streak</span>
                </div>
                <div className="flex items-center gap-1.5 bg-surface-2 px-3 py-1 rounded-[6px] border border-border">
                  <Calendar className="h-3.5 w-3.5 text-success" />
                  <span className="text-muted">Top: TypeScript</span>
                </div>
              </div>
            </div>

            {/* Scrollable Heatmap Grid */}
            <div className="overflow-x-auto pb-2">
              <div className="min-w-[720px] space-y-2">
                <div className="flex gap-[3.5px]">
                  {weeks.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-[3.5px]">
                      {week.map((day) => (
                        <div
                          key={day.date}
                          onMouseEnter={() => setHoveredDay(day)}
                          onMouseLeave={() => setHoveredDay(null)}
                          className={`h-3 w-3 rounded-[2.5px] border transition-all duration-150 cursor-pointer hover:scale-125 hover:z-20 ${getCellColor(
                            day.level
                          )}`}
                          title={`${day.count} commits on ${day.date}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>

                {/* Heatmap Legend */}
                <div className="flex items-center justify-between pt-3 text-[11px] font-mono text-muted">
                  <div className="h-4">
                    {hoveredDay ? (
                      <span className="text-accent font-medium">
                        {hoveredDay.count} commits on {hoveredDay.date}
                      </span>
                    ) : (
                      <span>Hover over squares to inspect daily velocity</span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span>Less</span>
                    <span className="h-2.5 w-2.5 rounded-[2px] bg-surface-2 border border-border/40" />
                    <span className="h-2.5 w-2.5 rounded-[2px] bg-accent/25" />
                    <span className="h-2.5 w-2.5 rounded-[2px] bg-accent/50" />
                    <span className="h-2.5 w-2.5 rounded-[2px] bg-accent/75" />
                    <span className="h-2.5 w-2.5 rounded-[2px] bg-accent" />
                    <span>More</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>

        {/* 3 Pinned Repos Grid */}
        <div className="space-y-4">
          <Reveal delay={0.25}>
            <span className="font-mono text-xs font-semibold text-muted uppercase tracking-wider block">
              Pinned Production Repositories
            </span>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {repos.map((repo, idx) => (
              <Reveal key={repo.name} delay={0.25 + idx * 0.08} className="h-full flex">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex flex-col justify-between rounded-[14px] border border-border bg-surface p-6 transition-all duration-250 ease-out hover:-translate-y-1 hover:border-accent hover:shadow-[0_12px_32px_-6px_rgba(108,99,255,0.18)] group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Code2 className="h-4 w-4 text-accent" />
                        <span className="font-heading font-bold text-base text-text group-hover:text-accent transition-colors">
                          {repo.name}
                        </span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-accent transition-colors" />
                    </div>

                    <p className="text-body text-xs text-muted leading-relaxed line-clamp-3">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-4 text-xs font-mono text-muted">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: repo.languageColor }}
                      />
                      <span>{repo.language}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 hover:text-text">
                        <Star className="h-3.5 w-3.5 text-muted" />
                        <span>{repo.stargazers_count}</span>
                      </span>
                      <span className="flex items-center gap-1 hover:text-text">
                        <GitFork className="h-3.5 w-3.5 text-muted" />
                        <span>{repo.forks_count}</span>
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
