"use client";

const SKILL_PILLARS = [
  {
    category: "Data Ingestion & Storage",
    icon: "🗄️",
    accent: "#3B82F6",
    summary: "Relational database structuring, ETL flows, and data hygiene.",
    skills: [
      { name: "SQL (PostgreSQL / MySQL)", desc: "Complex joins, indexing, window functions", tier: "Advanced" },
      { name: "Relational DB Architecture", desc: "Normalization, foreign keys, schema design", tier: "Advanced" },
      { name: "Prisma & Supabase", desc: "Database migrations & connection pooling", tier: "Proficient" },
    ],
  },
  {
    category: "Analytics & Transformation",
    icon: "📊",
    accent: "#06B6D4",
    summary: "Statistical aggregation, anomaly detection, and KPI metrics.",
    skills: [
      { name: "Python (Pandas & NumPy)", desc: "Exploratory data analysis & data cleaning", tier: "Advanced" },
      { name: "Advanced Excel & Power Query", desc: "XLOOKUP, solver, automated macros", tier: "Expert" },
      { name: "AccioJob Analytics Intensive", desc: "6-month rigorous business track", tier: "Ongoing" },
    ],
  },
  {
    category: "Business Intelligence & Reporting",
    icon: "📈",
    accent: "#8B5CF6",
    summary: "Executive dashboards, automated summaries, and stakeholder reporting.",
    skills: [
      { name: "Power BI Dashboards", desc: "DAX measures, interactive drill-downs", tier: "Advanced" },
      { name: "PwC Business Analytics Program", desc: "Corporate governance & KPI evaluation", tier: "Ongoing" },
      { name: "Automated AI Reporting", desc: "IJFMR published reporting pipeline", tier: "Validated" },
    ],
  },
  {
    category: "Production Software & Delivery",
    icon: "🚀",
    accent: "#10B981",
    summary: "Full-stack integration, APIs, and cloud hosting.",
    skills: [
      { name: "React / Next.js / NestJS", desc: "Full-stack product interfaces", tier: "Advanced" },
      { name: "Django REST Framework", desc: "Secure REST APIs with JWT & OCR", tier: "Proficient" },
      { name: "Docker & Cloud Platforms", desc: "Vercel, Railway & Linux VPS deployment", tier: "Proficient" },
    ],
  },
];

const PLATFORMS = [
  "Power BI Desktop", "PostgreSQL", "MySQL Workbench", "Python 3.12",
  "Pandas", "NumPy", "Jupyter Labs", "VS Code", "Prisma ORM",
  "Redis", "Docker", "Git & GitHub", "Vercel", "Railway", "Capacitor",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-label">Capability Matrix</div>
          <h2 className="section-title">
            Technical Expertise &amp; <span className="text-gradient">Data Lifecycle</span>
          </h2>
          <p className="section-subtitle">
            Organized across the end-to-end data lifecycle: from raw database ingestion and Python transformation, to BI executive dashboards and production web applications.
          </p>
        </div>

        {/* 4-Pillar Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {SKILL_PILLARS.map((pillar) => (
            <div
              key={pillar.category}
              className="glass-panel"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.85rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>{pillar.icon}</span>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#FFFFFF" }}>
                    {pillar.category}
                  </h3>
                </div>

                <p style={{ fontSize: "0.825rem", color: "#94A3B8", marginBottom: "1.5rem", lineHeight: 1.5 }}>
                  {pillar.summary}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {pillar.skills.map((s) => (
                    <div
                      key={s.name}
                      style={{
                        padding: "0.65rem 0.85rem",
                        borderRadius: "8px",
                        background: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.2rem" }}>
                        <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#F1F5F9" }}>
                          {s.name}
                        </span>
                        <span
                          style={{
                            fontSize: "0.65rem",
                            padding: "0.15rem 0.45rem",
                            borderRadius: "4px",
                            background: `${pillar.accent}15`,
                            color: pillar.accent,
                            fontWeight: 700,
                            letterSpacing: "0.02em",
                          }}
                        >
                          {s.tier}
                        </span>
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#64748B" }}>
                        {s.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tool Ecosystem Strip */}
        <div
          className="glass-panel"
          style={{
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.85rem",
          }}
        >
          <div style={{ fontSize: "0.725rem", fontWeight: 700, color: "#38BDF8", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Validated Platform &amp; Tool Ecosystem
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem" }}>
            {PLATFORMS.map((tool) => (
              <span
                key={tool}
                style={{
                  padding: "0.35rem 0.85rem",
                  borderRadius: "999px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  fontSize: "0.8rem",
                  color: "#CBD5E1",
                  fontFamily: "var(--font-mono), monospace",
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
