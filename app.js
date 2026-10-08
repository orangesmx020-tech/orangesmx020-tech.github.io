"use strict";
const translations = {
  "en": {
    "email": "Email",
    "name": "Mingxuan Sun",
    "identity": "Master’s Student at Chiba University",
    "tagline": "Wireless Sensing · Wi-Fi CSI · Human-Centered Intelligent Environments",
    "eyebrow": "RESEARCH & PERSONAL NOTES",
    "heroIntro": "I am a master’s student at Chiba University, interested in wireless sensing, Wi-Fi CSI, multimodal sensing, indoor localization, and human-state estimation.",
    "focus": "My current work focuses on building practical sensing systems that can understand human presence, activity, and environmental context without relying on wearable devices.",
    "robust": "I am particularly interested in robust sensing systems that can generalize across environments, devices, users, and time.",
    "personal": "Outside research, I enjoy gaming, computer hardware, and building technical projects that are fun to tinker with. If you want to talk about wireless sensing — or just play some games — feel free to reach out.",
    "about": "About",
    "research": "Research",
    "projects": "Projects",
    "education": "Education",
    "news": "News",
    "contact": "Contact",
    "aboutTitle": "A little about me",
    "researchTitle": "What I’m exploring",
    "projectsTitle": "From ideas to working systems",
    "educationTitle": "My academic path",
    "newsTitle": "Recent milestones",
    "contactTitle": "Let’s connect",
    "contactIntro": "Research, collaboration, or games — feel free to reach out.",
    "visualLabel": "WIRELESS / HUMAN / SPACE",
    "visualNote": "Understanding people through signals",
    "illustration": "Abstract wireless signal illustration; decorative, not experimental data.",
    "active": "Active",
    "planned": "Planned",
    "plannedNote": "A future research direction. Details will be added as the work develops.",
    "project1": "ESP32-S3 Wi-Fi CSI Sensing Platform",
    "project1Desc": "A real-time Wi-Fi CSI sensing platform based on ESP32-S3 devices, supporting experiment management, UDP-based CSI acquisition, device monitoring, historical data management, raw CSI visualization, complex I/Q parsing, and amplitude / phase visualization.",
    "project2": "Wi-Fi CSI Generalization Study",
    "project3": "Indoor Localization",
    "project4": "Multimodal Human-State Estimation",
    "r0Title": "Wi-Fi CSI Sensing",
    "r0Desc": "Using Wi-Fi Channel State Information for non-contact human and environmental sensing.",
    "r1Title": "Human-State Estimation",
    "r1Desc": "Presence, activity, location, and other human-related states inferred from wireless and environmental signals.",
    "r2Title": "Multimodal Sensing",
    "r2Desc": "Fusion of wireless signals, environmental sensors, activity information, and other modalities.",
    "r3Title": "Robust & Generalizable Sensing",
    "r3Desc": "Sensing systems that remain reliable across different environments, devices, users, and time periods.",
    "r4Title": "Intelligent Environments",
    "r4Desc": "Human-centered intelligent spaces that can understand people and environmental context.",
    "school1": "Chiba University",
    "degree1": "Master’s Program",
    "faculty1": "Graduate School of Science and Engineering",
    "course1": "Information and Computer Sciences",
    "school2": "Hokuriku University",
    "degree2": "Bachelor’s Degree",
    "faculty2": "Faculty of Economics and Management",
    "course2": "IT Course",
    "school3": "Dalian University of Foreign Languages",
    "course3": "Software Engineering",
    "news1": "Built and deployed a real-time ESP32-S3 Wi-Fi CSI sensing platform.",
    "news2": "Started master’s study at Chiba University.",
    "news3": "Research focus expanded toward Wi-Fi CSI sensing and robust human-state estimation.",
    "gaming": "Beyond research",
    "jpGame": "League of Legends · Japan",
    "cnGame": "League of Legends · China",
    "showId": "Show Riot ID",
    "server": "Server: Demacia",
    "close": "Close",
    "menu": "Open navigation",
    "menuClose": "Close navigation",
    "light": "Light",
    "dark": "Dark",
    "toLight": "Switch to light theme",
    "toDark": "Switch to dark theme",
    "skip": "Skip to content",
    "navLabel": "Main navigation",
    "langLabel": "Language",
    "footer": "Built with HTML, CSS and JavaScript.",
    "nojs": "Language and theme controls require JavaScript. All English content is available below."
  },
  "zh": {
    "email": "电子邮箱",
    "name": "孙铭轩",
    "identity": "千叶大学硕士研究生",
    "tagline": "无线感知 · Wi-Fi CSI · 人本智能环境",
    "eyebrow": "研究与个人记录",
    "heroIntro": "我是千叶大学硕士研究生，研究兴趣主要集中在无线感知、Wi-Fi CSI、多模态感知、室内定位与人体状态估计。",
    "focus": "目前主要关注如何利用无线信号和环境传感信息，在不依赖穿戴设备的情况下理解人的存在、活动与环境状态。",
    "robust": "我尤其关注感知系统在不同环境、设备、人员和时间条件下的鲁棒性与泛化能力。",
    "personal": "除了研究之外，我也喜欢游戏、计算机硬件，以及各种值得折腾的技术项目。如果你想聊无线感知，或者只是想找人一起打游戏，都欢迎联系我。",
    "about": "关于我",
    "research": "研究方向",
    "projects": "项目",
    "education": "教育背景",
    "news": "动态",
    "contact": "联系我",
    "aboutTitle": "关于研究，也关于生活",
    "researchTitle": "我关注的研究方向",
    "projectsTitle": "从想法到实际系统",
    "educationTitle": "我的学习经历",
    "newsTitle": "近期记录",
    "contactTitle": "欢迎交流",
    "contactIntro": "无论是研究合作、技术交流，还是一起打游戏，都欢迎联系我。",
    "visualLabel": "无线 / 人 / 空间",
    "visualNote": "用信号理解人与空间",
    "illustration": "抽象无线信号示意，仅作装饰，不代表实验数据。",
    "active": "进行中",
    "planned": "计划中",
    "plannedNote": "预留研究方向，后续随研究进展补充内容。",
    "project1": "ESP32-S3 Wi-Fi CSI 感知平台",
    "project1Desc": "基于 ESP32-S3 构建的实时 Wi-Fi CSI 感知实验平台，支持实验管理、UDP CSI 采集、设备在线监控、历史数据管理、原始 CSI 可视化、复数 I/Q 解析以及幅值和相位展示。",
    "project2": "Wi-Fi CSI 泛化研究",
    "project3": "室内定位",
    "project4": "多模态人体状态估计",
    "r0Title": "Wi-Fi CSI 感知",
    "r0Desc": "利用 Wi-Fi 信道状态信息进行非接触式人体与环境感知。",
    "r1Title": "人体状态估计",
    "r1Desc": "利用无线信号和环境信息估计人的存在、活动、位置以及其他人体相关状态。",
    "r2Title": "多模态感知",
    "r2Desc": "融合无线信号、环境传感器、活动信息及其他多模态数据。",
    "r3Title": "鲁棒性与泛化感知",
    "r3Desc": "研究能够跨环境、跨设备、跨人员、跨时间稳定工作的感知系统。",
    "r4Title": "智能环境",
    "r4Desc": "构建能够理解人和环境状态的人本智能空间。",
    "school1": "千叶大学",
    "degree1": "硕士",
    "faculty1": "融合理工学府",
    "course1": "情报科学 / 情报工学相关方向",
    "school2": "北陆大学",
    "degree2": "学士",
    "faculty2": "经济经营学部",
    "course2": "IT 课程",
    "school3": "大连外国语大学",
    "course3": "软件工程",
    "news1": "构建并部署了实时 ESP32-S3 Wi-Fi CSI 感知平台。",
    "news2": "开始在千叶大学攻读硕士。",
    "news3": "研究方向拓展至 Wi-Fi CSI 感知与鲁棒人体状态估计。",
    "gaming": "研究之外",
    "jpGame": "英雄联盟 · 日服",
    "cnGame": "英雄联盟 · 国服",
    "showId": "查看 Riot ID",
    "server": "服务器：德玛西亚",
    "close": "关闭",
    "menu": "展开导航",
    "menuClose": "收起导航",
    "light": "浅色",
    "dark": "深色",
    "toLight": "切换浅色主题",
    "toDark": "切换深色主题",
    "skip": "跳至正文",
    "navLabel": "主导航",
    "langLabel": "语言",
    "footer": "使用 HTML、CSS 和 JavaScript 构建。",
    "nojs": "语言与主题切换需要 JavaScript；下方英文内容仍可阅读。"
  },
  "ja": {
    "email": "メール",
    "name": "孫 銘軒（ソン・メイケン）",
    "identity": "千葉大学 大学院生",
    "tagline": "無線センシング · Wi-Fi CSI · 人間中心型知能環境",
    "eyebrow": "研究とパーソナルノート",
    "heroIntro": "千葉大学の大学院生です。無線センシング、Wi-Fi CSI、マルチモーダルセンシング、屋内測位、人間状態推定に関心があります。",
    "focus": "現在は、ウェアラブルデバイスに依存せず、無線信号や環境情報から人の存在・行動・周囲の状況を理解する実用的なセンシングシステムについて研究しています。",
    "robust": "特に、環境・デバイス・個人・時間の違いに対して頑健なセンシングシステムに興味があります。",
    "personal": "研究以外では、ゲーム、PC ハードウェア、そして色々な技術プロジェクトをいじることも好きです。無線センシングの話でも、ゲームのお誘いでも、気軽に連絡してください。",
    "about": "自己紹介",
    "research": "研究分野",
    "projects": "プロジェクト",
    "education": "学歴",
    "news": "近況",
    "contact": "連絡先",
    "aboutTitle": "研究、そして日常",
    "researchTitle": "探究しているテーマ",
    "projectsTitle": "アイデアから動くシステムへ",
    "educationTitle": "これまでの学び",
    "newsTitle": "最近の歩み",
    "contactTitle": "気軽につながりましょう",
    "contactIntro": "研究・技術交流はもちろん、ゲームのお誘いも歓迎です。",
    "visualLabel": "無線 / 人 / 空間",
    "visualNote": "信号から人と空間を理解する",
    "illustration": "抽象的な無線信号のイメージ。実験データではありません。",
    "active": "進行中",
    "planned": "計画中",
    "plannedNote": "今後取り組みたい研究テーマ。進展に合わせて詳細を追加します。",
    "project1": "ESP32-S3 Wi-Fi CSI センシングプラットフォーム",
    "project1Desc": "ESP32-S3 を用いたリアルタイム Wi-Fi CSI センシング実験プラットフォーム。実験管理、UDP による CSI 取得、デバイス監視、履歴管理、Raw CSI 可視化、複素 I/Q 解析、振幅・位相表示に対応。",
    "project2": "Wi-Fi CSI の汎化性能の研究",
    "project3": "屋内測位",
    "project4": "マルチモーダル人間状態推定",
    "r0Title": "Wi-Fi CSI センシング",
    "r0Desc": "Wi-Fi CSI を用いた非接触型の人体・環境センシング。",
    "r1Title": "人間状態推定",
    "r1Desc": "無線信号や環境情報から人の存在・行動・位置などの状態を推定する研究。",
    "r2Title": "マルチモーダルセンシング",
    "r2Desc": "無線信号、環境センサ、行動情報など複数モダリティの融合。",
    "r3Title": "頑健性と汎化性能",
    "r3Desc": "環境・デバイス・個人・時間の違いに対して頑健に動作するセンシングシステム。",
    "r4Title": "知能環境",
    "r4Desc": "人と環境の状態を理解できる人間中心型知能空間。",
    "school1": "千葉大学",
    "degree1": "修士課程",
    "faculty1": "大学院融合理工学府",
    "course1": "情報科学・情報工学関連分野",
    "school2": "北陸大学",
    "degree2": "学士",
    "faculty2": "経済経営学部",
    "course2": "IT コース",
    "school3": "大連外国語大学",
    "course3": "ソフトウェア工学",
    "news1": "リアルタイム ESP32-S3 Wi-Fi CSI センシングプラットフォームを構築・運用。",
    "news2": "千葉大学で修士課程の学修を開始。",
    "news3": "研究テーマを Wi-Fi CSI センシングと頑健な人間状態推定へ展開。",
    "gaming": "研究の外で",
    "jpGame": "League of Legends · 日本",
    "cnGame": "League of Legends · 中国",
    "showId": "Riot ID を表示",
    "server": "サーバー：デマーシア（德玛西亚）",
    "close": "閉じる",
    "menu": "ナビゲーションを開く",
    "menuClose": "ナビゲーションを閉じる",
    "light": "ライト",
    "dark": "ダーク",
    "toLight": "ライトテーマに切り替える",
    "toDark": "ダークテーマに切り替える",
    "skip": "本文へスキップ",
    "navLabel": "メインナビゲーション",
    "langLabel": "言語",
    "footer": "HTML、CSS、JavaScript で制作。",
    "nojs": "言語・テーマ切替には JavaScript が必要です。英語の本文は引き続き閲覧できます。"
  }
};

// 本地偏好可能因浏览器隐私设置而不可用，不应影响页面显示。
const readPreference = key => { try { return localStorage.getItem(key); } catch { return null; } };
const savePreference = (key, value) => { try { localStorage.setItem(key, value); } catch {} };
const systemTheme = matchMedia('(prefers-color-scheme: dark)');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let language = 'en';
let explicitTheme = ['light', 'dark'].includes(readPreference('theme'));
const menu = document.querySelector('#navigation');
const menuButton = document.querySelector('#menu-toggle');
const themeButton = document.querySelector('#theme-toggle');
const dialog = document.querySelector('#game-dialog');

function updateThemeControl() {
  const dark = document.documentElement.dataset.theme === 'dark';
  document.querySelector('#theme-label').textContent = translations[language][dark ? 'light' : 'dark'];
  document.querySelector('#theme-icon').textContent = dark ? '☀' : '◐';
  themeButton.setAttribute('aria-label', translations[language][dark ? 'toLight' : 'toDark']);
  themeButton.title = themeButton.getAttribute('aria-label');
}
function updateMenuControl() {
  const open = menu.classList.contains('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', translations[language][open ? 'menuClose' : 'menu']);
}
function setLanguage(next, persist = true) {
  language = Object.hasOwn(translations, next) ? next : 'en';
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = translations[language][element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(element => {
    element.setAttribute('aria-label', translations[language][element.dataset.i18nAria]);
  });
  document.querySelectorAll('[data-lang]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === language));
  });
  document.querySelector('#dialog-close').setAttribute('aria-label', translations[language].close);
  updateThemeControl();
  updateMenuControl();
  if (persist) savePreference('language', language);
}
const savedLanguage = readPreference('language');
const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language || 'en'];
const detectedLanguage = browserLanguages.map(value => value.toLowerCase().split('-')[0]).find(value => Object.hasOwn(translations, value)) || 'en';
setLanguage(Object.hasOwn(translations, savedLanguage) ? savedLanguage : detectedLanguage, false);

document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
themeButton.addEventListener('click', () => {
  explicitTheme = true;
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  savePreference('theme', next);
  updateThemeControl();
});
systemTheme.addEventListener('change', event => {
  if (!explicitTheme) {
    document.documentElement.dataset.theme = event.matches ? 'dark' : 'light';
    updateThemeControl();
  }
});
function closeMenu() { menu.classList.remove('open'); updateMenuControl(); }
menuButton.addEventListener('click', () => { menu.classList.toggle('open'); updateMenuControl(); });
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
matchMedia('(min-width: 961px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

// 使用原生 dialog，提供键盘关闭、焦点约束以及关闭后的焦点恢复。
document.querySelector('#cn-game').addEventListener('click', () => dialog.showModal());
document.querySelector('#dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
document.querySelector('#year').textContent = new Date().getFullYear();

// 装饰波形为数学示意，不使用或暗示真实实验数据。
const signalLines = document.querySelector('#signal-lines');
for (let band = 0; band < 7; band++) {
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  const points = [];
  for (let x = 0; x <= 480; x += 3) {
    const envelope = Math.exp(-Math.pow((x - 240) / 125, 2));
    const y = 185 + (band - 3) * 14 + Math.sin(x / 23 + band * .42) * (48 + band * 3) * envelope;
    points.push(`${x === 0 ? 'M' : 'L'}${x},${y.toFixed(2)}`);
  }
  path.setAttribute('d', points.join(' '));
  path.setAttribute('opacity', String(.24 + band * .1));
  signalLines.appendChild(path);
}

// 渐入为渐进增强；不支持观察器或减少动态效果时保持内容可见。
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  document.body.classList.add('motion-ready');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
    });
  }, { threshold: .08 });
  document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
}
const sections = [...document.querySelectorAll('main section[id]')];
let scrollQueued = false;
function updateActiveSection() {
  const marker = document.querySelector('.site-header').getBoundingClientRect().height + 100;
  let current = 'home';
  sections.forEach(section => { if (section.getBoundingClientRect().top <= marker) current = section.id; });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5) current = 'contact';
  menu.querySelectorAll('[data-section]').forEach(link => {
    if (link.dataset.section === current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scrollQueued = false;
}
window.addEventListener('scroll', () => {
  if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(updateActiveSection); }
}, { passive: true });
window.addEventListener('resize', updateActiveSection);
updateActiveSection();
