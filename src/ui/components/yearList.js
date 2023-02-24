import List from "./widgets/List";
import TitledContainer from "./containers/TitledContainer";
import React from "react";
import EntryLoader from "./containers/entryLoader";

const FunctionWidgets = (props) => {
  return (
    <EntryLoader
      child={(arr) => (
        <TitledContainer title={"Jump to year"}>
          <List array={arr} selectTitle={2021} pickTitle={(x) => x.title} />
        </TitledContainer>
      )}
    />
  );
};

export default FunctionWidgets;
