"use client";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Data Lab", href: "#datalab" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.3s ease",
          background: scrolled
            ? "rgba(5, 8, 15, 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(59,130,246,0.12)"
            : "1px solid transparent",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            style={{
              fontWeight: 700,
              fontSize: "1.1rem",
              letterSpacing: "-0.02em",
            }}
          >
            <span className="gradient-text">KP</span>
            <span style={{ color: "var(--fg-muted)" }}> /</span>
          </a>

          {/* Desktop Nav */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${active === link.href.slice(1) ? "active" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm desktop-nav"
            >
              Resume ↗
            </a>
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{
                background: "none",
                border: "1px solid var(--border-default)",
                borderRadius: "8px",
                padding: "0.4rem 0.5rem",
                cursor: "pointer",
                color: "var(--fg-primary)",
                display: "none",
              }}
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            style={{
              background: "var(--bg-secondary)",
              borderTop: "1px solid var(--border-subtle)",
              padding: "1rem 1.5rem",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "0.75rem 0",
                  borderBottom: "1px solid var(--border-subtle)",
                  color:
                    active === link.href.slice(1)
                      ? "var(--accent-blue-bright)"
                      : "var(--fg-secondary)",
                  fontWeight: 500,
                }}
              >
                {link.label}
              </a>
            ))}
            <div style={{ marginTop: "1rem" }}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Download Resume ↗
              </a>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
