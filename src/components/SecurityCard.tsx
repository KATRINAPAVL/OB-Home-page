"use client";

import { Shield, Smartphone, Fingerprint, Check, ChevronRight } from "lucide-react";
import { mockSecurity } from "@/lib/data";

export default function SecurityCard() {
  const { score, twoFa, biometric, deviceCount, lastLogin, status } = mockSecurity;

  const scoreColor = score >= 80 ? "var(--accent-green)" : score >= 60 ? "var(--accent-amber)" : "var(--accent-red)";

  const circumference = 2 * Math.PI * 30;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="card">
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
        <div style={{ padding: 6, background: "rgba(34,211,163,0.1)", borderRadius: 8 }}>
          <Shield size={15} color="var(--accent-green)" />
        </div>
        <span style={{ fontWeight: 700, fontSize: 14 }}>Security Health</span>
      </div>

      {/* Gauge */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
        <div style={{ position: "relative", width: 72, height: 72, flexShrink: 0 }}>
          <svg width="72" height="72" viewBox="0 0 72 72">
            <circle cx="36" cy="36" r="30" fill="none" stroke="var(--surface-3)" strokeWidth="5" />
            <circle
              cx="36"
              cy="36"
              r="30"
              fill="none"
              stroke={scoreColor}
              strokeWidth="5"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform="rotate(-90 36 36)"
              style={{ transition: "stroke-dashoffset 1s ease" }}
            />
          </svg>
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 800, color: scoreColor, lineHeight: 1 }}>{score}</span>
            <span style={{ fontSize: 8, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>Score</span>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              padding: "3px 10px",
              background: "rgba(34,211,163,0.12)",
              border: "1px solid rgba(34,211,163,0.25)",
              borderRadius: 999,
              fontSize: 11,
              fontWeight: 700,
              color: "var(--accent-green)",
              marginBottom: 8,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            <span className="pulse">●</span> {status}
          </div>
          <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Last login: {lastLogin}</div>
          <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{deviceCount} trusted devices</div>
        </div>
      </div>

      {/* Status items */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          { icon: Smartphone, label: "Two-Factor Auth", enabled: twoFa },
          { icon: Fingerprint, label: "Biometric Login", enabled: biometric },
        ].map(({ icon: Icon, label, enabled }) => (
          <div
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "9px 12px",
              background: "var(--surface-2)",
              borderRadius: 9,
            }}
          >
            <Icon size={14} color={enabled ? "var(--accent-green)" : "var(--text-muted)"} />
            <span style={{ flex: 1, fontSize: 12, color: "var(--text-secondary)", fontWeight: 500 }}>{label}</span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontSize: 11,
                fontWeight: 700,
                color: enabled ? "var(--accent-green)" : "var(--accent-amber)",
              }}
            >
              {enabled ? <Check size={11} /> : null}
              {enabled ? "Active" : "Enable"}
            </div>
          </div>
        ))}
      </div>

      <button
        style={{
          marginTop: 12,
          display: "flex",
          alignItems: "center",
          gap: 4,
          fontSize: 12,
          color: "var(--text-muted)",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px 0",
        }}
      >
        Review security settings <ChevronRight size={12} />
      </button>
    </div>
  );
}
