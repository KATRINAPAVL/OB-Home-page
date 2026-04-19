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

      {/* Campaign banners */}
      <div style={{ borderTop: "1px solid var(--border-light)", padding: "12px 16px" }}>
        <div style={{ fontSize: 11, fontWeight: 500, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>
          Active campaigns
        </div>
        <div style={{ display: "flex", gap: 10 }}>

          {/* Campaign 1 — Da Vinci Konkurss */}
          <a
            href="https://www.xrewards.lv/lv/specials/davinci-konkurss-klasem"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1, borderRadius: 10, overflow: "hidden", cursor: "pointer",
              textDecoration: "none", display: "block", position: "relative",
              minHeight: 110,
              background: "linear-gradient(135deg, #1a0533 0%, #3d0f6e 40%, #7b1fa2 70%, #e040fb 100%)",
              boxShadow: "inset 0 0 40px rgba(224,64,251,0.25)",
            }}
          >
            {/* Neon glow overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(ellipse at 60% 50%, rgba(224,64,251,0.3) 0%, transparent 70%)",
            }} />
            {/* KARSTS badge */}
            <div style={{
              position: "absolute", top: 8, right: 8,
              background: "#22c55e", color: "#fff",
              fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 4,
              letterSpacing: "0.04em",
            }}>
              KARSTS
            </div>
            {/* Text */}
            <div style={{ position: "relative", padding: "14px 12px 12px" }}>
              <div style={{ fontSize: 17, fontWeight: 900, color: "#fff", lineHeight: 1.15, textTransform: "uppercase", letterSpacing: "-0.01em" }}>
                Konkurss<br />Klasēm
              </div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.75)", marginTop: 6, lineHeight: 1.4 }}>
                Laimē biļetes uz<br />"Da Vinci Genius" izstādi
              </div>
            </div>
          </a>

          {/* Campaign 2 — Bring a Friend */}
          <div
            style={{
              flex: 1, borderRadius: 10, overflow: "hidden", cursor: "pointer",
              position: "relative", minHeight: 110,
              background: "linear-gradient(135deg, #b91c1c 0%, #dc2626 50%, #ef4444 100%)",
            }}
          >
            {/* Decorative circles */}
            <div style={{
              position: "absolute", top: -20, right: -20,
              width: 90, height: 90, borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
            }} />
            <div style={{
              position: "absolute", bottom: -15, right: 10,
              width: 55, height: 55, borderRadius: "50%",
              background: "rgba(255,255,255,0.06)",
            }} />
            <div style={{ position: "relative", padding: "14px 12px 12px" }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: 6 }}>
                Bring a friend,<br />get 3 000 pts!
              </div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.8)", lineHeight: 1.4, marginBottom: 10 }}>
                Invite a friend to Citadele and earn 3 000 C REWARDS points
              </div>
              <span style={{
                fontSize: 10, fontWeight: 600, background: "#fff", color: "#b91c1c",
                borderRadius: 999, padding: "3px 10px",
              }}>
                Invite now →
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
