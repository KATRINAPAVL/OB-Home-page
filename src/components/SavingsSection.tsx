"use client";

import { mockNetWorth } from "@/lib/data";

interface Props { privacyMode: boolean; }

export default function SavingsSection({ privacyMode }: Props) {
  const savings = mockNetWorth.breakdown.find(b => b.label === "Savings")?.value ?? 0;
  const fmt = (v: number) =>
    privacyMode ? "••••••" : `€${v.toLocaleString("lv-LV", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <div className="section-card" style={{ height: "100%" }}>
      <div className="section-header" style={{ cursor: "default", justifyContent: "space-between" }}>
        <span>Savings</span>
        <span className="link-red" style={{ fontSize: 12 }}>View all →</span>
      </div>

      <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div>
          <span style={{ fontSize: 11, fontWeight: 500, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Total savings
          </span>
          <div className={privacyMode ? "blurred" : ""} style={{ fontSize: 26, fontWeight: 700, color: "#15803d", lineHeight: 1.2, marginTop: 2 }}>
            {fmt(savings)}
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: 12, display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>Term deposit</div>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Matures 01.07.2025 · 4.2% p.a.</div>
            </div>
            <span className={privacyMode ? "blurred" : ""} style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>
              {fmt(5000)}
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>Savings account</div>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Instant access · 2.8% p.a.</div>
            </div>
            <span className={privacyMode ? "blurred" : ""} style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>
              {fmt(2820)}
            </span>
          </div>
        </div>

        <button className="btn-outline" style={{ fontSize: 12, padding: "7px 14px", width: "100%" }}>
          Open savings account
        </button>
      </div>
    </div>
  );
}
