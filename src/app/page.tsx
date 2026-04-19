"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import CommandBar from "@/components/CommandBar";
import QuickActions from "@/components/QuickActions";
import HighlightsCarousel from "@/components/HighlightsCarousel";
import SmartInsightsSection from "@/components/SmartInsightsSection";
import AccountsSection from "@/components/AccountsSection";
import ConsumerLoanSection from "@/components/ConsumerLoanSection";
import TransactionsCard from "@/components/TransactionsCard";
import UpcomingBillsCard from "@/components/UpcomingBillsCard";
import SavingsGoalsCard from "@/components/SavingsGoalsCard";
import SubscriptionsCard from "@/components/SubscriptionsCard";
import FinancialHealthCard from "@/components/FinancialHealthCard";
import SecurityCard from "@/components/SecurityCard";
import NetWorthCard from "@/components/NetWorthCard";
import PromoBanner from "@/components/PromoBanner";
import BalanceCard from "@/components/BalanceCard";
import CRewardsCard from "@/components/CRewardsCard";
import { mockUser, mockDate } from "@/lib/data";

export default function HomePage() {
  const [privacyMode, setPrivacyMode] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandOpen(v => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--bg)" }}>
      <Sidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <TopBar
          privacyMode={privacyMode}
          onTogglePrivacy={() => setPrivacyMode(v => !v)}
          onOpenCommand={() => setCommandOpen(true)}
        />

        <main style={{ flex: 1, padding: "20px 24px 40px" }}>

          {/* Greeting */}
          <div style={{ marginBottom: 16 }}>
            <h1 style={{ fontSize: 22, fontWeight: 500, color: "var(--text-primary)", marginBottom: 2 }}>
              Greetings, {mockUser.name}
            </h1>
            <p style={{ fontSize: 13, color: "var(--text-secondary)" }}>
              Date and time at the Bank: {mockDate}
            </p>
          </div>

          {/* ── BENTO GRID ─────────────────────────────────────────── */}
          <div className="bento-grid">

            {/* Row 1 — Quick actions: full width */}
            <div className="col-12">
              <QuickActions />
            </div>

            {/* Row 2 — Highlights: full width */}
            <div className="col-12">
              <HighlightsCarousel />
            </div>

            {/* Row 3 — Balance: full width (resolve "check balance" intent in <3s) */}
            <div className="col-12">
              <BalanceCard privacyMode={privacyMode} />
            </div>

            {/* Row 4 — Smart Insights (wide) + Upcoming Bills (narrow) */}
            <div className="col-8">
              <SmartInsightsSection />
            </div>
            <div className="col-4">
              <UpcomingBillsCard privacyMode={privacyMode} />
            </div>

            {/* Row 5 — Accounts (wide) + Savings Goals (narrow) */}
            <div className="col-8">
              <AccountsSection privacyMode={privacyMode} />
            </div>
            <div className="col-4">
              <SavingsGoalsCard privacyMode={privacyMode} />
            </div>

            {/* Row 5 — Transactions (wide) + Subscriptions (narrow) */}
            <div className="col-8">
              <TransactionsCard privacyMode={privacyMode} />
            </div>
            <div className="col-4">
              <SubscriptionsCard privacyMode={privacyMode} />
            </div>

            {/* Row 6 — Lending (5) + Financial Health (4) + Security (3) */}
            <div className="col-5">
              <ConsumerLoanSection privacyMode={privacyMode} />
            </div>
            <div className="col-4">
              <FinancialHealthCard />
            </div>
            <div className="col-3">
              <SecurityCard />
            </div>

            {/* Row 7 — Net Worth (4) + C REWARDS (4) + Promo (4) */}
            <div className="col-4">
              <NetWorthCard privacyMode={privacyMode} />
            </div>
            <div className="col-4">
              <CRewardsCard />
            </div>
            <div className="col-4">
              <PromoBanner />
            </div>

          </div>
          {/* ── END BENTO GRID ─────────────────────────────────────── */}

        </main>

        <footer style={{
          borderTop: "1px solid var(--border)",
          background: "var(--white)",
          padding: "14px 24px",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        }}>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
            {["Price list", "Help", "Site map", "Currency converter", "Exchange rates"].map(link => (
              <span key={link} className="link-red" style={{ fontSize: 13 }}>{link}</span>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "var(--text-muted)" }}>© Akciju sabiedrība "Citadele banka"</p>
        </footer>
      </div>

      <CommandBar open={commandOpen} onClose={() => setCommandOpen(false)} />

      {privacyMode && (
        <div className="fade-in" style={{
          position: "fixed", bottom: 20, left: "50%", transform: "translateX(-50%)",
          background: "var(--banner-dark)", border: "1px solid rgba(227,0,44,0.3)",
          borderRadius: 999, padding: "8px 20px",
          fontSize: 13, color: "#fff", fontWeight: 500,
          display: "flex", alignItems: "center", gap: 8, zIndex: 30,
          boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
        }}>
          🔒 Privacy Mode active — all balances are hidden
        </div>
      )}
    </div>
  );
}
