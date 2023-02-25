import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import React from "react";
import { getErrorMessage } from "../../logic/messages";
import useEntities from "../../logic/useEntities";
import Button from "./widgets/Button";
import Input from "./widgets/Input";
import { addMessage } from "../../logic/redux/messageSlice";

const AddTimediary = (props) => {
  const { register, trigger, getValues, formState } = useForm();
  const { addEntry } = useEntities("timediaries");
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (formState.errors.timediary) {
      dispatch(addMessage(getErrorMessage("timediary must have name")));
    }
  }, [formState]);
  return (
    <div className="add-timediary">
      <Input
        register={register("timediary", {
          required: true,
        })}
      />
      <Button
        onClick={async () => {
          const valid = await trigger();
          if (!valid) return;
          addEntry({ title: getValues("timediary") }, () =>
            props.setNeedUpdate(true)
          );
          props.setShowAdd(false)
        }}
      >
        Add timediary
      </Button>
    </div>
  );
};

export default AddTimediary;
