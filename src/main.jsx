import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root';
import Home from './Components/Pages/HomePage/Home';
import Login from './Components/Pages/Login/Login';
import AuthProvider from './Components/Providers/AuthProvider';
import RegisterPage from './Components/Pages/RegisterPage/RegisterPage'
import ErrorPage from './Components/Pages/ErrorPage/ErrorPage';
import ServiceDetails from './Components/Pages/ServiceDetails/ServiceDetails';
import Booking from './Components/Pages/Booking/Booking';
import AllService from './Components/Pages/AllService/AllService';
import PrivateRoute from './Components/Routes/PrivateRoute';
import AddService from './Components/Pages/AddService/AddService';
import ManageServices from './Components/Pages/ManageServices/ManageServices';
import UpdateService from './Components/Pages/UpdateService/UpdateService';
import BookedPages from './Components/Pages/BookedPages/BookedPages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        // loader: () => fetch(`${import.meta.env.VITE_API_URL}/services`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <RegisterPage></RegisterPage>
      },
      {
        path: '/service/:id',
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/service/${params.id}`)
      },
      {
        path: '/all-services',
        element: <AllService></AllService>
      },
      {
        path: '/book-service/:id',
        element: <PrivateRoute><Booking></Booking></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/service/${params.id}`)
      },
      {
        path: '/add-service',
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path: '/manage-service',
        element: <PrivateRoute><ManageServices></ManageServices></PrivateRoute>
      },
      {
        path: '/update-service/:id',
        element: <PrivateRoute><UpdateService></UpdateService></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/service/${params.id}`)
      },
      {
        path: '/booked-services',
        element: <PrivateRoute><BookedPages></BookedPages></PrivateRoute>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
