import { messageContext } from "../ui/components/context";
import React from "react";
import { ERROR_MSG, INFO_MSG } from "../utils";

const addMessage = (message) => {
  const { messages, setMessages } = React.useContext(messageContext);
  if (messages.length > 4) {
    setMessages(messages.filter((_, index) => index !== 0));
  }
  setMessages([...messages, message]);
};

const getInfoMessage = (title) => {
  return { type: INFO_MSG, title: title };
};

const getErrorMessage = (title) => {
  return { type: ERROR_MSG, title: title };
};

const clearMessage = (message) => {
  const { messages, setMessages } = React.useContext(messageContext);

  setMessages(messages.filter((searchMsg) => searchMsg.title !== message));
};

export { addMessage, getInfoMessage, getErrorMessage, clearMessage };
