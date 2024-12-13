/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";

function PrivetRoute({ children }) {
  const { user, loader } = useAuth();
  const location = useLocation();

  if (loader) {
    return <Loader />;
  }
  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location.pathname }} />;
  }
  return <>{children}</>;
}

export default PrivetRoute;
