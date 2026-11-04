"use client";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    const subject = encodeURIComponent(form.subject || "Portfolio Inquiry");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:keerthiprakash.kp33@gmail.com?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 500);
  };

  return (
    <section id="contact" className="section">
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, transparent, rgba(59,130,246,0.04) 50%, transparent)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      <div className="container" style={{ position: "relative" }}>
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3.5rem" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Get In Touch</div>
          <h2 className="section-title">Let&rsquo;s Work Together</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Open to Data Analyst, Business Analyst, and BI Analyst roles.
            Ready to contribute analytical thinking and product engineering skills.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Contact info */}
          <div>
            {[
              {
                icon: "✉️",
                label: "Email",
                value: "keerthiprakash.kp33@gmail.com",
                href: "mailto:keerthiprakash.kp33@gmail.com",
              },
              {
                icon: "📱",
                label: "Phone",
                value: "+91 63819 81530",
                href: "tel:+916381981530",
              },
              {
                icon: "🔗",
                label: "LinkedIn",
                value: "linkedin.com/in/keerthiprakasht",
                href: "https://linkedin.com/in/keerthiprakasht",
              },
              {
                icon: "⌨️",
                label: "GitHub",
                value: "github.com/keerthiprakash18",
                href: "https://github.com/keerthiprakash18",
              },
              {
                icon: "📍",
                label: "Location",
                value: "Tamil Nadu, India",
                href: null,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-card"
                style={{ padding: "1.1rem", marginBottom: "0.75rem" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
                  <div>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        color: "var(--fg-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("mailto") || item.href.startsWith("tel") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "0.85rem",
                          color: "var(--accent-blue-bright)",
                          fontWeight: 500,
                          transition: "color 0.2s",
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: "0.85rem", color: "var(--fg-secondary)" }}>
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Resume download */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                width: "100%",
                justifyContent: "center",
                marginTop: "0.5rem",
              }}
            >
              ↓ Download Official Resume (PDF)
            </a>
          </div>

          {/* Contact form */}
          <div className="glass-card" style={{ padding: "2.5rem" }}>
            {status === "sent" ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "3rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <span style={{ fontSize: "3rem" }}>✅</span>
                <h3 style={{ fontSize: "1.25rem", color: "var(--fg-primary)" }}>
                  Message sent!
                </h3>
                <p style={{ color: "var(--fg-muted)", fontSize: "0.9rem" }}>
                  Your email client opened with the message. I&rsquo;ll get back to you within 24–48 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn btn-secondary"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                  <div>
                    <label
                      htmlFor="name"
                      style={{ display: "block", fontSize: "0.8rem", color: "var(--fg-muted)", marginBottom: "0.4rem", fontWeight: 500 }}
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      style={{
                        width: "100%",
                        padding: "0.625rem 0.875rem",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "8px",
                        color: "var(--fg-primary)",
                        fontSize: "0.9rem",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => { e.target.style.borderColor = "var(--accent-blue)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--border-subtle)"; }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      style={{ display: "block", fontSize: "0.8rem", color: "var(--fg-muted)", marginBottom: "0.4rem", fontWeight: 500 }}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={{
                        width: "100%",
                        padding: "0.625rem 0.875rem",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "8px",
                        color: "var(--fg-primary)",
                        fontSize: "0.9rem",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => { e.target.style.borderColor = "var(--accent-blue)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--border-subtle)"; }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    style={{ display: "block", fontSize: "0.8rem", color: "var(--fg-muted)", marginBottom: "0.4rem", fontWeight: 500 }}
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.625rem 0.875rem",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "8px",
                      color: form.subject ? "var(--fg-primary)" : "var(--fg-muted)",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                  >
                    <option value="">Select a topic...</option>
                    <option value="Job Opportunity — Data Analyst">Job Opportunity — Data Analyst</option>
                    <option value="Job Opportunity — Business Analyst">Job Opportunity — Business Analyst</option>
                    <option value="Job Opportunity — BI Analyst">Job Opportunity — BI Analyst</option>
                    <option value="Internship Opportunity">Internship Opportunity</option>
                    <option value="Freelance Analytics Project">Freelance Analytics Project</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    style={{ display: "block", fontSize: "0.8rem", color: "var(--fg-muted)", marginBottom: "0.4rem", fontWeight: 500 }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the role, team or project..."
                    style={{
                      width: "100%",
                      padding: "0.625rem 0.875rem",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "8px",
                      color: "var(--fg-primary)",
                      fontSize: "0.9rem",
                      outline: "none",
                      resize: "vertical",
                      fontFamily: "inherit",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => { e.target.style.borderColor = "var(--accent-blue)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--border-subtle)"; }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === "sending"}
                  style={{ opacity: status === "sending" ? 0.7 : 1, alignSelf: "flex-start", padding: "0.75rem 2rem" }}
                >
                  {status === "sending" ? "Opening email..." : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
