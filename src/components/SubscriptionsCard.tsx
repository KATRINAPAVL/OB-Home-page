"use client";

import { mockSubscriptions } from "@/lib/data";

interface Props { privacyMode: boolean; }

export default function SubscriptionsCard({ privacyMode }: Props) {
  const total = mockSubscriptions.reduce((s, x) => s + x.amount, 0);
  const unused = mockSubscriptions.filter(s => s.unused);

  return (
    <div className="section-card" style={{ height: "100%" }}>
      <div className="section-header" style={{ cursor: "default", justifyContent: "space-between" }}>
        <span>Subscriptions</span>
        <span className={privacyMode ? "blurred" : ""} style={{ fontSize: 12, color: "var(--text-secondary)", fontWeight: 500 }}>
          €{total.toFixed(2)}/mo
        </span>
      </div>

      {unused.length > 0 && (
        <div style={{ margin: "10px 16px 0", padding: "8px 10px", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "var(--radius)", fontSize: 12, color: "var(--red)", display: "flex", gap: 6, alignItems: "center" }}>
          ⚠️ {unused.length} subscriptions unused 60+ days
        </div>
      )}

      <div style={{ paddingTop: 6 }}>
        {mockSubscriptions.map((s, i) => (
          <div key={s.id} style={{
            display: "flex", alignItems: "center", gap: 10, padding: "9px 16px",
            borderTop: i > 0 ? "1px solid var(--border-light)" : "none",
          }}>
            <span style={{ fontSize: 16, flexShrink: 0 }}>{s.logo}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>{s.name}</div>
              <div style={{ fontSize: 11, color: s.unused ? "var(--red)" : "var(--text-muted)" }}>{s.lastUsed}</div>
            </div>
            <span className={privacyMode ? "blurred" : ""} style={{ fontSize: 13, fontWeight: 500, color: s.unused ? "var(--red)" : "var(--text-primary)" }}>
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
    </div>
  );
}
