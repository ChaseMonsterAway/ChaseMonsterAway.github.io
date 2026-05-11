---
layout: post
title: "Tree 结构导航实现"
date: 2026-05-07 10:00:00 +0800
categories: [前端, jekyll]
tags: [javascript, css]
---

本博客的左侧导航支持 Tree 结构展开/折叠，方便浏览大量文章和分类。

## 实现原理

- 使用 **Liquid** 遍历文章和分类
- 使用 **CSS** 控制展开/折叠动画
- 使用 **原生 JavaScript** 处理交互

## 使用方式

点击左侧带有 ▶ 的文件夹图标即可展开/折叠子项，当前页面所在路径会自动展开。
