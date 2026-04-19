"use client";

import { mockSavingsGoals } from "@/lib/data";

interface Props { privacyMode: boolean; }

export default function SavingsGoalsCard({ privacyMode }: Props) {
  const fmt = (v: number) => privacyMode ? "••••" : `€${v.toLocaleString("lv-LV", { minimumFractionDigits: 2 })}`;

  return (
    <div className="section-card" style={{ height: "100%" }}>
      <div className="section-header" style={{ cursor: "default", justifyContent: "space-between" }}>
        <span>Savings Goals</span>
        <span className="link-red" style={{ fontSize: 12 }}>+ New goal</span>
      </div>
      <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 16 }}>
        {mockSavingsGoals.map(g => {
          const pct = Math.min(100, Math.round((g.current / g.target) * 100));
          return (
            <div key={g.id}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>{g.name}</span>
                <span style={{ fontSize: 12, color: "var(--red)", fontWeight: 500 }}>{pct}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${pct}%`, background: "var(--red)" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
                <span className={privacyMode ? "blurred" : ""} style={{ fontSize: 11, color: "var(--text-muted)" }}>{fmt(g.current)}</span>
                <span style={{ fontSize: 11, color: "var(--text-muted)" }}>by {g.deadline} · <span className={privacyMode ? "blurred" : ""}>{fmt(g.target)}</span></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
