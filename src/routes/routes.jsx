import { createBrowserRouter } from "react-router-dom";
import { Home, MainLayout, AuthLayout, Login, SignUp } from ".";
import ErrPage from "../err/ErrPage";
import Details from "../components/Details";
import PrivetRoute from "../privetRoutes/PrivetRoute";
import AddCampaign from "../pages/AddCampaign/AddCampaign";
import AllCampaign from "../pages/AllCampaign/AllCampaign";
import MyCampaign from "../pages/myCampaign/MyCampaigns";
import MyDonations from "../pages/myDonation/MyDonations";

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
        path: "addCampaign",
        element: (
          <PrivetRoute>
            <AddCampaign />
          </PrivetRoute>
        ),
      },
      {
        path: "allCampaign",
        element: <AllCampaign />,
      },
      {
        path: "myCampaign",
        element: <MyCampaign />,
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
      },
    ],
  },
]);
