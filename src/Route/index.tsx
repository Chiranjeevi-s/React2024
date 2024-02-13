import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/login";
import LazyLoading from "../Components/Lazy Loading Components/lazyloading";
import ContextAPI from "../Components/context API/contextAPI";

const COMPO_ROUTER = [
    {
        path:'',
        element:<Login />
    },
    {
        path:'/lazy',
        element:<LazyLoading />
    },
    {
        path:'/context',
        element:<ContextAPI />
    }
]

const route = createBrowserRouter([...COMPO_ROUTER])

export {route}