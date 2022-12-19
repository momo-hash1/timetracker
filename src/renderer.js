// document.querySelector("#currentDateLabel").textContent = timeline.getCurrentDate()

const change = async (achive) => {
  await achievement.updateCurrDay(achive)
};

const countDifficultyPoints = (node) => {
  document
    .querySelectorAll(".input-points > div > .difficulty-marker-unmarked")
    .forEach((point, index) => {
      point.dataset.value = index + 1;
    });
};

const renderDifficultyPoint = (difficulty) => {
  const difficultyParent = document.createElement("div");
  difficultyParent.classList.add("difficulty-points");

  [...Array(4).keys()].forEach((point) => {
    const difficultyChild = document.createElement("div");
    difficultyChild.classList.add("difficulty-marker-unmarked");

    if (point < difficulty) {
      difficultyChild.classList.add("difficulty-active");
    }
    difficultyParent.append(difficultyChild);
  });
  return difficultyParent;
};

const renderAchievementNote = (achieve, day) => {
  const dayNotes = document.querySelector(".days-notes");
  const dayNoteHtml = `            
  <div class="day-note day-note-achievement">
    <div class="day-note-cell">
      <p id="achievement-day">${day}</p>
    </div>
    <div class="day-note-cell">
      <p id="achievement-time">${achieve.minutes}</p>
    </div>
    <div class="day-note-cell">
      ${renderDifficultyPoint(achieve.difficulty).outerHTML}
    </div>
    <div class="day-note-cell">
      <p id="achievement-word-done">${achieve.workDone}</p>
    </div>
  </div>`;

  dayNotes.innerHTML += dayNoteHtml;
};

const renderAchievements = (achievements) => {
  console.log(achievements);
  document.querySelector(".days-notes").innerHTML = "";
  achievements.forEach((achieve, index) => {
    renderAchievementNote(achieve, index);
  });
};

const handleTimeAdder = (achive) => {
  const timeAdder = document.querySelector(".time-adder > input");
  const minutesLabel = document.querySelector("#minutes-title");

  document.querySelector(".time-adder").addEventListener("dblclick", () => {
    if (!timeAdder.classList.contains("hide")) return;
    timeAdder.classList.toggle("hide");
    minutesLabel.classList.toggle("hide");
  });

  timeAdder.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;

    const minutes = e.target.value;
    minutesLabel.textContent = minutes;
    minutesLabel.classList.toggle("hide");

    achive.minutes = minutes;

    e.target.classList.toggle("hide");

    change(achive);
  });
};
const handleDifficultyInput = (achive) => {
  const inputPoint = document.querySelector(".input-points");
  inputPoint.addEventListener("click", (e) => {
    let difficulty = e.target.dataset.value;
    if (difficulty === undefined) return;

    if (
      achive.difficulty === "1" &&
      e.target.classList.contains("difficulty-active")
    ) {
      difficulty = 0;
    }
    achive.difficulty = difficulty;
    const renderedDifficulty = renderDifficultyPoint(difficulty);
    inputPoint.innerHTML = renderedDifficulty.outerHTML;
    countDifficultyPoints();
    change(achive);
  });
};
const handleWordDoneInput = (achive) => {
  const workDoneSelector = document.querySelectorAll(
    ".work-done-selector > button"
  );
  workDoneSelector.forEach((x) => {
    x.addEventListener("click", (e) => {
      if (e.target.textContent === undefined) return;
      achive.workDone = e.target.textContent;

      if (e.target.classList.contains("progress-btn-active"))
        e.target.classList.toggle("progress-btn-active");

      [...document.querySelector(".work-done-selector").children].forEach(
        (btn) => {
          if (btn.textContent === achive.workDone) {
            btn.classList.add("progress-btn-active");
          } else {
            btn.classList.remove("progress-btn-active");
          }
        }
      );
      change(achive);
    });
  });
};

const init = async () => {
  const _achievement = {
    date: new Date().getTime(),
    minutes: null,
    difficulty: 0,
    workDone: null,
  };
  countDifficultyPoints();
  const achievements = await achievement.getList()
  renderAchievements(achievements);
  handleTimeAdder(_achievement);
  handleDifficultyInput(_achievement);
  handleWordDoneInput(_achievement);
};

init();
