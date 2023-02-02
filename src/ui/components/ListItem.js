import PropsTypes from "prop-types";

const ListItem = (props) => {
  return (
    <li onClick={() => props.item.set(props.item.text)}>{props.item.text}</li>
  );
};

ListItem.propsTypes = {
  item: PropsTypes.shape({
    text: PropsTypes.string.isRequired,
    set: PropsTypes.func,
  }),
};

export default ListItem;
