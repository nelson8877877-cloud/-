import React from 'react';
import { OracleCard } from '../types/oracle';

interface CardVisualProps {
  card?: OracleCard;
  isFlipped?: boolean;
  isSelectable?: boolean;
  isSelected?: boolean;
  positionLabel?: string;
  positionSublabel?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

// Procedural and bespoke vector emblem renderer for all 52 fantasy cards
function renderCardEmblem(card: OracleCard) {
  const { id, element, themeColor, number } = card;

  // Specific bespoke designs for key signature archetypes
  switch (id) {
    case 'world-tree':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke={themeColor} strokeWidth="2">
          <circle cx="50" cy="50" r="45" strokeOpacity="0.3" strokeDasharray="3 3" />
          <path d="M50 85 V 45" strokeWidth="4" strokeLinecap="round" />
          <path d="M50 55 C 40 45, 30 40, 25 30" strokeWidth="2.5" />
          <path d="M50 50 C 60 42, 70 38, 75 28" strokeWidth="2.5" />
          <path d="M50 42 C 45 35, 35 25, 40 18" strokeWidth="2" />
          <path d="M50 40 C 55 32, 65 24, 60 16" strokeWidth="2" />
          <circle cx="50" cy="18" r="3" fill={themeColor} />
          <circle cx="25" cy="30" r="2.5" fill={themeColor} />
          <circle cx="75" cy="28" r="2.5" fill={themeColor} />
        </svg>
      );
    case 'dawn-blade':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke={themeColor} strokeWidth="2">
          <circle cx="50" cy="50" r="44" strokeOpacity="0.3" strokeDasharray="4 2" />
          <line x1="50" y1="12" x2="50" y2="76" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="32" y1="68" x2="68" y2="68" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="84" r="4" fill={themeColor} />
          <path d="M44 26 L 50 12 L 56 26" fill={themeColor} />
        </svg>
      );
    case 'abyss-dragon':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke={themeColor} strokeWidth="2">
          <circle cx="50" cy="50" r="44" strokeOpacity="0.25" />
          <path d="M25 75 Q 35 40, 50 35 Q 65 30, 75 45 Q 85 60, 65 75 Q 45 85, 30 80" strokeWidth="2.5" />
          <path d="M50 35 L 60 18 L 65 28 L 75 18 L 72 32" strokeLinejoin="round" />
          <polygon points="52,42 58,45 54,48" fill={themeColor} />
        </svg>
      );
    case 'solar-phoenix':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke={themeColor} strokeWidth="2">
          <circle cx="50" cy="50" r="44" strokeOpacity="0.3" />
          <path d="M50 20 Q 42 38, 48 50 Q 50 65, 50 82" strokeWidth="2.5" />
          <path d="M50 50 Q 30 38, 15 45 Q 28 60, 48 58" strokeWidth="2" />
          <path d="M50 50 Q 70 38, 85 45 Q 72 60, 52 58" strokeWidth="2" />
          <circle cx="50" cy="24" r="3" fill={themeColor} />
        </svg>
      );
    case 'hourglass-chronos':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke={themeColor} strokeWidth="2">
          <polygon points="25,20 75,20 50,50 75,80 25,80 50,50" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="3" fill={themeColor} />
          <circle cx="50" cy="68" r="4" fill={themeColor} fillOpacity="0.6" />
        </svg>
      );
    case 'wandering-bard':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke={themeColor} strokeWidth="2">
          <circle cx="50" cy="50" r="42" strokeOpacity="0.3" />
          <path d="M35 75 Q 30 45, 50 25 Q 70 45, 65 75" strokeWidth="2" />
          <line x1="42" y1="35" x2="42" y2="72" strokeWidth="1" strokeDasharray="2 1" />
          <line x1="50" y1="28" x2="50" y2="72" strokeWidth="1" strokeDasharray="2 1" />
          <line x1="58" y1="35" x2="58" y2="72" strokeWidth="1" strokeDasharray="2 1" />
          <circle cx="50" cy="25" r="3" fill={themeColor} />
        </svg>
      );
    default:
      // High-precision geometric elemental sigil for the 52-card pantheon
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke={themeColor} strokeWidth="2">
          <circle cx="50" cy="50" r="44" strokeOpacity="0.25" strokeDasharray={number % 2 === 0 ? '4 2' : 'none'} />
          <circle cx="50" cy="50" r="36" strokeOpacity="0.4" />

          {/* Elemental distinct core shapes */}
          {element === 'Fire' && (
            <>
              <polygon points="50,18 78,74 22,74" strokeWidth="2" />
              <line x1="50" y1="30" x2="50" y2="65" strokeWidth="2" />
              <circle cx="50" cy="48" r="4" fill={themeColor} />
            </>
          )}

          {element === 'Water' && (
            <>
              <polygon points="50,78 78,22 22,22" strokeWidth="2" />
              <path d="M30 46 Q 50 56, 70 46" strokeWidth="1.5" />
              <circle cx="50" cy="38" r="4" fill={themeColor} />
            </>
          )}

          {element === 'Earth' && (
            <>
              <polygon points="50,18 82,50 50,82 18,50" strokeWidth="2" />
              <line x1="28" y1="50" x2="72" y2="50" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="5" fill={themeColor} />
            </>
          )}

          {element === 'Air' && (
            <>
              <polygon points="50,18 78,74 22,74" strokeWidth="2" />
              <line x1="30" y1="52" x2="70" y2="52" strokeWidth="2" />
              <circle cx="50" cy="35" r="4" fill={themeColor} />
            </>
          )}

          {(element === 'Aether' || element === 'Void') && (
            <>
              <polygon points="50,16 64,36 84,50 64,64 50,84 36,64 16,50 36,36" strokeWidth="1.8" />
              <circle cx="50" cy="50" r="9" strokeWidth="1.5" strokeOpacity="0.8" />
              <circle cx="50" cy="50" r="3.5" fill={themeColor} />
            </>
          )}

          {/* Card Number identifier glyph */}
          <text
            x="50"
            y="94"
            textAnchor="middle"
            fill={themeColor}
            fontSize="8"
            fontFamily="serif"
            opacity="0.8"
          >
            ✦ {card.runeSymbol} ✦
          </text>
        </svg>
      );
  }
}

export const CardVisual: React.FC<CardVisualProps> = ({
  card,
  isFlipped = false,
  isSelectable = false,
  isSelected = false,
  positionLabel,
  positionSublabel,
  size = 'md',
  onClick,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-28 h-44 text-xs',
    md: 'w-44 h-68 md:w-52 md:h-80 text-sm',
    lg: 'w-56 h-88 md:w-64 md:h-96 text-base',
  }[size];

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Position Header (if in spread mode) */}
      {(positionLabel || positionSublabel) && (
        <div className="mb-2.5 text-center">
          {positionSublabel && (
            <p className="text-[10px] tracking-widest uppercase font-serif text-amber-500/80">
              {positionSublabel}
            </p>
          )}
          {positionLabel && (
            <h4 className="text-xs md:text-sm font-serif font-bold text-slate-200">
              {positionLabel}
            </h4>
          )}
        </div>
      )}

      {/* 3D Card Container */}
      <div
        onClick={onClick}
        className={`group perspective-1000 ${sizeClasses} cursor-pointer transition-transform duration-300 ${
          isSelectable ? 'hover:-translate-y-2' : ''
        } ${isSelected ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-slate-950 scale-105' : ''}`}
      >
        <div
          className={`card-flipper relative w-full h-full rounded-xl transform-style-3d shadow-xl shadow-black/60 ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* Card Back (Facedown) */}
          <div className="absolute inset-0 w-full h-full rounded-xl backface-hidden overflow-hidden border border-amber-600/40 bg-gradient-to-b from-[#181329] via-[#0d0a17] to-[#120e20] p-2 flex flex-col items-center justify-between">
            <div className="absolute inset-1.5 rounded-lg border border-amber-500/30 pointer-events-none" />
            <div className="absolute inset-2.5 rounded border border-amber-400/15 pointer-events-none" />

            <div className="w-full flex justify-between text-amber-400/40 text-[10px] font-serif px-1 pt-0.5">
              <span>✦</span>
              <span>ᛟ</span>
              <span>✦</span>
            </div>

            <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center my-auto">
              <svg viewBox="0 0 100 100" className="w-full h-full text-amber-400/60" fill="none" stroke="currentColor">
                <circle cx="50" cy="50" r="44" strokeWidth="1" strokeDasharray="3 2" />
                <circle cx="50" cy="50" r="38" strokeWidth="1.2" />
                <polygon points="50,18 78,66 22,66" strokeWidth="1" strokeOpacity="0.8" />
                <polygon points="50,82 78,34 22,34" strokeWidth="1" strokeOpacity="0.8" />
                <circle cx="50" cy="50" r="16" strokeWidth="1.2" />
                <circle cx="50" cy="50" r="5" fill="currentColor" fillOpacity="0.7" />
              </svg>
              <div className="absolute inset-0 rounded-full bg-amber-500/10 blur-md pointer-events-none group-hover:bg-amber-400/20 transition-colors" />
            </div>

            <div className="text-center pb-1">
              <p className="text-[9px] tracking-[0.25em] uppercase font-serif text-amber-400/50">
                52 GRAND ORACLES
              </p>
            </div>
          </div>

          {/* Card Front (Faceup) */}
          {card && (
            <div
              className="absolute inset-0 w-full h-full rounded-xl backface-hidden rotate-y-180 overflow-hidden border border-amber-500/50 bg-[#0f111e] p-3 flex flex-col justify-between"
              style={{
                boxShadow: `0 0 25px ${card.themeColor}33, inset 0 0 15px rgba(0,0,0,0.8)`,
              }}
            >
              <div className="absolute inset-1.5 rounded-lg border border-amber-400/30 pointer-events-none" />
              <div className="absolute inset-2.5 rounded border border-amber-300/10 pointer-events-none" />

              {/* Card Header: Card Number & Runic Glyph */}
              <div className="relative z-10 flex items-center justify-between text-amber-300/90 font-serif px-1 pt-1">
                <span className="text-xs tracking-wider opacity-80">
                  {`No. ${card.number < 10 ? '0' + card.number : card.number}`}
                </span>
                <span className="text-base font-bold" title={card.runeName}>
                  {card.runeSymbol}
                </span>
                <span className="text-[10px] tracking-wide text-slate-400 uppercase">
                  {card.element}
                </span>
              </div>

              {/* Central Emblem Art Box */}
              <div className="relative z-10 my-1 mx-auto w-24 h-24 md:w-32 md:h-32 rounded-lg bg-black/40 border border-amber-500/20 p-2 flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-lg blur-lg pointer-events-none opacity-40"
                  style={{ backgroundColor: card.themeColor }}
                />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  {renderCardEmblem(card)}
                </div>
              </div>

              {/* Card Title & Keywords */}
              <div className="relative z-10 text-center px-1">
                <h3 className="font-serif font-bold text-sm md:text-base text-amber-100 tracking-wide">
                  {card.name}
                </h3>
                <p className="text-[10px] text-amber-300/70 font-serif tracking-wider truncate mb-1">
                  {card.nameEn}
                </p>

                <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 leading-tight">
                  <span>{card.keywords[0]}</span>
                  <span aria-hidden="true">·</span>
                  <span>{card.keywords[1]}</span>
                  {size !== 'sm' && card.keywords[2] && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{card.keywords[2]}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Action Hint / Click prompt */}
              <div className="relative z-10 text-center pt-1 border-t border-amber-500/15">
                <span className="text-[9px] text-amber-400/60 tracking-widest font-serif">
                  {isFlipped ? '✦ 啟示已顯現 ✦' : '點擊翻開神諭'}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
