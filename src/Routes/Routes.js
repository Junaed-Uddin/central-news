import { createBrowserRouter } from "react-router-dom";
import Categories from "../Pages/Categories/Categories";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import Main from "../layout/Main";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import TermsAndConditions from "../Pages/Others/TermsAndConditions";
import Profile from "../Pages/Others/Profile";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://central-media-server.vercel.app/home')
            },
            {
                path: 'home',
                element: <Home></Home>,
                loader: () => fetch('https://central-media-server.vercel.app/home')
            },
            {
                path: '/category/:id',
                loader: ({ params }) => {
                    return fetch(`https://central-media-server.vercel.app/category/${params.id}`)
                },
                element: <Categories></Categories>
            },
            {
                path: '/news/:id',
                loader: ({ params }) => {
                    return fetch(`https://central-media-server.vercel.app/news/${params.id}`)
                },
                element: <PrivateRoute><News></News></PrivateRoute>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
        ]
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
        path: 'login',
        element: <Login></Login>
    },

])