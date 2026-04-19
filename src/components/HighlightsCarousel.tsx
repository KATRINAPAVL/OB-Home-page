"use client";

import { useState } from "react";
import { highlights } from "@/lib/data";

export default function HighlightsCarousel() {
  const [start, setStart] = useState(0);
  const visible = 4;
  const canPrev = start > 0;
  const canNext = start + visible < highlights.length;

  const bgForType = (type: string) => {
    if (type === "alert") return "#fef2f2";
    if (type === "warning") return "#fffbeb";
    if (type === "info") return "var(--bg)";
    return "#f0f0f0";
  };

  const borderForType = (type: string) => {
    if (type === "alert") return "#fecaca";
    if (type === "warning") return "#fde68a";
    if (type === "info") return "var(--border)";
    return "var(--border)";
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <span style={{ fontSize: 15, fontWeight: 500, color: "var(--text-primary)" }}>Highlights</span>
        <div style={{ display: "flex", gap: 4 }}>
          {[
            { dir: "prev", disabled: !canPrev, onClick: () => setStart(s => Math.max(0, s - 1)), poly: "15 18 9 12 15 6" },
            { dir: "next", disabled: !canNext, onClick: () => setStart(s => Math.min(highlights.length - visible, s + 1)), poly: "9 18 15 12 9 6" },
          ].map(({ dir, disabled, onClick, poly }) => (
            <button
              key={dir}
              onClick={onClick}
              disabled={disabled}
              style={{
                width: 28, height: 28,
                background: "var(--white)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: disabled ? "not-allowed" : "pointer",
                opacity: disabled ? 0.4 : 1,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points={poly}/>
              </svg>
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: `repeat(${visible}, 1fr)`, gap: 10, overflow: "hidden" }}>
        {highlights.slice(start, start + visible).map((h) => (
          <div
            key={h.id}
            style={{
              background: h.image ? "#2a2a3e" : bgForType(h.type),
              border: `1px solid ${h.image ? "transparent" : borderForType(h.type)}`,
              borderRadius: "var(--radius)",
              padding: h.image ? 0 : 14,
              minHeight: 96,
              display: "flex",
              flexDirection: "column",
              justifyContent: h.image ? "flex-end" : "flex-start",
              gap: 6,
              cursor: "pointer",
              overflow: "hidden",
              position: "relative",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {h.image ? (
              <div style={{ padding: "10px 12px", background: "linear-gradient(transparent, rgba(0,0,0,0.7))" }}>
                <p style={{ fontSize: 12, fontWeight: 500, color: "#fff", lineHeight: 1.3 }}>{h.title}</p>
              </div>
            ) : (
              <>
                <span style={{ fontSize: 20 }}>{h.tag}</span>
                <p style={{ fontSize: 12, fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.35 }}>{h.title}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
