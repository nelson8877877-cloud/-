import React from 'react';
import { Sparkles, Compass, Flame, HelpCircle } from 'lucide-react';
import { SpreadType } from '../types/oracle';
import { SPREAD_OPTIONS, PRESET_PRAYERS } from '../data/cards';
import { soundManager } from '../utils/audio';

interface PrayerStepProps {
  question: string;
  onQuestionChange: (val: string) => void;
  selectedSpread: SpreadType;
  onSpreadChange: (spread: SpreadType) => void;
  onProceedToShuffle: () => void;
}

export const PrayerStep: React.FC<PrayerStepProps> = ({
  question,
  onQuestionChange,
  selectedSpread,
  onSpreadChange,
  onProceedToShuffle,
}) => {
  const handlePresetClick = (preset: string) => {
    soundManager.playRuneTap();
    // remove leading emoji if desired or keep clean
    const clean = preset.replace(/^[^\w\u4e00-\u9fa5]+/, '').trim();
    onQuestionChange(clean);
  };

  const handleStart = () => {
    soundManager.playRuneTap();
    onProceedToShuffle();
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
      {/* Mystical Emblem Banner */}
      <div className="relative mb-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-amber-500/40 bg-gradient-to-b from-amber-950/40 via-purple-950/30 to-slate-950 shadow-lg shadow-amber-500/10 mb-4">
          <Sparkles className="w-8 h-8 text-amber-400 animate-pulse" />
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-amber-400/80 font-serif mb-2">
          SACRED ORACLE ALTAR
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-amber-100 tracking-wider text-balance">
          西方奇幻神諭 · 凝神立誓
        </h1>
        <p className="mt-3 text-sm text-slate-400 max-w-xl mx-auto leading-relaxed text-balance">
          在遠古符文與星辰的注視下，深呼吸並撫平思緒。請在心中默念或寫下你的疑惑與期許，讓命運之輪為你翻開指引之牌。
        </p>
      </div>

      {/* Main Altar Form Box */}
      <div className="w-full rounded-2xl border border-amber-900/40 bg-[#0e101d]/90 p-6 md:p-8 shadow-2xl shadow-black/80 backdrop-blur-md relative overflow-hidden">
        {/* Subtle decorative corners */}
        <div className="absolute top-2 left-2 text-amber-500/20 text-xs font-serif">╔</div>
        <div className="absolute top-2 right-2 text-amber-500/20 text-xs font-serif">╗</div>
        <div className="absolute bottom-2 left-2 text-amber-500/20 text-xs font-serif">╚</div>
        <div className="absolute bottom-2 right-2 text-amber-500/20 text-xs font-serif">╝</div>

        {/* Question Input Zone */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="prayer-input" className="text-xs font-serif tracking-widest uppercase text-amber-300 font-semibold flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>祈願或困惑（Question / Intent）</span>
            </label>
            <span className="text-xs text-slate-500">
              {question.length}/100 字
            </span>
          </div>

          <div className="relative">
            <input
              id="prayer-input"
              type="text"
              maxLength={100}
              value={question}
              onChange={(e) => onQuestionChange(e.target.value)}
              placeholder="例：我該如何打破目前冒險/工作的僵局？這段合作的命運走向為何？"
              className="w-full px-4 py-3.5 rounded-xl border border-amber-800/40 bg-slate-950/80 text-amber-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/50 text-sm transition-all shadow-inner"
            />
          </div>

          {/* Quick preset suggestions */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 text-amber-500/60" />
              <span>靈感指引：</span>
            </span>
            {PRESET_PRAYERS.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handlePresetClick(preset)}
                className="text-xs px-2.5 py-1 rounded-md border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-amber-200 hover:border-amber-700/50 transition-colors whitespace-nowrap"
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Spread Selector */}
        <div className="mb-8">
          <label className="block text-xs font-serif tracking-widest uppercase text-amber-300 font-semibold mb-3 flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>選擇占卜法陣（Oracle Spread）</span>
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SPREAD_OPTIONS.map((opt) => {
              const isSelected = selectedSpread === opt.type;
              return (
                <button
                  key={opt.type}
                  type="button"
                  onClick={() => {
                    soundManager.playRuneTap();
                    onSpreadChange(opt.type);
                  }}
                  className={`text-left p-4 rounded-xl border transition-all duration-200 relative ${
                    isSelected
                      ? 'border-amber-400/80 bg-amber-950/30 shadow-lg shadow-amber-500/10'
                      : 'border-slate-800/80 bg-slate-950/40 hover:border-slate-700 hover:bg-slate-900/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-serif font-bold text-sm sm:text-base text-amber-100">
                      {opt.title}
                    </span>
                    <span className="text-xs font-serif px-2 py-0.5 rounded border border-amber-500/40 text-amber-300 bg-amber-950/50">
                      {opt.cardCount} 張牌
                    </span>
                  </div>

                  <p className="text-xs text-amber-400/80 font-serif mb-2">
                    {opt.subtitle}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {opt.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-amber-950/60">
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span className="text-amber-400">✦</span>
            <span>牌庫內建 52 張西方奇幻大奧秘神諭，每次抽卡皆由命運之流純粹洗牌</span>
          </div>

          <button
            type="button"
            onClick={handleStart}
            className="w-full sm:w-auto px-8 py-3 rounded-xl font-serif font-bold text-sm tracking-widest uppercase text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:brightness-110 active:scale-98 transition-all shadow-lg shadow-amber-500/20 whitespace-nowrap"
          >
            步入祭壇 · 開始洗牌
          </button>
        </div>
      </div>
    </div>
  );
};
