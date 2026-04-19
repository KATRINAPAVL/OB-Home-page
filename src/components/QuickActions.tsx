"use client";

import { useState } from "react";

interface Action {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const ALL_ACTIONS: Action[] = [
  {
    id: "payment",
    label: "New payment",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="13" fill="#e3002c" opacity="0.1"/>
        <path d="M13 8v10M9 12l4-4 4 4" stroke="#e3002c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "search-tx",
    label: "Search Transaction",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="13" fill="#e3002c" opacity="0.1"/>
        <circle cx="11.5" cy="11.5" r="4" stroke="#e3002c" strokeWidth="2"/>
        <path d="M14.5 14.5l3 3" stroke="#e3002c" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "accounts",
    label: "Accounts & cards",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="13" fill="#e3002c" opacity="0.1"/>
        <rect x="7" y="9" width="12" height="8" rx="1.5" stroke="#e3002c" strokeWidth="2"/>
        <path d="M7 12h12" stroke="#e3002c" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: "payments-list",
    label: "Payments",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="13" fill="#e3002c" opacity="0.1"/>
        <path d="M8 10h10M8 13h8M8 16h6" stroke="#e3002c" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "loans",
    label: "Loans",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="13" fill="#e3002c" opacity="0.1"/>
        <path d="M9 17V12a4 4 0 018 0v5" stroke="#e3002c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 17h12" stroke="#e3002c" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "savings",
    label: "My savings",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="13" fill="#e3002c" opacity="0.1"/>
        <path d="M8 16c0-2.5 2-4.5 5-4.5s5 2 5 4.5" stroke="#e3002c" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="13" cy="9.5" r="1.5" fill="#e3002c"/>
      </svg>
    ),
  },
  {
    id: "investments",
    label: "Investments",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="13" fill="#e3002c" opacity="0.1"/>
        <polyline points="7,16 10,12 13,14 17,9" stroke="#e3002c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="15,9 17,9 17,11" stroke="#e3002c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "insurance",
    label: "Insurance",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="13" fill="#e3002c" opacity="0.1"/>
        <path d="M13 8l5 2.5v4c0 2.5-2.2 4.5-5 5-2.8-.5-5-2.5-5-5v-4L13 8z" stroke="#e3002c" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "pension",
    label: "Pension",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="13" fill="#e3002c" opacity="0.1"/>
        <rect x="8" y="14" width="10" height="4" rx="1" stroke="#e3002c" strokeWidth="2"/>
        <path d="M10 14V11a3 3 0 016 0v3" stroke="#e3002c" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "order-card",
    label: "Order new card",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="13" fill="#e3002c" opacity="0.1"/>
        <rect x="7" y="10" width="12" height="7" rx="1" stroke="#e3002c" strokeWidth="2"/>
        <path d="M10 13h2M15 13h1" stroke="#e3002c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M13 8v-2M15 7l-2 1-2-1" stroke="#e3002c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "currency",
    label: "Currency exchange",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="13" fill="#e3002c" opacity="0.1"/>
        <path d="M8 11l3-3 3 3M11 8v5M18 15l-3 3-3-3M15 18v-5" stroke="#e3002c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "leasings",
    label: "Leasings",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="13" fill="#e3002c" opacity="0.1"/>
        <rect x="6" y="11" width="14" height="6" rx="1" stroke="#e3002c" strokeWidth="2"/>
        <circle cx="9" cy="17" r="1.5" fill="#e3002c"/>
        <circle cx="17" cy="17" r="1.5" fill="#e3002c"/>
        <path d="M6 13h14" stroke="#e3002c" strokeWidth="1.5"/>
        <path d="M9 11V9h5l3 2" stroke="#e3002c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const DEFAULT_ACTION_IDS = ["payment", "search-tx", "accounts", "payments-list", "loans", "savings", "investments", "order-card"];

export default function QuickActions() {
  const [activeIds, setActiveIds] = useState<string[]>(DEFAULT_ACTION_IDS);
  const [showPicker, setShowPicker] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const activeActions = ALL_ACTIONS.filter(a => activeIds.includes(a.id));
  const ITEM_W = 88;
  const VISIBLE_W = typeof window !== "undefined" ? window.innerWidth - 400 : 900;
  const maxScroll = Math.max(0, activeActions.length * ITEM_W - VISIBLE_W + 120);

  const scroll = (dir: "left" | "right") => {
    setScrollPos(p => {
      const next = dir === "right" ? p + ITEM_W * 3 : p - ITEM_W * 3;
      return Math.max(0, Math.min(next, maxScroll));
    });
  };

  const toggleAction = (id: string) => {
    setActiveIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <>
      <div className="section-card" style={{ overflow: "visible", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            style={{
              flexShrink: 0, width: 32, height: "100%", minHeight: 108,
              background: scrollPos > 0 ? "var(--white)" : "transparent",
              border: "none", borderRight: scrollPos > 0 ? "1px solid var(--border-light)" : "none",
              cursor: scrollPos > 0 ? "pointer" : "default",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: scrollPos > 0 ? "var(--text-secondary)" : "transparent",
              borderRadius: "var(--radius) 0 0 var(--radius)",
              transition: "all 0.15s",
            }}
            aria-label="Scroll left"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Scrollable actions */}
          <div style={{ flex: 1, overflow: "hidden" }}>
            <div style={{
              display: "flex",
              transform: `translateX(-${scrollPos}px)`,
              transition: "transform 0.25s ease",
              padding: "14px 8px",
              gap: 4,
            }}>
              {activeActions.map(action => (
                <ActionItem key={action.id} action={action} />
              ))}
              {/* Add/Customize button */}
              <button
                onClick={() => setShowPicker(true)}
                style={{
                  flexShrink: 0, width: 80, minWidth: 80,
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  gap: 8, padding: "10px 4px",
                  background: "none", border: "1.5px dashed var(--border)",
                  borderRadius: 8, cursor: "pointer", color: "var(--text-muted)",
                  transition: "all 0.15s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "var(--red)";
                  e.currentTarget.style.color = "var(--red)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text-muted)";
                }}
                aria-label="Customize quick actions"
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M11 7v8M7 11h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span style={{ fontSize: 10, fontWeight: 500, textAlign: "center", lineHeight: 1.2 }}>Customize</span>
              </button>
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            style={{
              flexShrink: 0, width: 32, height: "100%", minHeight: 108,
              background: "var(--white)",
              border: "none", borderLeft: "1px solid var(--border-light)",
              cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--text-secondary)",
              borderRadius: "0 var(--radius) var(--radius) 0",
              transition: "all 0.15s",
            }}
            aria-label="Scroll right"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Picker modal */}
      {showPicker && (
        <ActionPicker
          allActions={ALL_ACTIONS}
          activeIds={activeIds}
          onToggle={toggleAction}
          onClose={() => setShowPicker(false)}
        />
      )}
    </>
  );
}

function ActionItem({ action }: { action: Action }) {
  return (
    <button
      style={{
        flexShrink: 0, width: 80, minWidth: 80,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start",
        gap: 8, padding: "10px 4px",
        background: "none", border: "none",
        borderRadius: 8, cursor: "pointer",
        transition: "background 0.15s",
        textAlign: "center",
      }}
      onMouseEnter={e => (e.currentTarget.style.background = "var(--bg)")}
      onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
    >
      <div style={{
        width: 48, height: 48, borderRadius: "50%",
        background: "rgba(227,0,44,0.07)",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        {action.icon}
      </div>
      <span style={{ fontSize: 11, fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.3 }}>
        {action.label}
      </span>
    </button>
  );
}

function ActionPicker({ allActions, activeIds, onToggle, onClose }: {
  allActions: Action[];
  activeIds: string[];
  onToggle: (id: string) => void;
  onClose: () => void;
}) {
  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 50,
        background: "rgba(21,23,28,0.4)", backdropFilter: "blur(2px)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="slide-in" style={{
        background: "var(--white)",
        borderRadius: 8, width: 440, maxWidth: "calc(100vw - 32px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        overflow: "hidden",
      }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "16px 20px", borderBottom: "1px solid var(--border)",
        }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 500, color: "var(--text-primary)" }}>Customize quick actions</div>
            <div style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }}>Select the shortcuts you want on your home page</div>
          </div>
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", padding: 4 }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div style={{ padding: "16px 20px", display: "flex", flexWrap: "wrap", gap: 8 }}>
          {allActions.map(action => {
            const isActive = activeIds.includes(action.id);
            return (
              <button
                key={action.id}
                onClick={() => onToggle(action.id)}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "8px 12px",
                  background: isActive ? "rgba(227,0,44,0.06)" : "var(--bg)",
                  border: isActive ? "1.5px solid var(--red)" : "1.5px solid var(--border)",
                  borderRadius: 6, cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {action.icon}
                </div>
                <span style={{ fontSize: 13, fontWeight: 500, color: isActive ? "var(--red)" : "var(--text-primary)", whiteSpace: "nowrap" }}>
                  {action.label}
                </span>
                {isActive && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l3.5 3.5L12 4" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            );
          })}
        </div>

        <div style={{ padding: "12px 20px", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "flex-end" }}>
          <button className="btn-primary" onClick={onClose} style={{ padding: "8px 24px" }}>Done</button>
        </div>
      </div>
    </div>
  );
}
