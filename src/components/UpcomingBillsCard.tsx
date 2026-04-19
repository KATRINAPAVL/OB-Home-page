"use client";

import { Calendar, ChevronRight } from "lucide-react";
import { mockUpcomingBills } from "@/lib/data";

interface Props { privacyMode: boolean; }

export default function UpcomingBillsCard({ privacyMode }: Props) {
  const total = mockUpcomingBills.reduce((s, b) => s + b.amount, 0);

  const urgencyColor = (days: number) => {
    if (days <= 2) return "var(--accent-red)";
    if (days <= 5) return "var(--accent-amber)";
    return "var(--accent-green)";
  };

  return (
    <div className="card" style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ padding: 6, background: "rgba(245,158,11,0.1)", borderRadius: 8 }}>
            <Calendar size={15} color="var(--accent-amber)" />
          </div>
          <span style={{ fontWeight: 700, fontSize: 14, color: "var(--text-primary)" }}>Upcoming Bills</span>
        </div>
        <span
          className={privacyMode ? "blurred" : ""}
          style={{ fontSize: 13, color: "var(--accent-amber)", fontWeight: 700 }}
        >
          {privacyMode ? "••••" : `£${total.toFixed(2)}`}
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {mockUpcomingBills.map((bill) => (
          <div
            key={bill.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 12px",
              background: "var(--surface-2)",
              borderRadius: 10,
              cursor: "pointer",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--surface-3)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--surface-2)")}
          >
            <span style={{ fontSize: 20, width: 28, textAlign: "center" }}>{bill.logo}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>{bill.name}</div>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{bill.category}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div
                className={privacyMode ? "blurred" : ""}
                style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }}
              >
                {privacyMode ? "••••" : `£${bill.amount.toFixed(2)}`}
              </div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: urgencyColor(bill.daysLeft),
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                {bill.daysLeft <= 1 ? "Tomorrow" : `${bill.daysLeft} days`}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        style={{
          marginTop: 14,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          padding: "9px",
          background: "none",
          border: "1px dashed var(--border)",
          borderRadius: 10,
          cursor: "pointer",
          color: "var(--text-muted)",
          fontSize: 12,
          fontWeight: 600,
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(79,142,247,0.4)";
          e.currentTarget.style.color = "var(--accent)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border)";
          e.currentTarget.style.color = "var(--text-muted)";
        }}
      >
        View all bills <ChevronRight size={12} />
      </button>
    </div>
  );
}
