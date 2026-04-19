"use client";

import { useState } from "react";

// Figma asset URLs (node 1:6347) — valid 7 days from extraction
const ASSETS = {
  // Photo card backgrounds
  mortgagePhoto:      "https://www.figma.com/api/mcp/asset/bac3b3c3-d8a3-4a6e-ad9b-f49233cbd7aa",
  cSmartPhoto:        "https://www.figma.com/api/mcp/asset/46631ad8-49e3-4c03-b4ae-242b56285cca",
  insurancePhoto:     "https://www.figma.com/api/mcp/asset/e74d9524-f7c5-4c57-b93f-c2f258e324f7",
  greenMortgagePhoto: "https://www.figma.com/api/mcp/asset/e0c5c68e-6558-4dd5-8835-b4c41a382ca4",
  // Pattern tiles for alert cards
  redPatternA:        "https://www.figma.com/api/mcp/asset/f68ab24f-bfbf-44e4-a134-7dc1aa0e54e7",
  redPatternB:        "https://www.figma.com/api/mcp/asset/d3ac2aeb-e5a0-4c8d-bec7-f3f5351f6cdc",
  orangePatternA:     "https://www.figma.com/api/mcp/asset/b13f1ade-de2e-4a66-b9c1-eeec63aae30f",
  orangePatternB:     "https://www.figma.com/api/mcp/asset/854c2d25-b65b-4431-9a59-42bc220989de",
  // Icons
  warningTriangle:    "https://www.figma.com/api/mcp/asset/05d908b1-8556-4470-b83d-669e20070698",
  warningCircle:      "https://www.figma.com/api/mcp/asset/1afad70e-3329-41ed-8b7b-005b64dc3623",
};

// Story card: 144 × 176px, border-radius 8px
const CARD_W = 144;
const CARD_H = 176;

type CardDef =
  | { type: "danger";  title: string }
  | { type: "warning"; title: string }
  | { type: "photo";   title: string; photo: string };

const CARDS: CardDef[] = [
  { type: "danger",  title: "Your ID document has expired" },
  { type: "warning", title: "Please, update your client's questionnaire" },
  { type: "warning", title: "Planned IT system upgrades" },
  { type: "photo",   title: "Mortgage loan offer for Latvian Families of Honour", photo: ASSETS.mortgagePhoto },
  { type: "photo",   title: "New! C smart NEON",           photo: ASSETS.cSmartPhoto },
  { type: "photo",   title: "Bill protection insurance",    photo: ASSETS.insurancePhoto },
  { type: "photo",   title: "Green mortgage loan",          photo: ASSETS.greenMortgagePhoto },
];

const VISIBLE = 4;

/* ---------- sub-components ---------- */

function DangerCard({ title }: { title: string }) {
  return (
    <div style={{
      position: "relative", width: CARD_W, height: CARD_H,
      borderRadius: 8, overflow: "hidden", flexShrink: 0, cursor: "pointer",
    }}>
      {/* Base + red tint */}
      <div style={{ position: "absolute", inset: 0, background: "#fff" }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(222,55,88,0.10)" }} />

      {/* Pattern tiles — right half, 64% opacity */}
      <div style={{
        position: "absolute", top: 0, bottom: 0, right: 0, width: 80,
        borderRadius: 8, overflow: "hidden", opacity: 0.64,
      }}>
        <img src={ASSETS.redPatternA} alt="" style={{ position: "absolute", top: 0, right: 0, width: 40, height: 40 }} />
        <img src={ASSETS.redPatternA} alt="" style={{ position: "absolute", top: 40, right: 40, width: 40, height: 40 }} />
        <img src={ASSETS.redPatternA} alt="" style={{ position: "absolute", top: 80, right: 0, width: 40, height: 40 }} />
        <img src={ASSETS.redPatternA} alt="" style={{ position: "absolute", top: 80, right: 40, width: 40, height: 40 }} />
        <img src={ASSETS.redPatternB} alt="" style={{ position: "absolute", bottom: 0, right: 0, width: 40, height: 40 }} />
      </div>

      {/* Icon top-left */}
      <div style={{ position: "absolute", top: 12, left: 12 }}>
        <img src={ASSETS.warningTriangle} alt="warning" style={{ width: 32, height: 32 }} />
      </div>

      {/* Title bottom-left */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: 12,
      }}>
        <p style={{
          fontSize: 14, fontWeight: 500, lineHeight: "24px",
          color: "#15171c", margin: 0,
          display: "-webkit-box", WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>{title}</p>
      </div>
    </div>
  );
}

function WarningCard({ title }: { title: string }) {
  return (
    <div style={{
      position: "relative", width: CARD_W, height: CARD_H,
      borderRadius: 8, overflow: "hidden", flexShrink: 0, cursor: "pointer",
    }}>
      {/* Base + orange tint */}
      <div style={{ position: "absolute", inset: 0, background: "#fff" }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(250,159,66,0.10)" }} />

      {/* Pattern tiles — right half, 10% opacity */}
      <div style={{
        position: "absolute", top: 0, bottom: 0, right: 0, width: 80,
        borderRadius: 8, overflow: "hidden", opacity: 0.10,
      }}>
        <img src={ASSETS.orangePatternA} alt="" style={{ position: "absolute", top: 0, right: 0, width: 40, height: 40 }} />
        <img src={ASSETS.orangePatternA} alt="" style={{ position: "absolute", top: 40, right: 40, width: 40, height: 40 }} />
        <img src={ASSETS.orangePatternA} alt="" style={{ position: "absolute", top: 80, right: 0, width: 40, height: 40 }} />
        <img src={ASSETS.orangePatternA} alt="" style={{ position: "absolute", top: 80, right: 40, width: 40, height: 40 }} />
        <img src={ASSETS.orangePatternB} alt="" style={{ position: "absolute", bottom: 0, right: 0, width: 40, height: 40 }} />
      </div>

      {/* Icon top-left */}
      <div style={{ position: "absolute", top: 12, left: 12 }}>
        <img src={ASSETS.warningCircle} alt="warning" style={{ width: 32, height: 32 }} />
      </div>

      {/* Title bottom */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 12 }}>
        <p style={{
          fontSize: 14, fontWeight: 500, lineHeight: "24px",
          color: "#15171c", margin: 0,
          display: "-webkit-box", WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>{title}</p>
      </div>
    </div>
  );
}

function PhotoCard({ title, photo }: { title: string; photo: string }) {
  return (
    <div style={{
      position: "relative", width: CARD_W, height: CARD_H,
      borderRadius: 8, overflow: "hidden", flexShrink: 0, cursor: "pointer",
    }}>
      {/* Base white */}
      <div style={{ position: "absolute", inset: 0, background: "#fff" }} />

      {/* Photo */}
      <img
        src={photo} alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />

      {/* Dark gradient overlay bottom — mix-blend-darken, 64% opacity */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.72) 100%)",
        mixBlendMode: "darken",
        opacity: 0.64,
      }} />

      {/* Title bottom */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: 12,
      }}>
        <p style={{
          fontSize: 14, fontWeight: 500, lineHeight: "24px",
          color: "#fff", margin: 0,
          display: "-webkit-box", WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>{title}</p>
      </div>
    </div>
  );
}

/* ---------- NavArrow ---------- */
function NavArrow({ dir, disabled, onClick }: { dir: "prev" | "next"; disabled: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: 24, height: 24,
        background: "transparent",
        border: "none",
        borderRadius: 4,
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.35 : 1,
        padding: 0,
        color: "var(--text-secondary)",
        transition: "opacity 0.15s",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        {dir === "prev"
          ? <polyline points="15 18 9 12 15 6" />
          : <polyline points="9 18 15 12 9 6" />}
      </svg>
    </button>
  );
}

/* ---------- Main carousel ---------- */
export default function HighlightsCarousel() {
  const [start, setStart] = useState(0);
  const canPrev = start > 0;
  const canNext = start + VISIBLE < CARDS.length;

  return (
    <div style={{
      background: "var(--white)",
      border: "1px solid var(--border)",
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
    }}>
      {/* Header row */}
      <div style={{
        display: "flex", alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16,
      }}>
        <span style={{ fontSize: 18, fontWeight: 500, color: "var(--text-primary)" }}>
          Highlights
        </span>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <NavArrow dir="prev" disabled={!canPrev} onClick={() => setStart(s => Math.max(0, s - 1))} />
          <NavArrow dir="next" disabled={!canNext} onClick={() => setStart(s => Math.min(CARDS.length - VISIBLE, s + 1))} />
        </div>
      </div>

      {/* Cards row */}
      <div style={{
        display: "flex",
        gap: 8,
        overflow: "hidden",
      }}>
        {CARDS.slice(start, start + VISIBLE).map((card, i) => {
          if (card.type === "danger")  return <DangerCard  key={i} title={card.title} />;
          if (card.type === "warning") return <WarningCard key={i} title={card.title} />;
          return <PhotoCard key={i} title={card.title} photo={card.photo} />;
        })}
      </div>
    </div>
  );
}
