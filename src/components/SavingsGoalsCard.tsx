"use client";

import { Target, Plus } from "lucide-react";
import { mockSavingsGoals } from "@/lib/data";

interface Props { privacyMode: boolean; }

export default function SavingsGoalsCard({ privacyMode }: Props) {
  return (
    <div className="card" style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ padding: 6, background: "rgba(79,142,247,0.1)", borderRadius: 8 }}>
            <Target size={15} color="var(--accent)" />
          </div>
          <span style={{ fontWeight: 700, fontSize: 14 }}>Savings Goals</span>
        </div>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            padding: "5px 10px",
            background: "rgba(79,142,247,0.1)",
            border: "1px solid rgba(79,142,247,0.25)",
            borderRadius: 7,
            cursor: "pointer",
            color: "var(--accent)",
            fontSize: 11,
            fontWeight: 600,
          }}
        >
          <Plus size={11} /> New Goal
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {mockSavingsGoals.map((goal) => {
          const pct = Math.min(100, Math.round((goal.current / goal.target) * 100));
          const remaining = goal.target - goal.current;
          return (
            <div key={goal.id} style={{ cursor: "pointer" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 18 }}>{goal.emoji}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>{goal.name}</div>
                    <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Target: {goal.deadline}</div>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: goal.color }}>{pct}%</div>
                  <div
                    className={privacyMode ? "blurred" : ""}
                    style={{ fontSize: 11, color: "var(--text-muted)" }}
                  >
                    {privacyMode ? "•••" : `£${remaining.toLocaleString("en-GB")} left`}
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${pct}%`, background: goal.color }}
                />
              </div>

              {/* Amount labels */}
              <div
                className={privacyMode ? "blurred" : ""}
                style={{ display: "flex", justifyContent: "space-between", marginTop: 4, fontSize: 11, color: "var(--text-muted)" }}
              >
                <span>{privacyMode ? "••••" : `£${goal.current.toLocaleString("en-GB")}`}</span>
                <span>{privacyMode ? "••••" : `£${goal.target.toLocaleString("en-GB")}`}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
