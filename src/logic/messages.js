import { messageContext } from "../ui/components/context";
import React from "react";
import { ERROR_MSG, INFO_MSG } from "../utils";

const useMessage = () => {
  const { messages, setMessages } = React.useContext(messageContext);
  const clearByIndex = (byIndex) => {
    messages.length > 0 &&
      setMessages(messages.filter((_, index) => index !== byIndex));
  };

  const addMessage = (message) => {
    if (messages.length > 4) {
      clearByIndex(0);
    }
    setMessages([...messages, message]);
  };

  const clearMessage = (message) => {
    setMessages(messages.filter((searchMsg) => searchMsg.title !== message));
  };
  return { addMessage, clearByIndex, clearMessage, messages };
};

const getInfoMessage = (title) => {
  return { type: INFO_MSG, title: title };
};

const getErrorMessage = (title) => {
  return { type: ERROR_MSG, title: title };
};

export { getInfoMessage, getErrorMessage, useMessage };
