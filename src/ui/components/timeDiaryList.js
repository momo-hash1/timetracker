import TitledContainer from "./containers/TitledContainer";
import List from "./widgets/List";
import { useNavigate } from "react-router-dom";
import React from "react";
import useEntities from "../../logic/getEntities";
import Button from "./widgets/Button";
import EntryLoader from "./containers/entryLoader";

const TimeDiaryList = () => {
  const navigate = useNavigate();

  return (
    <EntryLoader
      child={(arr) => (
        <TitledContainer title={"Timediaries"}>
          <List
            array={arr}
            pickTitle={(x) => x.title}
            optionalAppear={() => {}}
            onClick={(x) => navigate(`/timediary/${x.id}`)}
            pickProperty={(x) => x}
          ></List>
        </TitledContainer>
      )}
    />
  );
};
export default TimeDiaryList;
