import Button from "./widgets/Button";
import React from "react";
import { getMonths } from "../../utils";

const MonthList = () => {
  return (
    <div className="month-selector">
      {getMonths().map((x, index) => (
        <div onClick={() => {}}>
          <Button >{x}</Button>
        </div>
      ))}
    </div>
  );
};

export default MonthList;
