import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from ".";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
]);
