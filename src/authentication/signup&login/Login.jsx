import { Link } from "react-router-dom";
import GoogleSignIn from "./GoogleSignIn";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Login() {
  const { emailPasswordLogin } = useAuth();
  const [processing, setProccesing] = useState(false);
  const [errMess, setErrMess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setProccesing(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    emailPasswordLogin(email, password)
      .then(() => {
        toast.success(<h2 className="text-sm">Login Successfull</h2>);
      })
      .catch((err) => {
        "login failed", err.message;
        setErrMess("Invalid Email and Password please check and try again!");
      })
      .finally(() => {
        setProccesing(false);
      });
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-3xl font-bold tracking-tight ">
          Login
        </h2>
        <GoogleSignIn />
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md ">
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium ">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="email"
                required
                autoComplete="email"
                className="block w-full h-12 rounded-md dark:bg-black/35 dark:text-neutral-200 bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-mySecondery sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium "
              >
                Password
              </label>
            </div>

            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                required
                autoComplete="current-password"
                className="block w-full h-12 rounded-md dark:bg-black/35 bg-white px-3 py-1.5 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-mySecondery sm:text-sm/6"
              />
            </div>
            <p className="text-sm text-error">{errMess}</p>
            <div>
              <p className="text-sm text-mySecondery font-semibold text-right mt-2 hover:underline cursor-pointer">
                forget password
              </p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex h-12 w-full justify-center rounded-md bg-mySecondery px-3 items-center text-sm/6 font-semibold text-white shadow-sm hover:bg-mySecondery/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mySecondery"
            >
              login
              {processing && (
                <span className="loading loading-spinner loading-xs ml-2"></span>
              )}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-400">
          create a new account -
          <Link to={"/auth/signup"}>
            <span className="font-semibold text-mySecondery hover:text-mySecondery/95 hover:underline">
              SignUp
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
