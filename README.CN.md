# Explorer Browser

[Extension Marketplace](https://marketplace.visualstudio.com/items?itemName=eric-gitta-moore.explorer-browser) | [.vsix 插件包](https://github.com/eric-gitta-moore/vscode-explorer-browser/releases) | [简体中文](README.CN.md) | [English](./README.md)

一个轻量级的VSCode内置浏览器扩展，让你可以直接在VSCode的资源管理器中浏览网页内容。

![demo](https://github.com/user-attachments/assets/8ffe4298-358b-44cb-86ee-191d0a0f0292)

## 功能特点

- 🌐 在VSCode资源管理器中直接打开网页
- 🔄 支持基本的浏览器操作（前进、后退、刷新）
- 🔒 可配置的焦点锁定指示器
- 🔗 支持在外部浏览器中打开当前页面
- 📱 响应式界面设计

## 安装

安装 Explorer Browser 有两种方式：

1. 从VSCode扩展市场安装：
   - 在VSCode扩展市场中搜索"Explorer Browser"并安装，或
   - 使用以下命令安装：
   ```bash
   code --install-extension eric-gitta-moore.explorer-browser
   ```

2. 手动安装：
   - 从[Releases页面](https://github.com/eric-gitta-moore/vscode-explorer-browser/releases)下载.vsix文件
   - 在VSCode中，打开扩展视图（Ctrl+Shift+X）
   - 点击扩展视图顶部的...（更多操作）按钮
   - 选择"从VSIX安装..."
   - 选择下载好的.vsix文件

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
- `explorerBrowser.hiddenAddressBar`: 显示/隐藏浏览器顶部的地址栏（默认：false）

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

## 参考
- [vscode-extension-samples](https://github.com/microsoft/vscode-extension-samples)
- [vscode built-in vscode.simple-browser](https://github.com/microsoft/vscode/tree/main/extensions/simple-browser)
- [Telegram Web (tweb) VSCode 主题集成](https://github.com/eric-gitta-moore/telegram-tweb-vscode-integration)

## FAQ

### 为什么安装在 github.dev 无法打开页面

> 参考: https://stackoverflow.com/a/70969504/16834604

因为 github.dev 设置了 `Cross-Origin-Embedder-Policy: require-corp`，我们必须要删除

可以使用 `ModHeader - Modify HTTP headers` 响应头
