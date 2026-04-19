"use client";

import { mockFinancialHealth } from "@/lib/data";

export default function FinancialHealthCard() {
  const { score, creditScore, pillars } = mockFinancialHealth;
  const C = 2 * Math.PI * 30;

  return (
    <div className="section-card" style={{ height: "100%" }}>
      <div className="section-header" style={{ cursor: "default" }}>
        <span>Financial Health</span>
      </div>
      <div style={{ padding: "14px 16px" }}>
        {/* Score ring + credit */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
          <div style={{ position: "relative", width: 72, height: 72, flexShrink: 0 }}>
            <svg width="72" height="72" viewBox="0 0 72 72">
              <circle cx="36" cy="36" r="30" fill="none" stroke="var(--border)" strokeWidth="5" />
              <circle cx="36" cy="36" r="30" fill="none" stroke="var(--red)" strokeWidth="5"
                strokeDasharray={C} strokeDashoffset={C * (1 - score / 100)}
                strokeLinecap="round" transform="rotate(-90 36 36)"
                style={{ transition: "stroke-dashoffset 1s ease" }} />
            </svg>
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1 }}>{score}</span>
              <span style={{ fontSize: 8, color: "var(--text-muted)", textTransform: "uppercase" }}>/ 100</span>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, color: "var(--text-secondary)", marginBottom: 2 }}>Credit Score</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: "var(--text-primary)", marginBottom: 6 }}>{creditScore}</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${(creditScore / 999) * 100}%`, background: "var(--red)" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 3, fontSize: 10, color: "var(--text-muted)" }}>
              <span>300</span><span>999</span>
            </div>
          </div>
        </div>

        {/* Pillars */}
        {pillars.map(p => (
          <div key={p.name} style={{ marginBottom: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
              <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{p.name}</span>
              <span style={{ fontSize: 12, fontWeight: 500, color: "var(--text-primary)" }}>{p.score}</span>
            </div>
            <div className="progress-bar" style={{ height: 4 }}>
              <div className="progress-fill" style={{ width: `${p.score}%`, background: "var(--red)" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
