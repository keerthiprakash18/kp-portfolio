"use client";
import { useState } from "react";

const PROJECTS = [
  {
    id: "fcarena",
    featured: true,
    title: "FC Arena",
    subtitle: "Live Esports Tournament Platform",
    emoji: "🏆",
    status: "Live",
    statusColor: "#4ade80",
    url: "https://fcarena.in/",
    github: null,
    description:
      "A fully operational football esports tournament management platform built for real competitive play. FC Arena handles end-to-end tournament lifecycle — from registration and bracket management to live fixture results and leaderboard rankings.",
    role: "Product Owner & Full-Stack Developer",
    problem:
      "No dedicated platform existed for organizing grassroots football esports tournaments in India. Manual management via spreadsheets and WhatsApp was error-prone and unscalable.",
    solution:
      "Built a full-stack web platform with tournament CRUD, automated bracket generation, live fixture tracking, player statistics, and an administrative dashboard for tournament organizers.",
    stack: ["React", "Django REST", "PostgreSQL", "Railway", "Vercel", "Supabase"],
    highlights: [
      "Live tournament and league management",
      "Automated fixture scheduling and bracket generation",
      "Player statistics, rankings, and leaderboards",
      "Match results and score tracking",
      "Admin dashboard for organizers",
      "Real players, real matches, live deployment",
    ],
    gradient: "linear-gradient(135deg, #1a3a1a, #0d2a0d)",
    accentColor: "#4ade80",
  },
  {
    id: "expense",
    featured: true,
    title: "Smart Expense Tracker",
    subtitle: "Full-Stack Personal Finance App",
    emoji: "💰",
    status: "Production",
    statusColor: "#60a5fa",
    url: null,
    github: "https://github.com/keerthiprakash",
    description:
      "A comprehensive personal finance management application with expense tracking, budget analytics, OCR-powered receipt extraction, and an AI-assisted finance assistant. Built with Django REST, React/Vite, PostgreSQL, and deployable as an Android app via Capacitor.",
    role: "Full-Stack Developer & Product Designer",
    problem:
      "Personal finance apps often miss receipt automation and intelligent categorisation. Manual expense entry leads to incomplete tracking.",
    solution:
      "Built a production-grade app with automatic receipt OCR (from camera, image, or PDF), smart merchant memory, category budgets, recurring transaction rules, and a natural language finance assistant.",
    stack: ["Django REST", "React", "PostgreSQL", "Supabase", "Capacitor", "Railway", "Vercel"],
    highlights: [
      "OCR receipt extraction — merchant, amount, date, GSTIN, UPI ref",
      "Monthly dashboard and category analytics",
      "Credit card tracking and utilization monitoring",
      "AI-powered finance assistant (English, Tamil, Tanglish)",
      "Installable PWA + Android APK/AAB",
      "Email 2FA, full backup/restore, CSV export",
    ],
    gradient: "linear-gradient(135deg, #1a2a3a, #0d1a2d)",
    accentColor: "#60a5fa",
  },
  {
    id: "ai-report",
    featured: false,
    title: "AI Daily Report Automation",
    subtitle: "Analytics Case Study & Research Publication",
    emoji: "🔬",
    status: "Research",
    statusColor: "#a78bfa",
    url: null,
    github: null,
    description:
      "An automated daily reporting system using Python and Pandas that processes raw business data, generates KPIs, and produces structured analytical reports with NLP-based insight commentary. Supported by a research publication.",
    role: "Data Analyst & Research Author",
    problem:
      "Daily reporting was a time-consuming manual process requiring analysts to aggregate data from multiple sources and write insight summaries.",
    solution:
      "Built a Python pipeline that ingests structured data, runs transformation and aggregation using Pandas, computes KPIs, and generates formatted reports with automated NLP insight generation.",
    stack: ["Python", "Pandas", "NumPy", "NLP", "Automation", "Jupyter"],
    highlights: [
      "Automated data ingestion and transformation pipeline",
      "KPI computation and trend detection",
      "NLP-based insight generation",
      "Structured PDF/Excel report output",
      "Significant reduction in manual reporting time",
      "Research findings submitted for publication",
    ],
    gradient: "linear-gradient(135deg, #1f1a3a, #140d2d)",
    accentColor: "#a78bfa",
  },
];

function ProjectCard({ project, featured }: { project: typeof PROJECTS[0]; featured: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="glass-card"
      style={{
        padding: featured ? "2.5rem" : "1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: project.gradient,
          opacity: 0.3,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Top row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ fontSize: featured ? "2rem" : "1.5rem" }}>{project.emoji}</span>
          <div>
            <h3
              style={{
                fontSize: featured ? "1.375rem" : "1.125rem",
                fontWeight: 700,
                color: "var(--fg-primary)",
                marginBottom: "0.2rem",
              }}
            >
              {project.title}
            </h3>
            <p style={{ fontSize: "0.8rem", color: "var(--fg-muted)", lineHeight: 1.4 }}>
              {project.subtitle}
            </p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-end" }}>
          <span
            className="badge"
            style={{
              background: `${project.statusColor}18`,
              color: project.statusColor,
              border: `1px solid ${project.statusColor}30`,
            }}
          >
            ● {project.status}
          </span>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "0.9rem",
          color: "var(--fg-secondary)",
          lineHeight: 1.75,
          position: "relative",
          zIndex: 1,
        }}
      >
        {project.description}
      </p>

      {/* Stack */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", position: "relative", zIndex: 1 }}>
        {project.stack.map((tech) => (
          <span
            key={tech}
            style={{
              padding: "0.2rem 0.6rem",
              background: `${project.accentColor}12`,
              border: `1px solid ${project.accentColor}25`,
              borderRadius: "999px",
              fontSize: "0.75rem",
              color: project.accentColor,
              fontWeight: 500,
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Expandable details */}
      {expanded && (
        <div
          style={{
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "1.25rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="project-detail-grid">
            <div>
              <h4 style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--fg-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                Problem
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--fg-secondary)", lineHeight: 1.7 }}>
                {project.problem}
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--fg-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                Solution
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--fg-secondary)", lineHeight: 1.7 }}>
                {project.solution}
              </p>
            </div>
          </div>

          <div style={{ marginTop: "1.25rem" }}>
            <h4 style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--fg-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
              Key Features
            </h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.4rem" }} className="project-detail-grid">
              {project.highlights.map((h) => (
                <div
                  key={h}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.4rem",
                    fontSize: "0.825rem",
                    color: "var(--fg-secondary)",
                  }}
                >
                  <span style={{ color: project.accentColor, flexShrink: 0, marginTop: "1px" }}>✓</span>
                  {h}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--fg-muted)", fontWeight: 500 }}>
              My Role: <span style={{ color: project.accentColor }}>{project.role}</span>
            </span>
          </div>
        </div>
      )}

      {/* Actions */}
      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          flexWrap: "wrap",
        }}
      >
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Live Site ↗
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            GitHub →
          </a>
        )}
        <button
          onClick={() => setExpanded(!expanded)}
          className="btn btn-ghost btn-sm"
          style={{ marginLeft: "auto" }}
        >
          {expanded ? "Show Less ↑" : "Case Study ↓"}
        </button>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .project-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </article>
  );
}

export default function ProjectsSection() {
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Projects & Case Studies</h2>
          <p className="section-subtitle">
            Real products built and deployed. Each project represents genuine problem-solving,
            technical depth, and product ownership — not tutorial clones.
          </p>
        </div>

        {/* Featured projects */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} featured />
          ))}
        </div>

        {/* Other projects */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
          {others.map((p) => (
            <ProjectCard key={p.id} project={p} featured={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
