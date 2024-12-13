import { useContext } from "react";
import { LoaderContext } from "../contexts/LoaderContext";

function useLoader() {
  return useContext(LoaderContext);
}

export default useLoader;
