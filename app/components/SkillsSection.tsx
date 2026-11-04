"use client";

const SKILL_CATEGORIES = [
  {
    label: "Data & Analytics",
    color: "var(--accent-blue-bright)",
    icon: "📊",
    skills: [
      { name: "SQL (MySQL / PostgreSQL)", level: 90 },
      { name: "Python (Pandas, NumPy)", level: 82 },
      { name: "Power BI", level: 85 },
      { name: "Microsoft Excel (Advanced)", level: 88 },
      { name: "Data Visualization", level: 83 },
      { name: "Statistical Analysis", level: 78 },
    ],
  },
  {
    label: "Business Intelligence",
    color: "#a78bfa",
    icon: "💼",
    skills: [
      { name: "Business Analysis", level: 85 },
      { name: "KPI Definition & Reporting", level: 82 },
      { name: "Dashboard Design", level: 80 },
      { name: "Data Storytelling", level: 78 },
      { name: "Process Analytics", level: 75 },
    ],
  },
  {
    label: "Development",
    color: "#22d3ee",
    icon: "⚙️",
    skills: [
      { name: "Django REST Framework", level: 78 },
      { name: "React / TypeScript", level: 75 },
      { name: "Next.js", level: 70 },
      { name: "PostgreSQL Design", level: 82 },
      { name: "REST API Design", level: 78 },
      { name: "Git & GitHub", level: 80 },
    ],
  },
  {
    label: "AI & ML Tools",
    color: "#4ade80",
    icon: "🤖",
    skills: [
      { name: "NLP (Basic)", level: 65 },
      { name: "AI-Assisted Development", level: 85 },
      { name: "Prompt Engineering", level: 80 },
      { name: "OCR / Document AI", level: 72 },
    ],
  },
];

const TOOLS = [
  "Power BI", "MySQL Workbench", "pgAdmin", "VS Code", "PyCharm",
  "Jupyter Notebook", "Google Colab", "Git", "GitHub", "Supabase",
  "Railway", "Vercel", "Android Studio", "Figma",
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.4rem",
        }}
      >
        <span style={{ fontSize: "0.875rem", color: "var(--fg-secondary)", fontWeight: 500 }}>
          {name}
        </span>
        <span style={{ fontSize: "0.75rem", color: "var(--fg-muted)" }}>
          {level}%
        </span>
      </div>
      <div
        style={{
          height: "5px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${level}%`,
            background: `linear-gradient(90deg, ${color}, ${color}aa)`,
            borderRadius: "999px",
            transition: "width 1s ease",
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, transparent, rgba(14,20,38,0.5) 50%, transparent)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      <div className="container" style={{ position: "relative" }}>
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-label">Technical Stack</div>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            SQL and Python are my primary analytics tools. I pair data proficiency
            with full-stack development skills to build end-to-end analytical products.
          </p>
        </div>

        {/* Category grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.label}
              className="glass-card"
              style={{ padding: "1.75rem" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "1.5rem",
                }}
              >
                <span style={{ fontSize: "1.25rem" }}>{cat.icon}</span>
                <h3
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: cat.color,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {cat.label}
                </h3>
              </div>

              {cat.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Tools section */}
        <div className="glass-card" style={{ padding: "2rem" }}>
          <h3
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "var(--accent-blue-bright)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "1.25rem",
            }}
          >
            Tools & Platforms
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {TOOLS.map((tool) => (
              <span key={tool} className="skill-pill">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
