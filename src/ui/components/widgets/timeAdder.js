import Input from "./Input";
import React from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addMessage } from "../../../logic/redux/messageSlice";
import { getErrorMessage } from "../../../logic/messages";

const TimeAdder = (props) => {
  
  const { register, formState, getValues, trigger } = useForm({
    defaultValues: { time: "" },
  });
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (formState.isDirty) {
      props.setChangeTime(true);
      return;
    }

    if (formState.errors.time) {
      dispatch(addMessage(getErrorMessage("time must be not empty")));
      props.setChangeTime(false);
    }

  }, [formState]);

  return (
    <div className="time-adder">
      <div>
        <p>{props.time} + </p>
        <Input
          register={register(
            "time",
            {
              required: true,
              validate: (value, formState) => isNaN(+value) !== true,
            } 
          )}
        />
      </div>
      <Button
        selected={true}
        onClick={async () => {
          if (formState.isDirty) {
            const valid = await trigger();
            if (!valid) return;
            props.setTime(+getValues("time"));
          }
          if(props.showEditor) return
          props.setChangeTime(false);
        }}
      >
        {formState.isDirty || props.showEditor ? "Add time" : "Close"}
      </Button>
    </div>
  );
};

export default TimeAdder;
