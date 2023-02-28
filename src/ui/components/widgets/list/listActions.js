import Button from "../Button";

const ListActions = (props) => {
  return (
    <div>
      {!props.editing && (
        <Button onClick={() => props.setEditing(true)}>change</Button>
      )}
      <Button
        onClick={() => {
          if (props.editing) {
            setEditing(false);
          } else {
            props.delete();
          }
        }}
      >
        x
      </Button>
    </div>
  );
};

export default ListActions;
