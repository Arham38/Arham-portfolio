import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Muhammad Arham — Full-Stack MERN Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          backgroundColor: "#0B0D12",
          color: "#E8EAF0",
          fontFamily: "sans-serif",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(108, 99, 255, 0.22) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(52, 211, 153, 0.12) 0%, transparent 40%)",
        }}
      >
        {/* Top Status & Monogram */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                border: "2px solid #6C63FF",
                backgroundColor: "#12151C",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "20px",
                color: "#E8EAF0",
              }}
            >
              AB
            </div>
            <span style={{ fontSize: "20px", fontWeight: "600", color: "#E8EAF0" }}>
              Muhammad Arham
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "999px",
              border: "1px solid rgba(52, 211, 153, 0.4)",
              backgroundColor: "rgba(52, 211, 153, 0.15)",
              color: "#34D399",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            <span>● Open to Internships · Lahore</span>
          </div>
        </div>

        {/* Center Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#FFFFFF",
            }}
          >
            Full-Stack MERN Software Engineer
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#8B93A7",
              lineHeight: 1.4,
            }}
          >
            Building secure, high-concurrency systems with PostgreSQL Row-Level Security, automated Playwright test harnesses, and modern TypeScript.
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {["PostgreSQL RLS", "Docker Sandboxes", "Vitest & Playwright", "Dual-Currency Engine"].map((badge) => (
            <div
              key={badge}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                backgroundColor: "#181C26",
                border: "1px solid #232938",
                color: "#E8EAF0",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
