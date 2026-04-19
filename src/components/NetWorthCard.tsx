"use client";

import { mockNetWorth } from "@/lib/data";

interface Props { privacyMode: boolean; }

export default function NetWorthCard({ privacyMode }: Props) {
  const fmt = (v: number) => privacyMode ? "••••••" : `€${Math.abs(v).toLocaleString("lv-LV", { minimumFractionDigits: 2 })}`;

  return (
    <div className="section-card" style={{ height: "100%" }}>
      <div className="section-header" style={{ cursor: "default" }}>
        <span>Net Worth</span>
      </div>
      <div style={{ padding: "14px 16px" }}>
        <div className={privacyMode ? "blurred" : ""} style={{ fontSize: 24, fontWeight: 700, color: "var(--text-primary)", marginBottom: 2 }}>
          {fmt(mockNetWorth.total)}
        </div>
        <div style={{ fontSize: 12, color: "#15803d", marginBottom: 14, fontWeight: 500 }}>
          ↑ {fmt(mockNetWorth.change)} this month
        </div>

        {mockNetWorth.breakdown.map((b, i) => {
          const absTotal = mockNetWorth.breakdown.filter(x => !x.negative).reduce((s, x) => s + x.value, 0);
          const pct = Math.round((Math.abs(b.value) / absTotal) * 100);
          return (
            <div key={b.label} style={{ marginBottom: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{b.label}</span>
                <span className={privacyMode ? "blurred" : ""} style={{ fontSize: 12, fontWeight: 500, color: b.negative ? "var(--red)" : "var(--text-primary)" }}>
                  {b.negative ? "−" : ""}{fmt(b.value)}
                </span>
              </div>
              {!b.negative && (
                <div className="progress-bar" style={{ height: 4 }}>
                  <div className="progress-fill" style={{ width: `${pct}%`, background: "var(--red)" }} />
                </div>
              )}
            </div>
          );
        })}

        <span className="link-red" style={{ display: "block", marginTop: 6, fontSize: 12 }}>
          + Connect external account →
        </span>
      </div>
    </div>
  );
}
