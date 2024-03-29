const getMonths = () => {
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
  return months;
};

/** Get month name by index which start from 0 */
const getMonthName = (monthIndex) => {
  const months = getMonths();
  if (monthIndex > months.length)
    return `Month with this index ${monthIndex} not exists`;
  return months[monthIndex];
};

const INFO_MSG = "info";
const ERROR_MSG = "error";

const API_URL = "http://127.0.0.1:3000"

export { getMonthName, getMonths, INFO_MSG, ERROR_MSG, API_URL };
