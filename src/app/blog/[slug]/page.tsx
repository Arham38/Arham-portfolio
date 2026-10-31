import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Clock, Calendar, ArrowRight, Code, ListTree } from "lucide-react";
import { BLOG_POSTS, getBlogPostBySlug } from "@/content/blog";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${post.title} | Muhammad Arham`,
    description: post.summary,
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const nextPost =
    currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : BLOG_POSTS[0];

  return (
    <div className="relative min-h-screen bg-bg text-text selection:bg-accent/20 selection:text-accent">
      <Navbar />

      <main className="pb-24">
        {/* Back Link */}
        <div className="border-b border-border/50 bg-surface/30 py-4">
          <Container>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Engineering Notes</span>
            </Link>
          </Container>
        </div>

        {/* Article Hero */}
        <Section className="py-12 lg:py-16 border-b border-border/50">
          <Container className="max-w-4xl">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1.5 font-mono text-xs text-muted">
                  <Calendar className="h-3.5 w-3.5 text-accent" />
                  {post.date}
                </span>
                <span className="text-border">·</span>
                <span className="flex items-center gap-1.5 font-mono text-xs text-muted">
                  <Clock className="h-3.5 w-3.5 text-muted" />
                  {post.readingTime}
                </span>
                <span className="text-border">·</span>
                <Badge variant="accent">Technical Guide</Badge>
              </div>

              <h1 className="text-hero text-text font-heading tracking-tight">
                {post.title}
              </h1>

              <p className="text-body md:text-xl text-muted leading-relaxed">
                {post.subtitle}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2.5 py-1 rounded-[6px] bg-surface-2 border border-border text-muted font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Article Body with TOC */}
        <Section className="py-12 lg:py-16">
          <Container className="max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Sticky TOC (Desktop Sidebar) */}
              <div className="hidden lg:block lg:col-span-4 sticky top-28 space-y-4">
                <Card className="p-5 space-y-3 bg-surface/80">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold text-text border-b border-border/60 pb-2">
                    <ListTree className="h-4 w-4 text-accent" />
                    <span>Table of Contents</span>
                  </div>

                  <nav className="space-y-1.5">
                    {post.toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block font-mono text-xs text-muted hover:text-accent transition-colors py-1 pl-2 border-l border-border hover:border-accent"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </Card>
              </div>

              {/* Main Content Area */}
              <div className="lg:col-span-8 space-y-12">
                {post.content.map((sec) => (
                  <article key={sec.sectionId} id={sec.sectionId} className="space-y-4 scroll-mt-28">
                    <h2 className="font-heading text-2xl font-bold text-text tracking-tight border-b border-border/50 pb-2">
                      {sec.sectionTitle}
                    </h2>

                    <div className="space-y-4 text-body text-muted leading-relaxed">
                      {sec.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {/* Formatted Code Block */}
                    {sec.codeSnippet && (
                      <div className="rounded-[12px] border border-border bg-surface-2 overflow-hidden shadow-lg mt-4">
                        <div className="flex items-center justify-between border-b border-border/70 bg-surface px-4 py-2.5 text-xs font-mono text-muted">
                          <div className="flex items-center gap-2">
                            <Code className="h-3.5 w-3.5 text-accent" />
                            <span>{sec.codeSnippet.caption || "Snippet"}</span>
                          </div>
                          <span className="uppercase text-[10px] text-accent font-semibold">
                            {sec.codeSnippet.language}
                          </span>
                        </div>

                        <div className="p-4 sm:p-5 overflow-x-auto font-mono text-xs sm:text-[13px] leading-relaxed bg-[#0B0D12] text-text">
                          <pre>
                            <code>{sec.codeSnippet.code}</code>
                          </pre>
                        </div>
                      </div>
                    )}
                  </article>
                ))}

                {/* Author Summary Box */}
                <div className="rounded-[14px] border border-border bg-surface p-6 space-y-3 mt-12">
                  <h3 className="font-heading font-bold text-base text-text">
                    About the Author
                  </h3>
                  <p className="text-body text-xs sm:text-sm text-muted leading-relaxed">
                    Muhammad Arham is a Full-Stack MERN engineer and BSSE student at UCP, building scalable, security-conscious web systems with PostgreSQL RLS and modern TypeScript.
                  </p>
                </div>

                {/* Next Post Link */}
                <div className="pt-8 border-t border-border/60">
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="group block rounded-[12px] border border-border bg-surface p-6 hover:border-accent transition-all duration-250"
                  >
                    <span className="font-mono text-xs text-muted block mb-1">
                      Read Next Article →
                    </span>
                    <div className="font-heading font-bold text-lg text-text group-hover:text-accent transition-colors flex items-center justify-between">
                      <span>{nextPost.title}</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
