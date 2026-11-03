import React, { useState } from 'react';
import { X, Search, BookOpen, Sparkles, Compass, ShieldAlert } from 'lucide-react';
import { ORACLE_CARDS } from '../data/cards';
import { OracleCard } from '../types/oracle';
import { CardVisual } from './CardVisual';
import { soundManager } from '../utils/audio';

interface CompendiumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompendiumModal: React.FC<CompendiumModalProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState('');
  const [selectedElement, setSelectedElement] = useState<string>('ALL');
  const [selectedCard, setSelectedCard] = useState<OracleCard>(ORACLE_CARDS[0]);

  if (!isOpen) return null;

  const elements = [
    { id: 'ALL', label: '全部 52 典籍' },
    { id: 'Aether', label: '太虛/星辰' },
    { id: 'Fire', label: '火象/聖焰' },
    { id: 'Water', label: '水象/深海' },
    { id: 'Air', label: '風象/長空' },
    { id: 'Earth', label: '地象/大地' },
    { id: 'Void', label: '虛空/暗影' },
  ];

  const filteredCards = ORACLE_CARDS.filter((c) => {
    const matchesElement = selectedElement === 'ALL' || c.element === selectedElement;
    const matchesSearch =
      c.name.includes(search) ||
      c.nameEn.toLowerCase().includes(search.toLowerCase()) ||
      c.keywords.some((k) => k.includes(search)) ||
      c.runeName.includes(search) ||
      String(c.number) === search.trim();
    return matchesElement && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl h-[90vh] rounded-2xl border border-amber-900/60 bg-[#0d0e19] text-[#e8e6e3] shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-amber-950/60 bg-[#0a0a13]">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <h2 className="font-serif font-bold text-base sm:text-lg text-amber-100 tracking-wider">
              神諭法典 · 52 大奇幻奧秘全書 (52 Grand Oracle Codex)
            </h2>
          </div>

          <button
            type="button"
            onClick={() => {
              soundManager.playRuneTap();
              onClose();
            }}
            aria-label="關閉全典"
            className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-amber-200 hover:border-amber-700/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="px-6 py-3 border-b border-amber-950/40 bg-[#090912]/80 flex flex-wrap items-center justify-between gap-3">
          {/* Search box */}
          <div className="relative flex-1 min-w-[200px] max-w-xs">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="搜尋牌名、編號(1-52)、符文或意象..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-slate-800 bg-slate-950/80 text-xs text-amber-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-500/60"
            />
          </div>

          {/* Element filter tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 max-w-full">
            {elements.map((el) => {
              const active = selectedElement === el.id;
              return (
                <button
                  key={el.id}
                  type="button"
                  onClick={() => {
                    soundManager.playRuneTap();
                    setSelectedElement(el.id);
                  }}
                  className={`px-3 py-1 text-xs font-serif rounded-md transition-colors whitespace-nowrap ${
                    active
                      ? 'bg-amber-400/20 text-amber-300 border border-amber-500/50'
                      : 'text-slate-400 hover:text-slate-200 border border-transparent'
                  }`}
                >
                  {el.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Main Content: Split grid */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 md:grid-cols-12">
          {/* Left card list (5 cols) */}
          <div className="md:col-span-5 p-4 overflow-y-auto border-r border-amber-950/40 space-y-2">
            {filteredCards.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-500">
                未尋獲符合條件的神諭牌（共 52 張）
              </div>
            ) : (
              filteredCards.map((card) => {
                const isSelected = selectedCard.id === card.id;
                return (
                  <button
                    key={card.id}
                    type="button"
                    onClick={() => {
                      soundManager.playRuneTap();
                      setSelectedCard(card);
                    }}
                    className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'border-amber-400/80 bg-amber-950/30 shadow-md'
                        : 'border-slate-800/80 bg-slate-950/40 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg border border-amber-500/30 bg-black/50 flex items-center justify-center text-amber-300 font-serif font-bold text-sm shrink-0">
                        {card.runeSymbol}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-serif font-bold text-sm text-amber-100 truncate">
                            {card.name}
                          </span>
                          <span className="text-[10px] text-amber-400/80 font-serif shrink-0">
                            No.{card.number}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-400 font-serif truncate">
                          {card.keywords.slice(0, 2).join(' · ')}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] text-amber-400/60 font-serif shrink-0">
                      {card.elementLabel}
                    </span>
                  </button>
                );
              })
            )}
          </div>

          {/* Right card full inspection detail (7 cols) */}
          <div className="md:col-span-7 p-6 overflow-y-auto space-y-6 bg-gradient-to-b from-[#0f101d] to-[#090a12]">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <CardVisual
                card={selectedCard}
                isFlipped={true}
                size="sm"
                className="shrink-0"
              />

              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-serif text-amber-400 mb-1">
                  <span>第 {selectedCard.number} 號</span>
                  <span>·</span>
                  <span>{selectedCard.runeName}</span>
                  <span>·</span>
                  <span>{selectedCard.elementLabel}</span>
                </div>
                <h3 className="font-serif font-bold text-2xl text-amber-100">
                  {selectedCard.name}
                </h3>
                <p className="text-xs font-serif text-amber-300/70 mb-3">
                  {selectedCard.nameEn}
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 text-xs text-slate-300">
                  {selectedCard.keywords.map((kw, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded border border-amber-900/40 bg-amber-950/20 text-amber-200/90 text-[11px]"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Oracle Verse */}
            <div className="p-4 rounded-xl border border-amber-900/40 bg-black/40">
              <p className="text-xs font-serif tracking-widest text-amber-400 uppercase mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>神諭啟示詩 (Oracle Verse)</span>
              </p>
              <div className="space-y-1 font-serif text-sm text-amber-200/90 italic leading-relaxed">
                {selectedCard.verse.map((line, i) => (
                  <p key={i}>「{line}」</p>
                ))}
              </div>
            </div>

            {/* Core Meaning */}
            <div>
              <h4 className="text-xs font-serif uppercase tracking-widest text-amber-300 font-bold mb-1.5">
                ✦ 深層奧秘解讀
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-black/20 p-3.5 rounded-xl border border-slate-800">
                {selectedCard.interpretation}
              </p>
            </div>

            {/* Advice and caution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl border border-emerald-900/40 bg-emerald-950/20">
                <h5 className="text-xs font-serif font-bold text-emerald-300 mb-1 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  <span>行動指引</span>
                </h5>
                <p className="text-xs text-emerald-100/90 leading-relaxed">
                  {selectedCard.actionAdvice}
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-amber-900/40 bg-amber-950/20">
                <h5 className="text-xs font-serif font-bold text-amber-400 mb-1 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>命運警語</span>
                </h5>
                <p className="text-xs text-amber-100/90 leading-relaxed">
                  {selectedCard.cautionWarning}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
