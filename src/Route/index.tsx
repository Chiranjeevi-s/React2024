import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/login";
import LazyLoading from "../Components/Lazy Loading Components/lazyloading";

const COMPO_ROUTER = [
    {
        path:'',
        element:<Login />
    },
    {
        path:'/lazy',
        element:<LazyLoading />
    }
]

const route = createBrowserRouter([...COMPO_ROUTER])

export {route}