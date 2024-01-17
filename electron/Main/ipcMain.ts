import { BrowserWindow, app, ipcMain } from "electron";
import { Channel } from "../types/types";

ipcMain.on(Channel.QuitApplication, () => {
  app.quit();
});

ipcMain.on(Channel.Maximize, () => {
  const window = BrowserWindow.getFocusedWindow();
  if (window.isMaximized()) {
    window.unmaximize();
  } else {
    window.maximize();
  }
});

ipcMain.on(Channel.Minimize, () => {
  const window = BrowserWindow.getFocusedWindow();
  window.minimize();
});
