"use client";
import { useState } from "react";

const PROJECTS = [
  {
    id: "fcarena",
    title: "FC Arena",
    category: "Full-Stack Esports Tournament Platform",
    tagline: "Live tournament engine with automated bracket schedules, match validation, and standings.",
    liveUrl: "https://fcarena.in",
    githubUrl: null,
    status: "Live in Production",
    statusColor: "#10B981",
    metrics: [
      { label: "Active Players", value: "20+ Registered" },
      { label: "Fixture Automation", value: "Round-Robin & Knockouts" },
      { label: "Database Layer", value: "PostgreSQL & Prisma" },
    ],
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Prisma ORM", "Redis", "JWT", "VPS"],
    architectureOverview:
      "FC Arena solves grassroots football tournament coordination by replacing manual Google Sheets with an automated platform. Organizers create leagues, generate balanced Round-Robin and Home/Away match schedules, record scores with duplicate-entry prevention, and dynamically recalculate team standings and goal differentials in real-time.",
    keyAccomplishments: [
      "Engineered automated fixture generation algorithms with bye-round handling.",
      "Built resilient database constraints ensuring zero duplicate match result entries.",
      "Optimized query response times using Redis caching for high-frequency leaderboards.",
      "Live production environment serving real competitive tournaments.",
    ],
    mockupType: "tournament",
  },
  {
    id: "smart-expense",
    title: "Smart Expense Tracker",
    category: "Personal Finance & Receipt OCR Engine",
    tagline: "Full-stack budgeting with optical receipt parsing, cash-flow analytics, and PWA packaging.",
    liveUrl: "https://smart-expense-tracker-v3.vercel.app",
    githubUrl: "https://github.com/keerthiprakash18",
    status: "Production Deployed",
    statusColor: "#3B82F6",
    metrics: [
      { label: "Turnaround Time", value: "< 2s OCR Extraction" },
      { label: "Security", value: "JWT & Email 2FA" },
      { label: "Deployment", value: "Vercel + Railway" },
    ],
    techStack: ["React / Vite", "Django REST Framework", "PostgreSQL", "OCR Pipeline", "Capacitor"],
    architectureOverview:
      "A personal finance platform addressing the common pitfall of manual expense entry. Users can upload camera photos, scanned PDFs, or invoices. The integrated OCR pipeline extracts merchant name, date, total amount, GSTIN, and payment method into verified relational records, visualizing monthly budget health and category cash-flows.",
    keyAccomplishments: [
      "Implemented automated OCR extraction parsing receipt fields directly into PostgreSQL.",
      "Designed category budget tracking with instant visual limit warnings.",
      "Built multi-account management with non-spending internal transfers.",
      "Packaged as both a responsive web app and installable Android APK/AAB.",
    ],
    mockupType: "expense",
  },
  {
    id: "ai-reporting",
    title: "Smart Daily Report Automation",
    category: "Data Pipeline & Academic Research Case Study",
    tagline: "Published research automating business report generation with NLP-driven insight commentary.",
    liveUrl: null,
    githubUrl: null,
    status: "IJFMR Published (Paper ID: 72819)",
    statusColor: "#8B5CF6",
    metrics: [
      { label: "Time Saved", value: "70%+ Reduction" },
      { label: "Daily Savings", value: "2–3 Hours / Day" },
      { label: "Publication", value: "IJFMR Vol. 8 Issue 2" },
    ],
    techStack: ["Python", "Pandas", "NumPy", "NLP Summarization", "OpenAI API", "SQL Aggregation"],
    architectureOverview:
      "Daily executive reporting is historically repetitive and prone to human compilation errors. This project establishes an automated data transformation pipeline that ingests raw business logs from multiple relational tables, calculates standard KPI variances, detects anomalies, and generates formatted executive reports accompanied by natural language summaries.",
    keyAccomplishments: [
      "Cut repetitive manual report preparation turnaround by over 70%.",
      "Automated daily KPI tracking, anomaly detection, and trend forecasting.",
      "Validated with peer-reviewed publication in the International Journal of Futuristic Multidisciplinary Research (IJFMR).",
      "Engineered automated export scripts outputting publication-ready Excel & PDF dashboards.",
    ],
    mockupType: "reporting",
  },
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<Record<string, "overview" | "achievements" | "tech">>({
    fcarena: "overview",
    "smart-expense": "overview",
    "ai-reporting": "overview",
  });

  return (
    <section id="projects" className="section">
      <div className="container">
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-label">Engineering Portfolio</div>
          <h2 className="section-title">
            Featured Products &amp; <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="section-subtitle">
            Engineered from ground up with real databases, scalable architectures, and verified real-world impact.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass-panel"
              style={{
                padding: "2.5rem",
                display: "grid",
                gridTemplateColumns: "1.15fr 0.85fr",
                gap: "3rem",
                alignItems: "start",
              }}
            >
              {/* Left Column: Project Substance */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.85rem", flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      padding: "0.25rem 0.65rem",
                      borderRadius: "6px",
                      background: `${project.statusColor}15`,
                      color: project.statusColor,
                      border: `1px solid ${project.statusColor}35`,
                      letterSpacing: "0.02em",
                    }}
                  >
                    ● {project.status}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "#64748B" }}>
                    {project.category}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    fontWeight: 800,
                    color: "#FFFFFF",
                    letterSpacing: "-0.03em",
                    marginBottom: "0.5rem",
                  }}
                >
                  {project.title}
                </h3>

                <p style={{ fontSize: "0.95rem", color: "#38BDF8", fontWeight: 500, marginBottom: "1.25rem" }}>
                  {project.tagline}
                </p>

                {/* Sub-tab Switcher for 100x Deep Dive */}
                <div
                  style={{
                    display: "inline-flex",
                    background: "rgba(0, 0, 0, 0.4)",
                    padding: "3px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    marginBottom: "1.25rem",
                  }}
                >
                  {(["overview", "achievements", "tech"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab({ ...activeTab, [project.id]: tab })}
                      style={{
                        padding: "0.35rem 0.85rem",
                        borderRadius: "6px",
                        border: "none",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        textTransform: "capitalize",
                        background: (activeTab[project.id] || "overview") === tab ? "rgba(59, 130, 246, 0.25)" : "transparent",
                        color: (activeTab[project.id] || "overview") === tab ? "#60A5FA" : "#94A3B8",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab Contents */}
                <div style={{ minHeight: "120px", marginBottom: "1.5rem" }}>
                  {(activeTab[project.id] || "overview") === "overview" && (
                    <p style={{ fontSize: "0.9rem", color: "#CBD5E1", lineHeight: 1.75 }}>
                      {project.architectureOverview}
                    </p>
                  )}

                  {activeTab[project.id] === "achievements" && (
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {project.keyAccomplishments.map((item, idx) => (
                        <li key={idx} style={{ display: "flex", gap: "0.6rem", fontSize: "0.875rem", color: "#CBD5E1" }}>
                          <span style={{ color: "#38BDF8", fontWeight: "bold" }}>✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {activeTab[project.id] === "tech" && (
                    <div>
                      <div style={{ fontSize: "0.8rem", color: "#94A3B8", marginBottom: "0.6rem" }}>
                        Production Stack &amp; Infrastructure:
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            style={{
                              padding: "0.3rem 0.65rem",
                              borderRadius: "6px",
                              background: "rgba(255, 255, 255, 0.04)",
                              border: "1px solid rgba(255, 255, 255, 0.1)",
                              fontSize: "0.75rem",
                              color: "#F1F5F9",
                              fontFamily: "monospace",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* CTAs */}
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", flexWrap: "wrap" }}>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linear-btn-primary"
                      style={{ padding: "0.55rem 1.25rem", fontSize: "0.85rem" }}
                    >
                      <span>Visit Live Application ↗</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linear-btn-secondary"
                      style={{ padding: "0.55rem 1.25rem", fontSize: "0.85rem" }}
                    >
                      <span>Inspect Repository →</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Interactive Browser / Terminal Mockup */}
              <div
                style={{
                  background: "#050B18",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                }}
              >
                {/* Simulated Window Frame Bar */}
                <div
                  style={{
                    padding: "0.6rem 0.85rem",
                    background: "rgba(255, 255, 255, 0.03)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", gap: "6px" }}>
                    <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#EF4444" }} />
                    <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#F59E0B" }} />
                    <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#10B981" }} />
                  </div>
                  <span style={{ fontSize: "0.68rem", color: "#64748B", fontFamily: "monospace" }}>
                    {project.liveUrl ? project.liveUrl.replace("https://", "") : "case-study-verified.json"}
                  </span>
                  <span style={{ fontSize: "0.7rem", color: "#3B82F6" }}>● SSL</span>
                </div>

                {/* Metrics Matrix Inside Window */}
                <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ fontSize: "0.72rem", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>
                    Verified Impact Telemetry
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.65rem" }}>
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        style={{
                          padding: "0.75rem 0.95rem",
                          borderRadius: "8px",
                          background: "rgba(255, 255, 255, 0.02)",
                          border: "1px solid rgba(255, 255, 255, 0.06)",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ fontSize: "0.8rem", color: "#94A3B8" }}>{m.label}</span>
                        <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#60A5FA", fontFamily: "monospace" }}>
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Architecture Stamp */}
                  <div
                    style={{
                      padding: "0.75rem",
                      borderRadius: "8px",
                      background: "rgba(59, 130, 246, 0.06)",
                      border: "1px dashed rgba(59, 130, 246, 0.25)",
                      fontSize: "0.75rem",
                      color: "#94A3B8",
                      lineHeight: 1.5,
                    }}
                  >
                    <strong style={{ color: "#38BDF8" }}>Engineering Ownership:</strong> End-to-end architecture, database schema design, and production deployment maintained by Keerthi Prakash T.
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
