"use client";
import { useEffect, useState } from "react";

export default function RobotGreeting() {
  const [visible, setVisible] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Hello! Welcome to Keerthi Prakash's Portfolio. Feel free to explore my interactive SQL Data Lab, live full-stack projects, and verified research.";

  useEffect(() => {
    // Show banner after 1.2 seconds of initial load
    const timer = setTimeout(() => {
      setVisible(true);
      setSpeaking(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setSpeaking(false);
      }
    }, 24);

    return () => clearInterval(interval);
  }, [visible]);

  // Voice speech synthesis trigger in standard English
  const playVoice = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance("Hello! Welcome to Keerthi Prakash's Portfolio. Feel free to explore my interactive SQL Data Lab, live full-stack projects, and verified research.");
      utterance.lang = "en-US";
      utterance.rate = 0.95;
      utterance.pitch = 1.05;
      setSpeaking(true);
      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => setSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "84px",
        right: "1.5rem",
        zIndex: 90,
        maxWidth: "380px",
        background: "rgba(9, 13, 24, 0.95)",
        border: "1px solid rgba(59, 130, 246, 0.35)",
        borderRadius: "16px",
        padding: "0.85rem 1.15rem",
        boxShadow: "0 12px 36px rgba(0,0,0,0.6), 0 0 24px rgba(59, 130, 246, 0.2)",
        backdropFilter: "blur(16px)",
        animation: "slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className="robot-greeting"
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem" }}>
        {/* Animated Robot Avatar */}
        <div
          onClick={playVoice}
          title="Click to hear audio introduction"
          style={{
            position: "relative",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #3b82f6, #22d3ee)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.35rem",
            flexShrink: 0,
            cursor: "pointer",
            boxShadow: speaking ? "0 0 16px #22d3ee" : "none",
            transform: speaking ? "scale(1.05)" : "scale(1)",
            transition: "all 0.2s ease",
          }}
        >
          🤖
          {speaking && (
            <span
              style={{
                position: "absolute",
                inset: "-4px",
                borderRadius: "50%",
                border: "2px solid #22d3ee",
                animation: "pulse-ring 1.2s infinite",
              }}
            />
          )}
        </div>

        {/* Speech text */}
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--accent-blue-bright)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Portfolio AI Guide
            </span>
            <button
              onClick={() => {
                if ("speechSynthesis" in window) window.speechSynthesis.cancel();
                setVisible(false);
              }}
              aria-label="Close greeting"
              style={{
                background: "transparent",
                border: "none",
                color: "var(--fg-muted)",
                cursor: "pointer",
                fontSize: "0.9rem",
                padding: "0 0.25rem",
              }}
            >
              ✕
            </button>
          </div>
          
          <p
            style={{
              fontSize: "0.825rem",
              color: "var(--fg-primary)",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            {text}
            {speaking && <span className="typing-cursor">|</span>}
          </p>

          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.6rem" }}>
            <button
              onClick={playVoice}
              style={{
                padding: "0.2rem 0.55rem",
                borderRadius: "6px",
                background: "rgba(59, 130, 246, 0.15)",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                color: "var(--accent-cyan)",
                fontSize: "0.7rem",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
              }}
            >
              🔊 Play Voice
            </button>
            <a
              href="#datalab"
              onClick={() => {
                if ("speechSynthesis" in window) window.speechSynthesis.cancel();
                setVisible(false);
              }}
              style={{
                padding: "0.2rem 0.55rem",
                borderRadius: "6px",
                background: "transparent",
                border: "1px solid var(--border-subtle)",
                color: "var(--fg-secondary)",
                fontSize: "0.7rem",
                textDecoration: "none",
              }}
            >
              Explore Data Lab →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        .typing-cursor {
          display: inline-block;
          animation: blink 0.7s infinite;
          color: var(--accent-cyan);
          font-weight: bold;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (max-width: 600px) {
          .robot-greeting {
            right: 1rem !important;
            left: 1rem !important;
            max-width: none !important;
            top: 76px !important;
          }
        }
      `}</style>
    </div>
  );
}
