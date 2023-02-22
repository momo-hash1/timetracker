import TimeAdder from "../widgets/timeAdder";

const TimelineItem = (props) => {
  return (
    <div className="day-note">
      <div className="day-note-cell">
        <p>{props.TimeItem.day}</p>
      </div>
      <div className="day-note-cell">
        <p>
          <TimeAdder time={props.TimeItem.minutes} setTime={() => {}} />
        </p>
      </div>
      <div className="day-note-cell">
        <div className="difficulty-points">
          <div className="difficulty-marker-unmarked"></div>
          <div className="difficulty-marker-unmarked"></div>
          <div className="difficulty-marker-unmarked"></div>
          <div className="difficulty-marker-unmarked"></div>
        </div>
      </div>
      <div className="day-note-cell">
        <p>{props.TimeItem.task}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
