import React, { useState } from 'react';
import { Sparkles, RefreshCw, ArrowRight, Check } from 'lucide-react';
import { OracleCard, SpreadType } from '../types/oracle';
import { SPREAD_OPTIONS } from '../data/cards';
import { soundManager } from '../utils/audio';

interface ShuffleStepProps {
  question: string;
  spreadType: SpreadType;
  deck: OracleCard[];
  onShuffleDeck: () => void;
  selectedCards: OracleCard[];
  onToggleCardSelection: (card: OracleCard) => void;
  onProceedToReveal: () => void;
  onBackToPrayer: () => void;
}

export const ShuffleStep: React.FC<ShuffleStepProps> = ({
  question,
  spreadType,
  deck,
  onShuffleDeck,
  selectedCards,
  onToggleCardSelection,
  onProceedToReveal,
  onBackToPrayer,
}) => {
  const [isShufflingAnimation, setIsShufflingAnimation] = useState(false);
  const spreadConfig = SPREAD_OPTIONS.find((s) => s.type === spreadType) || SPREAD_OPTIONS[0];
  const requiredCount = spreadConfig.cardCount;
  const isComplete = selectedCards.length === requiredCount;

  const triggerShuffle = () => {
    setIsShufflingAnimation(true);
    soundManager.playShuffleSound();
    onShuffleDeck();

    setTimeout(() => {
      setIsShufflingAnimation(false);
    }, 750);
  };

  const handleCardClick = (card: OracleCard) => {
    soundManager.playRuneTap();
    onToggleCardSelection(card);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 md:py-10 flex flex-col items-center">
      {/* Altar Status & Query Header */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-amber-950/40">
        <div>
          <div className="flex items-center gap-2 text-xs font-serif text-amber-400">
            <span>✦ 步驟二 · 52 張神諭大典洗牌與挑選 ✦</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">法陣：{spreadConfig.title}</span>
          </div>
          <h2 className="text-lg md:text-xl font-serif font-bold text-amber-100 mt-1">
            {question ? `求問：「${question}」` : '心中默念祈願，撫觸命運之牌'}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={triggerShuffle}
            disabled={isShufflingAnimation}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-amber-600/50 bg-amber-950/40 text-amber-300 hover:text-amber-100 hover:bg-amber-900/40 active:scale-95 transition-all text-xs font-serif font-medium whitespace-nowrap"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isShufflingAnimation ? 'animate-spin' : ''}`} />
            <span>重整洗牌 (Reshuffle 52)</span>
          </button>

          <button
            type="button"
            onClick={onBackToPrayer}
            className="text-xs text-slate-400 hover:text-amber-200 transition-colors whitespace-nowrap"
          >
            返回重立誓詞
          </button>
        </div>
      </div>

      {/* Target Slots Preview / Ritual Circle */}
      <div className="w-full mb-6 p-4 md:p-6 rounded-2xl bg-gradient-to-b from-[#121124] to-[#0c0d18] border border-amber-900/30 flex flex-col items-center shadow-xl">
        <div className="flex items-center justify-between w-full max-w-2xl mb-4">
          <span className="text-xs font-serif text-amber-300 font-semibold tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>法陣祭壇槽位（點選下方 52 張牌列抽取 {requiredCount} 張）</span>
          </span>
          <span className="text-xs text-amber-400 font-serif font-bold">
            已抽取 {selectedCards.length} / {requiredCount}
          </span>
        </div>

        {/* Selected Slots */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 my-2">
          {spreadConfig.positions.map((pos, idx) => {
            const cardForSlot = selectedCards[idx];
            return (
              <div key={pos.id} className="flex flex-col items-center">
                <div className="text-center mb-2">
                  <p className="text-[10px] tracking-widest uppercase font-serif text-amber-500/80">
                    {pos.sublabel}
                  </p>
                  <p className="text-xs font-serif font-bold text-slate-200">
                    {pos.label}
                  </p>
                </div>

                <div
                  className={`w-28 h-44 sm:w-36 sm:h-56 rounded-xl border-2 transition-all flex flex-col items-center justify-center p-2 relative ${
                    cardForSlot
                      ? 'border-amber-400/80 bg-amber-950/30 shadow-lg shadow-amber-500/20'
                      : 'border-dashed border-amber-800/40 bg-black/30'
                  }`}
                >
                  {cardForSlot ? (
                    <div className="w-full h-full flex flex-col items-center justify-between p-1.5 text-center">
                      <span className="text-amber-400 text-xs font-serif">✦ 封印待啟 ✦</span>
                      <div className="w-12 h-12 rounded-full border border-amber-500/30 bg-black/50 flex items-center justify-center">
                        <span className="text-base text-amber-300 font-serif">
                          {cardForSlot.runeSymbol}
                        </span>
                      </div>
                      <span className="text-xs font-serif text-amber-200 font-semibold">
                        第 {idx + 1} 張神諭
                      </span>
                    </div>
                  ) : (
                    <div className="text-center text-slate-500 p-2">
                      <span className="block text-xl mb-1 text-amber-700/60">ᛟ</span>
                      <span className="text-[11px] font-serif leading-tight block">
                        等待挑選
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Proceed to reveal trigger */}
        {isComplete && (
          <div className="mt-6 flex flex-col items-center">
            <button
              type="button"
              onClick={() => {
                soundManager.playCardFlip();
                onProceedToReveal();
              }}
              className="flex items-center gap-2 px-8 py-3 rounded-xl font-serif font-bold text-sm tracking-wider uppercase text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-amber-500/30"
            >
              <span>神諭法陣已備齊 · 揭曉針對問題之解答</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Fan of Facedown 52 Deck Cards */}
      <div className="w-full">
        <div className="flex items-center justify-between mb-3 px-2">
          <p className="text-xs font-serif text-slate-400 tracking-wider">
            {isComplete
              ? '✦ 抽牌完畢，請點擊上方金色按鈕揭開神諭 ✦'
              : `✦ 52 張完整神諭牌列，請依直覺點選 ${requiredCount - selectedCards.length} 張 ✦`}
          </p>
          <span className="text-xs font-serif text-amber-400/80">
            庫存：52 張
          </span>
        </div>

        {/* Scrollable / Grid of 52 Cards */}
        <div className="p-3 sm:p-4 rounded-2xl bg-black/40 border border-amber-950/40 max-h-[460px] overflow-y-auto">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-13 gap-2 sm:gap-2.5">
            {deck.map((card, idx) => {
              const isSelected = selectedCards.some((c) => c.id === card.id);
              const isDisabled = isComplete && !isSelected;

              return (
                <button
                  key={card.id}
                  type="button"
                  disabled={isDisabled}
                  onClick={() => handleCardClick(card)}
                  className={`relative group rounded-lg p-0.5 text-left transition-all duration-200 ${
                    isShufflingAnimation
                      ? 'translate-y-2 scale-95 opacity-50'
                      : 'hover:-translate-y-1.5'
                  } ${
                    isSelected
                      ? 'ring-2 ring-amber-400 ring-offset-1 ring-offset-slate-950 -translate-y-1'
                      : ''
                  } ${isDisabled ? 'opacity-35 grayscale pointer-events-none' : ''}`}
                >
                  <div className="w-full aspect-[2/3] rounded-md border border-amber-600/40 bg-gradient-to-b from-[#19152b] via-[#0d0a17] to-[#120e20] p-1 flex flex-col items-center justify-between shadow relative overflow-hidden">
                    <div className="absolute inset-0.5 rounded border border-amber-500/20 pointer-events-none" />

                    <div className="w-full flex justify-between text-amber-500/60 text-[8px] font-serif">
                      <span>✦</span>
                      <span>{idx + 1}</span>
                      <span>✦</span>
                    </div>

                    <div className="w-6 h-6 rounded-full border border-amber-500/30 flex items-center justify-center bg-black/40 text-amber-400/80 group-hover:text-amber-300">
                      <span className="text-[10px] font-serif">ᛉ</span>
                    </div>

                    <div className="text-center w-full">
                      {isSelected ? (
                        <span className="inline-flex items-center gap-0.5 text-[8px] font-serif font-bold text-amber-300 bg-amber-950/90 px-1 rounded">
                          <Check className="w-2 h-2" /> 已取
                        </span>
                      ) : (
                        <span className="text-[8px] font-serif text-slate-500 group-hover:text-amber-400/80">
                          點選
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
