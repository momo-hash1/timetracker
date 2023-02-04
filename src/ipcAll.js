import { ipcMain } from "electron";
import { getDaysByMonthYear } from "./timelineQuery";

const ipcHandle = (db, window) => {
  ipcMain.handle("timeline:getDays", async (event, ...data) => {
    return await getDaysByMonthYear(data[1], data[0]);
  });
  ipcMain.handle("timeline:changeDay", (event, ...data) => {});
};

export default ipcHandle;
