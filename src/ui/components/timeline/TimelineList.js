import React from "react";
import TimelineItem from "./TimelineItem";
import { yearContext, monthContext } from "../context";

const TimelineList = (props) => {
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
        <TimelineItem TimeItem={{day:1, minutes: 40, difficulty: 2, task: 4}} />
      </div>
    </div>
  );
};

export default TimelineList;
