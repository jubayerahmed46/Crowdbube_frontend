import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

function GoogleSignIn() {
  const { signInWithGoogle } = useAuth();
  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      toast.success(<h2 className="text-sm">Login Successfull</h2>);
    });
  };
  return (
    <div className="flex justify-center">
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center mt-3  border-2 border-mySecondery/60 font-bold rounded-lg px-5 py-2 text-xl"
      >
        <span className="mr-3">Sign in With</span>
        <span>
          <FaGoogle />
        </span>
      </button>
    </div>
  );
}

export default GoogleSignIn;
