import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import GoogleSignIn from "./GoogleSignIn";
import toast from "react-hot-toast";

function SignUp() {
  const { createNewAccount } = useAuth();
  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailErr("");
    setPassErr("");

    const form = e.target;

    const displayName = form.fullName.value;
    const email = form.email.value;
    const photoURL = form.photoUrl.value;
    const password = form.password.value;

    function passValidation() {
      const regexLogic =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&])(?=\S+$)(?=.*\d).{6,12}$/;

      const testCase = regexLogic.test(password.trim());
      return testCase;
    }

    if (!passValidation()) {
      setPassErr(
        "the password must be 6 to 12 character and includes at least - one Upper and Lowercase, one disit, one special char and no white spaces!"
      );
      return;
    }

    createNewAccount(email, password)
      .then(({ user }) => {
        updateProfile(user, { displayName, photoURL }).then(() => {
          navigate("/");
          toast.success(<h2 className="text-sm">SignUp Successfull</h2>);
        });
      })
      .catch((err) => {
        console.log(err.message);
        setEmailErr(err.message);
      });
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-3xl font-bold tracking-tight ">
          Create New Account
        </h2>
        <GoogleSignIn />
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md ">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName" className="block text-sm/6 font-medium ">
              FullName
            </label>
            <div className="mt-2">
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="John Doe"
                required
                autoComplete="fullName"
                className="block w-full h-12 rounded-md dark:bg-black/35 dark:text-neutral-200 bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-mySecondery sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium ">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@gmail.com"
                required
                autoComplete="email"
                className="block w-full h-12 rounded-md dark:bg-black/35 dark:text-neutral-200 bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-mySecondery sm:text-sm/6"
              />
            </div>
            <p className="text-sm text-error mt-1"> {emailErr && emailErr}</p>
          </div>

          <div>
            <label htmlFor="photoUrl" className="block text-sm/6 font-medium ">
              photoURL
            </label>
            <div className="mt-2">
              <input
                id="photoUrl"
                name="photoUrl"
                type="text"
                placeholder="http://example.png"
                required
                autoComplete="photoUrl"
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
                // type="password"
                placeholder="password"
                required
                autoComplete="current-password"
                className="block w-full h-12 rounded-md dark:bg-black/35 bg-white px-3 py-1.5 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-mySecondery sm:text-sm/6"
              />
            </div>
            <p className="text-sm text-error mt-1"> {passErr && passErr}</p>
          </div>

          <div>
            <button
              type="submit"
              className="flex h-12 w-full justify-center rounded-md bg-mySecondery px-3 items-center text-sm/6 font-semibold text-white shadow-sm hover:bg-mySecondery/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mySecondery"
            >
              Create
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-400">
          Already have an Account -
          <Link to={"/auth/login"}>
            <span className="font-semibold text-mySecondery hover:text-mySecondery/95 hover:underline">
              Login
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
