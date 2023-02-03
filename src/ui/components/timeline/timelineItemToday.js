import TimelineItem from "./TimelineItem";
import React from "react";

const TimelineItemToday = () => {
  return (
    <React.Fragment>
      <h1 className="section-header">Today: </h1>
      <TimelineItem />
    </React.Fragment>
  );
};

export default TimelineItemToday;
