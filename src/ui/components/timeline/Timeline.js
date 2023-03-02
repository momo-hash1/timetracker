import React from "react";
import MonthList from "../MonthList";
import TimelineList from "./TimelineList";
import TitledContainer from "../containers/TitledContainer";
import TimelineItemToday from "./timelineItemToday";
import Linebreak from "../widgets/Linebreak";
import { getMonthName } from "../../../utils";
import useEntities from "../../../logic/useEntities";

const Timeline = (props) => {
  const { retriveDays, entry } = useEntities("days");

  React.useEffect(() => {
    retriveDays(props.date.year, props.date.month);
  }, []);
  return (
    <React.Fragment>
      <MonthList />
      <TitledContainer title={"Timeline"} highlightTitle={``}>
        <TimelineItemToday />
        <Linebreak />
        <TimelineList days={entry} />
      </TitledContainer>
    </React.Fragment>
  );
};

export default Timeline;
