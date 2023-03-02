import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../utils";
import { getUserToken, useAuth } from "./auth";
import { getErrorMessage, getInfoMessage } from "./messages";
import { addMessage } from "./redux/messageSlice";

const useEntities = (table) => {
  const [entry, setEntry] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [hasNext, setNext] = React.useState(true);
  const [retrivedCount, setRetrivedCount] = React.useState(0);

  const { logOut } = useAuth();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { timediaryId } = useParams("timediaryId");

  const accessParams = {
    userToken: getUserToken(),
    timediaryId: timediaryId,
  };

  const onInvalidToken = (message) => {
    if (message.title !== "Please relogin") return;

    dispatch(addMessage(getErrorMessage(message.title)));
    logOut();
    navigate("/");
  };

  const retriveEntry = (offset) => {
    if (!hasNext) return;
    fetch(
      `${API_URL}/${table}/available?${new URLSearchParams({
        ...accessParams,
        offset: offset,
      })}`
    )
      .then((r) => r.json())
      .then((content) => {
        onInvalidToken(content);
        const entries = content.entries.filter(
          (x) => entry.find((y) => y.id === x.id) === undefined
        );
        setEntry([...entry, ...entries]);

        setNext(content.hasNext);
        setRetrivedCount(retrivedCount + entries.length);

        setLoading(false);
      });
  };

  const addEntry = (_entry) => {
    fetch(`${API_URL}/${table}/add?${new URLSearchParams(accessParams)}`, {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(_entry),
    })
      .then((r) => r.json())
      .then((content) => {
        onInvalidToken(content);
        setEntry([...entry, content.entry]);
        dispatch(addMessage(getInfoMessage(content.title)));
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
        setEntry(entry.filter((x) => x.id !== entryId));

        console.log(retrivedCount);
        if (entry.length === retrivedCount - 10) {
          setNext(true);
        }
      });
  };

  const updateEntry = (entryId, values) => {
    fetch(
      `${API_URL}/${table}/${entryId}?${new URLSearchParams(accessParams)}`,
      {
        method: "POST",
        body: JSON.stringify(values),
      }
    )
      .then((r) => r.json())
      .then((content) => {
        onInvalidToken(content);
        if (content.type === "error") {
          dispatch(addMessage(getErrorMessage(content.title)));

          return;
        }
        dispatch(addMessage(getInfoMessage(content.title)));
        setEntry(
          entry.map((x) => {
            if (x.id === entryId) {
              return values;
            }
            return x;
          })
        );
      });
  };

  const retriveDays = (year, month) => {
    fetch(
      `${API_URL}/timeline/${year}/${month}?${new URLSearchParams(
        accessParams
      )}`
    )
      .then((r) => r.json())
      .then((content) => {
        onInvalidToken(content);
        if (content.type) {
          dispatch(addMessage(getErrorMessage(content.title)));
          return;
        }
        const days = new Date(year, month + 1, 0).getDate();

        const mappedDays = Array(days)
          .fill(0)
          .map((_, index) => {
            const foundedDay = content.find((x) => x.day === index);
            if (foundedDay !== undefined) return foundedDay;
            return { day: index };
          });

        setEntry(mappedDays);

        setLoading(false);
      });
  };

  return {
    entry,
    loading,
    hasNext,
    retriveEntry,
    addEntry,
    removeEntry,
    updateEntry,
    retriveDays,
    setEntry,
  };
};

export default useEntities;
