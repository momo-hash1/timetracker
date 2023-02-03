import List from "./widgets/List";
import TitledContainer from "./containers/TitledContainer";
import React from "react";
import { yearContext } from "./context";

const FunctionWidgets = (props) => {
  const { year, setYear } = React.useContext(yearContext);
  return (
    <TitledContainer title={"Jump to year"}>
      <List
        array={[
          { text: 2021, set: (x) => setYear(x) },
          { text: 2022, set: (x) => setYear(x) },
          { text: 2023, set: (x) => setYear(x) },
        ]}
        highlightValue={year}
      />
    </TitledContainer>
  );
};

export default FunctionWidgets;
