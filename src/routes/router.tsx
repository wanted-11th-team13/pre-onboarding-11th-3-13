import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import NotFound from "../Page/NotFound";
import App from "../App";
import Issue from "../Page/Issue";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <App /> },
      {
        path: "/:issueNumber",
        element: <Issue />,
      },
      { path: "/notfound", element: <NotFound /> },
    ],
  },
]);
