# Embodied Agent Research Log

具身 Agent 推理效率与自适应规划的长期研究记录。以问题、证据和实验为核心，逐步整理文献、设计与结果。

**当前阶段：** 文献梳理 / 研究问题定义（尚未完成实验验证）

## 网站

GitHub Pages 的站点源文件位于 [`docs/`](docs/)。发布后可在网站上浏览当前进展、精读笔记、研究问题与预留的实验成果。

## 项目结构

```text
docs/         GitHub Pages 网站（主页、样式与阅读笔记 PDF）
notes/        后续文献精读（Markdown）
weekly/       每周工作记录
proposals/    研究问题、假设与方案
experiments/  实验配置、日志与结果（当前预留）
templates/    可复制的记录模板
```

## 目前研究问题

- **RQ01**：何时将控制权交还给高层模型？
- **RQ02**：如何根据失败类型进行分层恢复？
- **RQ03**：如何在控制变量后证明机制有效，并衡量端到端耗时而不只是 Token？

这些问题目前是研究构想，而非已验证的结论。

## 已有记录

- PyRUA-Lean / *Fewer Tokens, Better Action*：精读笔记 [`docs/assets/pyrualean-reading-notes.pdf`](docs/assets/pyrualean-reading-notes.pdf)。

## 日常更新流程

1. 每周复制 `templates/weekly-template.md` 到 `weekly/YYYY-MM-DD.md`，记录「完成 / 问题 / 下周计划」。
2. 新增文献时，将笔记放入 `notes/`，并在 `docs/index.html` 的“文献精读”区新增一行。
3. 实验启动后复制 `templates/experiment-template.md` 到 `experiments/EXP-001.md`，登记环境、基线、指标、结果和可复现步骤。
4. 一项成果验证后，再将其加入 `docs/index.html` 的“阶段成果”；尚未完成的工作应标记“计划中”。
5. 更新 `docs/index.html` 中的每周进展，以及页面底部的更新时间。

## 发布到 GitHub Pages

1. 在 GitHub 新建公开仓库（例如 `embodied-agent-research`）。
2. 将此文件夹全部上传至仓库根目录。
3. 在 **Settings → Pages → Build and deployment** 中选择 **Deploy from a branch**、`main` 分支、`/docs` 文件夹并保存。
4. 站点地址通常为 `https://用户名.github.io/仓库名/`。
5. 编辑 `docs/main.js`，将 `USERNAME/REPOSITORY` 替换为真实仓库路径，顶部即出现 GitHub 链接。

网站是纯 HTML/CSS/JS，不需要 npm、数据库或构建步骤。

## 原则

仅记录已有工作和真实结果；未开展、未验证的内容明确标注状态。所有数值与结论在记录中保留来源、评估协议及版本信息。
