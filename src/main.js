import {app, BrowserWindow} from "electron"
import ipcHandle from "./ipcAll";
import { dbInit } from "./timelineQuery";
import path from "path";

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });

  const db = dbInit()

  ipcHandle(db)
  win.loadFile("../dist/index.html");
}


app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
