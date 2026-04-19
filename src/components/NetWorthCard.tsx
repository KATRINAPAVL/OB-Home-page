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

        {/* Open Banking CTA — Embedded Connected Ecosystems */}
        <div style={{
          marginTop: 10, padding: "9px 12px",
          background: "var(--bg)", border: "1px dashed var(--border)",
          borderRadius: "var(--radius)", cursor: "pointer",
          display: "flex", alignItems: "center", gap: 8,
          transition: "border-color 0.15s",
        }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--red)")}
          onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2">
            <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
          </svg>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 500, color: "var(--text-primary)" }}>Connect external accounts</div>
            <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Open Banking — see all assets in one place</div>
          </div>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
