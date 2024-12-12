/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivetRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <h2>Loading............</h2>;
  }
  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location.pathname }} />;
  }
  return <>{children}</>;
}

export default PrivetRoute;
