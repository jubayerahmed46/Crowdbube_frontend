import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  MainLayout,
  AuthLayout,
  Login,
  SignUp,
  ErrPage,
  Details,
  PrivetRoute,
  AddCampaign,
  AllCampaign,
  MyCampaign,
  MyDonations,
} from ".";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:4601/allCampaign?noQuery=true"),
      },
      {
        path: "addCampaign",
        element: (
          <PrivetRoute>
            <AddCampaign />
          </PrivetRoute>
        ),
      },
      {
        path: "allCampaign",
        element: (
          <PrivetRoute>
            <AllCampaign />
          </PrivetRoute>
        ),
        loader: () => fetch("http://localhost:4601/allCampaign"),
      },
      {
        path: "myCampaign",
        element: (
          <PrivetRoute>
            <MyCampaign />
          </PrivetRoute>
        ),
      },
      {
        path: "myDonations",
        element: <MyDonations />,
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
        loader: ({ params }) =>
          fetch(`http://localhost:4601/allCampaign/${params.id}`),
      },
    ],
  },
]);
