"use client";

import { mockUpcomingBills } from "@/lib/data";

interface Props { privacyMode: boolean; }

export default function UpcomingBillsCard({ privacyMode }: Props) {
  const urgencyColor = (days: number) =>
    days <= 2 ? "var(--red)" : days <= 5 ? "#d97706" : "#15803d";

  return (
    <div className="section-card" style={{ height: "100%" }}>
      <div className="section-header" style={{ cursor: "default", justifyContent: "space-between" }}>
        <span>Upcoming Bills</span>
        <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Next 30 days</span>
      </div>
      <div>
        {mockUpcomingBills.map((bill, i) => (
          <div key={bill.id} style={{
            display: "flex", alignItems: "center", gap: 12, padding: "11px 16px",
            borderTop: i > 0 ? "1px solid var(--border-light)" : "none", cursor: "pointer",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--bg)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >
            <span style={{ fontSize: 20, flexShrink: 0 }}>{bill.logo}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>{bill.name}</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: urgencyColor(bill.daysLeft) }}>
                {bill.daysLeft <= 1 ? "Due tomorrow" : `Due in ${bill.daysLeft} days`}
              </div>
            </div>
            <span className={privacyMode ? "blurred" : ""} style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>
              €{bill.amount.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
      <div style={{ padding: "10px 16px" }}>
        <span className="link-red" style={{ fontSize: 12 }}>View all bills →</span>
      </div>
    </div>
  );
}
