"use client";

import { useState } from "react";
import { mockTransactions, mockSavingsGoals, mockSubscriptions, mockSecurity, mockFinancialHealth, mockESG, mockNetWorth } from "@/lib/data";

interface Props { privacyMode: boolean; }

function SectionCard({ title, icon, children, defaultOpen = true }: {
  title: string; icon?: React.ReactNode; children: React.ReactNode; defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="section-card" style={{ marginBottom: 10 }}>
      <div className="section-header" onClick={() => setOpen(!open)}>
        <div style={{ width: 18, height: 18, borderRadius: "50%", border: "1.5px solid var(--text-secondary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            {open ? <line x1="5" y1="12" x2="19" y2="12"/> : <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>}
          </svg>
        </div>
        {icon}
        <span>{title}</span>
      </div>
      {open && <div>{children}</div>}
    </div>
  );
}

export default function RightColumn({ privacyMode }: Props) {
  const fmt = (v: number) => privacyMode ? "••••••" : Math.abs(v).toLocaleString("lv-LV", { minimumFractionDigits: 2 });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

      {/* Recent Transactions */}
      <SectionCard title="Recent Transactions">
        <div style={{ padding: "6px 0" }}>
          {mockTransactions.slice(0, 5).map((tx, i) => (
            <div key={tx.id} style={{
              display: "flex", alignItems: "center", gap: 10, padding: "9px 16px",
              borderTop: i > 0 ? "1px solid var(--border-light)" : "none",
              cursor: "pointer",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
              <span style={{ fontSize: 18, width: 26, textAlign: "center" }}>{tx.logo}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>{tx.merchant}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{tx.category} · {tx.date}</div>
              </div>
              <span
                className={privacyMode ? "blurred" : ""}
                style={{ fontSize: 13, fontWeight: 500, color: tx.amount > 0 ? "#15803d" : "var(--text-primary)" }}
              >
                {tx.amount > 0 ? "+" : ""}€{fmt(tx.amount)}
              </span>
            </div>
          ))}
          <div style={{ padding: "10px 16px", textAlign: "right" }}>
            <span className="link-red">View all transactions →</span>
          </div>
        </div>
      </SectionCard>

      {/* Savings Goals */}
      <SectionCard title="Savings Goals">
        <div style={{ padding: "12px 16px", display: "flex", flexDirection: "column", gap: 14 }}>
          {mockSavingsGoals.map((g) => {
            const pct = Math.min(100, Math.round((g.current / g.target) * 100));
            return (
              <div key={g.id}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <span style={{ fontSize: 13, fontWeight: 500 }}>{g.name}</span>
                  <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{pct}% · by {g.deadline}</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${pct}%`, background: "var(--red)" }} />
                </div>
                <div className={`${privacyMode ? "blurred" : ""}`} style={{ display: "flex", justifyContent: "space-between", marginTop: 4, fontSize: 11, color: "var(--text-muted)" }}>
                  <span>€{fmt(g.current)}</span><span>€{fmt(g.target)}</span>
                </div>
              </div>
            );
          })}
          <span className="link-red" style={{ fontSize: 12 }}>+ Create new goal</span>
        </div>
      </SectionCard>

      {/* Subscription Manager */}
      <SectionCard title="Subscriptions">
        <div style={{ padding: "8px 0" }}>
          <div style={{ padding: "4px 16px 8px", display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{mockSubscriptions.length} active</span>
            <span className={privacyMode ? "blurred" : ""} style={{ fontSize: 12, fontWeight: 500, color: "var(--text-primary)" }}>
              €{fmt(mockSubscriptions.reduce((s, x) => s + x.amount, 0))}/mo
            </span>
          </div>
          {mockSubscriptions.filter(s => s.unused).length > 0 && (
            <div style={{ margin: "0 12px 8px", padding: "8px 10px", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "var(--radius)", fontSize: 12, color: "var(--red)", display: "flex", gap: 6 }}>
              ⚠️ {mockSubscriptions.filter(s => s.unused).length} subscriptions unused for 60+ days
            </div>
          )}
          {mockSubscriptions.map((s, i) => (
            <div key={s.id} style={{
              display: "flex", alignItems: "center", gap: 10, padding: "8px 16px",
              borderTop: i > 0 ? "1px solid var(--border-light)" : "none",
            }}>
              <span style={{ fontSize: 16 }}>{s.logo}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{s.name}</div>
                <div style={{ fontSize: 11, color: s.unused ? "var(--red)" : "var(--text-muted)" }}>{s.lastUsed}</div>
              </div>
              <span className={privacyMode ? "blurred" : ""} style={{ fontSize: 13, color: s.unused ? "var(--red)" : "var(--text-primary)", fontWeight: 500 }}>
                €{s.amount.toFixed(2)}
              </span>
              {s.unused && (
                <button style={{ fontSize: 11, padding: "3px 8px", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "var(--radius)", cursor: "pointer", color: "var(--red)", fontFamily: "inherit" }}>
                  Cancel
                </button>
              )}
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Financial Health */}
      <SectionCard title="Financial Health">
        <div style={{ padding: "14px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 14 }}>
            <div style={{ position: "relative", width: 72, height: 72, flexShrink: 0 }}>
              <svg width="72" height="72" viewBox="0 0 72 72">
                <circle cx="36" cy="36" r="30" fill="none" stroke="var(--border)" strokeWidth="5"/>
                <circle cx="36" cy="36" r="30" fill="none" stroke="var(--red)" strokeWidth="5"
                  strokeDasharray={2 * Math.PI * 30}
                  strokeDashoffset={2 * Math.PI * 30 * (1 - mockFinancialHealth.score / 100)}
                  strokeLinecap="round" transform="rotate(-90 36 36)"
                  style={{ transition: "stroke-dashoffset 1s ease" }}/>
              </svg>
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1 }}>{mockFinancialHealth.score}</span>
                <span style={{ fontSize: 8, color: "var(--text-muted)", textTransform: "uppercase" }}>of 100</span>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 4 }}>Credit Score</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: "var(--text-primary)" }}>{mockFinancialHealth.creditScore}</div>
              <div className="progress-bar" style={{ marginTop: 6 }}>
                <div className="progress-fill" style={{ width: `${(mockFinancialHealth.creditScore / 999) * 100}%`, background: "var(--red)" }}/>
              </div>
            </div>
          </div>
          {mockFinancialHealth.pillars.map(p => (
            <div key={p.name} style={{ marginBottom: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{p.name}</span>
                <span style={{ fontSize: 12, fontWeight: 500, color: "var(--text-primary)" }}>{p.score}</span>
              </div>
              <div className="progress-bar" style={{ height: 4 }}>
                <div className="progress-fill" style={{ width: `${p.score}%`, background: "var(--red)" }}/>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Security Health */}
      <SectionCard title="Security">
        <div style={{ padding: "12px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%",
              background: mockSecurity.score >= 80 ? "#f0fdf4" : "#fef2f2",
              border: `2px solid ${mockSecurity.score >= 80 ? "#86efac" : "#fecaca"}`,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
            }}>
              🛡️
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>Status: {mockSecurity.status}</div>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Score: {mockSecurity.score}/100</div>
            </div>
          </div>
          {[
            { label: "Two-Factor Auth", enabled: mockSecurity.twoFa },
            { label: "Biometric Login", enabled: mockSecurity.biometric },
          ].map(({ label, enabled }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "7px 0", borderTop: "1px solid var(--border-light)" }}>
              <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{label}</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: enabled ? "#15803d" : "var(--red)" }}>
                {enabled ? "✓ Active" : "Enable"}
              </span>
            </div>
          ))}
          <span className="link-red" style={{ display: "block", marginTop: 8, fontSize: 12 }}>Review security settings →</span>
        </div>
      </SectionCard>

      {/* Net Worth */}
      <SectionCard title="Net Worth" defaultOpen={true}>
        <div style={{ padding: "12px 16px" }}>
          <div className={privacyMode ? "blurred" : ""} style={{ fontSize: 22, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>
            €{fmt(mockNetWorth.total)}
          </div>
          <div style={{ fontSize: 12, color: "#15803d", marginBottom: 12 }}>
            +€{fmt(mockNetWorth.change)} this month
          </div>
          {mockNetWorth.breakdown.map((b) => (
            <div key={b.label} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderTop: "1px solid var(--border-light)" }}>
              <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{b.label}</span>
              <span className={privacyMode ? "blurred" : ""} style={{ fontSize: 12, fontWeight: 500, color: b.negative ? "var(--red)" : "var(--text-primary)" }}>
                {b.negative ? "-" : ""}€{Math.abs(b.value).toLocaleString("lv-LV", { minimumFractionDigits: 2 })}
              </span>
            </div>
          ))}
          <span className="link-red" style={{ display: "block", marginTop: 10, fontSize: 12 }}>+ Connect external account →</span>
        </div>
      </SectionCard>

      {/* ESG */}
      <SectionCard title="Carbon Footprint" defaultOpen={false}>
        <div style={{ padding: "12px 16px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 8 }}>
            <span style={{ fontSize: 22, fontWeight: 700, color: "var(--text-primary)" }}>{mockESG.carbonKg}</span>
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}>kg CO₂ this month</span>
            <span style={{ marginLeft: "auto", fontSize: 12, color: "#15803d", fontWeight: 500 }}>
              ↓{Math.abs(mockESG.changeVsLast)}% vs last month
            </span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(mockESG.carbonKg / mockESG.budget) * 100}%`, background: "var(--red)" }}/>
          </div>
          <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>Budget: {mockESG.budget}kg</div>
          <span className="link-red" style={{ display: "block", marginTop: 8, fontSize: 12 }}>🌱 See tips to reduce your footprint →</span>
        </div>
      </SectionCard>

    </div>
  );
}
