export type SpreadType = 'single' | 'three';

export type SpreadPosition = 'single' | 'past' | 'present' | 'future';

export interface PositionInfo {
  id: SpreadPosition;
  label: string;
  sublabel: string;
  description: string;
}

export interface OracleCard {
  id: string;
  number: number;
  name: string;
  nameEn: string;
  element: 'Aether' | 'Fire' | 'Water' | 'Air' | 'Earth' | 'Void';
  elementLabel: string;
  runeSymbol: string;
  runeName: string;
  themeColor: string; // Tailwind/Hex for glow
  keywords: string[];
  verse: string[];
  interpretation: string;
  actionAdvice: string;
  cautionWarning: string;
  positionContext?: {
    past?: string;
    present?: string;
    future?: string;
    single?: string;
  };
}

export interface DrawnCard {
  card: OracleCard;
  position: SpreadPosition;
  isFlipped: boolean;
  drawnIndex: number;
}

export type DivinationStage = 
  | 'PRAYER'    // 凝神立誓
  | 'SHUFFLING' // 洗牌動畫
  | 'DRAWING'   // 挑選覆蓋卡牌
  | 'REVEAL';   // 翻牌解析與神諭
