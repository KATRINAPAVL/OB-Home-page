"use client";

import { useState } from "react";
import { mockNudges } from "@/lib/data";

export default function SmartInsightsSection() {
  const [dismissed, setDismissed] = useState<string[]>([]);
  const visible = mockNudges.filter((n) => !dismissed.includes(n.id));

  if (visible.length === 0) return null;

  return (
    <div className="section-card" style={{ marginBottom: 10 }}>
      <div className="section-header" style={{ cursor: "default" }}>
        <span>Smart Insights</span>
        <span style={{
          marginLeft: 8, fontSize: 11, background: "var(--red)", color: "#fff",
          borderRadius: 999, padding: "1px 7px", fontWeight: 700,
        }}>
          {visible.length}
        </span>
      </div>
      <div>
        {visible.map((n, i) => (
          <div
            key={n.id}
            style={{
              display: "flex", alignItems: "flex-start", gap: 12,
              padding: "12px 16px",
              borderTop: i > 0 ? "1px solid var(--border-light)" : "none",
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)", marginBottom: 2 }}>{n.title}</div>
              <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>{n.body}</div>
            </div>
            <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
              <button className="btn-primary" style={{ padding: "5px 12px", fontSize: 12 }}>{n.cta}</button>
              <button
                onClick={() => setDismissed((d) => [...d, n.id])}
                style={{
                  background: "none", border: "1px solid var(--border)", borderRadius: "var(--radius)",
                  padding: "5px 10px", cursor: "pointer", fontSize: 12, color: "var(--text-secondary)",
                  fontFamily: "inherit",
                }}
              >
                Dismiss
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
