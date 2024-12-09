import {
  createUserWithEmailAndPassword,
  getRedirectResult,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../authentication/firebase.config";

const AuthContext = createContext();

const provider = new GoogleAuthProvider();

function AuthProvder({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const authObserver = onAuthStateChanged(auth, (userCredetial) => {
      if (userCredetial) {
        console.log(userCredetial);
        setUser(userCredetial);
      }
    });

    return () => authObserver(); // unmount the observer
  }, []);

  // google signin

  const signInWithGoogle = async () => {
    return await signInWithPopup(auth, provider);
  };

  // emailPassword login
  const emailPasswordLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createNewAccount = async (email, password) => {
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvder };
