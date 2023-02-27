import React from "react";
import SingleForm from "./widgets/singleForm";

const AddTimediary = (props) => {
  return (
    <SingleForm
      title={"Timediary"}
      formName={"timediary"}
      buttonLabel={"Add timediary"}
      onClick={(fromInput) => {
        props.update({ title: fromInput })
        props.setShowAdd(false);
      }}
    />
  );
};

export default AddTimediary;
