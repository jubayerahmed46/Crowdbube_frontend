import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivetRoute({ children }) {
  const { user } = useAuth();
  const { pathname } = useLocation();

  if (!user) {
    return <Navigate to={"/auth/login"} state={pathname} />;
  }
  return <>{children}</>;
}

export default PrivetRoute;
