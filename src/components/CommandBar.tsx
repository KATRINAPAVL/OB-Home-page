"use client";

import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { commandSuggestions } from "@/lib/data";

interface CommandBarProps {
  open: boolean;
  onClose: () => void;
}

export default function CommandBar({ open, onClose }: CommandBarProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!open) return null;

  const filtered = query
    ? commandSuggestions.filter((s) => s.text.toLowerCase().includes(query.toLowerCase()))
    : commandSuggestions;

  return (
    <div
      className="fade-in"
      onClick={onClose}
      style={{
        position: "fixed", inset: 0,
        background: "rgba(21,23,28,0.45)",
        backdropFilter: "blur(3px)",
        zIndex: 100,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: 80,
      }}
    >
      <div
        className="slide-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--white)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-md)",
          width: "100%",
          maxWidth: 560,
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(21,23,28,0.15)",
          margin: "0 16px",
        }}
      >
        {/* Input */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 16px", borderBottom: "1px solid var(--border)" }}>
          <Search size={16} color="var(--red)" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search transactions, features, actions…'
            style={{
              flex: 1, background: "transparent", border: "none", outline: "none",
              fontSize: 15, color: "var(--text-primary)", fontFamily: "inherit",
            }}
          />
          <button
            onClick={onClose}
            style={{
              background: "var(--bg)", border: "1px solid var(--border)",
              borderRadius: "var(--radius)", padding: "3px 8px",
              cursor: "pointer", color: "var(--text-secondary)", fontSize: 11, fontFamily: "monospace",
            }}
          >
            Esc
          </button>
        </div>

        {/* Results */}
        <div style={{ maxHeight: 300, overflowY: "auto" }}>
          {filtered.length === 0 ? (
            <div style={{ padding: 20, textAlign: "center", color: "var(--text-muted)", fontSize: 13 }}>
              No results for "{query}"
            </div>
          ) : (
            filtered.map((s, i) => (
              <div
                key={i}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "11px 16px",
                  cursor: "pointer", fontSize: 14, color: "var(--text-primary)",
                  transition: "background 0.1s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <span style={{ fontSize: 17, width: 22, textAlign: "center" }}>{s.icon}</span>
                <span>{s.text}</span>
                <svg style={{ marginLeft: "auto" }} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </div>
            ))
          )}
        </div>

        <div style={{ padding: "8px 16px", borderTop: "1px solid var(--border)", display: "flex", gap: 16, fontSize: 11, color: "var(--text-muted)" }}>
          <span>↑↓ Navigate</span><span>↵ Select</span><span>Esc Close</span>
          <span style={{ marginLeft: "auto" }}>AI-powered search</span>
        </div>
      </div>
    </div>
  );
}
