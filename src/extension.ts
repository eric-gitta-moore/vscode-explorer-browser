import * as vscode from "vscode";
import { ExploreViewProvider } from "./exploreViewProvider";

const showCommand = "simpleBrowser.show";

export function activate(context: vscode.ExtensionContext) {
  const manager = new ExploreViewProvider(context.extensionUri);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      ExploreViewProvider.viewType,
      manager
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(showCommand, async (url?: string) => {
      if (!url) {
        url = await vscode.window.showInputBox({
          value: "https://example.com",
          prompt: vscode.l10n.t("Enter url to visit"),
        });
      }

      if (url) {
        manager.show(url);
      }
    })
  );
}
