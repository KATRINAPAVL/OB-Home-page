"use client";

import { mockAccounts, mockLoans, mockNetWorth } from "@/lib/data";

interface Props { privacyMode: boolean; }

export default function BalanceCard({ privacyMode }: Props) {
  const totalBalance = mockAccounts.reduce((s, a) => s + a.balance, 0);
  const totalSavings = mockNetWorth.breakdown.find(b => b.label === "Savings")?.value ?? 0;
  const totalLoans = mockLoans.totalAmount;
  const totalInvestments = mockNetWorth.breakdown.find(b => b.label === "Investments")?.value ?? 0;

  const fmt = (v: number) =>
    privacyMode ? "••••••" : `€${v.toLocaleString("lv-LV", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const sections = [
    { label: "Total Balance", value: totalBalance, color: "var(--text-primary)" },
    { label: "Total Savings", value: totalSavings, color: "#15803d" },
    { label: "Total Loans Balance", value: totalLoans, color: "#d97706" },
    { label: "Total Investments", value: totalInvestments, color: "var(--text-primary)" },
  ];

  return (
    <div className="section-card" style={{ overflow: "visible" }}>
      <div style={{ display: "flex", alignItems: "stretch" }}>
        {sections.map((s, i) => (
          <div
            key={s.label}
            style={{
              flex: 1,
              padding: "18px 24px",
              borderLeft: i > 0 ? "1px solid var(--border-light)" : "none",
              display: "flex", flexDirection: "column", justifyContent: "center", gap: 4,
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 500, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              {s.label}
            </span>
            <span className={privacyMode ? "blurred" : ""} style={{ fontSize: 24, fontWeight: 700, color: s.color, lineHeight: 1.15 }}>
              {fmt(s.value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
