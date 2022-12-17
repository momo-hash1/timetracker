// document.querySelector("#currentDateLabel").textContent = timeline.getCurrentDate()

// const achievement = {
//   date: new Date(),
//   minutes: 0,
//   difficulty: 0,
//   workDone: null,
// };

(async () => {
  const response = await achievement.getList();
  console.log(response);
  await achievement.change({
    date: new Date("2022-12-18"),
    minutes: 50,
    difficulty: 3,
    workDone: "progress",
  });
})();
