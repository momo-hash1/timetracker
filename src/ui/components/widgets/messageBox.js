import TitledContainer from "../containers/TitledContainer";
import List from "./List";
import React from "react";
import { getErrorMessage, getInfoMessage } from "../../../logic/messages";
import { ERROR_MSG } from "../../../utils";

const MessageBox = () => {
  const [messages, setMessages] = React.useState([
    getErrorMessage("test error"),
    getInfoMessage("test info"),
  ]);

  const clearMessage = (message) => {
    setMessages(messages.filter((searchMsg) => searchMsg !== message));
  };

  React.useEffect(() => {
    const timeOut = setTimeout(
      () =>
        setMessages(
          messages.filter((_, index) => index !== messages.length - 1)
        ),
      1000
    );
    return () => setTimeout(timeOut);
  }, [messages]);

  return (
    <React.Fragment>
      {messages.length !== 0 && (
        <TitledContainer title={"messages"}>
          <List
            array={messages}
            pickTitle={(x) => x.title}
            onClick={(message) => {
              clearMessage(message);
            }}
            pickProperty={(x) => x}
            optionalAppear={(x) => x.type === ERROR_MSG && "error-msg"}
          />
        </TitledContainer>
      )}
    </React.Fragment>
  );
};

export default MessageBox;
