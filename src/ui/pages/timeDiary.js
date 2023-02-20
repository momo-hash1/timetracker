import SectionDivider from "../components/containers/SectionDivider";
import Timeline from "../components/timeline/Timeline";
import FunctionWidgets from "../components/functionWidgets";
import React from "react";
import Auth from "../components/auth/auth";

const TimeDiary = () => {
  const [year, setYear] = React.useState(new Date().getFullYear());
  const [month, setMonth] = React.useState(new Date().getMonth());

  return (
    <SectionDivider
      main={<Timeline year={year} month />}
      aside={
        <React.Fragment>
          <FunctionWidgets />
          <Auth/>
        </React.Fragment>
      }
    />
  );
};

export default TimeDiary;
