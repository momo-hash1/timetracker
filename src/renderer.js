// document.querySelector("#currentDateLabel").textContent = timeline.getCurrentDate()

const countDifficultyPoints = () => {
  document
    .querySelectorAll(".input-points > .difficulty-marker-unmarked")
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
    difficultyParent.append(difficultyChild)
  });
  return difficultyParent.outerHTML
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
      ${renderDifficultyPoint(achieve.difficulty)}
    </div>
    <div class="day-note-cell">
      <p id="achievement-word-done">${achieve.workDone}</p>
    </div>
  </div>`;

  dayNotes.innerHTML += dayNoteHtml;
};

const renderAchievements = async () => {
  const achievements = await achievement.getList();
  achievements.forEach((achieve, index) => {
    renderAchievementNote(achieve, index);
  });
};

const init = () => {
  countDifficultyPoints();
  renderAchievements();
};

init();
