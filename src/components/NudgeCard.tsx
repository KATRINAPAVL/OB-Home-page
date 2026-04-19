"use client";

import { useState } from "react";
import { X, ChevronRight } from "lucide-react";
import { mockNudges } from "@/lib/data";

export default function NudgeCard() {
  const [dismissed, setDismissed] = useState<string[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);

  const visible = mockNudges.filter((n) => !dismissed.includes(n.id));
  const nudge = visible[activeIdx] ?? visible[0];

  if (!nudge) return null;

  return (
    <div
      className="card"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Accent strip */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 3,
          background: nudge.color,
          borderRadius: "16px 0 0 16px",
        }}
      />

      <div style={{ paddingLeft: 8 }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 20 }}>{nudge.icon}</span>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 1 }}>
                Smart Insight
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)" }}>{nudge.title}</div>
            </div>
          </div>
          <button
            onClick={() => {
              setDismissed((d) => [...d, nudge.id]);
              setActiveIdx(0);
            }}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", padding: 4 }}
          >
            <X size={14} />
          </button>
        </div>

        <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5, marginBottom: 14 }}>
          {nudge.body}
        </p>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              padding: "7px 14px",
              background: nudge.color + "20",
              border: `1px solid ${nudge.color}40`,
              borderRadius: 8,
              cursor: "pointer",
              color: nudge.color,
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            {nudge.cta} <ChevronRight size={12} />
          </button>

          {/* Dots nav */}
          <div style={{ display: "flex", gap: 5 }}>
            {visible.map((n, i) => (
              <button
                key={n.id}
                onClick={() => setActiveIdx(i)}
                style={{
                  width: i === activeIdx ? 18 : 6,
                  height: 6,
                  borderRadius: 999,
                  background: i === activeIdx ? nudge.color : "var(--surface-3)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
