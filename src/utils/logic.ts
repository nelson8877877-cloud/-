import { OracleCard, DrawnCard, SpreadType, SpreadPosition } from '../types/oracle';
import { SPREAD_OPTIONS } from '../data/cards';

/**
 * Fisher-Yates array shuffle with pure immutability
 */
export function shuffleCards<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Prepares drawn cards based on spread type
 */
export function prepareDrawnCards(selectedCards: OracleCard[], spreadType: SpreadType): DrawnCard[] {
  const spreadConfig = SPREAD_OPTIONS.find((s) => s.type === spreadType) || SPREAD_OPTIONS[0];
  const count = spreadConfig.cardCount;
  const picked = selectedCards.slice(0, count);

  return picked.map((card, idx) => {
    const posId = (spreadConfig.positions[idx]?.id || 'single') as SpreadPosition;
    return {
      card,
      position: posId,
      isFlipped: false,
      drawnIndex: idx,
    };
  });
}

/**
 * Check if all cards in the reading have been flipped
 */
export function isAllCardsRevealed(drawnCards: DrawnCard[]): boolean {
  if (drawnCards.length === 0) return false;
  return drawnCards.every((c) => c.isFlipped);
}

/**
 * Analyzes the seeker's query category for deep contextual customization
 */
export function analyzeQuestionIntent(question: string): {
  category: 'career' | 'relationship' | 'choice' | 'finance' | 'trial' | 'general';
  categoryLabel: string;
  focusContext: string;
} {
  const q = question.toLowerCase();

  if (/(事業|工作|前途|前程|升遷|跳槽|轉職|創業|專案|冒險|目標|學業|考試|競爭)/.test(q)) {
    return {
      category: 'career',
      categoryLabel: '事業與冒險志業',
      focusContext: '在現實職涯、目標推進與個人成就的戰場上',
    };
  }
  if (/(感情|愛情|戀愛|伴侶|復合|喜歡|人際|關係|朋友|合作|夥伴|家庭|婚姻)/.test(q)) {
    return {
      category: 'relationship',
      categoryLabel: '情感羈絆與人際連結',
      focusContext: '在人際互動、情感牽絆與彼此信任的交織中',
    };
  }
  if (/(抉擇|選擇|選哪個|該不該|猶豫|決定|左右為難|二選一|走哪條路|迷茫|方向)/.test(q)) {
    return {
      category: 'choice',
      categoryLabel: '人生十字路口與重大抉擇',
      focusContext: '在面臨關鍵分水嶺與方向取捨的緊要關頭',
    };
  }
  if (/(金錢|財富|投資|收入|買房|財運|生意|獲利|賠錢|資產)/.test(q)) {
    return {
      category: 'finance',
      categoryLabel: '物質資源與財富豐饒',
      focusContext: '在物質積累、資源配置與實質回報的課題上',
    };
  }
  if (/(困境|瓶頸|阻礙|痛苦|難關|挫折|低潮|健康|生病|壓力|焦慮|失眠)/.test(q)) {
    return {
      category: 'trial',
      categoryLabel: '瓶頸考驗與心靈療癒',
      focusContext: '在穿越黑暗低谷與化解身心重負的淬煉中',
    };
  }

  return {
    category: 'general',
    categoryLabel: '心靈指引與命運通解',
    focusContext: '在當前生命軌跡的深層探索與覺醒之中',
  };
}

/**
 * Generates synthesized oracle advice deeply, directly answering the user's question
 */
export function generateOracleReadingSummary(question: string, drawnCards: DrawnCard[]): string {
  const qClean = question.trim() || '當下命運與心靈指引';
  const { categoryLabel, focusContext } = analyzeQuestionIntent(qClean);

  if (drawnCards.length === 1) {
    const main = drawnCards[0].card;
    return `【針對問題：「${qClean}」之神諭直斷】：
${focusContext}，神諭降下了第 ${main.number} 號神諭《${main.name}》（${main.runeName}）。

✦ 核心問題解答：
針對你所探詢的「${qClean}」，這張牌給予了非常明確的定論：目前局勢的命運樞紐在於「${main.keywords.join('、')}」。${main.interpretation}

✦ 行動破局策略：
${main.actionAdvice}

✦ 必防心魔警語：
${main.cautionWarning}

※ 神諭箴言：不要向外界盲目尋求依賴，針對「${qClean}」的最佳解答，早已藉由《${main.name}》的符文密碼銘刻於你的直覺深處。`;
  }

  const past = drawnCards.find((d) => d.position === 'past')?.card;
  const present = drawnCards.find((d) => d.position === 'present')?.card;
  const future = drawnCards.find((d) => d.position === 'future')?.card;

  if (past && present && future) {
    return `【針對問題：「${qClean}」之時光三女神深層解讀】（專注領域：${categoryLabel}）：

一、✦【神諭總斷 · 直擊核心】
面對你所掛心的「${qClean}」，命運法陣呈現出強大的轉折勢態。你當前所經歷的糾結並非死胡同，而是正處於從《${past.name}》轉向《${future.name}》的質變跳躍期。

二、✦【過去之影 · 因緣根基】《${past.name}》（${past.runeSymbol} ${past.runeName}）
在探討「${qClean}」的起源時，過往《${past.name}》所帶來的「${past.keywords[0]}」為你奠定了不可磨滅的基石。${past.positionContext?.past || past.interpretation} 這段因緣既是你的底氣，但也可能形成了你今日下意識的思維慣性。

三、✦【當前考驗 · 關鍵試煉】《${present.name}》（${present.runeSymbol} ${present.runeName}）
針對這件事當下最急迫的突破點，正是《${present.name}》所象徵的「${present.keywords[0]}」試煉！
神諭明確指示你目前該做的核心行動是：『${present.actionAdvice}』。
同時切記避開致命陷阱：『${present.cautionWarning}』。

四、✦【命運曙光 · 最終破局】《${future.name}》（${future.runeSymbol} ${future.runeName}）
只要你依照當前的啟示踏實落實，關於「${qClean}」的最終結局將迎來《${future.name}》的輝煌加冕！
此牌宣告著「${future.keywords[0]}」與「${future.keywords[1] || '光明新生'}」的到來。${future.positionContext?.future || future.interpretation}

※ 總結祝禱：命運之門已為你推開。面對「${qClean}」，請放下恐懼與猶豫，帶著《${future.name}》的勇氣邁向屬於你的破曉。`;
  }

  return `針對【${qClean}】之祈願，神諭已完整顯現。靜心對照牌面啟示，心燈自明。`;
}

/**
 * Formats full oracle result for clipboard copying (封存神諭)
 */
export function formatOracleExportText(
  question: string,
  drawnCards: DrawnCard[],
  spreadType: SpreadType,
  aiReading?: string
): string {
  const timeStr = new Date().toLocaleString('zh-TW', { hour12: false });
  const spreadTitle = spreadType === 'three' ? '三女神牌陣 · 時光之流（3 張牌）' : '單張神諭 · 即刻啟示（1 張牌）';
  const qClean = question.trim() || '未設文字祈願（心中專注意念）';

  let output = `╔═══════════════════════════════════════════════╗\n`;
  output += `   🔮【西方奇幻神諭問事 · 命運封存真跡書卷】\n`;
  output += `╚═══════════════════════════════════════════════╝\n`;
  output += `📅 占卜時間：${timeStr}\n`;
  output += `📜 祈願求問：【${qClean}】\n`;
  output += `🌌 降臨法陣：${spreadTitle}\n`;
  output += `🃏 總卡牌庫：52 張西方奇幻大奧秘全典\n\n`;

  drawnCards.forEach((item, index) => {
    const card = item.card;
    const posLabel =
      item.position === 'past'
        ? '【過去之影 · 根基前因】'
        : item.position === 'present'
        ? '【當前考驗 · 核心試煉】'
        : item.position === 'future'
        ? '【命運曙光 · 未來破局】'
        : '【核心神諭】';

    output += `───────────────────────────────────────────────\n`;
    output += `${index + 1}. ${posLabel}\n`;
    output += `牌名：第 ${card.number} 號 · ${card.name}（${card.nameEn}）\n`;
    output += `盧恩符文：${card.runeSymbol} ${card.runeName} ｜ 元素：${card.elementLabel}\n`;
    output += `核心意象：${card.keywords.join(' · ')}\n\n`;
    output += `【神諭啟示詩 (Oracle Verse)】\n`;
    card.verse.forEach((line) => {
      output += `  「${line}」\n`;
    });
    output += `\n【深層奧秘解讀】\n${card.interpretation}\n\n`;
    output += `【行動指引 (Action)】\n${card.actionAdvice}\n\n`;
    output += `【命運警語 (Caution)】\n${card.cautionWarning}\n\n`;
  });

  output += `═══════════════════════════════════════════════\n`;
  output += `【針對問題之神諭總結回答】\n\n`;
  output += generateOracleReadingSummary(question, drawnCards) + `\n\n`;

  if (aiReading) {
    output += `═══════════════════════════════════════════════\n`;
    output += `【大賢者高階神諭深層靈性共鳴 (AI 深度解析)】\n\n`;
    output += aiReading + `\n\n`;
  }

  output += `═══════════════════════════════════════════════\n`;
  output += `※ 願神諭星火常伴，無畏前行。命運之輪常轉，智者自掌長風。\n`;

  return output;
}
