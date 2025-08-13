import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Home/Home";
import About from "../Home/Pages/About/About";
import Skills from "../Home/Pages/Skills/Skills";
import Journey from "../Home/Pages/Journey/Journey";
import Projects from "../Home/Pages/Projects/Projects";
import Connect from "../Home/Pages/Connect/Connect";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "/about",
        Component: About,
      },
      {
        path: "/skills",
        Component: Skills,
      },
      {
        path: "/journey",
        Component: Journey,
      },
      {
        path: "/projects",
        Component: Projects,
      },
      {
        path: "/connect",
        Component: Connect,
      },
    ],
  },
]);
