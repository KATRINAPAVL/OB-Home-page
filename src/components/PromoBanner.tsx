"use client";

import { useState } from "react";

export default function PromoBanner() {
  const [closed, setClosed] = useState(false);
  if (closed) return null;

  return (
    <div style={{
      background: "var(--banner-dark)",
      borderRadius: "var(--radius)",
      padding: "24px 28px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      marginTop: 16,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative shapes */}
      <div style={{ position: "absolute", right: 160, top: -20, width: 80, height: 80, borderRadius: "50%", border: "20px solid rgba(227,0,44,0.3)" }}/>
      <div style={{ position: "absolute", right: 120, bottom: -30, width: 100, height: 100, borderRadius: "50%", border: "20px solid rgba(227,0,44,0.15)" }}/>

      <div style={{ position: "relative", zIndex: 1 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 6, textTransform: "uppercase", letterSpacing: "-0.01em" }}>
          Exclusive Private<br />Banking Offer
        </h2>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginBottom: 14 }}>
          Get personalised investment advice — free for Private clients.
        </p>
        <div style={{ display: "flex", gap: 10 }}>
          <button className="btn-primary">Apply now</button>
          <button className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
            Learn more
          </button>
        </div>
      </div>

      <button
        onClick={() => setClosed(true)}
        style={{
          position: "absolute", top: 12, right: 12,
          width: 24, height: 24,
          background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%",
          cursor: "pointer", color: "#fff", fontSize: 14,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        ✕
      </button>
    </div>
  );
}
