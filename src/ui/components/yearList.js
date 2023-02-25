import List from "./widgets/list/List";
import TitledContainer from "./containers/TitledContainer";
import React from "react";
import EntryLoader from "./containers/entryLoader";

const FunctionWidgets = (props) => {
  return (
    <EntryLoader
    table="years"
      child={(arr) => (
        <TitledContainer title={"Jump to year"}>
          <List array={arr} selectTitle={2021} pickTitle={(x) => x.year} />
        </TitledContainer>
      )}
    />
  );
};

export default FunctionWidgets;
