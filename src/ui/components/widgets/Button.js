import PropTypes from "prop-types";
import React from "react";

const Button = (props) => {
  const highlighted = props.selected ? "highlighted" : "";
  const isLargeButton = props.large ? "large-button" : "";

  const [pendingPos, setPendingPos] = React.useState(0);
  const [pendingText, setPendingText] = React.useState("---");

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (pendingPos === 2) {
        setPendingPos(0);
      } else {
        setPendingPos(pendingPos + 1);
      }

      setPendingText(
        pendingText
          .split("")
          .map((_, index) => (index === pendingPos ? "*" : "-"))
          .join("")
      );
    }, 500);

    return () => clearTimeout(timer);
  }, [pendingPos]);

  return (
    <button
      className={`${highlighted} ${isLargeButton}`}
      onClick={() => !props.isPending && props.onClick()}
    >
      {props.isPending ? pendingText : props.children}
    </button>
  );
};

Button.propsTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};

export default Button;
