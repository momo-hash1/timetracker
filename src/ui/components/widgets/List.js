import ListItem from "./ListItem";
import PropsTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../../../logic/redux/messageSlice";
import { getErrorMessage } from "../../../logic/messages";

const List = (props) => {
  const appear =
    props.optionalAppear === undefined ? () => [] : props.optionalAppear;
  const onClick = props.onClick === undefined ? () => {} : props.onClick;

  const dispatch = useDispatch();
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    if (!Array.isArray(props.array)) {
      dispatch(addMessage(getErrorMessage("error occur")));
      setError(true);
    }
  }, []);
  return (
    <div className="list">
      {props.header}
      <ul>
        {!error &&
          props.array.map((x) => (
            <ListItem
              title={props.pickTitle(x)}
              optionalAppear={[
                appear(x),
                props.selectTitle === props.pickTitle(x) ? "highlighted" : "",
              ]}
              onClick={() => {
                onClick(props.pickProperty(x));
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
