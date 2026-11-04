"use client";
import { useState } from "react";

const QUERIES = [
  {
    id: "top_spenders",
    label: "Category Aggregations",
    sql: `-- 01. Monthly category breakdown with % contribution
SELECT 
    category,
    COUNT(*) AS total_txns,
    SUM(amount) AS total_spent,
    ROUND(AVG(amount), 2) AS avg_txn_value,
    ROUND(SUM(amount) * 100.0 / SUM(SUM(amount)) OVER(), 1) AS pct_of_total
FROM expenses
WHERE transaction_date >= DATE_TRUNC('month', CURRENT_DATE)
GROUP BY category
ORDER BY total_spent DESC
LIMIT 5;`,
    executionTime: "11.4 ms",
    rowsCount: 5,
    columns: ["category", "total_txns", "total_spent", "avg_txn_value", "pct_of_total"],
    rows: [
      ["Food & Dining", 42, 18450, 439.29, 28.5],
      ["Transportation", 28, 12300, 439.29, 19.0],
      ["Shopping", 15, 9800, 653.33, 15.1],
      ["Utilities", 6, 7200, 1200.00, 11.1],
      ["Entertainment", 11, 5600, 509.09, 8.6],
    ],
    insight:
      "Discretionary Food & Dining accounts for 28.5% of monthly cash outflow. Transportation follows at 19%. Recommended action: Establish a ₹15,000 threshold alert on dining transactions.",
  },
  {
    id: "cash_flow",
    label: "Net Cash-Flow Variance",
    sql: `-- 02. Six-month rolling cash-flow & deficit detection
SELECT 
    TO_CHAR(transaction_date, 'Mon YYYY') AS billing_cycle,
    SUM(CASE WHEN txn_type = 'INCOME' THEN amount ELSE 0 END) AS total_inflow,
    SUM(CASE WHEN txn_type = 'EXPENSE' THEN amount ELSE 0 END) AS total_outflow,
    SUM(CASE WHEN txn_type = 'INCOME' THEN amount ELSE -amount END) AS net_balance
FROM transactions
WHERE transaction_date >= CURRENT_DATE - INTERVAL '6 months'
GROUP BY DATE_TRUNC('month', transaction_date), TO_CHAR(transaction_date, 'Mon YYYY')
ORDER BY DATE_TRUNC('month', transaction_date) DESC;`,
    executionTime: "18.2 ms",
    rowsCount: 6,
    columns: ["billing_cycle", "total_inflow", "total_outflow", "net_balance"],
    rows: [
      ["Oct 2026", 65000, 74900, -9900],
      ["Sep 2026", 68000, 49800, 18200],
      ["Aug 2026", 65000, 61200, 3800],
      ["Jul 2026", 72000, 55400, 16600],
      ["Jun 2026", 65000, 52100, 12900],
      ["May 2026", 65000, 48200, 16800],
    ],
    insight:
      "Oct 2026 registered the primary deficit (-₹9,900) across the 6-month evaluation horizon. Inflow averages ₹66,666/mo with average net savings yield of ₹9,566/mo.",
  },
  {
    id: "budget_variance",
    label: "Budget Overrun Detection",
    sql: `-- 03. Identifying budget breach categories with conditional alerting
SELECT 
    b.category,
    b.allocated_budget,
    COALESCE(SUM(e.amount), 0) AS actual_spent,
    b.allocated_budget - COALESCE(SUM(e.amount), 0) AS variance,
    CASE 
        WHEN COALESCE(SUM(e.amount), 0) > b.allocated_budget THEN 'OVERRUN'
        WHEN COALESCE(SUM(e.amount), 0) >= b.allocated_budget * 0.9 THEN 'WARNING'
        ELSE 'OPTIMAL'
    END AS risk_tier
FROM budgets b
LEFT JOIN expenses e ON e.category = b.category AND DATE_TRUNC('month', e.transaction_date) = DATE_TRUNC('month', CURRENT_DATE)
GROUP BY b.category, b.allocated_budget
ORDER BY variance ASC;`,
    executionTime: "14.7 ms",
    rowsCount: 5,
    columns: ["category", "allocated_budget", "actual_spent", "variance", "risk_tier"],
    rows: [
      ["Food & Dining", 15000, 18450, -3450, "OVERRUN"],
      ["Shopping", 8000, 9800, -1800, "OVERRUN"],
      ["Entertainment", 5000, 5600, -600, "OVERRUN"],
      ["Transportation", 14000, 12300, 1700, "WARNING"],
      ["Healthcare", 5000, 4200, 800, "OPTIMAL"],
    ],
    insight:
      "Three functional categories breached monthly allocations. Total capital overrun amounts to -₹5,850. Auto-budget throttle triggers required on credit card authorizations.",
  },
];

export default function DataLabSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [executing, setExecuting] = useState(false);
  const [copied, setCopied] = useState(false);

  const activeQuery = QUERIES[activeIdx];

  const handleExecute = () => {
    setExecuting(true);
    setTimeout(() => {
      setExecuting(false);
    }, 600);
  };

  const downloadCSV = () => {
    const headers = activeQuery.columns.join(",");
    const rows = activeQuery.rows.map((r) => r.join(",")).join("\n");
    const blob = new Blob([`${headers}\n${rows}`], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${activeQuery.id}_results.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copySQL = () => {
    navigator.clipboard.writeText(activeQuery.sql);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="datalab" className="section">
      <div className="container">
        <div style={{ marginBottom: "3rem" }}>
          <div className="section-label">Interactive SQL Workspace</div>
          <h2 className="section-title">
            Enterprise <span className="text-gradient">Data Studio</span>
          </h2>
          <p className="section-subtitle">
            Experience real-world SQL analysis pipelines. Select analytical queries, execute the engine, examine performance telemetry, and export query results to CSV.
          </p>
        </div>

        {/* Studio Window Frame */}
        <div
          style={{
            background: "#050B18",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "18px",
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 35px rgba(59, 130, 246, 0.15)",
            overflow: "hidden",
          }}
        >
          {/* Top Window Chrome Bar */}
          <div
            style={{
              padding: "0.75rem 1.25rem",
              background: "rgba(255, 255, 255, 0.03)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "0.75rem",
            }}
          >
            {/* Tab Switches */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {QUERIES.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => setActiveIdx(idx)}
                  style={{
                    padding: "0.4rem 0.85rem",
                    borderRadius: "8px",
                    border: "none",
                    background: activeIdx === idx ? "rgba(59, 130, 246, 0.2)" : "rgba(255, 255, 255, 0.03)",
                    color: activeIdx === idx ? "#60A5FA" : "#94A3B8",
                    fontSize: "0.775rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    borderBottom: activeIdx === idx ? "2px solid #3B82F6" : "2px solid transparent",
                    transition: "all 0.15s ease",
                  }}
                >
                  {q.label}
                </button>
              ))}
            </div>

            {/* Run Button, Engine Indicator & Export */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <button
                onClick={copySQL}
                style={{
                  padding: "0.4rem 0.75rem",
                  borderRadius: "6px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#94A3B8",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                }}
              >
                {copied ? "✓ Copied" : "Copy SQL"}
              </button>

              <button
                onClick={downloadCSV}
                style={{
                  padding: "0.4rem 0.75rem",
                  borderRadius: "6px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#38BDF8",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                }}
              >
                Export CSV ↓
              </button>

              <button
                onClick={handleExecute}
                disabled={executing}
                className="linear-btn-primary"
                style={{ padding: "0.45rem 1.15rem", fontSize: "0.8rem" }}
              >
                {executing ? "Running..." : "▶ Run Query"}
              </button>
            </div>
          </div>

          {/* Main Workspace Split: Code & Results */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              minHeight: "340px",
            }}
            className="datalab-split"
          >
            {/* Left: Code Editor */}
            <div
              style={{
                padding: "1.25rem",
                background: "#030712",
                borderRight: "1px solid rgba(255, 255, 255, 0.08)",
                overflowX: "auto",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem", fontSize: "0.7rem", color: "#64748B", fontFamily: "monospace" }}>
                <span>SQL QUERY EDITOR &bull; PostgreSQL 16</span>
                <span>UTF-8</span>
              </div>
              <pre
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.825rem",
                  color: "#93C5FD",
                  lineHeight: 1.7,
                  whiteSpace: "pre-wrap",
                }}
              >
                {activeQuery.sql}
              </pre>
            </div>

            {/* Right: Results Grid & Telemetry */}
            <div style={{ padding: "1.25rem", background: "#050B18", display: "flex", flexDirection: "column" }}>
              {/* Telemetry Bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                  paddingBottom: "0.5rem",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                  fontSize: "0.72rem",
                  color: "#94A3B8",
                  fontFamily: "monospace",
                }}
              >
                <span>STATUS: <b style={{ color: "#34D399" }}>200 OK</b></span>
                <span>LATENCY: <b style={{ color: "#38BDF8" }}>{activeQuery.executionTime}</b></span>
                <span>ROWS: <b style={{ color: "#FFFFFF" }}>{activeQuery.rowsCount}</b></span>
              </div>

              {/* Table or Loading State */}
              <div style={{ flex: 1, overflowX: "auto" }}>
                {executing ? (
                  <div style={{ height: "180px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.75rem" }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", border: "3px solid rgba(59,130,246,0.2)", borderTop: "3px solid #3B82F6", animation: "spin 0.8s linear infinite" }} />
                    <span style={{ fontSize: "0.8rem", color: "#64748B" }}>Scanning index &amp; aggregating partitions...</span>
                  </div>
                ) : (
                  <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-mono), monospace", fontSize: "0.775rem" }}>
                    <thead>
                      <tr>
                        {activeQuery.columns.map((col) => (
                          <th
                            key={col}
                            style={{
                              textAlign: "left",
                              padding: "0.5rem 0.65rem",
                              color: "#60A5FA",
                              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                              fontWeight: 600,
                              textTransform: "uppercase",
                              fontSize: "0.68rem",
                              letterSpacing: "0.04em",
                            }}
                          >
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {activeQuery.rows.map((row, rIdx) => (
                        <tr key={rIdx} style={{ background: rIdx % 2 === 0 ? "transparent" : "rgba(255, 255, 255, 0.02)" }}>
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              style={{
                                padding: "0.45rem 0.65rem",
                                color: cell === "OVERRUN" ? "#EF4444" : cell === "WARNING" ? "#F59E0B" : cell === "OPTIMAL" ? "#10B981" : "#E2E8F0",
                                borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
                              }}
                            >
                              {typeof cell === "number" ? cell.toLocaleString() : cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>

              {/* Analytical Insight Pill */}
              <div
                style={{
                  marginTop: "1rem",
                  padding: "0.85rem 1rem",
                  borderRadius: "10px",
                  background: "rgba(59, 130, 246, 0.08)",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  display: "flex",
                  gap: "0.65rem",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>💡</span>
                <div style={{ fontSize: "0.8rem", color: "#CBD5E1", lineHeight: 1.6 }}>
                  <strong style={{ color: "#38BDF8" }}>Data Decision Insight: </strong>
                  {activeQuery.insight}
                </div>
              </div>
            </div>
          </div>
        </div>

        <p style={{ textAlign: "center", fontSize: "0.75rem", color: "#64748B", marginTop: "1.25rem" }}>
          Simulated against realistic schema partitions for high-fidelity portfolio presentation.
        </p>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .datalab-split {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
