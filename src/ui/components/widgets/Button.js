import PropTypes from "prop-types";
import React from "react";

const Button = (props) => {
  const highlighted = props.selected ? "highlighted" : "";
  const isLargeButton = props.large ? "large-button" : "";
  return (
    <button className={`${highlighted} ${isLargeButton}`}>
      {props.children}
    </button>
  );
};

Button.propsTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};

export default Button;
