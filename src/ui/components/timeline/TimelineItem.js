import React from "react";
import DifficultySelector from "../widgets/difficultySelector";
import TimeAdder from "../widgets/timeAdder";

const TimelineItem = (props) => {
  const [markedDay, setMarkedDay] = React.useState(props.TimeItem);
  return (
    <div className="day-note">
      <div className="day-note-cell">
        <p>{markedDay.day + 1}</p>
      </div>
      <div className="day-note-cell">
        <TimeAdder time={markedDay.minutes} setTime={() => {}} />
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
