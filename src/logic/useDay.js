import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { API_URL } from "../utils";
import { getUserToken } from "./auth";
import { getErrorMessage, getInfoMessage } from "./messages";
import { addMessage } from "./redux/messageSlice";

const useDay = () => {
  const [entry, setEntry] = React.useState([]);
  const { timediaryId } = useParams("timediaryId");
  const dispatch = useDispatch();

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
            const foundedDay = content.find((x) => x.day === index + 1);
            if (foundedDay !== undefined) {
              return { ...foundedDay, id: index };
            } else {
              return { day: index + 1, minutes: 0, id: index };
            }
          })

        setEntry(mappedDays);
      });
  };

  const updateDay = (date, changeValue, isUpdate) => {
    delete changeValue.Task;
    fetch(
      `${API_URL}/timeline/${date.year}/${date.month}/${
        date.day
      }?${new URLSearchParams(accessParams)}`,
      {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),

        body: JSON.stringify(changeValue),
      }
    )
      .then((r) => r.json())
      .then((content) => {
        onInvalidToken(content);
        if (content.type) {
          dispatch(addMessage(getInfoMessage(content.title)));
        }
        retriveDays(date.year, date.month);
      });
  };
  return { retriveDays, updateDay, entry };
};

export default useDay;
