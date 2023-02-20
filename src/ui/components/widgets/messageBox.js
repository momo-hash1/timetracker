import TitledContainer from "../containers/TitledContainer";
import List from "./List";
import React from "react";

const MessageBox = (props) => {
  const [messages, setMessages] = React.useState([
    { text: "Required password" },
    { text: "Required email" },
    { text: "Passwords is not same" },
    { text: "Passwords is not same" },
    { text: "Passwords is not same" },
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
            onClick={(message) => {
              clearMessage(message);
            }}
            pickProperty={(x) => x}
          />
        </TitledContainer>
      )}
    </React.Fragment>
  );
};

export default MessageBox;
