import { redirect } from "react-router-dom";

const _isAuth = () => {
  return true;
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

export { useAuth, userAccess, indexRedirect };
