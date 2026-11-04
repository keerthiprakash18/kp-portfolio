"use client";
import { useEffect, useState } from "react";

interface CommandItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  action: () => void;
  category: "Navigation" | "Projects" | "Contact";
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const items: CommandItem[] = [
    {
      id: "resume",
      title: "Download Official Resume",
      subtitle: "High-readability ATS 10.5pt PDF",
      icon: "📄",
      category: "Navigation",
      action: () => window.open("/resume.pdf", "_blank"),
    },
    {
      id: "datalab",
      title: "Open Interactive SQL Studio",
      subtitle: "Run analytics queries with execution telemetry",
      icon: "⚡",
      category: "Navigation",
      action: () => {
        window.location.hash = "#datalab";
        setOpen(false);
      },
    },
    {
      id: "fcarena",
      title: "Inspect FC Arena",
      subtitle: "Live football esports tournament management platform",
      icon: "🏆",
      category: "Projects",
      action: () => window.open("https://fcarena.in", "_blank"),
    },
    {
      id: "expensetracker",
      title: "Inspect Smart Expense Tracker",
      subtitle: "OCR-assisted financial architecture on Vercel/Railway",
      icon: "💳",
      category: "Projects",
      action: () => window.open("https://smart-expense-tracker-v3.vercel.app", "_blank"),
    },
    {
      id: "research",
      title: "Read IJFMR Research Paper",
      subtitle: "Smart Daily Report Automation System Using AI (Paper ID: 72819)",
      icon: "🔬",
      category: "Projects",
      action: () => {
        window.location.hash = "#experience";
        setOpen(false);
      },
    },
    {
      id: "linkedin",
      title: "Open LinkedIn Profile",
      subtitle: "linkedin.com/in/keerthiprakasht",
      icon: "💼",
      category: "Contact",
      action: () => window.open("https://linkedin.com/in/keerthiprakasht", "_blank"),
    },
    {
      id: "github",
      title: "Explore GitHub Repositories",
      subtitle: "github.com/keerthiprakash18",
      icon: "⌨️",
      category: "Contact",
      action: () => window.open("https://github.com/keerthiprakash18", "_blank"),
    },
    {
      id: "email",
      title: "Copy Email Address",
      subtitle: "keerthiprakash.kp33@gmail.com",
      icon: "✉️",
      category: "Contact",
      action: () => {
        navigator.clipboard.writeText("keerthiprakash.kp33@gmail.com");
        alert("Email copied to clipboard!");
        setOpen(false);
      },
    },
  ];

  const filtered = items.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        background: "rgba(3, 7, 18, 0.75)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "14vh",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
      onClick={() => setOpen(false)}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          background: "#080F20",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "16px",
          boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 35px rgba(59, 130, 246, 0.25)",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0.85rem 1.25rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            gap: "0.75rem",
          }}
        >
          <span style={{ fontSize: "1.1rem", color: "#60A5FA" }}>🔍</span>
          <input
            autoFocus
            type="text"
            placeholder="Type a command or search (e.g. SQL, FC Arena, Resume)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#FFFFFF",
              fontSize: "0.95rem",
              fontFamily: "inherit",
            }}
          />
          <span
            style={{
              fontSize: "0.7rem",
              padding: "0.2rem 0.5rem",
              borderRadius: "4px",
              background: "rgba(255, 255, 255, 0.08)",
              color: "#94A3B8",
              fontFamily: "monospace",
            }}
          >
            ESC
          </span>
        </div>

        {/* List */}
        <div style={{ maxHeight: "360px", overflowY: "auto", padding: "0.5rem" }}>
          {filtered.length === 0 ? (
            <div style={{ padding: "2rem", textAlign: "center", color: "#64748B", fontSize: "0.875rem" }}>
              No matching commands found.
            </div>
          ) : (
            filtered.map((item, index) => (
              <div
                key={item.id}
                onClick={() => item.action()}
                onMouseEnter={() => setSelectedIndex(index)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.65rem 0.85rem",
                  borderRadius: "10px",
                  cursor: "pointer",
                  background: selectedIndex === index ? "rgba(59, 130, 246, 0.15)" : "transparent",
                  border: selectedIndex === index ? "1px solid rgba(59, 130, 246, 0.3)" : "1px solid transparent",
                  transition: "background 0.15s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                  <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#FFFFFF" }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#94A3B8" }}>
                      {item.subtitle}
                    </div>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "0.68rem",
                    padding: "0.15rem 0.45rem",
                    borderRadius: "4px",
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "#64748B",
                  }}
                >
                  {item.category}
                </span>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div
          style={{
            padding: "0.6rem 1rem",
            background: "rgba(0, 0, 0, 0.4)",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "0.72rem",
            color: "#64748B",
          }}
        >
          <span>Use <b>↑</b> <b>↓</b> to navigate</span>
          <span>Press <b>Ctrl + K</b> anytime to toggle</span>
        </div>
      </div>
    </div>
  );
}
