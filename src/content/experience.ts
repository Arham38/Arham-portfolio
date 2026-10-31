export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  organizationUrl?: string;
  location: string;
  period: string;
  type: "work" | "education";
  badge?: string;
  impactBullets: string[];
  techUsed?: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "jab-leather",
    role: "Full-Stack Engineer & Architect",
    organization: "JAB LEATHER",
    organizationUrl: "https://jableather.vercel.app",
    location: "Lahore, Pakistan (Remote / Contract)",
    period: "Jan 2025 – Present",
    type: "work",
    badge: "Client Project",
    impactBullets: [
      "Protected customer data with PostgreSQL Row Level Security (RLS) and admin-only RBAC, eliminating cross-tenant leakage across 1,400+ transactional orders.",
      "Prevented financial discrepancies and reduced checkout drop-offs by engineering a real-time dual-currency USD/PKR pricing engine with automated forex feeds.",
      "Maintained 99.98% payment pipeline reliability by executing automated end-to-end regression suites via Vitest and Playwright in GitHub Actions CI/CD.",
    ],
    techUsed: ["React", "Node.js", "Express", "Supabase", "PostgreSQL", "RLS", "Vitest", "Playwright"],
  },
  {
    id: "ucp-bsse",
    role: "Bachelor of Science in Software Engineering (BSSE)",
    organization: "University of Central Punjab (UCP)",
    location: "Lahore, Pakistan",
    period: "Oct 2023 – Expected Jul 2027",
    type: "education",
    badge: "Undergraduate",
    impactBullets: [
      "Core focus on Data Structures & Algorithms, Object-Oriented Analysis & Design, Database Systems, and Distributed Computing.",
      "Actively applying enterprise architectural patterns, sandboxed test harnesses, and security-first engineering to real-world client and research projects.",
      "Maintained consistent academic performance while delivering freelance production software and technical case studies.",
    ],
    techUsed: ["Algorithms", "System Design", "Database Modeling", "Software Architecture"],
  },
];
