import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import useLoader from "../hooks/useLoader";
import Loader from "../components/Loader";

function MainLayout() {
  const { loader } = useLoader();
  console.log(loader);
  return (
    <div className="relative">
      {loader ? (
        <Loader />
      ) : (
        <>
          <Nav />
          <div className=" dark:bg-sunset bg-winter dark:*:text-dark text-light">
            <div className="container mx-auto p-3   min-h-80">
              <Outlet />
            </div>
          </div>
          <Footer />
          <Toaster position="top-center" reverseOrder={false} />
        </>
      )}
    </div>
  );
}

export default MainLayout;
