"use client";
import { useState } from "react";

const QUICK_QUESTIONS = [
  "What is your educational background?",
  "What roles are you targeting?",
  "Tell me about FC Arena",
  "What are your top technical skills?",
  "Have you published any research?",
  "What is the Smart Expense Tracker?",
  "Are you available to work?",
];

const KNOWLEDGE_BASE: Record<string, string> = {
  "education": `My educational background & professional training:\n\n• **B.Tech — Artificial Intelligence & Data Science**\n  CARE College of Engineering | 2022–2026 | CGPA: **7.29 / 10**\n• **Data Analytics Program** — AccioJob (6-month comprehensive program | Ongoing)\n• **Business Analytics Program** — PwC (PricewaterhouseCoopers | 2026 | Ongoing)\n• **Certifications:** Business Analytics with Excel (Simplilearn), Data Science Training (Corizo), Networking Training (Kaashiv InfoTech).`,
  "roles": `I am actively targeting entry-level and associate roles as a **Data Analyst**, **Business Analyst**, and **BI Analyst**. With a B.Tech in AI & Data Science and ongoing training at AccioJob & PwC, I bring solid skills in SQL, Python, Advanced Excel, Power BI, data cleaning, and KPI reporting alongside practical experience building real-world digital products.`,
  "fc arena": `**FC Arena** (fcarena.in) is a full-stack football esports tournament platform I engineered and deployed. It handles:\n\n• Round-Robin & Home-and-Away fixture generation\n• Knockout progression, standings & leaderboard rankings\n• Player statistics, match result validation & anti-duplicate logic\n• Admin workflows for organizers (validated with 20+ active players)\n• Stack: Next.js, NestJS, PostgreSQL, Prisma, Redis, JWT.`,
  "skills": `My core technical skill set:\n\n**Data & BI:** SQL, PostgreSQL, Power BI, Advanced Excel, Power Query, Data Cleaning, KPI Tracking, MIS Reporting\n**Python Analytics:** Python, Pandas, NumPy, Data Processing, Anomaly Detection\n**Full-Stack & Systems:** React, Next.js, NestJS, Django REST, Prisma, Redis, Docker\n**AI-Assisted Dev:** Prompt-driven prototyping, AI debugging, automation workflows.`,
  "research": `I published an original research paper:\n\n📄 **Smart Daily Report Automation System Using AI**\n• **Journal:** International Journal of Futuristic Multidisciplinary Research (IJFMR)\n• **Volume/Issue:** Vol. 8 Issue 2, Mar–Apr 2026 (Paper ID: 72819)\n• **Impact:** Reduced reporting turnaround by **70%+** and automated 2–3 hours of repetitive daily report generation using Python, Pandas, and NLP.`,
  "expense tracker": `The **Smart Expense Tracker** is a personal finance system deployed on Vercel & Railway:\n\n• Automatic OCR extraction for receipts (merchant, amount, date, category, tax)\n• Income/expense tracking, bills, budgets, borrow/lend history & savings goals\n• Cash-flow analytics, interactive charts, and CSV data export\n• Stack: React, Django REST Framework, PostgreSQL, JWT, PWA.`,
  "available": `Yes! I am **currently available for roles and internships** in Data Analytics, Business Intelligence, and Business Analytics across Tamil Nadu and remote positions.`,
  "contact": `You can reach me directly via:\n\n• **Email:** keerthiprakash.kp33@gmail.com\n• **Phone:** +91 63819 81530\n• **LinkedIn:** linkedin.com/in/keerthiprakasht\n• **GitHub:** github.com/keerthiprakash18\n• Location: Tamil Nadu, India`,
  "about": `I am **Keerthi Prakash T**, an entry-level Data Analyst graduating with a **B.Tech in Artificial Intelligence & Data Science** from CARE College of Engineering (CGPA 7.29). I specialize in SQL, Python, Advanced Excel, and Power BI, with completed internships at Corizo and Kaashiv InfoTech, and published AI reporting research in IJFMR.`,
};

function getAnswer(question: string): string {
  const q = question.toLowerCase();
  
  if (q.includes("education") || q.includes("degree") || q.includes("college") || q.includes("study") || q.includes("cgpa"))
    return KNOWLEDGE_BASE["education"];
  if (q.includes("role") || q.includes("target") || q.includes("job") || q.includes("position") || q.includes("looking"))
    return KNOWLEDGE_BASE["roles"];
  if (q.includes("fc arena") || q.includes("esport") || q.includes("tournament") || q.includes("football"))
    return KNOWLEDGE_BASE["fc arena"];
  if (q.includes("skill") || q.includes("technical") || q.includes("sql") || q.includes("python") || q.includes("power bi") || q.includes("excel"))
    return KNOWLEDGE_BASE["skills"];
  if (q.includes("research") || q.includes("publish") || q.includes("paper") || q.includes("ijfmr"))
    return KNOWLEDGE_BASE["research"];
  if (q.includes("expense") || q.includes("tracker") || q.includes("finance") || q.includes("ocr"))
    return KNOWLEDGE_BASE["expense tracker"];
  if (q.includes("available") || q.includes("hire") || q.includes("open to"))
    return KNOWLEDGE_BASE["available"];
  if (q.includes("contact") || q.includes("reach") || q.includes("email") || q.includes("phone"))
    return KNOWLEDGE_BASE["contact"];
  if (q.includes("about") || q.includes("who") || q.includes("keerthi"))
    return KNOWLEDGE_BASE["about"];
  
  return `I don't have a specific answer for that. You can ask me about:\n\n• My B.Tech in AI & Data Science & education\n• My target roles & technical skills (SQL, Python, Excel, Power BI)\n• FC Arena & Smart Expense Tracker projects\n• My research publication in IJFMR\n• Contact details & availability!`;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

function formatMessage(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    const formatted = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
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
        "Hi! I'm the portfolio assistant for Keerthi Prakash T. Ask me about his B.Tech in AI & Data Science, analytics skills, FC Arena, published research, or availability!",
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
    }, 600);
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
              placeholder="Ask about Keerthi's background..."
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
