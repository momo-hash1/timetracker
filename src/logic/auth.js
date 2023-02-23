import { redirect } from "react-router-dom";

const _isAuth = () => {
  return sessionStorage.getItem("userToken") !== null;
};

const useAuth = () => {
  const isAuth = _isAuth;
  return { isAuth };
};

const userAccess = () => {
  return !_isAuth() && redirect("/");
};

const indexRedirect = () => {
  return _isAuth() && redirect("/timediary");
};

const getUser = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return user;
};

export { useAuth, userAccess, indexRedirect, getUser };
