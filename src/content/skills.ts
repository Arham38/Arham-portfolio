export interface SkillItem {
  name: string;
  projectTag?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  iconName: "layout" | "server" | "database" | "shield" | "check-circle" | "wrench";
  skills: SkillItem[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Responsive, accessible interfaces with typed contracts and micro-interactions.",
    iconName: "layout",
    skills: [
      { name: "React 18", projectTag: "JAB, ERP, LMS" },
      { name: "Next.js 14", projectTag: "LMS, Portfolio" },
      { name: "TypeScript", projectTag: "All Projects" },
      { name: "Tailwind CSS", projectTag: "All Projects" },
      { name: "Framer Motion", projectTag: "JAB, Portfolio" },
      { name: "TanStack Query", projectTag: "SME ERP" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Systems",
    description: "Transactional microservices, concurrency handling, and RESTful architectures.",
    iconName: "server",
    skills: [
      { name: "Node.js", projectTag: "JAB, ERP, LMS" },
      { name: "Express.js", projectTag: "40+ APIs" },
      { name: "REST Architecture", projectTag: "Contract-First" },
      { name: "Python / FastAPI", projectTag: "AuthentixAI" },
      { name: "BullMQ / Queues", projectTag: "CodeCraft LMS" },
      { name: "WebSockets", projectTag: "LMS, Authentix" },
    ],
  },
  {
    id: "databases",
    title: "Databases & Storage",
    description: "Relational constraints, document schemas, and distributed Redis caches.",
    iconName: "database",
    skills: [
      { name: "PostgreSQL", projectTag: "JAB, LMS" },
      { name: "Supabase", projectTag: "JAB LEATHER" },
      { name: "MongoDB", projectTag: "SME ERP" },
      { name: "Redis Cache", projectTag: "ERP, BullMQ" },
      { name: "Prisma ORM", projectTag: "CodeCraft LMS" },
      { name: "Mongoose", projectTag: "SME ERP" },
    ],
  },
  {
    id: "security",
    title: "Security Hardening",
    description: "Defensive authorization, row-level boundary enforcement, and token rotation.",
    iconName: "shield",
    skills: [
      { name: "PostgreSQL RLS", projectTag: "JAB LEATHER" },
      { name: "Admin RBAC", projectTag: "JAB, ERP" },
      { name: "JWT Cookie Auth", projectTag: "LMS, ERP, JAB" },
      { name: "Zod Schema Validation", projectTag: "API Gateways" },
      { name: "Zero-Trust Sandbox", projectTag: "LMS, Authentix" },
    ],
  },
  {
    id: "testing",
    title: "Testing & Quality Assurance",
    description: "Automated regression pipelines, browser simulation, and unit test matrices.",
    iconName: "check-circle",
    skills: [
      { name: "Vitest", projectTag: "JAB LEATHER" },
      { name: "Playwright E2E", projectTag: "JAB LEATHER" },
      { name: "Jest", projectTag: "CodeCraft LMS" },
      { name: "GitHub Actions CI", projectTag: "Automated Runs" },
      { name: "Isolated Sandboxes", projectTag: "Docker cgroups" },
    ],
  },
  {
    id: "tools",
    title: "DevOps & Tooling",
    description: "Containerization, container lifecycle orchestration, and build pipelines.",
    iconName: "wrench",
    skills: [
      { name: "Docker", projectTag: "LMS, Authentix" },
      { name: "Git & GitHub", projectTag: "GitOps Flow" },
      { name: "Postman", projectTag: "API Spec QA" },
      { name: "Linux / Bash", projectTag: "Server Deploy" },
      { name: "Vercel", projectTag: "Production Host" },
    ],
  },
];
