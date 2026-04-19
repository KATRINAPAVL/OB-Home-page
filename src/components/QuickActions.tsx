export default function QuickActions() {
  return (
    <div
      style={{
        background: "var(--white)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        display: "flex",
        overflow: "hidden",
        marginBottom: 16,
      }}
    >
      {[
        { label: "New payment", icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>
          </svg>
        )},
        { label: "Order a new card", icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
          </svg>
        )},
      ].map(({ label, icon }, idx) => (
        <button
          key={label}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            padding: "16px 20px",
            background: "none",
            border: "none",
            borderLeft: idx > 0 ? "1px solid var(--border)" : "none",
            cursor: "pointer",
            color: "var(--text-primary)",
            fontSize: 14,
            fontWeight: 500,
            fontFamily: "inherit",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <span style={{ color: "var(--red)" }}>{icon}</span>
          {label}
        </button>
      ))}
    </div>
  );
}
