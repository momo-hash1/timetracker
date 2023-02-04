import Button from "./widgets/Button";
import React from "react";
import { monthContext } from "./context";
import { getMonths } from "../../utils";

const MonthList = () => {
  const { month, setMonth } = React.useContext(monthContext);

  return (
    <div className="month-selector">
      {getMonths().map((x, index) => (
        <div
          onClick={() => {
            setMonth(index);
          }}
        >
          <Button title={x} selected={index === month} />
        </div>
      ))}
    </div>
  );
};

export default MonthList;
