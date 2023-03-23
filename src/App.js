import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { AboutMovie } from "./components/AboutMovie";
import { Home } from "./components/Home";
// import { Spinner } from "./components/Spinner";
import { Searched } from "./components/Searched";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // element: <Spinner />,
  },
  {
    path: "about/:id",
    element: <AboutMovie />,
  },
  {
    path: "search/:query",
    element: <Searched />,
  },
  {
    path: "*",
    element: <div>NotFound</div>,
  },
]);
export default router;
