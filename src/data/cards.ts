import { OracleCard } from '../types/oracle';

export const ORACLE_CARDS: OracleCard[] = [
  // --- 第 I 循環：太虛與星界宮（Aether & Astral，1~13） ---
  {
    id: 'world-tree',
    number: 1,
    name: '世界之樹',
    nameEn: 'Yggdrasil the World Tree',
    element: 'Earth',
    elementLabel: '地象大地',
    runeSymbol: 'ᚠ',
    runeName: 'Fehu · 根基與豐饒',
    themeColor: '#10b981',
    keywords: ['深層根基', '生生不息', '宏觀連結', '穩健繁榮'],
    verse: [
      '萬物之根汲取太初甘露，',
      '千載枝椏擎起星穹之帷。',
      '莫畏風暴摧折青翠嫩葉，',
      '磐石深處，誓言已化為巍峨。'
    ],
    interpretation: '世界之樹代表長久的生命力、堅固的根基與不可動搖的內在秩序。此牌昭示著你所關注之事具有深遠的發展潛力，需要耐心紮根，而非急於求成。',
    actionAdvice: '回歸根本與本質，先穩固現有的核心資源與人脈，將目光放眼長遠的三年乃至十年格局。',
    cautionWarning: '警惕過於固執保守、拒絕修剪枯枝，唯有適度去蕪存菁，生命之樹方能孕育新果。',
    positionContext: {
      past: '過去積累的紮實功底與善意因緣，如今正成為你最堅強的護盾。',
      present: '眼前最關鍵的是穩住陣腳，向下紮根遠比向上盲目擴張更加迫切。',
      future: '堅持正道耕耘者，必將迎來如參天巨木般的開花結果與眾人蔭庇。',
      single: '這是一張象徵穩健與豐裕的大吉之牌，信任你內心深植的信念。'
    }
  },
  {
    id: 'celestial-sage',
    number: 2,
    name: '星象賢者',
    nameEn: 'The Celestial Sage',
    element: 'Aether',
    elementLabel: '星辰太虛',
    runeSymbol: 'ᚨ',
    runeName: 'Ansuz · 智慧與洞見',
    themeColor: '#6366f1',
    keywords: ['真理洞察', '冷靜沉思', '高維視角', '知識指引'],
    verse: [
      '黃道星軌鐫刻命運軌道，',
      '銀色星盤推演亙古迷津。',
      '閉上雙眸方見真實之光，',
      '混亂迷霧中，智慧自明。'
    ],
    interpretation: '星象賢者象徵超越眼前局限的高維智慧與洞察力。它提醒你跳出情緒的迷霧，以冷靜、客觀的星象觀測者之眼審視當前的處境。',
    actionAdvice: '蒐集客觀訊息，向值得信賴的導師或典籍尋求啟迪，切忌在激動中草率做出決定。',
    cautionWarning: '勿讓過度理性淪為孤僻與清高，若一味停留在理論推演中，將錯失真實世界的溫度。',
    positionContext: {
      past: '某段深刻的沉思或導師指引曾帶領你避開暗礁，那份智慧仍刻在心頭。',
      present: '此時此刻需要絕對的冷靜分析，撥開迷霧，事物的真相早已浮現。',
      future: '清晰的啟蒙即將到來，你將徹底參透困惑已久的因果脈絡。',
      single: '以智者的沉著凝視命運，答案不在外界喧囂，而在你的冷靜推演之中。'
    }
  },
  {
    id: 'fate-weave',
    number: 3,
    name: '命運織網',
    nameEn: 'The Weave of Fate',
    element: 'Aether',
    elementLabel: '天命星緯',
    runeSymbol: 'ᛈ',
    runeName: 'Perthro · 奇機與機緣',
    themeColor: '#ec4899',
    keywords: ['因果交錯', '偶然必然', '轉捩機遇', '順應大勢'],
    verse: [
      '銀梭穿越三生時光緯線，',
      '每一次相遇皆非無因之巧。',
      '莫怨絲線偶爾繁複糾結，',
      '宏大織錦早已鋪展如畫。'
    ],
    interpretation: '命運織網揭示出看不見的因果連繫。你現在所經歷的每一件偶然事件，都是推動你前往下一階段不可或缺的絲線。',
    actionAdvice: '敏銳觀察生活中的同步性巧合（天時地利），順應命運的浪潮而動，學會借力使力。',
    cautionWarning: '勿落入宿命論的被動消極，命運織機提供經線，手中的緯線依然由你的選擇親手編織。',
    positionContext: {
      past: '某些看似隨機的相遇或變故，其實在冥冥之中鋪就了今天的道路。',
      present: '牽一髮而動全身，你所做的微小抉擇正引動連鎖命運反應。',
      future: '意料之外的貴人或驚喜轉折即將介入，局面將迎來柳暗花明。',
      single: '這是一張代表天賜良機的玄妙之牌，保持開放的心，迎接即將到來的命運轉捩點。'
    }
  },
  {
    id: 'portal-mysteries',
    number: 4,
    name: '秘境之門',
    nameEn: 'The Portal of Mysteries',
    element: 'Aether',
    elementLabel: '時空裂隙',
    runeSymbol: 'ᛖ',
    runeName: 'Ehwaz · 跨越旅途',
    themeColor: '#3b82f6',
    keywords: ['全新篇章', '跨越門檻', '未知挑戰', '擴展邊界'],
    verse: [
      '青銅門環雕琢遠古符印，',
      '門扉半掩透出異界清風。',
      '跨出一步即告別舊日藩籬，',
      '未載地圖，方能遇見無垠星海。'
    ],
    interpretation: '秘境之門代表生命即將翻入全新篇章。舊的世界已經無法再容納你的成長，門的那一頭充滿未知與奇遇，唯有跨越門檻才能見證。',
    actionAdvice: '勇敢接下新的任務或接受新的環境挑戰，向舊習慣與舒適圈從容告別。',
    cautionWarning: '出發前務必確認必要行李與安全繩，勇氣不等於盲目冒險，需做好周全防範。',
    positionContext: {
      past: '昔日的某次大膽啟程改變了你的人生軌跡，那份開拓精神依舊在血脈中湧動。',
      present: '站在人生的分水嶺前，回頭路已無意義，向前跨出一步才是解法。',
      future: '更寬廣的舞台即將向你敞開，異地的經歷與新領域將帶來驚人豐收。',
      single: '門已為你推開，莫在門檻前徘徊。跨過去，新的史詩正等待你的書寫。'
    }
  },
  {
    id: 'hourglass-chronos',
    number: 5,
    name: '時之沙漏',
    nameEn: 'The Hourglass of Chronos',
    element: 'Aether',
    elementLabel: '時間秘流',
    runeSymbol: 'ᛃ',
    runeName: 'Jera · 時節與豐收',
    themeColor: '#ca8a04',
    keywords: ['時機成熟', '循序漸進', '耐心醞釀', '歷史循環'],
    verse: [
      '金沙無聲穿過窄口之隙，',
      '每一粒皆是不可追的光陰。',
      '春播秋收自有神明定序，',
      '急躁翻轉，唯有空留嘆息。'
    ],
    interpretation: '時之沙漏象徵不可逆的時間法則與萬物成熟的節奏。提醒你有些事情不能操之過急，給予種子發芽的時間，靜待天時合一。',
    actionAdvice: '制定切實的時間表，專注於每日的規律積累，信任時間的複利力量。',
    cautionWarning: '警惕拖延成習，珍惜轉瞬即逝的窗口期，時間既是盟友也是最嚴格的裁判。',
    positionContext: {
      past: '過去一段長期的等待如今正在發酵，成果初露端倪。',
      present: '正處於沙漏漏下的關鍵倒數期，保持定力，不可中途放棄。',
      future: '時間將站在你這一邊，水到渠成之日，所有付出皆有答覆。',
      single: '掌握節奏者掌握命運，靜心等待最佳時刻，莫被焦慮催逼。'
    }
  },
  {
    id: 'aurora-veil',
    number: 6,
    name: '極光天幕',
    nameEn: 'The Aurora Veil',
    element: 'Aether',
    elementLabel: '極地靈光',
    runeSymbol: 'ᛞ',
    runeName: 'Dagaz · 破曉黎明',
    themeColor: '#2dd4bf',
    keywords: ['天啟異象', '心靈昇華', '超然絕美', '啟蒙之光'],
    verse: [
      '翡翠碧波於寒夜絕頂翻湧，',
      '非凡俗之手所能描繪之錦。',
      '抬頭仰望無垠蒼穹之舞，',
      '靈魂枷鎖隨之消融無蹤。'
    ],
    interpretation: '極光天幕象徵罕見的天啟與心靈覺醒。當此牌降臨，意味著你將獲得前所未見的澄澈視野，看見困局背後更高層次的意義。',
    actionAdvice: '給自己安排一段靜心與大自然獨處的時光，讓受壓抑的想像力徹底舒展。',
    cautionWarning: '莫沈溺於虛無飄渺的美夢幻覺，靈感必須落實於腳下大地。',
    positionContext: {
      past: '曾有一場震撼心靈的體悟，重新塑造了你的人生世界觀。',
      present: '靈感與奇思妙想正在大腦中湧現，務必捕捉這些稍縱即逝的光芒。',
      future: '你將突破長久以來的思維盲區，體驗到宛若重獲新生般的通透。',
      single: '敞開胸懷接納這份天賜靈光，它將照亮你靈魂最深處的渴望。'
    }
  },
  {
    id: 'prophetic-crystal',
    number: 7,
    name: '預言水晶',
    nameEn: 'The Prophetic Crystal',
    element: 'Aether',
    elementLabel: '明鏡晶樞',
    runeSymbol: 'ᛁ',
    runeName: 'Isa · 靜謐凝思',
    themeColor: '#a78bfa',
    keywords: ['洞察未來', '清晰投射', '純粹心鏡', '直覺預知'],
    verse: [
      '稜柱折射三界因果倒影，',
      '無塵心鏡方映未來之形。',
      '莫向外求繁複萬千言語，',
      '晶瑩剔透處，真相已然分明。'
    ],
    interpretation: '預言水晶象徵看清局勢演變趨勢的清明判斷。摒除偏見與成見，事件發展的必然脈絡早已清晰可見。',
    actionAdvice: '列出所有可能的事態發展，做最周全的沙盤推演，信任你冷靜時的第一判斷。',
    cautionWarning: '警惕過度自負於自己的預測，忽視了突發變數的可能。',
    positionContext: {
      past: '你早先的預判已被證明精確無誤，為現在爭取到了寶貴優勢。',
      present: '拋棄情緒化的預設立場，以透明客觀的角度審查各方數據與行為。',
      future: '局勢將完全按照你的遠見展開，做好接管主導權的準備。',
      single: '鏡不染塵，水清見底。澄淨心念，未來對你而言毫無秘密。'
    }
  },
  {
    id: 'ouroboros-ring',
    number: 8,
    name: '永恆銜尾蛇',
    nameEn: 'The Ouroboros Ring',
    element: 'Aether',
    elementLabel: '無盡之環',
    runeSymbol: 'ᛟ',
    runeName: 'Othala · 傳承與圓滿',
    themeColor: '#14b8a6',
    keywords: ['循環往復', '因果圓滿', '終即是始', '整全智慧'],
    verse: [
      '巨蟒自銜其尾首尾相連，',
      '生死流轉化為無盡金環。',
      '莫為逝去之殘局哀泣歎惜，',
      '終點之處，正是新生之門。'
    ],
    interpretation: '銜尾蛇象徵生命週期的圓滿完成與新循環的開始。一件事正在畫上句點，這不是終結，而是為了騰出空間迎接更完整的升級。',
    actionAdvice: '優雅地完成最後的收尾交接工作，原諒過去的人事物，了結未清償的因果。',
    cautionWarning: '避免陷入重複犯錯的原地打轉怪圈，若不從教訓中領悟，命運將重複相同的試煉。',
    positionContext: {
      past: '一個重大的生命階段已經圓滿落幕，成為你人格基石的一部分。',
      present: '正處於新舊週期的交界節點，做好告別舊篇章的心理建設。',
      future: '新的輪迴將以更高維度的姿態重新展開，收穫前所未有的成熟。',
      single: '圓滿完成，善始善終。抱著感激之心完成結尾，迎接全新的天命。'
    }
  },
  {
    id: 'astral-galleon',
    number: 9,
    name: '幽冥星艦',
    nameEn: 'The Astral Galleon',
    element: 'Aether',
    elementLabel: '星海方舟',
    runeSymbol: 'ᚱ',
    runeName: 'Raidho · 遠航長征',
    themeColor: '#818cf8',
    keywords: ['遠航探索', '跨界征途', '宏大願景', '星海拓荒'],
    verse: [
      '銀帆飽吸以太星風烈浪，',
      '龍骨斬裂暗夜星雲殘光。',
      '故土港灣縱有溫柔眷戀，',
      '真英雄當在星海中啟航。'
    ],
    interpretation: '幽冥星艦象徵宏大的事業遠征或重大的轉移。它召喚你擺脫狹隘的地方視野，投身於更浩瀚的市場、領域或人生征途。',
    actionAdvice: '將你的目標放大十倍，尋找志同道合的探險隊友，備齊補給，準備遠航。',
    cautionWarning: '長途跋涉需防範內耗與思鄉怯懦，切忌在半途中因孤獨而折返。',
    positionContext: {
      past: '昔日的遠方經歷拓寬了你的眼界，讓你不再滿足於偏安一隅。',
      present: '啟航的號角已經吹響，岸上的瑣事不值得你繼續耗費精力。',
      future: '你將在未知的星海中建立屬於自己的新領地，開創傳奇。',
      single: '揚起星帆，無畏前行！星辰大海正等待你的征服與探索。'
    }
  },
  {
    id: 'crown-of-stars',
    number: 10,
    name: '眾星冠冕',
    nameEn: 'The Crown of Stars',
    element: 'Aether',
    elementLabel: '天頂榮光',
    runeSymbol: 'ᛏ',
    runeName: 'Tiwaz · 榮譽桂冠',
    themeColor: '#fbbf24',
    keywords: ['天命加冕', '登峰造極', '無上權威', '領袖擔當'],
    verse: [
      '十二星辰鍛鑄黃金皇冠，',
      '唯受天命者方得加冕承擔。',
      '欲戴王冠必承其重如岳，',
      '照耀眾生，方為不朽君王。'
    ],
    interpretation: '眾星冠冕象徵卓越成就、權力交託與領導地位的確立。眾人正期待你站出來主持大局，承擔起更大的責任與榮耀。',
    actionAdvice: '挺起胸膛接受領導角色，以身作則，以公正與仁慈凝聚團隊心智。',
    cautionWarning: '警惕權力的傲慢與獨斷專行，王座之下深淵常在，切勿失去謙遜的敬畏心。',
    positionContext: {
      past: '過去的卓越表現與無私擔當，為你贏得了眾人的絕對信服與擁戴。',
      present: '責任已降臨你的肩頭，不要退縮避讓，此時非你莫屬。',
      future: '你將迎來事業或生涯的最巔峰時刻，獲得同行與世人的崇高敬重。',
      single: '王冠在前，榮耀與責任並存。展現你的王者氣度，引領眾人前行。'
    }
  },
  {
    id: 'singularity-eye',
    number: 11,
    name: '奇異點之眼',
    nameEn: 'The Eye of Singularity',
    element: 'Void',
    elementLabel: '極點黑洞',
    runeSymbol: 'ᚦ',
    runeName: 'Thurisaz · 極致凝縮',
    themeColor: '#9333ea',
    keywords: ['極限聚焦', '引力核心', '劇變臨界', '扭轉乾坤'],
    verse: [
      '萬丈星光在此坍縮為一點，',
      '時空邊界盡皆俯首彎曲。',
      '將全副力量凝聚於鋒芒，',
      '一點破面，乾坤為之改觀。'
    ],
    interpretation: '奇異點之眼代表將全部精神、資源高度聚焦於單一關鍵點上的爆發力。分散精力將一事無成，唯有集中一切力量，才能擊穿最頑固的壁壘。',
    actionAdvice: '果斷砍掉百分之八十無關緊要的瑣碎雜務，只留下最核心的那一擊，全力以赴。',
    cautionWarning: '極致的聚焦需防範執迷不悟造成視野盲區，注意身心承受的極限負荷。',
    positionContext: {
      past: '曾有一刻破釜沉舟的集中發力，幫你扭轉了原本必敗的劣局。',
      present: '散漫將導致失敗，立即集中全副火力主攻那個唯一的破局突破口。',
      future: '這股高度凝聚的能量將引發連鎖反應，催生不可阻擋的巨大質變。',
      single: '專注！專注！再專注！將你的全部意念凝成雷霆一點，無物可擋。'
    }
  },
  {
    id: 'dream-weaver',
    number: 12,
    name: '幻夜紡織者',
    nameEn: 'The Weaver of Dreams',
    element: 'Aether',
    elementLabel: '夢境緯線',
    runeSymbol: 'ᛈ',
    runeName: 'Perthro · 潛意識之織',
    themeColor: '#c084fc',
    keywords: ['夢境預兆', '潛意識顯化', '心想事成', '意念重塑'],
    verse: [
      '紡車搖動織出億萬夢境，',
      '睡夢中的呢喃化作明日晨光。',
      '若你心中未曾先見其形，',
      '現實荒野何以綻放奇花？'
    ],
    interpretation: '幻夜紡織者象徵心理顯化法與潛意識的塑造力量。外在世界只是你內在深層信念的投射，若要改變現狀，必須先從重塑你對自我的信念開始。',
    actionAdvice: '每日早晚花十分鐘清晰觀想理想結局的細節與感受，淨化負面自我懷疑的低語。',
    cautionWarning: '警惕逃避到幻想白日夢中而拒絕落地實幹，信念必須與行動結合成雙翼。',
    positionContext: {
      past: '某個長久以來堅持的內心願景，如今正在物質世界中逐一顯化成形。',
      present: '檢查你當下的隱藏信念：你是否真真正正相信自己配得上成功？',
      future: '所思即所見，你播下的美好願景將以超乎預期的瑰麗方式綻放於現實。',
      single: '相信你的內心藍圖，潛意識的神工巧匠正在為你織造光明的未來。'
    }
  },
  {
    id: 'genesis-nebula',
    number: 13,
    name: '創世星雲',
    nameEn: 'The Genesis Nebula',
    element: 'Aether',
    elementLabel: '太初孕育',
    runeSymbol: 'ᛜ',
    runeName: 'Ingwaz · 胚胎種子',
    themeColor: '#f472b6',
    keywords: ['無限可能', '初生萌芽', '原初生機', '原創發源'],
    verse: [
      '七彩星塵在混沌深處旋轉，',
      '億萬恆星即將從中引燃。',
      '莫因初生微渺而心生疑慮，',
      '整座宇宙曾皆居於此卵。'
    ],
    interpretation: '創世星雲象徵全新事物的初生與無限可能的原胚期。現在的計畫或想法或許還稚嫩，但它蘊含著孕育出整座星系的龐大潛力。',
    actionAdvice: '用心呵護這個剛萌芽的新想法，不要讓外界冷水熄滅了這團初生之火，盡情嘗試。',
    cautionWarning: '初生階段極為脆弱，避免過早向不理解的人炫耀或過度招搖引起嫉妒。',
    positionContext: {
      past: '某個曾經微不足道的嘗試，現在已成長為支撐你的龐大骨幹。',
      present: '正處於最佳的孕育起步期，大膽嘗試各種全新可能性，不設邊界。',
      future: '這個看似微小的起點將演化為改變行業或格局的壯麗篇章。',
      single: '一切偉大皆始於微渺。滿懷敬畏地啟動它，星辰皆為你祝福。'
    }
  },

  // --- 第 II 循環：烈焰與聖光宮（Fire & Light，14~26） ---
  {
    id: 'dawn-blade',
    number: 14,
    name: '破曉聖劍',
    nameEn: 'The Dawn Blade',
    element: 'Fire',
    elementLabel: '正義聖火',
    runeSymbol: 'ᛏ',
    runeName: 'Tiwaz · 勝利與勇氣',
    themeColor: '#eab308',
    keywords: ['果斷決策', '斬斷糾纏', '正義勝利', '破曉曙光'],
    verse: [
      '破曉第一縷金芒淬礪寒鋒，',
      '萬千暗影在銳芒前潰退。',
      '猶豫只會徒增枷鎖重量，',
      '揮刃之刻，即是命運分曉之時。'
    ],
    interpretation: '破曉聖劍象徵俐落的決斷與無畏的勇氣。代表在曖昧不清的局勢中，唯有一刀斬斷藕斷絲連的拖延，才能迎來清明的破曉。',
    actionAdvice: '停止猶豫不決，立即為拖延已久的事情劃下明確界線，堅定表明你的立場。',
    cautionWarning: '鋒刃無情，切記過剛易折；斬斷問題時須講求精準，莫盲目傷及無辜的同伴。',
    positionContext: {
      past: '過去曾做出的某個果敢抉擇，為你贏得了當下難能可貴的主導權。',
      present: '不能再有絲毫退縮與妥協，拿出勇氣做出那個你心知肚明的裁斷。',
      future: '烏雲散盡，破曉的榮耀之光將加冕於堅持正道與原則的勇者身上。',
      single: '堅決行動！聖劍已出鞘，凡合乎正義與誠信者，此戰必克。'
    }
  },
  {
    id: 'evernight-beacon',
    number: 15,
    name: '永夜燈塔',
    nameEn: 'The Evernight Beacon',
    element: 'Fire',
    elementLabel: '守望孤火',
    runeSymbol: 'ᛋ',
    runeName: 'Sowilo · 永恆導引',
    themeColor: '#f97316',
    keywords: ['希望燈火', '孤獨守候', '遠航錨點', '守望信標'],
    verse: [
      '狂瀾怒濤拍擊玄武峭壁，',
      '孤塔絕頂恆亮熾熱光明。',
      '任憑黑夜無邊亦無涯，',
      '迷途水手終見歸航之港。'
    ],
    interpretation: '永夜燈塔象徵即使在最孤立無援的暗夜，依然存在不滅的指引與道德準繩。它是一面鏡子，提醒你成為自己的燈塔，甚至成為他人的避風港。',
    actionAdvice: '堅定核心初心與價值觀，不被周遭的悲觀與浮躁情緒動搖，做那個給予團隊信心的人。',
    cautionWarning: '長時間扮演給予者容易導致內在能量枯竭，切記給自己的心靈添加燃料與休息。',
    positionContext: {
      past: '曾有一位良師益友或堅定信仰陪你度過了最晦暗的艱難時期。',
      present: '你是焦點與頂樑柱，保持定力，所有人都正看著你的態度與指示。',
      future: '你將在動盪中找到無比清晰的方向，長途跋涉的孤獨將迎來值得的彼岸。',
      single: '黑夜雖長，信標猶在。守住這份純粹的希望，光明已在海平面升起。'
    }
  },
  {
    id: 'alchemical-crucible',
    number: 16,
    name: '鍊金魔釜',
    nameEn: 'The Alchemical Crucible',
    element: 'Fire',
    elementLabel: '秘術烈焰',
    runeSymbol: 'ᛜ',
    runeName: 'Ingwaz · 沉澱孕育',
    themeColor: '#8b5cf6',
    keywords: ['轉化淬煉', '痛苦昇華', '耐心等待', '內在提純'],
    verse: [
      '凡俗鉛錫投入滾燙熔爐，',
      '經受地火重塑本質之形。',
      '莫懼熱焰焚炙筋骨之苦，',
      '灰燼散去，赫然純金生輝。'
    ],
    interpretation: '鍊金魔釜是靈魂與情勢的大轉化之所。它預示著你正在經歷或需要經歷一場深刻的「提純」，將過去的挫敗與雜質燒盡，化為純金般的能力與資產。',
    actionAdvice: '接納當前的磨礪與不適感，停止抱怨環境，將其視為不可多得的修煉機會。',
    cautionWarning: '切勿在火候未足時急躁開鍋，急功近利只會得到殘破半成品，尊重發酵的自然節奏。',
    positionContext: {
      past: '曾歷經艱難重組或心靈磨難，那些傷痕如今都成了你的堅韌勳章。',
      present: '正處於熔爐煉金的關鍵時刻，堅持住，雜質正在被迅速剝離。',
      future: '經歷這場心智重塑，你將具備無可替代的專業高度與通透氣度。',
      single: '這是一張象徵由苦轉甘的鍊金之牌，淬煉即將完成，純金光芒指日可待。'
    }
  },
  {
    id: 'solar-phoenix',
    number: 17,
    name: '耀陽鳳凰',
    nameEn: 'The Solar Phoenix',
    element: 'Fire',
    elementLabel: '重生陽光',
    runeSymbol: 'ᛞ',
    runeName: 'Dagaz · 破曉黎明',
    themeColor: '#ea580c',
    keywords: ['鳳凰重生', '向死而生', '燃盡舊我', '極盛重現'],
    verse: [
      '烈焰焚身化為燦金微粒，',
      '灰燼餘溫孕育嘹亮啼鳴。',
      '舊我若不死去，新光何以誕生？',
      '燃盡虛妄，振翅重凌萬重雲天！'
    ],
    interpretation: '耀陽鳳凰象徵最極致的重生與復興。凡是無法擊垮你的，必將在此刻轉化為璀璨的羽翼。舊有的模式必須徹底結束，才能騰出空間迎來更壯麗的盛宴。',
    actionAdvice: '痛快放手已經衰朽的過往，別留戀殘磚碎瓦，全力以赴迎接全新的自我與賽道。',
    cautionWarning: '重生需要徹底的割捨，若一手抓著舊包袱不放，只會被餘燼燙傷。',
    positionContext: {
      past: '你曾跌入人生的低谷谷底，但那次重創賦予了你今日旁人難以比擬的韌性。',
      present: '正處於破繭而出的陣痛末期，最艱難的時刻已經熬過，展翅就在眼前。',
      future: '前所未有的輝煌重生即將到來，你將以驚艷全場的姿態重新站上焦點。',
      single: '這是一張象徵徹底翻盤的大吉牌！燃盡灰燼，迎接無與倫比的新生與光華。'
    }
  },
  {
    id: 'divine-forge',
    number: 18,
    name: '鍛造神錘',
    nameEn: 'The Divine Forge',
    element: 'Fire',
    elementLabel: '匠神鐵砧',
    runeSymbol: 'ᚢ',
    runeName: 'Uruz · 鋼鐵意志',
    themeColor: '#f59e0b',
    keywords: ['千錘百煉', '工匠精神', '實力鑄造', '硬核基本功'],
    verse: [
      '火星四濺映照黝黑臂膀，',
      '巨錘百擊方成不破之甲。',
      '天下無不可破之浮華，',
      '唯有真金百煉，屹立千秋。'
    ],
    interpretation: '鍛造神錘代表踏踏實實、毫無水分的硬實力鑄造。沒有捷徑可走，唯有一錘一錘扎實地鍛打技術與產品，才能打造出經得起嚴苛檢驗的傳世之作。',
    actionAdvice: '沉下心來打磨產品細節與專業基本功，拒絕浮誇宣傳，用無可挑剔的品質說話。',
    cautionWarning: '警惕盲目蠻幹忽視設計圖紙，方向錯誤的苦幹只會造成資源浪費。',
    positionContext: {
      past: '長期的扎實訓練與專業積累，為你打造了一身刀槍不入的本事。',
      present: '現在正是吃苦流汗的鍛造期，每一次壓力都是在提升你的硬度。',
      future: '無可爭議的硬核成果將令質疑者徹底啞口無言，確立江湖地位。',
      single: '錘鍊自我，打造神兵。唯有真功夫方能無堅不摧。'
    }
  },
  {
    id: 'solar-chariot',
    number: 19,
    name: '烈陽戰車',
    nameEn: 'The Solar Chariot',
    element: 'Fire',
    elementLabel: '天火馳騁',
    runeSymbol: 'ᚱ',
    runeName: 'Raidho · 疾馳推進',
    themeColor: '#e11d48',
    keywords: ['勢如破竹', '高速推進', '掌控韁繩', '克服萬難'],
    verse: [
      '八足烈駒奔騰過赤紅雲霞，',
      '金輪滾滾碾碎遲疑徘徊。',
      '手握韁繩心念如磐石定，',
      '風暴退避，直衝終點之門。'
    ],
    interpretation: '烈陽戰車象徵強大的推動力與執行力。一旦目標確立，便如戰車出征，帶著勢不可擋的意志力橫掃前路的所有猶豫與瑣碎障礙。',
    actionAdvice: '開足馬力，加快推進腳步；同時務必牢牢抓緊韁繩，確保方向不偏航。',
    cautionWarning: '車速過快容易失控翻覆，務必時刻關注輪軸散熱與團隊同伴的承受上限。',
    positionContext: {
      past: '一段高強度的快速突進為你奠定了決定性的領先優勢。',
      present: '絕佳的衝刺時機，全軍壓上，用不可阻擋的速度打破膠著僵局。',
      future: '戰車將率先衝破終點線，收穫無可撼動的壓倒性勝利。',
      single: '全速前進！握緊方向，命運將為果敢奔馳之人讓路。'
    }
  },
  {
    id: 'rebellion-spark',
    number: 20,
    name: '燎原星火',
    nameEn: 'The Spark of Rebellion',
    element: 'Fire',
    elementLabel: '啟蒙火種',
    runeSymbol: 'ᚲ',
    runeName: 'Kenaz · 燃起火苗',
    themeColor: '#ff0055',
    keywords: ['星星之火', '打破壟斷', '思想啟蒙', '顛覆舊規'],
    verse: [
      '枯草深處微弱紅光閃爍，',
      '看似渺小卻吞吐烈焰威能。',
      '莫輕看一言一行之微，',
      '春風一起，頓時化作燎原之勢。'
    ],
    interpretation: '燎原星火代表挑戰陳腐權威與舊有利益結構的顛覆性力量。即使現在看似微不足道，但只要合乎人心所向，便能引發不可逆的巨變浪潮。',
    actionAdvice: '勇敢為真理發聲，傳遞啟蒙的理念，聚集志同道合的新銳力量共同革新。',
    cautionWarning: '防範過早引火燒身，策略需講究隱蔽蓄力，莫在未成勢時盲目正面硬碰硬。',
    positionContext: {
      past: '當初一個微小的反骨抗爭念頭，如今已成長為改寫格局的潮流。',
      present: '你的一點創新嘗試正在撬動龐大的死水體系，堅持住這顆火種。',
      future: '燎原大火將徹底燒除陳腐障礙，為新生代清理出寬廣跑道。',
      single: '點燃火種，相信連鎖反應。一星微光，足以照徹整座長夜。'
    }
  },
  {
    id: 'sanctuary-seraph',
    number: 21,
    name: '聖殿熾天使',
    nameEn: 'The Sanctuary Seraph',
    element: 'Fire',
    elementLabel: '六翼熾光',
    runeSymbol: 'ᛋ',
    runeName: 'Sowilo · 崇高淨化',
    themeColor: '#fde047',
    keywords: ['神聖守護', '道德純潔', '浩然正氣', '驅除邪祟'],
    verse: [
      '六翼如火覆蓋神聖法壇，',
      '琉璃金瞳照徹世間隱私。',
      '邪祟虛言在熾光前消融，',
      '心懷至誠，神明躬身相佑。'
    ],
    interpretation: '聖殿熾天使象徵至高無上的精神純潔度與浩然正氣。任何見不得光的暗箱操作或陰謀詭計，在絕對的光明與公開透明面前都將不攻自破。',
    actionAdvice: '保持行事的完全公開透明與道德自律，不給任何中傷者留下可乘之機。',
    cautionWarning: '警惕過於苛責他人的人性弱點，光芒若太過刺眼，容易灼傷親近之人的心。',
    positionContext: {
      past: '你始終如一的光明磊落，為你贏得了無懈可擊的護身符。',
      present: '把一切爭議放到陽光下討論，透明度是你最強大的終極武器。',
      future: '正義必得伸張，卑鄙的手段將自我崩解，你將獲得神聖的平反與守護。',
      single: '光明所至，暗影無存。行事坦蕩者，自得天地護佑。'
    }
  },
  {
    id: 'magma-sentinel',
    number: 22,
    name: '熔岩守衛',
    nameEn: 'The Magma Sentinel',
    element: 'Fire',
    elementLabel: '地核熾甲',
    runeSymbol: 'ᚦ',
    runeName: 'Thurisaz · 堅甲反擊',
    themeColor: '#dc2626',
    keywords: ['堅如鐵桶', '炙熱反擊', '絕對防禦', '威懾強敵'],
    verse: [
      '黑曜石甲流淌赤金熔岩，',
      '任憑箭雨襲來盡皆成灰。',
      '不怒自威守護核心禁地，',
      '來犯之敵，自取焚身之禍。'
    ],
    interpretation: '熔岩守衛代表強悍的防禦威懾力。建立起讓對手不敢輕易招惹的安全護城河，任何輕舉妄動的侵犯都會付出慘烈代價。',
    actionAdvice: '築牢自身的核心專利、資產防線與法律護盾，展現不可退讓的防衛決心。',
    cautionWarning: '防禦不可過度封閉，避免將自己困在孤立無援的熾熱碉堡中。',
    positionContext: {
      past: '及時建立的防範措施，曾替你抵禦了數次毀滅性的外部衝擊。',
      present: '立刻加固邊界防守，確保核心資產無懈可擊，讓覬覦者知難而退。',
      future: '無人能攻破你的陣線，堅實的防護將為你爭取到長期發展的太平環境。',
      single: '不動如山，熱烈如焰。立定邊界，守護最珍貴的心靈陣地。'
    }
  },
  {
    id: 'triumph-banner',
    number: 23,
    name: '榮耀旗幟',
    nameEn: 'The Banner of Triumph',
    element: 'Fire',
    elementLabel: '凱旋赤旗',
    runeSymbol: 'ᚹ',
    runeName: 'Wunjo · 喜悅凱旋',
    themeColor: '#f59e0b',
    keywords: ['慶祝勝利', '榮譽共享', '士氣振奮', '階段告捷'],
    verse: [
      '金線刺繡赤紅戰旗迎風展，',
      '凱旋號角響徹雲霄萬里長。',
      '血汗淚水皆化甘醇瓊漿，',
      '舉杯共飲，無愧今日榮光。'
    ],
    interpretation: '榮耀旗幟象徵艱辛戰鬥後的階段性重大勝利。付出終於獲得了公開的肯定與回報，這是一個值得慶祝、犒勞同伴並分享成果的歡聚時刻。',
    actionAdvice: '慷慨犒勞一同奮戰的夥伴，公開慶祝達成的里程碑，藉此凝聚更高昂的團隊士氣。',
    cautionWarning: '莫沈溺於一時的慶祝而喪失戒備，慶功之後仍需整軍備戰下一階段。',
    positionContext: {
      past: '上一次的成功勝利給予了團隊深厚的互信，奠定了當前的士氣基礎。',
      present: '成果即將交付驗收，做好接受讚譽與慶祝勝利的準備。',
      future: '你將昂首闊步踏上領獎台，戰功赫赫，榮耀必歸於奮戰之人。',
      single: '凱歌高奏，勝利在前。盡情享受這份屬於你的榮耀時刻。'
    }
  },
  {
    id: 'tempest-lightning',
    number: 24,
    name: '狂暴雷霆',
    nameEn: 'The Tempest Lightning',
    element: 'Fire',
    elementLabel: '天雷一殛',
    runeSymbol: 'ᚦ',
    runeName: 'Thurisaz · 閃電劈裂',
    themeColor: '#38bdf8',
    keywords: ['突發劇變', '電光石火', '劈開死局', '當頭棒喝'],
    verse: [
      '青紫電蟒瞬間撕裂天幕，',
      '萬鈞雷霆擊碎頑固沉寂。',
      '沉悶窒息之時忽降霹靂，',
      '驚醒迷夢，換得乾坤清朗。'
    ],
    interpretation: '狂暴雷霆象徵不可預測的突發事件或強烈的當頭棒喝。看似打破了平靜，實則是為了擊碎早已腐朽僵死的死局，帶來劇烈但必要的空氣清新。',
    actionAdvice: '快速應變，不試圖維持舊有碎裂的局面，順勢藉助這股衝擊完成大破大立。',
    cautionWarning: '提防雷擊帶來的次生破壞，保護好脆弱的核心設施與無辜受牽連者。',
    positionContext: {
      past: '曾有一場突如其來的意外徹底粉碎了幻想，逼得你走上正道。',
      present: '局面即將發生急遽震盪，保持敏捷身段，隨機應變方能化險為夷。',
      future: '一場徹底的洗禮將掃清所有陰霾，暴風雨後空氣將無比透徹清爽。',
      single: '雷霆劈開長夜，震盪打破沉淪。視變故為契機，迎接破繭時刻。'
    }
  },
  {
    id: 'dawn-inquisitor',
    number: 25,
    name: '聖火審判官',
    nameEn: 'The Inquisitor of Dawn',
    element: 'Fire',
    elementLabel: '熾火天秤',
    runeSymbol: 'ᛏ',
    runeName: 'Tiwaz · 公平裁量',
    themeColor: '#f97316',
    keywords: ['明察秋毫', '公義審判', '去偽存真', '嚴格自律'],
    verse: [
      '黃金法槌重擊無偏鐵砧，',
      '烈焰瞳眸照穿百種矯飾。',
      '功過是非皆有明鏡丈量，',
      '嚴律無私，立定萬世綱常。'
    ],
    interpretation: '聖火審判官象徵客觀嚴正的評估、審計與責任追究。任何漏洞或含混不清的帳目、關係，在此時都必須攤開來接受最嚴厲的審查，才能確保系統健康。',
    actionAdvice: '主動做一次徹底的內部自查，修正所有隱形合規風險，不護短，不留情面。',
    cautionWarning: '警惕苛察失和，執法須留有仁慈餘地，切莫因吹毛求疵而逼反忠良。',
    positionContext: {
      past: '一次嚴肅的自我反省或外部審查，幫你排除了致命隱患。',
      present: '不要逃避審查與評價，正視所有批評，這是修補漏洞的最好契機。',
      future: '公平公正的裁決終將還你清白，恪守原則者必將贏得最終尊重。',
      single: '公正無私，嚴於律己。經得起烈火檢驗之靈魂，自有無畏之心。'
    }
  },
  {
    id: 'undying-flame',
    number: 26,
    name: '永燃聖火',
    nameEn: 'The Undying Flame',
    element: 'Fire',
    elementLabel: '原始火源',
    runeSymbol: 'ᛋ',
    runeName: 'Sowilo · 不滅心燈',
    themeColor: '#fb923c',
    keywords: ['熱忱永續', '初心不滅', '核心動力', '生命熱度'],
    verse: [
      '太古燧石擦出原始火光，',
      '歷經萬劫從未有一刻冷卻。',
      '風雨漫天亦難將其吹滅，',
      '因為火種，生於不屈心間。'
    ],
    interpretation: '永燃聖火象徵你內心最深處永不磨滅的熱情與生命力。外界的打擊或許讓你疲憊，但只要你低頭觸碰內心的那簇火苗，你便知道自己為何出發。',
    actionAdvice: '重溫當初啟程時的單純熱愛，找回讓你熱血沸騰的初心，以此作為前進的永動機。',
    cautionWarning: '避免將熱情揮霍在不值得的內耗瑣事上，把寶貴的心火用在刀刃上。',
    positionContext: {
      past: '這份純粹的熱愛曾支撐你走過了最無人問津的荒涼歲月。',
      present: '點燃你心中的聖火，熱情具有強大的感染力，它能重新喚醒周遭所有沉睡者。',
      future: '這團火將燃燒成參天巨焰，溫暖無數同行者，照亮一個時代。',
      single: '初心不滅，聖火長燃。只要心靈仍有溫度，你就永遠不會被打敗。'
    }
  },

  // --- 第 III 循環：深海與幽淵宮（Water & Abyss，27~39） ---
  {
    id: 'abyss-dragon',
    number: 27,
    name: '深淵巨龍',
    nameEn: 'The Abyss Dragon',
    element: 'Void',
    elementLabel: '暗影虛空',
    runeSymbol: 'ᚦ',
    runeName: 'Thurisaz · 混沌與破壁',
    themeColor: '#a855f7',
    keywords: ['潛在原始力', '恐懼直面', '暗夜蛻變', '界限突破'],
    verse: [
      '地底深淵沉睡千載烈焰，',
      '紫晶瞳仁倒映隱秘慾望。',
      '恐懼不過是未馴之力，',
      '斬斷怯懦，化身吞噬長夜之火。'
    ],
    interpretation: '深淵巨龍象徵被壓抑在內心深處的強大力量，以及未曾直面的陰影。它不是毀滅，而是即將破土而出的原始突破能量。',
    actionAdvice: '直面你最恐懼的盲點或爭執，將這份強烈的焦慮轉化為破釜沉舟的行動爆發力。',
    cautionWarning: '警惕憤怒吞噬理智，勿讓毀滅性的對抗或嫉妒慾望反噬自身盟友。',
    positionContext: {
      past: '曾有一場激烈的衝突或深刻的挫折迫使你打破既有框架，促成了覺醒。',
      present: '正處於與內心恐懼或強大外部阻力對決的臨界點，逃避將無濟於事。',
      future: '熬過這場深淵淬煉，你將駕馭驚人的個人威儀與不可動搖的威信。',
      single: '這是一張充滿張力的試煉牌，承認內心的慾望與野心，方能化阻力為羽翼。'
    }
  },
  {
    id: 'queen-of-tides',
    number: 28,
    name: '潮汐女皇',
    nameEn: 'The Queen of Tides',
    element: 'Water',
    elementLabel: '深海潮汐',
    runeSymbol: 'ᛚ',
    runeName: 'Laguz · 情感深流',
    themeColor: '#0ea5e9',
    keywords: ['情感潮湧', '包容接納', '直面脆弱', '深層療癒'],
    verse: [
      '七海之淵湧動柔和浪濤，',
      '月華如銀撫平驚濤狂瀾。',
      '脆弱亦是包容萬象之泉，',
      '順隨水流，頑石亦被溫柔融化。'
    ],
    interpretation: '潮汐女皇象徵情感的深層智慧、同理心與療癒力量。它指示當前局勢無法光靠剛硬的理性解決，唯有傾聽情緒、溫柔接納，方能化解堅冰。',
    actionAdvice: '表達真實的情感與關懷，修復疏離的人際關係，給予自己與他人喘息與寬恕的空間。',
    cautionWarning: '警惕被情緒浪潮溺斃，勿過度沉溺於感傷回憶或無邊無際的受害者情節。',
    positionContext: {
      past: '深層的情感創傷或深刻體驗曾重塑了你的同理心，讓你更懂得溫柔相待。',
      present: '這是一個需要柔軟以對的時刻，放下戒備與刺蝟外殼，傾聽彼此的心聲。',
      future: '長久的緊繃將徹底舒解，心靈深處的平靜如湛藍晴海般回歸。',
      single: '如同潮水般退去煩擾，接納當下的一切起伏，柔軟具有征服剛硬的莫大力量。'
    }
  },
  {
    id: 'sorrow-pearl',
    number: 29,
    name: '悲傷珍珠',
    nameEn: 'The Pearl of Sorrow',
    element: 'Water',
    elementLabel: '淚珠昇華',
    runeSymbol: 'ᛚ',
    runeName: 'Laguz · 凝淚成晶',
    themeColor: '#38bdf8',
    keywords: ['痛苦孕育', '淚水結晶', '因傷生慧', '隱秘寶藏'],
    verse: [
      '粗砂磨礪柔嫩蚌肉之痛，',
      '層層珠光包裹撕裂創傷。',
      '凡經受至深劇痛洗禮者，',
      '掌心終將捧出絕世之珍。'
    ],
    interpretation: '悲傷珍珠象徵痛苦中孕育出的無價智慧。你在這段時間所承受的委屈、心酸與孤單，正在無形中凝結成你靈魂中最美麗、最具價值的獨特珍珠。',
    actionAdvice: '允許自己哭泣與釋放悲傷，隨後將這份痛苦化為創作、成長或同理他人的養分。',
    cautionWarning: '不要把傷口當作勳章向所有人索取同情，過度沉湎於痛苦會讓珍珠失去光澤。',
    positionContext: {
      past: '過去一段刻骨銘心的遺憾或心碎，造就了今天通透深邃的你。',
      present: '雖然此刻心痛難忍，但請相信痛楚正在化為寶貴的靈魂資產。',
      future: '你會由衷感謝這段經歷，正是它讓你收穫了旁人難以企及的人生境界。',
      single: '淚盡處，明珠生。接納痛苦的淬煉，你將收穫最璀璨的光芒。'
    }
  },
  {
    id: 'siren-whispers',
    number: 30,
    name: '塞壬海妖',
    nameEn: 'The Siren of Whispers',
    element: 'Water',
    elementLabel: '迷幻之歌',
    runeSymbol: 'ᛈ',
    runeName: 'Perthro · 幻音誘惑',
    themeColor: '#06b6d4',
    keywords: ['誘惑試探', '辨識幻象', '警惕陷阱', '堅守航道'],
    verse: [
      '礁石深處傳來甜美歌謠，',
      '許諾無痛捷徑與無盡歡愉。',
      '若將心神交付虛妄呢喃，',
      '觸礁沉船，白骨徒留空灘。'
    ],
    interpretation: '塞壬海妖象徵生活中的致命誘惑與看似美好的速成捷徑。有人在用糖衣包裹的毒藥向你招手，考驗你的自律定力與洞察真偽的眼光。',
    actionAdvice: '塞上雙耳，不聽任何天花亂墜的暴富或偷懶捷徑承諾，嚴格恪守既定原則與合規底線。',
    cautionWarning: '警惕耳邊阿諛奉承的巧言令色，往往最動聽的話隱藏著最深的暗礁。',
    positionContext: {
      past: '曾險些被虛假誘惑帶偏航向，幸而及時懸崖勒馬化險為夷。',
      present: '當前身邊充斥著浮誇的雜音與誘惑，務必提高警惕，切勿貪圖便宜。',
      future: '避開了暗礁陷阱後，你的航道將一馬平川，遠離滅頂之災。',
      single: '抵禦誘惑，專注航向。唯有腳踏實地，方能駛向繁榮彼岸。'
    }
  },
  {
    id: 'sunken-temple',
    number: 31,
    name: '沉沒神廟',
    nameEn: 'The Sunken Temple',
    element: 'Water',
    elementLabel: '深海遺跡',
    runeSymbol: 'ᛁ',
    runeName: 'Isa · 封存歲月',
    themeColor: '#0284c7',
    keywords: ['遺落智慧', '發掘潛能', '水下考古', '喚醒記憶'],
    verse: [
      '珊瑚蔓生青銅祭壇之上，',
      '巨柱沉寂於千尋海淵之中。',
      '昔日輝煌並未真正消亡，',
      '潛入幽深，沉睡寶藏重見天光。'
    ],
    interpretation: '沉沒神廟象徵被你遺忘或塵封已久的寶貴天賦、人脈或智慧。回到過去尋找答案，你昔日曾經具備的能力，如今正等待被重新打撈啟用。',
    actionAdvice: '回顧多年前的舊筆記、老朋友或擱置的嗜好，那裡藏著解開當前死結的鑰匙。',
    cautionWarning: '打撈遺跡需要深潛耐力，避免急功近利忽視水下壓強。',
    positionContext: {
      past: '你早年積累的某項罕見技能，現在正迎來絕佳的復興用武之地。',
      present: '潛入你內心深處，重啟那些被你冷落已久的核心才華與熱情。',
      future: '重新出土的古老智慧將成為你獨步天下的殺手鐧。',
      single: '寶藏深藏於水下，靜待有心人打撈。喚醒你的沉睡天賦。'
    }
  },
  {
    id: 'mirror-lake',
    number: 32,
    name: '鏡像之湖',
    nameEn: 'The Mirror Lake',
    element: 'Water',
    elementLabel: '靜水澄心',
    runeSymbol: 'ᛚ',
    runeName: 'Laguz · 照見本心',
    themeColor: '#38bdf8',
    keywords: ['自我反思', '外在投射', '無波心境', '看清盲區'],
    verse: [
      '群山環抱一泓無波碧水，',
      '纖塵不染倒映萬里晴空。',
      '若你心水終日喧囂翻騰，',
      '如何能辨自己真實容顏？'
    ],
    interpretation: '鏡像之湖代表將外界的紛擾反思於己身。你看到的外部敵意或困頓，往往是自己內心焦慮的投射。當你內心平靜如鏡，外部的波瀾自然消弭。',
    actionAdvice: '停止指責外界與他人，靜下心來做自我對話，問問自己真正恐懼的是什麼。',
    cautionWarning: '警惕如水仙花般自我陶醉於虛妄自戀中，鏡像需反映真實而非修飾後的幻影。',
    positionContext: {
      past: '一段深刻的獨處反思期曾讓你徹底看清了自己的真正長短處。',
      present: '平息你心中的怒火與浮躁，靜水流深，答案就在清澈的湖底。',
      future: '擁有澄明心智的你將具備看透他人心思的敏銳直覺。',
      single: '以心為鏡，不惹塵埃。內心平和之時，萬事萬物皆得其所。'
    }
  },
  {
    id: 'mist-skiff',
    number: 33,
    name: '迷霧孤舟',
    nameEn: 'The Skiff in the Mist',
    element: 'Water',
    elementLabel: '白霧迷津',
    runeSymbol: 'ᚾ',
    runeName: 'Nauthiz · 匱乏摸索',
    themeColor: '#94a3b8',
    keywords: ['迷茫摸索', '信任直覺', '慢行慎進', '撥霧尋渡'],
    verse: [
      '濃重晨霧遮蔽四方岸線，',
      '一葉扁舟輕泛無聲寒江。',
      '目力所及不過咫尺之間，',
      '順水緩搖，莫在恐慌中橫衝亂撞。'
    ],
    interpretation: '迷霧孤舟象徵前路能見度極低的不確定階段。此時不需要急著看清十里外的全景，只要專注於劃好眼前的這一槳，緩慢而謹慎地前行。',
    actionAdvice: '降低前進速度，不作激進冒險，靠著羅盤與微小的信號摸索航向。',
    cautionWarning: '切忌在迷霧中因恐懼焦慮而瘋狂划槳，盲目加速只會讓船撞上看不見的暗礁。',
    positionContext: {
      past: '你曾憑著超凡的耐心，在毫無能見度的逆境中成功渡過了危險期。',
      present: '現在不必急於得出定論，允許自己處於暫時的迷霧中，慢即是快。',
      future: '陽光即將刺破濃霧，當視野大開之時，你已經平穩抵達安全的對岸。',
      single: '霧雖濃，船未沉。放慢腳步，信任時間，岸邊燈火終會破霧而出。'
    }
  },
  {
    id: 'deep-leviathan',
    number: 34,
    name: '幽靈利維坦',
    nameEn: 'The Leviathan of the Deep',
    element: 'Water',
    elementLabel: '深海巨獸',
    runeSymbol: 'ᚢ',
    runeName: 'Uruz · 龐然巨力',
    themeColor: '#1e3a8a',
    keywords: ['深層潛意識', '無法忽視之物', '巨大影響力', '敬畏深淵'],
    verse: [
      '海平面下幽幽游過萬丈陰影，',
      '巨鰭輕擺便掀起滔天海浪。',
      '那是遠古時代便存在的造物，',
      '學會與深淵巨靈和平共存。'
    ],
    interpretation: '利維坦代表某個深藏不露但影響巨大的根本因素。它可能是一段隱秘的歷史因緣，或者市場與家庭中不可忽視的底層力量，需以敬畏之心對待。',
    actionAdvice: '深入探尋問題的底層根本病因，不要只在水面做表面文章，尊重底層規律。',
    cautionWarning: '切莫傲慢地試圖以一人之力對抗不可阻擋的客觀巨浪，智者懂得借勢共舞。',
    positionContext: {
      past: '曾有一股龐大的隱性力量在幕後深刻左右了局勢的走向。',
      present: '看清水面下的真實大象，與其硬碰硬，不如順應其引動的洋流。',
      future: '馴服或順應這股巨力者，將乘著時代的巨浪躍升至不可思議的高度。',
      single: '深淵非敵，浩大不可量。懷抱敬畏，乘巨浪而凌空。'
    }
  },
  {
    id: 'eclipse-surge',
    number: 35,
    name: '月蝕之潮',
    nameEn: 'The Eclipse Surge',
    element: 'Water',
    elementLabel: '暗月之引',
    runeSymbol: 'ᚦ',
    runeName: 'Thurisaz · 潮湧裂變',
    themeColor: '#7c3aed',
    keywords: ['情感峰值', '磁場紊亂', '陰影爆發', '宣洩淨化'],
    verse: [
      '暗紅血月遮蔽天際幽光，',
      '怒濤狂湧吞沒平整海灘。',
      '被壓抑之渴望在此刻決堤，',
      '洗滌泥沙，方露白石嶙峋。'
    ],
    interpretation: '月蝕之潮象徵情感與陰暗面累積到極致後的全面宣洩。情緒的爆發雖然混亂，但卻是一次徹底清除淤積毒素的大清掃。',
    actionAdvice: '不要壓抑真實情緒，找尋安全的方式徹底宣洩，說出憋在心裡太久的心裡話。',
    cautionWarning: '宣洩時需注意言辭底線，避免在情緒失控的狂潮中說出無法挽回的傷人重話。',
    positionContext: {
      past: '一次關係中的巨大爭吵雖然痛苦，卻徹底說開了隔閡，打破了虛偽假面。',
      present: '情感的高壓鍋已到沸點，疏導遠比強壓更有利於長治久安。',
      future: '狂潮退去後海面將迎來深沉的寧靜，所有被掩蓋的真相徹底大白。',
      single: '任潮水宣洩，洗淨心中塵垢。風暴過後，便是新生。'
    }
  },
  {
    id: 'glacial-crown',
    number: 36,
    name: '冰晶王冠',
    nameEn: 'The Glacial Crown',
    element: 'Water',
    elementLabel: '嚴冬極寒',
    runeSymbol: 'ᛁ',
    runeName: 'Isa · 絕對零度',
    themeColor: '#67e8f9',
    keywords: ['冷靜自律', '凍結紛爭', '冷眼旁觀', '理智至上'],
    verse: [
      '萬載玄冰雕琢玲瓏王冠，',
      '寒氣徹骨冰封千重熱焰。',
      '在狂熱喧囂中戴上冰冠，',
      '唯冷靜者，能在此刻立於不敗。'
    ],
    interpretation: '冰晶王冠象徵極致的冷靜與克制。當周遭所有人都在狂熱或恐慌中失去理智時，你必須化身為最冰冷的智者，用絕對的客觀掌控局勢。',
    actionAdvice: '凍結當前所有過於情緒化的決策，給爭執按下暫停鍵，冷靜三日後再議。',
    cautionWarning: '警惕長期佩戴冰冠導致內心徹底麻木冷血，別讓身邊真正愛你的人感到寒心。',
    positionContext: {
      past: '當初你的冷靜定力曾拯救了整個團隊免於跟風跳崖。',
      present: '收起所有的衝動與熱血，現在需要的是精密如手術刀般的冰冷邏輯。',
      future: '你的定力與自控力將為你贏得最後的勝利，狂熱褪去，冰山依然聳立。',
      single: '以冷制熱，凍結混亂。冰清玉潔的心境，自能化解萬千火攻。'
    }
  },
  {
    id: 'stygian-ferryman',
    number: 37,
    name: '靈魂渡者',
    nameEn: 'The Stygian Ferryman',
    element: 'Water',
    elementLabel: '忘川擺渡',
    runeSymbol: 'ᛖ',
    runeName: 'Ehwaz · 渡河引航',
    themeColor: '#475569',
    keywords: ['過渡轉換', '擺渡引領', '捨棄執念', '安全跨越'],
    verse: [
      '黑木長篙點破冥河死水，',
      '斗笠微傾默默引渡亡魂。',
      '欲登彼岸必先放下金幣，',
      '兩手空空，方能踏上新程。'
    ],
    interpretation: '靈魂渡者代表生命中不可避免的重大過渡期。從舊階段前往新階段需要一位引路人，更需要你支付放下的代價，捨棄不再服務於你的舊身分。',
    actionAdvice: '尋求專業引路人或諮詢顧問的協助，老實繳納學費，配合轉換的節奏。',
    cautionWarning: '在擺渡舟上切勿留戀回望岸邊，頻頻回頭只會讓你跌入忘川深水。',
    positionContext: {
      past: '曾有一位關鍵的貴人帶你平安渡過了人生最艱險的交接期。',
      present: '正處於兩岸之間的過渡期，安心坐好，不要在轉換期焦慮折騰。',
      future: '你將平安抵達嶄新的彼岸，舊的業力與包袱皆已隨水流逝。',
      single: '擺渡之舟已在眼前，放下執念，安然跨越這片幽深的試煉水域。'
    }
  },
  {
    id: 'coral-labyrinth',
    number: 38,
    name: '珊瑚迷宮',
    nameEn: 'The Coral Labyrinth',
    element: 'Water',
    elementLabel: '深海繁複',
    runeSymbol: 'ᛈ',
    runeName: 'Perthro · 複雜博弈',
    themeColor: '#f43f5e',
    keywords: ['錯綜複雜', '耐心拆解', '人際糾葛', '精細平衡'],
    verse: [
      '萬千彩珊瑚構築幽邃迴廊，',
      '轉角深處藏著暗流與奇花。',
      '莫試圖蠻力撞碎瑰麗石柱，',
      '細看水流，自能找到出口之徑。'
    ],
    interpretation: '珊瑚迷宮象徵極其精細複雜的人際網絡或利益結構。這不是非黑即白的簡單問題，需要高超的處世智慧與耐心，在交錯的利益中優雅穿梭。',
    actionAdvice: '繪製關係利益圖譜，顧及各方核心訴求，採取多贏溫和的協調策略。',
    cautionWarning: '警惕迷失在爾虞我詐的細枝末節中，忘記最初進來時的真正主目標。',
    positionContext: {
      past: '曾成功化解過一場極度棘手的多角利益紛爭，證明了你的協調功力。',
      present: '局面錯綜複雜，切勿用一刀切的粗暴方法，耐心順著水流拆解線頭。',
      future: '你將如靈動游魚般安然走出迷宮，並在各方之間建立起牢固的尊重。',
      single: '以柔克剛，靈動游刃。複雜的世界裡，清醒的心就是你的線團。'
    }
  },
  {
    id: 'spring-oblivion',
    number: 39,
    name: '忘川之泉',
    nameEn: 'The Spring of Oblivion',
    element: 'Water',
    elementLabel: '甘霖遺忘',
    runeSymbol: 'ᛚ',
    runeName: 'Laguz · 徹底釋懷',
    themeColor: '#60a5fa',
    keywords: ['完全釋懷', '放下舊怨', '靈魂重啟', '純淨甘露'],
    verse: [
      '清冽泉水自白玉石縫湧出，',
      '飲下一杓忘卻千載恩仇。',
      '背負仇恨之人寸步難行，',
      '唯有釋懷，靈魂方得輕盈。'
    ],
    interpretation: '忘川之泉象徵徹底的寬恕與放下。緊抓著別人的過錯或自己的悔恨不放，只是在自己體內服毒卻期望別人受害。喝下這口甘泉，將過往一筆勾銷。',
    actionAdvice: '給那位傷害過你的人（包括過去不成熟的自己）一次內心的徹底赦免，翻過這頁。',
    cautionWarning: '寬恕不等於遺忘教訓，放下仇恨的同時依然要保持邊界防護。',
    positionContext: {
      past: '正是因為徹底放下了昔日的怨懟，才讓你重新擁有了愛與信任的能力。',
      present: '別再讓幾年前的舊帳綁架你今日的幸福，痛快將其丟進忘川。',
      future: '一身輕鬆的你將以零負擔的姿態起跑，輕盈飛躍所有障礙。',
      single: '飲泉忘憂，一身輕盈。原諒過去，就是給自己最好的未來禮物。'
    }
  },

  // --- 第 IV 循環：大地與風靈宮（Earth & Air，40~52） ---
  {
    id: 'wisp-spirit',
    number: 40,
    name: '幽光精靈',
    nameEn: 'The Will-o\'-Wisp',
    element: 'Air',
    elementLabel: '幻靈微風',
    runeSymbol: 'ᚲ',
    runeName: 'Kenaz · 靈光微火',
    themeColor: '#06b6d4',
    keywords: ['直覺靈感', '微光指引', '迷宮試探', '好奇探索'],
    verse: [
      '沼澤黑夜躍動幽藍火苗，',
      '非日光耀眼，卻穿透迷茫。',
      '側耳傾聽心靈幽微低語，',
      '第一步雖小，已踏上星程。'
    ],
    interpretation: '幽光精靈代表潛意識深處的直覺與突發的創意火花。在幽暗不確定的環境中，它不會照亮整座森林，但足以照清你腳下的下一步路。',
    actionAdvice: '重視那些一閃而過的靈感或直覺感受，先嘗試小規模的敏捷探索，別等待完美計畫。',
    cautionWarning: '警惕被鏡花水月的虛幻承諾誘入迷途，直覺需搭配常識驗證，切莫因盲從幻影而失足。',
    positionContext: {
      past: '曾有一道不起眼的念頭觸發了你踏上這段旅程，那是靈魂的指路燈。',
      present: '外界聲音太吵雜，安靜下來傾聽內心直覺，它已經知道該往哪走。',
      future: '意想不到的靈感與創意突破將化解死結，為你開啟嶄新出路。',
      single: '相信直覺的微光，邁開探索的第一步，真相會在實踐中逐漸清晰。'
    }
  },
  {
    id: 'oathbound-gryphon',
    number: 41,
    name: '守誓獅鷲',
    nameEn: 'The Oathbound Gryphon',
    element: 'Air',
    elementLabel: '長空長誓',
    runeSymbol: 'ᛗ',
    runeName: 'Mannaz · 榮譽共盟',
    themeColor: '#f59e0b',
    keywords: ['信守承諾', '高貴尊嚴', '堅定捍衛', '盟友互信'],
    verse: [
      '巨翼破空呼嘯長天之上，',
      '利爪如鋼守護神殿殘碑。',
      '金石可鏤誓言永不可渝，',
      '崇高榮譽自會召集忠誠同袍。'
    ],
    interpretation: '守誓獅鷲象徵品格的高尚、契約精神與忠貞的盟約。它提醒你在動盪的世道中，誠信與原則才是立足之本，亦昭示著忠誠盟友的鼎力相助。',
    actionAdvice: '履行承諾，哪怕代價不菲；同時審視身邊的合作夥伴，與真正重承諾、有品格的人同舟共濟。',
    cautionWarning: '警惕被道德綁架，或者為了愚忠而盲目背負本不屬於你的沈重枷鎖。',
    positionContext: {
      past: '你始終如一的誠實與守信，為你積累了千金難買的珍貴信譽資產。',
      present: '重視契約與團隊約定，團結一切值得信任的力量共同禦敵。',
      future: '你將收穫值得託付後背的頂級盟友，攜手登上更高的榮譽殿堂。',
      single: '立誓行於天地，無愧於心。保持這份浩然之氣，自得眾望所歸。'
    }
  },
  {
    id: 'masked-jester',
    number: 42,
    name: '幻境小丑',
    nameEn: 'The Masked Jester',
    element: 'Air',
    elementLabel: '詭譎幻變',
    runeSymbol: 'ᚹ',
    runeName: 'Wunjo · 妙趣解圍',
    themeColor: '#f43f5e',
    keywords: ['打破成規', '幽默智慧', '驚奇反轉', '跳脫常理'],
    verse: [
      '面具微揚戲謔帝王將相，',
      '鈴鐺脆響嘲弄刻板命運。',
      '莫將世事看得過於嚴肅，',
      '荒誕笑靨中，藏著解套密碼。'
    ],
    interpretation: '幻境小丑象徵顛覆性的幽默、打破常規框架的巧思。當大家都困在死板的規則中時，唯有不按常理出牌的人，才能輕鬆破解困局。',
    actionAdvice: '試著用輕鬆幽默的角度看待煩惱，打破既定常規，用意想不到的方法打破僵局。',
    cautionWarning: '嬉笑不可無度，警惕輕浮逃避實質責任，切莫把重要承諾當作玩笑踐踏。',
    positionContext: {
      past: '一次出人意料的即興發揮或打破傳統的舉動，曾讓你在競爭中奇襲突圍。',
      present: '別把眼前這件事想得太過沉重窒息，換個輕鬆的視角，破綻立即顯現。',
      future: '命運將安排一場充滿戲劇性的反轉，讓嚴肅的阻礙以荒謬有趣的方式消散。',
      single: '放輕鬆！生活是一場宏大的冒險劇碼，保持這份頑皮與好奇心，你將無懈可擊。'
    }
  },
  {
    id: 'slumbering-titan',
    number: 43,
    name: '沉眠泰坦',
    nameEn: 'The Slumbering Titan',
    element: 'Earth',
    elementLabel: '遠古磐石',
    runeSymbol: 'ᚢ',
    runeName: 'Uruz · 蠻荒原力',
    themeColor: '#78716c',
    keywords: ['厚積薄發', '隱忍蓄力', '不可抗阻', '泰然自若'],
    verse: [
      '群山脊樑枕著星塵入夢，',
      '深邃胸膛引動地心脈搏。',
      '莫催促沉睡中之巍峨，',
      '一旦甦醒，乾坤為之震顫。'
    ],
    interpretation: '沉眠泰坦象徵龐大無比的潛在勢能。目前或許看似進展緩慢，但這不是停滯，而是深厚能量的積累期。一旦時機成熟，所釋放的動能將橫掃一切阻礙。',
    actionAdvice: '沉住氣，繼續默默修煉內功與基本盤，不著急展示半成品，靜待雷霆一擊的良機。',
    cautionWarning: '莫把積累當成怠惰的藉口，長時間的沉睡若無目標支撐，容易徹底喪失鬥志。',
    positionContext: {
      past: '過往長期默默無聞的積澱與苦練，早已為你打下超越常人的雄厚底蘊。',
      present: '現在絕不是操之過急的時候，保持沉穩如山的定力，任憑外界喧囂。',
      future: '時機一到，積蓄的洪荒之力將無可阻擋地爆發，局面徹底為你所掌控。',
      single: '厚德載物，靜如處子。當你真正起身的時刻，整個世界都將為你讓路。'
    }
  },
  {
    id: 'forest-hermit',
    number: 44,
    name: '森林隱士',
    nameEn: 'The Forest Hermit',
    element: 'Earth',
    elementLabel: '林幽草深',
    runeSymbol: 'ᛁ',
    runeName: 'Isa · 幽居求道',
    themeColor: '#15803d',
    keywords: ['遠離喧囂', '回歸本真', '獨立沉思', '素樸生活'],
    verse: [
      '幽深古林掩映茅屋草扉，',
      '清泉煮茗伴聽松濤風聲。',
      '天下熙熙皆為利來利往，',
      '唯守孤獨，靈台方得澄澈。'
    ],
    interpretation: '森林隱士代表抽離繁複的社交噪音，回歸最質樸真實的自己。你需要一段安靜的空間來理清思緒，不被外界的焦慮節奏所裹挾。',
    actionAdvice: '關閉不必要的社交媒體與低效飯局，給自己安排一個不受打擾的思考週末。',
    cautionWarning: '隱遁是為了充電而非逃避現實世界，不要因抗拒社交而淪為自我封閉。',
    positionContext: {
      past: '過去一段無人打擾的深居修煉時光，成就了你獨特的深刻思想體系。',
      present: '現在外界太嘈雜了，給自己按下靜音鍵，向內探求答案。',
      future: '出關之時，你將帶著清晰的見解重新回到世間，給予迷茫者指引。',
      single: '獨處是智者的盛宴。給心靈一片安靜的森林，答案自會浮現。'
    }
  },
  {
    id: 'minerva-owl',
    number: 45,
    name: '智慧古鴞',
    nameEn: 'The Owl of Minerva',
    element: 'Air',
    elementLabel: '暗夜雙瞳',
    runeSymbol: 'ᚨ',
    runeName: 'Ansuz · 睿智守夜',
    themeColor: '#0284c7',
    keywords: ['夜視真理', '洞悉偽裝', '冷靜旁觀', '學術深思'],
    verse: [
      '黃昏降臨方展寬闊雙翼，',
      '琥珀金眸穿透濃墨夜色。',
      '凡人喧嘩盲動皆入眼底，',
      '無聲俯衝，精準捕獲真相。'
    ],
    interpretation: '智慧古鴞象徵在黃昏與黑暗中運作的深刻敏銳。它擅長看透謊言與偽裝，抓住別人漏掉的關鍵線索，以最少的動作達成最精準的目的。',
    actionAdvice: '多看、多聽、少說話，觀察對手或合作者的微小眼神與行為細節，真相藏在細節裡。',
    cautionWarning: '警惕過於尖銳的批判目光讓身邊同僚備受威脅，以包容化解刻薄。',
    positionContext: {
      past: '曾憑藉敏銳的觀察力提前識破了暗藏的危機，保護了團隊安全。',
      present: '做那個冷靜的守夜人，密切監控數據與行為動向，靜候最佳行動時機。',
      future: '你的精準洞察將幫助你在最複雜的局勢中一擊制勝。',
      single: '黑夜不能遮蔽睿智之眼。保持冷靜觀察，真相就在你眼前。'
    }
  },
  {
    id: 'crown-of-thorns',
    number: 46,
    name: '荊棘薔薇',
    nameEn: 'The Crown of Thorns',
    element: 'Earth',
    elementLabel: '血色傲骨',
    runeSymbol: 'ᚾ',
    runeName: 'Nauthiz · 苦難淬鍊',
    themeColor: '#be123c',
    keywords: ['逆境盛開', '尖刺護花', '堅毅傲骨', '美麗與代價'],
    verse: [
      '寒風料峭爬滿嶙峋尖刺，',
      '赤紅薔薇傲然浴血綻放。',
      '不經尖刺刺破肌膚之苦，',
      '安得嗅聞沁人心脾之香？'
    ],
    interpretation: '荊棘薔薇代表在艱苦劣境中展現的驚人生命力與自衛能力。真正的美好往往生長在艱險之中，學會長出自己的尖刺來保護內心純粹的熱愛。',
    actionAdvice: '建立堅硬明確的個人邊界，學會向不合理的要求嚴正說「不」，同時保持內心的熱忱。',
    cautionWarning: '勿讓防衛過當傷及真正關心你的人，尖刺對準惡意，花香留給善意。',
    positionContext: {
      past: '嚴酷的逆境曾把你逼到絕境，但也鍛造出了你今日傲視風霜的骨氣。',
      present: '雖然環境佈滿荊棘，但正是你展現非凡才華與魅力的絕佳時刻。',
      future: '在廢墟與荊棘之中，你將開出最耀眼動人、無人敢輕視的薔薇之花。',
      single: '帶著尖刺盛開！無畏風霜折磨，你的堅韌將贏得世人敬畏。'
    }
  },
  {
    id: 'nomad-compass',
    number: 47,
    name: '迷途指南針',
    nameEn: 'The Nomad Compass',
    element: 'Air',
    elementLabel: '長風定盤',
    runeSymbol: 'ᚱ',
    runeName: 'Raidho · 永恆指北',
    themeColor: '#059669',
    keywords: ['真北方向', '校準使命', '迷途知返', '內心羅盤'],
    verse: [
      '磁石金針懸浮青銅殼中，',
      '任憑千山萬壑始終指南。',
      '地圖或會隨滄海桑田變，',
      '心中羅盤，永不偏離真北。'
    ],
    interpretation: '迷途指南針代表靈魂的「真北目標」（True North）。當外部環境變化莫測、所有既定規劃都失效時，唯有回歸你的終極使命，才能校準方向。',
    actionAdvice: '重寫你的使命宣言，重新評估目前的每個專案是否符合你的長遠核心目標。',
    cautionWarning: '避免被微小的磁場干擾（如短期的蠅頭小利）帶偏了人生的大方向。',
    positionContext: {
      past: '某次及時的方向校準，幫你脫離了越走越窄的歧路。',
      present: '現在正是停下腳步校準指針的時候，確認你是否正朝著真正的真北航行。',
      future: '堅持心中的正確航道，終將引導你走出無邊荒野，抵達富庶之鄉。',
      single: '校準心之指針。只要方向正確，便無懼路途遙遠。'
    }
  },
  {
    id: 'cornucopia',
    number: 48,
    name: '豐收號角',
    nameEn: 'The Cornucopia',
    element: 'Earth',
    elementLabel: '豐饒滿溢',
    runeSymbol: 'ᚠ',
    runeName: 'Fehu · 財富滿載',
    themeColor: '#84cc16',
    keywords: ['資源充裕', '財富湧流', '分享感恩', '豐饒心態'],
    verse: [
      '螺旋寶角傾瀉金黃麥穗，',
      '甘甜果實伴隨甘醇瓊漿。',
      '越是慷慨分享福報之人，',
      '其庫房越是長久豐盈無盡。'
    ],
    interpretation: '豐收號角象徵物資與精神的極大富足。這是一張代表豐饒的大吉牌，昭示著財務、資源與人脈的豐收即將到來，關鍵在於維持流通與感恩心態。',
    actionAdvice: '做好收穫後的分配與長線資產配置，同時將好處慷慨分潤給一路陪伴的夥伴。',
    cautionWarning: '警惕暴發後的鋪張浪費或守財奴的恐懼囤積，讓財富像活水般健康流轉。',
    positionContext: {
      past: '過去善良慷慨的播種，如今正在轉化為源源不斷的實質回報。',
      present: '資源即將大舉湧入，做好接納豐盛的準備，放下匱乏恐懼。',
      future: '你將步入物質與精神雙豐收的黃金時期，生活富足安康。',
      single: '豐饒號角吹響，滿溢的祝福已在路上。心懷感恩，共享豐收。'
    }
  },
  {
    id: 'howling-gale',
    number: 49,
    name: '咆哮狂風',
    nameEn: 'The Howling Gale',
    element: 'Air',
    elementLabel: '長風萬里',
    runeSymbol: 'ᚹ',
    runeName: 'Wunjo · 狂飆突進',
    themeColor: '#0ea5e9',
    keywords: ['勢不可擋', '清理障礙', '席捲殘雲', '巨大動量'],
    verse: [
      '長風呼嘯自極北冰原奔來，',
      '席捲群峰蕩滌萬里浮塵。',
      '借長風萬里之勢振羽翼，',
      '扶搖直上，九萬里天青雲闊。'
    ],
    interpretation: '咆哮狂風象徵強大的外在推動力與時代浪潮。這股大風會吹倒一切腐朽鬆動的枯木，同時也能將張開雙翼的雄鷹送上九天之巔。',
    actionAdvice: '張開你的翅膀順風起飛，借勢而行，不要試圖逆風硬頂這股不可阻擋的時代浪潮。',
    cautionWarning: '風力極強需抓緊核心重心，避免被大風刮得東倒西歪失去控制。',
    positionContext: {
      past: '曾有一場時代或產業的巨大風口，幫你完成了飛躍式的原始積累。',
      present: '起風了！現在是最佳的借力起飛之時，果斷乘風而上。',
      future: '這股強風將掃清所有前進的絆腳石，將你直接送達目標彼岸。',
      single: '借長風之勢，展垂天之翼。時代的風暴將助你騰飛萬里。'
    }
  },
  {
    id: 'megalith-circle',
    number: 50,
    name: '巨石陣法',
    nameEn: 'The Megalith Circle',
    element: 'Earth',
    elementLabel: '地脈結界',
    runeSymbol: 'ᛟ',
    runeName: 'Othala · 遠古庇佑',
    themeColor: '#57534e',
    keywords: ['千年結界', '能量聚焦', '先祖智慧', '不可動搖'],
    verse: [
      '萬載青石昂首圍合如環，',
      '夏至破曉金陽正中穿過。',
      '地脈靈流在符文間回響，',
      '身居陣中，萬劫難破其防。'
    ],
    interpretation: '巨石陣法象徵建立一個堅不可摧的穩定系統與規則體系。在混亂動盪的外部環境中，構建起一套不可動搖的運作機制，保護團隊免受侵蝕。',
    actionAdvice: '制定制度、流程與長期安全協議，用客觀的系統與機制代替脆弱的人治。',
    cautionWarning: '警惕制度過於僵化陳腐，定期為石陣引入新鮮的水流與空氣。',
    positionContext: {
      past: '當初打下的扎實制度防禦體系，如今正在發揮強大的保護傘作用。',
      present: '退回你的安全陣地，在熟悉的體系與規則保護下調兵遣將。',
      future: '你構建的體系將經受住時間的漫長考驗，成為行業或領域的標竿標準。',
      single: '陣法已成，穩若泰山。依靠嚴整的系統力量，無懼任何狂風暴雨。'
    }
  },
  {
    id: 'mithril-vault',
    number: 51,
    name: '秘銀金庫',
    nameEn: 'The Mithril Vault',
    element: 'Earth',
    elementLabel: '地下深藏',
    runeSymbol: 'ᚠ',
    runeName: 'Fehu · 終極儲備',
    themeColor: '#94a3b8',
    keywords: ['底牌儲備', '深藏不露', '終極保障', '隱形實力'],
    verse: [
      '秘銀厚門深鎖於地心千尋，',
      '七十二把符文重鎖相連。',
      '智者從不展示最後底牌，',
      '深藏蓄力，方能任憑風浪起。'
    ],
    interpretation: '秘銀金庫代表最後的壓箱底資源與未公開的王牌。你擁有比外界想像中更豐厚的底氣與退路，保持深藏不露，這份底氣會讓你在任何談判中處於不敗之地。',
    actionAdvice: '守住你的秘密籌碼，不輕易亮出底牌，在關鍵談判時作為最後一擊。',
    cautionWarning: '切莫因懷揣寶藏而炫耀招搖，悶聲發大財才是保全實力的最高智慧。',
    positionContext: {
      past: '當初悄悄留下的那一筆備用金或備用方案，成了今天最關鍵的定心丸。',
      present: '你的真實實力遠超對手的估計，保持這份神秘感與戰略定力。',
      future: '在終局決勝時刻，你的最後底牌將一錘定音，贏得整場戰局。',
      single: '金庫深藏，底氣十足。不顯山不露水，勝券早已握於股掌。'
    }
  },
  {
    id: 'wandering-bard',
    number: 52,
    name: '流浪吟遊詩人',
    nameEn: 'The Wandering Bard',
    element: 'Air',
    elementLabel: '長風琴聲',
    runeSymbol: 'ᚹ',
    runeName: 'Wunjo · 詩篇傳唱',
    themeColor: '#f59e0b',
    keywords: ['傳奇傳唱', '人生如詩', '笑看風雲', '講述故事'],
    verse: [
      '魯特琴弦撥動悲歡離合，',
      '一壺濁酒笑看天下興衰。',
      '勝負成敗終將化作傳奇，',
      '昂首行於世間，每一步皆是詩篇。'
    ],
    interpretation: '流浪吟遊詩人象徵最高境界的灑脫與超然。生命本是一場宏大的冒險史詩，無論眼前的得失如何，你都是自己這部傳奇的主角，盡情去經歷、去感受、去傳唱。',
    actionAdvice: '將你的經歷整理成故事或文章分享出來，鼓舞他人，用詩人的從容面對得失。',
    cautionWarning: '警惕流浪成癮缺乏落腳歸宿，在瀟灑的同時別忘了經營世俗生活的安穩。',
    positionContext: {
      past: '過往的跌宕起伏皆已化為談笑風生的美談，成為你最迷人的人格魅力。',
      present: '放寬心胸，這不過是史詩中的一個小小高潮，笑看風雲，繼續撫琴前行。',
      future: '你的冒險事蹟將被眾人傳揚歌頌，成為後人津津樂道的勵志傳奇。',
      single: '天地為舞台，人生為長詩。瀟灑前行，你的傳奇正在書寫！'
    }
  }
];

export const SPREAD_OPTIONS = [
  {
    type: 'single' as const,
    title: '單張神諭 · 即刻啟示',
    subtitle: '簡明扼要 · 直指核心',
    description: '適合日常指引、迅速明晰當前心態，或對特定即時問題求取神諭定奪。',
    cardCount: 1,
    positions: [
      { id: 'single' as const, label: '核心神諭', sublabel: 'CORE ORACLE', description: '當前核心指引與命運昭示' }
    ]
  },
  {
    type: 'three' as const,
    title: '三女神牌陣 · 時光之流',
    subtitle: '過往 · 當下 · 曙光',
    description: '適合人生轉折、重大抉擇、深入解讀前因後果與未來的突破路徑。',
    cardCount: 3,
    positions: [
      { id: 'past' as const, label: '過去之影', sublabel: 'THE PAST SHADOW', description: '造就現狀的前因與潛在根基' },
      { id: 'present' as const, label: '當前考驗', sublabel: 'CURRENT TRIAL', description: '此刻正在發生的核心課題與試煉' },
      { id: 'future' as const, label: '命運曙光', sublabel: 'DAWN OF DESTINY', description: '破局之徑與未來的命運趨向' }
    ]
  }
];

export const PRESET_PRAYERS = [
  '⚔️ 冒險與事業前途的突破契機？',
  '🌙 迷茫困惑中的心靈定見與指引？',
  '💫 情感羈絆與重要人際關係的走向？',
  '⚖️ 當前重大抉擇的命運啟示與警語？',
  '🗝️ 潛在阻礙背後隱藏的真正禮物？'
];
