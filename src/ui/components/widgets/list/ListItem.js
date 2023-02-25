import PropsTypes from "prop-types";

const ListItem = (props) => {
  const onClick = props.onClick === undefined ? () => {} : props.onClick;
  const appear = props.optionalAppear === undefined ? [] : props.optionalAppear;

  return (
    <li className={`${appear.join(" ")} list-item`}>
      <p onClick={() => onClick()}>{props.children}</p>
      <div>{props.listActions}</div>
    </li>
  );
};

ListItem.propsTypes = {
  item: PropsTypes.shape({
    text: PropsTypes.string.isRequired,
    set: PropsTypes.func,
  }),
  highlightValue: PropsTypes.string,
};

export default ListItem;
