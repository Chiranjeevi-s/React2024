import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/login";
import LazyLoading from "../Components/Lazy Loading Components/lazyloading";
import Debounce from "../Components/debounce";

const COMPO_ROUTER = [
  {
    path: "",
    element: <Login />,
  },
  {
    path: "/lazy",
    element: <LazyLoading />,
  },
  {
    path: "/debounce",
    element: <Debounce />,
  },
];

const route = createBrowserRouter([...COMPO_ROUTER]);

export { route };
