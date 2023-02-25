import TitledContainer from "../containers/TitledContainer";
import List from "./list/List";
import React from "react";
import { ERROR_MSG } from "../../../utils";
import { useSelector, useDispatch } from "react-redux";
import { clearMessage } from "../../../logic/redux/messageSlice";
import ListItem from "./list/ListItem";
import DisappearOnSecond from "../containers/disappearOnSecond";

const MessageBox = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.alert.messages);

  return (
    <React.Fragment>
      {messages.length !== 0 && (
        <TitledContainer title={"messages"}>
          <List
            array={messages}
            listItem={(x) => (
              <DisappearOnSecond
                sec={2}
                onDisappear={() => dispatch(clearMessage(x.id))}
                changeVal={messages}
              >
                <ListItem
                  optionalAppear={[x.type === ERROR_MSG && "error-msg"]}
                  onClick={() => {
                    dispatch(clearMessage(x.id));
                  }}
                >
                  {x.title}
                </ListItem>
              </DisappearOnSecond>
            )}
          />
        </TitledContainer>
      )}
    </React.Fragment>
  );
};

export default MessageBox;
