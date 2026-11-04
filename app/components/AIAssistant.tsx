"use client";
import { useState } from "react";

const QUICK_QUESTIONS = [
  "What roles are you targeting?",
  "Tell me about FC Arena",
  "What are your top technical skills?",
  "Have you published any research?",
  "What is the Smart Expense Tracker?",
  "Are you available to work?",
];

const KNOWLEDGE_BASE: Record<string, string> = {
  "roles": `I am actively targeting roles as a **Data Analyst**, **Business Analyst**, and **BI Analyst**. I am also open to **Data Engineer** and **Product Analyst** positions where my combination of analytics and product development experience adds value. I bring SQL, Python, Power BI, and business intelligence skills alongside real product-building experience.`,
  "fc arena": `**FC Arena** (fcarena.in) is a live football esports tournament platform I built and own. It handles:\n\n• Tournament and league creation and management\n• Automated fixture scheduling and bracket generation\n• Match results and live score tracking\n• Player rankings, leaderboards, and statistics\n• Admin dashboard for tournament organizers\n\nIt is a real, deployed product used by actual players. Stack: React, Django REST, PostgreSQL, Railway, Vercel.`,
  "skills": `My primary technical skills:\n\n**Data & Analytics:** SQL (MySQL/PostgreSQL), Python (Pandas, NumPy), Power BI, Excel\n**Business Intelligence:** Dashboard design, KPI reporting, data storytelling\n**Development:** Django REST, React, TypeScript, Next.js, PostgreSQL\n**AI Tools:** Prompt engineering, AI-assisted development, OCR integration\n\nSQL and Python are my core tools for data work.`,
  "research": `I authored a research study on **Automation of Daily Report Generation Using AI and NLP**. The research investigates how Python-based pipelines can automate business report generation using NLP, reducing manual analyst effort while producing KPI-driven insights automatically.`,
  "expense tracker": `The **Smart Expense Tracker** (V3) is a production-grade personal finance application:\n\n• OCR receipt extraction from camera photos, images, and PDFs\n• Monthly dashboard with category analytics and cash-flow charts\n• AI-powered finance assistant (English, Tamil, Tanglish)\n• Credit card tracking and budget monitoring\n• Installable PWA + Android app via Capacitor\n• Django REST backend, React/Vite frontend, Supabase auth\n\nThis is a real, fully-featured application with 2FA, backup/restore, and email verification.`,
  "available": `Yes — I am **currently available for opportunities** as of late 2026. I am open to full-time roles, contract work, and collaborative projects. Feel free to reach me via the Contact section or through LinkedIn.`,
  "contact": `You can reach me through:\n\n• **Email:** Use the contact form on this page\n• **LinkedIn:** linkedin.com/in/keerthiprakasht\n• **GitHub:** github.com/keerthiprakash\n\nI typically respond within 24–48 hours.`,
  "about": `I am **Keerthi Prakash T**, an MBA graduate specializing in Business Analytics. I combine data analytics expertise with product development skills — I build and ship real products rather than just studying concepts.\n\nMy background spans SQL analytics, Python data processing, Power BI reporting, and full-stack development. I use AI tools strategically to deliver higher quality work faster.`,
};

function getAnswer(question: string): string {
  const q = question.toLowerCase();
  
  if (q.includes("role") || q.includes("target") || q.includes("job") || q.includes("position") || q.includes("looking"))
    return KNOWLEDGE_BASE["roles"];
  if (q.includes("fc arena") || q.includes("esport") || q.includes("tournament") || q.includes("football"))
    return KNOWLEDGE_BASE["fc arena"];
  if (q.includes("skill") || q.includes("technical") || q.includes("sql") || q.includes("python") || q.includes("power bi"))
    return KNOWLEDGE_BASE["skills"];
  if (q.includes("research") || q.includes("publish") || q.includes("paper"))
    return KNOWLEDGE_BASE["research"];
  if (q.includes("expense") || q.includes("tracker") || q.includes("finance") || q.includes("ocr"))
    return KNOWLEDGE_BASE["expense tracker"];
  if (q.includes("available") || q.includes("hire") || q.includes("open to"))
    return KNOWLEDGE_BASE["available"];
  if (q.includes("contact") || q.includes("reach") || q.includes("email"))
    return KNOWLEDGE_BASE["contact"];
  if (q.includes("about") || q.includes("who") || q.includes("keerthi"))
    return KNOWLEDGE_BASE["about"];
  
  return `I don't have a specific answer for that. I am best equipped to answer questions about:\n\n• My target roles and skills\n• FC Arena — the esports platform\n• Smart Expense Tracker\n• Research publication\n• Availability and contact info\n\nFeel free to rephrase or ask something else!`;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

function formatMessage(text: string) {
  // Simple markdown-like formatting
  const lines = text.split("\n");
  return lines.map((line, i) => {
    // Bold
    const formatted = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    // Bullets
    if (line.startsWith("•")) {
      return (
        <div key={i} style={{ display: "flex", gap: "0.5rem", marginBottom: "0.25rem" }}>
          <span style={{ color: "var(--accent-blue-bright)", flexShrink: 0 }}>•</span>
          <span dangerouslySetInnerHTML={{ __html: formatted.slice(1).trim() }} />
        </div>
      );
    }
    if (line === "") return <div key={i} style={{ marginBottom: "0.25rem" }} />;
    return <div key={i} style={{ marginBottom: "0.1rem" }} dangerouslySetInnerHTML={{ __html: formatted }} />;
  });
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm the portfolio assistant for Keerthi Prakash T. Ask me about his skills, projects, experience, or availability — I'll give you accurate answers based on his actual portfolio.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const answer = getAnswer(text);
      setMessages((prev) => [...prev, { role: "assistant", content: answer }]);
      setTyping(false);
    }, 800);
  };

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close portfolio assistant" : "Open portfolio assistant"}
        style={{
          position: "fixed",
          bottom: "1.75rem",
          right: "1.75rem",
          zIndex: 200,
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #3b82f6, #22d3ee)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          boxShadow: "0 8px 32px rgba(59,130,246,0.4)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        {open ? "✕" : "💬"}
      </button>

      {/* Chat window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "5rem",
            right: "1.75rem",
            zIndex: 199,
            width: "min(380px, calc(100vw - 3.5rem))",
            height: "min(500px, calc(100vh - 10rem))",
            display: "flex",
            flexDirection: "column",
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-default)",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "1rem 1.25rem",
              background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(34,211,238,0.08))",
              borderBottom: "1px solid var(--border-subtle)",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #3b82f6, #22d3ee)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
              }}
            >
              🤖
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>Portfolio Assistant</div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.7rem", color: "#4ade80" }}>
                <span className="availability-dot" style={{ width: "6px", height: "6px" }} />
                Active
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "88%",
                    padding: "0.625rem 0.875rem",
                    borderRadius: msg.role === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                    background:
                      msg.role === "user"
                        ? "linear-gradient(135deg, #3b82f6, #22d3ee)"
                        : "rgba(255,255,255,0.05)",
                    border: msg.role === "user" ? "none" : "1px solid var(--border-subtle)",
                    fontSize: "0.825rem",
                    color: msg.role === "user" ? "white" : "var(--fg-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {msg.role === "assistant" ? formatMessage(msg.content) : msg.content}
                </div>
              </div>
            ))}

            {typing && (
              <div style={{ display: "flex", gap: "4px", padding: "0.5rem 0.75rem", alignSelf: "flex-start" }}>
                {[0, 0.2, 0.4].map((delay, i) => (
                  <div
                    key={i}
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: "var(--fg-muted)",
                      animation: `typing-bounce 1s ${delay}s infinite`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Quick questions */}
          <div
            style={{
              padding: "0.5rem 0.75rem",
              borderTop: "1px solid var(--border-subtle)",
              display: "flex",
              gap: "0.4rem",
              overflowX: "auto",
              flexShrink: 0,
            }}
          >
            {QUICK_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                style={{
                  whiteSpace: "nowrap",
                  padding: "0.3rem 0.6rem",
                  borderRadius: "999px",
                  background: "rgba(59,130,246,0.1)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  color: "var(--accent-blue-bright)",
                  fontSize: "0.7rem",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div
            style={{
              padding: "0.75rem",
              borderTop: "1px solid var(--border-subtle)",
              display: "flex",
              gap: "0.5rem",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") sendMessage(input); }}
              placeholder="Ask about Keerthi's experience..."
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "8px",
                padding: "0.5rem 0.75rem",
                color: "var(--fg-primary)",
                fontSize: "0.825rem",
                outline: "none",
              }}
            />
            <button
              onClick={() => sendMessage(input)}
              className="btn btn-primary btn-sm"
              style={{ flexShrink: 0 }}
            >
              Send
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes typing-bounce {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </>
  );
}
