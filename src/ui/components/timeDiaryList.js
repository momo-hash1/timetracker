import TitledContainer from "./containers/TitledContainer";
import List from "./widgets/List";

const TimeDiaryList = (props) => {
  return (
    <TitledContainer title={"Timediaries"}>
      <List array={["prog", "math", "i dont know"]} pickTitle={(x) => x}></List>
    </TitledContainer>
  );
};
export default  TimeDiaryList;
