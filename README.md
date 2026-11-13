# 序衡 Ordloom 官网

「序衡 Ordloom」的官方网站,纯静态页面(HTML/CSS/JS,无构建依赖),通过 **GitHub Pages(`gh-pages` 分支)** 发布。

- 线上地址:<https://neekin.github.io/ordloom-site/>
- 主项目:<https://github.com/neekin/simpleui-antd>
- 使用手册:<https://github.com/neekin/ordloom-docs>

## 目录

```
index.html    # 单页官网(功能 / 九应用生态 / CRM / 界面 / 快速开始 / 数据能力 / 安全)
styles.css    # 样式(品牌色 #6366f1,响应式,支持 prefers-reduced-motion)
script.js     # 轻量交互:移动端菜单、复制命令、滚动显现
assets/       # 截图、演示动图与品牌图标(来自主仓库 docs/images 与包内图标)
```

## 发布流程

站点内容改动后,把根目录文件同步到 `gh-pages` 分支:

```bash
git checkout gh-pages
git merge main   # 或从 main 复制根目录文件
git push origin gh-pages
```

GitHub Pages 源设置为 `gh-pages` 分支根目录(GitHub Actions 无需配置)。

当前内容对应 Ordloom 1.2.0：九个 0.1.0 业务子应用、CRM 客户关系概览、39 种搭建选项、18 类图表、17 套页面模板与 12 类问卷题目。子应用独立安装,详见官网中各接入指南链接。源码更新后还需同步 gh-pages 才会更新线上页面。
