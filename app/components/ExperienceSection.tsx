"use client";

const EXPERIENCE = [
  {
    type: "work",
    title: "Data Analytics Intern",
    org: "Corizo (Edutech)",
    period: "2023",
    location: "Remote",
    description:
      "Applied Python and Pandas to real-world datasets. Developed analytical workflows, performed exploratory data analysis, and contributed to course content development for data science curricula.",
    skills: ["Python", "Pandas", "NumPy", "Data Analysis", "EDA"],
    icon: "💼",
  },
  {
    type: "education",
    title: "MBA — Business Analytics",
    org: "Rajalakshmi Engineering College",
    period: "2022 – 2024",
    location: "Chennai, India",
    description:
      "Specialized in Business Analytics with coursework in statistical analysis, business intelligence, data management, and strategic decision making. Graduated with hands-on project experience across data analytics and product development.",
    skills: ["Business Analytics", "Statistics", "BI", "Strategy"],
    icon: "🎓",
  },
  {
    type: "education",
    title: "B.Tech — Computer Science Engineering",
    org: "REC / Affiliated University",
    period: "2018 – 2022",
    location: "Chennai, India",
    description:
      "Undergraduate degree in Computer Science with foundational study in algorithms, databases, software engineering, and programming. Built technical foundation for subsequent analytics and development work.",
    skills: ["C/C++", "Java", "DBMS", "Software Engineering"],
    icon: "🏛️",
  },
];

const CERTIFICATIONS = [
  {
    title: "Python for Data Analysis",
    issuer: "Corizo / Edutech",
    year: "2023",
    icon: "🐍",
  },
  {
    title: "SQL for Data Analytics",
    issuer: "Self-Directed Learning",
    year: "2023",
    icon: "🗄️",
  },
  {
    title: "Power BI Fundamentals",
    issuer: "Microsoft / Self-Directed",
    year: "2024",
    icon: "📊",
  },
  {
    title: "Django REST API Development",
    issuer: "Project-Based Learning",
    year: "2024",
    icon: "⚙️",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="experience-grid"
        >
          {/* Left — Timeline */}
          <div>
            <div className="section-label">Career Path</div>
            <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>
              Experience &{" "}
              <span className="gradient-text">Education</span>
            </h2>

            <div className="timeline">
              {EXPERIENCE.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div
                    className="glass-card"
                    style={{ padding: "1.5rem" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "0.75rem",
                        gap: "0.5rem",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            marginBottom: "0.25rem",
                          }}
                        >
                          <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                          <h3
                            style={{
                              fontSize: "1rem",
                              fontWeight: 700,
                              color: "var(--fg-primary)",
                            }}
                          >
                            {item.title}
                          </h3>
                        </div>
                        <p
                          style={{
                            fontSize: "0.875rem",
                            color: "var(--accent-blue-bright)",
                            fontWeight: 600,
                          }}
                        >
                          {item.org}
                        </p>
                      </div>
                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <div
                          className="badge badge-blue"
                          style={{ marginBottom: "0.25rem" }}
                        >
                          {item.period}
                        </div>
                        <div
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--fg-muted)",
                          }}
                        >
                          {item.location}
                        </div>
                      </div>
                    </div>

                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--fg-secondary)",
                        lineHeight: 1.7,
                        marginBottom: "1rem",
                      }}
                    >
                      {item.description}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {item.skills.map((skill) => (
                        <span key={skill} className="badge badge-blue" style={{ fontSize: "0.7rem" }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Certifications + Research */}
          <div>
            {/* Certifications */}
            <div style={{ marginBottom: "3rem" }}>
              <div className="section-label">Credentials</div>
              <h3
                style={{
                  fontSize: "1.375rem",
                  fontWeight: 700,
                  color: "var(--fg-primary)",
                  marginBottom: "1.5rem",
                }}
              >
                Certifications & Training
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                }}
              >
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.title}
                    className="glass-card"
                    style={{ padding: "1.25rem" }}
                  >
                    <span style={{ fontSize: "1.5rem", display: "block", marginBottom: "0.5rem" }}>
                      {cert.icon}
                    </span>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "var(--fg-primary)",
                        marginBottom: "0.25rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {cert.title}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--fg-muted)" }}>
                      {cert.issuer}
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "var(--accent-blue)", marginTop: "0.25rem" }}>
                      {cert.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Publication */}
            <div>
              <div className="section-label">Research</div>
              <h3
                style={{
                  fontSize: "1.375rem",
                  fontWeight: 700,
                  color: "var(--fg-primary)",
                  marginBottom: "1.5rem",
                }}
              >
                Publication
              </h3>

              <div
                className="glass-card"
                style={{
                  padding: "1.75rem",
                  borderColor: "rgba(167,139,250,0.2)",
                  background: "rgba(167,139,250,0.04)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                    marginBottom: "1rem",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>📄</span>
                  <div>
                    <h4
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "var(--fg-primary)",
                        marginBottom: "0.5rem",
                        lineHeight: 1.4,
                      }}
                    >
                      Automation of Daily Report Generation Using AI and NLP
                    </h4>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--fg-muted)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Research study on automated analytics pipeline using Python, Pandas, and NLP for business intelligence reporting
                    </p>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                      <span className="badge badge-purple" style={{ fontSize: "0.7rem" }}>Research</span>
                      <span className="badge badge-purple" style={{ fontSize: "0.7rem" }}>NLP</span>
                      <span className="badge badge-purple" style={{ fontSize: "0.7rem" }}>Python</span>
                      <span className="badge badge-purple" style={{ fontSize: "0.7rem" }}>Automation</span>
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--fg-secondary)",
                    lineHeight: 1.75,
                  }}
                >
                  Investigated the application of NLP and automation to reduce manual
                  report generation effort. Demonstrated how Python-based pipelines
                  can process structured business data, compute KPIs, and generate
                  analyst-quality insight commentary automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .experience-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
