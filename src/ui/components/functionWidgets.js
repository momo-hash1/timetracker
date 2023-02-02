import List from "./List";
import TitledContainer from "./TitledContainer";

const FunctionWidgets = (props) => {
  return (
    <TitledContainer title={"Jump to year"}>
      <List
        array={[{ text: 23 }, { text: 23 }, { text: 23 }]}
        header={<h1>year: 2022</h1>}
      />
    </TitledContainer>
  );
};

export default FunctionWidgets;
