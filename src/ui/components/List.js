import ListItem from "./ListItem";
import PropsTypes from "prop-types";

const List = (props) => {
  console.log(props);
  return (
    <div className="list">
      {props.header}
      <ul>
        {props.array.map((x) => (
          <ListItem item={x} />
        ))}
      </ul>
    </div>
  );
};

List.propsTypes = {
  array: PropsTypes.array,
  header: PropsTypes.object,
};

export default List;
