"use client";

import { mockNeedsAttention } from "@/lib/data";

const TYPE_ICONS = {
  order: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  message: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
    </svg>
  ),
  document: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/>
    </svg>
  ),
};

const STATUS_STYLES: Record<string, { bg: string; color: string }> = {
  "Unread":            { bg: "rgba(227,0,44,0.08)",   color: "var(--red)" },
  "Action required":   { bg: "rgba(227,0,44,0.08)",   color: "var(--red)" },
  "Awaiting approval": { bg: "rgba(217,119,6,0.08)",  color: "#d97706" },
  "In progress":       { bg: "rgba(103,105,115,0.08)", color: "var(--text-secondary)" },
};

export default function NeedsAttentionCard() {
  const urgentCount = mockNeedsAttention.filter(i => i.urgent).length;

  return (
    <div className="section-card">
      <div className="section-header" style={{ cursor: "default", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span>Needs Attention</span>
          {urgentCount > 0 && (
            <span style={{
              fontSize: 11, background: "var(--red)", color: "#fff",
              borderRadius: 999, padding: "1px 7px", fontWeight: 700,
            }}>
              {urgentCount}
            </span>
          )}
        </div>
        <span className="link-red" style={{ fontSize: 12 }}>View all →</span>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {mockNeedsAttention.map((item, i) => {
          const statusStyle = STATUS_STYLES[item.status] ?? STATUS_STYLES["In progress"];
          return (
            <div
              key={item.id}
              style={{
                flex: "1 1 240px",
                display: "flex", alignItems: "flex-start", gap: 12,
                padding: "12px 16px",
                borderTop: i >= 2 ? "1px solid var(--border-light)" : "none",
                borderLeft: i % 2 === 1 ? "1px solid var(--border-light)" : "none",
                cursor: "pointer", transition: "background 0.15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--bg)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              <div style={{
                width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                background: statusStyle.bg,
                color: statusStyle.color,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {TYPE_ICONS[item.type]}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>{item.title}</span>
                </div>
                <div style={{ fontSize: 12, color: "var(--text-secondary)", marginBottom: 6, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {item.detail}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 500, padding: "1px 8px",
                    borderRadius: 999, border: `1px solid ${statusStyle.color}`,
                    background: statusStyle.bg, color: statusStyle.color,
                  }}>
                    {item.status}
                  </span>
                  <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{item.time}</span>
                </div>
              </div>

              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 2 }}>
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
}
