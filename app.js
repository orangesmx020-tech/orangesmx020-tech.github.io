"use strict";
const translations = {
  "en": {
    "name": "Mingxuan Sun",
    "identity": "M1 Student, Chiba University",
    "lab": "Komuro Laboratory",
    "heroIntro": "My research focuses on Wi-Fi CSI sensing, indoor localization, and human-state estimation. I am currently building an ESP32-S3-based Wi-Fi CSI experimental platform and exploring presence detection, activity sensing, and robustness across different environments.",
    "homeNote": "My little corner of the web",
    "about": "About Me",
    "working": "Working On",
    "research": "Research Interests",
    "projects": "Projects",
    "education": "Education",
    "news": "News",
    "contact": "Contact",
    "workingTitle": "What I’m working on",
    "about1": "I’m an M1 student in the Komuro Laboratory at Chiba University, working on Wi-Fi CSI sensing.",
    "about2": "I’m interested in detecting whether someone is present, recognizing activity, indoor localization, and how CSI sensing performs in different environments and on different devices.",
    "about3": "Outside research, I like PC hardware, gaming, music, and technical projects I can tinker with myself. Feel free to get in touch about research, tech, or a game together.",
    "quick": "Quick info",
    "based": "University",
    "yearLabel": "Year / Lab",
    "yearLab": "M1 · Komuro Laboratory",
    "nowLabel": "Working with",
    "task1": "ESP32-S3 Wi-Fi CSI platform",
    "task1Desc": "Building and testing the experiment setup.",
    "task2": "Real-time CSI acquisition",
    "task2Desc": "Collecting and inspecting data from devices.",
    "task3": "Human presence sensing",
    "task3Desc": "Preparing data for presence and activity experiments.",
    "task4": "Cross-environment robustness",
    "task4Desc": "Checking what changes between rooms and setups.",
    "r0Title": "Wi-Fi CSI Sensing",
    "r0Desc": "Non-contact human sensing using Wi-Fi Channel State Information.",
    "r1Title": "Human-State Estimation",
    "r1Desc": "Presence, static states, movement, and activity recognition.",
    "r2Title": "Indoor Localization",
    "r2Desc": "Indoor position and trajectory estimation using wireless signals.",
    "r3Title": "Generalization & Robustness",
    "r3Desc": "Maintaining sensing performance across rooms, devices, users, and time.",
    "ongoing": "Ongoing",
    "planned": "Planned",
    "project1": "ESP32-S3 Wi-Fi CSI Sensing Platform",
    "project1Desc": "An ESP32-S3-based Wi-Fi CSI experimental platform. It currently supports real-time CSI acquisition, experiment and device management, UDP data collection, historical storage, raw CSI inspection, and I/Q, amplitude, and phase visualization.",
    "projectNext": "The platform will be used for upcoming presence detection, activity sensing, and cross-environment experiments.",
    "nextLabel": "Next step",
    "future": "Future / Planned",
    "futureTitle": "Cross-Environment CSI Generalization",
    "futureDesc": "Planned: compare CSI sensing across rooms using data collected with the platform.",
    "school1": "Chiba University",
    "faculty1": "Graduate School of Science and Engineering",
    "course1": "Information Science",
    "school2": "Hokuriku University",
    "faculty2": "Faculty of Economics and Management",
    "course2": "IT Course",
    "school3": "Dalian University of Foreign Languages",
    "course3": "Software Engineering",
    "news1": "Completed the first version of an ESP32-S3 Wi-Fi CSI experimental platform and began real-world data collection tests.",
    "news2": "Started my master’s study at Chiba University.",
    "outside": "Outside the lab",
    "gaming": "Gaming",
    "hardware": "PC Hardware",
    "building": "Building Things",
    "music": "Music",
    "contactIntro": "Research, tech, or a game together — feel free to say hello.",
    "email": "Email",
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
    "footer": "Made with HTML, CSS & JavaScript.",
    "nojs": "JavaScript is needed for language and theme controls. English content is available below."
  },
  "zh": {
    "name": "孙铭轩",
    "identity": "千叶大学大学院融合理工学府 情报科学专攻 M1",
    "lab": "小室研究室",
    "heroIntro": "研究方向主要为 Wi-Fi CSI 无线感知、室内定位与人体状态估计。目前正在使用 ESP32-S3 搭建 Wi-Fi CSI 实验平台，并开展人在场检测、活动状态识别以及跨环境泛化相关研究。",
    "homeNote": "我的个人主页",
    "about": "关于我",
    "working": "正在做什么",
    "research": "研究兴趣",
    "projects": "项目",
    "education": "学习经历",
    "news": "近况",
    "contact": "联系我",
    "workingTitle": "目前在做什么",
    "about1": "目前在千叶大学小室研究室学习，主要研究 Wi-Fi CSI 无线感知。",
    "about2": "我的研究兴趣包括人在场检测、活动状态识别、室内定位以及 CSI 感知在不同环境和设备条件下的泛化问题。",
    "about3": "除了研究之外，我也喜欢计算机硬件、游戏、音乐，以及各种可以自己动手折腾的技术项目。如果想聊研究、技术，或者只是想一起打游戏，都欢迎联系我。",
    "quick": "基本信息",
    "based": "学校",
    "yearLabel": "年级 / 研究室",
    "yearLab": "M1 · 小室研究室",
    "nowLabel": "目前使用",
    "task1": "ESP32-S3 Wi-Fi CSI 平台",
    "task1Desc": "搭建并测试实验平台。",
    "task2": "实时 CSI 采集",
    "task2Desc": "从设备采集数据，并检查原始 CSI。",
    "task3": "人在场感知",
    "task3Desc": "为人在场与活动状态实验准备数据。",
    "task4": "跨环境鲁棒性",
    "task4Desc": "关注房间与设备条件变化带来的影响。",
    "r0Title": "Wi-Fi CSI 无线感知",
    "r0Desc": "利用 Wi-Fi 信道状态信息进行非接触式人体感知。",
    "r1Title": "人体状态估计",
    "r1Desc": "关注人在场、静止、活动等状态识别。",
    "r2Title": "室内定位",
    "r2Desc": "研究利用无线信号进行室内位置和轨迹估计。",
    "r3Title": "泛化与鲁棒性",
    "r3Desc": "关注模型在不同房间、设备、人员和时间条件下能否保持稳定性能。",
    "ongoing": "进行中",
    "planned": "计划中",
    "project1": "ESP32-S3 Wi-Fi CSI 实验平台",
    "project1Desc": "使用 ESP32-S3 搭建的 Wi-Fi CSI 实验平台。目前已实现 CSI 实时采集、实验与设备管理、UDP 数据传输、历史数据存储、原始 CSI 查看，以及 I/Q、幅值和相位可视化。",
    "projectNext": "该平台将用于后续的人在场检测、活动状态识别和跨环境实验。",
    "nextLabel": "下一步",
    "future": "后续计划",
    "futureTitle": "跨环境 CSI 泛化研究",
    "futureDesc": "计划使用平台采集的数据，对比不同房间中的 CSI 感知表现。",
    "school1": "千叶大学",
    "faculty1": "大学院融合理工学府 情报科学专攻",
    "course1": "",
    "school2": "北陆大学",
    "faculty2": "经济经营学部マネジメント学科 IT课程",
    "course2": "",
    "school3": "大连外国语大学",
    "course3": "软件工程",
    "news1": "完成 ESP32-S3 Wi-Fi CSI 实验平台第一版搭建，并开始进行真实环境下的数据采集测试。",
    "news2": "进入千叶大学大学院融合理工学府，开始硕士阶段学习。",
    "outside": "实验室之外",
    "gaming": "游戏",
    "hardware": "计算机硬件",
    "building": "技术折腾",
    "music": "音乐",
    "contactIntro": "聊研究、聊技术，或者一起打游戏，都欢迎联系我。",
    "email": "电子邮箱",
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
    "footer": "使用 HTML、CSS 和 JavaScript 编写。",
    "nojs": "语言与主题切换需要 JavaScript；下方英文内容仍可阅读。"
  },
  "ja": {
    "name": "孫 銘軒（ソン・メイケン）",
    "identity": "千葉大学大学院 融合理工学府 情報科学専攻 M1",
    "lab": "小室研究室",
    "heroIntro": "Wi-Fi CSI を用いた無線センシング、屋内測位、人間状態推定を主な研究テーマとしています。現在は ESP32-S3 を用いた Wi-Fi CSI 実験プラットフォームを構築し、在室検知、行動状態推定、環境変化に対する汎化性能について研究しています。",
    "homeNote": "私のホームページ",
    "about": "自己紹介",
    "working": "取り組んでいること",
    "research": "研究テーマ",
    "projects": "プロジェクト",
    "education": "学歴",
    "news": "近況",
    "contact": "連絡先",
    "workingTitle": "いま取り組んでいること",
    "about1": "千葉大学の小室研究室で Wi-Fi CSI を使った無線センシングを研究している、修士1年の学生です。",
    "about2": "在室検知、行動状態の識別、屋内測位に関心があります。部屋やデバイスが変わったときに、CSI センシングがどの程度うまく動くかも気になっています。",
    "about3": "研究以外では、PC ハードウェア、ゲーム、音楽、それから自分で手を動かせる技術プロジェクトが好きです。研究や技術の話でも、ゲームのお誘いでも、気軽に連絡してください。",
    "quick": "基本情報",
    "based": "大学",
    "yearLabel": "学年 / 研究室",
    "yearLab": "M1 · 小室研究室",
    "nowLabel": "使っているもの",
    "task1": "ESP32-S3 Wi-Fi CSI 実験基盤",
    "task1Desc": "実験環境の構築と動作確認。",
    "task2": "リアルタイム CSI 収集",
    "task2Desc": "デバイスからデータを集め、Raw CSI を確認。",
    "task3": "在室検知",
    "task3Desc": "在室・行動状態の実験に向けたデータ収集。",
    "task4": "環境変化への頑健性",
    "task4Desc": "部屋や機器の条件が変わるときの影響を確認。",
    "r0Title": "Wi-Fi CSI センシング",
    "r0Desc": "Wi-Fi のチャネル状態情報を使った、非接触の人体センシング。",
    "r1Title": "人間状態推定",
    "r1Desc": "人の在室、静止、移動などの状態を識別する研究。",
    "r2Title": "屋内測位",
    "r2Desc": "無線信号を使って、屋内の位置や移動軌跡を推定。",
    "r3Title": "汎化性能と頑健性",
    "r3Desc": "部屋、デバイス、人、時間が変わっても、センシング性能を保てるかを調べる研究。",
    "ongoing": "進行中",
    "planned": "計画中",
    "project1": "ESP32-S3 Wi-Fi CSI 実験プラットフォーム",
    "project1Desc": "ESP32-S3 を使った Wi-Fi CSI 実験プラットフォームです。現在は CSI のリアルタイム収集、実験・デバイス管理、UDP によるデータ収集、履歴の保存、Raw CSI の確認、I/Q・振幅・位相の可視化に対応しています。",
    "projectNext": "今後は、このプラットフォームで在室検知、行動状態の識別、異なる環境での実験を行う予定です。",
    "nextLabel": "次にやること",
    "future": "今後の予定",
    "futureTitle": "異なる環境での CSI 汎化性能",
    "futureDesc": "実験基盤で集めたデータを使い、部屋が変わったときの CSI センシング性能を比較する予定です。",
    "school1": "千葉大学",
    "faculty1": "大学院 融合理工学府 情報科学専攻",
    "course1": "",
    "school2": "北陸大学",
    "faculty2": "経済経営学部 ITコース",
    "course2": "",
    "school3": "大連外国語大学",
    "course3": "ソフトウェア工学",
    "news1": "ESP32-S3 を用いた Wi-Fi CSI 実験プラットフォームの初期版を構築し、実環境でのデータ収集テストを開始。",
    "news2": "千葉大学大学院融合理工学府に進学し、修士課程を開始。",
    "outside": "研究室の外で",
    "gaming": "ゲーム",
    "hardware": "PC ハードウェア",
    "building": "技術いじり",
    "music": "音楽",
    "contactIntro": "研究や技術の話でも、一緒にゲームでも。気軽に連絡してください。",
    "email": "メール",
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
    "footer": "HTML・CSS・JavaScript で制作。",
    "nojs": "言語・テーマの切替には JavaScript が必要です。英語の本文は閲覧できます。"
  }
};

// 本地偏好可能因浏览器隐私设置而不可用，不应影响页面显示。
const readPreference = key => { try { return localStorage.getItem(key); } catch { return null; } };
const savePreference = (key, value) => { try { localStorage.setItem(key, value); } catch {} };
const systemTheme = matchMedia('(prefers-color-scheme: dark)');
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
    element.hidden = element.textContent === "";
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
matchMedia('(min-width: 1101px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

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
