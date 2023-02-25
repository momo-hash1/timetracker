import PropsTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../../../../logic/redux/messageSlice";
import { getErrorMessage } from "../../../../logic/messages";

const List = (props) => {
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
      <ul>{!error && props.array.map((x) => props.listItem(x))}</ul>
    </div>
  );
};

List.propsTypes = {
  array: PropsTypes.array,
  header: PropsTypes.object,
  highlightValue: PropsTypes.string,
};

export default List;
