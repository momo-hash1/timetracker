import List from "./widgets/list/List";
import TitledContainer from "./containers/TitledContainer";
import React from "react";
import EntryLoader from "./containers/entryLoader";
import ListItem from "./widgets/list/ListItem";

const FunctionWidgets = () => {
  return (
    <EntryLoader
      table="years"
      child={(arr) => (
        <TitledContainer title={"Jump to year"}>
          <List
            array={arr}
            listItem={(x) => (
              <ListItem optionalAppear={[2021 === x.year]}>{x.year}</ListItem>
            )}
          />
        </TitledContainer>
      )}
    />
  );
};

export default FunctionWidgets;
