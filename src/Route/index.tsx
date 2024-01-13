import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/login";

const COMPO_ROUTER = [
    {
        path:'',
        element:<Login />
    }
]

const route = createBrowserRouter([...COMPO_ROUTER])

export {route}