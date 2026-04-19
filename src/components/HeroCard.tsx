"use client";

import { TrendingUp, TrendingDown, Send, ArrowDownLeft, Plus, RefreshCw, MoreHorizontal } from "lucide-react";
import { mockAccounts, mockNetWorth } from "@/lib/data";

interface HeroCardProps {
  privacyMode: boolean;
}

const quickActions = [
  { icon: Send, label: "Pay", color: "#4f8ef7" },
  { icon: RefreshCw, label: "Transfer", color: "#22d3a3" },
  { icon: Plus, label: "Top Up", color: "#a855f7" },
  { icon: ArrowDownLeft, label: "Request", color: "#f59e0b" },
  { icon: MoreHorizontal, label: "More", color: "var(--text-muted)" },
];

function mask(value: string, active: boolean) {
  if (!active) return value;
  return "••••••";
}

export default function HeroCard({ privacyMode }: HeroCardProps) {
  const primary = mockAccounts[0];
  const isUp = mockNetWorth.changePercent > 0;

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #111827 0%, #1a2235 50%, #111827 100%)",
        border: "1px solid rgba(79,142,247,0.2)",
        borderRadius: 20,
        padding: "28px 28px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "rgba(79,142,247,0.06)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Account label + net worth badge */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>
          {primary.name}
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            fontSize: 12,
            color: isUp ? "var(--accent-green)" : "var(--accent-red)",
            background: isUp ? "rgba(34,211,163,0.1)" : "rgba(239,68,68,0.1)",
            padding: "3px 9px",
            borderRadius: 999,
            fontWeight: 600,
          }}
        >
          {isUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {isUp ? "+" : ""}{mockNetWorth.changePercent}% this month
        </div>
      </div>

      {/* Main balance */}
      <div style={{ marginBottom: 4 }}>
        <span
          className={privacyMode ? "blurred" : ""}
          style={{ fontSize: 42, fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-primary)", lineHeight: 1 }}
        >
          {primary.currency}{privacyMode ? "••••••" : primary.balance.toLocaleString("en-GB", { minimumFractionDigits: 2 })}
        </span>
      </div>

      {/* Net worth sub-line */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
        <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Net Worth</span>
        <span
          className={privacyMode ? "blurred" : ""}
          style={{ fontSize: 13, color: "var(--text-secondary)", fontWeight: 600 }}
        >
          £{privacyMode ? "••••••" : mockNetWorth.total.toLocaleString("en-GB", { minimumFractionDigits: 2 })}
        </span>
        <span style={{ fontSize: 12, color: isUp ? "var(--accent-green)" : "var(--accent-red)", fontWeight: 600 }}>
          {isUp ? "+" : ""}£{mockNetWorth.change.toLocaleString("en-GB", { minimumFractionDigits: 2 })}
        </span>
      </div>

      {/* Account pills */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
        {mockAccounts.map((acc) => (
          <div
            key={acc.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 12px",
              background: "var(--surface-3)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              fontSize: 12,
              color: "var(--text-secondary)",
              cursor: "pointer",
              transition: "border-color 0.2s",
            }}
          >
            <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>
              {acc.name}
            </span>
            <span className={privacyMode ? "blurred" : ""}>
              {privacyMode ? "•••" : `£${acc.balance.toLocaleString("en-GB", { maximumFractionDigits: 0 })}`}
            </span>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div style={{ display: "flex", gap: 10 }}>
        {quickActions.map(({ icon: Icon, label, color }) => (
          <button
            key={label}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
              padding: "12px 8px",
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              cursor: "pointer",
              color: "var(--text-secondary)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = color;
              e.currentTarget.style.color = color;
              e.currentTarget.style.background = "var(--surface-3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-secondary)";
              e.currentTarget.style.background = "var(--surface-2)";
            }}
          >
            <Icon size={18} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.02em" }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
