import SectionDivider from "../components/containers/SectionDivider";
import Timeline from "../components/timeline/Timeline";
import FunctionWidgets from "../components/functionWidgets";
import React from "react";

const TimeDiary = () => {
  const [year, setYear] = React.useState(new Date().getFullYear());
  const [month, setMonth] = React.useState(new Date().getMonth());

  return (
    <SectionDivider
      main={<Timeline year={year} month />}
      aside={
      <FunctionWidgets />
    }
    />
  );
};

export default TimeDiary;
