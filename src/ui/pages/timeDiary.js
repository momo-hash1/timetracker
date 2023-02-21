import SectionDivider from "../components/containers/SectionDivider";
import Timeline from "../components/timeline/Timeline";
import FunctionWidgets from "../components/yearList";
import React from "react";
import Navigation from "../components/widgets/navigation";

const TimeDiary = () => {
  const [year, setYear] = React.useState(new Date().getFullYear());
  const [month, setMonth] = React.useState(new Date().getMonth());

  return (
    <SectionDivider
      main={<Timeline year={year} month />}
      nav={<Navigation doClick={() => {}} title={"return to timediaries"}/>}
      aside={<FunctionWidgets />}
    />
  );
};

export default TimeDiary;
