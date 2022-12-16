const { Sequelize, DataTypes } = require("sequelize");
const { ipcMain } = require("electron");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../achievements.sqlite",
});

const Achievement = sequelize.define("Achievement", {
  date: { type: DataTypes.DATEONLY },
  minutes: { type: DataTypes.INTEGER },
  difficulty: { type: DataTypes.INTEGER },
  workDone: { type: DataTypes.STRING },
});

(async () => {
  sequelize.sync();
})();

const getAchievements = async () => {
  const achievements = await Achievement.findAll({ limit: 10 });
  return achievements;
};

const handleAllIpc = () => {
  ipcMain.handle("message:getAchievement", getAchievements);
};

module.exports.handleIpc = handleAllIpc;
