"use client";

import { useState } from "react";
import { List, Search, ChevronRight, Filter } from "lucide-react";
import { mockTransactions } from "@/lib/data";

interface Props { privacyMode: boolean; }

export default function TransactionsCard({ privacyMode }: Props) {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", "Food & Drink", "Shopping", "Income", "Entertainment", "Groceries"];

  const filtered = filter === "All"
    ? mockTransactions
    : mockTransactions.filter((t) => t.category === filter);

  return (
    <div className="card">
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
        <div style={{ padding: 6, background: "rgba(79,142,247,0.1)", borderRadius: 8 }}>
          <List size={15} color="var(--accent)" />
        </div>
        <span style={{ fontWeight: 700, fontSize: 14 }}>Recent Transactions</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              padding: "5px 10px",
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              borderRadius: 7,
              cursor: "pointer",
              color: "var(--text-secondary)",
              fontSize: 11,
              fontWeight: 600,
            }}
          >
            <Filter size={11} /> Filter
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              padding: "5px 10px",
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              borderRadius: 7,
              cursor: "pointer",
              color: "var(--text-secondary)",
              fontSize: 11,
              fontWeight: 600,
            }}
          >
            <Search size={11} /> Search
          </button>
        </div>
      </div>

      {/* Category chips */}
      <div style={{ display: "flex", gap: 6, marginBottom: 14, overflowX: "auto", paddingBottom: 2 }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              flexShrink: 0,
              padding: "5px 12px",
              borderRadius: 999,
              border: "1px solid",
              borderColor: filter === cat ? "var(--accent)" : "var(--border)",
              background: filter === cat ? "rgba(79,142,247,0.15)" : "transparent",
              color: filter === cat ? "var(--accent)" : "var(--text-muted)",
              fontSize: 11,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Transaction list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {filtered.map((tx) => (
          <div
            key={tx.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "11px 12px",
              background: "var(--surface-2)",
              borderRadius: 10,
              cursor: "pointer",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--surface-3)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--surface-2)")}
          >
            {/* Logo */}
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: tx.type === "credit" ? "rgba(34,211,163,0.1)" : "var(--surface-3)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                flexShrink: 0,
              }}
            >
              {tx.logo}
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {tx.merchant}
              </div>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
                {tx.category} · {tx.date}
              </div>
            </div>

            {/* Amount */}
            <div
              className={privacyMode ? "blurred" : ""}
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: tx.type === "credit" ? "var(--accent-green)" : "var(--text-primary)",
                flexShrink: 0,
              }}
            >
              {tx.type === "credit" ? "+" : ""}£{Math.abs(tx.amount).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <button
        style={{
          marginTop: 12,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          padding: "10px",
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
        View all transactions <ChevronRight size={12} />
      </button>
    </div>
  );
}
