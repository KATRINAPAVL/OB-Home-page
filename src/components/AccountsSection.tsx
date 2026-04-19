"use client";

import { useState } from "react";
import { mockAccounts } from "@/lib/data";

interface Props { privacyMode: boolean; }

function CollapseIcon({ open }: { open: boolean }) {
  return (
    <div style={{
      width: 18, height: 18, borderRadius: "50%",
      border: "1.5px solid var(--text-secondary)",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        {open
          ? <line x1="5" y1="12" x2="19" y2="12"/>
          : <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>
        }
      </svg>
    </div>
  );
}

export default function AccountsSection({ privacyMode }: Props) {
  const [withCardsOpen, setWithCardsOpen] = useState(true);
  const [withoutCardsOpen, setWithoutCardsOpen] = useState(false);

  const fmt = (v: number) => privacyMode ? "••••••" : v.toLocaleString("lv-LV", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {/* Accounts with cards */}
      <div className="section-card">
        <div className="section-header" onClick={() => setWithCardsOpen(!withCardsOpen)}>
          <CollapseIcon open={withCardsOpen} />
          <span>Accounts and Cards</span>
        </div>
        {withCardsOpen && (
          <div className="section-body" style={{ padding: 0 }}>
            {/* Column headers */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr auto auto",
              padding: "8px 16px", gap: 24,
              fontSize: 11, color: "var(--text-muted)",
              fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em",
              borderBottom: "1px solid var(--border-light)",
            }}>
              <span></span>
              <span style={{ textAlign: "right" }}>Balance</span>
              <span style={{ textAlign: "right", minWidth: 80 }}>Available</span>
            </div>

            {mockAccounts.map((acc, i) => (
              <div key={acc.id} style={{ borderBottom: i < mockAccounts.length - 1 ? "1px solid var(--border-light)" : "none" }}>
                {/* Account row */}
                <div style={{
                  display: "grid", gridTemplateColumns: "1fr auto auto",
                  padding: "10px 16px", gap: 24, alignItems: "center",
                  cursor: "pointer",
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <span style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)" }}>{acc.name}</span>
                  <span className={`amount-red ${privacyMode ? "blurred" : ""}`} style={{ textAlign: "right", minWidth: 80, fontSize: 14 }}>
                    {fmt(acc.balance)} EUR
                  </span>
                  <span className={`amount-red ${privacyMode ? "blurred" : ""}`} style={{ textAlign: "right", minWidth: 80, fontSize: 14 }}>
                    {fmt(acc.available)} EUR
                  </span>
                </div>

                {/* Cards */}
                {acc.cards.map((card) => (
                  <div key={card} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "6px 16px 6px 28px",
                    fontSize: 13, color: "var(--text-secondary)",
                  }}>
                    <svg width="24" height="16" viewBox="0 0 24 16" style={{ flexShrink: 0 }}>
                      <rect width="24" height="16" rx="2" fill="#1a1f71"/>
                      <text x="2" y="11" fill="white" fontSize="7" fontFamily="Roboto" fontWeight="700">VISA</text>
                    </svg>
                    {card}
                  </div>
                ))}
              </div>
            ))}

            <div style={{ padding: "10px 16px", textAlign: "right" }}>
              <span className="link-red">+ Grant/increase credit limit</span>
            </div>
          </div>
        )}
      </div>

      {/* Accounts without cards */}
      <div className="section-card">
        <div className="section-header" onClick={() => setWithoutCardsOpen(!withoutCardsOpen)}>
          <CollapseIcon open={withoutCardsOpen} />
          <span>Accounts without cards</span>
        </div>
        {withoutCardsOpen && (
          <div className="section-body">
            <p style={{ color: "var(--text-secondary)", fontSize: 13 }}>You don't have any accessible account.</p>
          </div>
        )}
        <div style={{ padding: "10px 16px", display: "flex", flexDirection: "column", gap: 4 }}>
          <span className="link-red">+ Open Savings account</span>
          <span className="link-red">+ Open Green Savings Account</span>
        </div>
      </div>
    </div>
  );
}
