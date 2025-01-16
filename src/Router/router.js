import Register from "../pages/Admin/Register/Register.jsx";
import Login from "../pages/Admin/Login/Login.jsx";
import { adminRouter } from "./adminRouter.js";
import { usersRouter } from "./userRouter.js";


export const router = [

    // Login 
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    // Admin Router
    adminRouter,

    // User Router
    usersRouter


]