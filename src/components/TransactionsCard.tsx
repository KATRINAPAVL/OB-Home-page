"use client";

import { useState } from "react";
import { mockTransactions } from "@/lib/data";

interface Props { privacyMode: boolean; }

const CATEGORIES = ["All", "Food & Drink", "Shopping", "Income", "Groceries"];

export default function TransactionsCard({ privacyMode }: Props) {
  const [filter, setFilter] = useState("All");
  const fmt = (v: number) => privacyMode ? "••••••" : Math.abs(v).toLocaleString("lv-LV", { minimumFractionDigits: 2 });
  const list = filter === "All" ? mockTransactions : mockTransactions.filter(t => t.category === filter);

  return (
    <div className="section-card" style={{ height: "100%" }}>
      <div className="section-header" style={{ cursor: "default", justifyContent: "space-between" }}>
        <span>Recent Transactions</span>
        <span className="link-red" style={{ fontSize: 12 }}>View all →</span>
      </div>

      {/* Category filter chips */}
      <div style={{ display: "flex", gap: 6, padding: "10px 16px 0", overflowX: "auto", paddingBottom: 10, borderBottom: "1px solid var(--border-light)" }}>
        {CATEGORIES.map(cat => (
          <button key={cat} onClick={() => setFilter(cat)} style={{
            flexShrink: 0, padding: "3px 10px", borderRadius: 999,
            border: `1px solid ${filter === cat ? "var(--red)" : "var(--border)"}`,
            background: filter === cat ? "rgba(227,0,44,0.06)" : "transparent",
            color: filter === cat ? "var(--red)" : "var(--text-secondary)",
            fontSize: 11, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
            transition: "all 0.15s",
          }}>
            {cat}
          </button>
        ))}
      </div>

      <div>
        {list.slice(0, 6).map((tx, i) => (
          <div key={tx.id} style={{
            display: "flex", alignItems: "center", gap: 10, padding: "10px 16px",
            borderTop: i > 0 ? "1px solid var(--border-light)" : "none", cursor: "pointer",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--bg)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{tx.merchant}</div>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{tx.category} · {tx.date}</div>
            </div>
            <span className={privacyMode ? "blurred" : ""} style={{ fontSize: 13, fontWeight: 500, color: tx.amount > 0 ? "#15803d" : "var(--text-primary)", flexShrink: 0 }}>
              {tx.amount > 0 ? "+" : ""}€{fmt(tx.amount)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
