import TitledContainer from "./containers/TitledContainer";
import List from "./widgets/list/List";
import { useNavigate } from "react-router-dom";
import React from "react";
import EntryLoader from "./containers/entryLoader";

const TimeDiaryList = () => {
  const navigate = useNavigate();

  return (
    <EntryLoader
      table="timediaries"
      child={(arr) => (
        <TitledContainer title={"Timediaries"}>
          <List
            array={arr}
            
            pickTitle={(x) => x.title}
            pickPropertyOnClick={(x) => x}

            optionalAppear={() => {}}
            onClick={(x) => navigate(`/timediary/${x.id}`)}
          ></List>
        </TitledContainer>
      )}
    />
  );
};
export default TimeDiaryList;
