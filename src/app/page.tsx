"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import CommandBar from "@/components/CommandBar";
import HeroCard from "@/components/HeroCard";
import NudgeCard from "@/components/NudgeCard";
import UpcomingBillsCard from "@/components/UpcomingBillsCard";
import SavingsGoalsCard from "@/components/SavingsGoalsCard";
import SubscriptionCard from "@/components/SubscriptionCard";
import SecurityCard from "@/components/SecurityCard";
import FinancialHealthCard from "@/components/FinancialHealthCard";
import ESGCard from "@/components/ESGCard";
import TransactionsCard from "@/components/TransactionsCard";
import WealthCard from "@/components/WealthCard";
import { mockUser } from "@/lib/data";

export default function HomePage() {
  const [privacyMode, setPrivacyMode] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);

  // ⌘K global shortcut
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
    <>
      <Header
        privacyMode={privacyMode}
        onTogglePrivacy={() => setPrivacyMode((v) => !v)}
        onOpenCommand={() => setCommandOpen(true)}
        notificationCount={3}
      />

      <CommandBar open={commandOpen} onClose={() => setCommandOpen(false)} />

      <main
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "28px 24px 60px",
        }}
      >
        {/* Greeting */}
        <div style={{ marginBottom: 24 }}>
          <h1
            style={{
              fontSize: 26,
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
              marginBottom: 4,
            }}
          >
            Good morning, {mockUser.firstName} 👋
          </h1>
          <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>
            Here's your financial overview for today.
          </p>
        </div>

        {/* === BENTO GRID === */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: 16,
          }}
        >
          {/* Hero — full width */}
          <div style={{ gridColumn: "1 / -1" }}>
            <HeroCard privacyMode={privacyMode} />
          </div>

          {/* Row 2: Nudge (5) + Upcoming Bills (7) */}
          <div style={{ gridColumn: "span 5" }}>
            <NudgeCard />
          </div>
          <div style={{ gridColumn: "span 7" }}>
            <UpcomingBillsCard privacyMode={privacyMode} />
          </div>

          {/* Row 3: Savings Goals (7) + Subscriptions (5) */}
          <div style={{ gridColumn: "span 7" }}>
            <SavingsGoalsCard privacyMode={privacyMode} />
          </div>
          <div style={{ gridColumn: "span 5" }}>
            <SubscriptionCard privacyMode={privacyMode} />
          </div>

          {/* Row 4: Security (4) + Financial Health (4) + ESG (4) */}
          <div style={{ gridColumn: "span 4" }}>
            <SecurityCard />
          </div>
          <div style={{ gridColumn: "span 4" }}>
            <FinancialHealthCard />
          </div>
          <div style={{ gridColumn: "span 4" }}>
            <ESGCard />
          </div>

          {/* Row 5: Transactions (8) + Net Worth (4) */}
          <div style={{ gridColumn: "span 8" }}>
            <TransactionsCard privacyMode={privacyMode} />
          </div>
          <div style={{ gridColumn: "span 4" }}>
            <WealthCard privacyMode={privacyMode} />
          </div>
        </div>
      </main>

      {/* Privacy mode banner */}
      {privacyMode && (
        <div
          className="fade-in"
          style={{
            position: "fixed",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(79,142,247,0.15)",
            border: "1px solid rgba(79,142,247,0.4)",
            borderRadius: 999,
            padding: "8px 20px",
            fontSize: 13,
            color: "var(--accent)",
            fontWeight: 600,
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            zIndex: 30,
          }}
        >
          🔒 Privacy Mode active — all balances are hidden
        </div>
      )}
    </>
  );
}
