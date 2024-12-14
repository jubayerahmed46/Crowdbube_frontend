/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivetAuths({ children }) {
  const { user } = useAuth();

  if (user) {
    return <Navigate to={"/"} />;
  }
  return { children };
}

export default PrivetAuths;
