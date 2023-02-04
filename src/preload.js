import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("timeline", {
  days: () => ipcRenderer.invoke("timeline:getDays"),
  change: () => console.log("change"),
});
