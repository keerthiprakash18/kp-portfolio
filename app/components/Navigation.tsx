"use client";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#skills" },
  { label: "Engineering", href: "#projects" },
  { label: "Data Studio", href: "#datalab" },
  { label: "Credentials", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "72px",
        display: "flex",
        alignItems: "center",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        background: scrolled ? "rgba(3, 7, 18, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: "#FFFFFF",
              fontSize: "0.95rem",
              boxShadow: "0 4px 15px rgba(59, 130, 246, 0.4)",
            }}
          >
            KP
          </div>
          <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.02em" }}>
            Keerthi Prakash
          </span>
        </a>

        {/* Desktop Nav Items */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.75rem" }} className="desktop-links">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontSize: "0.85rem",
                color: "#94A3B8",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#94A3B8";
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Action Terminal: Command Palette Trigger + Resume */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {/* Quick Ctrl+K pill */}
          <button
            onClick={() => {
              const event = new KeyboardEvent("keydown", { key: "k", ctrlKey: true });
              window.dispatchEvent(event);
            }}
            className="desktop-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.45rem",
              padding: "0.35rem 0.75rem",
              borderRadius: "var(--radius-full)",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "#94A3B8",
              fontSize: "0.75rem",
              cursor: "pointer",
            }}
          >
            <span>Search</span>
            <kbd style={{ padding: "0.1rem 0.35rem", borderRadius: "4px", background: "rgba(255,255,255,0.08)", color: "#FFFFFF", fontFamily: "monospace", fontSize: "0.7rem" }}>
              ⌘K
            </kbd>
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="linear-btn-primary"
            style={{ padding: "0.45rem 1.15rem", fontSize: "0.825rem" }}
          >
            <span>Resume ↗</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            style={{
              display: "none",
              background: "transparent",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "8px",
              padding: "0.4rem 0.6rem",
              color: "#FFFFFF",
              cursor: "pointer",
            }}
            className="mobile-toggle"
          >
            {mobileMenu ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenu && (
        <div
          style={{
            position: "absolute",
            top: "72px",
            left: 0,
            right: 0,
            background: "#050B18",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "1.25rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenu(false)}
              style={{
                fontSize: "0.95rem",
                color: "#CBD5E1",
                textDecoration: "none",
                padding: "0.4rem 0",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .desktop-links {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
