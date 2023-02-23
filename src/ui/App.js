import TimeDiary from "./pages/timeDiary";
import TimeDiaryPage from "./pages/timeDiaryPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages";
import React from "react";
import { indexRedirect, userAccess } from "../logic/auth";
import { messageContext } from "./components/context";

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
  return (
    <messageContext.Provider value={{ messages, setMessages }}>
      <RouterProvider router={router} />
    </messageContext.Provider>
  );
};

export default App;
