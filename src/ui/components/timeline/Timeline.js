import React from "react";
import MonthList from "../MonthList";
import TimelineList from "./TimelineList";
import TitledContainer from "../containers/TitledContainer";
import TimelineItemToday from "./timelineItemToday";
import Linebreak from "../widgets/Linebreak";
import { getMonthName } from "../../../utils";
import TaskSelector from "../taskSelector";
import useDay from "../../../logic/useDay";

const Timeline = (props) => {
  const { retriveDays, updateDay, entry } = useDay();
  const [showModal, setShowModal] = React.useState(false);
  const [day, setDay] = React.useState(-1);

  const update = (day, content) => {
    updateDay({ ...props.date, day: day }, content);
    setDay(-1)
  };

  React.useEffect(() => {
    retriveDays(props.date.year, props.date.month);
  }, [props.date.year, props.date.month]);
  return (
    <React.Fragment>
      <MonthList
        onClick={(month) => props.setDate({ ...props.date, month: month })}
        month={props.date.month}
      />
      <TitledContainer title={"Timeline"} highlightTitle={``}>
        {showModal ? (
          <TaskSelector
            close={() => setShowModal(false)}
            update={(c) => {
              update(day, { ...c });
              setShowModal(false);
            }}
          />
        ) : (
          <React.Fragment>
            <TimelineItemToday
              date={props.date}
              showModal={setShowModal}
              setId={setDay}
              timeItem={entry.find((x) => x.day === new Date().getDate())}
              update={(day, content) => {
                update(day, content);
                setShowModal(false);
              }}
            />
            <Linebreak />
            <TimelineList
              days={entry.filter((x) => x.day !== new Date().getDate())}
              showModal={setShowModal}
              setId={setDay}
              update={(day, content) => {
                update(day, content);
                setShowModal(false);
              }}
            />
          </React.Fragment>
        )}
      </TitledContainer>
    </React.Fragment>
  );
};

export default Timeline;
