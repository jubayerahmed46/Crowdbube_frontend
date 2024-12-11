/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivetRoute({ children }) {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();

  if (!user && loading) {
    return <Navigate to={"/auth/login"} state={pathname} />;
  }
  return <>{children}</>;
}

export default PrivetRoute;
