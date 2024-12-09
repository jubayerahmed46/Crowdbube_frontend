import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { FaCircleXmark } from "react-icons/fa6";
import LogOut from "../authentication/signup&login/LogOut";
import { Link } from "react-router-dom";

function MobileBar({
  mobileMenuOpen,
  setMobileMenuOpen,
  handleThemeToggle,
  themeRef,
  user,
  isAlertOpen,
  alertRef,
}) {
  const closeMobileBar = () => {
    setMobileMenuOpen(false);
  };
  return (
    <Dialog
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
      className="lg:hidden overflow-y-scroll"
    >
      <div className="fixed inset-0 z-10 " />
      <DialogPanel className="fixed dark:bg-sunset bg-winter inset-y-0 right-0 z-10 w-full overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <img alt="" src="/assets/logo.png" className="h-12 w-auto" />
          </a>
          <button
            type="button"
            onClick={closeMobileBar}
            className="-m-2.5 rounded-md p-2.5 dark:text-dark"
          >
            <XMarkIcon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:dark:bg-dark/25 dark:text-dark text-light  hover:bg-gray-50"
              >
                Home
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:dark:bg-dark/25 dark:text-dark text-light  hover:bg-gray-50"
              >
                All Campaign
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:dark:bg-dark/25 dark:text-dark text-light  hover:bg-gray-50"
              >
                Add New Campaign
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:dark:bg-dark/25 dark:text-dark text-light  hover:bg-gray-50"
              >
                My Campaign
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:dark:bg-dark/25 dark:text-dark text-light  hover:bg-gray-50"
              >
                My Donations
              </a>
            </div>

            <div className=" flex flex-col items-center">
              <label className="swap swap-rotate my-4 text-left dark:text-dark shadow-md rounded-full p-2">
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
                <details open={isAlertOpen} className="relative">
                  <summary
                    className="list-none  mt-5 p-3 rounded-lg border-2 border-mySecondery/15 flex flex-col justify-center items-center"
                    onMouseOver={() => setIsAlertOpen(true)}
                  >
                    <h2 className="text-sm mb-2 font-semibold">Profile</h2>
                    <img
                      src={user?.photoURL}
                      className="md:h-10 h-8 ring-2 ring-myPurtiul cursor-pointer aspect-square rounded-full"
                    />
                  </summary>
                  <div
                    ref={alertRef}
                    className="absolute -top-14 border p-12 rounded-md dark:bg-sunset z-20 dark:text-gray-300 bg-white right-5 shadow-md "
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
              ) : (
                <div className="flex" onClick={closeMobileBar}>
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
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}

export default MobileBar;
