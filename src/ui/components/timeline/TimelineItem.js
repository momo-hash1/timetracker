const TimelineItem = (props) => {
  return (
    <div className="day-note">
      <div className="day-note-cell">
        <p>{props.TimeItem.day}</p>
      </div>
      <div className="day-note-cell">
        <p>{props.TimeItem.minutes}</p>
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
        <p>{props.TimeItem.day}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
