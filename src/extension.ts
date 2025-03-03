import * as vscode from "vscode";
import { ExploreViewProvider } from "./exploreViewProvider";

const openUrlCommand = "explorer-browser.open-url";
const toggleCommand = "explorer-browser.toggle-explorer";
const whenKey_isShow = "explorerBrowser.isShow";
const globalState_isShow = "explorerBrowser.isShow";
const globalState_initUrl = "explorerBrowser.initUrl";

export function activate(context: vscode.ExtensionContext) {
  const initUrl = context.globalState.get(globalState_initUrl, "");
  const manager = new ExploreViewProvider(context.extensionUri, initUrl);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      ExploreViewProvider.viewType,
      manager
    )
  );

  const isShow = context.globalState.get(globalState_isShow, false);
  vscode.commands.executeCommand("setContext", whenKey_isShow, isShow);

  context.subscriptions.push(
    vscode.commands.registerCommand(toggleCommand, async () => {
      const currentState = context.globalState.get(globalState_isShow, false);
      const newState = !currentState;

      // 更新 context
      await vscode.commands.executeCommand(
        "setContext",
        whenKey_isShow,
        newState
      );

      // 保存到 globalState
      await context.globalState.update(whenKey_isShow, newState);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(openUrlCommand, async (url?: string) => {
      if (!url) {
        url = await vscode.window.showInputBox({
          placeHolder: "https://example.com",
          prompt: vscode.l10n.t("Enter url to visit"),
        });
      }

      if (url) {
        await vscode.commands.executeCommand(
          "setContext",
          whenKey_isShow,
          true
        );
        await context.globalState.update(globalState_isShow, true);
        await context.globalState.update(globalState_initUrl, url);
        manager.show(url);
      }
    })
  );
}
