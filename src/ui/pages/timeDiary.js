import SectionDivider from "../components/SectionDivider";
import Timeline from "../components/Timeline";
import FunctionWidgets from "../components/functionWidgets";

const TimeDiary = () => {
  return <SectionDivider main={<Timeline />} aside={<FunctionWidgets/>} />;
};

export default TimeDiary;
