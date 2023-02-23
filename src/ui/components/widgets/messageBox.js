import TitledContainer from "../containers/TitledContainer";
import List from "./List";
import React from "react";
import { ERROR_MSG } from "../../../utils";
import { useSelector, useDispatch } from "react-redux";
import { clearMessage } from "../../../logic/redux/messageSlice";

const MessageBox = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.alert.messages);
  React.useEffect(() => {
    const timeOut = setTimeout(
      () => dispatch(clearMessage(messages.length - 1)),
      2000
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
              dispatch(clearMessage(message));
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
