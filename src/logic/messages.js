import { ERROR_MSG, INFO_MSG } from "../utils";

const getInfoMessage = (title) => {
  return { type: INFO_MSG, title: title };
};

const getErrorMessage = (title) => {
  return { type: ERROR_MSG, title: title };
};

export { getInfoMessage, getErrorMessage };
