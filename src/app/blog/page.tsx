import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Clock, Calendar, ArrowRight, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "@/content/blog";

export const metadata: Metadata = {
  title: "Engineering Notes & Insights | Muhammad Arham",
  description:
    "Technical deep dives into PostgreSQL RLS, FinTech precision arithmetic, Docker sandboxes, and automated QA.",
};

export default function BlogIndexPage() {
  return (
    <div className="relative min-h-screen bg-bg text-text selection:bg-accent/20 selection:text-accent">
      <Navbar />

      <main className="pb-24">
        {/* Header Section */}
        <Section className="pt-12 pb-16 lg:pt-20 lg:pb-20 border-b border-border/50">
          <Container>
            <div className="space-y-4 max-w-3xl">
              <Reveal delay={0.05}>
                <Badge variant="accent">
                  <BookOpen className="h-3 w-3 mr-1" />
                  Engineering Notes
                </Badge>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-hero text-text font-heading tracking-tight">
                  Architecture & Insights
                </h1>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="text-body text-muted leading-relaxed">
                  Real engineering retrospectives on building high-concurrency e-commerce systems, database row-level security, sandboxed code execution, and automated testing rigor.
                </p>
              </Reveal>
            </div>
          </Container>
        </Section>

        {/* Post Grid */}
        <Section className="py-16">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {BLOG_POSTS.map((post, idx) => (
                <Reveal key={post.slug} delay={0.1 + idx * 0.08} className="h-full flex">
                  <Link href={`/blog/${post.slug}`} className="w-full">
                    <Card className="h-full flex flex-col justify-between p-6 sm:p-8 space-y-6 hover:border-accent group">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs font-mono text-muted">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5 text-accent" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5 text-muted" />
                            {post.readingTime}
                          </span>
                        </div>

                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-text group-hover:text-accent transition-colors leading-snug">
                          {post.title}
                        </h2>

                        <p className="text-body text-sm text-muted leading-relaxed line-clamp-3">
                          {post.summary}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[11px] px-2 py-0.5 rounded-[6px] bg-surface-2 border border-border text-muted font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border/50 flex items-center justify-between font-mono text-xs text-accent">
                        <span>Read technical deep dive</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Card>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
