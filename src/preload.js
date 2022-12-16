const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("achievement", {
  getList: () => ipcRenderer.invoke("message:getAchievement"),
  change: () => {},
});
