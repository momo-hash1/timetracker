import React from "react";
import { API_URL } from "../utils";
import { getUserToken } from "./auth";

const useEntities = (table) => {
  const [entry, setEntry] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const retriveEntry = (offset, timeDiary = null) => {
    fetch(
      `${API_URL}/${table}/available?${new URLSearchParams({
        userToken: getUserToken(),
        timeDiary: timeDiary,
        offset: offset,
      })}`
    )
      .then((r) => r.json())
      .then((content) => {
        setEntry([...content]);
        setLoading(false);
      });
  };

  return { entry, retriveEntry, loading };
};

export default useEntities;
