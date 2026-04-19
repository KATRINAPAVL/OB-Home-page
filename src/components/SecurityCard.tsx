"use client";

import { mockSecurity } from "@/lib/data";

export default function SecurityCard() {
  const { score, twoFa, biometric, status } = mockSecurity;
  return (
    <div className="section-card" style={{ height: "100%" }}>
      <div className="section-header" style={{ cursor: "default", justifyContent: "space-between" }}>
        <span>Security</span>
        <span style={{
          fontSize: 11, fontWeight: 600,
          color: score >= 80 ? "#15803d" : "var(--red)",
          background: score >= 80 ? "rgba(21,128,61,0.08)" : "rgba(227,0,44,0.08)",
          padding: "2px 8px", borderRadius: 999,
        }}>
          {status}
        </span>
      </div>
      <div style={{ padding: "14px 16px" }}>
        {/* Score ring */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <div style={{ position: "relative", width: 56, height: 56, flexShrink: 0 }}>
            <svg width="56" height="56" viewBox="0 0 56 56">
              <circle cx="28" cy="28" r="23" fill="none" stroke="var(--border)" strokeWidth="4" />
              <circle cx="28" cy="28" r="23" fill="none" stroke={score >= 80 ? "#15803d" : "var(--red)"} strokeWidth="4"
                strokeDasharray={2 * Math.PI * 23}
                strokeDashoffset={2 * Math.PI * 23 * (1 - score / 100)}
                strokeLinecap="round" transform="rotate(-90 28 28)"
                style={{ transition: "stroke-dashoffset 1s ease" }} />
            </svg>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)" }}>{score}</span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>Score {score}/100</div>
            <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Last login: Today, 08:42</div>
          </div>
        </div>

        {[
          { label: "Two-Factor Auth", enabled: twoFa },
          { label: "Biometric Login", enabled: biometric },
        ].map(({ label, enabled }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", borderTop: "1px solid var(--border-light)" }}>
            <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{label}</span>
            <span style={{ fontSize: 11, fontWeight: 600, color: enabled ? "#15803d" : "var(--red)" }}>
              {enabled ? "✓ Active" : "Enable"}
            </span>
          </div>
        ))}

        <span className="link-red" style={{ display: "block", marginTop: 10, fontSize: 12 }}>
          Review security settings →
        </span>
      </div>
    </div>
  );
}
