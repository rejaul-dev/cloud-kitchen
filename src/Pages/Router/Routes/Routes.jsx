import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/Main";
import AddService from "../../AddService/AddService";
import Blog from "../../Blog/Blog";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Home from "../../Home/Home";
import Login from "../../Login/Login/Login";
import Register from "../../Login/Register/Register";
import Reviews from "../../Reviews/Reviews";
import ServiceDetails from "../../ServiceDetails/ServiceDetails";
import Services from "../../Services/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "service/:id",
        element: <ServiceDetails />,
        loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/add-service",
        element: <AddService />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
