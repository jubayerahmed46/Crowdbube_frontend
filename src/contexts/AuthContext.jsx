import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../authentication/signup&login/firebase.config";

const AuthContext = createContext();

const AuthProvder = ({ children }) => {
  const createNewAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <AuthContext.Provider value={{ createNewAccount }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvder };
