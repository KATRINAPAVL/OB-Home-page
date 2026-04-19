"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight } from "lucide-react";
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
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (!open) onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  const filtered = query
    ? commandSuggestions.filter((s) =>
        s.text.toLowerCase().includes(query.toLowerCase())
      )
    : commandSuggestions;

  return (
    <div
      className="fade-in"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.65)",
        backdropFilter: "blur(6px)",
        zIndex: 100,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: 100,
      }}
    >
      <div
        className="slide-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--surface)",
          border: "1px solid rgba(79,142,247,0.35)",
          borderRadius: 18,
          width: "100%",
          maxWidth: 600,
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(79,142,247,0.1)",
          margin: "0 16px",
        }}
      >
        {/* Search input */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "16px 20px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <Search size={18} color="var(--accent)" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Try "Show Uber charges" or "Transfer to savings"…'
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              fontSize: 16,
              color: "var(--text-primary)",
              fontFamily: "inherit",
            }}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              style={{
                background: "var(--surface-3)",
                border: "none",
                borderRadius: 6,
                padding: "4px 8px",
                cursor: "pointer",
                color: "var(--text-secondary)",
                fontSize: 12,
              }}
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            style={{
              background: "var(--surface-3)",
              border: "none",
              borderRadius: 6,
              padding: "4px 8px",
              cursor: "pointer",
              color: "var(--text-secondary)",
              fontSize: 12,
              fontFamily: "monospace",
            }}
          >
            Esc
          </button>
        </div>

        {/* Suggestions */}
        <div style={{ padding: "8px 0", maxHeight: 320, overflowY: "auto" }}>
          {filtered.length === 0 ? (
            <div style={{ padding: "24px", textAlign: "center", color: "var(--text-muted)", fontSize: 14 }}>
              No results for "{query}"
            </div>
          ) : (
            filtered.map((s, i) => (
              <button
                key={i}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 20px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--text-primary)",
                  fontSize: 14,
                  textAlign: "left",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--surface-2)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <span style={{ fontSize: 18, width: 24, textAlign: "center" }}>{s.icon}</span>
                <span style={{ flex: 1 }}>{s.text}</span>
                <ArrowRight size={14} color="var(--text-muted)" />
              </button>
            ))
          )}
        </div>

        {/* Footer hint */}
        <div
          style={{
            padding: "10px 20px",
            borderTop: "1px solid var(--border)",
            display: "flex",
            gap: 16,
            fontSize: 11,
            color: "var(--text-muted)",
          }}
        >
          <span>↑↓ Navigate</span>
          <span>↵ Select</span>
          <span>Esc Close</span>
          <span style={{ marginLeft: "auto" }}>Powered by AI ✦</span>
        </div>
      </div>
    </div>
  );
}
