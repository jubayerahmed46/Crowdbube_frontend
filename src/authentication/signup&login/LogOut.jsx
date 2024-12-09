import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useCallback } from "react";
import useTheme from "../../hooks/useTheme";

function LogOut() {
  const { signOutUser, setUser } = useAuth();
  const { theme } = useTheme();

  const signOutProccesing = useCallback(
    () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          signOutUser()
            .then(() => {
              setUser(null);
              resolve();
            })
            .catch(() => {
              reject();
            });
        }, 1000);
      }),
    []
  );

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will automatically signout and couldn't able to use our all features!",
      icon: "warning",
      background: theme !== "winter" ? "#1e1e20" : "",
      color: theme !== "winter" ? "#c0c0c0" : "",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#747576",
      confirmButtonText: "Yes, logout",
    }).then((result) => {
      if (result.isConfirmed) {
        toast.promise(signOutProccesing(), {
          background: theme !== "winter" ? "#1e1e20" : "",
          color: theme !== "winter" ? "#c0c0c0" : "",
          loading: <b className="text-sm">Wait a second...</b>,
          success: (
            <b
              className="text-sm
              "
            >
              Logout successfully
            </b>
          ),
          error: <b>Logout failed!</b>,
        });
      } else {
        toast.error(<h2 className="text-sm">Logout cancelled!</h2>);
      }
    });
  };
  return (
    <button
      onClick={handleLogOut}
      className="text-lg font-bold mx-auto w-full bg-mySecondery text-white dark:text-white/90 py-1 px-3"
    >
      LogOut
    </button>
  );
}

export default LogOut;
