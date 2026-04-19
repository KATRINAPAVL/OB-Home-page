"use client";

import { mockESG } from "@/lib/data";

export default function ESGCard() {
  const { carbonKg, budget, changeVsLast } = mockESG;
  const pct = Math.round((carbonKg / budget) * 100);

  return (
    <div className="section-card" style={{ height: "100%" }}>
      <div className="section-header" style={{ cursor: "default", justifyContent: "space-between" }}>
        <span>🌱 Carbon Footprint</span>
        <span style={{ fontSize: 11, color: "#15803d", fontWeight: 600 }}>↓{Math.abs(changeVsLast)}% vs last mo.</span>
      </div>
      <div style={{ padding: "14px 16px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 12 }}>
          <span style={{ fontSize: 28, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1 }}>{carbonKg}</span>
          <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>kg CO₂ this month</span>
        </div>

        <div className="progress-bar" style={{ marginBottom: 6 }}>
          <div className="progress-fill" style={{
            width: `${pct}%`,
            background: pct < 60 ? "#15803d" : pct < 85 ? "#d97706" : "var(--red)",
          }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--text-muted)" }}>
          <span>{pct}% of monthly budget</span>
          <span>Budget: {budget}kg</span>
        </div>

        <span className="link-red" style={{ display: "block", marginTop: 14, fontSize: 12 }}>
          See tips to reduce your footprint →
        </span>
      </div>
    </div>
  );
}
