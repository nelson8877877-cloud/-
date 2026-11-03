import React from 'react';
import { Volume2, VolumeX, BookOpen } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface HeaderProps {
  onOpenCompendium: () => void;
  onReset: () => void;
  isMuted: boolean;
  onToggleSound: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCompendium,
  onReset,
  isMuted,
  onToggleSound,
}) => {
  return (
    <header className="w-full border-b border-amber-950/40 bg-[#090a14]/90 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Brand title, one line, single text element wordmark */}
        <button
          onClick={onReset}
          className="font-serif text-base sm:text-lg font-bold tracking-widest text-amber-200 hover:text-amber-100 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 text-left"
        >
          <span className="text-amber-400">✦</span>
          <span>MYSTIC ORACLE</span>
        </button>

        {/* Zone 2: 4 concise single-line navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={onReset}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            凝神立誓
          </button>
          <button
            onClick={() => {
              onReset();
            }}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            三女神牌陣
          </button>
          <button
            onClick={onOpenCompendium}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            神諭法典
          </button>
          <a
            href="#guidelines"
            onClick={(e) => {
              e.preventDefault();
              onOpenCompendium();
            }}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            符文奧秘
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onToggleSound}
            aria-label={isMuted ? '開啟奇幻音效' : '靜音'}
            title={isMuted ? '開啟奇幻音效' : '靜音'}
            className="p-2 rounded-lg border border-amber-900/40 bg-slate-900/60 text-amber-300/80 hover:text-amber-200 hover:border-amber-600/50 transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={onOpenCompendium}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-serif font-semibold tracking-wider text-amber-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-md shadow-amber-500/10 whitespace-nowrap shrink-0"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>查閱全典</span>
          </button>
        </div>
      </div>
    </header>
  );
};
