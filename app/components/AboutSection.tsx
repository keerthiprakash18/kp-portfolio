"use client";

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left — text */}
          <div>
            <div className="section-label">Who I Am</div>
            <h2 className="section-title">
              Data Analyst &amp; AI-Assisted
              <br />
              <span className="gradient-text">Product Developer</span>
            </h2>

            <p style={{ marginBottom: "1.25rem" }}>
              I hold a <strong>B.Tech in Artificial Intelligence &amp; Data Science</strong> from CARE College of Engineering (2022–2026), combining strong statistical foundation and machine learning principles with practical business analytics.
            </p>

            <p style={{ marginBottom: "1.25rem" }}>
              My technical expertise spans <strong>SQL, PostgreSQL, Python (Pandas, NumPy), Advanced Excel, Power Query, and Power BI</strong> for end-to-end data pipelines, MIS reporting, and KPI dashboards. I am also advancing through the <strong>AccioJob Data Analytics Program</strong> and the <strong>PwC Business Analytics Program</strong>.
            </p>

            <p style={{ marginBottom: "2rem" }}>
              Beyond analytics, I build and deploy production digital products like <strong>FC Arena</strong> (live tournament platform) and <strong>Smart Expense Tracker</strong> (personal finance with receipt OCR). My published research in IJFMR validates an automated daily reporting pipeline that reduced reporting turnaround by <strong>70%+</strong>.
            </p>

            {/* Key attributes */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {[
                { icon: "📊", title: "Data & BI", desc: "SQL, Power BI, Advanced Excel, MIS" },
                { icon: "🎓", title: "B.Tech AI & DS", desc: "CARE College of Engg (CGPA 7.29)" },
                { icon: "🏆", title: "Product Builder", desc: "FC Arena & Smart Expense Tracker" },
                { icon: "📄", title: "Published Author", desc: "IJFMR Vol 8 Issue 2 (AI Reporting)" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="glass-card"
                  style={{ padding: "1.25rem" }}
                >
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                    {item.icon}
                  </div>
                  <div style={{ fontWeight: 600, color: "var(--fg-primary)", fontSize: "0.9rem", marginBottom: "0.25rem" }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--fg-muted)" }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — details */}
          <div>
            <div
              className="glass-card"
              style={{ padding: "2rem", marginBottom: "1.5rem" }}
            >
              <h3
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--accent-blue-bright)",
                  marginBottom: "1.25rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Quick Profile
              </h3>

              {[
                { label: "Name", value: "Keerthi Prakash T" },
                { label: "Degree", value: "B.Tech — AI & Data Science (2022–2026)" },
                { label: "College", value: "CARE College of Engineering" },
                { label: "CGPA", value: "7.29 / 10" },
                { label: "Location", value: "Tamil Nadu, India" },
                { label: "Target Roles", value: "Data Analyst · Business Analyst · BI Analyst" },
                { label: "Training", value: "AccioJob & PwC Business Analytics" },
                { label: "Availability", value: "Open to opportunities" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    padding: "0.65rem 0",
                    borderBottom: "1px solid var(--border-subtle)",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      minWidth: "120px",
                      fontSize: "0.8rem",
                      color: "var(--fg-muted)",
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--fg-primary)",
                      fontWeight: 500,
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Core competencies */}
            <div className="glass-card" style={{ padding: "2rem" }}>
              <h3
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--accent-blue-bright)",
                  marginBottom: "1.25rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Core Competencies
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {[
                  "SQL", "PostgreSQL", "Python", "Pandas", "NumPy",
                  "Power BI", "Advanced Excel", "Power Query", "Data Cleaning",
                  "KPI Tracking", "MIS Reporting", "React", "Next.js",
                  "NestJS", "Django REST", "Docker",
                ].map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
