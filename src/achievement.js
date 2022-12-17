const { Sequelize, DataTypes } = require("sequelize");
const { ipcMain } = require("electron");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./achievements.sqlite",
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
  return achievements.map(x => x.dataValues);
};

const changeAchievement = async (achievement) => {
  const {date, ...achievementWithoutDate} = achievement
  const isCreated = await Achievement.findOne({where: {date: date}}) !== null
  if (isCreated) {
    await Achievement.update(achievementWithoutDate, {where: {date: date}})
  }else{
    await Achievement.create(achievement)
  }
}

const handleAllIpc = () => {
  ipcMain.handle("message:getAchievement", getAchievements);
  ipcMain.handle("message:changeAchievement", async (event, ...data) => changeAchievement(data[0]))
};

module.exports.handleIpc = handleAllIpc;
