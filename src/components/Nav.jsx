import { useEffect, useRef } from "react";
import { useState } from "react";
import { PopoverGroup } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import useTheme from "../hooks/useTheme";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaCircleXmark } from "react-icons/fa6";
import LogOut from "../authentication/signup&login/LogOut";
import MobileBar from "./MobileBar";

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setTheme, theme } = useTheme();
  const { user } = useAuth();
  const themeRef = useRef();
  const navigate = useNavigate();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const alertRef = useRef();

  useEffect(() => {
    setTheme(themeRef.current.checked);
  }, [setTheme]);

  const handleThemeToggle = () => {
    const html = document.querySelector("html");

    // true -> sunset || false -> winter/light

    html.className = theme ? "light" : "dark";

    setTheme((prev) => !prev);
  };

  return (
    <header
      className={"dark:bg-sunset bg-winter dark:text-neutral-200 text-light"}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex container  items-center justify-between px-4 py-4"
      >
        <div className="flex lg:flex-1">
          <button
            onClick={() => navigate("/")}
            className="hover:bg-gray-500/5 rounded-md -m-1.5 p-1.5"
          >
            <img alt="" src="/assets/logo.png" className="md:h-10 h-8 w-auto" />
          </button>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
          >
            {/* Open main menu */}
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-7 xl:gap-x-12  ">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${
                isActive ? "text-myPrimary font-semibold" : ""
              } text-sm/6 font-semibold `
            }
          >
            Home
          </NavLink>

          <NavLink
            to={"allCampaign"}
            className={({ isActive }) =>
              `${
                isActive ? "text-myPrimary font-semibold" : ""
              } text-sm/6 font-semibold `
            }
          >
            All Campaign
          </NavLink>
          <NavLink
            to={"addCampaign"}
            className={({ isActive }) =>
              `${
                isActive ? "text-myPrimary font-semibold" : ""
              } text-sm/6 font-semibold `
            }
          >
            Add New Campaign
          </NavLink>
          <NavLink
            to={"myCampaign"}
            className={({ isActive }) =>
              `${
                isActive ? "text-myPrimary font-semibold" : ""
              } text-sm/6 font-semibold `
            }
          >
            My Campaign
          </NavLink>
          <NavLink
            to={"myDonations"}
            className={({ isActive }) =>
              `${
                isActive ? "text-myPrimary font-semibold" : ""
              } text-sm/6 font-semibold `
            }
          >
            My Donations
          </NavLink>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
          <label className="swap swap-rotate mr-5 border dark:border-gray-600 p-1 rounded-full">
            <input
              type="checkbox"
              onChange={handleThemeToggle}
              ref={themeRef}
            />

            {/* sun icon */}
            <svg
              className="swap-on h-7 w-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off h-7 w-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {user ? (
            <div className="relative">
              <details open={isAlertOpen}>
                <summary
                  className="list-none"
                  onMouseOver={() => setIsAlertOpen(true)}
                >
                  <img
                    src={user?.photoURL}
                    className="md:h-8 h-6 ring-2 ring-myPurtiul cursor-pointer aspect-square rounded-full"
                  />
                </summary>
                <div
                  ref={alertRef}
                  className="absolute top-14  border p-12 rounded-md dark:bg-sunset dark:text-gray-300 bg-white right-5 shadow-md z-50 "
                >
                  <button
                    onClick={() => setIsAlertOpen(false)}
                    className=" absolute top-2 right-2 text-xl hover:text-myPrimary text-mySecondery cursor-pointer"
                  >
                    <FaCircleXmark />
                  </button>
                  <h2 className="md:text-xl text-lg w-full text-nowrap font-bold">
                    Name: {user?.displayName}
                  </h2>
                  <LogOut />
                </div>
              </details>
            </div>
          ) : (
            <>
              <Link to={"/auth/login"}>
                <button
                  className={
                    " bg-myPrimary hover:bg-[#ff5708ce] text-white font-bold rounded-tl-md rounded-bl-md md:px-4 px-2 md:py-2 py-1 text-lg "
                  }
                >
                  Log in
                </button>
              </Link>
              <Link to={"/auth/signup"}>
                <button
                  className={
                    " bg-[#ff5708ce] hover:bg-myPrimary text-white rounded-tr-md rounded-br-md font-bold md:px-4 px-2 md:py-2 py-1 text-lg "
                  }
                >
                  Sign up
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
      <MobileBar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleThemeToggle={handleThemeToggle}
        themeRef={themeRef}
        user={user}
        setIsAlertOpen={setIsAlertOpen}
        isAlertOpen={isAlertOpen}
        alertRef={alertRef}
      />
    </header>
  );
}

export default Nav;
