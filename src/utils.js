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

export { getMonthName, getMonths };