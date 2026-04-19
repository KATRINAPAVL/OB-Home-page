"use client";

import { useState } from "react";
import { mockLoans } from "@/lib/data";

interface Props { privacyMode: boolean; }

function CollapseIcon({ open }: { open: boolean }) {
  return (
    <div style={{ width: 18, height: 18, borderRadius: "50%", border: "1.5px solid var(--text-secondary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        {open ? <line x1="5" y1="12" x2="19" y2="12"/> : <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>}
      </svg>
    </div>
  );
}

export default function ConsumerLoanSection({ privacyMode }: Props) {
  const [open, setOpen] = useState(true);
  const fmt = (v: number) => privacyMode ? "••••••" : v.toLocaleString("lv-LV", { minimumFractionDigits: 2 });

  return (
    <div className="section-card" style={{ marginBottom: 10 }}>
      <div className="section-header" onClick={() => setOpen(!open)}>
        <CollapseIcon open={open} />
        <span>Lending and Leasing</span>
      </div>
      {open && (
        <div>
          {/* Promo offer */}
          <div style={{
            margin: 12, borderRadius: "var(--radius)",
            background: "var(--banner-dark)", padding: 16,
            display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12,
          }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Cash loans for your needs</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginBottom: 10 }}>Find out how much you can borrow!</div>
              <button className="btn-primary" style={{ fontSize: 12, padding: "6px 14px" }}>Find out your loan offer</button>
            </div>
            <span style={{ fontSize: 32 }}>💳</span>
          </div>

          {/* Loans */}
          <div style={{ padding: "4px 0" }}>
            <div style={{ padding: "8px 16px", display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>Total amount</span>
              <span className={`amount-red ${privacyMode ? "blurred" : ""}`} style={{ fontSize: 14, fontWeight: 500 }}>
                {fmt(mockLoans.totalAmount)} EUR
              </span>
            </div>
            {mockLoans.items.map((item, i) => (
              <div key={i} style={{ padding: "10px 16px", borderTop: "1px solid var(--border-light)", display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                <span style={{ fontSize: 20 }}>🏦</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{item.name}</div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Next payment: {item.date} · €{item.nextPayment}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <span className={privacyMode ? "blurred" : ""} style={{ fontSize: 13, color: "var(--text-secondary)" }}>
                    {fmt(item.remaining)} EUR
                  </span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
