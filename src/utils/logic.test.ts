import test from 'node:test';
import assert from 'node:assert/strict';
import {
  shuffleCards,
  prepareDrawnCards,
  isAllCardsRevealed,
  analyzeQuestionIntent,
  generateOracleReadingSummary,
  formatOracleExportText
} from './logic';
import { ORACLE_CARDS } from '../data/cards';

test('dataset contains exactly 52 unique oracle cards', () => {
  assert.equal(ORACLE_CARDS.length, 52);
  const ids = new Set(ORACLE_CARDS.map(c => c.id));
  assert.equal(ids.size, 52);
  const numbers = new Set(ORACLE_CARDS.map(c => c.number));
  assert.equal(numbers.size, 52);
});

test('analyzeQuestionIntent detects domain categories accurately', () => {
  const career = analyzeQuestionIntent('我該換工作還是繼續在這家公司升遷？');
  assert.equal(career.category, 'career');

  const love = analyzeQuestionIntent('這段感情還有挽回復合的可能嗎？');
  assert.equal(love.category, 'relationship');

  const choice = analyzeQuestionIntent('我現在非常迷茫，不知道該走哪條路？');
  assert.equal(choice.category, 'choice');

  const trial = analyzeQuestionIntent('遇到了嚴重的瓶頸和挫折，如何破局？');
  assert.equal(trial.category, 'trial');
});

test('generateOracleReadingSummary deeply targets specific question', () => {
  const drawn = prepareDrawnCards(ORACLE_CARDS, 'three');
  const userQ = '我該如何突破目前創業的瓶頸？';
  const summary = generateOracleReadingSummary(userQ, drawn);

  assert.match(summary, /我該如何突破目前創業的瓶頸？/);
  assert.match(summary, /神諭總斷 · 直擊核心/);
  assert.match(summary, /過去之影 · 因緣根基/);
  assert.match(summary, /當前考驗 · 關鍵試煉/);
  assert.match(summary, /命運曙光 · 最終破局/);
});

test('formatOracleExportText formats 52 cards scroll with AI reading if present', () => {
  const drawn = prepareDrawnCards(ORACLE_CARDS, 'single');
  const userQ = '下半年運勢如何？';
  const aiChanneling = '大賢者低語：星軌正朝著你的命盤匯聚，無須憂慮。';
  const scroll = formatOracleExportText(userQ, drawn, 'single', aiChanneling);

  assert.match(scroll, /52 張西方奇幻大奧秘全典/);
  assert.match(scroll, /下半年運勢如何？/);
  assert.match(scroll, /大賢者高階神諭深層靈性共鳴/);
  assert.match(scroll, /大賢者低語/);
});
