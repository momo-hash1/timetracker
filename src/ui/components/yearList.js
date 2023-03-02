import List from "./widgets/list/List";
import TitledContainer from "./containers/TitledContainer";
import React from "react";
import EntryLoader from "./containers/entryLoader";
import ListItem from "./widgets/list/ListItem";

const FunctionWidgets = (props) => {
  const [selectedYear, setSelectYear] = React.useState(
    new Date().getFullYear()
  );
  return (
    <EntryLoader
      table="years"
      child={(arr, { setEntry }) => {
        if (arr.length === 0) setEntry([{ year: selectedYear }]);
        return (
          <TitledContainer title={"Jump to year"}>
            <List
              array={arr}
              listItem={(x) => (
                <ListItem
                  optionalAppear={[
                    selectedYear === x.year ? "highlighted" : "",
                  ]}
                  onClick={() => {
                    setSelectYear(x.year);
                    props.setYear(x.year);
                  }}
                >
                  {x.year}
                </ListItem>
              )}
            />
          </TitledContainer>
        );
      }}
    />
  );
};

export default FunctionWidgets;
