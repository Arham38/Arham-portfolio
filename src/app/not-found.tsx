import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Terminal, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col justify-between selection:bg-accent/20 selection:text-accent">
      {/* Header Bar */}
      <header className="border-b border-border bg-surface/40 py-4">
        <Container className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-[8px] border border-border bg-surface font-heading font-bold text-xs text-text">
              AB
            </div>
            <span className="font-heading font-semibold text-sm">
              Muhammad Arham
            </span>
          </Link>
          <Badge variant="outline" className="font-mono text-xs">
            HTTP 404
          </Badge>
        </Container>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-20">
        <Container className="max-w-xl text-center space-y-6">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-soft border border-accent/30 text-accent">
            <AlertTriangle className="h-8 w-8" />
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs text-accent uppercase tracking-wider">
              Route Exception
            </span>
            <h1 className="text-hero text-text font-heading">
              404 — Page Not Found
            </h1>
            <p className="text-body text-muted leading-relaxed">
              The endpoint or resource you requested does not exist on this server, has been migrated, or was an unauthorized traversal attempt.
            </p>
          </div>

          <div className="rounded-[10px] border border-border bg-surface p-4 text-left font-mono text-xs text-muted space-y-1">
            <div className="flex items-center gap-1.5 text-text">
              <Terminal className="h-3.5 w-3.5 text-accent" />
              <span>status: 404_NOT_FOUND</span>
            </div>
            <div>stack: ClientRouteException (Next.js App Router)</div>
            <div>action: Safe redirect to root origin</div>
          </div>

          <div className="pt-2">
            <Link href="/">
              <Button
                variant="primary"
                size="md"
                leftIcon={<ArrowLeft className="h-4 w-4" />}
                className="font-mono text-xs"
              >
                Return to Portfolio Home
              </Button>
            </Link>
          </div>
        </Container>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-border py-6 text-center font-mono text-xs text-muted">
        <Container>
          <span>© 2026 Muhammad Arham · MERN Stack Engineer</span>
        </Container>
      </footer>
    </div>
  );
}
