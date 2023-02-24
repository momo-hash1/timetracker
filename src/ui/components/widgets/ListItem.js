import PropsTypes from "prop-types";

const ListItem = (props) => {

  return (
    <li
      onClick={() => props.onClick()}
      className={`${props.optionalAppear.join(" ")} list-item`}
    >
      {props.title}
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
