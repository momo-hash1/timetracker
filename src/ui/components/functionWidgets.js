import List from "./widgets/List";
import TitledContainer from "./containers/TitledContainer";
import React from "react";

const FunctionWidgets = (props) => {
  return (
    <TitledContainer title={"Jump to year"}>
      <List
        array={[
          { text: 2021},
          { text: 2022},
          { text: 2023 },
        ]}
      />
    </TitledContainer>
  );
};

export default FunctionWidgets;
