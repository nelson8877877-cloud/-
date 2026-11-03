import React, { useState, useEffect, useRef } from 'react';
import {
  Copy,
  Check,
  RotateCcw,
  Sparkles,
  BookOpen,
  ShieldAlert,
  Award,
  Compass,
  Eye,
  Scroll,
  RefreshCw,
  Wand2,
  Loader2,
} from 'lucide-react';
import { DrawnCard, SpreadType } from '../types/oracle';
import { CardVisual } from './CardVisual';
import { SPREAD_OPTIONS } from '../data/cards';
import {
  isAllCardsRevealed,
  generateOracleReadingSummary,
  formatOracleExportText,
} from '../utils/logic';
import { soundManager } from '../utils/audio';

interface RevealStepProps {
  question: string;
  spreadType: SpreadType;
  drawnCards: DrawnCard[];
  onFlipCard: (index: number) => void;
  onFlipAll: () => void;
  onResetDivination: () => void;
  onOpenCompendium: () => void;
}

export const RevealStep: React.FC<RevealStepProps> = ({
  question,
  spreadType,
  drawnCards,
  onFlipCard,
  onFlipAll,
  onResetDivination,
  onOpenCompendium,
}) => {
  const [copied, setCopied] = useState(false);
  const [selectedCardDetail, setSelectedCardDetail] = useState<number>(0);

  // Gemini AI Deep Oracle Report State
  const [aiReading, setAiReading] = useState<string>('');
  const [isLoadingAi, setIsLoadingAi] = useState(false);
  const [aiNote, setAiNote] = useState<string>('');
  const autoTriggeredRef = useRef(false);

  const allRevealed = isAllCardsRevealed(drawnCards);
  const spreadConfig = SPREAD_OPTIONS.find((s) => s.type === spreadType) || SPREAD_OPTIONS[0];

  // Call Gemini API server endpoint
  const handleRequestAiReading = async (force: boolean = false) => {
    if (isLoadingAi) return;
    setIsLoadingAi(true);
    setAiNote('');

    try {
      const res = await fetch('/api/oracle/read', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question,
          spreadType,
          drawnCards,
        }),
      });

      const data = await res.json();
      if (data && data.reading) {
        setAiReading(data.reading);
        soundManager.playSealSound();
      } else if (data && data.fallback) {
        setAiNote(data.message || '已啟用神諭法陣深層智能共鳴解讀。');
      }
    } catch (err: any) {
      console.warn('AI reading invocation notice:', err);
      setAiNote('已為您呈現神諭法陣專屬針對性深度解析。');
    } finally {
      setIsLoadingAi(false);
    }
  };

  // Automatically generate when all cards are revealed!
  useEffect(() => {
    if (allRevealed && !aiReading && !autoTriggeredRef.current) {
      autoTriggeredRef.current = true;
      handleRequestAiReading();
    }
  }, [allRevealed]);

  const handleCopy = async () => {
    soundManager.playSealSound();
    const formatted = formatOracleExportText(question, drawnCards, spreadType, aiReading || undefined);
    try {
      await navigator.clipboard.writeText(formatted);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = formatted;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleCardClick = (idx: number) => {
    soundManager.playCardFlip();
    onFlipCard(idx);
    setSelectedCardDetail(idx);
  };

  const activeCardItem = drawnCards[selectedCardDetail] || drawnCards[0];
  const activeCard = activeCardItem?.card;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 md:py-10 flex flex-col items-center">
      {/* Top Banner / Question Reflection */}
      <div className="w-full text-center mb-6">
        <p className="text-xs font-serif uppercase tracking-[0.25em] text-amber-400 mb-1.5 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>DESTINY REVEALED · 52 大奧秘神諭顯聖</span>
          <Sparkles className="w-3.5 h-3.5" />
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-amber-100 tracking-wide text-balance">
          {question ? `求問：「${question}」` : '心念專注 · 神諭照徹迷宮'}
        </h2>

        <p className="text-xs text-slate-400 mt-2 max-w-xl mx-auto leading-relaxed text-balance">
          {allRevealed
            ? '所有神諭已翻開，神諭法陣已為您的問題給予專屬解答，大賢者靈性共鳴已就緒。'
            : '請點擊覆蓋的卡牌完成 3D 翻轉，或使用上方按鈕一鍵解開封印。'}
        </p>
      </div>

      {/* Control bar */}
      <div className="w-full flex items-center justify-between gap-3 mb-8 pb-3 border-b border-amber-950/40">
        <div className="flex items-center gap-2">
          {!allRevealed && (
            <button
              type="button"
              onClick={() => {
                soundManager.playCardFlip();
                onFlipAll();
              }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-amber-500/50 bg-amber-950/50 text-amber-200 hover:text-amber-100 hover:bg-amber-900/50 text-xs font-serif transition-colors whitespace-nowrap"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>一鍵翻開全部 (Reveal All)</span>
            </button>
          )}

          <button
            type="button"
            onClick={onOpenCompendium}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-amber-200 text-xs font-serif transition-colors whitespace-nowrap"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>查閱 52 牌全典</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-serif text-xs font-semibold tracking-wider text-amber-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 active:scale-95 transition-all shadow-md shadow-amber-500/10 whitespace-nowrap"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-amber-950" />
                <span>已封存至剪貼簿！</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-amber-950" />
                <span>封存神諭 (Copy Result)</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              soundManager.playRuneTap();
              onResetDivination();
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-amber-200 text-xs font-serif transition-colors whitespace-nowrap"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>重新占卜</span>
          </button>
        </div>
      </div>

      {/* Interactive 3D Cards Display Area */}
      <div className="w-full flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 my-4">
        {drawnCards.map((item, idx) => {
          const posConfig = spreadConfig.positions[idx];
          const isSelectedForInspection = selectedCardDetail === idx;

          return (
            <div key={item.card.id} className="flex flex-col items-center">
              <CardVisual
                card={item.card}
                isFlipped={item.isFlipped}
                positionLabel={posConfig?.label}
                positionSublabel={posConfig?.sublabel}
                size={spreadType === 'single' ? 'lg' : 'md'}
                isSelected={isSelectedForInspection && item.isFlipped}
                onClick={() => handleCardClick(idx)}
              />

              {item.isFlipped && (
                <button
                  type="button"
                  onClick={() => setSelectedCardDetail(idx)}
                  className={`mt-2 text-xs font-serif px-2.5 py-1 rounded transition-colors ${
                    isSelectedForInspection
                      ? 'text-amber-300 bg-amber-950/60 border border-amber-600/40'
                      : 'text-slate-400 hover:text-amber-200'
                  }`}
                >
                  檢視卡牌詳解 ✦
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Primary Dedicated Question-Answering Report Block */}
      {allRevealed && (
        <div className="w-full mt-8 p-6 md:p-8 rounded-2xl border-2 border-amber-500/40 bg-gradient-to-b from-[#161329] via-[#0f0e1c] to-[#0a0a14] shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-amber-900/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl border border-amber-400/50 bg-amber-950/60 flex items-center justify-center text-amber-300 shadow-md shadow-amber-500/20">
                <Scroll className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs font-serif text-amber-400 uppercase tracking-widest mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>專屬神諭答案 · 直擊困惑癥結</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-emerald-400">Gemini API 高階神諭賦能</span>
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-amber-100 tracking-wider">
                  針對「{question || '您的所求所問'}」之專屬深度神諭解析報告
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={isLoadingAi}
                onClick={() => handleRequestAiReading(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-serif font-bold tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:brightness-110 active:scale-95 transition-all shadow-md shadow-amber-500/20 disabled:opacity-50 whitespace-nowrap"
              >
                {isLoadingAi ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>大祭司靈性通靈中...</span>
                  </>
                ) : (
                  <>
                    <Wand2 className="w-3.5 h-3.5" />
                    <span>{aiReading ? '重新喚醒靈性共鳴' : '召喚大賢者 AI 深度通解'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* AI Reading (if generated from Gemini API) */}
          {aiReading ? (
            <div className="mb-6 p-5 sm:p-6 rounded-xl border border-amber-400/40 bg-amber-950/20 font-serif text-sm sm:text-base text-amber-100 leading-relaxed whitespace-pre-line shadow-inner">
              <div className="flex items-center gap-2 mb-3 text-amber-300 font-bold text-sm">
                <Wand2 className="w-4 h-4 text-amber-400" />
                <span>✦ 高階神諭大祭司 · Gemini 深度通靈啟示真跡 ✦</span>
              </div>
              {aiReading}
            </div>
          ) : null}

          {/* Core Structured Question-Answering Narrative */}
          <div className="space-y-4 font-serif text-sm sm:text-base text-slate-200 leading-relaxed whitespace-pre-line bg-black/40 p-5 sm:p-6 rounded-xl border border-amber-950/60">
            {generateOracleReadingSummary(question, drawnCards)}
          </div>

          {aiNote && (
            <p className="mt-3 text-xs text-amber-400/80 font-serif">
              ✦ {aiNote}
            </p>
          )}

          {/* Report Footer */}
          <div className="mt-6 pt-4 border-t border-amber-900/40 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-serif">
            <span className="text-amber-400/80">
              ※ 神諭為心之明鏡，前路之吉凶全在提問者之抉擇與篤行。
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="text-amber-300 hover:text-amber-100 font-serif flex items-center gap-1.5 underline underline-offset-4"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>封存整份深度神諭解析報告</span>
            </button>
          </div>
        </div>
      )}

      {/* Selected Card Deep Dive Inspection Sheet */}
      {activeCard && activeCardItem.isFlipped && (
        <div className="w-full mt-8 rounded-2xl border border-amber-900/40 bg-gradient-to-b from-[#131224] to-[#0c0d18] p-6 md:p-8 shadow-2xl relative overflow-hidden animate-fadeIn">
          <div
            className="absolute top-0 left-1/4 right-1/4 h-[1px] blur-sm"
            style={{ backgroundColor: activeCard.themeColor }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 5 cols: Card Lore & Oracle Verse */}
            <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-xl border border-amber-950/60 bg-black/40">
              <div>
                <div className="flex items-center justify-between text-xs font-serif text-amber-400/80 mb-2">
                  <span className="tracking-widest uppercase">
                    {activeCard.runeName}
                  </span>
                  <span className="text-lg font-bold">{activeCard.runeSymbol}</span>
                </div>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-xs font-serif text-amber-500/80">No.{activeCard.number}</span>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-amber-100">
                    {activeCard.name}
                  </h3>
                </div>
                <p className="text-xs font-serif text-amber-300/60 mb-4">
                  {activeCard.nameEn} · {activeCard.elementLabel}
                </p>

                {/* Oracle Verse (神諭啟示詩) */}
                <div className="my-4 p-4 rounded-lg border-l-2 border-amber-500/60 bg-amber-950/20">
                  <p className="text-xs font-serif tracking-widest text-amber-400 uppercase mb-2">
                    ✦ 神諭啟示詩 (Oracle Verse)
                  </p>
                  <div className="space-y-1.5 font-serif text-sm text-amber-200/90 leading-relaxed italic">
                    {activeCard.verse.map((line, lIdx) => (
                      <p key={lIdx}>「{line}」</p>
                    ))}
                  </div>
                </div>

                {/* Position context note */}
                {activeCard.positionContext && activeCardItem.position !== 'single' && (
                  <div className="text-xs text-slate-300 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                    <span className="text-amber-400 font-serif font-semibold">
                      位居【{spreadConfig.positions[activeCardItem.drawnIndex]?.label}】：
                    </span>
                    <span className="ml-1 text-slate-300">
                      {activeCard.positionContext[activeCardItem.position]}
                    </span>
                  </div>
                )}
              </div>

              {/* Keywords */}
              <div className="pt-4 mt-4 border-t border-amber-950/60 flex items-center gap-2 text-xs text-amber-300/70 font-serif">
                <span>核心意象：</span>
                {activeCard.keywords.map((kw, i) => (
                  <span key={i} className="text-slate-300">
                    {kw}{i < activeCard.keywords.length - 1 ? ' · ' : ''}
                  </span>
                ))}
              </div>
            </div>

            {/* Right 7 cols: Deep Interpretation, Action Advice & Warning */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h4 className="text-xs font-serif tracking-widest uppercase text-amber-300 font-bold mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>深層奧秘解讀 (Interpretation)</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-black/20 p-4 rounded-xl border border-slate-800/80">
                  {activeCard.interpretation}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-serif tracking-widest uppercase text-emerald-400 font-bold mb-2 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span>行動指引（針對提問者建議）</span>
                </h4>
                <div className="text-sm text-emerald-100/90 bg-emerald-950/20 border border-emerald-900/40 p-4 rounded-xl leading-relaxed">
                  {activeCard.actionAdvice}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-serif tracking-widest uppercase text-amber-500 font-bold mb-2 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-500" />
                  <span>命運警語（盲點與心魔防範）</span>
                </h4>
                <div className="text-sm text-amber-100/90 bg-amber-950/20 border border-amber-900/40 p-4 rounded-xl leading-relaxed">
                  {activeCard.cautionWarning}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
