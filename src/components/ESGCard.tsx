"use client";

import { useState } from "react";
import { Leaf, TrendingDown, ChevronDown, ChevronUp } from "lucide-react";
import { mockESG } from "@/lib/data";

export default function ESGCard() {
  const [expanded, setExpanded] = useState(false);
  const { carbonKg, carbonBudgetKg, changeVsLastMonth, topCategories } = mockESG;
  const pct = Math.min(100, Math.round((carbonKg / carbonBudgetKg) * 100));

  const barColor = pct < 50 ? "var(--accent-green)" : pct < 80 ? "var(--accent-amber)" : "var(--accent-red)";

  return (
    <div className="card">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ padding: 6, background: "rgba(34,211,163,0.1)", borderRadius: 8 }}>
            <Leaf size={15} color="var(--accent-green)" />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>Carbon Footprint</div>
            <div style={{ fontSize: 10, color: "var(--text-muted)", fontWeight: 500 }}>Opt-in ESG Tracker</div>
          </div>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}
        >
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {/* Main metric */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: 8, marginBottom: 8 }}>
        <span style={{ fontSize: 28, fontWeight: 800, color: "var(--text-primary)", lineHeight: 1 }}>{carbonKg}</span>
        <span style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 3 }}>kg CO₂ this month</span>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontSize: 12,
            fontWeight: 700,
            color: "var(--accent-green)",
          }}
        >
          <TrendingDown size={13} /> {Math.abs(changeVsLastMonth)}% vs last month
        </div>
      </div>

      {/* Budget bar */}
      <div className="progress-bar" style={{ marginBottom: 6 }}>
        <div className="progress-fill" style={{ width: `${pct}%`, background: barColor }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "var(--text-muted)", marginBottom: 12 }}>
        <span>Monthly budget: {carbonBudgetKg}kg</span>
        <span style={{ color: barColor, fontWeight: 700 }}>{pct}% used</span>
      </div>

      {/* Category breakdown (expanded) */}
      {expanded && (
        <div className="fade-in" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {topCategories.map((cat) => {
            const catPct = Math.round((cat.kg / carbonKg) * 100);
            return (
              <div key={cat.name}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{cat.name}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: cat.color }}>{cat.kg}kg</span>
                </div>
                <div className="progress-bar" style={{ height: 4 }}>
                  <div className="progress-fill" style={{ width: `${catPct}%`, background: cat.color }} />
                </div>
              </div>
            );
          })}
          <button
            style={{
              marginTop: 4,
              fontSize: 11,
              color: "var(--accent-green)",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              fontWeight: 600,
            }}
          >
            🌱 See tips to reduce your footprint →
          </button>
        </div>
      )}
    </div>
  );
}
