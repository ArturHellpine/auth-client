import {createBrowserRouter} from "react-router-dom";
import {Paths} from "../paths/Paths";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

export const router = createBrowserRouter([
    {
        path: Paths.home,
        element: <Home />
    },
    {
        path: Paths.login,
        element: <Login />
    },
    {
        path: Paths.register,
        element: <Register />
    },
    {
        path: '/*',
        element: <Home />
    }
])