import Input from "./Input";
import React from "react";
import Button from "./Button";

const TimeAdder = (props) => {
  const [isChangeTime, setChangeTime] = React.useState(true);
  return (
    <React.Fragment>{isChangeTime ? <Input /> : props.minutes}</React.Fragment>
  );
};

export default TimeAdder;
