import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("timeline", {
  days: (month, year) => ipcRenderer.invoke("timeline:getDays", month, year),
  change: () => console.log("change"),
});
