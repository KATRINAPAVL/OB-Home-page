"use client";

import { useState } from "react";
import { RefreshCw, AlertCircle, ChevronRight, X } from "lucide-react";
import { mockSubscriptions } from "@/lib/data";

interface Props { privacyMode: boolean; }

export default function SubscriptionCard({ privacyMode }: Props) {
  const [expanded, setExpanded] = useState(false);
  const total = mockSubscriptions.reduce((s, sub) => s + sub.amount, 0);
  const unused = mockSubscriptions.filter((s) => s.lastUsed.includes("days ago"));
  const display = expanded ? mockSubscriptions : mockSubscriptions.slice(0, 3);

  return (
    <div className="card">
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ padding: 6, background: "rgba(168,85,247,0.1)", borderRadius: 8 }}>
            <RefreshCw size={15} color="var(--accent-purple)" />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-primary)" }}>Subscriptions</div>
            <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{mockSubscriptions.length} active</div>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div
            className={privacyMode ? "blurred" : ""}
            style={{ fontSize: 16, fontWeight: 800, color: "var(--text-primary)" }}
          >
            {privacyMode ? "••••" : `£${total.toFixed(2)}`}
          </div>
          <div style={{ fontSize: 11, color: "var(--text-muted)" }}>/month</div>
        </div>
      </div>

      {/* Leak alert */}
      {unused.length > 0 && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 12px",
            background: "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.2)",
            borderRadius: 8,
            marginBottom: 12,
          }}
        >
          <AlertCircle size={13} color="var(--accent-red)" />
          <span style={{ fontSize: 12, color: "var(--accent-red)", fontWeight: 600 }}>
            {unused.length} subscriptions unused for 60+ days
          </span>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {display.map((sub) => {
          const isUnused = sub.lastUsed.includes("days ago");
          return (
            <div
              key={sub.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "9px 10px",
                background: "var(--surface-2)",
                borderRadius: 9,
                border: isUnused ? "1px solid rgba(239,68,68,0.15)" : "1px solid transparent",
              }}
            >
              <span style={{ fontSize: 18, width: 26, textAlign: "center" }}>{sub.logo}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>{sub.name}</div>
                <div style={{ fontSize: 11, color: isUnused ? "var(--accent-red)" : "var(--text-muted)" }}>
                  Last used: {sub.lastUsed}
                </div>
              </div>
              <span
                className={privacyMode ? "blurred" : ""}
                style={{ fontSize: 13, fontWeight: 700, color: isUnused ? "var(--accent-red)" : "var(--text-secondary)", marginRight: 4 }}
              >
                {privacyMode ? "••" : `£${sub.amount}`}
              </span>
              {isUnused && (
                <button
                  style={{
                    padding: "3px 8px",
                    background: "rgba(239,68,68,0.1)",
                    border: "1px solid rgba(239,68,68,0.3)",
                    borderRadius: 6,
                    cursor: "pointer",
                    color: "var(--accent-red)",
                    fontSize: 10,
                    fontWeight: 700,
                  }}
                >
                  Cancel
                </button>
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          marginTop: 10,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          padding: "8px",
          background: "none",
          border: "1px dashed var(--border)",
          borderRadius: 8,
          cursor: "pointer",
          color: "var(--text-muted)",
          fontSize: 12,
          fontWeight: 600,
        }}
      >
        {expanded ? "Show less" : `Show all ${mockSubscriptions.length}`}
        <ChevronRight size={12} style={{ transform: expanded ? "rotate(270deg)" : "rotate(90deg)" }} />
      </button>
    </div>
  );
}
