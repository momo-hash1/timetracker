import React from "react";
import ListActions from "./listActions";
import ListItemChange from "./ListItemChange";

const ListItem = (props) => {
  const onClick = props.onClick === undefined ? () => {} : props.onClick;
  const appear = props.optionalAppear === undefined ? [] : props.optionalAppear;

  const [editing, setEditing] = React.useState(false);

  return (
    <li className={`${appear.join(" ")} list-item`} key={props.id}>
      <React.Fragment>
        {editing ? (
          <ListItemChange
            update={(x) => {
              props.update(x);
              setEditing(false);
            }}
            value={props.value}
          />
        ) : (
          <p onClick={() => onClick()}>{props.children}</p>
        )}
        {props.showActions && (
          <ListActions
            delete={props.delete}
            setEditing={setEditing}
            editing={editing}
          />
        )}
      </React.Fragment>
    </li>
  );
};

export default ListItem;
