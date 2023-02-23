import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";
import { addMessage } from "../logic/redux/messageSlice";
import { getErrorMessage } from "../logic/messages";
import React from "react";

const isAuth = () => {
  return sessionStorage.getItem("userToken") !== null;
};

const useAuth = () => {
  const dispatch = useDispatch();
  const [isPending, setPending] = React.useState(false);

  const signIn = (userInfo) => {
    setPending(true);
    fetch("http://127.0.0.1:3000/user/auth", {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(userInfo),
    })
      .then((response) => response.json())
      .then((content) => {
        if (content.type) {
          dispatch(addMessage(content));
          setPending(false);
          return;
        }
        sessionStorage.setItem("userToken", content.userToken);
        setPending(false);
        return;
      })
      .catch(() => {
        dispatch(addMessage(getErrorMessage("error occur")));
        setPending(false);
      });
  };

  return { signIn, isPending };
};

const userAccess = () => {
  return !isAuth() && redirect("/");
};

const indexRedirect = () => {
  return isAuth() && redirect("/timediary");
};

const getUser = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return user;
};

export { useAuth, userAccess, indexRedirect, getUser, isAuth };
