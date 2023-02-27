import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../utils";
import { getUserToken, useAuth } from "./auth";
import { getErrorMessage, getInfoMessage } from "./messages";
import { addMessage } from "./redux/messageSlice";

const useEntities = (table, needUpdate = () => {}) => {
  const [entry, setEntry] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const {logOut} = useAuth()

  const navigate = useNavigate()

  const dispatch = useDispatch();

  const { timediaryId } = useParams("timediaryId");

  const accessParams = {
    userToken: getUserToken(),
    timediaryId: timediaryId,
  };

  const onInvalidToken = (message) => {
    if (message.title !== "Please relogin")
      return;

    dispatch(addMessage(getErrorMessage(message.title)));
    logOut()
    navigate("/")
  };

  const retriveEntry = (offset) => {
    fetch(
      `${API_URL}/${table}/available?${new URLSearchParams({
        ...accessParams,
        offset: offset,
      })}`
    )
      .then((r) => r.json())
      .then((content) => {
        onInvalidToken(content);
        setEntry([...content]);
        setLoading(false);
      });
  };

  const addEntry = (entry) => {
    fetch(`${API_URL}/${table}/add?${new URLSearchParams(accessParams)}`, {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(entry),
    })
      .then((r) => r.json())
      .then((content) => {
        onInvalidToken(content);
        dispatch(addMessage(getInfoMessage(content.title)));
        needUpdate();
      });
  };

  const removeEntry = (entryId) => {
    fetch(
      `${API_URL}/${table}/${entryId}?${new URLSearchParams(accessParams)}`,
      {
        method: "DELETE",
      }
    )
      .then((r) => r.json())
      .then((content) => {
        onInvalidToken(content);
        dispatch(addMessage(getInfoMessage(content.title)));
        needUpdate();
      });
  };

  return { entry, loading, retriveEntry, addEntry, removeEntry };
};

export default useEntities;
