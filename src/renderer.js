// document.querySelector("#currentDateLabel").textContent = timeline.getCurrentDate()

(async () => {
    const response = await achievement.getList()
    console.log(response);
})()