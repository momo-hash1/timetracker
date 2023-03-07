import React from "react";
import TimelineItem from "./TimelineItem";

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
        {props.days.map((x, index) => (
          <TimelineItem TimeItem={x} key={index} showModal={props.showModal} setId={props.setId}/>
        ))}
      </div>
    </div>
  );
};

export default TimelineList;
