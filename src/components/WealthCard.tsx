"use client";

import { Globe, TrendingUp, Plus, ChevronRight } from "lucide-react";
import { mockNetWorth } from "@/lib/data";

interface Props { privacyMode: boolean; }

export default function WealthCard({ privacyMode }: Props) {
  const isUp = mockNetWorth.changePercent > 0;

  return (
    <div
      className="card"
      style={{
        background: "linear-gradient(135deg, #1a1040, #0f1a30)",
        border: "1px solid rgba(168,85,247,0.2)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
        <div style={{ padding: 6, background: "rgba(168,85,247,0.15)", borderRadius: 8 }}>
          <Globe size={15} color="var(--accent-purple)" />
        </div>
        <span style={{ fontWeight: 700, fontSize: 14 }}>Total Net Worth</span>
        <span
          style={{
            marginLeft: "auto",
            fontSize: 10,
            padding: "2px 8px",
            borderRadius: 999,
            background: "rgba(168,85,247,0.15)",
            color: "var(--accent-purple)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          Open Banking
        </span>
      </div>

      {/* Net worth figure */}
      <div style={{ marginBottom: 16 }}>
        <div
          className={privacyMode ? "blurred" : ""}
          style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)", lineHeight: 1, marginBottom: 4 }}
        >
          {privacyMode ? "••••••" : `£${mockNetWorth.total.toLocaleString("en-GB", { minimumFractionDigits: 2 })}`}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13 }}>
          <TrendingUp size={13} color={isUp ? "var(--accent-green)" : "var(--accent-red)"} />
          <span style={{ color: isUp ? "var(--accent-green)" : "var(--accent-red)", fontWeight: 600 }}>
            {isUp ? "+" : ""}£{mockNetWorth.change.toLocaleString("en-GB", { minimumFractionDigits: 2 })} ({mockNetWorth.changePercent}%)
          </span>
          <span style={{ color: "var(--text-muted)" }}>this month</span>
        </div>
      </div>

      {/* Breakdown bars */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 14 }}>
        {mockNetWorth.breakdown.filter(b => b.value > 0).map((item) => {
          const pct = Math.abs(item.value / mockNetWorth.total) * 100;
          return (
            <div key={item.label}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={{ fontSize: 11, color: "var(--text-secondary)" }}>{item.label}</span>
                <span
                  className={privacyMode ? "blurred" : ""}
                  style={{ fontSize: 11, fontWeight: 700, color: item.color }}
                >
                  {privacyMode ? "••••" : `£${item.value.toLocaleString("en-GB", { minimumFractionDigits: 0 })}`}
                </span>
              </div>
              <div className="progress-bar" style={{ height: 4 }}>
                <div className="progress-fill" style={{ width: `${pct}%`, background: item.color }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Connect external */}
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "8px 12px",
          background: "rgba(168,85,247,0.1)",
          border: "1px dashed rgba(168,85,247,0.3)",
          borderRadius: 9,
          cursor: "pointer",
          color: "var(--accent-purple)",
          fontSize: 12,
          fontWeight: 600,
          width: "100%",
          justifyContent: "center",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(168,85,247,0.18)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(168,85,247,0.1)")}
      >
        <Plus size={12} /> Connect external account
      </button>
    </div>
  );
}
