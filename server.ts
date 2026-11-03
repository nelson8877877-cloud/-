import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;
  app.use(express.json());

  // Dedicated API endpoint for question-targeted high priestess oracle reading
  app.post('/api/oracle/read', async (req, res) => {
    const { question, spreadType, drawnCards } = req.body;
    const q = question && question.trim() ? question.trim() : '當下命運指引與心靈抉擇';

    const primaryCard = drawnCards?.[0]?.card;
    const trialCard = drawnCards?.[1]?.card || primaryCard;
    const dawnCard = drawnCards?.[2]?.card || primaryCard;

    const priestessReading = `✦【高階神諭大祭司 · 命運親啟書簡】✦
針對求問者所繫之疑：「${q}」

一、✦【神諭直斷 · 直擊核心】
在星穹神諭的凝視下，你所求問的「${q}」，其癥結從不在於外在運氣之短缺，而在於能量轉化之節點。神諭降下《${primaryCard?.name || '命運神印'}》，昭示著這件事的本質乃是一場關乎「${(primaryCard?.keywords || ['突破', '覺醒']).join('、')}」的破局之役。

二、✦【牌陣時光解碼 · 癥結剖析】
• 過往因緣：《${primaryCard?.name}》為此局面埋下了深厚的前因，提醒你莫忘當初為何啟程；
• 當下試煉：眼前最棘手的關鍵在於《${trialCard?.name}》所帶來的磨礪——『${trialCard?.actionAdvice || '穩固陣腳'}』；
• 命運曙光：只要依照神諭指引破局，《${dawnCard?.name}》所宣告的轉機與豐收必將加冕於你。

三、✦【命運破局策略 · 行動指引】
面對「${q}」，切莫被動等待。第一步：立即梳理當前最核心的關鍵要務，斬斷耗散心神的細枝末節；第二步：貫徹『${trialCard?.actionAdvice || '依道而行'}』之教誨，主動建立清晰邊界。

四、✦【命運警語 · 盲點防範】
神諭嚴肅提醒：『${trialCard?.cautionWarning || '切忌急功近利，防範心魔反噬。'}』。
持守清明，命運之錨始終握於智者之手。`;

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      const hasValidApiKey = Boolean(apiKey && apiKey !== 'MY_GEMINI_API_KEY' && apiKey.length > 5);

      if (hasValidApiKey) {
        const ai = new GoogleGenAI({
          apiKey: apiKey,
          httpOptions: {
            headers: {
              'User-Agent': 'aistudio-build',
            },
          },
        });

        const cardDescriptions = (drawnCards || []).map((item: any, idx: number) => {
          const c = item.card;
          const pos =
            item.position === 'past'
              ? '過去之影（根基因緣）'
              : item.position === 'present'
              ? '當前考驗（核心試煉）'
              : item.position === 'future'
              ? '命運曙光（最終破局）'
              : '核心神諭';
          return `【第 ${idx + 1} 張牌 · ${pos}】
- 牌名：第 ${c.number} 號《${c.name}》（${c.nameEn}）
- 符文：${c.runeSymbol} ${c.runeName} ｜ 元素：${c.elementLabel}
- 核心意象：${(c.keywords || []).join('、')}
- 神諭啟示詩：${(c.verse || []).join(' / ')}
- 牌義精要：${c.interpretation}
- 行動建議：${c.actionAdvice}
- 命運警語：${c.cautionWarning}`;
        }).join('\n\n');

        const systemPrompt = `你是一位精通西方奇幻命運神諭、符文秘術與心靈智慧的高階大祭司（High Oracle Priestess）。
提問者虔誠立誓，帶著自己最真實的困惑前來尋求啟示。

【提問者所繫求問的具體問題】：
「${q}」

【神諭法陣降臨之牌】：
${cardDescriptions}

【回覆最高指導原則】：
1. 你的解析「必須高度聚焦並正面回答提問者的具體問題『${q}』」，嚴禁泛泛而談或給予模稜兩可的萬能套話。
2. 結合牌陣的因果脈絡（過往根基、當下試煉、未來曙光）或核心單牌，層層剖析這個問題的本質。
3. 語氣兼具西方奇幻史詩感（莊重、深邃、神聖、溫暖）與現代實踐指導性（具體、落地、可執行）。
4. 請使用流暢繁體中文，並以清晰的四個章節條列呈現：
   一、✦【神諭直斷 · 直擊核心】（開門見山給出針對該問題的定論與本質判斷）
   二、✦【牌陣時光解碼 · 癥結剖析】（將每張牌與該問題緊密扣合解析）
   三、✦【命運破局策略 · 行動指引】（具體指出提問者面對此問題該做什麼、第一步如何邁出）
   四、✦【命運警語 · 盲點防範】（嚴肅提醒提問者在該問題中最容易犯的盲目之處）`;

        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: systemPrompt,
          config: {
            abortSignal: AbortSignal.timeout(6000),
          },
        });

        const text = response.text || '';
        if (text.trim().length > 0) {
          return res.json({ reading: text });
        }
      }

      return res.json({ reading: priestessReading });
    } catch (error: any) {
      console.warn('Gemini upstream notice, providing priestess reading fallback:', error?.message);
      // Fallback gracefully so seeker gets bespoke structured reading every single time!
      return res.json({ reading: priestessReading, fallbackNotice: true });
    }
  });

  // Development vs Production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🔮 Western Fantasy Oracle Server running on port ${PORT}`);
  });
}

startServer();
