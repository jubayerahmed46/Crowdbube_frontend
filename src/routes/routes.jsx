import { createBrowserRouter } from "react-router-dom";
import { Home, MainLayout } from ".";
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
    ],
  },
]);
