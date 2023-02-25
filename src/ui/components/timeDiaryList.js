import TitledContainer from "./containers/TitledContainer";
import List from "./widgets/list/List";
import { useNavigate } from "react-router-dom";
import React from "react";
import EntryLoader from "./containers/entryLoader";
import ListItem from "./widgets/list/ListItem";
import Button from "./widgets/Button";
import AddTimediary from "./addTimediary";
import useEntities from "../../logic/useEntities";

const TimeDiaryList = (props) => {
  const navigate = useNavigate();

  const { removeEntry } = useEntities("timediaries");

  const [showAdd, setShowAdd] = React.useState(false);

  const [needUpdate, setNeedUpdate] = React.useState(false);

  return (
    <React.Fragment>
      {showAdd && (
        <AddTimediary setNeedUpdate={setNeedUpdate} setShowAdd={setShowAdd} />
      )}
      <EntryLoader
        table="timediaries"
        needUpdate={needUpdate}
        setNeedUpdate={setNeedUpdate}
        child={(arr) => (
          <TitledContainer
            title={"Timediaries"}
            headerActions={
              <Button onClick={() => setShowAdd(showAdd ? false : true)}>
                Add timediary
              </Button>
            }
          >
            <List
              array={arr}
              listItem={(x) => (
                <ListItem
                  onClick={() => {
                    navigate(`/timediary/${x.id}`);
                  }}
                  listActions={
                    <React.Fragment>
                      <Button>change</Button>
                      <Button
                        onClick={() => {
                          props.showModal(true);

                          props.callModal({
                            action: () => {
                              removeEntry(x.id);
                              setNeedUpdate(true);
                            },
                            title: "Are you sure you want delete this?",
                            text: "It is cause delete entire timediary and this action dont reversible",
                          });
                        }}
                      >
                        x
                      </Button>
                    </React.Fragment>
                  }
                >
                  {x.title}
                </ListItem>
              )}
            ></List>
          </TitledContainer>
        )}
      />
    </React.Fragment>
  );
};
export default TimeDiaryList;
