import React from "react";
import TimelineItem from "./TimelineItem";
import { yearContext, monthContext } from "../context";

const TimelineList = (props) => {
  const [days, setDays] = React.useState([]);
  const { year } = React.useContext(yearContext);
  const { month } = React.useContext(monthContext);
  React.useEffect(() => {
    window.timeline.days(month, year).then((arr) => {
      console.log(arr);
      setDays(arr);
    });
  }, [year, month]);

  return (
    <div>
      <div className="day-note day-note-header">
        <div className="day-note-cell">
          <p>Day:</p>
        </div>
        <div className="day-note-cell">
          <p>How much time:</p>
        </div>
        <div className="day-note-cell">
          <p>Difficulty:</p>
        </div>
        <div className="day-note-cell">
          <p>Task:</p>
        </div>
      </div>

      <div className="days-notes">
        {days.map((day) => (
          <TimelineItem TimeItem={day} />
        ))}
      </div>
    </div>
  );
};

export default TimelineList;
