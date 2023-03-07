import SectionDivider from "../components/containers/SectionDivider";
import Timeline from "../components/timeline/Timeline";
import FunctionWidgets from "../components/yearList";
import React from "react";
import Navigation from "../components/widgets/navigation";
import Modal from "../components/widgets/modal";

import TaskSelector from "../components/taskSelector";

const TimeDiary = () => {
  const [date, setDate] = React.useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });
  const [showModal, setShowModal] = React.useState(false);
  const [fromDayId, setFromDayId] = React.useState()
  return (
    <React.Fragment>
      <SectionDivider
        main={
          <React.Fragment>
            {showModal ? (
              <TaskSelector close={() => setShowModal(false)} />
            ) : (
              <Timeline
                date={date}
                setDate={setDate}
                showModal={setShowModal}
                setId = {setFromDayId}
              />
            )}
          </React.Fragment>
        }
        nav={<Navigation to={"/timediary"} title={"return to timediaries"} />}
        aside={
          <FunctionWidgets setYear={(x) => setDate({ ...date, year: x })} />
        }
      />
    </React.Fragment>
  );
};

export default TimeDiary;
