# Explorer Browser

[简体中文](README.CN.md) | [English](./README.md)

![demo](https://github.com/user-attachments/assets/8ffe4298-358b-44cb-86ee-191d0a0f0292)

一个轻量级的VSCode内置浏览器扩展，让你可以直接在VSCode的资源管理器中浏览网页内容。

## 功能特点

- 🌐 在VSCode资源管理器中直接打开网页
- 🔄 支持基本的浏览器操作（前进、后退、刷新）
- 🔒 可配置的焦点锁定指示器
- 🔗 支持在外部浏览器中打开当前页面
- 📱 响应式界面设计

## 安装

在VSCode扩展市场中搜索"Explorer Browser"并安装，或者通过以下命令安装：

```bash
code --install-extension eric-gitta-moore.explorer-browser
```

## 使用方法

1. 在VSCode命令面板中输入 `Explorer Browser: Open URL` 或使用快捷键打开URL输入框
2. 输入要访问的网址（默认为 example.com）
3. 网页将在资源管理器视图中打开
4. 使用工具栏按钮进行导航操作：
   - 后退
   - 前进
   - 刷新
   - 在外部浏览器中打开

## 配置选项

在VSCode设置中可以配置以下选项：

- `explorerBrowser.focusLockIndicator.enabled`: 启用/禁用焦点锁定指示器（默认：false）

## 开发

### 环境要求

- VSCode ^1.97.0
- Node.js
- pnpm

### 本地开发

1. 克隆仓库
```bash
git clone https://github.com/eric-gitta-moore/vscode-explorer-browser.git
```

2. 安装依赖
```bash
pnpm install
```

3. 在VSCode中打开项目并按F5启动调试

## 许可证

[MIT](LICENSE)

## 作者

[Eric Moore](https://github.com/eric-gitta-moore)
