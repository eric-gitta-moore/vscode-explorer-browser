import * as vscode from "vscode";

export class ExploreViewProvider implements vscode.WebviewViewProvider {
  public static readonly viewType = "explorer-browser.view";

  private _view?: vscode.WebviewView;

  constructor(
    private readonly _extensionUri: vscode.Uri,
    private initUrl: string = ""
  ) {}

  public resolveWebviewView(
    webviewView: vscode.WebviewView,
    _context: vscode.WebviewViewResolveContext,
    _token: vscode.CancellationToken
  ) {
    this._view = webviewView;

    webviewView.webview.options = {
      // Allow scripts in the webview
      enableScripts: true,
      enableForms: true,
      localResourceRoots: [this._extensionUri],
    };

    webviewView.webview.html = this._getHtmlForWebview(this.initUrl);

    webviewView.webview.onDidReceiveMessage((data) => {
      switch (data.type) {
        case "openExternal": {
          try {
            const url = vscode.Uri.parse(data.url);
            vscode.env.openExternal(url);
          } catch {
            // Noop
          }
          break;
        }
      }
    });
  }

  public show(url: string) {
    this.initUrl = url;
    if (this._view) {
      this._view.show?.(true); // `show` is not implemented in 1.49 but is for 1.50 insiders
      this._view.webview.postMessage({
        type: "navigateTo",
        url: url,
      });
    }
  }

  private _getHtmlForWebview(url: string = "") {
    const configuration = vscode.workspace.getConfiguration("explorerBrowser");

    const nonce = getNonce();

    const mainJs = this.extensionResourceUrl("media", "index.js");
    const mainCss = this.extensionResourceUrl("media", "main.css");
    const codiconsUri = this.extensionResourceUrl("media", "codicon.css");

    return /* html */ `<!DOCTYPE html>
            <html>
            <head>
                <meta http-equiv="Content-type" content="text/html;charset=UTF-8">
  
                <meta http-equiv="Content-Security-Policy" content="
                    default-src 'none';
                    font-src ${this._view!.webview.cspSource} data:;
                    style-src ${this._view!.webview.cspSource};
                    script-src 'nonce-${nonce}';
                    frame-src *;
                    ">
  
                <meta id="simple-browser-settings" data-settings="${escapeAttribute(
                  JSON.stringify({
                    url: url,
                    focusLockEnabled: configuration.get<boolean>(
                      "focusLockIndicator.enabled",
                      false
                    ),
                    hiddenAddressBar: configuration.get<boolean>(
                      "hiddenAddressBar",
                      false
                    ),
                  })
                )}">
  
                <link rel="stylesheet" type="text/css" href="${mainCss}">
                <link rel="stylesheet" type="text/css" href="${codiconsUri}">
            </head>
            <body class="simple-browser-body">
                <header class="header">
                    <nav class="controls">
                        <button
                            title="${vscode.l10n.t("Back")}"
                            class="back-button icon"><i class="codicon codicon-arrow-left"></i></button>
  
                        <button
                            title="${vscode.l10n.t("Forward")}"
                            class="forward-button icon"><i class="codicon codicon-arrow-right"></i></button>
  
                        <button
                            title="${vscode.l10n.t("Reload")}"
                            class="reload-button icon"><i class="codicon codicon-refresh"></i></button>
                    </nav>
  
                    <input class="url-input" type="text">
  
                    <nav class="controls">
                        <button
                            title="${vscode.l10n.t("Open in browser")}"
                            class="open-external-button icon"><i class="codicon codicon-link-external"></i></button>
                    </nav>
                </header>
                <div class="content">
                    <div class="iframe-focused-alert">${vscode.l10n.t(
                      "Focus Lock"
                    )}</div>
                    <iframe id="simple-browser-iframe" sandbox="allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-top-navigation-to-custom-protocols"></iframe>
                </div>
  
                <script src="${mainJs}" nonce="${nonce}"></script>
            </body>
            </html>`;
  }

  private extensionResourceUrl(...parts: string[]): vscode.Uri {
    return this._view!.webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, ...parts)
    );
  }
}

function getNonce() {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 64; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function escapeAttribute(value: string | vscode.Uri): string {
  return value.toString().replace(/"/g, "&quot;");
}
