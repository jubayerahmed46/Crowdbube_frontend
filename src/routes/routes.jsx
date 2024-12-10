import { createBrowserRouter } from "react-router-dom";
import { Home, MainLayout, AuthLayout, Login, SignUp } from ".";
import ErrPage from "../err/ErrPage";
import Details from "../components/Details";
import PrivetRoute from "../privetRoutes/PrivetRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "signup",
            element: <SignUp />,
          },
        ],
      },
      {
        path: "campaign/:id",
        element: (
          <PrivetRoute>
            <Details />
          </PrivetRoute>
        ),
      },
    ],
  },
]);
