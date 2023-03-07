import List from "../components/widgets/list/List";
import EntryLoader from "../components/containers/entryLoader";
import TitledContainer from "../components/containers/TitledContainer";
import Button from "../components/widgets/Button";
import ListItem from "../components/widgets/list/ListItem";
import React from "react";
import Input from "./widgets/Input";
import { useForm } from "react-hook-form";

const TaskSelector = (props) => {
  const [newTask, setNewTask] = React.useState("");
  const { register } = useForm();
  return (
    <div className="task-selector">
      <div className="task-selector-header">
        <p>Select task</p>
        <Button onClick={() => props.close()}>x</Button>
      </div>
      <TitledContainer
        backgrounded={true}
        headerLargeActions={
          <div style={{ padding: "4px" }}>
            <Input
              register={register("search", {
                onChange: (e) => setNewTask(e.target.value),
              })}
            />
          </div>
        }
      >
        <EntryLoader
          table={"tasks"}
          searchParam={newTask}
          hasPagination={true}
          placeHolder={({ add }) => (
            <div
              onClick={() => add({ title: newTask })}
              style={{ cursor: "pointer" }}
            >
              Add this task: {newTask}?
            </div>
          )}
          child={(arr, { remove, update }) => {
            return (
              <React.Fragment>
                <List
                  array={arr}
                  listItem={(x) => (
                    <ListItem
                      onClick={() => {
                        props.update({ 
                          taskId: x.id });
                      }}
                      showActions={true}
                      key={x.id}
                      value={x.title}
                      delete={() => {
                        remove(x.id);
                      }}
                      update={(title) => update(x.id, { title: title })}
                    >
                      {x.title}
                    </ListItem>
                  )}
                ></List>
              </React.Fragment>
            );
          }}
        />
      </TitledContainer>
    </div>
  );
};

export default TaskSelector;
