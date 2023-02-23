import TitledContainer from "./containers/TitledContainer";
import List from "./widgets/List";
import { useNavigate } from "react-router-dom";

const TimeDiaryList = (props) => {
  const navigate = useNavigate();
  return (
    <TitledContainer title={"Timediaries"}>
      <List
        array={["prog", "math", "i dont know"]}
        pickTitle={(x) => x}
          
        onClick={(x) => navigate(`/timediary/${x}`)}
        pickProperty={(x) => x.timediaryId}
      ></List>
    </TitledContainer>
  );
};
export default TimeDiaryList;
