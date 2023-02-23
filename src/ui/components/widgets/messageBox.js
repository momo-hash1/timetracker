import TitledContainer from "../containers/TitledContainer";
import List from "./List";
import React from "react";
import { ERROR_MSG } from "../../../utils";
import { clearMessage, clearByIndex } from "../../../logic/messages";
import { messageContext } from "../context";

const MessageBox = () => {
  const { messages } = React.useContext(messageContext);

  React.useEffect(() => {
    const timeOut = setTimeout(() => clearByIndex(messages.length - 1), 1000);

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
