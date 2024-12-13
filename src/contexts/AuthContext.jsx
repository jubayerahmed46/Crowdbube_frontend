/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../authentication/firebase.config";
import useLoader from "../hooks/useLoader";

const AuthContext = createContext();

const provider = new GoogleAuthProvider();

function AuthProvder({ children }) {
  const [user, setUser] = useState(null);
  const { loader, setLoader } = useLoader();
  useEffect(() => {
    const authObserver = onAuthStateChanged(auth, (userCredetial) => {
      setLoader(false);
      if (userCredetial) {
        userCredetial;
        setUser(userCredetial);
      }
    });

    return () => authObserver(); // unmount the observer
  }, []);

  // google signin

  const signInWithGoogle = async () => {
    setLoader(true);
    return await signInWithPopup(auth, provider);
  };

  // emailPassword login
  const emailPasswordLogin = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createNewAccount = async (email, password) => {
    setLoader(true);
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  // logout
  const signOutUser = async () => {
    return await signOut(auth);
  };
  return (
    <AuthContext.Provider
      value={{
        createNewAccount,
        signInWithGoogle,
        user,
        setUser,
        signOutUser,
        emailPasswordLogin,
        loader,
        setLoader,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvder };
