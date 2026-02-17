import { useState } from "react";
import { Bike, Star, UtensilsCrossed } from "lucide-react";

const cards = [
  {
    icon: Bike,
    iconProps: { size: 28, fill: "white", color: "white" },
    title: "PRIORITY DELIVERY",
    description:
      "Instant dispatch and zero fees. We prioritize your schedule above all else, ensuring your meal arrives exactly when desired.",
    badge: "GOLD EXCLUSIVE",
    badgeColor: "#eab308",
    highlight: false,
  },
  {
    icon: UtensilsCrossed,
    iconProps: { size: 28, color: "white" },
    title: "DAILY DABBA",
    description:
      "Masterfully tailored meal plans from verified home chefs. Balanced nutrition infused with home-cooked soul, delivered daily.",
    badge: "MOST POPULAR",
    badgeColor: "#facc15",
    highlight: false,
  },
  {
    icon: Star,
    iconProps: { size: 28, fill: "white", color: "white" },
    title: "ELITE ACCESS",
    description:
      "Access to restricted seasonal menus and premium chef collaborations. Flavors and ingredients reserved exclusively for the few.",
    badge: "LIMITED TIER",
    badgeColor: "#eab308",
    highlight: false,
  },
];

const SpinningBadge = () => {
  const text =
    "• foodbnb • foodbnb • foodbnb • foodbnb • foodbnb • foodbnb • foodbnb • foodbnb • foodbnb • foodbnb • ";

  return (
    <div className="flex items-center justify-center py-10 relative z-10">
      <style>{`
        @keyframes spin-badge {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-badge { animation: spin-badge 10s linear infinite; }

        /* ── Card transitions ── */
        .premium-card {
          transition:
            transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.35s ease,
            border-color 0.3s ease,
            background 0.3s ease,
            opacity 0.3s ease;
          cursor: pointer;
          will-change: transform;
        }
        .premium-card:hover {
          transform: translateY(-12px) scale(1.025);
        }

        /* Dim siblings */
        .cards-row:has(.premium-card:hover) .premium-card:not(:hover) {
          opacity: 0.45;
          transform: scale(0.97);
        }

        /* ── Icon circle ── */
        .icon-circle {
          transition:
            transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.35s ease,
            background 0.3s ease;
        }
        .premium-card:hover .icon-circle {
          transform: scale(1.22) rotate(-10deg);
          box-shadow:
            0 0 0 5px rgba(197,150,10,0.2),
            0 0 22px rgba(245,200,66,0.55),
            0 0 45px rgba(197,150,10,0.28);
        }

        /* ── Shimmer sweep ── */
        .card-shimmer {
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          pointer-events: none;
          opacity: 0;
          background: linear-gradient(
            115deg,
            transparent 25%,
            rgba(245,200,66,0.06) 45%,
            rgba(245,200,66,0.12) 50%,
            rgba(245,200,66,0.06) 55%,
            transparent 75%
          );
          background-size: 250% 100%;
          background-position: 200% 0;
          transition: opacity 0.15s ease;
        }
        .premium-card:hover .card-shimmer {
          opacity: 1;
          animation: shimmer-sweep 0.75s ease forwards;
        }
        @keyframes shimmer-sweep {
          from { background-position: 200% 0; }
          to   { background-position: -200% 0; }
        }

        /* ── Title brightens ── */
        .card-title {
          transition: color 0.25s ease;
        }
        .premium-card:hover .card-title {
          color: #f5c842 !important;
        }

        /* ── Description brightens slightly ── */
        .card-desc {
          transition: color 0.25s ease;
        }
        .premium-card:hover .card-desc {
          color: #aaa !important;
        }

        /* ── Badge expands letter-spacing ── */
        .card-badge {
          transition: letter-spacing 0.3s ease, opacity 0.25s ease;
        }
        .premium-card:hover .card-badge {
          letter-spacing: 0.3em;
          opacity: 1 !important;
        }

        /* ── Radial top glow (rendered via JS conditional but animated via CSS) ── */
        .card-top-glow {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: radial-gradient(ellipse at center, rgba(245,200,66,0.14) 0%, transparent 68%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .premium-card:hover .card-top-glow {
          opacity: 1;
        }
      `}</style>

      <div
        className="relative flex items-center justify-center"
        style={{
          width: "clamp(160px, 50vw, 220px)",
          height: "clamp(160px, 50vw, 220px)",
        }}>
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(197,150,10,0.15) 0%, transparent 70%)",
            boxShadow:
              "0 0 30px rgba(197,150,10,0.2), 0 0 60px rgba(197,150,10,0.08)",
          }}
        />
        <svg
          className="spin-badge absolute inset-0 w-full h-full"
          viewBox="0 0 220 220">
          <defs>
            <path
              id="circle-path"
              d="M 110,110 m -94,0 a 94,94 0 1,1 188,0 a 94,94 0 1,1 -188,0"
            />
          </defs>
          <text
            style={{
              fontSize: "9.5px",
              fontFamily: "sans-serif",
              fontWeight: 600,
              letterSpacing: "0.18em",
              fill: "#c9920a",
            }}>
            <textPath href="#circle-path" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
        <div
          className="flex items-center justify-center rounded-full"
          style={{
            width: "82%",
            height: "82%",
            background: "linear-gradient(135deg, #1e1e1e 0%, #111 100%)",
            border: "1px solid rgba(197,150,10,0.35)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.06), 0 0 20px rgba(0,0,0,0.8)",
            zIndex: 2,
          }}>
          <span
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontWeight: 700,
              fontSize: "clamp(14px, 3vw, 20px)",
              letterSpacing: "0.05em",
              background:
                "linear-gradient(135deg, #c9920a 0%, #f5c842 50%, #b8860b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              userSelect: "none",
            }}>
            foodbnb
          </span>
        </div>
      </div>
    </div>
  );
};

const PremiumCard = ({ card }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = card.icon;

  return (
    <div
      className="premium-card flex flex-col items-start p-8 rounded-2xl flex-1 relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? "linear-gradient(145deg, #2c2710 0%, #1e1c0c 100%)"
          : card.highlight
            ? "linear-gradient(145deg, #2a2a2a 0%, #222 100%)"
            : "linear-gradient(145deg, #1e1e1e 0%, #181818 100%)",
        border: hovered
          ? "1px solid rgba(245,200,66,0.65)"
          : card.highlight
            ? "1px solid rgba(197,150,10,0.5)"
            : "1px solid rgba(255,255,255,0.07)",
        boxShadow: hovered
          ? "0 24px 64px rgba(197,150,10,0.2), 0 0 0 1px rgba(245,200,66,0.08), inset 0 1px 0 rgba(255,255,255,0.08)"
          : card.highlight
            ? "0 0 40px rgba(197,150,10,0.08), inset 0 1px 0 rgba(255,255,255,0.05)"
            : "inset 0 1px 0 rgba(255,255,255,0.04)",
        minHeight: "auto",
      }}>
      {/* Shimmer sweep */}
      <div className="card-shimmer" />

      {/* Top radial glow — always mounted, shown via CSS opacity */}
      <div className="card-top-glow" />

      {/* Icon circle */}
      <div
        className="icon-circle flex items-center justify-center rounded-full mb-6"
        style={{
          width: 60,
          height: 60,
          background: hovered
            ? "linear-gradient(135deg, #f5c842, #c9920a)"
            : card.highlight
              ? "linear-gradient(135deg, #c9920a, #f5c842)"
              : "linear-gradient(135deg, #8B6914, #c9920a)",
          alignSelf: "center",
        }}>
        <Icon {...card.iconProps} />
      </div>

      {/* Title */}
      <h3
        className="card-title text-center w-full font-bold mb-3 tracking-wider text-white"
        style={{
          fontSize: "1.05rem",
          letterSpacing: "0.12em",
          fontFamily: "sans-serif",
        }}>
        {card.title}
      </h3>

      {/* Description */}
      <p
        className="card-desc text-center text-sm leading-relaxed flex-1"
        style={{ color: "#888", lineHeight: 1.7 }}>
        {card.description}
      </p>

      {/* Badge */}
      <p
        className="card-badge text-center w-full text-xs font-semibold mt-6"
        style={{
          letterSpacing: "0.2em",
          fontFamily: "sans-serif",
          color: card.badgeColor,
          opacity: 0.8,
        }}>
        {card.badge}
      </p>
    </div>
  );
};

export default function Premium() {
  return (
    <div
      className="relative w-full flex flex-col overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center top, #1a1a1a 0%, #0a0a0a 60%, #000000 100%)",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}>
      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Hero */}
      <div className="flex flex-col items-center justify-center pt-16 pb-10 px-4 relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="h-px w-10"
            style={{
              background: "linear-gradient(to right, transparent, #b8960c)",
            }}
          />
          <span
            className="text-xs tracking-widest font-light"
            style={{
              color: "#b8960c",
              letterSpacing: "0.3em",
              fontFamily: "sans-serif",
            }}>
            THE GOLD STANDARD
          </span>
          <div
            className="h-px w-10"
            style={{
              background: "linear-gradient(to left, transparent, #b8960c)",
            }}
          />
        </div>

        <p
          className="text-xl sm:text-2xl  font-light tracking-widest mb-2"
          style={{
            color: "#888",
            letterSpacing: "0.5em",
            fontFamily: "'Georgia', serif",
            fontWeight: 300,
          }}>
          PREMIUM
        </p>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl  font-bold text-center leading-none"
          style={{
            color: "#ffffff",
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontWeight: 700,
            lineHeight: 1.05,
          }}>
          foodbnb
        </h1>
        <h2
          className="font-black text-center leading-none"
          style={{
            background:
              "linear-gradient(135deg, #c9920a 0%, #f5c842 40%, #d4a017 70%, #b8860b 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontWeight: 900,
            lineHeight: 1,
            fontSize: "clamp(56px, 12vw, 140px)",
          }}>
          GOLD
        </h2>
        <p
          className="mt-6 text-center max-w-md text-base sm:text-lg italic"
          style={{ color: "#aaa", lineHeight: 1.6, fontStyle: "italic" }}>
          &ldquo;Elevated Home-Cooked Dining for those who appreciate
          <br className="hidden sm:block" />
          the finer things in life.&rdquo;
        </p>
      </div>

      <SpinningBadge />

      {/* Cards */}
      <div className="cards-row flex flex-col md:flex-row items-stretch justify-center gap-5 px-6 pb-10 relative z-10 max-w-5xl mx-auto w-full">
        {cards.map((card, i) => (
          <PremiumCard key={i} card={card} />
        ))}
      </div>

      {/* CTA */}
      <div
        className="relative z-10 w-full flex flex-col items-center justify-center py-14 px-4 flex-grow"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(197,150,10,0.04) 30%, rgba(197,150,10,0.08) 60%, rgba(150,110,0,0.06) 100%)",
          borderTop: "1px solid rgba(197,150,10,0.1)",
        }}>
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8"
          style={{ fontFamily: "'Georgia', serif", fontWeight: 700 }}>
          Begin Your Gold Journey
        </h2>
        <p
          className="text-xs tracking-widest text-center text-slate-400"
          style={{ letterSpacing: "0.2em", fontFamily: "sans-serif" }}>
          PRIORITY SUPPORT &bull; CANCEL ANYTIME &bull; EXCLUSIVE OFFERS
        </p>
      </div>
    </div>
  );
}
