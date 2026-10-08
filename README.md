# Mingxuan Sun · 个人研究者学术主页

独立静态项目，不属于 CSI_SYSTEM。仅使用 HTML、CSS、Vanilla JavaScript；没有 npm、构建步骤、后端、数据库、CDN、追踪或分析服务。

## 文件结构

```text
index.html          页面结构、英文基础内容与 SEO metadata
style.css           响应式布局、主题变量与轻量动画
app.js              zh / ja / en 字典及交互
assets/favicon.svg  原创无线信号图标
.nojekyll           告诉 GitHub Pages 直接提供静态文件
README.md           预览、部署与维护说明
```

## 本地预览

直接双击 `index.html` 即可。语言字典内嵌在 JS 中，不使用 fetch，支持 file:// 与离线打开。系统字体、本地 CSS/JS/SVG 不依赖网络。GitHub、OP.GG 和发送邮件需要相应网络或邮件应用。

也可以在本文件所在目录运行（Python 仅是可选预览工具，不是项目依赖）：

```sh
python -m http.server 8000
```

浏览器打开 http://localhost:8000 。

## 推送到 GitHub

建议在 GitHub 新建公开仓库 `orangesmx020-tech.github.io`。若同名仓库已经存在，请先检查原有内容，避免覆盖。以下命令在本项目目录执行；先确认 Git 中的姓名和邮箱已配置：

```sh
git init
git add .
git commit -m "Create multilingual academic homepage"
git branch -M main
git remote add origin https://github.com/orangesmx020-tech/orangesmx020-tech.github.io.git
git push -u origin main
```

这是新建空仓库的流程；已有仓库应先 clone 再合并文件，不使用 force push。也可以使用 GitHub 的 Upload files 上传项目文件，保持 `index.html` 位于仓库根目录。

## GitHub Pages 部署

仓库 **Settings → Pages → Build and deployment**：

1. Source 选择 **Deploy from a branch**。
2. Branch 选择 **main**。
3. 目录选择 **/ (root)**，点击 **Save**。
4. 等待 GitHub Pages 部署完成，再访问 https://orangesmx020-tech.github.io/ 。

若使用其他仓库名，默认地址为 `https://orangesmx020-tech.github.io/仓库名/`。页面资源全部使用相对路径，两种方式都兼容。无需 Actions 工作流或构建配置。

## 内容与交互

- Hero 展示姓名、千叶大学 M1 身份、小室研究室与具体研究简介；以文字为主，低对比度 CSI 波形和网格仅作背景；提供 GitHub、Email、OP.GG 按钮，无照片、无真实实验数据。
- About Me + Quick Info / What I’m Working On / Research Interests / Projects / Education / News / Contact + Outside the Lab 七个正文 section。
- `app.js` 的 `translations` 使用统一键名维护 zh、ja、en。HTML 中 `data-i18n` 与 `data-i18n-aria` 对应正文和辅助标签。
- 优先读取保存的 `language`，否则从浏览器语言列表选择支持的语言，再回退 English。切换通过 textContent 更新，不插入 HTML。
- 主题首次遵循系统；手动切换后存储 `theme`。未手动选择时跟随系统变化。存储不可用时仍可浏览和切换。主题通过 CSS 变量适配全部组件。
- 1100px 以下折叠导航；760px 以下主要内容改为单列，研究小卡片保留双列。菜单支持 Escape、点击外部和导航后关闭。
- 导航滚动高亮、平滑滚动、卡片 hover、timeline ；支持 prefers-reduced-motion。
- Email 使用 mailto；GitHub / OP.GG 在新窗口打开并设有 noopener noreferrer。
- 国服信息用原生 dialog 显示：德玛西亚 / 且凭风引絮飞花#29245。支持关闭按钮、Escape、点击背景和焦点恢复。
- 无 JavaScript 时全部英文正文仍可阅读，语言及交互需要启用 JavaScript。

## 后续维护

- 更新项目细节、真实代码仓库链接或截图；目前没有为研究平台猜测仓库地址。
- 主项目为 Ongoing，仅保留一个 Planned 项目：Cross-Environment CSI Generalization；开始研究后再更新状态和三语字典。
- 教育英文名称暂按提供内容使用，源代码已注释标记，后续可根据学校官方名称再次确认。
- News 按提供的两条真实事件填写，可随进展增加。教育背景不显示年份。
- 可补充真实论文、学术主页链接或履历；目前没有虚构出版物、奖项、Scholar 或 ORCID。
- Footer 年份自动使用访问者设备的当前年份。
- SEO title、description 和基础 Open Graph 已配置。更改研究方向时同步修改 metadata；实际确定部署域名后可补充 canonical / og:url。

## 发布前复核

在桌面与手机上分别检查三种语言、深浅主题、导航、Email、GitHub、OP.GG 与国服弹窗。外部服务的实时可达性、邮箱收件与 GitHub Pages 在线部署状态需要在实际发布后确认。


## 当前视觉与内容

以研究生的个人主页为定位。研究兴趣只保留 Wi-Fi CSI、人体状态估计、室内定位、泛化与鲁棒性；不设 Publications 或 CV 空栏目。蓝色用于主视觉、当前工作区域和教育主线；橘色用于按钮、项目侧栏、卡片顶线和节点。金色只用于章节短线、News 节点和卡片 hover 细边。深浅主题均使用独立 CSS 变量。学校和专业英文正式名称在源码中保留 TODO。
