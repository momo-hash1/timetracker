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
            optionalAppear={[
              props.optionalAppear(x),
              props.selectTitle === props.pickTitle(x) ? "highlighted" : "",
            ]}
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
