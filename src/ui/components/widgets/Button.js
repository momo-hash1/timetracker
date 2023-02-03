import PropTypes from "prop-types"; 
import React from "react";

const Button = (props) => {
  return (
    <button className={props.selected ? "highlighted" : ""}>
      {props.title}
    </button>
  );
};

Button.propsTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool
};

export default Button;
