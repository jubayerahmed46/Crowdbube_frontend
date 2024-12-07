import { createBrowserRouter } from "react-router-dom";
import { Home, MainLayout, AuthLayout, Login, SignUp } from ".";
import ErrPage from "../err/ErrPage";

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
            path: "/auth/login",
            element: <Login />,
          },
          {
            path: "/auth/signup",
            element: <SignUp />,
          },
        ],
      },
    ],
  },
]);
