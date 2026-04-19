"use client";

import { TrendingUp, ChevronRight } from "lucide-react";
import { mockFinancialHealth } from "@/lib/data";

export default function FinancialHealthCard() {
  const { score, change, creditScore, creditMax, creditLabel, pillars } = mockFinancialHealth;

  const circumference = 2 * Math.PI * 38;
  const offset = circumference - (score / 100) * circumference;
  const creditPct = (creditScore / creditMax) * 100;

  const scoreColor = "#4f8ef7";

  return (
    <div className="card">
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
        <div style={{ padding: 6, background: "rgba(79,142,247,0.1)", borderRadius: 8 }}>
          <TrendingUp size={15} color="var(--accent)" />
        </div>
        <span style={{ fontWeight: 700, fontSize: 14 }}>Financial Health</span>
        <span
          style={{
            marginLeft: "auto",
            fontSize: 11,
            color: "var(--accent-green)",
            fontWeight: 700,
            background: "rgba(34,211,163,0.1)",
            padding: "2px 8px",
            borderRadius: 999,
          }}
        >
          ↑ +{change} pts
        </span>
      </div>

      {/* Main gauge + credit score */}
      <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 20 }}>
        <div style={{ position: "relative", width: 88, height: 88, flexShrink: 0 }}>
          <svg width="88" height="88" viewBox="0 0 88 88">
            <circle cx="44" cy="44" r="38" fill="none" stroke="var(--surface-3)" strokeWidth="6" />
            <circle
              cx="44" cy="44" r="38"
              fill="none"
              stroke="url(#healthGrad)"
              strokeWidth="6"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform="rotate(-90 44 44)"
              style={{ transition: "stroke-dashoffset 1.2s ease" }}
            />
            <defs>
              <linearGradient id="healthGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4f8ef7" />
                <stop offset="100%" stopColor="#22d3a3" />
              </linearGradient>
            </defs>
          </svg>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", lineHeight: 1 }}>{score}</span>
            <span style={{ fontSize: 9, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>of 100</span>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 6 }}>Credit Score</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "var(--text-primary)", lineHeight: 1, marginBottom: 4 }}>
            {creditScore} <span style={{ fontSize: 12, color: "var(--accent-green)", fontWeight: 600 }}>{creditLabel}</span>
          </div>
          <div className="progress-bar" style={{ height: 5, marginBottom: 6 }}>
            <div
              className="progress-fill"
              style={{ width: `${creditPct}%`, background: "linear-gradient(90deg, #4f8ef7, #22d3a3)" }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "var(--text-muted)" }}>
            <span>300</span><span>{creditMax}</span>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {pillars.map((p) => (
          <div key={p.name}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
              <span style={{ fontSize: 12, color: "var(--text-secondary)", fontWeight: 500 }}>{p.name}</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: p.color }}>{p.score}</span>
            </div>
            <div className="progress-bar" style={{ height: 4 }}>
              <div className="progress-fill" style={{ width: `${p.score}%`, background: p.color }} />
            </div>
          </div>
        ))}
      </div>

      <button style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "var(--text-muted)", background: "none", border: "none", cursor: "pointer", padding: "4px 0" }}>
        See full breakdown <ChevronRight size={12} />
      </button>
    </div>
  );
}
