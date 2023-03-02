import SectionDivider from "../components/containers/SectionDivider";
import Timeline from "../components/timeline/Timeline";
import FunctionWidgets from "../components/yearList";
import React from "react";
import Navigation from "../components/widgets/navigation";

const TimeDiary = () => {
  const [date, setDate] = React.useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });

  return (
    <SectionDivider
      main={<Timeline date={date} setDate={setDate} />}
      nav={<Navigation to={"/timediary"} title={"return to timediaries"} />}
      aside={<FunctionWidgets setYear={(x) => setDate({ ...date, year: x })} />}
    />
  );
};

export default TimeDiary;
