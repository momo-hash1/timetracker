import React from "react";
import MonthList from "./MonthList"
import TimelineList from "./TimelineList"
import TitledContainer from "./TitledContainer";

const Timeline = () => {
    return (
        <TitledContainer title={"timeline"} highlightTitle={2023}>
            <MonthList/>
            <TimelineList/>
        </TitledContainer>
    )
}

export default Timeline;