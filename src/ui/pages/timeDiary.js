import SectionDivider from "../components/containers/SectionDivider";
import Timeline from "../components/timeline/Timeline";
import FunctionWidgets from "../components/functionWidgets";
import { yearContext, monthContext } from "../components/context";
import React from "react";

const TimeDiary = () => {
  const [year, setYear] = React.useState(new Date().getFullYear());
  const [month, setMonth] = React.useState(new Date().getMonth());

  return (
    <yearContext.Provider value={{ year, setYear }}>
      <monthContext.Provider value={{ month, setMonth }}>
        <SectionDivider
          main={<Timeline year={year} month />}
          aside={<FunctionWidgets />}
        />
      </monthContext.Provider>
    </yearContext.Provider>
  );
};

export default TimeDiary;
