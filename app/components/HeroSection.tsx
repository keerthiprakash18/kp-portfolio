"use client";

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        paddingTop: "96px",
        overflow: "hidden",
      }}
    >
      {/* Ambient glows */}
      <div
        className="ambient-glow ambient-glow-blue"
        style={{ top: "-100px", left: "-200px", opacity: 0.25 }}
        aria-hidden="true"
      />
      <div
        className="ambient-glow ambient-glow-cyan"
        style={{ top: "200px", right: "-100px", opacity: 0.15 }}
        aria-hidden="true"
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "4rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Text Content */}
          <div>
            {/* Availability indicator */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.4rem 1rem",
                borderRadius: "999px",
                background: "rgba(74, 222, 128, 0.08)",
                border: "1px solid rgba(74, 222, 128, 0.2)",
                marginBottom: "2rem",
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "#4ade80",
              }}
            >
              <span className="availability-dot" />
              Available for roles — Open to opportunities
            </div>

            {/* Name */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                marginBottom: "0.75rem",
              }}
            >
              <span className="gradient-text-warm">Keerthi</span>
              <br />
              <span style={{ color: "var(--fg-primary)" }}>Prakash T</span>
            </h1>

            {/* Role */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "1.75rem",
              }}
            >
              {[
                "Data Analyst",
                "Business Analytics",
                "AI-Assisted Developer",
              ].map((role, i) => (
                <span key={role} className="badge badge-blue" style={{ fontSize: "0.8125rem" }}>
                  {i > 0 && <span style={{ color: "var(--fg-muted)", marginRight: "0.25rem" }}>·</span>}
                  {role}
                </span>
              ))}
            </div>

            {/* Headline */}
            <p
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                fontWeight: 600,
                color: "var(--fg-primary)",
                marginBottom: "1rem",
                lineHeight: 1.4,
                letterSpacing: "-0.01em",
              }}
            >
              Turning Data into Decisions.
              <br />
              <span className="gradient-text">Building Ideas into Real Products.</span>
            </p>

            {/* Bio */}
            <p
              style={{
                fontSize: "1rem",
                color: "var(--fg-secondary)",
                lineHeight: 1.75,
                maxWidth: "540px",
                marginBottom: "2.5rem",
              }}
            >
              B.Tech in Artificial Intelligence &amp; Data Science (CARE College of Engineering, 2022–2026, CGPA 7.29) with hands-on expertise in SQL, Python, Power BI, Advanced Excel, and business analytics. Builder of live platforms like <strong>FC Arena</strong> and <strong>Smart Expense Tracker</strong>, with published research in automated AI reporting.
            </p>

            {/* Achievement chips */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                marginBottom: "2.5rem",
              }}
            >
              {[
                { icon: "📊", label: "SQL, Python & Power BI" },
                { icon: "🏆", label: "FC Arena — Live Platform" },
                { icon: "📄", label: "Published Author (IJFMR)" },
                { icon: "📈", label: "AccioJob & PwC Analytics" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.35rem 0.85rem",
                    background: "var(--bg-glass-light)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "999px",
                    fontSize: "0.8rem",
                    color: "var(--fg-secondary)",
                  }}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                marginBottom: "2.5rem",
              }}
            >
              <a href="#projects" className="btn btn-primary btn-lg">
                View Projects →
              </a>
              <a href="#contact" className="btn btn-secondary btn-lg">
                Get in Touch
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                ↓ Download Resume
              </a>
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <a
                href="https://github.com/keerthiprakash18"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.875rem",
                  padding: "0.4rem 0.75rem",
                }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/keerthiprakasht"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.875rem",
                  padding: "0.4rem 0.75rem",
                }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Image Area */}
          <div
            className="hero-image-col"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            {/* Avatar container */}
            <div
              style={{
                position: "relative",
                width: "280px",
                height: "280px",
              }}
            >
              {/* Rotating ring */}
              <div
                style={{
                  position: "absolute",
                  inset: "-12px",
                  borderRadius: "50%",
                  background:
                    "conic-gradient(from 0deg, transparent 60%, rgba(59,130,246,0.6) 80%, transparent 100%)",
                  animation: "spin 8s linear infinite",
                }}
                aria-hidden="true"
              />
              {/* Static ring */}
              <div
                style={{
                  position: "absolute",
                  inset: "-6px",
                  borderRadius: "50%",
                  border: "1px solid rgba(59,130,246,0.2)",
                }}
                aria-hidden="true"
              />

              {/* Avatar */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #1e3a5f, #0d1a3a)",
                  border: "3px solid rgba(59,130,246,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow:
                    "0 20px 60px rgba(0,0,0,0.6), 0 0 60px rgba(59,130,246,0.2)",
                  overflow: "hidden",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span
                  style={{
                    fontWeight: 800,
                    fontSize: "3rem",
                    letterSpacing: "-0.02em",
                    background: "linear-gradient(135deg, #3b82f6, #22d3ee)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  KP
                </span>
              </div>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.75rem",
                width: "100%",
              }}
            >
              {[
                { value: "7.29", label: "CGPA (B.Tech AI & DS)" },
                { value: "2026", label: "CARE College of Engg" },
                { value: "70%+", label: "Reporting Time Reduced" },
                { value: "1 Paper", label: "IJFMR Published" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card"
                  style={{
                    padding: "0.875rem",
                    textAlign: "center",
                    borderRadius: "12px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "var(--accent-blue-bright)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--fg-muted)",
                      marginTop: "0.2rem",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          color: "var(--fg-muted)",
          fontSize: "0.75rem",
          animation: "float 2s ease-in-out infinite",
        }}
        aria-hidden="true"
      />

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-image-col {
            order: -1;
          }
        }
        @media (max-width: 600px) {
          .hero-image-col > div:first-child {
            width: 200px !important;
            height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
}
