import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { PrayerStep } from './components/PrayerStep';
import { ShuffleStep } from './components/ShuffleStep';
import { RevealStep } from './components/RevealStep';
import { CompendiumModal } from './components/CompendiumModal';
import { ORACLE_CARDS, SPREAD_OPTIONS } from './data/cards';
import { OracleCard, SpreadType, DrawnCard, DivinationStage } from './types/oracle';
import { shuffleCards, prepareDrawnCards } from './utils/logic';
import { soundManager } from './utils/audio';

export default function App() {
  const [stage, setStage] = useState<DivinationStage>('PRAYER');
  const [question, setQuestion] = useState<string>('');
  const [spreadType, setSpreadType] = useState<SpreadType>('three');
  const [deck, setDeck] = useState<OracleCard[]>(() => shuffleCards(ORACLE_CARDS));
  const [selectedCards, setSelectedCards] = useState<OracleCard[]>([]);
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [isCompendiumOpen, setIsCompendiumOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(() => soundManager.getMuted());

  // Check URL params for autostart
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('autostart') === '1') {
        const shuffled = shuffleCards(ORACLE_CARDS);
        const autoCards = shuffled.slice(0, 3);
        setSelectedCards(autoCards);
        const prepared = prepareDrawnCards(autoCards, 'three');
        // flip first card
        prepared[0].isFlipped = true;
        setDrawnCards(prepared);
        setStage('REVEAL');
      }
    }
  }, []);

  const handleToggleSound = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  const handleProceedToShuffle = () => {
    // Reset selected cards and freshly shuffle deck
    setSelectedCards([]);
    setDeck(shuffleCards(ORACLE_CARDS));
    setStage('DRAWING');
  };

  const handleShuffleDeck = () => {
    setSelectedCards([]);
    setDeck(shuffleCards(deck));
  };

  const handleToggleCardSelection = (card: OracleCard) => {
    const spreadConfig = SPREAD_OPTIONS.find((s) => s.type === spreadType) || SPREAD_OPTIONS[0];
    const maxCount = spreadConfig.cardCount;

    if (selectedCards.some((c) => c.id === card.id)) {
      setSelectedCards(selectedCards.filter((c) => c.id !== card.id));
    } else {
      if (selectedCards.length < maxCount) {
        setSelectedCards([...selectedCards, card]);
      }
    }
  };

  const handleProceedToReveal = () => {
    const prepared = prepareDrawnCards(selectedCards, spreadType);
    setDrawnCards(prepared);
    setStage('REVEAL');
  };

  const handleFlipCard = (index: number) => {
    setDrawnCards((prev) =>
      prev.map((item, idx) => (idx === index ? { ...item, isFlipped: true } : item))
    );
  };

  const handleFlipAll = () => {
    setDrawnCards((prev) => prev.map((item) => ({ ...item, isFlipped: true })));
  };

  const handleResetDivination = () => {
    setStage('PRAYER');
    setSelectedCards([]);
    setDrawnCards([]);
  };

  return (
    <div className="min-h-screen bg-[#090a14] text-[#e8e6e3] flex flex-col relative overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-200">
      {/* Mystical Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle deep violet-slate radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#201538_0%,#0e0d1d_60%,#07070e_100%)] opacity-80" />

        {/* Ambient runic pattern grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#eab308_1px,transparent_1px),linear-gradient(to_bottom,#eab308_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Floating starlight glow nodes */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl animate-mystic-pulse pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 rounded-full bg-purple-600/5 blur-3xl animate-mystic-pulse pointer-events-none" />
      </div>

      {/* Header */}
      <Header
        onOpenCompendium={() => setIsCompendiumOpen(true)}
        onReset={handleResetDivination}
        isMuted={isMuted}
        onToggleSound={handleToggleSound}
      />

      {/* Main Content Arena */}
      <main className="relative z-10 flex-1 flex flex-col justify-center">
        {stage === 'PRAYER' && (
          <PrayerStep
            question={question}
            onQuestionChange={setQuestion}
            selectedSpread={spreadType}
            onSpreadChange={setSpreadType}
            onProceedToShuffle={handleProceedToShuffle}
          />
        )}

        {stage === 'DRAWING' && (
          <ShuffleStep
            question={question}
            spreadType={spreadType}
            deck={deck}
            onShuffleDeck={handleShuffleDeck}
            selectedCards={selectedCards}
            onToggleCardSelection={handleToggleCardSelection}
            onProceedToReveal={handleProceedToReveal}
            onBackToPrayer={() => setStage('PRAYER')}
          />
        )}

        {stage === 'REVEAL' && (
          <RevealStep
            question={question}
            spreadType={spreadType}
            drawnCards={drawnCards}
            onFlipCard={handleFlipCard}
            onFlipAll={handleFlipAll}
            onResetDivination={handleResetDivination}
            onOpenCompendium={() => setIsCompendiumOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-amber-950/40 bg-[#070810]/80 py-4 px-6 text-center">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-serif">
          <span>✦ 西方奇幻神諭問事 · 命運之輪常轉 ✦</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCompendiumOpen(true)}
              className="hover:text-amber-300 transition-colors"
            >
              神諭全圖鑑
            </button>
            <span>·</span>
            <button
              onClick={handleResetDivination}
              className="hover:text-amber-300 transition-colors"
            >
              重新凝神占卜
            </button>
          </div>
        </div>
      </footer>

      {/* Compendium Modal */}
      <CompendiumModal
        isOpen={isCompendiumOpen}
        onClose={() => setIsCompendiumOpen(false)}
      />
    </div>
  );
}
