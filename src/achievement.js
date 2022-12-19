const { Sequelize, DataTypes } = require("sequelize");
const { ipcMain } = require("electron");
const fs = require("fs");
const dayjs = require("dayjs");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./achievements.sqlite",
});

const Achievement = sequelize.define("Achievement", {
  year: {type: DataTypes.INTEGER},
  month: {type: DataTypes.INTEGER},
  day: {type: DataTypes.INTEGER},
  minutes: { type: DataTypes.INTEGER },
  difficulty: { type: DataTypes.INTEGER },
  workDone: { type: DataTypes.STRING },
});

(async () => {
  sequelize.sync();
})();

const getAchievements = async () => {
  const achievements = await Achievement.findAll({ limit: 10 });
  return achievements.map((x) => x.dataValues);
};

const changeAchievement = async (achievement) => {
  const { date, ...achievementWithoutDate } = achievement;
  const isCreated = await Achievement.findOne({ where: { date: date } });
  if (isCreated !== null) {
    await Achievement.update(achievementWithoutDate, { where: { date: date } });
  }
  sequelize.sync();
};

const syncDay = () => {
  fs.readFile(".currentday", { encoding: "utf-8" }, (err, data) => {
    if (!err) {
      const parsedDay = JSON.parse(data);
      if (dayjs().isSame(parsedDay.date, "day")) return

      Achievement.create(parsedDay)
    } else {
      console.log(err);
    }
  });
};

const changeCurrentDay = async (achievement) => {
  syncDay();
  fs.writeFile(".currentday", JSON.stringify(achievement), (err) => {});
};

const handleAllIpc = () => {
  ipcMain.handle("message:getAchievement", getAchievements);
  ipcMain.handle("message:changeAchievement", async (event, ...data) =>
    changeAchievement(data[0])
  );
  ipcMain.handle("message:changeCurrentDay", async (event, ...data) =>
    changeCurrentDay(data[0])
  );
};

module.exports.handleIpc = handleAllIpc;
