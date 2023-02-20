import React from "react";
import TitledContainer from "../containers/TitledContainer";
import Button from "../widgets/Button";
import Input from "../widgets/Input";
import { useForm } from "react-hook-form";

const Auth = (props) => {
  const { register, trigger, formState } = useForm();

  const [isSignUp, setSignUp] = React.useState(false);
  const getAuthBtnLabel = (x) => (x ? "Sign up" : " Sign in");

  const onSignIn = () => alert("sign in");
  const onRegister = () => alert("sign up");

  React.useEffect(() => {
    if (formState.errors.email) {
      alert("email required");
    }
    if (formState.errors.password) {
      alert("password required");
    }
    if (formState.errors.passwordAgain) {
      alert("password is not same");
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
        <div
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
          <Button selected={true} large={true}>
            {getAuthBtnLabel(isSignUp)}
          </Button>
        </div>
        <div
          onClick={() => {
            setSignUp(isSignUp ? false : true);
          }}
        >
          <Button>To {getAuthBtnLabel(!isSignUp)}</Button>
        </div>
      </div>
    </TitledContainer>
  );
};

export default Auth;
