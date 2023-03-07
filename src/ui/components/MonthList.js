import Button from "./widgets/Button";
import React from "react";
import { getMonths } from "../../utils";

const MonthList = (props) => {
  return (
    <div className="month-selector">
      {getMonths().map((x, index) => (
        <div key={index}>
          <Button
            onClick={() => props.onClick(index)}
            selected={props.month === index}
          >
            {x}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default MonthList;
