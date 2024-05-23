import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Landing from "../Views/Landing";
import Login from "../Views/Auth/Login";
import Register from "../Views/Auth/Register";
import Main from "../Views/Layouts/Main";
import Dashboard from "../Views/Dashboard";

const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        index: true,
        Component: Landing,
      },
      {
        Component: Login,
        path: "/login",
      },
      {
        Component: Register,
        path: "/register",
      },
      {
        Component: Main,
        path: "/",
        children: [
          {
            Component: Dashboard,
            path: "dashboard",
          },
        ],
      },
    ],
  },
]);

export default router;
