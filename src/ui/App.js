import TimeDiary from "./pages/timeDiary";
import TimeDiaryPage from "./pages/timeDiaryPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages";
import { indexRedirect, userAccess } from "../logic/auth";

const App = () => {
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
  return <RouterProvider router={router} />;
};

export default App;
