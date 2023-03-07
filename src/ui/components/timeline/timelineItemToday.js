import TimelineItem from "./TimelineItem";
import React from "react";

const TimelineItemToday = (props) => {
  const today = new Date();
  const isTodaySelected =
    props.date.month === today.getMonth() &&
    props.date.year === today.getFullYear();
  return (
    <React.Fragment>
      {isTodaySelected && (
        <React.Fragment>
          <h1 className="section-header">Today: </h1>
          <TimelineItem
            TimeItem={
              props.timeItem === undefined
                ? { day: new Date().getDate() - 1, minutes: 0 }
                : props.timeItem
            }
            showEditor={true}
            showModal={props.showModal}
            setId={props.setId}
            update={props.update}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default TimelineItemToday;
