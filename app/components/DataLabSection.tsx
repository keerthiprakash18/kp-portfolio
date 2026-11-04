"use client";
import { useState } from "react";

// ─── Simulated SQL queries and results ─────────────────────────────────────

const SAMPLE_QUERIES = [
  {
    id: "top_spenders",
    label: "Top Spending Categories",
    query: `SELECT
  category,
  COUNT(*) AS transactions,
  SUM(amount) AS total_spent,
  ROUND(AVG(amount), 2) AS avg_transaction,
  ROUND(SUM(amount) * 100.0 / (
    SELECT SUM(amount) FROM expenses
    WHERE month = 'October 2026'
  ), 1) AS pct_of_total
FROM expenses
WHERE month = 'October 2026'
GROUP BY category
ORDER BY total_spent DESC
LIMIT 8;`,
    description: "Breakdown of monthly spending by category",
    result: {
      columns: ["category", "transactions", "total_spent", "avg_transaction", "pct_of_total"],
      rows: [
        ["Food & Dining", 42, 18450, 439.29, 24.6],
        ["Transportation", 28, 12300, 439.29, 16.4],
        ["Shopping", 15, 9800, 653.33, 13.1],
        ["Utilities", 6, 7200, 1200.0, 9.6],
        ["Entertainment", 11, 5600, 509.09, 7.5],
        ["Healthcare", 4, 4200, 1050.0, 5.6],
        ["Education", 3, 3800, 1266.67, 5.1],
        ["Miscellaneous", 20, 3600, 180.0, 4.8],
      ],
    },
    insight:
      "Food & Dining dominates at 24.6% of total spend. Transportation and Shopping together account for nearly 30%. Consider setting category budgets for these top-3 spenders.",
    chartType: "bar",
  },
  {
    id: "monthly_trend",
    label: "Monthly Spending Trend",
    query: `SELECT
  TO_CHAR(transaction_date, 'Mon YYYY') AS month,
  SUM(amount) AS total_spent,
  SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) AS income,
  SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) AS expenses,
  SUM(CASE WHEN type = 'income' THEN amount ELSE -amount END) AS net_cashflow
FROM transactions
WHERE transaction_date >= NOW() - INTERVAL '6 months'
GROUP BY TO_CHAR(transaction_date, 'Mon YYYY'),
         DATE_TRUNC('month', transaction_date)
ORDER BY DATE_TRUNC('month', transaction_date);`,
    description: "6-month income vs expense trend with net cashflow",
    result: {
      columns: ["month", "income", "expenses", "net_cashflow"],
      rows: [
        ["May 2026", 65000, 48200, 16800],
        ["Jun 2026", 65000, 52100, 12900],
        ["Jul 2026", 72000, 55400, 16600],
        ["Aug 2026", 65000, 61200, 3800],
        ["Sep 2026", 68000, 49800, 18200],
        ["Oct 2026", 65000, 74900, -9900],
      ],
    },
    insight:
      "October 2026 shows a negative cashflow of ₹9,900 — the first deficit month in 6 months. July had the highest income at ₹72K. The trend shows spending volatility that warrants a budget review.",
    chartType: "line",
  },
  {
    id: "budget_variance",
    label: "Budget vs Actual",
    query: `SELECT
  b.category,
  b.budget_amount,
  COALESCE(SUM(e.amount), 0) AS actual_spent,
  b.budget_amount - COALESCE(SUM(e.amount), 0) AS remaining,
  ROUND(COALESCE(SUM(e.amount), 0) * 100.0
    / NULLIF(b.budget_amount, 0), 1) AS utilization_pct,
  CASE
    WHEN COALESCE(SUM(e.amount), 0) > b.budget_amount THEN 'Over Budget'
    WHEN COALESCE(SUM(e.amount), 0) > b.budget_amount * 0.9 THEN 'Near Limit'
    ELSE 'On Track'
  END AS status
FROM budgets b
LEFT JOIN expenses e
  ON e.category = b.category
  AND e.month = b.month
WHERE b.month = 'October 2026'
GROUP BY b.category, b.budget_amount
ORDER BY utilization_pct DESC;`,
    description: "Compare actual spending against set budgets per category",
    result: {
      columns: ["category", "budget_amount", "actual_spent", "remaining", "utilization_pct", "status"],
      rows: [
        ["Food & Dining", 15000, 18450, -3450, 123.0, "Over Budget"],
        ["Shopping", 8000, 9800, -1800, 122.5, "Over Budget"],
        ["Entertainment", 5000, 5600, -600, 112.0, "Over Budget"],
        ["Transportation", 14000, 12300, 1700, 87.9, "Near Limit"],
        ["Utilities", 8000, 7200, 800, 90.0, "Near Limit"],
        ["Healthcare", 5000, 4200, 800, 84.0, "On Track"],
        ["Education", 5000, 3800, 1200, 76.0, "On Track"],
      ],
    },
    insight:
      "3 categories are over budget this month — Food, Shopping, and Entertainment. Food alone exceeded its ₹15K budget by ₹3,450. Recommend reducing restaurant spend and reviewing shopping discretion.",
    chartType: "table",
  },
];

const statusColor = (status: string) => {
  if (status === "Over Budget") return "#f87171";
  if (status === "Near Limit") return "#fbbf24";
  return "#4ade80";
};

function SimpleBarChart({ data }: { data: { label: string; value: number }[] }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {data.map((item) => (
        <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ minWidth: "130px", fontSize: "0.75rem", color: "var(--fg-muted)", textAlign: "right" }}>
            {item.label}
          </div>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: "4px", height: "20px", overflow: "hidden" }}>
            <div
              style={{
                height: "100%",
                width: `${(item.value / max) * 100}%`,
                background: "linear-gradient(90deg, #3b82f6, #22d3ee)",
                borderRadius: "4px",
                transition: "width 0.8s ease",
              }}
            />
          </div>
          <div style={{ minWidth: "60px", fontSize: "0.75rem", color: "var(--accent-blue-bright)", fontWeight: 600, fontFamily: "var(--font-mono)" }}>
            ₹{item.value.toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DataLabSection() {
  const [activeQuery, setActiveQuery] = useState(0);
  const [running, setRunning] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [currentQuery, setCurrentQuery] = useState(SAMPLE_QUERIES[0].query);

  const query = SAMPLE_QUERIES[activeQuery];

  const handleRun = () => {
    setRunning(true);
    setHasRun(false);
    setTimeout(() => {
      setRunning(false);
      setHasRun(true);
    }, 1200);
  };

  return (
    <section id="datalab" className="section">
      <div className="container">
        <div style={{ marginBottom: "3rem" }}>
          <div className="section-label">Interactive Demo</div>
          <h2 className="section-title">Data Lab</h2>
          <p className="section-subtitle">
            An interactive analytics workspace demonstrating SQL fluency and data storytelling.
            All queries run against simulated data — this is a portfolio demonstration, not a live database.
          </p>
        </div>

        {/* Editor container */}
        <div
          className="glass-card"
          style={{ padding: 0, overflow: "hidden" }}
        >
          {/* Editor header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.75rem 1.25rem",
              background: "rgba(0,0,0,0.3)",
              borderBottom: "1px solid var(--border-subtle)",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{ display: "flex", gap: "6px" }}>
                {["#f87171", "#fbbf24", "#4ade80"].map((c) => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} aria-hidden="true" />
                ))}
              </div>
              <span style={{ fontSize: "0.8rem", color: "var(--fg-muted)", fontFamily: "var(--font-mono)" }}>
                analytics.sql
              </span>
            </div>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {SAMPLE_QUERIES.map((q, i) => (
                <button
                  key={q.id}
                  onClick={() => { setActiveQuery(i); setHasRun(false); setCurrentQuery(q.query); }}
                  style={{
                    padding: "0.3rem 0.8rem",
                    borderRadius: "6px",
                    background: i === activeQuery ? "rgba(59,130,246,0.2)" : "transparent",
                    border: i === activeQuery ? "1px solid rgba(59,130,246,0.4)" : "1px solid transparent",
                    color: i === activeQuery ? "var(--accent-blue-bright)" : "var(--fg-muted)",
                    fontSize: "0.75rem",
                    cursor: "pointer",
                    fontWeight: 500,
                    transition: "all 0.2s ease",
                  }}
                >
                  {q.label}
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              minHeight: "300px",
            }}
            className="datalab-grid"
          >
            {/* SQL Editor */}
            <div style={{ borderRight: "1px solid var(--border-subtle)" }}>
              <div
                style={{
                  padding: "0.5rem 1rem",
                  background: "rgba(0,0,0,0.2)",
                  borderBottom: "1px solid var(--border-subtle)",
                  fontSize: "0.7rem",
                  color: "var(--fg-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontFamily: "var(--font-mono)",
                }}
              >
                QUERY EDITOR
              </div>
              <div
                className="code-editor"
                style={{
                  padding: "1.25rem",
                  margin: 0,
                  border: "none",
                  borderRadius: 0,
                  background: "#0d1117",
                  minHeight: "260px",
                  whiteSpace: "pre",
                  overflowX: "auto",
                  fontSize: "0.8rem",
                  lineHeight: 1.7,
                }}
              >
                <pre style={{ fontFamily: "var(--font-mono)" }}>
                  {query.query.split("\n").map((line, i) => (
                    <div key={i}>
                      {line
                        .split(/(SELECT|FROM|WHERE|GROUP BY|ORDER BY|LIMIT|JOIN|LEFT JOIN|INNER JOIN|ON|AND|OR|AS|CASE|WHEN|THEN|ELSE|END|INTO|INSERT|UPDATE|SET|DELETE|HAVING|WITH|DISTINCT|COUNT|SUM|AVG|MAX|MIN|ROUND|COALESCE|NULLIF|TO_CHAR|DATE_TRUNC|NOW|INTERVAL|NOT|NULL|IN|LIKE|BETWEEN|IS|BY|DESC|ASC)/g)
                        .map((part, j) => {
                          const keywords = ["SELECT","FROM","WHERE","GROUP BY","ORDER BY","LIMIT","JOIN","LEFT JOIN","INNER JOIN","ON","AND","OR","AS","CASE","WHEN","THEN","ELSE","END","HAVING","WITH","DISTINCT","NOT","NULL","IN","LIKE","BETWEEN","IS","BY","DESC","ASC"];
                          const funcs = ["COUNT","SUM","AVG","MAX","MIN","ROUND","COALESCE","NULLIF","TO_CHAR","DATE_TRUNC","NOW","INTERVAL"];
                          if (keywords.includes(part)) return <span key={j} className="keyword">{part}</span>;
                          if (funcs.includes(part)) return <span key={j} className="function">{part}</span>;
                          if (part.match(/^'.*'$/)) return <span key={j} className="string">{part}</span>;
                          if (part.match(/^\d+(\.\d+)?$/)) return <span key={j} className="number">{part}</span>;
                          return <span key={j}>{part}</span>;
                        })}
                    </div>
                  ))}
                </pre>
              </div>

              {/* Run button */}
              <div
                style={{
                  padding: "0.75rem 1.25rem",
                  borderTop: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  background: "rgba(0,0,0,0.15)",
                }}
              >
                <button
                  onClick={handleRun}
                  className="btn btn-primary btn-sm"
                  disabled={running}
                  style={{ opacity: running ? 0.7 : 1 }}
                >
                  {running ? (
                    <>
                      <span style={{ display: "inline-block", animation: "spin 1s linear infinite" }}>⟳</span>
                      Running...
                    </>
                  ) : (
                    "▶ Run Query"
                  )}
                </button>
                <span style={{ fontSize: "0.75rem", color: "var(--fg-muted)", fontFamily: "var(--font-mono)" }}>
                  {query.description}
                </span>
              </div>
            </div>

            {/* Results Panel */}
            <div>
              <div
                style={{
                  padding: "0.5rem 1rem",
                  background: "rgba(0,0,0,0.2)",
                  borderBottom: "1px solid var(--border-subtle)",
                  fontSize: "0.7rem",
                  color: "var(--fg-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontFamily: "var(--font-mono)",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>RESULTS</span>
                {hasRun && (
                  <span style={{ color: "#4ade80" }}>
                    {query.result.rows.length} rows returned
                  </span>
                )}
              </div>

              <div style={{ padding: "1rem", overflowX: "auto", minHeight: "260px" }}>
                {!hasRun && !running && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "220px",
                      color: "var(--fg-muted)",
                      fontSize: "0.875rem",
                    }}
                  >
                    <span style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>⚡</span>
                    <span>Press Run Query to execute</span>
                  </div>
                )}

                {running && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "220px",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        border: "3px solid rgba(59,130,246,0.2)",
                        borderTop: "3px solid var(--accent-blue)",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                      }}
                    />
                    <span style={{ color: "var(--fg-muted)", fontSize: "0.875rem" }}>
                      Executing query...
                    </span>
                  </div>
                )}

                {hasRun && (
                  <div style={{ fontSize: "0.78rem" }}>
                    {/* Results table */}
                    <div style={{ overflowX: "auto", marginBottom: "1rem" }}>
                      <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-mono)" }}>
                        <thead>
                          <tr>
                            {query.result.columns.map((col) => (
                              <th
                                key={col}
                                style={{
                                  padding: "0.4rem 0.6rem",
                                  textAlign: "left",
                                  color: "var(--accent-cyan)",
                                  borderBottom: "1px solid var(--border-subtle)",
                                  whiteSpace: "nowrap",
                                  fontWeight: 600,
                                  fontSize: "0.7rem",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.05em",
                                }}
                              >
                                {col}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {query.result.rows.map((row, ri) => (
                            <tr
                              key={ri}
                              style={{
                                background: ri % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                              }}
                            >
                              {row.map((cell, ci) => (
                                <td
                                  key={ci}
                                  style={{
                                    padding: "0.35rem 0.6rem",
                                    color:
                                      typeof cell === "string" && ["Over Budget", "Near Limit", "On Track"].includes(cell)
                                        ? statusColor(cell)
                                        : typeof cell === "number"
                                        ? "var(--accent-blue-bright)"
                                        : "var(--fg-secondary)",
                                    borderBottom: "1px solid rgba(255,255,255,0.03)",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {typeof cell === "number"
                                    ? cell.toLocaleString()
                                    : cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Visualization — simple bar chart for first query */}
                    {activeQuery === 0 && (
                      <div style={{ marginBottom: "0.75rem" }}>
                        <div style={{ fontSize: "0.7rem", color: "var(--fg-muted)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                          Spend by Category (₹)
                        </div>
                        <SimpleBarChart
                          data={(query.result.rows as [string, number, number, number, number][]).map(([cat, , spent]) => ({
                            label: cat,
                            value: spent as number,
                          }))}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Insight panel */}
          {hasRun && (
            <div
              style={{
                padding: "1.25rem 1.5rem",
                background: "rgba(59,130,246,0.06)",
                borderTop: "1px solid rgba(59,130,246,0.15)",
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>💡</span>
              <div>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--accent-blue-bright)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                  Analytics Insight
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--fg-secondary)", lineHeight: 1.7 }}>
                  {query.insight}
                </p>
              </div>
            </div>
          )}
        </div>

        <p style={{ textAlign: "center", fontSize: "0.75rem", color: "var(--fg-muted)", marginTop: "1rem" }}>
          Note: All data shown is simulated for demonstration purposes. No live database connection.
        </p>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .datalab-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
