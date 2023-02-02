import PropsTypes from "prop-types";
import Button from "./Button";

const MonthList = (props) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="month-selector">
      {months.map((x) => (
        <Button
          title={x}
          selected={x === props.selectedMonth}
          onClick={() => props.selectMonth(x)}
        />
      ))}
    </div>
  );
};

MonthList.propsTypes = {
  selectMonth: PropsTypes.func,
  selectedMonth: PropsTypes.string,
};

export default MonthList;
