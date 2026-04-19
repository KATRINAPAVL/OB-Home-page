"use client";

import { useState } from "react";
import { Bell, Settings, Eye, EyeOff, Search } from "lucide-react";
import { mockUser } from "@/lib/data";

interface HeaderProps {
  privacyMode: boolean;
  onTogglePrivacy: () => void;
  onOpenCommand: () => void;
  notificationCount?: number;
}

export default function Header({ privacyMode, onTogglePrivacy, onOpenCommand, notificationCount = 3 }: HeaderProps) {
  return (
    <header
      style={{
        background: "rgba(10,15,30,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: 0,
        zIndex: 40,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginRight: 8 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 10,
              background: "linear-gradient(135deg, #4f8ef7, #a855f7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              fontWeight: 800,
              color: "#fff",
            }}
          >
            OB
          </div>
          <span style={{ fontWeight: 700, fontSize: 15, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
            OpenBank
          </span>
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.08em",
              padding: "2px 7px",
              borderRadius: 999,
              background: "rgba(79,142,247,0.15)",
              color: "var(--accent)",
              textTransform: "uppercase",
            }}
          >
            Private
          </span>
        </div>

        {/* Command Bar Trigger */}
        <button
          onClick={onOpenCommand}
          style={{
            flex: 1,
            maxWidth: 480,
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 14px",
            background: "var(--surface-2)",
            border: "1px solid var(--border)",
            borderRadius: 10,
            cursor: "pointer",
            color: "var(--text-muted)",
            fontSize: 14,
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(79,142,247,0.4)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
        >
          <Search size={15} />
          <span style={{ flex: 1, textAlign: "left" }}>Search transactions, features, actions…</span>
          <kbd
            style={{
              fontSize: 11,
              padding: "2px 6px",
              background: "var(--surface-3)",
              borderRadius: 5,
              color: "var(--text-muted)",
              fontFamily: "monospace",
            }}
          >
            ⌘K
          </kbd>
        </button>

        <div style={{ flex: 1 }} />

        {/* Privacy Toggle */}
        <button
          onClick={onTogglePrivacy}
          title={privacyMode ? "Show balances" : "Hide balances"}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "7px 12px",
            background: privacyMode ? "rgba(79,142,247,0.15)" : "var(--surface-2)",
            border: `1px solid ${privacyMode ? "rgba(79,142,247,0.4)" : "var(--border)"}`,
            borderRadius: 8,
            cursor: "pointer",
            color: privacyMode ? "var(--accent)" : "var(--text-secondary)",
            fontSize: 13,
            fontWeight: 500,
            transition: "all 0.2s",
          }}
        >
          {privacyMode ? <EyeOff size={15} /> : <Eye size={15} />}
          <span style={{ display: "none" }}>
            {privacyMode ? "Show" : "Hide"}
          </span>
        </button>

        {/* Notifications */}
        <button
          style={{
            position: "relative",
            width: 36,
            height: 36,
            background: "var(--surface-2)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "var(--text-secondary)",
          }}
        >
          <Bell size={16} />
          {notificationCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: 6,
                right: 6,
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--accent-red)",
                border: "2px solid var(--background)",
              }}
              className="pulse"
            />
          )}
        </button>

        {/* Avatar */}
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #4f8ef7, #22d3a3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 13,
            fontWeight: 700,
            color: "#fff",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          {mockUser.avatar}
        </div>
      </div>
    </header>
  );
}
