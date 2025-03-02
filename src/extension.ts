import * as vscode from "vscode";
import { ExploreViewProvider } from "./exploreViewProvider";

const showCommand = "explorer-browser.open-url";

export function activate(context: vscode.ExtensionContext) {
  const manager = new ExploreViewProvider(context.extensionUri);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      ExploreViewProvider.viewType,
      manager
    )
  );

  vscode.commands.executeCommand("setContext", "explorerBrowser.isShow", false);

  context.subscriptions.push(
    vscode.commands.registerCommand(showCommand, async (url?: string) => {
      if (!url) {
        url = await vscode.window.showInputBox({
          placeHolder: "https://example.com",
          prompt: vscode.l10n.t("Enter url to visit"),
        });
      }

      if (url) {
        await vscode.commands.executeCommand(
          "setContext",
          "explorerBrowser.isShow",
          true
        );
        manager.show(url);
      }
    })
  );
}
