"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import CommandBar from "@/components/CommandBar";
import QuickActions from "@/components/QuickActions";
import HighlightsCarousel from "@/components/HighlightsCarousel";
import AccountsSection from "@/components/AccountsSection";
import SmartInsightsSection from "@/components/SmartInsightsSection";
import ConsumerLoanSection from "@/components/ConsumerLoanSection";
import RightColumn from "@/components/RightColumn";
import PromoBanner from "@/components/PromoBanner";
import { mockUser, mockDate } from "@/lib/data";

export default function HomePage() {
  const [privacyMode, setPrivacyMode] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--bg)" }}>
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Sticky top bar */}
        <TopBar
          privacyMode={privacyMode}
          onTogglePrivacy={() => setPrivacyMode((v) => !v)}
          onOpenCommand={() => setCommandOpen(true)}
        />

        {/* Page content */}
        <main style={{ flex: 1, padding: "20px 24px 40px", maxWidth: 1200 }}>

          {/* Greeting */}
          <div style={{ marginBottom: 16 }}>
            <h1 style={{ fontSize: 22, fontWeight: 500, color: "var(--text-primary)", marginBottom: 2 }}>
              Greetings, {mockUser.name}
            </h1>
            <p style={{ fontSize: 13, color: "var(--text-secondary)" }}>
              Date and time at the Bank: {mockDate}
            </p>
          </div>

          {/* Quick actions */}
          <QuickActions />

          {/* Highlights */}
          <HighlightsCarousel />

          {/* Smart Insights (2026 addition, styled as Citadele section) */}
          <SmartInsightsSection />

          {/* Two-column layout */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
            gap: 14,
            alignItems: "start",
          }}>
            {/* Left column */}
            <div>
              <AccountsSection privacyMode={privacyMode} />
              <ConsumerLoanSection privacyMode={privacyMode} />
            </div>

            {/* Right column */}
            <RightColumn privacyMode={privacyMode} />
          </div>

          {/* Promo banner */}
          <PromoBanner />
        </main>

        {/* Footer */}
        <footer style={{
          borderTop: "1px solid var(--border)",
          background: "var(--white)",
          padding: "14px 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
        }}>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
            {["Price list", "Help", "Site map", "Currency converter", "Exchange rates"].map((link) => (
              <span key={link} className="link-red" style={{ fontSize: 13 }}>{link}</span>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
            © Akciju sabiedrība "Citadele banka"
          </p>
        </footer>
      </div>

      {/* Command bar */}
      <CommandBar open={commandOpen} onClose={() => setCommandOpen(false)} />

      {/* Privacy mode toast */}
      {privacyMode && (
        <div
          className="fade-in"
          style={{
            position: "fixed", bottom: 20, left: "50%", transform: "translateX(-50%)",
            background: "var(--banner-dark)", border: "1px solid rgba(227,0,44,0.3)",
            borderRadius: 999, padding: "8px 20px",
            fontSize: 13, color: "#fff", fontWeight: 500,
            display: "flex", alignItems: "center", gap: 8, zIndex: 30,
            boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
          }}
        >
          🔒 Privacy Mode active — all balances are hidden
        </div>
      )}
    </div>
  );
}
