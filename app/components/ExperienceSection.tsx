"use client";

const EXPERIENCE = [
  {
    type: "work",
    title: "Data Science Intern",
    org: "Corizo EdTech Pvt Ltd",
    period: "Aug 2025 – Sep 2025",
    location: "Remote",
    description:
      "Worked on analytics case studies using structured datasets and business-focused problem solving. Created and analyzed Excel-based reports, interpreted patterns, and generated actionable business insights.",
    skills: ["Python", "Pandas", "Advanced Excel", "Data Analysis", "EDA"],
    icon: "💼",
  },
  {
    type: "work",
    title: "Networking Intern",
    org: "Kaashiv InfoTech",
    period: "Aug 2024 – Sep 2024",
    location: "Chennai, India",
    description:
      "Completed practical training in networking fundamentals, network architecture, system troubleshooting, and technical documentation.",
    skills: ["Networking", "Troubleshooting", "System Admin", "Documentation"],
    icon: "🌐",
  },
  {
    type: "education",
    title: "B.Tech — Artificial Intelligence & Data Science",
    org: "CARE College of Engineering",
    period: "2022 – 2026",
    location: "Tamil Nadu, India",
    description:
      "Undergraduate degree focusing on Artificial Intelligence, Machine Learning, Data Science, Relational Databases, and Statistics. Maintained a CGPA of 7.29 / 10 with core focus on data analytics and software engineering.",
    skills: ["Artificial Intelligence", "Data Science", "SQL", "Python", "CGPA: 7.29"],
    icon: "🎓",
  },
];

const TRAINING_PROGRAMS = [
  {
    title: "Data Analytics Program",
    issuer: "AccioJob",
    duration: "6-Month Program",
    status: "Ongoing",
    icon: "📈",
  },
  {
    title: "PwC Business Analytics Program",
    issuer: "PricewaterhouseCoopers (PwC)",
    duration: "2026",
    status: "Ongoing",
    icon: "🏢",
  },
];

const CERTIFICATIONS = [
  {
    title: "Business Analytics with Excel",
    issuer: "Simplilearn",
    year: "Certified",
    icon: "📊",
  },
  {
    title: "Data Science Training & Internship",
    issuer: "Corizo",
    year: "Certified",
    icon: "🐍",
  },
  {
    title: "Networking Internship & Training",
    issuer: "Kaashiv InfoTech",
    year: "Certified",
    icon: "🌐",
  },
  {
    title: "Power BI & SQL for Analytics",
    issuer: "Self-Directed / Hands-on",
    year: "Proficient",
    icon: "🗄️",
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

          {/* Right — Programs, Certifications + Research */}
          <div>
            {/* Training Programs */}
            <div style={{ marginBottom: "2rem" }}>
              <div className="section-label">Professional Training</div>
              <h3
                style={{
                  fontSize: "1.375rem",
                  fontWeight: 700,
                  color: "var(--fg-primary)",
                  marginBottom: "1.25rem",
                }}
              >
                Executive & Analytics Programs
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                }}
              >
                {TRAINING_PROGRAMS.map((prog) => (
                  <div
                    key={prog.title}
                    className="glass-card"
                    style={{ padding: "1.25rem" }}
                  >
                    <span style={{ fontSize: "1.5rem", display: "block", marginBottom: "0.5rem" }}>
                      {prog.icon}
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
                      {prog.title}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--fg-muted)" }}>
                      {prog.issuer}
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem", alignItems: "center" }}>
                      <span className="badge badge-cyan" style={{ fontSize: "0.65rem" }}>
                        {prog.status}
                      </span>
                      <span style={{ fontSize: "0.7rem", color: "var(--fg-muted)" }}>
                        {prog.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div style={{ marginBottom: "2.5rem" }}>
              <div className="section-label">Credentials</div>
              <h3
                style={{
                  fontSize: "1.375rem",
                  fontWeight: 700,
                  color: "var(--fg-primary)",
                  marginBottom: "1.25rem",
                }}
              >
                Certifications
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
                    <div style={{ fontSize: "0.7rem", color: "var(--accent-blue-bright)", marginTop: "0.25rem" }}>
                      {cert.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Publication */}
            <div>
              <div className="section-label">Research Publication</div>
              <h3
                style={{
                  fontSize: "1.375rem",
                  fontWeight: 700,
                  color: "var(--fg-primary)",
                  marginBottom: "1.25rem",
                }}
              >
                Published Paper
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
                        marginBottom: "0.35rem",
                        lineHeight: 1.4,
                      }}
                    >
                      Smart Daily Report Automation System Using AI
                    </h4>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--accent-cyan)",
                        marginBottom: "0.5rem",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      IJFMR, Vol. 8 Issue 2, Mar-Apr 2026 · Paper ID: 72819
                    </p>
                    <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                      <span className="badge badge-purple" style={{ fontSize: "0.7rem" }}>IJFMR Published</span>
                      <span className="badge badge-purple" style={{ fontSize: "0.7rem" }}>NLP & AI</span>
                      <span className="badge badge-purple" style={{ fontSize: "0.7rem" }}>70%+ Turnaround Cut</span>
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
                  Published research investigating automated data pipelines with Python, Pandas,
                  KPI tracking, anomaly detection, and NLP-driven executive summaries. Successfully
                  reduced reporting turnaround by 70%+ and automated 2–3 hours of repetitive daily work.
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
