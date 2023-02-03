import { createContext } from "react";

const yearContext = createContext({
  year: new Date().getFullYear,
  setYear: (year) => {},
});

const monthContext = createContext({
  month: new Date().getMonth(),
  setMonth: (month) => {},
});

export {yearContext, monthContext}
