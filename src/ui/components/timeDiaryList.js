import TitledContainer from "./containers/TitledContainer";
import List from "./widgets/list/List";
import { useNavigate } from "react-router-dom";
import React from "react";
import EntryLoader from "./containers/entryLoader";
import ListItem from "./widgets/list/ListItem";
import Button from "./widgets/Button";
import AddTimediary from "./addTimediary";

const TimeDiaryList = (props) => {
  const navigate = useNavigate();
  const [showAdd, setShowAdd] = React.useState(false);

  return (
    <EntryLoader
      table="timediaries"
      placeHolder={({ add }) => (
        <AddTimediary setShowAdd={setShowAdd} update={(x) => add(x)} />
      )}
      hasPagination={true}
      child={(arr, { add, remove, update }) => (
        <React.Fragment>
          {showAdd && (
            <AddTimediary setShowAdd={setShowAdd} update={(x) => add(x)} />
          )}
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
                  value={x.title}
                  showActions={true}
                  delete={() => {
                    props.showModal(true);

                    props.callModal({
                      action: () => remove(x.id),
                      title: "Delete this?",
                    });
                  }}
                  update={(inputValue) => update(x.id, { title: inputValue })}
                >
                  {x.title}
                </ListItem>
              )}
            ></List>
          </TitledContainer>
        </React.Fragment>
      )}
    />
  );
};
export default TimeDiaryList;
