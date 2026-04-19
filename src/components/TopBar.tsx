"use client";

import { Eye, EyeOff, Search } from "lucide-react";
import { mockUser, mockLastLogin } from "@/lib/data";

interface TopBarProps {
  privacyMode: boolean;
  onTogglePrivacy: () => void;
  onOpenCommand: () => void;
}

export default function TopBar({ privacyMode, onTogglePrivacy, onOpenCommand }: TopBarProps) {
  return (
    <header
      style={{
        height: "var(--header-height)",
        background: "var(--white)",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        gap: 16,
        position: "sticky",
        top: 0,
        zIndex: 40,
      }}
    >
      {/* User selector */}
      <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            cursor: "pointer",
            color: "var(--text-primary)",
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
          {mockUser.name}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
        <div style={{ fontSize: 11, color: "var(--text-muted)", paddingLeft: 22, display: "flex", alignItems: "center", gap: 4 }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          Last login: {mockLastLogin}
        </div>
      </div>

      {/* Search / Command bar trigger */}
      <button
        onClick={onOpenCommand}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "6px 12px",
          background: "var(--bg)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
          cursor: "pointer",
          color: "var(--text-muted)",
          fontSize: 13,
          fontFamily: "inherit",
          transition: "border-color 0.15s",
          flex: 1,
          maxWidth: 400,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--red)")}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
      >
        <Search size={13} />
        <span>Search transactions, features…</span>
        <span style={{ marginLeft: "auto", fontSize: 11, fontFamily: "monospace", opacity: 0.6 }}>⌘K</span>
      </button>

      <div style={{ flex: 1 }} />

      {/* Right actions */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <button
          onClick={onTogglePrivacy}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            background: "none",
            border: "none",
            cursor: "pointer",
            color: privacyMode ? "var(--red)" : "var(--text-secondary)",
            fontSize: 13,
            fontFamily: "inherit",
            fontWeight: privacyMode ? 500 : 400,
            padding: 0,
          }}
          title={privacyMode ? "Show balances" : "Hide balances"}
        >
          {privacyMode ? <EyeOff size={15} /> : <Eye size={15} />}
          <span style={{ display: "none" }}>{privacyMode ? "Show" : "Hide"}</span>
        </button>

        {[
          { label: "Contact us", icon: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
          )},
          { label: "Accessibility", icon: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          )},
          { label: "English", icon: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
            </svg>
          )},
        ].map(({ label, icon }) => (
          <button
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-secondary)",
              fontSize: 13,
              fontFamily: "inherit",
              padding: 0,
            }}
          >
            {icon}
            {label}
          </button>
        ))}

        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-secondary)",
            fontSize: 13,
            fontFamily: "inherit",
            padding: 0,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Log out
        </button>
      </div>
    </header>
  );
}
