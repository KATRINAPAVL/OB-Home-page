"use client";

import { mockCRewards } from "@/lib/data";

export default function CRewardsCard() {
  const { points, tier, nextTier, pointsToNext, expiringPoints, expiringDate } = mockCRewards;
  const progressPct = Math.round((points / (points + pointsToNext)) * 100);

  return (
    <div className="section-card" style={{ height: "100%" }}>
      <div className="section-header" style={{ cursor: "default", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          <span>C REWARDS</span>
        </div>
        <span className="link-red" style={{ fontSize: 12 }}>More →</span>
      </div>

      <div style={{ padding: "14px 16px" }}>
        {/* Points */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
          <span style={{ fontSize: 28, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1 }}>
            {points.toLocaleString("lv-LV")}
          </span>
          <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>points</span>
        </div>

        {/* Tier badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
          <span style={{
            fontSize: 11, fontWeight: 600, padding: "2px 8px",
            background: "rgba(227,0,44,0.08)", color: "var(--red)",
            borderRadius: 999, border: "1px solid rgba(227,0,44,0.2)",
          }}>
            {tier}
          </span>
          <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{pointsToNext.toLocaleString()} pts to {nextTier}</span>
        </div>

        {/* Progress to next tier */}
        <div className="progress-bar" style={{ marginBottom: 6 }}>
          <div className="progress-fill" style={{ width: `${progressPct}%`, background: "var(--red)" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--text-muted)", marginBottom: 12 }}>
          <span>{tier}</span>
          <span>{nextTier}</span>
        </div>

        {/* Expiring warning */}
        <div style={{
          background: "rgba(217,119,6,0.07)", border: "1px solid rgba(217,119,6,0.2)",
          borderRadius: "var(--radius)", padding: "7px 10px",
          display: "flex", alignItems: "center", gap: 6,
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          <span style={{ fontSize: 11, color: "#92400e" }}>
            <strong>{expiringPoints}</strong> pts expiring {expiringDate}
          </span>
        </div>
      </div>
    </div>
  );
}
