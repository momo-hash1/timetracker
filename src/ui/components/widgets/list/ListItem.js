import PropsTypes from "prop-types";

const ListItem = (props) => {
  const onClick = props.onClick === undefined ? () => {} : props.onClick;
  const appear =
    props.optionalAppear === undefined ? () => [] : props.optionalAppear;

  return (
    <li onClick={() => onClick()} className={`${appear.join(" ")} list-item`}>
      {props.children}
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
