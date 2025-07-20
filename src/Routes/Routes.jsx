import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../Pages/Home/Home.jsx";
import About from "../Pages/About/about.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
