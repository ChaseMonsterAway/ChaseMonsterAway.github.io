---
layout: default
title: 首页
---

# 欢迎来到我的博客

这里是使用 **Jekyll + GitHub Pages** 搭建的个人博客，左侧支持 **Tree 结构导航**，可以展开/折叠浏览文章和分类。

## 最新文章

<ul class="post-list">
{% for post in site.posts %}
  <li class="post-list-item">
    <h3 class="post-list-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <div class="post-list-meta">
      <time>{{ post.date | date: "%Y-%m-%d" }}</time>
      {% if post.categories.size > 0 %}
        {% for cat in post.categories %}
          <span class="category-tag">{{ cat }}</span>
        {% endfor %}
      {% endif %}
    </div>
    <p class="post-list-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
  </li>
{% endfor %}
</ul>

{% if site.posts.size == 0 %}
<p>暂无文章，快去 <code>_posts</code> 目录下创建一篇吧！</p>
{% endif %}
