import React from "react";
import PropsTypes from "prop-types";

const TitledContainer = (props) => {
  return (
    <div className="titled-container">
      <h1 className="section-header">
        <p>
          {props.title}: <span>{props.highlightTitle}</span>
        </p>
        {props.headerActions}
      </h1>
      <div className="content-section">{props.children}</div>
    </div>
  );
};

TitledContainer.propsTypes = {
  title: PropsTypes.string,
  highlightTitle: PropsTypes.string,
};

export default TitledContainer;
