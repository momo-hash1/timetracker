import React from "react";
import PropsTypes from "prop-types";

const TitledContainer = (props) => {
  return (
    <React.Fragment>
      <h1 className="section-header">
        {props.title}: <span>{props.highlightTitle}</span>
      </h1>
      <div className="content-section">{props.children}</div>
    </React.Fragment>
  );
};

TitledContainer.propsTypes = {
  title: PropsTypes.string,
  highlightTitle: PropsTypes.string,
};

export default TitledContainer;
