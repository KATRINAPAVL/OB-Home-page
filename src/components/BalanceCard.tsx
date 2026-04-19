"use client";

import { mockAccounts } from "@/lib/data";

interface Props { privacyMode: boolean; }

export default function BalanceCard({ privacyMode }: Props) {
  const totalBalance = mockAccounts.reduce((s, a) => s + a.balance, 0);
  const totalAvailable = mockAccounts.reduce((s, a) => s + a.available, 0);

  const fmt = (v: number) =>
    privacyMode ? "••••••" : `€${v.toLocaleString("lv-LV", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <div className="section-card" style={{ overflow: "visible" }}>
      <div style={{ display: "flex", alignItems: "stretch", flexWrap: "wrap" }}>

        {/* Total balance */}
        <div style={{
          padding: "18px 24px", borderRight: "1px solid var(--border-light)",
          display: "flex", flexDirection: "column", justifyContent: "center", gap: 2, minWidth: 200,
        }}>
          <span style={{ fontSize: 11, fontWeight: 500, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Total balance
          </span>
          <span className={privacyMode ? "blurred" : ""} style={{ fontSize: 26, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.15 }}>
            {fmt(totalBalance)}
          </span>
          <span style={{ fontSize: 11, color: "var(--text-secondary)" }}>
            Available: <span className={privacyMode ? "blurred" : ""} style={{ fontWeight: 500, color: totalAvailable < totalBalance ? "#d97706" : "var(--text-primary)" }}>
              {fmt(totalAvailable)}
            </span>
          </span>
        </div>

        {/* Per-account breakdown */}
        <div style={{ display: "flex", flex: 1, flexWrap: "wrap", alignItems: "stretch" }}>
          {mockAccounts.map((acc, i) => (
            <div
              key={acc.id}
              style={{
                display: "flex", flexDirection: "column", justifyContent: "center",
                padding: "14px 20px", gap: 3, flex: 1, minWidth: 160,
                borderLeft: i > 0 ? "1px solid var(--border-light)" : "none",
                cursor: "pointer", transition: "background 0.15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--bg)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                <div style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: i === 0 ? "var(--red)" : "#676973",
                  flexShrink: 0,
                }} />
                <span style={{ fontSize: 12, fontWeight: 500, color: "var(--text-primary)" }}>{acc.name}</span>
              </div>
              <span className={privacyMode ? "blurred" : ""} style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.2 }}>
                {fmt(acc.balance)}
              </span>
              <span style={{ fontSize: 11, color: "var(--text-secondary)" }}>
                Avail: <span className={privacyMode ? "blurred" : ""} style={{ fontWeight: 500 }}>{fmt(acc.available)}</span>
              </span>
              <span style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 2 }}>{acc.iban}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
