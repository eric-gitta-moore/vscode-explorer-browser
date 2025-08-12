# Explorer Browser

[Extension Marketplace](https://marketplace.visualstudio.com/items?itemName=eric-gitta-moore.explorer-browser) | [.vsix Installer](https://github.com/eric-gitta-moore/vscode-explorer-browser/releases) | [简体中文](README.CN.md) | [English](./README.md)

A lightweight VSCode extension that allows you to browse web content directly within VSCode's explorer view.

![demo](https://github.com/user-attachments/assets/8ffe4298-358b-44cb-86ee-191d0a0f0292)

## Features

- 🌐 Support GitHub.dev and other web versions of VSCode.
- 🔥 Open web pages directly in VSCode explorer
- 🔄 Support basic browser operations (forward, back, refresh)
- 🔒 Configurable focus lock indicator
- 🔗 Open current page in external browser
- 📱 Responsive interface design

## Installation

There are two ways to install Explorer Browser:

1. Install from VSCode Extension Marketplace:
   - Search for "Explorer Browser" in the VSCode extension marketplace, or
   - Use the following command:
   ```bash
   code --install-extension eric-gitta-moore.explorer-browser
   ```

2. Manual Installation:
   - Download the .vsix file from the [Releases page](https://github.com/eric-gitta-moore/vscode-explorer-browser/releases)
   - In VSCode, go to Extensions view (Ctrl+Shift+X)
   - Click the ... (More Actions) button at the top of the Extensions view
   - Select "Install from VSIX..."
   - Choose the downloaded .vsix file

## Usage

1. Type `Explorer Browser: Open URL` in the VSCode command palette or use the shortcut to open the URL input box
2. Enter the URL you want to visit (default is example.com)
3. The webpage will open in the explorer view
4. Use the toolbar buttons for navigation:
   - Back
   - Forward
   - Refresh
   - Open in external browser

## Configuration

The following options can be configured in VSCode settings:

- `explorerBrowser.focusLockIndicator.enabled`: Enable/disable focus lock indicator (default: false)
- `explorerBrowser.hiddenAddressBar`: Show/hide the address bar at the top of the browser (default: false)

## Development

### Requirements

- VSCode ^1.97.0
- Node.js
- pnpm

### Local Development

1. Clone the repository
```bash
git clone https://github.com/eric-gitta-moore/vscode-explorer-browser.git
```

2. Install dependencies
```bash
pnpm install
```

3. Open the project in VSCode and press F5 to start debugging

## License

[MIT](LICENSE)

## Reference
- [vscode-extension-samples](https://github.com/microsoft/vscode-extension-samples)
- [vscode built-in vscode.simple-browser](https://github.com/microsoft/vscode/tree/main/extensions/simple-browser)
- [Telegram Web (tweb) VSCode 主题集成](https://github.com/eric-gitta-moore/telegram-tweb-vscode-integration)

## FAQ

### Why can't I open the page when installed on github.dev?

> Reference: https://stackoverflow.com/a/70969504/16834604

Because github.dev has set `Cross-Origin-Embedder-Policy: require-corp`, we need to remove it.

You can use the `ModHeader - Modify HTTP headers` browser extension to modify the response headers.
