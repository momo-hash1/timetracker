import ListItem from "./ListItem";
import PropsTypes from "prop-types";

const List = (props) => {
  return (
    <div className="list">
      {props.header}
      <ul>
        {props.array.map((x) => (
          <ListItem item={x} highlightValue={props.highlightValue}/>
        ))}
      </ul>
    </div>
  );
};

List.propsTypes = {
  array: PropsTypes.array,
  header: PropsTypes.object,
  highlightValue: PropsTypes.string
};

export default List;
