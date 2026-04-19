"use client";

import { useState } from "react";
import { navItems } from "@/lib/data";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const navIcons: Record<string, React.ReactNode> = {
    "Home": (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    "Accounts and Cards": (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    "Payments": (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>
      </svg>
    ),
    "Lending and Leasing": (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
    "Savings": (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    "Investments": (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    "Insurance": (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    "Pension": (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
      </svg>
    ),
    "My profile": (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    "Activity History": (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/>
      </svg>
    ),
  };

  return (
    <aside
      style={{
        width: collapsed ? 56 : "var(--sidebar-width)",
        minHeight: "100vh",
        background: "var(--white)",
        borderRight: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        transition: "width 0.2s ease",
        position: "sticky",
        top: 0,
        overflow: "hidden",
      }}
    >
      {/* Logo */}
      <div
        style={{
          height: "var(--header-height)",
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          borderBottom: "1px solid var(--border)",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            background: "var(--red)",
            color: "#fff",
            fontWeight: 700,
            fontSize: collapsed ? 14 : 16,
            padding: collapsed ? "5px 8px" : "5px 12px",
            borderRadius: 2,
            letterSpacing: "-0.01em",
            whiteSpace: "nowrap",
            transition: "all 0.2s",
          }}
        >
          {collapsed ? "C" : "Citadele"}
        </div>
      </div>

      {/* Nav items */}
      <nav style={{ flex: 1, paddingTop: 8, paddingBottom: 8, overflowY: "auto", overflowX: "hidden" }}>
        {navItems.map((item) => (
          <div
            key={item.label}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 16px",
              color: item.active ? "var(--text-primary)" : "var(--text-secondary)",
              fontWeight: item.active ? 500 : 400,
              fontSize: 14,
              cursor: "pointer",
              background: item.active ? "var(--bg)" : "transparent",
              transition: "background 0.15s",
              whiteSpace: "nowrap",
              overflow: "hidden",
              borderLeft: item.active ? "3px solid var(--red)" : "3px solid transparent",
            }}
            onMouseEnter={(e) => { if (!item.active) e.currentTarget.style.background = "var(--bg)"; }}
            onMouseLeave={(e) => { if (!item.active) e.currentTarget.style.background = "transparent"; }}
          >
            <span style={{ color: item.active ? "var(--red)" : "var(--text-secondary)", flexShrink: 0 }}>
              {navIcons[item.label] || "•"}
            </span>
            {!collapsed && <span>{item.label}</span>}
          </div>
        ))}
      </nav>

      {/* Collapse button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 16px",
          borderTop: "1px solid var(--border)",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--text-secondary)",
          fontSize: 13,
          fontFamily: "inherit",
          whiteSpace: "nowrap",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {collapsed
            ? <polyline points="9 18 15 12 9 6"/>
            : <polyline points="15 18 9 12 15 6"/>}
        </svg>
        {!collapsed && <span>Collapse menu</span>}
      </button>
    </aside>
  );
}
