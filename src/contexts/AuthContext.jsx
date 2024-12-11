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

const AuthContext = createContext();

const provider = new GoogleAuthProvider();

function AuthProvder({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const authObserver = onAuthStateChanged(auth, (userCredetial) => {
      if (userCredetial) {
        console.log(userCredetial);
        setUser(userCredetial);
        setLoading(false);
      }
    });

    return () => authObserver(); // unmount the observer
  }, []);

  // google signin

  const signInWithGoogle = async () => {
    setLoading(true);
    return await signInWithPopup(auth, provider);
  };

  // emailPassword login
  const emailPasswordLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createNewAccount = async (email, password) => {
    setLoading(true);
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
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvder };
