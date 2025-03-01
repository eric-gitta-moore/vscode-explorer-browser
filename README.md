# Explorer Browser

[简体中文](README.CN.md) | [English](./README.md)

![demo](https://github.com/user-attachments/assets/8ffe4298-358b-44cb-86ee-191d0a0f0292)

A lightweight VSCode extension that allows you to browse web content directly within VSCode's explorer view.

## Features

- 🌐 Open web pages directly in VSCode explorer
- 🔄 Support basic browser operations (forward, back, refresh)
- 🔒 Configurable focus lock indicator
- 🔗 Open current page in external browser
- 📱 Responsive interface design

## Installation

Search for "Explorer Browser" in the VSCode extension marketplace, or install using the following command:

```bash
code --install-extension eric-gitta-moore.explorer-browser
```

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

## Author

[Eric Moore](https://github.com/eric-gitta-moore)
