# ChaseMonsterAway's Blog

基于 **Jekyll + GitHub Pages + GitHub Actions** 构建的个人博客。

## 特性

- ✅ 左侧 **Tree 结构导航**（支持展开/折叠）
- ✅ GitHub Actions 自动部署
- ✅ 响应式设计
- ✅ SEO 优化（jekyll-seo-tag）
- ✅ 文章分类/标签支持

## 目录结构

```
.
├── .github/
│   └── workflows/
│       └── pages.yml          # GitHub Actions 自动部署配置
├── _includes/
│   └── tree.html              # Tree 导航组件
├── _layouts/
│   ├── default.html           # 默认布局
│   └── post.html              # 文章布局
├── _posts/                    # 文章目录
├── assets/
│   ├── css/style.css          # 样式（含 Tree 样式）
│   └── js/tree.js             # Tree 交互逻辑
├── _config.yml                # Jekyll 配置
├── about.md                   # 关于页面
├── index.md                   # 首页
└── Gemfile                    # Ruby 依赖
```

## 本地开发

```bash
# 安装依赖
bundle install

# 启动本地服务器
bundle exec jekyll serve

# 访问 http://localhost:4000
```

## 写文章

在 `_posts/` 目录下新建文件，命名格式为 `YYYY-MM-DD-title.md`：

```markdown
---
layout: post
title: "文章标题"
date: 2026-05-09 12:00:00 +0800
categories: [分类名]
tags: [标签1, 标签2]
---

正文内容...
```

## 部署

1. 将此项目推送到 GitHub 仓库 `ChaseMonsterAway/ChaseMonsterAway.github.io`
2. 在仓库 **Settings > Pages** 中将 Source 设为 "GitHub Actions"
3. 推送代码后自动部署，访问 `https://chasemonsteraway.github.io`

## Tree 导航说明

- 点击 ▶ 可展开/折叠目录
- 当前页面所在路径会自动展开
- 支持 "文章" 平铺列表和 "分类" 层级结构两种浏览方式
