import PropTypes from "prop-types"; // ES6
import React from "react";

const Button = (props) => {
  return (
    <button className={props.selected ? "button-selected" : ""}>
      {props.title}
    </button>
  );
};

Button.propsTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool
};

export default Button;
