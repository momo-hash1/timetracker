import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import React from "react";
import { getErrorMessage } from "../../../logic/messages";
import Button from "./Button";
import Input from "./Input";
import { addMessage } from "../../../logic/redux/messageSlice";

const SingleForm = (props) => {
  const { register, trigger, getValues, formState } = useForm();
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (formState.errors[props.title]) {
      dispatch(addMessage(getErrorMessage(`${props.title} must have name`)));
    }
  }, [formState]);
  return (
    <div className="add-timediary">
      <Input
        title={props.title}
        register={register(props.formName, {
          required: true,
        })}
      />
      <Button
        onClick={async () => {
          const valid = await trigger();
          if (!valid) return;
          props.onClick(getValues(props.formName));
        }}
      >
        {props.buttonLabel}
      </Button>
    </div>
  );
};

export default SingleForm;
