import SingleForm from "../singleForm";

const ListItemChange = (props) => {
  return (
    <SingleForm
      formName={"change"}
      buttonLabel={"change"}
      value={props.value}
      inverted={true}
      onClick={(x) => {
        props.update(x);
      }}
    />
  );
};

export default ListItemChange;
