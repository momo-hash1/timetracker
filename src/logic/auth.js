import { useDispatch } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import { addMessage } from "../logic/redux/messageSlice";
import { getErrorMessage } from "../logic/messages";
import React from "react";
import { API_URL } from "../utils";

const isAuth = () => {
  return localStorage.getItem("userToken") !== null;
};

const useAuth = () => {
  const dispatch = useDispatch();
  const [isPending, setPending] = React.useState(false);
  const navigate = useNavigate();

  const signIn = (userInfo) => {
    setPending(true);
    fetch(`${API_URL}/user/auth`, {
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
        localStorage.setItem("userToken", content.userToken);
        navigate("/timediary");
        setPending(false);
        return;
      })
      .catch(() => {
        dispatch(addMessage(getErrorMessage("error occur")));
        setPending(false);
      });
  };

  const logOut = () => {
    localStorage.removeItem("userToken");
    navigate("/");
  };

  return { signIn, isPending, logOut };
};

const userAccess = () => {
  return !isAuth() && redirect("/");
};

const getUserToken = () => {
  return localStorage.getItem("userToken");
};

const indexRedirect = () => {
  return isAuth() && redirect("/timediary");
};

const getUser = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return user;
};

export { useAuth, userAccess, indexRedirect, getUser, isAuth, getUserToken };
