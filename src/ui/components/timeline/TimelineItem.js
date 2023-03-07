import React from "react";
import DifficultySelector from "../widgets/difficultySelector";
import TimeAdder from "../widgets/timeAdder";

const TimelineItem = (props) => {
  const [markedDay, setMarkedDay] = React.useState(props.TimeItem);
  const [isChangeTime, setChangeTime] = React.useState(props.showEditor);
  React.useEffect(() => setMarkedDay(props.TimeItem), [props.TimeItem]);
  return (
    <div className="day-note" key={markedDay.id}>
      <div className="day-note-cell">
        <p>{markedDay.day}</p>
      </div>
      <div className="day-note-cell">
        {isChangeTime ? (
          <TimeAdder
            showEditor={props.showEditor}
            time={markedDay.minutes}
            setChangeTime={setChangeTime}
            setTime={(time) => {
              setMarkedDay({ ...markedDay, minutes: markedDay.minutes + time });
            }}
          />
        ) : (
          <p onClick={() => setChangeTime(true)} style={{ cursor: "pointer" }}>
            {markedDay.minutes}
          </p>
        )}
      </div>
      <div className="day-note-cell">
        <DifficultySelector
          setAmount={(amount) =>
            setMarkedDay({ ...markedDay, difficulty: amount })
          }
          amount={markedDay.difficulty}
        />
      </div>
      <div className="day-note-cell" onClick={() => {
        props.showModal(true)
      }}>
        {markedDay.Task === undefined || markedDay.Task === null   ? (
          <p style={{ color: "#cc8b00", cursor: "pointer" }}>select task</p>
        ) : (
          <p style={{ cursor: "pointer" }}>{markedDay.Task.title}</p>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
