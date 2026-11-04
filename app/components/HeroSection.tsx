"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        paddingTop: "110px",
        paddingBottom: "60px",
        overflow: "hidden",
      }}
    >
      {/* Dynamic Ambient Spotlights */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          left: "20%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Value Proposition & Identity */}
          <div>
            {/* Live Status Pill with Ping */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.65rem",
                padding: "0.4rem 0.95rem",
                borderRadius: "var(--radius-full)",
                background: "rgba(16, 185, 129, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.25)",
                marginBottom: "1.75rem",
                boxShadow: "0 0 20px rgba(16, 185, 129, 0.1)",
              }}
            >
              <span className="status-beacon" />
              <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#34D399", letterSpacing: "0.01em" }}>
                Ready to Join · Available for Immediate Placement
              </span>
            </div>

            {/* Principal Name Typography */}
            <h1
              style={{
                fontSize: "clamp(2.75rem, 5.5vw, 4.75rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                color: "#FFFFFF",
                marginBottom: "0.85rem",
              }}
            >
              KEERTHI <span className="text-gradient">PRAKASH T</span>
            </h1>

            {/* High-Velocity Role Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem", marginBottom: "1.75rem" }}>
              {[
                { title: "Data Analyst", color: "#60A5FA" },
                { title: "Business Intelligence", color: "#38BDF8" },
                { title: "AI-Assisted Developer", color: "#818CF8" },
              ].map((badge) => (
                <span
                  key={badge.title}
                  style={{
                    padding: "0.3rem 0.75rem",
                    borderRadius: "6px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: badge.color,
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.01em",
                  }}
                >
                  {badge.title}
                </span>
              ))}
            </div>

            {/* Headline with Linear Style Contrast */}
            <h2
              style={{
                fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)",
                fontWeight: 700,
                color: "#F8FAFC",
                lineHeight: 1.35,
                letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
              }}
            >
              Turning raw data into strategic intelligence. <br />
              <span className="text-gradient-silver">Building complex ideas into production-ready software.</span>
            </h2>

            {/* Impact Narrative */}
            <p
              style={{
                fontSize: "1.025rem",
                color: "#94A3B8",
                lineHeight: 1.75,
                maxWidth: "560px",
                marginBottom: "2.25rem",
              }}
            >
              Graduating with a <b>B.Tech in Artificial Intelligence & Data Science</b> (CARE College of Engineering, CGPA 7.29). Specializing in <b>SQL, PostgreSQL, Python analytics, Advanced Excel, and Power BI dashboards</b>. Experienced in architecting live production systems like <b>FC Arena</b> and authoring published research on automated AI reporting with <b>70%+ turnaround acceleration</b>.
            </p>

            {/* Key Action Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem", marginBottom: "2.25rem" }}>
              <a href="#datalab" className="linear-btn-primary">
                <span>⚡ Open SQL Data Lab</span>
              </a>
              <a href="#projects" className="linear-btn-secondary">
                <span>Explore Live Projects →</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="linear-btn-secondary"
                style={{ borderColor: "rgba(59, 130, 246, 0.35)", color: "#60A5FA" }}
              >
                <span>↓ Download Resume (10.5pt PDF)</span>
              </a>
            </div>

            {/* Interactive Shortcut Hint */}
            <div
              onClick={() => {
                const event = new KeyboardEvent("keydown", { key: "k", ctrlKey: true });
                window.dispatchEvent(event);
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 0.85rem",
                borderRadius: "8px",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                fontSize: "0.775rem",
                color: "#64748B",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.4)";
                e.currentTarget.style.color = "#94A3B8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.color = "#64748B";
              }}
            >
              <span>Quick Navigation:</span>
              <kbd style={{ padding: "0.15rem 0.45rem", borderRadius: "4px", background: "rgba(255,255,255,0.08)", color: "#E2E8F0", fontFamily: "monospace" }}>Ctrl</kbd>
              <span>+</span>
              <kbd style={{ padding: "0.15rem 0.45rem", borderRadius: "4px", background: "rgba(255,255,255,0.08)", color: "#E2E8F0", fontFamily: "monospace" }}>K</kbd>
            </div>
          </div>

          {/* Right Column: Holographic Portrait Display */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} className="hero-portrait-wrapper">
            <div
              style={{
                position: "relative",
                width: "320px",
                height: "380px",
                borderRadius: "24px",
                padding: "8px",
                background: "linear-gradient(145deg, rgba(59, 130, 246, 0.4) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(6, 182, 212, 0.3) 100%)",
                boxShadow: "0 20px 60px -10px rgba(0, 0, 0, 0.8), 0 0 50px rgba(59, 130, 246, 0.25)",
              }}
            >
              {/* Inner Picture Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "18px",
                  overflow: "hidden",
                  background: "#080F20",
                }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Keerthi Prakash T — Data Analyst & Developer"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 15%" }}
                  priority
                />

                {/* Subtle Bottom Vignette */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(3, 7, 18, 0.85) 0%, transparent 40%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Live Badge Overlay */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    right: "16px",
                    padding: "0.6rem 0.85rem",
                    borderRadius: "12px",
                    background: "rgba(10, 18, 38, 0.85)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#FFFFFF" }}>
                      Keerthi Prakash T
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "#38BDF8" }}>
                      CARE College of Engg &bull; CGPA 7.29
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "6px",
                      background: "rgba(16, 185, 129, 0.15)",
                      color: "#34D399",
                      fontWeight: 600,
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                    }}
                  >
                    Verified
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Banner Below Portrait */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "0.75rem",
                width: "100%",
                maxWidth: "340px",
                marginTop: "1.25rem",
              }}
            >
              {[
                { val: "70%+", label: "Reporting Speed" },
                { val: "20+", label: "Active Esports Users" },
                { val: "1 Paper", label: "IJFMR Published" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="glass-panel"
                  style={{ padding: "0.75rem 0.5rem", textAlign: "center", borderRadius: "12px" }}
                >
                  <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#60A5FA", letterSpacing: "-0.02em" }}>
                    {m.val}
                  </div>
                  <div style={{ fontSize: "0.65rem", color: "#94A3B8", marginTop: "0.15rem" }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .hero-portrait-wrapper {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
