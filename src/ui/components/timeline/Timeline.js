import React from "react";
import MonthList from "../MonthList";
import TimelineList from "./TimelineList";
import TitledContainer from "../containers/TitledContainer";
import TimelineItemToday from "./timelineItemToday";
import { yearContext, monthContext } from "../context";
import Linebreak from "../widgets/Linebreak";
import { getMonthName } from "../../../utils";

const Timeline = () => {
  const { year } = React.useContext(yearContext);
  const { month } = React.useContext(monthContext);
  return (
    <React.Fragment>
      <MonthList />
      <TitledContainer
        title={"Timeline"}
        highlightTitle={`${year} ${getMonthName(month)}`}
      >
        <TimelineItemToday />
        <Linebreak />
        <TimelineList />
      </TitledContainer>
    </React.Fragment>
  );
};

export default Timeline;
