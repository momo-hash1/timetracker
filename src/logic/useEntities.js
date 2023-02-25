import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { API_URL } from "../utils";
import { getUserToken } from "./auth";
import { getInfoMessage } from "./messages";
import { addMessage } from "./redux/messageSlice";

const useEntities = (table) => {
  const [entry, setEntry] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const dispatch = useDispatch();

  const { timediaryId } = useParams("timediaryId");

  const accessParams = {
    userToken: getUserToken(),
    timediaryId: timediaryId,
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
        setEntry([...content]);
        setLoading(false);
      });
  };

  const addEntry = (entry, needUpdate = () => {}) => {
    fetch(`${API_URL}/${table}/add?${new URLSearchParams(accessParams)}`, {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(entry),
    })
      .then((r) => r.json())
      .then((content) => {
        dispatch(addMessage(getInfoMessage(content.title)));
        needUpdate()
      });
  };

  return { entry, retriveEntry, loading, addEntry };
};

export default useEntities;
