import PropsTypes from "prop-types";

const ListItem = (props) => {
  return (
    <li
      onClick={() => props.item.set(props.item.text)}
      className={
        props.highlightValue === props.item.text
          ? "highlighted list-item"
          : "list-item"
      }
    >
      {props.item.text}
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
