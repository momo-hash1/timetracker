import React from "react";
import TitledContainer from "../containers/TitledContainer";
import Button from "./Button";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { getErrorMessage } from "../../../logic/messages";
import { addMessage } from "../../../logic/redux/messageSlice";
import { useDispatch } from "react-redux";

const _Auth = () => {
  const { register, trigger, formState } = useForm();

  const [isSignUp, setSignUp] = React.useState(false);
  const getAuthBtnLabel = (x) => (x ? "Sign up" : " Sign in");

  const dispatch = useDispatch();

  const onSignIn = () => alert("sign in");
  const onRegister = () => alert("sign up");

  React.useEffect(() => {
    if (formState.errors.email) {
      dispatch(addMessage(getErrorMessage("email required")));
    }
    if (formState.errors.password) {
      dispatch(addMessage(getErrorMessage("password required")));
    }
    if (formState.errors.passwordAgain) {
      dispatch(addMessage(getErrorMessage("password is not same")));
    }
  }, [formState]);

  return (
    <TitledContainer title={getAuthBtnLabel(isSignUp)}>
      <React.Fragment>
        <Input
          title={"email"}
          register={register("email", {
            required: true,
          })}
        />
        <Input
          title={"password"}
          register={register("password", {
            required: true,
          })}
        />
        {isSignUp && (
          <Input
            title={"password again"}
            register={register("passwordAgain", {
              validate: (v, formValues) => v === formValues.password,
            })}
          />
        )}
      </React.Fragment>

      <div className="auth-buttons">
        <Button
          selected={true}
          large={true}
          onClick={async () => {
            const valid = await trigger();
            if (!valid) return;

            if (isSignUp) {
              onRegister();
              return;
            }
            onSignIn();
            //do sign in
          }}
        >
          {getAuthBtnLabel(isSignUp)}
        </Button>

        <Button
          onClick={async () => {
            setSignUp(isSignUp ? false : true);
          }}
        >
          To {getAuthBtnLabel(!isSignUp)}
        </Button>
      </div>
    </TitledContainer>
  );
};
const Auth = React.memo(_Auth);
export default Auth;
