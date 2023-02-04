import { ipcMain } from "electron";
import { getDaysByMonthYear } from "./timelineQuery";

const ipcHandle = (db) => {
  ipcMain.handle("timeline:getDays", (event, ...data) => {
    getDaysByMonthYear(db, 2022, 2);
  });
  ipcMain.handle("timeline:changeDay", (event, ...data) => {});
};

export default ipcHandle;
