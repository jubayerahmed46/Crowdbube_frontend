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
import PrivetAuths from "../privetRoutes/PrivetAuths";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://crowdcubebackend.vercel.app/allCampaign?noQuery=true"),
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
        loader: () => fetch("https://crowdcubebackend.vercel.app/allCampaign"),
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
        element: (
          <PrivetRoute>
            {" "}
            <MyDonations />
          </PrivetRoute>
        ),
      },
      {
        path: "auth",
        element: (
          <PrivetAuths>
            <AuthLayout />
          </PrivetAuths>
        ),
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
          fetch(`https://crowdcubebackend.vercel.app/allCampaign/${params.id}`),
      },
    ],
  },
]);
