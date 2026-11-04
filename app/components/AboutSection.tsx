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
              Analyst by training,
              <br />
              <span className="gradient-text">builder by nature</span>
            </h2>

            <p style={{ marginBottom: "1.25rem" }}>
              I am an MBA graduate specializing in Business Analytics, with
              genuine hands-on experience in data analysis, business
              intelligence, and product development. I combine the analytical
              discipline of a data professional with the product mindset of a
              developer who ships real things.
            </p>

            <p style={{ marginBottom: "1.25rem" }}>
              My work ranges from building SQL-driven analytics workflows and
              Power BI dashboards to launching a live esports tournament platform
              (FC Arena) used by real players and running a full-stack personal
              finance application with OCR, authentication, and mobile builds.
            </p>

            <p style={{ marginBottom: "2rem" }}>
              I leverage AI tools strategically to accelerate development —
              not as a shortcut, but as a force multiplier for delivering
              quality products faster. My published research adds academic depth
              to practical experience.
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
                { icon: "📊", title: "Data First", desc: "SQL, Python, Power BI for analytics" },
                { icon: "🏗️", title: "Product Builder", desc: "Ships real products end-to-end" },
                { icon: "🤖", title: "AI-Augmented", desc: "Strategic use of AI dev tools" },
                { icon: "🎓", title: "MBA Analytics", desc: "Business-focused analytical lens" },
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
                { label: "Degree", value: "MBA — Business Analytics" },
                { label: "Location", value: "India" },
                { label: "Target Roles", value: "Data Analyst · BI Analyst · Business Analyst" },
                { label: "Availability", value: "Open to opportunities" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    padding: "0.75rem 0",
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
                      fontSize: "0.9rem",
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
                  "SQL", "Python", "Power BI", "Excel", "Data Analytics",
                  "Business Intelligence", "Data Visualization", "Statistical Analysis",
                  "Django REST", "React", "PostgreSQL", "Pandas", "NumPy",
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
