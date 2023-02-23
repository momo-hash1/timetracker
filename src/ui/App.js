import TimeDiary from "./pages/timeDiary";
import TimeDiaryPage from "./pages/timeDiaryPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages";
import React from "react";
import { indexRedirect, userAccess } from "../logic/auth";
import {Provider} from "react-redux"
import store from "../logic/redux/store";

const App = () => {
  const [messages, setMessages] = React.useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      loader: indexRedirect,
    },
    {
      path: "timediary/:timediaryId",
      element: <TimeDiary />,
      loader: userAccess,
    },
    {
      path: "/timediary",
      element: <TimeDiaryPage />,
      loader: userAccess,
    },
  ]);
  return <Provider store={store}><RouterProvider router={router} /></Provider> ;
};

export default App;
