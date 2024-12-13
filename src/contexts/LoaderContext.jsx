/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const LoaderContext = createContext();

function LoaderProvider({ children }) {
  const [loader, setLoader] = useState(true);
  return (
    <LoaderContext.Provider value={{ loader, setLoader }}>
      {children}
    </LoaderContext.Provider>
  );
}

export { LoaderContext, LoaderProvider };
