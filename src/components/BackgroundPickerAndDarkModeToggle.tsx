import React from "react";
import { ActionManager } from "../actions/manager";
import { AppState } from "../types";

export const BackgroundPickerAndDarkModeToggle = ({
  appState,
  setAppState,
  actionManager,
  showThemeBtn,
}: {
  actionManager: ActionManager;
  appState: AppState;
  setAppState: React.Component<any, AppState>["setState"];
  showThemeBtn: boolean;
}) => (
  <div style={{ display: "flex" }}>
    {actionManager.renderAction("changeViewBackgroundColor")}
    {showThemeBtn && actionManager.renderAction("toggleTheme")}
    {appState.fileHandle && (
      <div style={{ marginInlineStart: "0.25rem" }}>
        {actionManager.renderAction("saveScene")}
      </div>
    )}
  </div>
);
