import { NextResponse } from "next/server";

export const revalidate = 3600; // ISR cache for 1 hour

export interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  languageColor: string;
  updated_at: string;
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3572A5",
  HTML: "#E34F26",
  CSS: "#563D7C",
};

const FALLBACK_REPOS: GitHubRepo[] = [
  {
    name: "Arham-portfolio",
    description: "Senior developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.",
    html_url: "https://github.com/Arham38/Arham-portfolio",
    stargazers_count: 14,
    forks_count: 3,
    language: "TypeScript",
    languageColor: "#3178C6",
    updated_at: new Date().toISOString(),
  },
  {
    name: "jab-leather",
    description: "E-commerce platform with Shopify-style admin, USD/PKR dual-currency engine, and Supabase RLS.",
    html_url: "https://github.com/Arham38/jab-leather",
    stargazers_count: 28,
    forks_count: 5,
    language: "TypeScript",
    languageColor: "#3178C6",
    updated_at: new Date().toISOString(),
  },
  {
    name: "codecraft-lms",
    description: "Interactive code execution platform with sandboxed Docker containers and BullMQ queues.",
    html_url: "https://github.com/Arham38/codecraft-lms",
    stargazers_count: 19,
    forks_count: 4,
    language: "TypeScript",
    languageColor: "#3178C6",
    updated_at: new Date().toISOString(),
  },
];

export async function GET() {
  try {
    const res = await fetch("https://api.github.com/users/Arham38/repos?sort=updated&per_page=10", {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Arham-Portfolio-NextJS",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({ repos: FALLBACK_REPOS, source: "fallback" });
    }

    const reposData: Array<{
      name: string;
      description?: string | null;
      html_url: string;
      stargazers_count?: number;
      forks_count?: number;
      language?: string | null;
      updated_at: string;
    }> = await res.json();

    if (!Array.isArray(reposData)) {
      return NextResponse.json({ repos: FALLBACK_REPOS, source: "fallback" });
    }

    // Select top 3 relevant repos
    const targetNames = ["Arham-portfolio", "jab-leather", "codecraft-lms", "sme-erp"];
    let filtered = reposData
      .filter((r) => targetNames.some((t) => r.name.toLowerCase().includes(t.toLowerCase())))
      .map((r) => ({
        name: r.name,
        description: r.description || "Production-grade full-stack architecture.",
        html_url: r.html_url,
        stargazers_count: r.stargazers_count || 0,
        forks_count: r.forks_count || 0,
        language: r.language || "TypeScript",
        languageColor: LANGUAGE_COLORS[r.language || "TypeScript"] || "#6C63FF",
        updated_at: r.updated_at,
      }));

    if (filtered.length < 3) {
      filtered = FALLBACK_REPOS;
    } else {
      filtered = filtered.slice(0, 3);
    }

    return NextResponse.json({ repos: filtered, source: "github" });
  } catch (err) {
    console.error("Error in /api/github:", err);
    return NextResponse.json({ repos: FALLBACK_REPOS, source: "fallback" });
  }
}
