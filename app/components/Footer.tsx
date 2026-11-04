"use client";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        padding: "2rem 0",
        textAlign: "center",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ fontSize: "0.875rem", color: "var(--fg-muted)" }}>
            <span className="gradient-text" style={{ fontWeight: 700 }}>
              Keerthi Prakash T
            </span>{" "}
            — Data Analyst & Product Developer
          </div>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[
              { label: "GitHub", href: "https://github.com/keerthiprakash" },
              { label: "LinkedIn", href: "https://linkedin.com/in/keerthiprakasht" },
              { label: "Resume", href: "/resume.pdf" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.8rem",
                  color: "var(--fg-muted)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "var(--fg-primary)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "var(--fg-muted)";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ fontSize: "0.75rem", color: "var(--fg-disabled)" }}>
            © {new Date().getFullYear()} Keerthi Prakash T. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
