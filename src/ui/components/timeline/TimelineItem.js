import React from "react";
import DifficultySelector from "../widgets/difficultySelector";
import TimeAdder from "../widgets/timeAdder";

const TimelineItem = (props) => {
  const [markedDay, setMarkedDay] = React.useState(props.TimeItem);
  const [isChangeTime, setChangeTime] = React.useState(props.showEditor);

  return (
    <div className="day-note" key={markedDay.id}>
      <div className="day-note-cell">
        <p>{markedDay.day + 1}</p>
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
          <p onClick={() => setChangeTime(true)} style={{cursor: "pointer"}}>{markedDay.minutes}</p>
        )}
      </div>
      <div className="day-note-cell">
        <DifficultySelector />
      </div>
      <div className="day-note-cell">
        <p>{markedDay.task}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
