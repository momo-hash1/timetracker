import ListItem from "./ListItem";
import PropsTypes from "prop-types";

const List = (props) => {
  return (
    <div className="list">
      {props.header}
      <ul>
        {props.array.map((x) => (
          <ListItem
            title={props.pickTitle(x)}
            selectTitle={props.selectTitle}
            onClick={() => {
              props.onClick(props.pickProperty(x));
            }}
          />
        ))}
      </ul>
    </div>
  );
};

List.propsTypes = {
  array: PropsTypes.array,
  header: PropsTypes.object,
  highlightValue: PropsTypes.string,
};

export default List;
